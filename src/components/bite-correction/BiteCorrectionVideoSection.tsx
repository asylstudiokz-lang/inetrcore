import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";
const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

export function BiteCorrectionVideoSection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "72px 0 80px",
        overflow: "hidden",
      }}
    >
      {/* Ambient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(111,230,193,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Top border glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(111,230,193,0.3) 35%, rgba(111,230,193,0.55) 50%, rgba(111,230,193,0.3) 65%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Diagonal lines — top right */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          opacity: 0.08,
          pointerEvents: "none",
        }}
        width="220"
        height="160"
        viewBox="0 0 220 160"
        fill="none"
      >
        <line x1="220" y1="0" x2="0" y2="160" stroke="#6FE6C1" strokeWidth="1" />
        <line x1="220" y1="20" x2="20" y2="160" stroke="#6FE6C1" strokeWidth="1" />
        <line x1="220" y1="40" x2="40" y2="160" stroke="#6FE6C1" strokeWidth="1" />
        <line x1="220" y1="60" x2="60" y2="160" stroke="#6FE6C1" strokeWidth="1" />
      </svg>

      {/* Dot grid — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "24px",
          width: "120px",
          height: "100px",
          backgroundImage: `radial-gradient(circle, ${CYAN} 1.2px, transparent 1.2px)`,
          backgroundSize: "16px 16px",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      />

      {/* ─── MOBILE ─── */}
      <div className="md:hidden">
        <Container>
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "28px", height: "1px", background: CYAN, opacity: 0.6 }} />
            <span
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.22em",
                color: CYAN,
                textTransform: "uppercase",
                opacity: 0.8,
              }}
            >
              // медиа
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Furore', sans-serif",
              fontSize: "clamp(20px, 6vw, 26px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.25,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              margin: "0 0 24px 0",
            }}
          >
            Так что же такое{" "}
            <span
              style={{
                color: CYAN,
                textShadow: "0 0 20px rgba(111,230,193,0.5)",
              }}
            >
              корректор МИКАТА?
            </span>
          </h2>

          {/* Video */}
          <div
            style={{
              position: "relative",
              background: `linear-gradient(135deg, rgba(111,230,193,0.25) 0%, rgba(0,0,0,0) 100%)`,
              padding: "2px",
              clipPath: CLIP(16),
              boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
            }}
          >
            <div
              style={{
                background: "#000a08",
                clipPath: CLIP(15),
                aspectRatio: "16/9",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0"
                title="Корректор МИКАТА"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, zIndex: 2 }}
              />
              {/* Scanline overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(rgba(111,230,193,0.025) 50%, transparent 50.1%)",
                  backgroundSize: "100% 4px",
                  pointerEvents: "none",
                  zIndex: 3,
                }}
              />
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
              gridTemplateColumns: "3fr 2fr",
              gap: "72px",
              alignItems: "center",
            }}
          >
            {/* LEFT — Video (wider) */}
            <div style={{ position: "relative" }}>
              {/* Corner accent — top left */}
              <div
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "-14px",
                  width: "40px",
                  height: "40px",
                  borderTop: `2px solid ${CYAN}`,
                  borderLeft: `2px solid ${CYAN}`,
                  opacity: 0.5,
                  zIndex: 10,
                }}
              />
              {/* Corner accent — bottom right */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-14px",
                  right: "-14px",
                  width: "40px",
                  height: "40px",
                  borderBottom: `2px solid ${CYAN}`,
                  borderRight: `2px solid ${CYAN}`,
                  opacity: 0.35,
                  zIndex: 10,
                }}
              />

              {/* Video frame */}
              <div
                style={{
                  position: "relative",
                  background: `linear-gradient(135deg, rgba(111,230,193,0.3) 0%, rgba(0,0,0,0) 100%)`,
                  padding: "2px",
                  clipPath: CLIP(24),
                  boxShadow: "0 24px 80px rgba(0,0,0,0.75), 0 0 40px rgba(111,230,193,0.08)",
                }}
              >
                <div
                  style={{
                    background: "#000a08",
                    clipPath: CLIP(23),
                    aspectRatio: "16/9",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0"
                    title="Корректор МИКАТА"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: "absolute", inset: 0, zIndex: 2 }}
                  />
                  {/* Scanline overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(rgba(111,230,193,0.025) 50%, transparent 50.1%)",
                      backgroundSize: "100% 4px",
                      pointerEvents: "none",
                      zIndex: 3,
                    }}
                  />
                </div>
              </div>

              {/* Tech dots row */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-28px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "6px",
                  opacity: 0.35,
                }}
              >
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "4px",
                      height: "4px",
                      background: CYAN,
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT — Text (narrower) */}
            <div style={{ position: "relative" }}>
              {/* Ghost watermark */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-10px",
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "clamp(60px, 7vw, 100px)",
                  color: "rgba(111,230,193,0.03)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                }}
              >
                миката
              </div>

              {/* Section tag */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "1px",
                    background: CYAN,
                    opacity: 0.6,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Furore', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    color: CYAN,
                    textTransform: "uppercase",
                    opacity: 0.75,
                  }}
                >
                  // медиа
                </span>
              </div>

              {/* Main title */}
              <h2
                style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "clamp(22px, 2.8vw, 38px)",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1.25,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  margin: "0 0 20px 0",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Так что же такое{" "}
                <span
                  style={{
                    color: CYAN,
                    textShadow: "0 0 30px rgba(111,230,193,0.5)",
                  }}
                >
                  корректор МИКАТА?
                </span>
              </h2>

              {/* Decorative divider */}
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  background: `linear-gradient(90deg, ${CYAN} 0%, transparent 100%)`,
                  opacity: 0.65,
                  marginBottom: "20px",
                }}
              />

              {/* Descriptor card */}
              <div
                style={{
                  background: `linear-gradient(135deg, rgba(0,40,24,0.6) 0%, rgba(0,10,6,0.8) 100%)`,
                  border: "1px solid rgba(111,230,193,0.12)",
                  clipPath: CLIP(10),
                  padding: "18px 20px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Посмотрите видео, чтобы узнать подробнее о принципе работы корректора и
                  его{" "}
                  <span style={{ color: CYAN }}>уникальных свойствах</span>.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
