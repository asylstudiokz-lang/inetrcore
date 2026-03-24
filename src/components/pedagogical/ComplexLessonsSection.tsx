import { Container } from "../ui/Container";
import { useState } from "react";

const CYAN = "#6FE6C1";

/* ── Diamond Cut Polygon ── */
const CLIP_PATH = "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))";

/* ── Abstract Neural Icon (Speech) ── */
function NeuralIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" style={{ opacity: 0.15, position: "absolute", top: "40px", right: "40px", pointerEvents: "none" }}>
      <circle cx="60" cy="60" r="3" fill={CYAN} />
      <circle cx="30" cy="40" r="2" fill={CYAN} />
      <circle cx="90" cy="40" r="2" fill={CYAN} />
      <circle cx="40" cy="90" r="2" fill={CYAN} />
      <circle cx="80" cy="90" r="2" fill={CYAN} />
      <path d="M60 60 L30 40 M60 60 L90 40 M60 60 L40 90 M60 60 L80 90 M30 40 L90 40" stroke={CYAN} strokeWidth="1" strokeDasharray="4 2" />
      <circle cx="60" cy="60" r="50" stroke={CYAN} strokeWidth="0.5" fill="none" opacity="0.5" />
      <circle cx="60" cy="60" r="35" stroke={CYAN} strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}

/* ── Abstract Wave Icon (Sensory) ── */
function WaveIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" style={{ opacity: 0.15, position: "absolute", top: "40px", right: "40px", pointerEvents: "none" }}>
      <path d="M10 60 Q35 10 60 60 T110 60" stroke={CYAN} strokeWidth="1.5" fill="none" />
      <path d="M10 70 Q35 20 60 70 T110 70" stroke={CYAN} strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M10 50 Q35 0 60 50 T110 50" stroke={CYAN} strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="60" r="45" stroke={CYAN} strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
  );
}

