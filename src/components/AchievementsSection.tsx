import svgPaths from "@/imports/svg-zloupfkzmy";
import { Container } from "./ui/Container";
import dnkImage from "@/assets/58c92785e47e467e7c07a65b51844b0784258cc3.png?url";

/* ── Separator bar (Figma: 167.684×3px) ── */
function SeparatorBar({ side }: { side: "left" | "right" }) {
  return (
    <div style={{ width: "167.684px", height: "3px", position: "relative" }}>
      <svg
        className="absolute block"
        style={{ width: "100%", height: "100%", transform: side === "right" ? "rotate(180deg)" : undefined }}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 167.684 3.00013"
      >
        <path d={svgPaths.pea83b70} fill="#6FE6C1" />
      </svg>
    </div>
  );
}

/* ── Card background SVG (Figma: 355×192px, positioned at top:9.7px) ── */
function CardBg({ filterId }: { filterId: string }) {
  return (
    <div style={{ position: "absolute", left: 0, top: "9.7px", width: "100%", height: "192.298px", pointerEvents: "none" }}>
      <div style={{ position: "absolute", inset: "-11.51% -6.55% -12.66% -6.55%" }}>
        <svg className="block" style={{ width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 401.478 238.774">
          <g filter={`url(#${filterId})`}>
            <path d={svgPaths.p2e40dc00} fill="#006747" fillOpacity="0.84" shapeRendering="crispEdges" />
            <path d={svgPaths.p202f4c00} shapeRendering="crispEdges" stroke="#6FE6C1" strokeWidth="1.65985" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="238.774" id={filterId} width="401.478" x="-1.19209e-07" y="5.96046e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.10657" /><feGaussianBlur stdDeviation="10.789" /><feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.639216 0 0 0 0 0.470588 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.10657" /><feGaussianBlur stdDeviation="10.1527" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.810246 0 0 0 0 0.559595 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect2_innerShadow" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

/* ── Diamond check icon (Figma: 57×57px) ── */
function DiamondCheckIcon({ filterId }: { filterId: string }) {
  return (
    <div style={{ position: "absolute", left: "17px", top: "25px", width: "57px", height: "57px" }}>
      <div style={{ position: "absolute", inset: "-26.91%" }}>
        <svg className="block" style={{ width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 87.6764 87.6764">
          <g>
            <g filter={`url(#${filterId})`}>
              <path d={svgPaths.p70c5780} fill="#6FE6C1" fillOpacity="0.18" shapeRendering="crispEdges" />
              <path d={svgPaths.p5f45500} shapeRendering="crispEdges" stroke="#6FE6C1" strokeWidth="1.55455" />
            </g>
            <path d={svgPaths.p11c95f00} stroke="#D3FFF2" strokeWidth="9.79339" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="87.6764" id={filterId} width="87.6764" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset /><feGaussianBlur stdDeviation="7.66909" /><feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.810246 0 0 0 0 0.559595 0 0 0 0.79 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset /><feGaussianBlur stdDeviation="7.15091" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.434026 0 0 0 0 0.902738 0 0 0 0 0.757741 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect2_innerShadow" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

interface Achievement {
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Разработал уникальную методику лечения аутизма",
    description: "Применяя новые анатомические открытия и глубокие знания о работе нервной системы. Разработал инновационный остеопатический подход к лечению детей с РАС и ЗПРР",
  },
  {
    title: "Сделал новое открытие в анатомии",
    description: "Его исследования позволили иначе взглянуть на взаимодействие структур тела и выявить новые механизмы их регуляции",
  },
  {
    title: "Разработал инновационные методы реабилитации",
    description: "Применяя новые анатомические открытия и глубокие знания о работе нервной системы. Разработал иовацонный остеопатический подход к лечению детей с РАС и ЗПРР",
  },
  {
    title: "Сделал новое открытие в анатомии",
    description: "Его исследования позволили иначе взглянуть на взаимодействие структур тела и выявить новые механизмы их регуляции",
  },
  {
    title: "Сделал новое открытие в анатомии",
    description: "Его исследования позволили иначе взглянуть на взаимодействие структур тела и выявить новые механизмы их регуляции",
  },
];

/* ── Mobile card (pixel-perfect, НЕ ТРОГАТЬ) ── */
function AchievementCardMobile({ title, description, index }: Achievement & { index: number }) {
  const bgFilter = `ach_bg_${index}`;
  const diamFilter = `ach_dm_${index}`;
  return (
    <div style={{ width: "100%" }}>
      {/* Top separator — gap to card border: 6.7px (как в Figma: sep=3px, card bg top=9.7px) */}
      <div style={{ marginLeft: "17px", transform: "scaleY(-1)", display: "inline-block" }}>
        <SeparatorBar side="left" />
      </div>

      {/* Card body — авто-высота, CardBg растянут на 100% */}
      <div style={{ position: "relative", marginTop: "6.7px", marginBottom: "10px" }}>

        {/* CardBg — абсолютный, заполняет всю высоту блока */}
        <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: "-11.51% -6.55% -12.66% -6.55%" }}>
            <svg className="block" style={{ width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 401.478 238.774">
              <g filter={`url(#${bgFilter})`}>
                <path d={svgPaths.p2e40dc00} fill="#006747" fillOpacity="0.84" shapeRendering="crispEdges" />
                <path d={svgPaths.p202f4c00} shapeRendering="crispEdges" stroke="#6FE6C1" strokeWidth="1.65985" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="238.774" id={bgFilter} width="401.478" x="-1.19209e-07" y="5.96046e-07">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1.10657" /><feGaussianBlur stdDeviation="10.789" /><feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.639216 0 0 0 0 0.470588 0 0 0 1 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1.10657" /><feGaussianBlur stdDeviation="10.1527" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.810246 0 0 0 0 0.559595 0 0 0 1 0" />
                  <feBlend in2="shape" mode="normal" result="effect2_innerShadow" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* Контент — поточный, задаёт высоту блока */}
        {/* padding-top: 9.3px = оригинальный top заголовка (19px) − top CardBg (9.7px) */}
        <div style={{ position: "relative", padding: "9.3px 17px 16px 17px", boxSizing: "border-box" }}>

          {/* Иконка + заголовок — flex-ряд */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "13.5px" }}>

            {/* DiamondCheckIcon — инлайн, marginTop: 6px чтобы начинался на 15.3px от CardBg (как top:25px в оригинале) */}
            <div style={{ width: "57px", height: "57px", flexShrink: 0, position: "relative", marginTop: "6px" }}>
              <div style={{ position: "absolute", inset: "-26.91%" }}>
                <svg className="block" style={{ width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 87.6764 87.6764">
                  <g>
                    <g filter={`url(#${diamFilter})`}>
                      <path d={svgPaths.p70c5780} fill="#6FE6C1" fillOpacity="0.18" shapeRendering="crispEdges" />
                      <path d={svgPaths.p5f45500} shapeRendering="crispEdges" stroke="#6FE6C1" strokeWidth="1.55455" />
                    </g>
                    <path d={svgPaths.p11c95f00} stroke="#D3FFF2" strokeWidth="9.79339" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="87.6764" id={diamFilter} width="87.6764" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset /><feGaussianBlur stdDeviation="7.66909" /><feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.810246 0 0 0 0 0.559595 0 0 0 0.79 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset /><feGaussianBlur stdDeviation="7.15091" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.434026 0 0 0 0 0.902738 0 0 0 0 0.757741 0 0 0 1 0" />
                      <feBlend in2="shape" mode="normal" result="effect2_innerShadow" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Заголовок */}
            <p style={{
              fontFamily: "'Furore', sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.22,
              letterSpacing: "0.01em",
              color: "white",
              textTransform: "uppercase",
              margin: 0,
              flex: 1,
            }}>
              {title}
            </p>
          </div>

          {/* Описание — marginTop: 16px = оригинальный зазор между иконкой и текстом */}
          <p style={{
            fontFamily: "'Ruberoid', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: "normal",
            color: "white",
            margin: 0,
            marginTop: "16px",
          }}>
            {description}
          </p>
        </div>
      </div>

      {/* Bottom separator — gap от card border: 10px (marginBottom на card body) */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "17px", transform: "scaleY(-1)" }}>
        <SeparatorBar side="right" />
      </div>
      {/* Нижний отступ после разделителя (как в оригинале: 254 - 215 = 39px) */}
      <div style={{ height: "39px" }} />
    </div>
  );
}

/* ─── Desktop card ─── */
const CUT = 22;
function clipPath(w: number | string, h: number | string) {
  // polygon with cut corners top-right and bottom-left
  return `polygon(0 0, calc(${typeof w === "number" ? w + "px" : w} - ${CUT}px) 0, ${typeof w === "number" ? w + "px" : w} ${CUT}px, ${typeof w === "number" ? w + "px" : w} 100%, ${CUT}px 100%, 0 calc(100% - ${CUT}px))`;
}

const CLIP = `polygon(0 0, calc(100% - ${CUT}px) 0, 100% ${CUT}px, 100% 100%, ${CUT}px 100%, 0 calc(100% - ${CUT}px))`;

function AchievementCardDesktop({
  title, description, index, large,
}: Achievement & { index: number; large?: boolean }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div style={{ position: "relative", height: "100%" }}>
      {/* Border layer */}
      <div style={{
        position: "absolute", inset: 0,
        clipPath: CLIP,
        background: "rgba(111,230,193,0.3)",
        pointerEvents: "none",
      }} />

      {/* Content layer */}
      <div style={{
        position: "relative",
        margin: "1px",
        height: "calc(100% - 2px)",
        clipPath: CLIP,
        background: "linear-gradient(135deg, rgba(0,52,34,0.7) 0%, rgba(0,18,12,0.95) 60%)",
        overflow: "hidden",
        display: "flex",
        flexDirection: large ? "row" : "column",
        gap: large ? "36px" : "0",
        alignItems: large ? "center" : "flex-start",
        padding: large ? "36px 40px" : "28px 28px",
        boxSizing: "border-box",
        minHeight: large ? "340px" : "180px",
      }}>

        {/* Left accent bar */}
        <div style={{
          position: "absolute", top: "24px", left: 0, width: "3px", bottom: "24px",
          background: "linear-gradient(180deg, #6FE6C1, rgba(111,230,193,0.1))",
          filter: "drop-shadow(0 0 4px #6FE6C1)",
        }} />

        {/* Watermark number */}
        <div style={{
          position: "absolute",
          right: large ? "44px" : "20px",
          bottom: large ? "24px" : "16px",
          fontFamily: "'Furore', sans-serif",
          fontSize: large ? "140px" : "100px",
          fontWeight: 400, lineHeight: 1, letterSpacing: "-0.05em",
          color: "rgba(111,230,193,0.05)", userSelect: "none", pointerEvents: "none", zIndex: 0,
        }}>
          {num}
        </div>

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 1, flex: large ? "1 1 auto" : undefined }}>
          {/* Tag row */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            {/* Diamond check icon */}
            <div style={{ width: "32px", height: "32px", flexShrink: 0, position: "relative" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="16" y="1.5" width="20.5" height="20.5" rx="2" transform="rotate(45 16 1.5)" fill="#6FE6C1" fillOpacity="0.15" stroke="#6FE6C1" strokeWidth="1" />
                <path d="M10 16l4.5 4.5 7.5-9" stroke="#D3FFF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Tag label */}
            <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "13px", color: "#6FE6C1", letterSpacing: "0.08em", opacity: 0.8 }}>
              — {num}
            </span>
          </div>

          <h3 style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: large ? "24px" : "16px",
            fontWeight: 400,
            lineHeight: 1.25,
            letterSpacing: "0.02em",
            color: "#ffffff",
            textTransform: "uppercase",
            margin: "0 0 14px",
          }}>
            {title}
          </h3>

          <p style={{
            fontFamily: "'Ruberoid', sans-serif",
            fontSize: large ? "15px" : "13px",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.7)",
            margin: 0,
          }}>
            {description}
          </p>
        </div>

        {/* DNA SVG (large card only) */}
        {large && (
          <div style={{ flexShrink: 0, alignSelf: "stretch", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: "linear-gradient(180deg, transparent, rgba(111,230,193,0.25), transparent)" }} />
            <DNAHelix />
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Static DNA Helix SVG ─── */
function DNAHelix() {
  const W = 160, H = 300;
  const cx = W / 2;
  const rungCount = 13;
  const rungSpacing = H / (rungCount - 1);

  // Each rung: angle drives x-positions of the two dots
  // angle goes from 0 to ~3.5 full turns
  const rungs = Array.from({ length: rungCount }, (_, i) => {
    const t = i / (rungCount - 1); // 0..1
    const angle = t * Math.PI * 3.2; // ~1.6 full turns
    const cos = Math.cos(angle);
    const amp = 58; // half-width of widest rung

    // x positions of left and right dot
    const x1 = cx - amp * Math.abs(cos) * (cos >= 0 ? 1 : -1);
    const x2 = cx + amp * Math.abs(cos) * (cos >= 0 ? 1 : -1);

    // dot radius: larger when "in front" (cos closer to ±1), smaller when crossing
    const absCos = Math.abs(cos);
    // front dot (right) vs back dot (left) based on sign of cos
    const rFront = 5 + absCos * 7;   // 5..12
    const rBack  = 3 + absCos * 4.5; // 3..7.5

    const y = i * rungSpacing + 10;

    return {
      x1: Number(x1.toFixed(4)),
      x2: Number(x2.toFixed(4)),
      y: Number(y.toFixed(4)),
      cos: Number(cos.toFixed(4)),
      absCos: Number(absCos.toFixed(4)),
      rFront: Number(rFront.toFixed(4)),
      rBack: Number(rBack.toFixed(4))
    };
  });

  return (
    <div style={{ width: W, height: H, flexShrink: 0 }}>
      <svg width={W} height={H} fill="none" style={{ display: "block", overflow: "visible" }}>
        <defs>
          <filter id="dna-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <g filter="url(#dna-glow)">
          {rungs.map((r, i) => {
            const isCrossing = r.absCos < 0.08;
            // At crossing points, the two dots are nearly coincident — skip line or draw tiny
            return (
              <g key={i}>
                {/* Rung line */}
                {!isCrossing && (
                  <line
                    x1={Math.min(r.x1, r.x2) + r.rBack * 0.7}
                    y1={r.y}
                    x2={Math.max(r.x1, r.x2) - r.rFront * 0.7}
                    y2={r.y}
                    stroke="#6FE6C1"
                    strokeWidth={0.9}
                    opacity={0.55 + r.absCos * 0.35}
                    strokeLinecap="round"
                  />
                )}
                {/* Back dot (smaller) */}
                <circle
                  cx={r.x1}
                  cy={r.y}
                  r={r.rBack}
                  fill="#6FE6C1"
                  opacity={0.5 + r.absCos * 0.3}
                />
                {/* Front dot (larger) */}
                <circle
                  cx={r.x2}
                  cy={r.y}
                  r={r.rFront}
                  fill="#6FE6C1"
                  opacity={0.75 + r.absCos * 0.2}
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative overflow-hidden" style={{ backgroundColor: "#001d14" }}>
      {/* ── MOBILE (НЕ ТРОГАТЬ) ── */}
      <div className="md:hidden overflow-hidden">
        <Container>
          <div style={{ textAlign: "center", paddingTop: "28px", paddingBottom: "48px", fontFamily: "'Furore', sans-serif", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.1 }}>
            <p style={{ margin: 0, fontSize: "34px", color: "#ffffff" }}>ключевые</p>
            <p style={{ margin: 0, fontSize: "34px", color: "#00cf8f" }}>достижения</p>
          </div>
          <div>
            {achievements.map((a, i) => (
              <AchievementCardMobile key={i} index={i} {...a} />
            ))}
          </div>
        </Container>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block" style={{ padding: "80px 0 100px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,80,50,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <Container>
          {/* Heading */}
          <div style={{ marginBottom: "52px" }}>
            <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(52px, 5.5vw, 80px)", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.0, textTransform: "uppercase", margin: 0 }}>
              <span style={{ color: "#ffffff" }}>ключевые </span>
              <span style={{ color: "#00cf8f", textShadow: "0 0 28px rgba(0,207,143,0.5)" }}>достижения</span>
            </h2>
          </div>

          {/* Bento grid — top row */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "14px", alignItems: "stretch" }}>
            {/* Large card — left */}
            <AchievementCardDesktop index={0} {...achievements[0]} large />

            {/* Right column — 2 cards stacked */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <AchievementCardDesktop index={1} {...achievements[1]} />
              <AchievementCardDesktop index={2} {...achievements[2]} />
            </div>
          </div>

          {/* Bottom row — 2 equal cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "14px" }}>
            {achievements.slice(3).map((a, i) => (
              <AchievementCardDesktop key={i + 3} index={i + 3} {...a} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}