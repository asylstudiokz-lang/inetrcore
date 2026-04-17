import { Container } from "../ui/Container";
import { CTAButton } from "../HeroSection";
import ZprrHeroImg from "../../assets/zprr/zprr_hero.png";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

export function ZprrHeroSection() {
  return (
    <section className="relative overflow-hidden pt-[60px] pb-[40px] md:py-0 w-full">
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
      
      {/* ── MOBILE ── */}
      <Container className="w-full">
        <div className="flex md:hidden flex-col items-center justify-center text-center gap-6 relative px-4 pt-[20px] pb-8 w-full">
           {/* Ghost watermark */}
           <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(60px, 16vw, 100px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
             алалия
           </div>

           {/* Mobile Text */}
           <div className="z-10 w-full flex flex-col items-center relative">
             <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "12px" }}>
               <div style={{ width: "24px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
               <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: "#6FE6C1", textTransform: "uppercase" }}>
                 Комплексная работа при:
               </span>
               <div style={{ width: "24px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
             </div>

             <h1 style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(20px, 7vw, 32px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.15, letterSpacing: "0.04em", textAlign: "center", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", marginBottom: "16px" }}>
               <span style={{ textShadow: "0px 4px 40px rgba(0,238,163,0.45)" }}>ЗПРР РАС АУТИЗМЕ</span>
               <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.85)" }}>
                 ЗРР СДВГ ДЦП
               </span>
             </h1>

             {/* Centered Highlight Block */}
             <div style={{ padding: "12px 20px", border: `1px solid rgba(111,230,193,0.3)`, background: "rgba(111,230,193,0.08)", borderRadius: "12px", marginBottom: 0, textAlign: "center", display: "inline-block", boxShadow: "0 0 16px rgba(111,230,193,0.1) inset" }}>
               <span style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(18px, 6vw, 24px)", color: "#6FE6C1", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.3 }}>
                 СЕНСОМОТОРНОЙ<br/>АЛАЛИИ
               </span>
             </div>

             {/* Mobile Image */}
             <div style={{
               flexShrink: 0,
               width: "100%",
               maxWidth: "340px",
               position: "relative",
               margin: "0 auto 6px auto",
               overflow: "hidden",
               borderRadius: "12px",
             }}>
               <img
                 src={ZprrHeroImg.src}
                 alt="ЗПРР — Сенсомоторная алалия"
                 style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
               />
             </div>

             <div style={{ width: "310px", margin: "-35px auto 0 auto", position: "relative", zIndex: 10 }}>
               <CTAButton text="Консультация" />
             </div>
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

        <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24 w-full max-w-[1200px] mx-auto relative z-10 flex-shrink-0 -mt-12 lg:-mt-20">
           {/* Desktop Text Block (Left) */}
           <div className="flex-1 flex flex-col items-start text-left z-10 w-full max-w-[660px] relative mt-16 lg:mt-24">
             <div style={{ position: "absolute", top: "-36px", left: "-16px", fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(60px, 8vw, 120px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
               алалия
             </div>

             <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "0.3em", color: "#6FE6C1", textTransform: "uppercase", marginBottom: "20px", display: "flex", alignItems: "center", gap: "12px" }}>
               <div style={{ width: "24px", height: "1px", background: "#6FE6C1", opacity: 0.5 }} />
               Комплексная работа при:
             </span>

             <h1 className="uppercase" style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(29px, 3.8vw, 53px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.05em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", margin: "0 0 24px 0", position: "relative", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span>ЗПРР РАС АУТИЗМЕ</span>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.85)" }}>
                  ЗРР СДВГ ДЦП
                </span>
             </h1>

             {/* Indented Highlight Block */}
             <div style={{ padding: "16px 24px", borderLeft: `4px solid #6FE6C1`, background: "linear-gradient(90deg, rgba(111,230,193,0.12) 0%, rgba(111,230,193,0.02) 100%)", borderRadius: "0 12px 12px 0", marginBottom: "48px", marginLeft: "12px", filter: "drop-shadow(0px 8px 32px rgba(111,230,193,0.15))" }}>
               <span style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(20px, 2.5vw, 36px)", color: "#6FE6C1", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.25 }}>
                 СЕНСОМОТОРНОЙ АЛАЛИИ
               </span>
             </div>

             <CTAButton text="Консультация" />
           </div>

           {/* Desktop Image */}
           <div style={{ flexShrink: 0, width: "clamp(440px, 46vw, 620px)", position: "relative", overflow: "hidden", borderRadius: "16px" }}>
             <img
               src={ZprrHeroImg.src}
               alt="ЗПРР — Сенсомоторная алалия"
               style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
             />
           </div>
        </div>
        
        {/* Pulsing Scroll Arrow for Desktop Hero */}
        <div 
          className="absolute bottom-[60px] lg:bottom-[100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-20"
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

      {/* ── VIDEO SECTION (desktop only) ── */}
      <Container className="hidden md:block">
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
