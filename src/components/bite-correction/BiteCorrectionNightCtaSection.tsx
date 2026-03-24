import { useState } from "react";
import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";
const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

export function BiteCorrectionNightCtaSection() {
  const [hoveredPhoto, setHoveredPhoto] = useState(false);
  return (
    <section
      className="bite-correction-night-cta-section"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .bite-correction-night-cta-section {
          padding: 60px 0 !important;
        }
        @media (min-width: 768px) {
          .bite-correction-night-cta-section {
            padding: 100px 0 !important;
          }
        }
      `}} />
      {/* Subtle horizontal divider glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(111,230,193,0.25) 30%, rgba(111,230,193,0.5) 50%, rgba(111,230,193,0.25) 70%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Background: radial ambient on left */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 55% 80% at 15% 50%, rgba(111,230,193,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ─── MOBILE ─── */}
      <div className="md:hidden">
        <Container>
          {/* Text */}
          <div style={{ marginBottom: "28px" }}>
            <p
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "clamp(20px, 7vw, 28px)",
                color: "#fff",
                lineHeight: 1.25,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                margin: "0 0 12px 0",
              }}
            >
              Надевайте корректор{" "}
              <span
                style={{
                  color: CYAN,
                  textShadow: "0 0 20px rgba(111,230,193,0.6)",
                }}
              >
                на ночь
              </span>
            </p>
            <div
              style={{
                width: "48px",
                height: "2px",
                background: CYAN,
                opacity: 0.6,
                marginBottom: "16px",
              }}
            />
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(14px, 4vw, 16px)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              и получите{" "}
              <span style={{ color: CYAN, fontWeight: 600 }}>
                правильный прикус
              </span>{" "}
              и красивую улыбку
            </p>
          </div>

          {/* 4:3 photo block */}
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "75%", /* 4:3 */
              filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.6))",
            }}
          >
            {/* BG */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                clipPath: CLIP(14),
                background: "rgba(111,230,193,0.06)",
              }}
            />
            {/* SVG border */}
            <svg
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 2,
                pointerEvents: "none",
                overflow: "visible",
              }}
              viewBox="0 0 360 270"
              preserveAspectRatio="none"
            >
              <polygon
                points="15,1 359,1 359,254 345,269 1,269 1,15 15,1"
                fill="none"
                stroke={CYAN}
                strokeWidth="1.5"
                strokeOpacity="0.55"
              />
            </svg>
            {/* Placeholder icon */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                color: "rgba(111,230,193,0.25)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1px solid rgba(111,230,193,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "7px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  opacity: 0.5,
                }}
              >
                Фото / видео
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* ─── DESKTOP ─── */}
      <div className="hidden md:block">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "5fr 2fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* LEFT – text (3/4) */}
            <div style={{ position: "relative" }}>
              {/* Ghost watermark */}
              <div
                style={{
                  position: "absolute",
                  top: "-24px",
                  left: "-6px",
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "clamp(72px, 9vw, 128px)",
                  color: "rgba(111,230,193,0.03)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                }}
              >
                ночь
              </div>

              <h2
                style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "clamp(28px, 3.5vw, 52px)",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1.2,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  margin: "0 0 16px 0",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Надевайте корректор{" "}
                <span
                  style={{
                    color: CYAN,
                    textShadow: "0 0 30px rgba(111,230,193,0.5)",
                  }}
                >
                  на ночь
                </span>
              </h2>

              {/* Divider */}
              <div
                style={{
                  width: "64px",
                  height: "2px",
                  background: `linear-gradient(90deg, ${CYAN} 0%, transparent 100%)`,
                  marginBottom: "20px",
                  opacity: 0.7,
                }}
              />

              {/* Sub-text */}
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(15px, 1.6vw, 20px)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: "560px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                и получите{" "}
                <span style={{ color: CYAN, fontWeight: 600 }}>
                  правильный прикус
                </span>{" "}
                и красивую улыбку
              </p>
            </div>

            {/* RIGHT – 4:3 photo block (1/4 of grid) */}
            <div
              className={`night-photo-wrapper ${hoveredPhoto ? "is-hovered" : ""}`}
              onMouseEnter={() => setHoveredPhoto(true)}
              onMouseLeave={() => setHoveredPhoto(false)}
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "75%", /* 4:3 */
                filter: "drop-shadow(0 16px 48px rgba(0,0,0,0.7)) drop-shadow(0 0 20px rgba(111,230,193,0.08))",
                transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
              }}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                @media (min-width: 768px) {
                  .night-photo-wrapper.is-hovered {
                    transform: translateY(-10px) scale(1.02);
                  }
                  .night-photo-glow {
                    transition: opacity 0.6s ease, transform 0.6s ease;
                  }
                  .night-photo-wrapper.is-hovered .night-photo-glow {
                    opacity: 0.1 !important;
                    transform: scale(1.1);
                  }
                }
              `}} />
              {/* Outer Cyan Glow Accent */}
              <div 
                className="night-photo-glow"
                style={{ position: "absolute", inset: "-15%", background: "radial-gradient(circle at center, rgba(111,230,193,0.1) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0, opacity: 0.4 }} 
              />
              {/* BG */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  clipPath: CLIP(16),
                  background: "rgba(111,230,193,0.07)",
                }}
              />
              {/* SVG border */}
              <svg
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 2,
                  pointerEvents: "none",
                  overflow: "visible",
                }}
                viewBox="0 0 300 225"
                preserveAspectRatio="none"
              >
                <polygon
                  points="17,1 299,1 299,208 283,224 1,224 1,17 17,1"
                  fill="none"
                  stroke={CYAN}
                  strokeWidth={hoveredPhoto ? "2.5" : "1.5"}
                  strokeOpacity={hoveredPhoto ? "1" : "0.55"}
                  className="transition-all duration-300"
                  style={{ filter: hoveredPhoto ? "drop-shadow(0 0 10px rgba(111,230,193,0.6))" : "none" }}
                />
              </svg>
              {/* Subtle inner glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(111,230,193,0.06) 0%, transparent 75%)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
              {/* Placeholder icon */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  color: "rgba(111,230,193,0.25)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: "1px solid rgba(111,230,193,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "'Furore', sans-serif",
                    fontSize: "7px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    opacity: 0.5,
                  }}
                >
                  Фото / видео
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
