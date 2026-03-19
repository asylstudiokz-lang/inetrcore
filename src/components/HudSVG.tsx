const CX = 200;
const CY = 200;
const COLOR = "#6FE6C1";
const COLOR_DIM = "rgba(111,230,193,0.45)";

/* Generate tick marks array */
function generateTicks() {
  const result = [];
  for (let i = 0; i < 360; i++) {
    const angle = (i - 90) * (Math.PI / 180);
    const outerR = 184;
    const isLong = i % 10 === 0;
    const isMed = i % 5 === 0 && !isLong;
    const innerR = isLong ? 168 : isMed ? 175 : 179;
    const sw = isLong ? 1.8 : isMed ? 1.2 : 0.7;
    const opacity = isLong ? 1 : isMed ? 0.85 : 0.55;
    result.push({
      x1: Number((CX + outerR * Math.cos(angle)).toFixed(4)),
      y1: Number((CY + outerR * Math.sin(angle)).toFixed(4)),
      x2: Number((CX + innerR * Math.cos(angle)).toFixed(4)),
      y2: Number((CY + innerR * Math.sin(angle)).toFixed(4)),
      sw,
      opacity,
    });
  }
  return result;
}

/* SVG arc path from startDeg to endDeg on circle radius r */
function arc(r: number, startDeg: number, endDeg: number) {
  const s = (startDeg - 90) * (Math.PI / 180);
  const e = (endDeg - 90) * (Math.PI / 180);
  const x1 = CX + r * Math.cos(s);
  const y1 = CY + r * Math.sin(s);
  const x2 = CX + r * Math.cos(e);
  const y2 = CY + r * Math.sin(e);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${x1.toFixed(3)} ${y1.toFixed(3)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(3)} ${y2.toFixed(3)}`;
}

/* Small rectangle tab on a circle at given angle */
function tab(r: number, angleDeg: number, w = 10, h = 4) {
  const a = (angleDeg - 90) * (Math.PI / 180);
  const cx = CX + r * Math.cos(a);
  const cy = CY + r * Math.sin(a);
  return `translate(${cx.toFixed(2)}, ${cy.toFixed(2)}) rotate(${angleDeg})`;
}

const TICKS = generateTicks();

interface HudSVGProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function HudSVG({ size = 400, className = "", style }: HudSVGProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes hud-cw  { from { transform: rotate(0deg);    } to { transform: rotate(360deg);  } }
        @keyframes hud-ccw { from { transform: rotate(0deg);    } to { transform: rotate(-360deg); } }
        @keyframes hud-cw2 { from { transform: rotate(0deg);    } to { transform: rotate(360deg);  } }
        @keyframes hud-pulse { 0%,100% { opacity:0.7; } 50% { opacity:1; } }
      `}}></style>

      <svg
        viewBox="0 0 400 400"
        width={size}
        height={size}
        fill="none"
        className={className}
        style={{ overflow: "visible", ...style }}
      >
        <defs>
          {/* Main glow filter */}
          <filter id="hud-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft glow for large circles */}
          <filter id="hud-glow-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial background gradient */}
          <radialGradient id="hud-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#00604a" stopOpacity="0.55" />
            <stop offset="45%"  stopColor="#003828" stopOpacity="0.40" />
            <stop offset="80%"  stopColor="#001a10" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Center inner glow */}
          <radialGradient id="hud-center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#00cf8f" stopOpacity="0.25" />
            <stop offset="60%"  stopColor="#004d30" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Background glow disc ── */}
        <circle cx={CX} cy={CY} r="195" fill="url(#hud-bg)" />
        <circle cx={CX} cy={CY} r="130" fill="url(#hud-center-glow)" />

        {/* ══ GROUP 1: Outer tick ring — rotates CW 28s ══ */}
        <g
          style={{
            transformOrigin: `${CX}px ${CY}px`,
            animation: "hud-cw 28s linear infinite",
          }}
          filter="url(#hud-glow)"
        >
          {/* Outer thin ring */}
          <circle cx={CX} cy={CY} r="186" stroke={COLOR} strokeWidth="0.8" opacity="0.6" />

          {/* Tick marks */}
          {TICKS.map((t, i) => (
            <line
              key={i}
              x1={t.x1} y1={t.y1}
              x2={t.x2} y2={t.y2}
              stroke={COLOR}
              strokeWidth={t.sw}
              opacity={t.opacity}
            />
          ))}

          {/* Cardinal dots on outer ring */}
          {[0, 90, 180, 270].map((deg) => {
            const a = (deg - 90) * (Math.PI / 180);
            return (
              <circle
                key={deg}
                cx={Number((CX + 193 * Math.cos(a)).toFixed(4))}
                cy={Number((CY + 193 * Math.sin(a)).toFixed(4))}
                r="3.5"
                fill={COLOR}
                opacity="1"
              />
            );
          })}

          {/* Cardinal tick strong lines every 30° */}
          {[30, 60, 120, 150, 210, 240, 300, 330].map((deg) => {
            const a = (deg - 90) * (Math.PI / 180);
            return (
              <line
                key={deg}
                x1={Number((CX + 184 * Math.cos(a)).toFixed(4))} y1={Number((CY + 184 * Math.sin(a)).toFixed(4))}
                x2={Number((CX + 162 * Math.cos(a)).toFixed(4))} y2={Number((CY + 162 * Math.sin(a)).toFixed(4))}
                stroke={COLOR} strokeWidth="2" opacity="0.9"
              />
            );
          })}
        </g>

        {/* ══ GROUP 2: Middle broken ring — rotates CCW 40s ══ */}
        <g
          style={{
            transformOrigin: `${CX}px ${CY}px`,
            animation: "hud-ccw 40s linear infinite",
          }}
          filter="url(#hud-glow)"
        >
          {/* 4 arc segments at r=155, each 80° with 10° gaps */}
          {[0, 90, 180, 270].map((startDeg) => (
            <path
              key={startDeg}
              d={arc(155, startDeg + 5, startDeg + 85)}
              stroke={COLOR}
              strokeWidth="2"
              opacity="0.85"
            />
          ))}

          {/* Rectangular tab highlights at offset positions */}
          {[45, 135, 225, 315].map((deg) => {
            const a = (deg - 90) * (Math.PI / 180);
            const tx = CX + 155 * Math.cos(a);
            const ty = CY + 155 * Math.sin(a);
            return (
              <g key={deg} transform={`translate(${tx.toFixed(2)},${ty.toFixed(2)}) rotate(${deg})`}>
                <rect x="-8" y="-3" width="16" height="6" fill="#003d2a" stroke={COLOR} strokeWidth="1.2" rx="1" />
              </g>
            );
          })}

          {/* Thin ring just inside broken arcs */}
          <circle cx={CX} cy={CY} r="148" stroke={COLOR} strokeWidth="1" opacity="0.3" />

          {/* Double-arc segments (thicker outer, thinner inner offset) */}
          {[0, 180].map((startDeg) => (
            <path
              key={`double-${startDeg}`}
              d={arc(160, startDeg + 15, startDeg + 75)}
              stroke={COLOR}
              strokeWidth="4"
              opacity="0.5"
            />
          ))}
        </g>

        {/* ══ GROUP 3: Inner arc pair — rotates CW 55s ══ */}
        <g
          style={{
            transformOrigin: `${CX}px ${CY}px`,
            animation: "hud-cw2 55s linear infinite",
          }}
          filter="url(#hud-glow)"
        >
          {/* 2 large arcs at r=118 (170° each with 10° gaps) */}
          <path d={arc(118, 5, 175)}   stroke={COLOR} strokeWidth="1.5" opacity="0.7" />
          <path d={arc(118, 185, 355)} stroke={COLOR} strokeWidth="1.5" opacity="0.7" />

          {/* Small squares at gap positions */}
          {[0, 90, 180, 270].map((deg) => {
            const a = (deg - 90) * (Math.PI / 180);
            const tx = CX + 118 * Math.cos(a);
            const ty = CY + 118 * Math.sin(a);
            return (
              <g key={deg} transform={`translate(${tx.toFixed(2)},${ty.toFixed(2)}) rotate(${deg})`}>
                <rect x="-4" y="-2.5" width="8" height="5" fill="none" stroke={COLOR} strokeWidth="1.2" />
              </g>
            );
          })}
        </g>

        {/* ══ STATIC: Inner rings and crosshair ══ */}
        <g filter="url(#hud-glow)">
          {/* Ring r=92 */}
          <circle cx={CX} cy={CY} r="92" stroke={COLOR} strokeWidth="1" opacity="0.5" />

          {/* Ring r=65 */}
          <circle cx={CX} cy={CY} r="65" stroke={COLOR} strokeWidth="1" opacity="0.4" />

          {/* Crosshair lines */}
          <line x1={CX - 22} y1={CY} x2={CX - 8}  y2={CY} stroke={COLOR} strokeWidth="1.5" opacity="0.9" />
          <line x1={CX + 8}  y1={CY} x2={CX + 22} y2={CY} stroke={COLOR} strokeWidth="1.5" opacity="0.9" />
          <line x1={CX} y1={CY - 22} x2={CX} y2={CY - 8}  stroke={COLOR} strokeWidth="1.5" opacity="0.9" />
          <line x1={CX} y1={CY + 8}  x2={CX} y2={CY + 22} stroke={COLOR} strokeWidth="1.5" opacity="0.9" />

          {/* Center dot */}
          <circle cx={CX} cy={CY} r="3.5" stroke={COLOR} strokeWidth="1.5" fill="none" opacity="0.9" />
          <circle cx={CX} cy={CY} r="1.2" fill={COLOR} opacity="1" />

          {/* Small inner crosshair ticks */}
          {[0, 90, 180, 270].map((deg) => {
            const a = (deg - 90) * (Math.PI / 180);
            return (
              <line
                key={deg}
                x1={Number((CX + 65 * Math.cos(a)).toFixed(4))} y1={Number((CY + 65 * Math.sin(a)).toFixed(4))}
                x2={Number((CX + 74 * Math.cos(a)).toFixed(4))} y2={Number((CY + 74 * Math.sin(a)).toFixed(4))}
                stroke={COLOR} strokeWidth="2" opacity="0.8"
              />
            );
          })}

          {/* Pulsing ring */}
          <circle
            cx={CX} cy={CY} r="40"
            stroke={COLOR} strokeWidth="0.6" opacity="0.35"
            style={{ animation: "hud-pulse 3s ease-in-out infinite" }}
          />
        </g>
      </svg>
    </>
  );
}
