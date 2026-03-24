import { Container } from "../ui/Container";
import { useRef, useState, useEffect } from "react";

import imgReview1 from "@/assets/reviews/review1.jpg?url";
import imgReview2 from "@/assets/reviews/review2.jpg?url";
import imgReview3 from "@/assets/reviews/review3.jpg?url";
import imgReview4 from "@/assets/reviews/review4.jpg?url";
import imgReview5 from "@/assets/reviews/review5.jpg?url";
import imgReview6 from "@/assets/reviews/review6.jpg?url";
import imgReview7 from "@/assets/reviews/review7.jpg?url";
import imgReview8 from "@/assets/reviews/review8.jpg?url";
import imgReview9 from "@/assets/reviews/review9.jpg?url";
import imgReview10 from "@/assets/reviews/review10.jpg?url";
import imgReview11 from "@/assets/reviews/review11.jpg?url";
import imgReview12 from "@/assets/reviews/review12.jpg?url";
import imgReview13 from "@/assets/reviews/review13.jpg?url";
import imgReview14 from "@/assets/reviews/review14.jpg?url";
import imgReview15 from "@/assets/reviews/review15.jpg?url";
import imgReview16 from "@/assets/reviews/review16.jpg?url";
import imgReview17 from "@/assets/reviews/review17.jpg?url";
import imgReview18 from "@/assets/reviews/review18.jpg?url";
import imgReview19 from "@/assets/reviews/review19.jpg?url";
import imgReview20 from "@/assets/reviews/review20.jpg?url";

// For cut corners
const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

const ytVideos = [
  { tag: "СЕНСОМОТОРНАЯ АЛАЛИЯ", videoId: "7CPsbl0dpyY" },
  { tag: "КОСАЯ ТАРАННАЯ КОСТЬ", videoId: "zoypRqF3L5o" },
  { tag: "РЕЗУЛЬТАТ ПОСЛЕ 3-Х СЕАНСОВ", videoId: "NWDTdkcMRJA" },
  { tag: "РЕЗУЛЬТАТЫ ПОДХОДА", videoId: "J0whIIoj928" }
];

// Actual story images and placeholders
const stories = [
  { id: 1, imgSrc: imgReview1 },
  { id: 2, imgSrc: imgReview2 },
  { id: 3, imgSrc: imgReview3 },
  { id: 4, imgSrc: imgReview4 },
  { id: 5, imgSrc: imgReview5 },
  { id: 6, imgSrc: imgReview6 },
  { id: 7, imgSrc: imgReview7 },
  { id: 8, imgSrc: imgReview8 },
  { id: 9, imgSrc: imgReview9 },
  { id: 10, imgSrc: imgReview10 },
  { id: 11, imgSrc: imgReview11 },
  { id: 12, imgSrc: imgReview12 },
  { id: 13, imgSrc: imgReview13 },
  { id: 14, imgSrc: imgReview14 },
  { id: 15, imgSrc: imgReview15 },
  { id: 16, imgSrc: imgReview16 },
  { id: 17, imgSrc: imgReview17 },
  { id: 18, imgSrc: imgReview18 },
  { id: 19, imgSrc: imgReview19 },
  { id: 20, imgSrc: imgReview20 },
];