export function ComplexLessonsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section 
      className="relative overflow-hidden py-10 md:py-[100px]" 
      style={{ backgroundColor: "#001d14" }}
    >
      
      {/* ── AMBIENT DECORATION ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {/* Soft Radial Glows */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "700px", height: "700px", background: `radial-gradient(circle, ${CYAN}06 0%, transparent 75%)`, filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "600px", height: "600px", background: `radial-gradient(circle, ${CYAN}04 0%, transparent 75%)`, filter: "blur(30px)" }} />
        
        {/* Subtle Watermark */}
        <div style={{ 
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", 
          fontFamily: "'Furore', sans-serif", fontSize: "18vw", 
          color: "rgba(111,230,193,0.015)", textTransform: "uppercase",
          letterSpacing: "0.1em", userSelect: "none", whiteSpace: "nowrap"
        }}>ОЗДОРОВЛЕНИЕ</div>
      </div>

      <Container className="relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* CARD 1: КОМПЛЕКСНЫЕ ЗАНЯТИЯ */}
          <div 
            className="group relative"
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
             {/* Border Glow Shadow */}
             <div style={{ 
               position: "absolute", inset: "-4px", 
               background: CYAN, opacity: hovered === 1 ? 0.35 : 0, 
               clipPath: CLIP_PATH, filter: "blur(12px)", 
               transition: "opacity 0.5s ease" 
             }} />

             {/* ── CONFORMING BORDER WRAPPER ── */}
             <div style={{
               background: hovered === 1 ? CYAN : CYAN + "40",
               clipPath: CLIP_PATH,
               padding: "2px",
               height: "100%",
               transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
               transform: hovered === 1 ? "translateY(-8px)" : "none",
               boxShadow: hovered === 1 ? `0 20px 40px rgba(0,0,0,0.6), 0 0 20px ${CYAN}20` : "none",
             }}>
                <div style={{ 
                  position: "relative",
                  background: "linear-gradient(135deg, rgba(0,50,30,0.92) 0%, rgba(0,18,12,0.98) 70%)", 
                  clipPath: CLIP_PATH,
                  padding: "48px 45px 55px", 
                  height: "100%",
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  overflow: "hidden"
                }}>
                   {/* Top Stripe Accent */}
                   <div style={{ 
                     position: "absolute", top: 0, left: 0, right: 0, height: "4px", 
                     background: CYAN, boxShadow: hovered === 1 ? `0 0 15px ${CYAN}` : "none",
                     transition: "all 0.5s ease"
                   }} />

                   {/* Organic Illustration */}
                   <NeuralIcon />

                   {/* Content */}
                   <div className="relative z-10">
                      <h3 style={{ 
                        fontFamily: "'Furore', sans-serif", fontSize: "clamp(34px, 4.5vw, 56px)", lineHeight: 1.05, 
                        color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: "20px"
                      }}>
                        Комплексные<br/>занятия
                      </h3>
                      
                      <p style={{ 
                        fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, 
                        color: CYAN, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "32px",
                        opacity: 0.9
                      }}>
                        Квалифицированная помощь
                      </p>

                      <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg, ${CYAN}40, transparent)`, marginBottom: "32px" }} />

                      <p style={{ 
                        fontFamily: "'Montserrat', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.85)", 
                        lineHeight: 1.8, fontWeight: 400
                      }}>
                        Мы предоставляем профессиональную помощь детям с нарушениями речевого, психического и поведенческого развития. Наша команда специалистов работает по современным методикам помощи детям с РАС, ЗРР, ЗПРР, СДВГ и алалией.
                      </p>
                   </div>
                </div>
             </div>
          </div>

          {/* CARD 2: СЕНСОРНАЯ ИНТЕГРАЦИЯ */}
          <div 
            className="group relative"
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
             {/* Border Glow Shadow */}
             <div style={{ 
               position: "absolute", inset: "-4px", 
               background: CYAN, opacity: hovered === 2 ? 0.35 : 0, 
               clipPath: CLIP_PATH, filter: "blur(12px)", 
               transition: "opacity 0.5s ease" 
             }} />

             {/* ── CONFORMING BORDER WRAPPER ── */}
             <div style={{
               background: hovered === 2 ? CYAN : CYAN + "40",
               clipPath: CLIP_PATH,
               padding: "2px",
               height: "100%",
               transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
               transform: hovered === 2 ? "translateY(-8px)" : "none",
               boxShadow: hovered === 2 ? `0 20px 40px rgba(0,0,0,0.6), 0 0 20px ${CYAN}20` : "none",
             }}>
                <div style={{ 
                  position: "relative",
                  background: "linear-gradient(135deg, rgba(0,50,30,0.92) 0%, rgba(0,18,12,0.98) 70%)", 
                  clipPath: CLIP_PATH,
                  padding: "48px 45px 55px", 
                  height: "100%",
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  overflow: "hidden"
                }}>
                   {/* Top Stripe Accent */}
                   <div style={{ 
                     position: "absolute", top: 0, left: 0, right: 0, height: "4px", 
                     background: CYAN, boxShadow: hovered === 2 ? `0 0 15px ${CYAN}` : "none",
                     transition: "all 0.5s ease"
                   }} />

                   {/* Organic Illustration */}
                   <WaveIcon />

                   {/* Content */}
                   <div className="relative z-10">
                      <h3 style={{ 
                        fontFamily: "'Furore', sans-serif", fontSize: "clamp(34px, 4.5vw, 56px)", lineHeight: 1.05, 
                        color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: "20px"
                      }}>
                        Сенсорная<br/>интеграция
                      </h3>
                      
                      <p style={{ 
                        fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, 
                        color: CYAN, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "32px",
                        opacity: 0.9
                      }}>
                        Адаптивная культура
                      </p>

                      <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg, ${CYAN}40, transparent)`, marginBottom: "32px" }} />

                      <p style={{ 
                        fontFamily: "'Montserrat', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.85)", 
                        lineHeight: 1.8, fontWeight: 400
                      }}>
                        Развитие способности воспринимать и обрабатывать сенсорную информацию. Адаптивная физическая культура (АФК) — развитие моторики, координации и физической активности в адаптированном формате.
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
