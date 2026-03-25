import { Container } from "../ui/Container";
import imgLogo from "@/assets/9f52023862aa50f87d6a753ba0b67d4e931e459f.png?url";
import { HudSVG } from "../HudSVG";
import { CTAButton } from "../HeroSection";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

export function ZprrHeroSection() {
  return (
    <section className="relative overflow-hidden pt-[60px] pb-0 md:py-0">
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
      <Container>
        <div className="flex md:hidden flex-col-reverse items-center text-center gap-16 mb-20 relative">
           {/* Ghost watermark */}
           <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(60px, 16vw, 100px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
             алалия
           </div>

           {/* Mobile Text */}
           <div className="z-10 w-full flex flex-col items-center relative">
             <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "16px" }}>
               <div style={{ width: "24px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
               <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: "#6FE6C1", textTransform: "uppercase" }}>
                 Комплексная работа при
               </span>
               <div style={{ width: "24px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
             </div>

             <h1 style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(28px, 9vw, 42px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.06em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", marginBottom: "16px", whiteSpace: "nowrap" }}>
                СЕНСОМОТОРНОЙ<br/>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>АЛАЛИИ</span>
             </h1>

             <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(111,230,193,0.3) 50%, transparent 100%)", marginBottom: "16px", maxWidth: "280px" }} />

             <div style={{ background: "rgba(111,230,193,0.05)", border: "1px solid rgba(111,230,193,0.15)", padding: "10px 20px", borderRadius: "100px", marginBottom: "32px", display: "inline-block", boxShadow: "0 0 20px rgba(111,230,193,0.05) inset" }}>
               <span style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "10px", color: "rgba(247,250,248,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                 ЗПРР • РАС • АУТИЗМ • ЗРР • СДВГ • ДЦП
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
             <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", outline: "1px solid rgba(111,230,193,0.22)" }} />
             <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2 }} viewBox="0 0 480 480">
               <g stroke="#6FE6C1" strokeOpacity="0.5" strokeWidth="1.5" fill="none"><path d="M57,57 L57,82" /><path d="M57,57 L82,57" /><path d="M423,57 L398,57" /><path d="M423,57 L423,82" /><path d="M57,423 L57,398" /><path d="M57,423 L82,423" /><path d="M423,423 L398,423" /><path d="M423,423 L423,398" /></g>
               <g fill="#6FE6C1" fillOpacity="0.55"><circle cx="57" cy="57" r="2.5" /><circle cx="423" cy="57" r="2.5" /><circle cx="57" cy="423" r="2.5" /><circle cx="423" cy="423" r="2.5" /></g>
             </svg>
             <img 
               alt="Логотип Центр Побед" 
               title="Центр Побед - Лечение ЗПРР и РАС"
               src={imgLogo} 
               style={{ width: "72%", height: "72%", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 30px rgba(9,185,131,0.4))" }} 
             />
           </div>
        </div>
      </Container>

      {/* ── DESKTOP HERO WRAPPER ── */}
      <style dangerouslySetInnerHTML={{__html: `
        .zprr-hero-desktop-wrapper {
          min-height: calc(100vh - 80px);
        }
        @media (min-width: 2050px) {
          .zprr-hero-desktop-wrapper {
             min-height: 1000px;
             height: 1000px;
             max-height: 1000px;
          }
        }
      `}} />
      <div 
        className="hidden md:flex flex-col items-center justify-center w-full relative md:mb-0 px-8 zprr-hero-desktop-wrapper" 
        style={{ position: "relative" }}
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

        {/* Background Blueprint Grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none", zIndex: 0 }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hero-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#6FE6C1" strokeWidth="0.6" />
                <circle cx="0" cy="0" r="1.5" fill="#6FE6C1" fillOpacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Decorative Data Stream Lines */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          <div className="absolute left-[5%] top-[-100px] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[#6FE6C1]/30 to-transparent animate-[flowDown_8s_linear_infinite]" />
          <div className="absolute left-[12%] top-[-100px] w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#6FE6C1]/15 to-transparent animate-[flowDown_12s_linear_infinite]" style={{ animationDelay: "2s" }} />
          <div className="absolute right-[8%] top-[-100px] w-[1px] h-[400px] bg-gradient-to-b from-transparent via-[#6FE6C1]/20 to-transparent animate-[flowDown_10s_linear_infinite]" style={{ animationDelay: "5s" }} />
        </div>

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
            <g opacity="0.25">
              <line x1="100" y1="480" x2="260" y2="480" strokeWidth="0.7" />
              <circle cx="100" cy="480" r="16" fillOpacity="0.06" strokeWidth="0.6" />
              <circle cx="100" cy="480" r="8" fillOpacity="0.18" strokeWidth="0" />
              <circle cx="260" cy="480" r="6" fillOpacity="0.15" strokeWidth="0.6" />
              <circle cx="260" cy="480" r="2.5" fillOpacity="0.55" strokeWidth="0" />
            </g>
            <g opacity="0.27">
              <line x1="1160" y1="420" x2="1340" y2="420" strokeWidth="0.7" />
              <circle cx="1160" cy="420" r="10" fillOpacity="0.08" strokeWidth="0.6" />
              <circle cx="1160" cy="420" r="4.5" fillOpacity="0.22" strokeWidth="0" />
              <circle cx="1340" cy="420" r="4" fillOpacity="0.18" strokeWidth="0.6" />
              <circle cx="1340" cy="420" r="1.8" fillOpacity="0.65" strokeWidth="0" />
            </g>
            <g opacity="0.22">
              <line x1="340" y1="820" x2="520" y2="820" strokeWidth="0.7" />
              <circle cx="340" cy="820" r="5" fillOpacity="0.18" strokeWidth="0.6" />
              <circle cx="340" cy="820" r="2" fillOpacity="0.6" strokeWidth="0" />
              <circle cx="520" cy="820" r="13" fillOpacity="0.07" strokeWidth="0.6" />
              <circle cx="520" cy="820" r="6" fillOpacity="0.18" strokeWidth="0" />
            </g>
            <g opacity="0.24">
              <line x1="1050" y1="760" x2="1200" y2="760" strokeWidth="0.7" />
              <circle cx="1050" cy="760" r="14" fillOpacity="0.07" strokeWidth="0.6" />
              <circle cx="1050" cy="760" r="6" fillOpacity="0.2" strokeWidth="0" />
              <circle cx="1200" cy="760" r="4" fillOpacity="0.18" strokeWidth="0.6" />
              <circle cx="1200" cy="760" r="1.8" fillOpacity="0.65" strokeWidth="0" />
            </g>
          </g>
        </svg>

        <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24 w-full max-w-[1200px] mx-auto relative z-10 flex-shrink-0 -mt-20 lg:-mt-24">
           {/* Desktop Text Block (Left) */}
           <div className="flex-1 flex flex-col items-start text-left z-10 w-full max-w-[660px] relative">
             <div style={{ position: "absolute", top: "-36px", left: "-16px", fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(60px, 8vw, 120px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
               алалия
             </div>

             <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
               <div style={{ width: "36px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
               <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", color: "#6FE6C1", textTransform: "uppercase" }}>
                 Комплексная работа при
               </span>
             </div>

             <h1 className="uppercase" style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(34px, 4.5vw, 68px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.05, letterSpacing: "0.06em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", margin: "0 0 16px 0", whiteSpace: "nowrap", position: "relative" }}>
                СЕНСОМОТОРНОЙ<br/>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>АЛАЛИИ</span>
             </h1>

             <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, #6FE6C1 0%, rgba(111,230,193,0.15) 50%, transparent 100%)", marginBottom: "20px", maxWidth: "480px" }} />

             <div style={{ background: "rgba(111,230,193,0.05)", border: "1px solid rgba(111,230,193,0.15)", padding: "10px 24px", borderRadius: "100px", marginBottom: "40px", display: "inline-block", boxShadow: "0 0 20px rgba(111,230,193,0.05) inset" }}>
               <span style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "12px", color: "rgba(247,250,248,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                 ЗПРР • РАС • АУТИЗМ • ЗРР • СДВГ • ДЦП
               </span>
             </div>

             <CTAButton text="Консультация" />
           </div>

           {/* Desktop Logo Block (Right) */}
           <div style={{ flexShrink: 0, width: "clamp(340px, 35vw, 480px)", height: "clamp(340px, 35vw, 480px)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <div className="absolute pointer-events-none" style={{ inset: "-15%" }}><HudSVG size={600} style={{ width: "100%", height: "100%" }} /></div>
             <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", background: "rgba(111,230,193,0.07)", border: "none" }} />
             <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", outline: "1px solid rgba(111,230,193,0.22)" }} />
             <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2 }} viewBox="0 0 480 480">
               <g stroke="#6FE6C1" strokeOpacity="0.5" strokeWidth="1.5" fill="none"><path d="M57,57 L57,82" /><path d="M57,57 L82,57" /><path d="M423,57 L398,57" /><path d="M423,57 L423,82" /><path d="M57,423 L57,398" /><path d="M57,423 L82,423" /><path d="M423,423 L398,423" /><path d="M423,423 L423,398" /></g>
               <g fill="#6FE6C1" fillOpacity="0.55"><circle cx="57" cy="57" r="2.5" /><circle cx="423" cy="57" r="2.5" /><circle cx="57" cy="423" r="2.5" /><circle cx="423" cy="423" r="2.5" /></g>
             </svg>
             <img 
               alt="Логотип Центр Побед" 
               title="Центр Побед - Инновационные методы лечения"
               src={imgLogo} 
               style={{ width: "72%", height: "72%", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 40px rgba(9,185,131,0.4))" }} 
             />
           </div>
        </div>
        
        {/* Pulsing Scroll Arrow for Desktop Hero */}
        <div 
          className="absolute bottom-[100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-20"
          onClick={() => {
            const el = document.getElementById("zprr-video");
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes flowDown {
              0% { transform: translateY(0); }
              100% { transform: translateY(1200px); }
            }
            @keyframes slideDown {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(8px); }
            }
            .arrow-bounce { animation: slideDown 2s ease-in-out infinite; }
          `}} />
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "#6FE6C1", textTransform: "uppercase" }}>
            Смотреть лекцию
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="arrow-bounce">
            <path d="M5 9L12 16L19 9" stroke="#6FE6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── VIDEO SECTION ── */}
      <Container>
        <div id="zprr-video" className="relative w-full max-w-[1024px] mx-auto mt-12 md:mt-20 mb-8 md:mb-12 z-10">
          
          {/* ── BACKGROUND VIDEO DECO (HEXAGON) ── */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-[0.05] z-0">
            <svg viewBox="0 0 400 300" className="w-full h-full fill-none stroke-[#6FE6C1]" strokeWidth="0.5">
              <path d="M200 20 L360 80 L360 220 L200 280 L40 220 L40 80 Z" />
              <path d="M200 40 L340 95 L340 205 L200 260 L60 205 L60 95 Z" strokeDasharray="4 8" />
              <line x1="200" y1="20" x2="200" y2="280" opacity="0.5" />
              <line x1="40" y1="80" x2="360" y2="220" opacity="0.3" />
              <line x1="40" y1="220" x2="360" y2="80" opacity="0.3" />
            </svg>
          </div>

          {/* Decorative Corner Accents */}
          <div style={{ position: "absolute", top: "-12px", left: "-12px", width: "40px", height: "40px", borderTop: "2px solid #6FE6C1", borderLeft: "2px solid #6FE6C1", opacity: 0.6, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "40px", height: "40px", borderBottom: "2px solid #6FE6C1", borderRight: "2px solid #6FE6C1", opacity: 0.6, pointerEvents: "none" }} />

          <div style={{
            background: "linear-gradient(135deg, rgba(111,230,193,0.5) 0%, rgba(111,230,193,0.1) 100%)",
            padding: "2px",
            clipPath: CLIP(24),
            filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.8))",
          }}>
            <div style={{
              background: "#000805",
              clipPath: CLIP(23),
              aspectRatio: "16/9",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/K7HDqvZI0YQ"
                title="View From A Blue Moon - Official Trailer (4K Ultra HD) - John Florence"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
