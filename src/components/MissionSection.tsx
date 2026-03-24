import { useState } from "react";
import { Container } from "./ui/Container";

export function MissionSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#001d14" }}>

      {/* ── MOBILE ── */}
      <div className="md:hidden" style={{ position: "relative", padding: "48px 0 52px", overflow: "hidden" }}>

        {/* Ambient glow */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: "100%", height: "100%",
          background: "radial-gradient(ellipse 80% 60% at 10% 30%, rgba(111,230,193,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Decorative circles top-right */}
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "240px", height: "240px",
          borderRadius: "50%",
          border: "1px solid rgba(111,230,193,0.08)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "-30px", right: "-30px",
          width: "160px", height: "160px",
          borderRadius: "50%",
          border: "1px solid rgba(111,230,193,0.11)",
          pointerEvents: "none",
        }} />

        {/* Decorative diagonal lines bottom-left */}
        <svg
          style={{ position: "absolute", bottom: "10px", left: "0", pointerEvents: "none", opacity: 0.13 }}
          width="120" height="80" viewBox="0 0 120 80" fill="none"
        >
          <line x1="0" y1="80" x2="120" y2="0" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="15" y1="80" x2="120" y2="15" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="30" y1="80" x2="120" y2="30" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="45" y1="80" x2="120" y2="45" stroke="#6FE6C1" strokeWidth="1" />
        </svg>

        <Container style={{ position: "relative", zIndex: 1 }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <span style={{
              fontFamily: "'Furore', sans-serif",
              fontSize: "10px", letterSpacing: "0.2em",
              color: "#6FE6C1", textTransform: "uppercase",
              flexShrink: 0,
            }}>// миссия</span>
            <div style={{
              flex: 1, height: "1px",
              background: "linear-gradient(90deg, rgba(111,230,193,0.35) 0%, transparent 100%)",
            }} />
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: "48px",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 0.95,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            margin: 0,
            marginBottom: "32px",
          }}>
            Наша<br />
            <span style={{ WebkitTextStroke: "1.5px #6FE6C1", color: "transparent" }}>миссия</span>
          </h2>

          {/* Styled card */}
          <div style={{
            background: "#6FE6C1",
            clipPath: "polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)",
            padding: "1.5px",
            filter: "drop-shadow(0 0 28px rgba(111,230,193,0.6)) drop-shadow(0 14px 40px rgba(0,0,0,0.85)) drop-shadow(0 0 60px rgba(111,230,193,0.2))",
          }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(0,40,22,0.85) 0%, rgba(0,15,9,0.97) 100%)",
              clipPath: "polygon(17px 0, 100% 0, 100% calc(100% - 17px), calc(100% - 17px) 100%, 0 100%, 0 17px)",
              padding: "28px 24px",
            }}>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.8)",
                margin: 0,
              }}>
                Создавать новые научные решения для медицины будущего, где лечение основано на{" "}
                <span style={{ color: "#6FE6C1" }}>глубоком понимании организма</span>{" "}
                и его самовосстанавливающем потенциале.
              </p>
            </div>
          </div>

          {/* Bottom divider */}
          <div style={{
            marginTop: "40px", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.18) 40%, rgba(111,230,193,0.18) 60%, transparent)",
          }} />

        </Container>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block" style={{ position: "relative", padding: "90px 0 100px" }}>

        {/* Subtle ambient glow */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: "40%", height: "100%",
          background: "radial-gradient(ellipse 70% 80% at 10% 50%, rgba(111,230,193,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Decorative shape — large circle outline top-right */}
        <div style={{
          position: "absolute",
          top: "-120px", right: "-80px",
          width: "420px", height: "420px",
          borderRadius: "50%",
          border: "1px solid rgba(111,230,193,0.07)",
          pointerEvents: "none",
        }} />
        {/* Inner circle */}
        <div style={{
          position: "absolute",
          top: "-60px", right: "-20px",
          width: "280px", height: "280px",
          borderRadius: "50%",
          border: "1px solid rgba(111,230,193,0.1)",
          pointerEvents: "none",
        }} />

        {/* Decorative shape — diagonal line cluster bottom-left */}
        <svg
          style={{ position: "absolute", bottom: "20px", left: "0", pointerEvents: "none", opacity: 0.15 }}
          width="180" height="120" viewBox="0 0 180 120" fill="none"
        >
          <line x1="0" y1="120" x2="180" y2="0" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="20" y1="120" x2="180" y2="20" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="40" y1="120" x2="180" y2="40" stroke="#6FE6C1" strokeWidth="1" />
          <line x1="60" y1="120" x2="180" y2="60" stroke="#6FE6C1" strokeWidth="1" />
        </svg>

        {/* Decorative shape — diamond top-left */}
        

        <Container style={{ position: "relative", zIndex: 1 }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "52px" }}>
            <span style={{
              fontFamily: "'Furore', sans-serif",
              fontSize: "11px", letterSpacing: "0.2em",
              color: "#6FE6C1", textTransform: "uppercase",
              flexShrink: 0,
            }}>// миссия</span>
            <div style={{
              flex: 1, height: "1px",
              background: "linear-gradient(90deg, rgba(111,230,193,0.35) 0%, transparent 100%)",
            }} />
          </div>

          {/* Two-column */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

            {/* LEFT: heading */}
            <h2 style={{
              fontFamily: "'Furore', sans-serif",
              fontSize: "clamp(52px, 5.5vw, 80px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              margin: 0,
            }}>
              Наша<br />
              <span style={{ WebkitTextStroke: "1.5px #6FE6C1", color: "transparent" }}>миссия</span>
            </h2>

            {/* RIGHT: text in styled block */}
            <div 
              style={{
                position: "relative",
                transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: hovered ? "translateY(-10px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div style={{
                background: hovered ? "#6FE6C1" : "rgba(111,230,193,0.7)",
                clipPath: "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
                padding: "1.5px",
                filter: hovered 
                  ? "drop-shadow(0 0 45px rgba(111,230,193,0.8)) drop-shadow(0 20px 60px rgba(0,0,0,0.85))"
                  : "drop-shadow(0 0 40px rgba(111,230,193,0.7)) drop-shadow(0 20px 60px rgba(0,0,0,0.85)) drop-shadow(0 0 80px rgba(111,230,193,0.3))",
                transition: "all 0.4s ease",
              }}>
                <div style={{
                  background: hovered
                    ? "linear-gradient(135deg, rgba(0,60,33,0.92) 0%, rgba(0,25,16,0.98) 100%)"
                    : "linear-gradient(135deg, rgba(0,40,22,0.85) 0%, rgba(0,15,9,0.97) 100%)",
                  clipPath: "polygon(23px 0, 100% 0, 100% calc(100% - 23px), calc(100% - 23px) 100%, 0 100%, 0 23px)",
                  padding: "36px 32px",
                  transition: "background 0.4s ease",
                }}>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "16px", fontWeight: 400,
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}>
                    Создавать новые научные решения для медицины будущего, где лечение основано на{" "}
                    <span style={{ color: "#6FE6C1" }}>глубоком понимании организма</span>{" "}
                    и его самовосстанавливающем потенциале.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom divider */}
          <div style={{
            marginTop: "72px", height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.18) 40%, rgba(111,230,193,0.18) 60%, transparent)",
          }} />

        </Container>
      </div>
    </section>
  );
}