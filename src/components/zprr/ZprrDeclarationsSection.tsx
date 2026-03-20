import { useState } from "react";
import { Container } from "../ui/Container";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

const slides = [
  { num: "01", label: "Декларация о соответствии ЕАС", sub: "№ РОСС RU.ЖЖФО.1.Н00034 · до 11.10.2026" },
  { num: "02", label: "Сертификат соответствия ЕАС", sub: "№ РОСС RU.ЖЖФО.1.Н00035 · до 11.10.2026" },
  { num: "03", label: "Декларация Евразийского союза", sub: "№ РОСС RU.ЖЖФО.1.Н00036 · до 11.10.2026" },
  { num: "04", label: "Сертификат качества ЕАС", sub: "№ РОСС RU.ЖЖФО.1.Н00037 · до 11.10.2026" },
  { num: "05", label: "Декларация безопасности", sub: "№ РОСС RU.ЖЖФО.1.Н00038 · до 11.10.2026" },
];

function CertSlider() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", position: "relative", width: "100%" }}>
      <div style={{ position: "relative", width: "100%", maxWidth: "380px", height: "auto", flexShrink: 0 }}>
        <div style={{ width: "100%", aspectRatio: "1 / 1.414", position: "relative" }}>
          <div style={{ position: "absolute", top: "-10px", right: "-10px", width: "100%", height: "100%", border: "1px solid rgba(111,230,193,0.12)", clipPath: CLIP(16), pointerEvents: "none", transform: "rotate(1deg)" }} />
          <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "100%", height: "100%", border: "1px solid rgba(111,230,193,0.06)", clipPath: CLIP(16), pointerEvents: "none", transform: "rotate(2deg)" }} />
          <div style={{ position: "absolute", inset: 0, background: "#6FE6C1", clipPath: CLIP(16), padding: "1.5px", filter: "drop-shadow(0 0 30px rgba(111,230,193,0.15)) drop-shadow(0 15px 45px rgba(0,0,0,0.6))", zIndex: 2 }}>
            <div style={{ background: "linear-gradient(160deg, #001c10 0%, #000b06 100%)", clipPath: CLIP(15), height: "100%", width: "100%", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px", boxSizing: "border-box" }}>
              {/* Scanner Line */}
              <div 
                className="absolute left-0 w-full h-[1px] bg-[#6FE6C1]/30 shadow-[0_0_15px_rgba(111,230,193,0.5)] z-30" 
                style={{ animation: "scan 4s linear infinite" }}
              />
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scan {
                  0% { top: 0%; opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { top: 100%; opacity: 0; }
                }
              `}} />
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.04 }} viewBox="0 0 200 283" preserveAspectRatio="xMidYMid slice" fill="none">
                {[40,80,120,160].map((x,i) => <line key={i} x1={x} y1="0" x2={x} y2="283" stroke="#6FE6C1" strokeWidth="0.8"/>)}
                {[40,80,120,160,200,240,280].map((y,i) => <line key={i} x1="0" y1={y} x2="200" y2={y} stroke="#6FE6C1" strokeWidth="0.8"/>)}
              </svg>
              <div style={{ position: "absolute", bottom: "-10px", right: "12px", fontFamily: "'Furore', sans-serif", fontSize: "140px", lineHeight: 1, color: "transparent", WebkitTextStroke: "1px rgba(111,230,193,0.06)", userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>{slide.num}</div>
              <svg width="72" height="72" viewBox="0 0 64 64" fill="none" style={{ marginBottom: "20px", flexShrink: 0 }}><circle cx="32" cy="32" r="30" stroke="#6FE6C1" strokeWidth="1.2" opacity="0.3"/><circle cx="32" cy="32" r="22" stroke="#6FE6C1" strokeWidth="0.7" opacity="0.15"/><circle cx="32" cy="32" r="6" fill="rgba(111,230,193,0.1)" stroke="#6FE6C1" strokeWidth="1"/><path d="M22 32l6 6 14-14" stroke="#D3FFF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div style={{ textAlign: "center", position: "relative", zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ height: "1px", width: "100%", background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.5), transparent)", marginBottom: "12px" }} />
                <p style={{ fontFamily: "'Furore', sans-serif", fontSize: "10px", color: "rgba(111,230,193,0.6)", letterSpacing: "0.25em", textTransform: "uppercase", margin: "0 0 8px 0" }}>DOCUMENT VERIFIED</p>
                <div style={{ height: "48px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}><p style={{ fontFamily: "'Furore', sans-serif", fontSize: "14px", color: "#ffffff", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0, lineHeight: 1.3 }}>{slide.label}</p></div>
                <div style={{ height: "1px", width: "100%", background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.5), transparent)", marginTop: "12px", marginBottom: "12px" }} />
                <div style={{ height: "20px" }}><p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em", margin: 0 }}>{slide.sub}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "20px", position: "relative", zIndex: 10 }}>
        <button onClick={prev} style={{ background: "#6FE6C1", clipPath: CLIP(8), padding: "1px", border: "none", cursor: "pointer", filter: "drop-shadow(0 0 8px rgba(111,230,193,0.3))" }}><div style={{ background: "#001a0e", clipPath: CLIP(7), padding: "12px 20px" }}><svg width="18" height="8" viewBox="0 0 18 8" fill="none"><path d="M18 4H2M6 1L2 4L6 7" stroke="#6FE6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div></button>
        <div style={{ display: "flex", gap: "6px", width: "90px", justifyContent: "center" }}>{slides.map((_, i) => (<button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? "20px" : "6px", height: "6px", borderRadius: "3px", background: i === current ? "#6FE6C1" : "rgba(111,230,193,0.25)", border: "none", cursor: "pointer", padding: 0 }} />))}</div>
        <button onClick={next} style={{ background: "#6FE6C1", clipPath: CLIP(8), padding: "1px", border: "none", cursor: "pointer", filter: "drop-shadow(0 0 8px rgba(111,230,193,0.3))" }}><div style={{ background: "#001a0e", clipPath: CLIP(7), padding: "12px 20px" }}><svg width="18" height="8" viewBox="0 0 18 8" fill="none"><path d="M0 4H16M12 1L16 4L12 7" stroke="#6FE6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div></button>
      </div>
    </div>
  );
}

function BlueprintBg() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity: 0.15 }}>
      <svg width="100%" height="100%" fill="none" style={{ opacity: 0.6 }}>
        <defs>
          <pattern id="blueprint-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" stroke="rgba(111,230,193,0.3)" strokeWidth="0.5"/>
            <circle cx="0" cy="0" r="1.5" fill="rgba(111,230,193,0.6)"/>
          </pattern>
          <pattern id="dot-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(111,230,193,0.25)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)"/>
        <rect width="100%" height="100%" fill="url(#blueprint-grid)"/>
      </svg>
      <svg width="100%" height="100%" fill="none" style={{ position: "absolute", inset: 0 }}>
        <path d="M0 100 L1000 100 M200 0 L200 1000" stroke="rgba(111,230,193,0.15)" strokeWidth="0.8" strokeDasharray="10 10"/>
      </svg>
    </div>
  );
}

export function ZprrDeclarationsSection() {
  return (
    <section id="declarations" className="relative overflow-hidden" style={{ backgroundColor: "#001d14" }}>
      <BlueprintBg />
      
      {/* Ambient glows */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(ellipse 60% 50% at 10% 20%, rgba(111,230,193,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 90% 80%, rgba(111,230,193,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Unique Hexagon Motif — Bottom Left */}
      <svg style={{ position: "absolute", bottom: "40px", left: "20px", pointerEvents: "none", opacity: 0.1 }} width="120" height="140" viewBox="0 0 120 140" fill="none">
        <path d="M60 10 L110 40 L110 100 L60 130 L10 100 L10 40 Z" stroke="#6FE6C1" strokeWidth="1.2" strokeDasharray="5 5" />
        <path d="M60 25 L95 45 L95 95 L60 115 L25 95 L25 45 Z" stroke="#6FE6C1" strokeWidth="0.8" opacity="0.4" />
        <circle cx="60" cy="70" r="3" fill="#6FE6C1" opacity="0.6" />
      </svg>

      {/* Unique Corner Crosshair — Top Right */}
      <svg style={{ position: "absolute", top: "40px", right: "40px", pointerEvents: "none", opacity: 0.15 }} width="100" height="100" viewBox="0 0 100 100">
        <line x1="50" y1="20" x2="50" y2="35" stroke="#6FE6C1" strokeWidth="1" />
        <line x1="50" y1="65" x2="50" y2="80" stroke="#6FE6C1" strokeWidth="1" />
        <line x1="20" y1="50" x2="35" y2="50" stroke="#6FE6C1" strokeWidth="1" />
        <line x1="65" y1="50" x2="80" y2="50" stroke="#6FE6C1" strokeWidth="1" />
        <circle cx="50" cy="50" r="10" stroke="#6FE6C1" strokeWidth="0.8" strokeDasharray="3 3" />
      </svg>

      {/* ── MOBILE ── */}
      <div className="md:hidden" style={{ position: "relative", padding: "48px 0 52px" }}>
        <Container style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(30px, 8.5vw, 42px)", fontWeight: 400, color: "#fff", lineHeight: 0.95, textTransform: "uppercase", letterSpacing: "0.01em", margin: "0 0 32px 0" }}>
            Декларации о<br />
            <span style={{ WebkitTextStroke: "1px #6FE6C1", color: "transparent" }}>Соответствии</span>
          </h2>
          <div style={{ background: "rgba(111,230,193,0.15)", clipPath: CLIP(20), padding: "1.5px", marginBottom: "40px" }}>
            <div style={{ background: "linear-gradient(135deg, rgba(0,40,22,0.85) 0%, rgba(0,15,9,0.97) 100%)", clipPath: CLIP(19), padding: "28px 24px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 400, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", margin: 0 }}>
                Инновационная продукция витаминно-минеральных комплексов. Не имеет аналогов в мире — первая восстанавливающая продукция в <span style={{ color: "#6FE6C1" }}>хелатной водорастворимой форме.</span>
              </p>
            </div>
          </div>
          <CertSlider />
        </Container>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block" style={{ position: "relative", padding: "100px 0 110px" }}>
        <Container style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
            <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#6FE6C1", textTransform: "uppercase" }}>// декларации</span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(111,230,193,0.3) 0%, transparent 100%)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 50%))", gap: "100px", alignItems: "start" }}>
            <div className="flex-1" style={{ minWidth: 0 }}>
              <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(24px, 3.8vw, 60px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1.1, margin: "0 0 40px 0" }}>
                <span style={{ whiteSpace: "nowrap" }}>Декларации о</span>
                <br />
                <span style={{ color: "transparent", WebkitTextStroke: "1px #6FE6C1" }}>Соответствии</span>
                <br />
                <span style={{ fontSize: "0.6em", color: "transparent", WebkitTextStroke: "0.8px rgba(111,230,193,0.5)", whiteSpace: "nowrap" }}>
                  Евразийского Союза
                </span>
              </h2>
              <div style={{ background: "rgba(111,230,193,0.15)", clipPath: CLIP(20), padding: "1.5px", maxWidth: "560px" }}>
                <div style={{ background: "linear-gradient(135deg, rgba(0,40,22,0.85) 0%, rgba(0,15,9,0.97) 100%)", clipPath: CLIP(19), padding: "28px 32px" }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: 0 }}>
                    Инновационная продукция витаминно-минеральных комплексов. Не имеет аналогов в мире — первая восстанавливающая продукция в <span style={{ color: "#6FE6C1", fontWeight: 500 }}>хелатной водорастворимой форме.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1" style={{ minWidth: 0, display: "flex", justifyContent: "flex-end" }}>
              <CertSlider />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
