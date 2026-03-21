import img1 from "@/assets/9f52023862aa50f87d6a753ba0b67d4e931e459f.png?url";
import { HudSVG } from "./HudSVG";
import { Container } from "./ui/Container";
import { useState } from "react";

/* CTA Button matching Figma SVG background */
export function CTAButton({ text = "записаться", variant = "primary" }: { text?: string, variant?: "primary" | "secondary" } = {}) {
  const isSecondary = variant === "secondary";
  const maxWidth = isSecondary ? 420 : 309.7;
  const h = 65.34;
  const cut = 13;
  
  // Normalized points for viewBox="0 0 100 100" or just use non-scaling-stroke
  // We'll use a fixed-proportion viewBox "0 0 420 65.34" and preserveAspectRatio="none"
  const baseW = 420;
  const baseH = 65.34;
  
  const [hovered, setHovered] = useState(false);

  const points = [
    [cut, 0],
    [baseW, 0],
    [baseW, baseH - cut],
    [baseW - cut, baseH],
    [0, baseH],
    [0, cut],
  ];
  const polyline = points
    .map(([x, y]) => `${x},${y}`)
    .join(" ");

  const CYAN = "#6FE6C1";
  const PRIMARY_BG = "#09B983";
  const SECONDARY_BG = "transparent";
  const PRIMARY_HOVER = "#0dd49a";
  const SECONDARY_HOVER = "rgba(111,230,193,0.1)";

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes hero-btn-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes hero-btn-shimmer {
          0%   { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
        @keyframes hero-btn-ping {
          0%   { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.14, 1.22); opacity: 0; }
        }
        .hero-cta-btn {
          transition:
            background 0.35s ease,
            filter 0.35s ease,
            transform 0.25s ease,
            letter-spacing 0.3s ease;
          clip-path: polygon(${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%, 0 ${cut}px);
        }
        .hero-cta-btn.primary:hover {
          background: ${PRIMARY_HOVER} !important;
          filter: drop-shadow(0 0 18px rgba(111,230,193,0.9)) drop-shadow(0 0 6px rgba(13,212,154,0.7)) brightness(1.12);
          transform: translateY(-2px) scale(1.018);
          letter-spacing: 0.18em;
        }
        .hero-cta-btn.secondary:hover {
          background: ${SECONDARY_HOVER} !important;
          filter: drop-shadow(0 0 12px rgba(111,230,193,0.3));
          transform: translateY(-1px) scale(1.01);
          letter-spacing: 0.15em;
        }
        .hero-cta-btn:active {
          transform: translateY(0px) scale(1);
          filter: drop-shadow(0 0 8px rgba(111,230,193,0.6)) brightness(1.05);
        }
        @media (max-width: 480px) {
          .hero-cta-btn-wrapper {
             max-width: 280px !important;
             margin: 0 auto !important;
          }
          .hero-cta-btn {
             font-size: 15px !important;
             letter-spacing: 0.05em !important;
          }
        }
      `}}></style>

      <div
        className="hero-cta-btn-wrapper"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: `${maxWidth}px`,
          height: `${h}px`,
          margin: "0",
          display: "block"
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Ping ring — pulses outward on hover */}
        {!isSecondary && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "-4px",
              clipPath: `polygon(${cut + 4}px 0, 100% 0, 100% calc(100% - ${cut + 4}px), calc(100% - ${cut + 4}px) 100%, 0 100%, 0 ${cut + 4}px)`,
              background: "transparent",
              outline: "1.5px solid rgba(111,230,193,0.55)",
              animation: hovered
                ? "hero-btn-ping 0.7s ease-out infinite"
                : "none",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Main button */}
        <a
          href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
          }}
        >
          <button
            className={`hero-cta-btn ${variant}`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              background: isSecondary ? SECONDARY_BG : PRIMARY_BG,
              border: isSecondary ? `1px solid ${CYAN}50` : "none",
              cursor: "pointer",
              fontFamily: "'Furore', 'Exo 2', sans-serif",
              fontSize: "20.671px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              color: "#ffffff",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >
            {text}
            {/* Shimmer sweep */}
            {!isSecondary && (
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
                  animation: hovered
                    ? "hero-btn-shimmer 0.55s ease forwards"
                    : "none",
                  pointerEvents: "none",
                }}
              />
            )}
          </button>
        </a>

        {/* SVG border — traces around the polygon on hover */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "visible",
            width: "100%",
            height: "100%",
          }}
          viewBox={`0 0 ${baseW} ${baseH}`}
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="btn-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="btn-glow-hot">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Base border — always visible, pulses */}
          <polygon
            points={polyline}
            fill="none"
            stroke={CYAN}
            strokeWidth="1.5"
            strokeOpacity={hovered ? 0 : isSecondary ? 0.3 : 1}
            filter="url(#btn-glow)"
            vectorEffect="non-scaling-stroke"
            style={{ transition: "stroke-opacity 0.3s ease" }}
          />

          {/* Tracing border — draws around shape on hover */}
          <polygon
            points={polyline}
            fill="none"
            stroke={CYAN}
            strokeWidth="2.5"
            filter="url(#btn-glow-hot)"
            strokeDasharray={1000} // generic long dasharray
            strokeDashoffset={hovered ? 0 : 1000}
            vectorEffect="non-scaling-stroke"
            style={{
              transition: hovered
                ? "stroke-dashoffset 0.55s cubic-bezier(0.4,0,0.2,1)"
                : "stroke-dashoffset 0.4s ease",
              strokeOpacity: isSecondary ? 0.6 : 1,
            }}
          />

          {/* Corner accent dots - disabled for secondary or responsive ease */}
          {!isSecondary && hovered &&
            [
              [cut, 0],
              [baseW, 0],
              [baseW, baseH - cut],
              [baseW - cut, baseH],
              [0, baseH],
              [0, cut],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="3"
                fill={CYAN}
                filter="url(#btn-glow-hot)"
                style={{ opacity: 0.9 }}
              />
            ))}
        </svg>
      </div>
    </>
  );
}
export function HeroSection() {
  return (
    <section id="hero" className="relative flex flex-col md:overflow-visible overflow-hidden items-center text-center px-4">
      {/* ── MOBILE ── */}
      <div className="md:hidden">
        <Container className="relative">
          {/* HUD SVG behind logo */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              top: "26px",
              width: "350px",
              height: "350px",
            }}
          >
            <HudSVG
              size={350}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Logo */}
          <div
            className="absolute overflow-hidden pointer-events-none"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              top: "93px",
              width: "217.862px",
              height: "216.248px",
            }}
          >
            <img
              alt="Центр Побед Лого"
              src={img1}
              className="absolute w-full"
              style={{
                top: "-0.11%",
                left: 0,
                height: "100.21%",
              }}
            />
          </div>

          {/* Title */}
          <p
            className="absolute text-center uppercase text-white"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              top: "403px",
              width: "325px",
              fontFamily: "'Furore', 'Exo 2', sans-serif",
              fontSize: "40px",
              fontWeight: 400,
              letterSpacing: "0.05em",
              lineHeight: "normal",
            }}
          >
            центр побед
          </p>

          {/* Subtitle */}
          <p
            className="absolute text-center"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              top: "458px",
              width: "300px",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "17.4px",
              fontWeight: 400,
              color: "#f7faf8",
              lineHeight: "1.5",
            }}
          >
            Международная Корпорация Инновационных Технологий
          </p>

          {/* CTA Button */}
          <div
            className="absolute"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              top: "556px",
            }}
          >
            <CTAButton />
          </div>

          {/* Height spacer */}
          <div style={{ height: "660px" }} />
        </Container>
      </div>

      {/* ── DESKTOP ── */}
      <div
        className="hidden md:flex items-center justify-center px-8"
        style={{ minHeight: "100vh", position: "relative" }}
      >
        {/* Фоновый радиальный свет */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 60% at 68% 50%, rgba(0,80,50,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Декоративные circuit-точки */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
          }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter
              id="cg2"
              x="-120%"
              y="-120%"
              width="340%"
              height="340%"
            >
              <feGaussianBlur stdDeviation="7" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g stroke="#6FE6C1" fill="#6FE6C1">
            <g opacity="0.3">
              <line
                x1="60"
                y1="90"
                x2="180"
                y2="90"
                strokeWidth="0.7"
              />
              <circle
                cx="60"
                cy="90"
                r="12"
                fillOpacity="0.08"
                strokeWidth="0.6"
              />
              <circle
                cx="60"
                cy="90"
                r="5"
                fillOpacity="0.25"
                strokeWidth="0"
              />
              <circle
                cx="180"
                cy="90"
                r="4"
                fillOpacity="0.2"
                strokeWidth="0.6"
              />
              <circle
                cx="180"
                cy="90"
                r="1.8"
                fillOpacity="0.7"
                strokeWidth="0"
              />
            </g>
            <g opacity="0.28">
              <line
                x1="1220"
                y1="140"
                x2="1380"
                y2="140"
                strokeWidth="0.7"
              />
              <circle
                cx="1220"
                cy="140"
                r="5"
                fillOpacity="0.18"
                strokeWidth="0.6"
              />
              <circle
                cx="1220"
                cy="140"
                r="2"
                fillOpacity="0.6"
                strokeWidth="0"
              />
              <circle
                cx="1380"
                cy="140"
                r="14"
                fillOpacity="0.07"
                strokeWidth="0.6"
              />
              <circle
                cx="1380"
                cy="140"
                r="7"
                fillOpacity="0.2"
                strokeWidth="0"
              />
            </g>
            <g opacity="0.25">
              <line
                x1="100"
                y1="480"
                x2="260"
                y2="480"
                strokeWidth="0.7"
              />
              <circle
                cx="100"
                cy="480"
                r="16"
                fillOpacity="0.06"
                strokeWidth="0.6"
              />
              <circle
                cx="100"
                cy="480"
                r="8"
                fillOpacity="0.18"
                strokeWidth="0"
              />
              <circle
                cx="260"
                cy="480"
                r="6"
                fillOpacity="0.15"
                strokeWidth="0.6"
              />
              <circle
                cx="260"
                cy="480"
                r="2.5"
                fillOpacity="0.55"
                strokeWidth="0"
              />
            </g>
            <g opacity="0.27">
              <line
                x1="1160"
                y1="420"
                x2="1340"
                y2="420"
                strokeWidth="0.7"
              />
              <circle
                cx="1160"
                cy="420"
                r="10"
                fillOpacity="0.08"
                strokeWidth="0.6"
              />
              <circle
                cx="1160"
                cy="420"
                r="4.5"
                fillOpacity="0.22"
                strokeWidth="0"
              />
              <circle
                cx="1340"
                cy="420"
                r="4"
                fillOpacity="0.18"
                strokeWidth="0.6"
              />
              <circle
                cx="1340"
                cy="420"
                r="1.8"
                fillOpacity="0.65"
                strokeWidth="0"
              />
            </g>
            <g opacity="0.22">
              <line
                x1="340"
                y1="820"
                x2="520"
                y2="820"
                strokeWidth="0.7"
              />
              <circle
                cx="340"
                cy="820"
                r="5"
                fillOpacity="0.18"
                strokeWidth="0.6"
              />
              <circle
                cx="340"
                cy="820"
                r="2"
                fillOpacity="0.6"
                strokeWidth="0"
              />
              <circle
                cx="520"
                cy="820"
                r="13"
                fillOpacity="0.07"
                strokeWidth="0.6"
              />
              <circle
                cx="520"
                cy="820"
                r="6"
                fillOpacity="0.18"
                strokeWidth="0"
              />
            </g>
            <g opacity="0.24">
              <line
                x1="1050"
                y1="760"
                x2="1200"
                y2="760"
                strokeWidth="0.7"
              />
              <circle
                cx="1050"
                cy="760"
                r="14"
                fillOpacity="0.07"
                strokeWidth="0.6"
              />
              <circle
                cx="1050"
                cy="760"
                r="6"
                fillOpacity="0.2"
                strokeWidth="0"
              />
              <circle
                cx="1200"
                cy="760"
                r="4"
                fillOpacity="0.18"
                strokeWidth="0.6"
              />
              <circle
                cx="1200"
                cy="760"
                r="1.8"
                fillOpacity="0.65"
                strokeWidth="0"
              />
            </g>
          </g>
        </svg>

        {/* ── CONTENT ── */}
        <div
          className="w-full max-w-[1200px] flex items-center gap-16 xl:gap-24"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* ── LEFT: text ── */}
          <div
            style={{
              flex: "1 1 0",
              minWidth: 0,
              position: "relative",
            }}
          >
            {/* Ghost watermark */}
            <div
              style={{
                position: "absolute",
                top: "-28px",
                left: "-8px",
                fontFamily: "'Furore', 'Exo 2', sans-serif",
                fontSize: "clamp(80px, 10vw, 148px)",
                fontWeight: 400,
                color: "rgba(111,230,193,0.04)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              победы
            </div>

            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "1px",
                  background: "#6FE6C1",
                  opacity: 0.7,
                }}
              />
              <span
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  color: "#6FE6C1",
                  textTransform: "uppercase",
                }}
              >
                Международный оздоровительный центр
              </span>
            </div>

            {/* Main title */}
            <h1
              className="uppercase"
              style={{
                fontFamily: "'Furore', 'Exo 2', sans-serif",
                fontSize: "clamp(52px, 6vw, 86px)",
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: "white",
                lineHeight: 1.05,
                textShadow: "0px 4px 40px rgba(0,238,163,0.45)",
                margin: "0 0 8px 0",
                whiteSpace: "nowrap",
                position: "relative",
              }}
            >
              центр побед
            </h1>

            {/* Divider под заголовком */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background:
                  "linear-gradient(90deg, #6FE6C1 0%, rgba(111,230,193,0.15) 50%, transparent 100%)",
                marginBottom: "20px",
                maxWidth: "480px",
              }}
            />

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgba(247,250,248,0.6)",
                letterSpacing: "0.04em",
                lineHeight: 1.6,
                margin: "0 0 36px 0",
                maxWidth: "380px",
                whiteSpace: "nowrap",
              }}
            >
              Международная Корпорация Инновационных Технологий
            </p>

            {/* ── Stats card ── */}
            <div
              style={{
                position: "relative",
                marginBottom: "40px",
                maxWidth: "560px",
                filter:
                  "drop-shadow(0 0 12px rgba(111,230,193,0.3))",
              }}
            >
              {/* Background */}
              <div
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))",
                  background:
                    "linear-gradient(135deg, rgba(0,52,34,0.75) 0%, rgba(0,18,12,0.96) 60%)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  padding: "20px 20px 24px",
                }}
              >
                {[
                  { value: "12+", label: "лет опыта" },
                  { value: "5 000+", label: "клиентов" },
                  { value: "100+", label: "специалистов" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      textAlign: "center",
                      borderRight:
                        i < 2
                          ? "1px solid rgba(111,230,193,0.15)"
                          : "none",
                    }}
                  >
                    <p
                      style={{
                        fontFamily:
                          "'Furore', 'Exo 2', sans-serif",
                        fontSize: "28px",
                        fontWeight: 400,
                        color: "#6FE6C1",
                        margin: "0 0 5px 0",
                        filter:
                          "drop-shadow(0 0 8px rgba(111,230,193,0.6))",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        color: "rgba(255,255,255,0.45)",
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* SVG border overlay — гарантированно по всему контуру */}
              <svg
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  overflow: "visible",
                }}
                preserveAspectRatio="none"
                viewBox="0 0 560 88"
              >
                <polygon
                  points="0,0 538,0 560,22 560,88 22,88 0,66"
                  fill="none"
                  stroke="#6FE6C1"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* CTA */}
            <CTAButton />
          </div>

          {/* ── RIGHT: logo + HUD ── */}
          <div
            style={{
              flexShrink: 0,
              width: "clamp(320px, 35vw, 480px)",
              height: "clamp(320px, 35vw, 480px)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* HUD behind */}
            <div
              className="absolute pointer-events-none"
              style={{ inset: "-15%" }}
            >
              <HudSVG
                size={600}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Clip-path рамка вокруг логотипа */}
            <div
              style={{
                position: "absolute",
                inset: "12%",
                clipPath:
                  "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
                background: "rgba(111,230,193,0.07)",
                border: "none",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "12%",
                clipPath:
                  "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
                outline: "1px solid rgba(111,230,193,0.22)",
                pointerEvents: "none",
              }}
            />

            {/* Corner accents */}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 2,
              }}
              viewBox="0 0 480 480"
            >
              <g
                stroke="#6FE6C1"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                fill="none"
              >
                <path d="M57,57 L57,82" />
                <path d="M57,57 L82,57" />
                <path d="M423,57 L398,57" />
                <path d="M423,57 L423,82" />
                <path d="M57,423 L57,398" />
                <path d="M57,423 L82,423" />
                <path d="M423,423 L398,423" />
                <path d="M423,423 L423,398" />
              </g>
              <g fill="#6FE6C1" fillOpacity="0.55">
                <circle cx="57" cy="57" r="2.5" />
                <circle cx="423" cy="57" r="2.5" />
                <circle cx="57" cy="423" r="2.5" />
                <circle cx="423" cy="423" r="2.5" />
              </g>
            </svg>

            {/* Logo */}
            <img
              alt="Центр Побед Лого"
              src={img1}
              style={{
                width: "72%",
                height: "72%",
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                filter:
                  "drop-shadow(0 0 40px rgba(9,185,131,0.4))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}