import { useState } from "react";
import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";
import { CTAButton } from "../HeroSection";

// Authentic Specialist/Matrix Clipping Function
const CLIP = (s: number) =>
  `polygon(${s}px 0, 100% 0, 100% calc(100% - ${s}px), calc(100% - ${s}px) 100%, 0 100%, 0 ${s}px)`;

const methodologyCards = [
  {
    id: "01",
    title: "Безболезненно и безопасно",
    points: [
      "Без хирургических вмешательств и агрессивных ортодонтических методов.",
      "Процедуры мягкие, направлены на восстановление естественных биомеханических процессов организма."
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="1.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Устойчивый результат",
    points: [
      "После курса терапии прикус сохраняется стабильным, так как восстанавливается не только его форма, но и функции всего ВНЧС и черепа",
      "Снижается риск рецидива и повторной деформации прикуса."
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="1.2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Комплексный подход",
    points: [
      "Метод воздействует не только на зубочелюстную систему, но и на всё тело — устраняет причины неправильного прикуса, а не только внешние проявления.",
      "Учитывается влияние позвоночника, шеи, височно-нижнечелюстного сустава и мышечных цепей."
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" opacity="0.5" />
      </svg>
    ),
  },
];

function CustomInnovationCTA({ text }: { text: string }) {
  const CYAN = "#6FE6C1";
  const CLIP = (size: number) =>
    `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

  return (
    <a 
      href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group relative transition-transform active:scale-95"
      style={{ width: "100%" }}
    >
      <div 
        className="w-full relative transition-all duration-300"
        style={{
          height: "58px",
          background: "rgba(111,230,193,0.06)",
          clipPath: CLIP(12),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Glow background (visible on hover) */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: `linear-gradient(90deg, transparent 0%, ${CYAN}15 50%, transparent 100%)` }}
        />

        <span 
          className="font-['Furore'] tracking-[0.1em] text-white/90 transition-all group-hover:text-white group-hover:scale-105 relative z-10"
          style={{ 
            fontSize: "clamp(12px, 3.2vw, 14px)",
            textShadow: `0 0 10px ${CYAN}30`,
            textTransform: "uppercase"
          }}
        >
          {text}
        </span>
        
        {/* Continuous SVG Border Overlay */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" 
          viewBox="0 0 340 58" 
          preserveAspectRatio="none"
        >
          <polygon
            points="12,0 340,0 340,46 328,58 0,58 0,12 12,0"
            fill="none"
            stroke={CYAN}
            strokeWidth="1.5"
            strokeOpacity="0.4"
            vectorEffect="non-scaling-stroke"
            className="transition-all duration-300 group-hover:stroke-opacity-100 group-hover:stroke-[2]"
            style={{ filter: "drop-shadow(0 0 6px rgba(111,230,193,0.4))" }}
          />
        </svg>

        {/* Extra Hover Glow Ring (SVG) */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible opacity-0 group-hover:opacity-60 transition-opacity duration-300" 
          viewBox="0 0 340 58" 
          preserveAspectRatio="none"
        >
          <polygon
            points="12,0 340,0 340,46 328,58 0,58 0,12 12,0"
            fill="none"
            stroke={CYAN}
            strokeWidth="3.5"
            vectorEffect="non-scaling-stroke"
            style={{ filter: "blur(8px)" }}
          />
        </svg>
      </div>
    </a>
  );
}

export function BiteCorrectionMethodSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredInnovation, setHoveredInnovation] = useState(false);
  const totalSlides = 10;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section 
      id="methodology"
      className="methodology-section"
      style={{ backgroundColor: "#001d14", position: "relative", overflow: "hidden", padding: "100px 0" }}
    >
      {/* Background decorations from Specialist section */}
      <div style={{ position: "absolute", top: "-50px", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse at center, rgba(111,230,193,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-5px", bottom: "-5px", left: 0, right: 0, backgroundImage: "radial-gradient(circle, rgba(111,230,193,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

      <Container>
        {/* Section Heading */}
        <div className="section-heading" style={{ marginBottom: "60px" }}>
          <p style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            color: "rgba(111,230,193,0.5)",
            textTransform: "uppercase",
            margin: "0 0 14px",
          }}>
            Авторская методика
          </p>
          <h2 style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: "clamp(44px, 6vw, 76px)",
            fontWeight: 400,
            color: "#fff",
            textTransform: "uppercase",
            lineHeight: 0.92,
            letterSpacing: "0.02em",
            margin: 0,
          }}>
            Работа с <span style={{ color: "transparent", WebkitTextStroke: "1px #6FE6C1" }}>прикусом</span>
          </h2>
        </div>

        {/* Methodology Cards (3 in a Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 lg:mb-16">
          {methodologyCards.map((card, i) => (
            <div 
              key={i} 
              className={`methodology-card-wrapper ${hoveredCard === i ? "is-hovered" : ""}`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ display: "flex", flexDirection: "column", transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                @media (min-width: 768px) {
                  .methodology-card-wrapper.is-hovered {
                    transform: translateY(-8px);
                  }
                  .methodology-card-wrapper.is-hovered .card-border-frame {
                    filter: drop-shadow(0 0 15px rgba(111,230,193,0.4)) !important;
                  }
                }
              `}} />
              {/* Outer Cyan Border Frame */}
              <div 
                className="card-border-frame transition-all duration-300"
                style={{ background: CYAN, clipPath: CLIP(20), padding: "1.5px", filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.5))" }}
              >
                  <div 
                    className="methodology-card-content"
                    style={{ background: "#000d0a", clipPath: CLIP(19), position: "relative", display: "flex", flexDirection: "column" }}
                  >
                    
                    {/* Card Header: Icon Box & ID */}
                    <div className="flex justify-between items-start mb-6 md:mb-12">
                      <div className="card-icon-box" style={{ width: "48px", height: "48px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ position: "absolute", inset: 0, background: "#001a14", clipPath: CLIP(12) }} />
                        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 48 48">
                          <polygon 
                            points="12,0 48,0 48,36 36,48 0,48 0,12" 
                            fill="none" 
                            stroke={hoveredCard === i ? CYAN : "rgba(111,230,193,0.35)"} 
                            strokeWidth={hoveredCard === i ? "2" : "1.5"}
                            className="transition-all duration-300"
                          />
                        </svg>
                        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {card.icon}
                        </div>
                      </div>
                      <span className="card-id" style={{ fontFamily: "'Furore', sans-serif", fontSize: "14px", color: hoveredCard === i ? CYAN : "rgba(111,230,193,0.45)", letterSpacing: "0.15em", transition: "color 0.3s ease" }}>
                        0{i + 1}
                      </span>
                    </div>

                    {/* Body Content */}
                    <div className="mb-4 md:mb-6">
                      <h3 className="card-title" style={{ fontFamily: "'Furore', sans-serif", fontSize: "21px", color: "#fff", textTransform: "uppercase", lineHeight: 1.25, letterSpacing: "0.04em", margin: "0 0 20px" }}>
                        {card.title}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-5">
                      {card.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex gap-4 items-start">
                          <div style={{ marginTop: "8px", flexShrink: 0 }}>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <rect x="0.5" y="0.5" width="7" height="7" stroke={CYAN} strokeWidth="0.8" opacity={hoveredCard === i ? 1 : 0.6} className="transition-opacity duration-300" />
                              <rect x="3" y="3" width="2" height="2" fill={CYAN} opacity={hoveredCard === i ? 1 : 0.8} className="transition-opacity duration-300" />
                            </svg>
                          </div>
                          <p className="card-point-text" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 400, color: hoveredCard === i ? "#fff" : "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0, transition: "color 0.3s ease" }}>
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Bottom mechanical details (L-bracket) */}
                    <div className="card-spacer" style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end", paddingTop: "10px" }}>
                      <div style={{ width: "16px", height: "16px", borderRight: `1.5px solid ${hoveredCard === i ? CYAN : "rgba(111,230,193,0.5)"}`, borderBottom: `1.5px solid ${hoveredCard === i ? CYAN : "rgba(111,230,193,0.5)"}`, transition: "border-color 0.3s ease" }} />
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Block (Matrix Horizontal Style) */}
        <div 
          className={`innovation-block-wrapper ${hoveredInnovation ? "is-hovered" : ""}`}
          onMouseEnter={() => setHoveredInnovation(true)}
          onMouseLeave={() => setHoveredInnovation(false)}
          style={{ background: CYAN, clipPath: CLIP(30), padding: "1.5px", filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.7))", transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
        >
          <style dangerouslySetInnerHTML={{ __html: `
            @media (min-width: 768px) {
              .innovation-block-wrapper.is-hovered {
                transform: translateY(-10px);
                filter: drop-shadow(0 30px 60px rgba(0,0,0,0.8)) drop-shadow(0 0 20px rgba(111,230,193,0.3)) !important;
              }
              .slider-photo-wrapper {
                transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
              }
              .innovation-block-wrapper.is-hovered .slider-photo-wrapper {
                transform: scale(1.02);
              }
            }
          `}} />
          <div style={{ background: "linear-gradient(135deg, #001a12 0%, #000a06 100%)", clipPath: CLIP(29), display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
            
            {/* Left Column: Information */}
            <div className="w-full lg:w-[62%] p-6 md:p-12 lg:p-16 relative">
               <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(111,230,193,0.03) 1px, transparent 1px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />
               
               <div className="relative z-10" style={{ paddingTop: "10px" }}>
                 <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "11px", color: CYAN, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "28px", display: "block" }}>
                   инновация в работе с прикусом
                 </span>
                 <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", color: "#fff", textTransform: "uppercase", lineHeight: 1.1, margin: "0 0 16px" }}>
                   Корректор <span style={{ color: CYAN }}>Миката</span>
                 </h3>
                 <div style={{ width: "80px", height: "2px", background: CYAN, marginBottom: "40px" }} />

                 {/* List of Points (HUD Style) */}
                 <div className="flex flex-col gap-6 mb-12">
                   {[
                     "Исправление прикуса через расслабление мышц",
                     "Налаживание правильного носового дыхания",
                     "Защита зубов при бруксизме",
                     "Лечение храпа и профилактика апноэ"
                   ].map((point, pIdx) => (
                     <div key={pIdx} className="flex gap-4 items-start">
                       <div style={{ marginTop: "8px", flexShrink: 0 }}>
                         <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                           <rect x="0.5" y="0.5" width="7" height="7" stroke={CYAN} strokeWidth="0.8" opacity={hoveredInnovation ? 1 : 0.6} className="transition-opacity duration-300" />
                           <rect x="3" y="3" width="2" height="2" fill={CYAN} opacity={hoveredInnovation ? 1 : 1} />
                         </svg>
                       </div>
                       <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 400, color: hoveredInnovation ? "#fff" : "rgba(255,255,255,0.85)", lineHeight: 1.4, margin: 0, transition: "color 0.3s ease" }}>
                         {point}
                       </p>
                     </div>
                   ))}
                 </div>

                 <div style={{ maxWidth: "340px" }}>
                   <CustomInnovationCTA text="Получить консультацию" />
                 </div>
               </div>
            </div>

            {/* Right Column: Visualization Frame with Slider */}
            <div className="w-full lg:w-[38%] bg-[#00140f] border-l border-white/5 relative flex flex-col items-center justify-center p-8 md:p-12 lg:p-14 overflow-hidden">
               <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />
               
               {/* 3:4 Aspect Ratio Slider Outer Wrapper */}
               <div className="w-full relative slider-photo-wrapper" style={{ maxWidth: "340px" }}>
                  {/* The clipped container for slides only */}
                  <div className="relative w-full overflow-hidden" 
                       style={{ 
                         aspectRatio: "3 / 4", 
                         background: "#000805", 
                         clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" 
                       }}>
                    
                     {/* Slides */}
                     <div className="absolute inset-0 flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                       {Array.from({ length: totalSlides }).map((_, idx) => (
                         <div key={idx} className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center relative">
                           <div style={{ width: "100%", height: "100%", background: `radial-gradient(circle at center, rgba(111,230,193,${0.05 + idx * 0.01}) 0%, transparent 70%)` }} />
                           <div className="absolute inset-0 flex flex-col items-center justify-center border border-white/5">
                              <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "10px", color: CYAN, opacity: 0.3, marginBottom: "8px" }}>MIKATA_PRO_IMAGE_{idx + 1}</span>
                              <div className="text-white/20 text-xs font-mono uppercase tracking-widest">[ PHOTO PLACEHOLDER ]</div>
                           </div>
                         </div>
                       ))}
                     </div>

                     {/* Scanning Line */}
                     <div style={{ position: "absolute", left: 0, right: 0, height: "1.5px", background: "rgba(111,230,193,0.2)", boxShadow: "0 0 10px rgba(111,230,193,0.4)", animation: "sliderScan 4s linear infinite", zIndex: 5 }} />
                  </div>

                  {/* HUD Border Overlay (OUTSIDE the clipped div to prevent border truncation) */}
                  <svg 
                    viewBox="0 0 340 453" 
                    preserveAspectRatio="none" 
                    className="slider-hud-border"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 20 }}
                  >
                    <polygon 
                      points="12,0.5 339.5,0.5 339.5,441 328,452.5 0.5,452.5 0.5,12" 
                      fill="none" 
                      stroke={hoveredInnovation ? CYAN : "rgba(111,230,193,0.3)"} 
                      strokeWidth={hoveredInnovation ? "2" : "1"}
                      className="transition-all duration-300"
                    />
                  </svg>

                   {/* Corner Brackets */}
                   <div style={{ position: "absolute", top: 16, left: 16, width: "24px", height: "24px", borderTop: `2.5px solid ${hoveredInnovation ? CYAN : "rgba(111,230,193,0.45)"}`, borderLeft: `2.5px solid ${hoveredInnovation ? CYAN : "rgba(111,230,193,0.45)"}`, zIndex: 10, transition: "all 0.3s ease" }} />
                   <div style={{ position: "absolute", bottom: 16, right: 16, width: "24px", height: "24px", borderBottom: `2.5px solid ${hoveredInnovation ? CYAN : "rgba(111,230,193,0.45)"}`, borderRight: `2.5px solid ${hoveredInnovation ? CYAN : "rgba(111,230,193,0.45)"}`, zIndex: 10, transition: "all 0.3s ease" }} />
                </div>

                {/* Navigation Arrows Below */}
                <div className="flex justify-between items-center gap-2 mt-6 w-full mx-auto" style={{ maxWidth: "340px" }}>
                   <div className="flex-1 relative" style={{ height: "32px" }}>
                     <button 
                       onClick={prevSlide}
                       disabled={currentSlide === 0}
                       className="w-full h-full group flex items-center justify-center transition-all hover:bg-cyan-500/5 active:scale-95 disabled:opacity-20 disabled:pointer-events-none"
                       style={{ 
                         background: "rgba(111,230,193,0.04)",
                         clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)"
                       }}
                     >
                       <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="relative z-10 opacity-40 group-hover:opacity-100 transition-opacity">
                         <path d="M4 1.5L0.5 6L4 10.5" stroke={CYAN} strokeWidth="1.5" strokeLinecap="square" />
                         <path d="M0.5 6H23.5" stroke={CYAN} strokeWidth="1.5" strokeLinecap="square" />
                       </svg>
                     </button>
                     {/* HUD Contour Border (OUTSIDE clipped button) */}
                     <svg 
                       viewBox="0 0 140 32" 
                       preserveAspectRatio="none" 
                       className="nav-btn-svg"
                       style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                     >
                       <polygon 
                         points="8,0.5 139.5,0.5 139.5,23.5 131.5,31.5 0.5,31.5 0.5,8" 
                         fill="none" 
                         stroke={currentSlide === 0 ? "rgba(111,230,193,0.15)" : "rgba(111,230,193,0.35)"}
                         strokeWidth="1"
                         className="polygon-stroke transition-all duration-300"
                       />
                     </svg>
                   </div>

                   <div className="flex flex-col items-center flex-shrink-0 min-w-[60px]">
                     <div className="font-mono text-[14px] text-white/25 tracking-[0.1em] font-medium text-center">
                       {String(currentSlide + 1).padStart(2, '0')}<span className="text-white/25 mx-0.5">/</span>{String(totalSlides).padStart(2, '0')}
                     </div>
                   </div>

                   <div className="flex-1 relative" style={{ height: "32px" }}>
                     <button 
                       onClick={nextSlide}
                       disabled={currentSlide === totalSlides - 1}
                       className="w-full h-full group flex items-center justify-center transition-all hover:bg-cyan-500/5 active:scale-95 disabled:opacity-20 disabled:pointer-events-none"
                       style={{ 
                         background: "rgba(111,230,193,0.04)",
                         clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)"
                       }}
                     >
                       <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="relative z-10 opacity-40 group-hover:opacity-100 transition-opacity">
                         <path d="M20 1.5L23.5 6L20 10.5" stroke={CYAN} strokeWidth="1.5" strokeLinecap="square" />
                         <path d="M0.5 6H23.5" stroke={CYAN} strokeWidth="1.5" strokeLinecap="square" />
                       </svg>
                     </button>
                     {/* HUD Contour Border (OUTSIDE clipped button) */}
                     <svg 
                       viewBox="0 0 140 32" 
                       preserveAspectRatio="none" 
                       className="nav-btn-svg"
                       style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                     >
                       <polygon 
                         points="8,0.5 139.5,0.5 139.5,23.5 131.5,31.5 0.5,31.5 0.5,8" 
                         fill="none" 
                         stroke={currentSlide === totalSlides - 1 ? "rgba(111,230,193,0.15)" : "rgba(111,230,193,0.35)"}
                         strokeWidth="1"
                         className="polygon-stroke transition-all duration-300"
                       />
                     </svg>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Container>

      <style>{`
        .methodology-section {
          padding: 60px 0 !important;
        }
        .section-heading {
          margin-bottom: 32px !important;
        }
        @media (max-width: 767px) {
          .methodology-card-content {
            padding: 20px 16px;
            min-height: 300px;
          }
          .card-icon-box {
            width: 40px !important;
            height: 40px !important;
          }
          .card-id {
            font-size: 11px !important;
          }
          .card-title {
            font-size: 17px !important;
            margin-bottom: 12px !important;
          }
          .card-point-text {
            font-size: 13px !important;
            line-height: 1.5 !important;
          }
          .slider-hud-border polygon {
            stroke: #6FE6C1 !important;
            stroke-opacity: 1 !important;
            stroke-width: 2 !important;
          }
          .nav-btn-svg polygon {
            stroke: #6FE6C1 !important;
            stroke-opacity: 1 !important;
            stroke-width: 2 !important;
          }
        }
        @media (min-width: 768px) {
          .methodology-section {
            padding: 100px 0 !important;
          }
          .section-heading {
            margin-bottom: 60px !important;
          }
          .methodology-card-content {
            padding: 40px 34px;
            min-height: 410px;
          }
        }
        @keyframes scanLineAnim {
          0% { top: 10%; }
          50% { top: 90%; }
          100% { top: 10%; }
        }
        @keyframes sliderScan {
          0% { top: 0%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
