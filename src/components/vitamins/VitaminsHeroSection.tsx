import { useState } from "react";
import { Container } from "../ui/Container";
import { CTAButton } from "../HeroSection";
import HeroMobile from "../../assets/vitamins/vitamins_hero_m.png";
import HeroDesktop from "../../assets/vitamins/vitamins_hero_d.png";

const CYAN = "#6FE6C1";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

export function VitaminsHeroSection() {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <section id="vitamins-hero" className="relative overflow-hidden pt-[60px] pb-[40px] md:py-0 w-full">
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
        
        @media (max-width: 768px) {
          #vitamins-hero {
            padding-bottom: 30px !important;
          }
        }
      `}} />
      {/* Фоновый радиальный свет (как в ЗПРР) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 70% 60% at 68% 50%, rgba(0,80,50,0.18) 0%, transparent 70%)",
        }}
      />
      
      {/* ── MOBILE ── */}
      <Container className="w-full">
        <div className="flex md:hidden flex-col items-center justify-center text-center gap-6 relative px-4 pt-[20px] pb-8 w-full">
           {/* Ghost watermark */}
           <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(60px, 16vw, 100px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
             комплексы
           </div>

           {/* Mobile Text */}
           <div className="z-10 w-full flex flex-col items-center relative">
             <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "16px" }}>
               <div style={{ width: "24px", height: "1px", background: CYAN, opacity: 0.7 }} />
               <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: CYAN, textTransform: "uppercase" }}>
                 Растительное функциональное питание
               </span>
               <div style={{ width: "24px", height: "1px", background: CYAN, opacity: 0.7 }} />
             </div>

             <h1 style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(26px, 8vw, 40px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.06em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", marginBottom: "16px" }}>
                витаминно минеральные<br/>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>комплексы</span>
             </h1>

             <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg, transparent 0%, rgba(111,230,193,0.3) 50%, transparent 100%)`, marginBottom: "16px", maxWidth: "280px" }} />

             <div style={{ background: "rgba(111,230,193,0.05)", border: "1px solid rgba(111,230,193,0.15)", padding: "10px 20px", borderRadius: "100px", marginBottom: "32px", display: "inline-block", boxShadow: "0 0 20px rgba(111,230,193,0.05) inset" }}>
               <span style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "10px", color: "rgba(247,250,248,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                 комплексы • натурально • растительно
               </span>
             </div>

              {/* Mobile Image */}
              <div style={{ flexShrink: 0, width: "100%", maxWidth: "200px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px auto", overflow: "hidden", clipPath: CLIP(20) }}>
                <img 
                  src={HeroMobile.src} 
                  alt="Витаминные комплексы"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>

              <div className="w-full flex justify-center mt-4">
                <div style={{ width: "310px", margin: "0 auto" }}>
                  <CTAButton text="Консультация" />
                </div>
              </div>
           </div>
        </div>
      </Container>

      {/* ── DESKTOP HERO WRAPPER ── */}
      <style dangerouslySetInnerHTML={{__html: `
        .vitamins-hero-desktop-wrapper {
          min-height: calc(100vh - 80px);
        }
        @media (min-width: 2050px) {
          .vitamins-hero-desktop-wrapper {
             min-height: 1000px;
             height: 1000px;
             max-height: 1000px;
          }
        }
      `}} />
      <div 
        className="hidden md:flex flex-col items-center justify-center w-full relative md:mb-0 px-8 vitamins-hero-desktop-wrapper" 
        style={{ position: "relative" }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none", zIndex: 0 }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="vitamins-hero-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke={CYAN} strokeWidth="0.6" />
                <circle cx="0" cy="0" r="1.5" fill={CYAN} fillOpacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#vitamins-hero-grid)" />
          </svg>
        </div>

        {/* Decorative Data Stream Lines */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          <div className="absolute left-[5%] top-[-100px] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[#6FE6C1]/30 to-transparent animate-[flowDown_8s_linear_infinite]" />
          <div className="absolute left-[12%] top-[-100px] w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#6FE6C1]/15 to-transparent animate-[flowDown_12s_linear_infinite]" style={{ animationDelay: "2s" }} />
          <div className="absolute right-[8%] top-[-100px] w-[1px] h-[400px] bg-gradient-to-b from-transparent via-[#6FE6C1]/20 to-transparent animate-[flowDown_10s_linear_infinite]" style={{ animationDelay: "5s" }} />
        </div>

        {/* Декоративные circuit-точки (как в ЗПРР) */}
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
            <filter id="cg-vitamins" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="7" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
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
               комплексы
             </div>

             <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
               <div style={{ width: "36px", height: "1px", background: CYAN, opacity: 0.7 }} />
               <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", color: CYAN, textTransform: "uppercase" }}>
                 Растительное функциональное питание
               </span>
             </div>

             <h1 className="uppercase" style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(34px, 4vw, 58px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.05, letterSpacing: "0.06em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", margin: "0 0 16px 0", position: "relative" }}>
                витаминно минеральные<br/>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>комплексы</span>
             </h1>

             <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg, ${CYAN} 0%, rgba(111,230,193,0.15) 50%, transparent 100%)`, marginBottom: "20px", maxWidth: "480px" }} />

             <div style={{ background: "rgba(111,230,193,0.05)", border: "1px solid rgba(111,230,193,0.15)", padding: "10px 24px", borderRadius: "100px", marginBottom: "40px", display: "inline-block", boxShadow: "0 0 20px rgba(111,230,193,0.05) inset" }}>
               <span style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "12px", color: "rgba(247,250,248,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                 комплексы • натурально • растительно
               </span>
             </div>

             <CTAButton text="Консультация" />
           </div>

            {/* Desktop Image */}
            <div style={{ flexShrink: 0, width: "clamp(300px, 32vw, 420px)", position: "relative", display: "flex", clipPath: CLIP(32), overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
              <img 
                src={HeroDesktop.src} 
                alt="Витаминно-минеральные комплексы"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
        </div>

        {/* Pulsing Scroll Arrow for Desktop Hero */}
        <div 
          className="absolute bottom-[60px] lg:bottom-[100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-20"
          onClick={() => {
            const el = document.getElementById("vitamins-advantages");
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
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: CYAN, textTransform: "uppercase" }}>
            Узнать больше
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="arrow-bounce">
            <path d="M5 9L12 16L19 9" stroke={CYAN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