export function ZprrReviewsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        slider.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 340;
      sliderRef.current.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' }); // width + gap
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 340;
      sliderRef.current.scrollBy({ left: (cardWidth + 32), behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="relative py-[60px] md:py-[100px] overflow-hidden" 
             style={{ backgroundColor: "#001d14" }}>
      
      {/* ── HIGH-TECH AMBIGENT BACKGROUND ── */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 10%, rgba(111,230,193,0.08) 0%, transparent 60%), radial-gradient(circle at 50% 90%, rgba(111,230,193,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
      
      {/* Prominent Geometric Background Shapes (Desktop) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Diamond Shape (Left) */}
        <div style={{
          position: "absolute",
          top: "10%", left: "-100px",
          width: "350px", height: "350px",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          background: "linear-gradient(135deg, rgba(111,230,193,0.07) 0%, rgba(0,29,20,0) 100%)",
        }} />
        
        {/* Dot Pattern Grid (Bottom Left) */}
        <div style={{
          position: "absolute",
          bottom: "15%", left: "5%",
          width: "160px", height: "160px",
          backgroundImage: "radial-gradient(circle, #6FE6C1 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
          opacity: 0.12,
        }} />
        
        {/* Hollow Circle Outline (Top Right) */}
        <div style={{
          position: "absolute",
          top: "-120px", right: "-80px",
          width: "420px", height: "420px",
          borderRadius: "50%",
          border: "1px solid rgba(111,230,193,0.06)",
        }} />
        
        {/* Inner Circle Outline */}
        <div style={{
          position: "absolute",
          top: "-60px", right: "-20px",
          width: "280px", height: "280px",
          borderRadius: "50%",
          border: "1px solid rgba(111,230,193,0.08)",
        }} />

        {/* Floating Cross (Middle Right) */}
        <svg style={{ position: "absolute", top: "15%", right: "10%", opacity: 0.12 }} width="40" height="40" viewBox="0 0 40 40" fill="none">
           <path d="M19 0H21V40H19V0Z" fill="#6FE6C1" />
           <path d="M0 19H40V21H0V19Z" fill="#6FE6C1" />
        </svg>

        {/* Subtle Radial Glows */}
        <div style={{ position: "absolute", top: "20%", right: "10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(111,230,193,0.03) 0%, transparent 70%)" }} />
      </div>

      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.15, mixBlendMode: "overlay", pointerEvents: "none" }}>
        <defs>
          <pattern id="diag-lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#6FE6C1" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag-lines)" />
      </svg>
      {/* Target Crosshairs purely for aesthetic */}
      <div style={{ position: "absolute", top: "10%", right: "5%", width: "120px", height: "120px", border: "1px dashed rgba(111,230,193,0.2)", borderRadius: "50%", pointerEvents: "none", animation: "spin 20s linear infinite" }} />
      <div style={{ position: "absolute", top: "10%", right: "5%", width: "120px", height: "120px", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <div style={{ width: "8px", height: "8px", background: "#6FE6C1", borderRadius: "50%", boxShadow: "0 0 10px #6FE6C1" }} />
      </div>

      <Container>
        {/* ── MODULE HEADER ── */}
        <div className="w-full flex flex-col items-start text-left mb-8 md:mb-[60px] relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[40px] h-[2px] bg-[#6FE6C1]"></div>
            <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "14px", color: "#6FE6C1", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              РЕАЛЬНЫЕ ИСТОРИИ
            </span>
          </div>
          <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(34px, 5vw, 64px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.1, margin: 0 }}>
            Отзывы и <span style={{ color: "#00cf8f", textShadow: "0 0 28px rgba(0,207,143,0.5)" }}>Результаты</span>
          </h2>
        </div>

        {/* ── YOUTUBE VIDEO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-[120px] relative z-10">
          {ytVideos.map((video, idx) => (
            <div key={idx} className="relative w-full group">
              {/* Corner Accents */}
              <div style={{ position: "absolute", top: "-10px", left: "-10px", width: "24px", height: "24px", borderTop: "2px solid #6FE6C1", borderLeft: "2px solid #6FE6C1", opacity: 0.6, pointerEvents: "none", zIndex: 20 }} className="group-hover:scale-110 transition-transform" />
              <div style={{ position: "absolute", bottom: "-10px", right: "-10px", width: "24px", height: "24px", borderBottom: "2px solid #6FE6C1", borderRight: "2px solid #6FE6C1", opacity: 0.6, pointerEvents: "none", zIndex: 20 }} className="group-hover:scale-110 transition-transform" />

              {/* Glowing Container */}
              <div style={{
                background: "linear-gradient(135deg, rgba(111,230,193,0.4) 0%, rgba(111,230,193,0.08) 100%)",
                padding: "2px",
                clipPath: CLIP(24),
                boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
              }} className="group-hover:shadow-[0_20px_50px_rgba(111,230,193,0.15)] transition-shadow duration-500">
                
                {/* Embedded Video */}
                <div style={{
                  background: "#000805",
                  clipPath: CLIP(23),
                  aspectRatio: "16/9",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {/* Subtle glass overlay while video loads or before play (if youtube enables standard background, we see it anyway) */}
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,18,12,0.5)", mixBlendMode: "overlay", pointerEvents: "none", zIndex: 1 }} />
                  
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}?modestbranding=1&rel=0`}
                    title={`Отзыв ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: "absolute", inset: 0, zIndex: 2 }}
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col justify-between items-start md:flex-row mb-0 md:mb-8 relative z-10 gap-6">
          <div>
            <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", margin: 0, textAlign: "left" }}>
              Что нам <span style={{ color: "#00cf8f", textShadow: "0 0 20px rgba(0,207,143,0.4)" }}>Пишут</span>
            </h3>
          </div>
          <div className="hidden md:flex gap-4">
                <button
                  onClick={scrollLeft}
                  className="site-btn"
                  style={{ 
                    width: "48px", 
                    height: "48px", 
                    clipPath: CLIP(10), 
                    border: "none", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    background: "rgba(111,230,193,0.15)", 
                    color: "#6FE6C1", 
                    cursor: canScrollLeft ? "pointer" : "default", 
                    outline: "1px solid rgba(111,230,193,0.3)",
                    opacity: canScrollLeft ? 1 : 0.3,
                    transition: "all 0.3s ease",
                    pointerEvents: canScrollLeft ? "auto" : "none"
                  }}
                >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
                <button
                  onClick={scrollRight}
                  className="site-btn"
                  style={{ 
                    width: "48px", 
                    height: "48px", 
                    clipPath: CLIP(10), 
                    border: "none", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    background: "rgba(111,230,193,0.15)", 
                    color: "#6FE6C1", 
                    cursor: canScrollRight ? "pointer" : "default", 
                    outline: "1px solid rgba(111,230,193,0.3)",
                    opacity: canScrollRight ? 1 : 0.3,
                    transition: "all 0.3s ease",
                    pointerEvents: canScrollRight ? "auto" : "none"
                  }}
                >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full mb-2 md:mb-[120px]">
          <div 
            ref={sliderRef}
            className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pt-6 pb-2 hide-scrollbar"
            style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
          >
            {stories.map((story, idx) => (
              <div key={idx} className="group flex-shrink-0 snap-start w-[min(68vw,340px)] md:w-[340px] aspect-[9/16] flex flex-col relative overflow-hidden pointer-events-auto" 
                   style={{
                     background: "linear-gradient(135deg, rgba(111,230,193,0.3) 0%, rgba(111,230,193,0.05) 100%)",
                     clipPath: CLIP(24),
                     padding: "1px",
                     boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
                   }}>
                 {/* Inner Content Layer */}
                 <div style={{
                   width: "100%", height: "100%", clipPath: CLIP(23),
                   background: "linear-gradient(150deg, #001f13 0%, #00100a 100%)",
                   position: "relative",
                   display: "flex", flexDirection: "column",
                   padding: "20px 16px", boxSizing: "border-box"
                 }}>
                   
                   {/* Top Site-style Header */}
                   <div className="flex items-center gap-3 w-full mb-6 z-10">
                     <div className="w-2 h-2 rounded-full bg-[#6FE6C1] shadow-[0_0_8px_#6FE6C1] animate-pulse" />
                     <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "11px", color: "#6FE6C1", letterSpacing: "0.15em" }}>
                       ИСТОРИЯ ПАЦИЕНТА
                     </span>
                     <div className="flex-1 h-px bg-gradient-to-r from-[#6FE6C1]/40 to-transparent" />
                   </div>

                   {/* Image Placeholder (Full height) */}
                   <div className="relative flex-1 w-full bg-[#E5E5EA]/5 rounded-xl overflow-hidden flex items-center justify-center border border-[#6FE6C1]/20" 
                        style={{ boxShadow: "0 0 30px rgba(0,0,0,0.6) inset" }}>
                     {story.imgSrc ? (
                       <img src={story.imgSrc} alt={`История ${story.id}`} className="w-full h-full object-cover" />
                     ) : (
                       <div className="flex flex-col items-center justify-center text-[#6FE6C1]/40">
                         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
                           <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                           <circle cx="8.5" cy="8.5" r="1.5"></circle>
                           <polyline points="21 15 16 10 5 21"></polyline>
                         </svg>
                         <span style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "10px", letterSpacing: "0.1em" }}>ФОТО ИЛИ СКРИНШОТ</span>
                         <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "14px", marginTop: "4px", color: "rgba(111,230,193,0.3)" }}>{String(story.id).padStart(2, '0')}</span>
                       </div>
                     )}
                   </div>
                 </div>
              </div>
            ))}
            {/* End spacing */}
            <div className="w-[10px] md:w-[60px] flex-shrink-0" />
          </div>
        </div>

        {/* ── MOBILE NAVIGATION (Below Slider) ── */}
        <div className="flex md:hidden justify-center gap-12 mb-20 relative z-10">
          <div className="relative group">
            <button
               onClick={scrollLeft}
               className="site-btn relative flex items-center justify-center transition-all duration-300 active:scale-90"
               style={{ 
                 width: "64px", height: "38px", border: "none", background: "none", 
                 cursor: canScrollLeft ? "pointer" : "default", padding: 0,
                 opacity: canScrollLeft ? 1 : 0.3,
                 pointerEvents: canScrollLeft ? "auto" : "none"
               }}
            >
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 64 38" preserveAspectRatio="none">
                <path 
                  d="M14 0.75 L63.25 0.75 L63.25 30 L56 37.25 L0.75 37.25 L0.75 14 Z" 
                  fill="rgba(111,230,193,0.05)" 
                  stroke="#48A189" 
                  strokeWidth="1.5" 
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48A189" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" />
              </svg>
            </button>
          </div>

          <div className="relative group">
            <button
               onClick={scrollRight}
               className="site-btn relative flex items-center justify-center transition-all duration-300 active:scale-90"
               style={{ 
                 width: "64px", height: "38px", border: "none", background: "none", 
                 cursor: canScrollRight ? "pointer" : "default", padding: 0,
                 opacity: canScrollRight ? 1 : 0.3,
                 pointerEvents: canScrollRight ? "auto" : "none"
               }}
            >
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 64 38" preserveAspectRatio="none">
                <path 
                  d="M14 0.75 L63.25 0.75 L63.25 30 L56 37.25 L0.75 37.25 L0.75 14 Z" 
                  fill="rgba(111,230,193,0.05)" 
                  stroke="#48A189" 
                  strokeWidth="1.5" 
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#48A189" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── GLOBAL SOCIAL ACTION BLOCK (HIGH-TECH) ── */}
        <div className="w-full flex flex-col items-center relative z-10 text-center">
           <h2 className="mb-4" style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(28px, 4.5vw, 64px)", fontWeight: 400, letterSpacing: "0.02em", lineHeight: 1.1, textTransform: "uppercase", margin: "0 0 16px" }}>
             <span style={{ color: "#ffffff" }}>БОЛЬШЕ </span>
             <span style={{ color: "transparent", WebkitTextStroke: "1px #6FE6C1" }}>НАСТОЯЩИХ</span><br />
             <span style={{ color: "#00cf8f", textShadow: "0 0 28px rgba(0,207,143,0.5)" }}>ИСТОРИЙ</span>
           </h2>
           <p className="mb-8" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontWeight: 500, color: "rgba(255,255,255,0.7)", maxWidth: "500px", letterSpacing: "0.02em" }}>
             Следите за результатами наших пациентов в социальных сетях:
           </p>

           <div className="flex flex-col md:flex-row gap-6 w-full max-w-[800px] mx-auto justify-center">
             
             {/* Instagram Tech Button */}
             <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="custom-btn group relative w-full md:w-1/2" 
                style={{ clipPath: CLIP(24), padding: "1.5px", textDecoration: "none", display: "inline-block", background: "linear-gradient(135deg, rgba(111,230,193,0.6) 0%, rgba(111,230,193,0.1) 100%)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
               <div style={{ clipPath: CLIP(23), background: "linear-gradient(135deg, rgba(0,52,34,0.9) 0%, rgba(0,18,12,0.95) 100%)", padding: "clamp(16px, 4vw, 24px) clamp(20px, 5vw, 32px)", display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
                 <div className="flex items-center gap-4 md:gap-5">
                   {/* Cyber Icon Box */}
                   <div className="w-12 h-12 md:w-14 md:h-14 bg-[#001d14] border border-[#6FE6C1]/40 shadow-[0_0_15px_rgba(111,230,193,0.15)_inset] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(111,230,193,0.4)_inset] transition-all duration-300">
                     <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="#6FE6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                       <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                     </svg>
                   </div>
                   <div className="flex flex-col text-left">
                     <span style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "10px", color: "rgba(111,230,193,0.6)", letterSpacing: "0.2em", marginBottom: "2px" }}>СЕТЬ</span>
                     <span className="group-hover:text-[#6FE6C1] transition-colors" style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(16px, 3vw, 20px)", color: "#fff", letterSpacing: "0.05em" }}>INSTAGRAM</span>
                   </div>
                 </div>
                 <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="#6FE6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
               </div>
             </a>

             {/* Youtube Tech Button */}
             <a href="https://www.youtube.com/@centr_pobed_kz" target="_blank" rel="noopener noreferrer" className="custom-btn group relative w-full md:w-1/2" 
                style={{ clipPath: CLIP(24), padding: "1.5px", textDecoration: "none", display: "inline-block", background: "linear-gradient(135deg, rgba(111,230,193,0.6) 0%, rgba(111,230,193,0.1) 100%)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
               <div style={{ clipPath: CLIP(23), background: "linear-gradient(135deg, rgba(0,52,34,0.9) 0%, rgba(0,18,12,0.95) 100%)", padding: "clamp(16px, 4vw, 24px) clamp(20px, 5vw, 32px)", display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
                 <div className="flex items-center gap-4 md:gap-5">
                   {/* Cyber Icon Box */}
                   <div className="w-12 h-12 md:w-14 md:h-14 bg-[#001d14] border border-[#6FE6C1]/40 shadow-[0_0_15px_rgba(111,230,193,0.15)_inset] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(111,230,193,0.4)_inset] transition-all duration-300">
                     <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="#6FE6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" fill="#001d14"></path>
                       <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="none" stroke="#6FE6C1"></polygon>
                     </svg>
                   </div>
                   <div className="flex flex-col text-left">
                     <span style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "10px", color: "rgba(111,230,193,0.6)", letterSpacing: "0.2em", marginBottom: "2px" }}>КАНАЛ</span>
                     <span className="group-hover:text-[#6FE6C1] transition-colors" style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(16px, 3vw, 20px)", color: "#fff", letterSpacing: "0.05em" }}>YOUTUBE</span>
                   </div>
                 </div>
                 <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="#6FE6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
               </div>
             </a>

           </div>
        </div>

      </Container>
    </section>
  );
}
