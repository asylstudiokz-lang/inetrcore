import { useState } from "react";
import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";
const CLIP_INV = (size: number) =>
  `polygon(0 0, calc(100% - ${size}px) 0, 100% ${size}px, 100% 100%, ${size}px 100%, 0 calc(100% - ${size}px))`;
const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

function CustomSectionCTA({ text }: { text: string }) {
  const CYAN = "#6FE6C1";
  const CLIP = (size: number) =>
    `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

  return (
    <a 
      href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Записаться на консультацию в WhatsApp"
      className="block group relative transition-transform active:scale-95"
      style={{ width: "100%" }}
    >
      <div 
        className="w-full relative transition-all duration-300"
        style={{
          height: "58px",
          background: "rgba(111,230,193,0.04)",
          clipPath: CLIP(12),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Glow background (visible on hover) */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: `linear-gradient(90deg, transparent 0%, ${CYAN}15 50%, transparent 100%)` }}
        />

        <span 
          className="font-['Furore'] tracking-[0.1em] text-white/90 transition-all group-hover:text-white relative z-10"
          style={{ 
            fontSize: "clamp(12px, 3.2vw, 14px)",
            textShadow: `0 0 10px ${CYAN}30`,
            textTransform: "uppercase"
          }}
        >
          {text}
        </span>
        
        {/* Continuous SVG Border Overlay */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" 
          viewBox="0 0 340 58" 
          preserveAspectRatio="none"
        >
          <polygon
            points="12,0 340,0 340,46 328,58 0,58 0,12 12,0"
            fill="none"
            stroke={CYAN}
            strokeWidth="1.5"
            strokeOpacity="0.4"
            vectorEffect="non-scaling-stroke"
            className="transition-all duration-300 group-hover:stroke-opacity-100 group-hover:stroke-[2]"
            style={{ filter: "drop-shadow(0 0 4px rgba(111,230,193,0.3))" }}
          />
        </svg>

        {/* Extra Hover Glow Ring (SVG) */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible opacity-0 group-hover:opacity-60 transition-opacity duration-300" 
          viewBox="0 0 340 58" 
          preserveAspectRatio="none"
        >
          <polygon
            points="12,0 340,0 340,46 328,58 0,58 0,12 12,0"
            fill="none"
            stroke={CYAN}
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            style={{ filter: "blur(6px)" }}
          />
        </svg>
      </div>
    </a>
  );
}

export function BiteCorrectionHowItWorksSection() {
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#001d14" }}
    >
      {/* ────────────────────────────── MOBILE ─────────────────────────── */}
      <div className="md:hidden" style={{ position: "relative", padding: "60px 0", overflow: "hidden" }}>

        {/* Background glow */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 90% 20%, rgba(111,230,193,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Top-left decorative diagonal lines */}
        <svg style={{ position: "absolute", top: 0, left: 0, opacity: 0.12, pointerEvents: "none" }}
          width="120" height="80" viewBox="0 0 120 80" fill="none">
          <line x1="0" y1="0" x2="120" y2="80" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="20" y1="0" x2="120" y2="65" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="40" y1="0" x2="120" y2="50" stroke="#6FE6C1" strokeWidth="1" />
        </svg>

        <Container style={{ position: "relative", zIndex: 1 }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{
              fontFamily: "'Furore', sans-serif", fontSize: "9px",
              letterSpacing: "0.22em", color: CYAN, textTransform: "uppercase", flexShrink: 0,
            }}>// принцип действия</span>
            <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, rgba(111,230,193,0.35) 0%, transparent 100%)` }} />
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: "clamp(24px, 8vw, 36px)", fontWeight: 400,
            color: "#fff", lineHeight: 1.1, textTransform: "uppercase",
            letterSpacing: "0.04em", margin: "0 0 32px 0",
          }}>
            Как работает<br />
            <span style={{ color: "transparent", WebkitTextStroke: `1px ${CYAN}` }}>корректор</span>{" "}
            <span style={{ color: CYAN }}>Миката?</span>
          </h2>

          {/* Photo placeholder */}
          <div style={{
            position: "relative", width: "100%", paddingTop: "66.6%",
            marginBottom: "28px", flexShrink: 0,
          }}>
            {/* Clipped BG */}
            <div style={{
              position: "absolute", inset: "0",
              clipPath: CLIP(20),
              background: "rgba(111,230,193,0.06)",
            }} />
            {/* Border SVG: Top-Left & Bottom-Right Cuts (MATCH MOBILE) */}
            <svg 
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none", overflow: "visible" }}
              viewBox="0 0 360 240" preserveAspectRatio="none"
            >
              <polygon
                points="21,1 359,1 359,219 339,239 1,239 1,21 21,1"
                fill="none" 
                stroke={CYAN} 
                strokeWidth="1.6" 
                strokeOpacity="0.6"
              />
            </svg>
            {/* HUD top-right badge */}
            <div style={{ position: "absolute", top: "12px", right: "12px", zIndex: 5 }}>
              <div style={{ position: "relative", background: "rgba(111,230,193,0.75)", clipPath: CLIP_INV(7), padding: "1px" }}>
                <div style={{ background: "#011a14", clipPath: CLIP_INV(7), padding: "5px 14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "9px", color: CYAN, letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1.2 }}>
                    МИКАТА
                  </span>
                </div>
              </div>
            </div>
            {/* Placeholder icon */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 3,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: "10px", color: `rgba(111,230,193,0.25)`,
            }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(111,230,193,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "7px", letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.5 }}>Фото / видео</span>
            </div>
          </div>

          {/* Text content */}
          <div style={{
            background: CYAN,
            clipPath: CLIP(16),
            padding: "1.5px",
            marginBottom: "24px",
            filter: "drop-shadow(0 0 24px rgba(111,230,193,0.5)) drop-shadow(0 10px 30px rgba(0,0,0,0.8))",
          }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(0,38,20,0.9) 0%, rgba(0,13,8,0.97) 100%)",
              clipPath: CLIP(15),
              padding: "20px 18px",
            }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px", fontWeight: 400, lineHeight: 1.75,
                color: "rgba(255,255,255,0.8)", margin: "0 0 14px 0",
              }}>
                Принято считать, что одной из основных причин возникновения неправильного прикуса является «плохая наследственность». Классическое исправление прикуса осуществляется через{" "}
                <span style={{ color: CYAN }}>удаление «лишних» зубов и принудительное смещение</span>{" "}
                без исправления положения челюсти и расслабления мышц. Отсюда частые рецидивы.
              </p>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px", fontWeight: 400, lineHeight: 1.75,
                color: "rgba(255,255,255,0.8)", margin: 0,
              }}>
                Не многие знают, что наши зубы выполняют крайне важную функцию —{" "}
                <span style={{ color: CYAN }}>функцию ночного антистресса</span>:
                спазмирование и напряжение жевательных мышц, сопровождаемое сильным сжатием зубов.
              </p>
            </div>
          </div>

          {/* CTA button */}
          <div style={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}>
            <CustomSectionCTA text="Получить консультацию" />
          </div>

        </Container>
      </div>

      {/* ─────────────────────────── DESKTOP ───────────────────────────── */}
      <div className="hidden md:block" style={{ position: "relative", padding: "100px 0" }}>

        {/* Background glow right */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "50%", height: "100%",
          background: "radial-gradient(ellipse 70% 80% at 90% 50%, rgba(111,230,193,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Large circle outline — top left */}
        <div style={{
          position: "absolute", top: "-80px", left: "-80px",
          width: "360px", height: "360px", borderRadius: "50%",
          border: "1px solid rgba(111,230,193,0.07)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "-30px", left: "-30px",
          width: "220px", height: "220px", borderRadius: "50%",
          border: "1px solid rgba(111,230,193,0.1)", pointerEvents: "none",
        }} />

        {/* Diagonal lines — bottom right */}
        <svg style={{ position: "absolute", bottom: "20px", right: "0", opacity: 0.12, pointerEvents: "none" }}
          width="180" height="120" viewBox="0 0 180 120" fill="none">
          <line x1="180" y1="0" x2="0" y2="120" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="180" y1="20" x2="20" y2="120" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="180" y1="40" x2="40" y2="120" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="180" y1="60" x2="60" y2="120" stroke="#6FE6C1" strokeWidth="1" />
        </svg>

        {/* Dot pattern — bottom left */}
        <div style={{
          position: "absolute", bottom: "18%", left: "38%",
          width: "140px", height: "140px",
          backgroundImage: "radial-gradient(circle, #6FE6C1 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          opacity: 0.12, pointerEvents: "none",
        }} />

        <Container style={{ position: "relative", zIndex: 1 }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "60px" }}>
            <span style={{
              fontFamily: "'Furore', sans-serif", fontSize: "11px",
              letterSpacing: "0.22em", color: CYAN, textTransform: "uppercase", flexShrink: 0,
            }}>// принцип действия</span>
            <div style={{ flex: 1, height: "1px", background: `linear-gradient(90deg, rgba(111,230,193,0.35) 0%, transparent 100%)` }} />
          </div>

          {/* Two-column grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

            {/* LEFT — Photo */}
            <div 
              className={`how-photo-wrapper ${hoveredLeft ? "is-hovered" : ""}`}
              onMouseEnter={() => setHoveredLeft(true)}
              onMouseLeave={() => setHoveredLeft(null as any)}
              style={{ position: "relative", transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                @media (min-width: 768px) {
                  .how-photo-wrapper.is-hovered {
                    transform: translateY(-10px) scale(1.02);
                  }
                  .how-photo-glow {
                    transition: opacity 0.6s ease, transform 0.6s ease;
                  }
                  .how-photo-wrapper.is-hovered .how-photo-glow {
                    opacity: 0.1 !important;
                    transform: scale(1.1);
                  }
                  .how-text-block-wrapper {
                    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.6s ease;
                  }
                  .how-text-block-wrapper.is-hovered {
                    transform: translateY(-8px);
                    filter: drop-shadow(0 0 40px rgba(111,230,193,0.4)) !important;
                  }
                }
              `}} />

              {/* Outer glow */}
              <div 
                className="how-photo-glow"
                style={{
                  position: "absolute", inset: "-15%",
                  background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(111,230,193,0.07) 0%, transparent 70%)",
                  pointerEvents: "none",
                  opacity: 0.8
                }} />

              {/* Photo container */}
              <div style={{
                position: "relative",
                width: "100%",
                paddingTop: "125%", /* 4:5 ratio */
                flexShrink: 0,
              }}>
                {/* Clipped BG */}
                <div style={{
                  position: "absolute", inset: 0,
                  clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
                  background: "rgba(111,230,193,0.07)",
                }} />

                {/* Blueprint grid overlay */}
                <div style={{ position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none", zIndex: 0 }}>
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="how-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6FE6C1" strokeWidth="0.6" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#how-grid)" />
                  </svg>
                </div>

                {/* Border SVG: Top-Right & Bottom-Left Cuts (MATCH DESKTOP) */}
                <svg
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none", overflow: "visible" }}
                  viewBox="0 0 400 500" preserveAspectRatio="none">
                  <polygon
                    points="1,1 371,1 399,29 399,499 29,499 1,471 1,1"
                    fill="none" 
                    stroke={CYAN} 
                    strokeWidth={hoveredLeft ? "2.5" : "1.6"} 
                    strokeOpacity={hoveredLeft ? "1" : "0.7"}
                    className="transition-all duration-300"
                    style={{ filter: hoveredLeft ? "drop-shadow(0 0 12px rgba(111,230,193,0.6))" : "none" }}
                  />
                </svg>

                {/* HUD corner accent — top left */}
                <svg style={{ position: "absolute", top: 0, left: 0, zIndex: 3, pointerEvents: "none" }} width="40" height="40" viewBox="0 0 40 40">
                  <polyline points="0,20 0,0 20,0" fill="none" stroke={CYAN} strokeWidth="2" strokeOpacity="0.9" />
                </svg>

                {/* HUD badge — top right */}
                <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 5 }}>
                  <div style={{ position: "relative", background: "rgba(111,230,193,0.8)", clipPath: CLIP_INV(10), padding: "1.5px" }}>
                    <div style={{ background: "#011a14", clipPath: CLIP_INV(10), padding: "8px 22px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "11px", color: CYAN, letterSpacing: "0.2em", textTransform: "uppercase", lineHeight: 1.1 }}>
                        МИКАТА
                      </span>
                    </div>
                  </div>
                </div>

                {/* HUD scan line — subtle */}
                <div style={{
                  position: "absolute", top: "50%", left: 0, right: 0, height: "1px",
                  background: `linear-gradient(90deg, transparent 0%, rgba(111,230,193,0.15) 30%, rgba(111,230,193,0.15) 70%, transparent 100%)`,
                  zIndex: 2, pointerEvents: "none",
                }} />

                {/* Placeholder content */}
                <div style={{
                  position: "absolute", inset: 0, zIndex: 3,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  gap: "14px", color: `rgba(111,230,193,0.25)`,
                }}>
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "50%",
                    border: "1px solid rgba(111,230,193,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.5 }}>Фото / видео</span>
                </div>

              </div>
            </div>

            {/* RIGHT — Text + CTA */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

              {/* Heading */}
              <h2 style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 400,
                color: "#fff", lineHeight: 1.08, textTransform: "uppercase",
                letterSpacing: "0.04em", margin: "0 0 28px 0",
                textShadow: "0px 4px 40px rgba(0,238,163,0.2)",
              }}>
                Как работает<br />
                <span style={{ color: "transparent", WebkitTextStroke: `1px ${CYAN}` }}>КОРРЕКТОР</span>
                <br />
                <span style={{ color: CYAN }}>МИКАТА?</span>
              </h2>

              {/* Divider */}
              <div style={{
                width: "100%", height: "1px", marginBottom: "28px",
                background: "linear-gradient(90deg, #6FE6C1 0%, rgba(111,230,193,0.1) 60%, transparent 100%)",
              }} />

              {/* Main text block — HUD border */}
              <div 
                className={`how-text-block-wrapper ${hoveredRight ? "is-hovered" : ""}`}
                onMouseEnter={() => setHoveredRight(true)}
                onMouseLeave={() => setHoveredRight(false)}
                style={{
                  background: CYAN,
                  clipPath: CLIP(20),
                  padding: "1.5px",
                  marginBottom: "28px",
                  filter: "drop-shadow(0 0 32px rgba(111,230,193,0.35)) drop-shadow(0 16px 48px rgba(0,0,0,0.8))",
                }}>
                <div style={{
                  background: "linear-gradient(135deg, rgba(0,38,20,0.88) 0%, rgba(0,13,8,0.97) 100%)",
                  clipPath: CLIP(19),
                  padding: "28px 28px",
                }}>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "15px", fontWeight: 400, lineHeight: 1.8,
                    color: "rgba(255,255,255,0.82)", margin: "0 0 16px 0",
                  }}>
                    Принято считать, что одной из основных причин возникновения неправильного прикуса является «плохая наследственность». Классическое исправление осуществляется через{" "}
                    <span style={{ color: CYAN }}>удаление «лишних» зубов и принудительное смещение</span>{" "}
                    без исправления положения челюсти и расслабления мышц. Отсюда частые рецидивы.
                  </p>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "15px", fontWeight: 400, lineHeight: 1.8,
                    color: "rgba(255,255,255,0.82)", margin: 0,
                  }}>
                    Не многие знают, что наши зубы выполняют крайне важную функцию —{" "}
                    <span style={{ color: CYAN }}>функцию ночного антистресса</span>:
                    спазмирование и напряжение жевательных мышц, сопровождаемое сильным сжатием зубов.
                  </p>
                </div>
              </div>

              {/* CTA button */}
              <div style={{ maxWidth: "340px" }}>
                <CustomSectionCTA text="Получить консультацию" />
              </div>

            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
