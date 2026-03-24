import { useState } from "react";
import { Container } from "../ui/Container";
import { useIsMobile } from "../ui/use-mobile";

const CYAN = "#6FE6C1";
const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

export function VitaminsVideoSection() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const isMobile = useIsMobile();

  return (
    <section id="vitamins-videos" className="relative overflow-hidden py-[60px] md:py-[100px]">
      
      {/* ── BACKGROUND ORNAMENTS ── */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 70% 30%, rgba(111,230,193,0.1) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(111,230,193,0.05) 0%, transparent 50%)", pointerEvents: "none" }} />
      
      {/* Decorative Diagonal Lines */}
      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none" }}>
        <defs>
          <pattern id="diag-lines-video" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke={CYAN} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag-lines-video)" />
      </svg>

      <div style={{ position: "absolute", top: "10%", right: "5%", width: "400px", height: "400px", border: "1px dashed rgba(111,230,193,0.06)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", left: "2%", width: "220px", height: "220px", border: "1px solid rgba(111,230,193,0.05)", transform: "rotate(15deg)", pointerEvents: "none" }} />
      
      {/* Floating crosshairs */}
      <svg style={{ position: "absolute", top: "15%", left: "10%", opacity: 0.1, pointerEvents: "none" }} width="30" height="30" viewBox="0 0 30 30">
        <path d="M15 0V30M0 15H30" stroke={CYAN} strokeWidth="1" />
      </svg>
      
      <Container>
        {/* ── SECTION HEADER ── */}
        <div className="w-full flex flex-col items-start mb-12 md:mb-20 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[32px] h-[1px] bg-[#6FE6C1] opacity-60"></div>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700, color: "#6FE6C1", letterSpacing: "0.25em", textTransform: "uppercase" }}>
              МЕДИА / КЛИНИЧЕСКИЙ РАЗБОР
            </span>
          </div>
          <h2 style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.1, margin: 0 }}>
            Экспертный <span style={{ color: "#00cf8f", textShadow: "0 0 30px rgba(0,207,143,0.4)" }}>Анализ</span>
          </h2>
        </div>

        {/* ── ASYMMETRIC VIDEO ROW ── */}
        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-8 lg:gap-16 min-h-[400px]">
          
          {/* VIDEO 1: Large & Higher */}
          <div 
            className="relative w-full md:w-[56%] z-20 transition-all duration-500 ease-out"
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
            style={{ 
              transform: isMobile ? "none" : `translateY(${hover1 ? "-56px" : "-48px"})`, // Base -48px
              // Actually md:-translate-y-12 is -48px. 
              // Let's use string template for the transform if it's dynamic.
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease"
            }}
          >
            {/* SVG Frame Accent */}
            <div style={{ position: "absolute", top: "-12px", left: "-12px", width: "40px", height: "40px", borderTop: "2px solid #6FE6C1", borderLeft: "2px solid #6FE6C1", opacity: hover1 ? 0.8 : 0.5, zIndex: 10, transition: "opacity 0.4s" }} />
            
            <div style={{
              background: hover1 ? "linear-gradient(135deg, rgba(111,230,193,0.5) 0%, rgba(0,0,0,0) 100%)" : "linear-gradient(135deg, rgba(111,230,193,0.3) 0%, rgba(0,0,0,0) 100%)",
              padding: "2px",
              clipPath: CLIP(24),
              boxShadow: hover1 
                ? `0 20px 60px rgba(0,0,0,0.8), 0 0 30px ${CYAN}30` 
                : "0 20px 60px rgba(0,0,0,0.7)",
              transition: "all 0.4s ease"
            }}>
              <div style={{
                background: "#000a08",
                clipPath: CLIP(23),
                aspectRatio: "16/9",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0"
                  title="Placeholder Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, zIndex: 2 }}
                ></iframe>
                {/* Scanline overlay effect */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(111,230,193,0.03) 50%, transparent 50.1%)", backgroundSize: "100% 4px", pointerEvents: "none", zIndex: 3, opacity: 0.4 }} />
              </div>
            </div>

            {/* Tech Decoration Dots */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-30">
               {[...Array(4)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#6FE6C1]" />)}
            </div>
          </div>

          {/* VIDEO 2: Small & Lower */}
          <div 
             className="relative w-full md:w-[38%] z-10 self-center md:self-auto transition-all duration-500 ease-out"
             onMouseEnter={() => setHover2(true)}
             onMouseLeave={() => setHover2(false)}
             style={{
               transform: isMobile ? "none" : `translateY(${hover2 ? "56px" : "64px"})`, // Base 64px
               transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease"
             }}
          >
            {/* SVG Frame Accent */}
            <div style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "40px", height: "40px", borderBottom: "2px solid #6FE6C1", borderRight: "2px solid #6FE6C1", opacity: hover2 ? 0.7 : 0.4, zIndex: 10, transition: "opacity 0.4s" }} />

            <div style={{
              background: hover2 ? "linear-gradient(135deg, rgba(111,230,193,0.4) 0%, rgba(0,0,0,0) 100%)" : "linear-gradient(135deg, rgba(111,230,193,0.2) 0%, rgba(0,0,0,0) 100%)",
              padding: "1px",
              clipPath: CLIP(20),
              boxShadow: hover2 
                ? `0 15px 40px rgba(0,0,0,0.7), 0 0 25px ${CYAN}25` 
                : "0 15px 40px rgba(0,0,0,0.6)",
              transition: "all 0.4s ease"
            }}>
              <div style={{
                background: "#000806",
                clipPath: CLIP(19.5),
                aspectRatio: "16/9",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/9bZkp7q19f0?modestbranding=1&rel=0"
                  title="Placeholder Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", inset: 0, zIndex: 2 }}
                ></iframe>
                 {/* Visual Noise Pattern overlay */}
                 <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(rgba(111,230,193,0.05) 1px, transparent 1px)`, backgroundSize: "10px 10px", pointerEvents: "none", zIndex: 3, opacity: 0.3 }} />
              </div>
            </div>

            {/* Decorative Grid behind video 2 */}
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "120px", height: "120px", backgroundImage: `radial-gradient(${CYAN} 1px, transparent 1px)`, backgroundSize: "16px 16px", opacity: 0.1, zIndex: -1 }} />
          </div>

        </div>

        {/* ── FOOTER DECORATION ── */}
        <div className="z-10 relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#6FE6C1]/20 to-transparent mt-24 md:mt-32" />
      </Container>
    </section>
  );
}
