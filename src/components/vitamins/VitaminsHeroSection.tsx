import { Container } from "../ui/Container";
import imgLogo from "../../assets/9f52023862aa50f87d6a753ba0b67d4e931e459f.png?url";
import imgBottles from "../../assets/to_perfection_bottles.png?url";
import { HudSVG } from "../HudSVG";

const GOLD = "#D4AC6B";

export function VitaminsHeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "100px" }}>
      {/* Decorative background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, ${GOLD}0d 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />
      
      {/* ── MOBILE (Simplified Layout) ── */}
      <Container>
        <div className="flex md:hidden flex-col items-center text-center gap-12 mb-12 relative">
           {/* Mobile Logo */}
           <div style={{ flexShrink: 0, width: "220px", height: "220px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <div className="absolute pointer-events-none" style={{ inset: "-15%" }}><HudSVG size={300} style={{ width: "100%", height: "100%", opacity: 0.3 }} /></div>
             <img alt="ICIT Logo" src={imgLogo} style={{ width: "80%", height: "80%", objectFit: "contain", position: "relative", zIndex: 1, filter: `drop-shadow(0 0 20px ${GOLD}40)` }} />
           </div>

           {/* Mobile Text */}
           <div className="z-10 w-full flex flex-col items-center relative">
             <h1 style={{ fontFamily: "'Furore', sans-serif", fontSize: "28px", fontWeight: 400, color: GOLD, textTransform: "uppercase", lineHeight: 1.2, letterSpacing: "0.06em", marginBottom: "8px" }}>
                РАСТИТЕЛЬНОЕ<br/>
                ФУНКЦИОНАЛЬНОЕ ПИТАНИЕ
             </h1>
             <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textTransform: "lowercase", letterSpacing: "0.05em", marginBottom: "32px" }}>
                витаминно минеральные комплексы
             </p>

             <button className="site-btn" style={{ background: GOLD, color: "#000", fontFamily: "'Furore', sans-serif", fontSize: "12px", padding: "16px 32px", border: "none", cursor: "pointer", letterSpacing: "0.05em", textTransform: "uppercase", clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}>
               Получить консультацию
             </button>
           </div>

           {/* Mobile Bottles */}
           <div style={{ width: "100%", maxWidth: "300px", marginTop: "20px" }}>
             <img src={imgBottles} alt="To Perfection Supplements" style={{ width: "100%", filter: `drop-shadow(0 20px 40px rgba(0,0,0,0.5))` }} />
           </div>
        </div>
      </Container>

      {/* ── DESKTOP HERO WRAPPER ── */}
      <div 
        className="hidden md:flex flex-col items-center justify-center w-full relative px-8" 
        style={{ minHeight: "calc(100vh - 180px)", paddingBottom: "5vh" }}
      >
        {/* Background Blueprint Grid (Subtle Golden/Green) */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none", zIndex: 0 }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="vitamins-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke={GOLD} strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1" fill={GOLD} fillOpacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#vitamins-grid)" />
          </svg>
        </div>

        <div className="flex items-center justify-between gap-4 lg:gap-8 w-full max-w-[1300px] mx-auto relative z-10 flex-shrink-0">
           
           {/* Desktop Logo (Left) */}
           <div className="flex-1 flex justify-start">
             <div style={{ flexShrink: 0, width: "380px", height: "380px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <div className="absolute pointer-events-none" style={{ inset: "-20%" }}><HudSVG size={550} style={{ width: "100%", height: "100%", opacity: 0.4 }} /></div>
               <img alt="ICIT Logo" src={imgLogo} style={{ width: "75%", height: "75%", objectFit: "contain", position: "relative", zIndex: 1, filter: `drop-shadow(0 0 40px ${GOLD}30)` }} />
             </div>
           </div>

           {/* Desktop Text Block (Center) */}
           <div className="flex-[1.2] flex flex-col items-center text-center z-10 w-full relative">
             <h1 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 400, color: GOLD, textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.04em", textShadow: `0px 4px 30px ${GOLD}40`, marginBottom: "12px" }}>
                РАСТИТЕЛЬНОЕ<br/>
                ФУНКЦИОНАЛЬНОЕ ПИТАНИЕ
             </h1>
             <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.6)", textTransform: "lowercase", letterSpacing: "0.1em", marginBottom: "48px" }}>
                витаминно минеральные комплексы
             </p>

             <button className="site-btn" style={{ background: GOLD, color: "#111", fontFamily: "'Furore', sans-serif", fontSize: "15px", padding: "20px 48px", border: "none", cursor: "pointer", letterSpacing: "0.1em", textTransform: "uppercase", clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)", filter: `drop-shadow(0 10px 20px ${GOLD}30)` }}>
               Получить консультацию
             </button>
           </div>

           {/* Desktop Bottles (Right) */}
           <div className="flex-1 flex justify-end">
             <div style={{ position: "relative", width: "420px" }}>
               <div className="absolute inset-0 bg-radial from-gold/10 to-transparent blur-3xl opacity-30 animate-pulse" />
               <img src={imgBottles} alt="To Perfection Supplements" style={{ width: "100%", position: "relative", zIndex: 1, filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.6))", transform: "rotate(-5deg)" }} />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
