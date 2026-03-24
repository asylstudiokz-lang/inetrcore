import { useState } from "react";
import { Container } from "../ui/Container";
import { CTAButton } from "../HeroSection";

const CYAN = "#6FE6C1";
const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;
const CLIP_INV = (size: number) =>
  `polygon(0 0, calc(100% - ${size}px) 0, 100% ${size}px, 100% 100%, ${size}px 100%, 0 calc(100% - ${size}px))`;

export function BiteCorrectionHeroSection() {
  const [hoveredPhoto, setHoveredPhoto] = useState(false);
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: "0", paddingBottom: "0" }}>
      {/* Decorative background glows - 1:1 with ZPRR */}
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
      
      {/* ── MOBILE (Text -> Image -> Button) ── */}
      <Container>
        <div className="flex md:hidden flex-col items-center justify-center text-center gap-8 relative px-6" style={{ height: "calc(100vh - 80px)" }}>
            {/* Ghost watermark - mobile */}
            <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Furore', sans-serif", fontSize: "clamp(60px, 16vw, 100px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
              МИКАТА
            </div>

            {/* Mobile Text - Compact Layout */}
            <div className="z-10 w-full flex flex-col items-center relative">
              <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
                <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: "#6FE6C1", textTransform: "uppercase" }}>
                  ИННОВАЦИОННАЯ МЕТОДИКА
                </span>
                <div style={{ width: "24px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
              </div>

              <h1 style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(28px, 9vw, 42px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.06em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", marginBottom: "16px" }}>
                 КОРРЕКТОР<br/>
                 <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>МИКАТА</span>
              </h1>

              <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(111,230,193,0.3) 50%, transparent 100%)", marginBottom: "16px", maxWidth: "280px" }} />

              <div className="mb-0">
                 <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>
                   для защиты зубов в Алматы
                 </p>
              </div>
            </div>

            {/* Mobile 3:4 Photo Placeholder - Smaller (Clean Border) */}
            <div style={{ flexShrink: 0, width: "280px", height: "373px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "90vw" }}>
              <div style={{ position: "absolute", inset: "0", clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))", background: "rgba(111,230,193,0.07)", border: "none" }} />
              
              {/* Continuous Contour Border Overlay */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none" }} viewBox="0 0 280 373" preserveAspectRatio="none">
                <polygon 
                  points="0,0 258,0 280,22 280,373 22,373 0,351" 
                  fill="none" 
                  stroke="#6FE6C1" 
                  strokeWidth="1.8" 
                  strokeOpacity="0.7"
                />
              </svg>

              {/* Top-Right HUD Plaque (Mobile) */}
              <div style={{ position: "absolute", top: "12px", right: "12px", zIndex: 5 }}>
                <div style={{ position: "relative", background: "rgba(111,230,193,0.8)", clipPath: CLIP_INV(7), padding: "1px" }}>
                  <div style={{ 
                    background: "#011a14", 
                    clipPath: CLIP_INV(7), 
                    padding: "5px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "9px", color: "#6FE6C1", letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap", lineHeight: 1.1 }}>
                      КОРРЕКТОР МИКАТА
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4 text-[#6FE6C1]/30">
                 <div className="w-14 h-14 border border-[#6FE6C1]/20 rounded-full flex items-center justify-center animate-pulse">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21" />
                    </svg>
                 </div>
                 <span className="font-['Furore'] text-[8px] tracking-[0.2em] uppercase opacity-50">Фото [3:4]</span>
              </div>
            </div>

            {/* Mobile Consultation Button - Moved after Image */}
            <div style={{ width: "310px", margin: "0 auto", position: "relative", zIndex: 10, paddingBottom: "20px" }}>
              <CTAButton text="Консультация" />
            </div>
        </div>
      </Container>

      {/* ── DESKTOP HERO WRAPPER ── */}
      <style dangerouslySetInnerHTML={{__html: `
        .bite-correction-hero-desktop-wrapper {
          min-height: calc(100vh - 72px);
        }
        @media (min-width: 2050px) {
          .bite-correction-hero-desktop-wrapper {
             min-height: 1000px;
             height: 1000px;
             max-height: 1000px;
          }
        }
      `}} />
      <div 
        className="hidden md:flex flex-col items-center justify-center w-full relative px-8 overflow-hidden bite-correction-hero-desktop-wrapper" 
      >
        {/* Background Radial Glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 60% at 68% 50%, rgba(0,80,50,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Background Blueprint Grid - Extended upwards and slightly downwards to hide edges */}
        <div style={{ position: "absolute", top: "-140px", left: 0, right: 0, bottom: "-20px", opacity: 0.08, pointerEvents: "none", zIndex: 0 }}>
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

        {/* Decorative Data Stream Lines - Extended upwards to Header (-140px) */}
        <div style={{ position: "absolute", top: "-140px", left: 0, right: 0, bottom: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          <div className="absolute left-[5%] top-[-100px] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[#6FE6C1]/30 to-transparent animate-[flowDown_8s_linear_infinite]" />
          <div className="absolute left-[12%] top-[-100px] w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#6FE6C1]/15 to-transparent animate-[flowDown_12s_linear_infinite]" style={{ animationDelay: "2s" }} />
          <div className="absolute right-[8%] top-[-100px] w-[1px] h-[400px] bg-gradient-to-b from-transparent via-[#6FE6C1]/20 to-transparent animate-[flowDown_10s_linear_infinite]" style={{ animationDelay: "5s" }} />
        </div>

        {/* Technical dot/circuit points (1:1 with ZPRR) - Extended upwards to Header (-140px) */}
        <svg
          style={{
            position: "absolute",
            top: "-140px",
            left: 0,
            width: "100%",
            height: "calc(100% + 160px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
          viewBox="0 0 1440 1040"
          preserveAspectRatio="xMidYMid slice"
        >
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
          </g>
        </svg>

        <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24 w-full max-w-[1240px] mx-auto relative z-10 flex-shrink-0">
            {/* Desktop Text Block (Left) */}
            <div className="flex-1 flex flex-col items-start text-left z-10 w-full max-w-[660px] relative">
              {/* Ghost watermark - desktop */}
              <div style={{ position: "absolute", top: "-36px", left: "-16px", fontFamily: "'Furore', sans-serif", fontSize: "clamp(60px, 8vw, 120px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
                МИКАТА
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div style={{ width: "36px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
                <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", color: "#6FE6C1", textTransform: "uppercase" }}>
                  ИННОВАЦИОННАЯ МЕТОДИКА
                </span>
              </div>

              <h1 className="uppercase" style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(34px, 4.5vw, 68px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.05, letterSpacing: "0.06em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", margin: "0 0 16px 0", whiteSpace: "nowrap", position: "relative" }}>
                 КОРРЕКТОР<br/>
                 <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>МИКАТА</span>
              </h1>

              <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, #6FE6C1 0%, rgba(111,230,193,0.15) 50%, transparent 100%)", marginBottom: "20px", maxWidth: "480px" }} />

              <div className="mb-10">
                 <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>
                   для защиты зубов в Алматы
                 </p>
              </div>

              <CTAButton text="Консультация" />
            </div>

            {/* Desktop 3:4 Photo Placeholder (Right) - LARGER (Clean Border) */}
            <div 
              className={`hero-photo-container relative ${hoveredPhoto ? "is-hovered" : ""}`}
              onMouseEnter={() => setHoveredPhoto(true)}
              onMouseLeave={() => setHoveredPhoto(false)}
              style={{ flexShrink: 0, width: "480px", height: "640px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                @media (min-width: 768px) {
                  .hero-photo-container.is-hovered {
                    transform: translateY(-10px);
                  }
                  .hero-photo-glow {
                    transition: opacity 0.6s ease, transform 0.6s ease;
                  }
                  .hero-photo-container.is-hovered .hero-photo-glow {
                    opacity: 0.12 !important;
                    transform: scale(1.1);
                  }
                }
              `}} />
              {/* Outer Glowing frame */}
              <div 
                className="hero-photo-glow"
                style={{ position: "absolute", inset: "-15%", pointerEvents: "none", background: "#6FE6C1", opacity: 0.03, filter: "blur(100px)", borderRadius: "100%" }} 
              />
              
              {/* Geometric clipped BG */}
              <div style={{ position: "absolute", inset: "0%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", background: "rgba(111,230,193,0.07)", border: "none" }} />
              
              {/* Continuous Contour Border Overlay */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none" }} viewBox="0 0 480 640" preserveAspectRatio="none">
                <polygon 
                  points="1,1 452,1 479,29 479,639 29,639 1,611 1,1" 
                  fill="none" 
                  stroke="#6FE6C1" 
                  strokeWidth={hoveredPhoto ? "2.5" : "1.8"} 
                  strokeOpacity={hoveredPhoto ? "1" : "0.7"}
                  className="transition-all duration-300"
                  style={{ filter: hoveredPhoto ? "drop-shadow(0 0 12px rgba(111,230,193,0.6))" : "none" }}
                />
              </svg>

              {/* Bottom-Left HUD Plaque (Desktop) */}
              <div style={{ position: "absolute", bottom: "20px", left: "20px", zIndex: 5 }}>
                <div style={{ position: "relative", background: "rgba(111,230,193,0.8)", clipPath: CLIP_INV(10), padding: "1.5px" }}>
                  <div style={{ background: "#011a14", clipPath: CLIP_INV(10), padding: "8px 24px" }}>
                    <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "10px", color: "#6FE6C1", letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap", lineHeight: 1 }}>
                      КОРРЕКТОР МИКАТА
                    </span>
                  </div>
                </div>
              </div>

              {/* Placeholder Content */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4 text-[#6FE6C1]/30">
                 <div className="w-20 h-20 border border-[#6FE6C1]/20 rounded-full flex items-center justify-center animate-pulse">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                       <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                       <circle cx="8.5" cy="8.5" r="1.5"/>
                       <polyline points="21 15 16 10 5 21"/>
                    </svg>
                 </div>
                 <span className="font-['Furore'] text-[10px] tracking-[0.3em] uppercase opacity-50">Фото [3:4]</span>
              </div>
            </div>
        </div>
        
        {/* Pulsing Scroll Arrow for Desktop Hero */}
        <div 
          className="absolute bottom-12 lg:bottom-[100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-20"
          onClick={() => {
            const el = document.getElementById("methodology");
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes slideDown {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(8px); }
            }
            .arrow-bounce { animation: slideDown 2s ease-in-out infinite; }
          `}} />
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "#6FE6C1", textTransform: "uppercase" }}>
            Узнать больше
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="arrow-bounce">
            <path d="M5 9L12 16L19 9" stroke="#6FE6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
