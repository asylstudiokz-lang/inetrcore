import { Container } from "../ui/Container";
import imgLogo from "@/assets/9f52023862aa50f87d6a753ba0b67d4e931e459f.png?url";
import { HudSVG } from "../HudSVG";
import { CTAButton } from "../HeroSection";

const CYAN = "#6FE6C1";

export function WoundTreatmentHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .wound-treatment-hero-desktop-wrapper {
          min-height: calc(100vh - 72px);
        }
        @media (min-width: 2050px) {
          .wound-treatment-hero-desktop-wrapper {
             min-height: 1000px;
             height: 1000px;
             max-height: 1000px;
          }
        }
        @keyframes slideDownHero {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .arrow-bounce-hero { animation: slideDownHero 2s ease-in-out infinite; }
      `}} />
      {/* Decorative background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(111,230,193,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      
      {/* ── MOBILE (Logo above Text) ── */}
      <Container className="md:hidden">
        <div style={{ height: "80px" }} />
        <div className="flex flex-col-reverse items-center text-center gap-16 mb-20 relative">
            {/* Ghost watermark */}
            <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Furore', sans-serif", fontSize: "clamp(60px, 16vw, 100px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
              регенерация
            </div>

            {/* Mobile Text */}
            <div className="z-10 w-full flex flex-col items-center relative">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "1px", background: CYAN, opacity: 0.7 }} />
                <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: CYAN, textTransform: "uppercase" }}>
                  Инновационная регенерация
                </span>
                <div style={{ width: "24px", height: "1px", background: CYAN, opacity: 0.7 }} />
              </div>

              <h1 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(24px, 8vw, 36px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.06em", textShadow: `0px 4px 40px ${CYAN}70`, marginBottom: "16px", whiteSpace: "nowrap" }}>
                 ЛЕЧЕНИЕ РАН
              </h1>

              <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg, transparent 0%, ${CYAN}40 50%, transparent 100%)`, marginBottom: "16px", maxWidth: "280px" }} />

              <div style={{ background: "rgba(111,230,193,0.05)", border: "1px solid rgba(111,230,193,0.15)", padding: "10px 20px", borderRadius: "100px", marginBottom: "32px", display: "inline-block", boxShadow: "0 0 20px rgba(111,230,193,0.05) inset" }}>
                <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "10px", color: "rgba(247,250,248,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  ЖКИМ • КВАНТОВО-ИНФОРМАЦИОННЫЕ КРЕМА
                </span>
              </div>

              <div style={{ width: "310px", margin: "0 auto" }}>
                <CTAButton text="Консультация" />
              </div>
            </div>

            {/* Mobile Logo with Hud Animation */}
            <div style={{ flexShrink: 0, width: "300px", height: "300px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="absolute pointer-events-none" style={{ inset: "-15%" }}><HudSVG size={400} style={{ width: "100%", height: "100%" }} /></div>
              <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))", background: "rgba(111,230,193,0.07)", border: "none" }} />
              <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", outline: `1px solid ${CYAN}40` }} />
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2 }} viewBox="0 0 480 480">
                <g stroke={CYAN} strokeOpacity="0.5" strokeWidth="1.5" fill="none"><path d="M57,57 L57,82" /><path d="M57,57 L82,57" /><path d="M423,57 L398,57" /><path d="M423,57 L423,82" /><path d="M57,423 L57,398" /><path d="M57,423 L82,423" /><path d="M423,423 L398,423" /><path d="M423,423 L423,398" /></g>
                <g fill={CYAN} fillOpacity="0.55"><circle cx="57" cy="57" r="2.5" /><circle cx="423" cy="57" r="2.5" /><circle cx="57" cy="423" r="2.5" /><circle cx="423" cy="423" r="2.5" /></g>
              </svg>
              <img 
                alt="Логотип Центр Побед" 
                title="Центр Побед - Лечение хронических ран"
                src={imgLogo} 
                style={{ width: "72%", height: "72%", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 30px rgba(9,185,131,0.4))" }} 
              />
            </div>
        </div>
      </Container>

      {/* ── DESKTOP HERO WRAPPER ── */}
      <div 
        className="hidden md:flex flex-col items-center justify-center w-full relative px-8 wound-treatment-hero-desktop-wrapper" 
      >
        {/* Background Radial Light */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 60% at 68% 50%, rgba(0,80,50,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Background Blueprint Grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none", zIndex: 0 }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hero-grid-wound" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke={CYAN} strokeWidth="0.6" />
                <circle cx="0" cy="0" r="1.5" fill={CYAN} fillOpacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-wound)" />
          </svg>
        </div>

        {/* Data Stream Lines */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          <div className="absolute left-[5%] top-[-100px] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[#6FE6C1]/30 to-transparent animate-[flowDown_8s_linear_infinite]" />
          <div className="absolute left-[12%] top-[-100px] w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#6FE6C1]/15 to-transparent animate-[flowDown_12s_linear_infinite]" style={{ animationDelay: "2s" }} />
          <div className="absolute right-[8%] top-[-100px] w-[1px] h-[400px] bg-gradient-to-b from-transparent via-[#6FE6C1]/20 to-transparent animate-[flowDown_10s_linear_infinite]" style={{ animationDelay: "5s" }} />
        </div>

        {/* Circuit Points SVG */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke={CYAN} fill={CYAN}>
            <g opacity="0.3">
               <line x1="60" y1="90" x2="180" y2="90" strokeWidth="0.7" />
               <circle cx="60" cy="90" r="12" fillOpacity="0.08" strokeWidth="0.6" />
               <circle cx="60" cy="90" r="5" fillOpacity="0.25" strokeWidth="0" />
               <circle cx="180" cy="90" r="4" fillOpacity="0.2" strokeWidth="0.6" />
               <circle cx="180" cy="90" r="1.8" fillOpacity="0.7" strokeWidth="0" />
            </g>
            <g opacity="0.28">
               <line x1="1220" y1="140" x2="1380" y2="140" strokeWidth="0.7" />
               <circle cx="1220" cy="140" r="5" fillOpacity="0.18" strokeWidth="0.6" />
               <circle cx="1220" cy="140" r="2" fillOpacity="0.6" strokeWidth="0" />
               <circle cx="1380" cy="140" r="14" fillOpacity="0.07" strokeWidth="0.6" />
               <circle cx="1380" cy="140" r="7" fillOpacity="0.2" strokeWidth="0" />
            </g>
          </g>
        </svg>

        <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24 w-full max-w-[1200px] mx-auto relative z-10 flex-shrink-0">
           {/* Desktop Text Block (Left) */}
           <div className="flex-1 flex flex-col items-start text-left z-10 w-full max-w-[660px] relative">
             <div style={{ position: "absolute", top: "-36px", left: "-16px", fontFamily: "'Furore', sans-serif", fontSize: "clamp(60px, 8vw, 120px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
               регенерация
             </div>

             <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
               <div style={{ width: "36px", height: "1px", background: CYAN, opacity: 0.7 }} />
               <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", color: CYAN, textTransform: "uppercase" }}>
                 Инновационная регенерация
               </span>
             </div>

             <h1 className="uppercase" style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(30px, 4vw, 60px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.05, letterSpacing: "0.06em", textShadow: `0px 4px 40px ${CYAN}70`, margin: "0 0 16px 0", whiteSpace: "nowrap", position: "relative" }}>
                ЛЕЧЕНИЕ РАН
             </h1>

             <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg, ${CYAN} 0%, ${CYAN}20 50%, transparent 100%)`, marginBottom: "20px", maxWidth: "480px" }} />

             <div style={{ background: "rgba(111,230,193,0.05)", border: "1px solid rgba(111,230,193,0.15)", padding: "10px 24px", borderRadius: "100px", marginBottom: "40px", display: "inline-block", boxShadow: "0 0 20px rgba(111,230,193,0.05) inset" }}>
               <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "12px", color: "rgba(247,250,248,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                 ЖКИМ • КВАНТОВО-ИНФОРМАЦИОННЫЕ КРЕМА
               </span>
             </div>

             <CTAButton text="Консультация" />
           </div>

           {/* Desktop Logo Block (Right) */}
           <div style={{ flexShrink: 0, width: "clamp(340px, 35vw, 480px)", height: "clamp(340px, 35vw, 480px)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <div className="absolute pointer-events-none" style={{ inset: "-15%" }}><HudSVG size={600} style={{ width: "100%", height: "100%" }} /></div>
             <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", background: "rgba(111,230,193,0.07)", border: "none" }} />
             <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", outline: `1px solid ${CYAN}40` }} />
             <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2 }} viewBox="0 0 480 480">
               <g stroke={CYAN} strokeOpacity="0.5" strokeWidth="1.5" fill="none"><path d="M57,57 L57,82" /><path d="M57,57 L82,57" /><path d="M423,57 L398,57" /><path d="M423,57 L423,82" /><path d="M57,423 L57,398" /><path d="M57,423 L82,423" /><path d="M423,423 L398,423" /><path d="M423,423 L423,398" /></g>
               <g fill={CYAN} fillOpacity="0.55"><circle cx="57" cy="57" r="2.5" /><circle cx="423" cy="57" r="2.5" /><circle cx="57" cy="423" r="2.5" /><circle cx="423" cy="423" r="2.5" /></g>
             </svg>
             <img 
               alt="Логотип Центр Побед" 
               title="Центр Побед - Регенеративная медицина"
               src={imgLogo} 
               style={{ width: "72%", height: "72%", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 40px rgba(9,185,131,0.4))" }} 
             />
           </div>
        </div>
        
        {/* Pulsing Scroll Arrow for Desktop Hero */}
        <div 
          className="absolute bottom-12 lg:bottom-[100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-20"
          onClick={() => {
            const el = document.getElementById("healing-process");
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: CYAN, textTransform: "uppercase" }}>
            Узнать больше
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="arrow-bounce-hero">
            <path d="M5 9L12 16L19 9" stroke={CYAN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
