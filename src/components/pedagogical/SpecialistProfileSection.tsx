import { Container } from "../ui/Container";
import { useState } from "react";

const CYAN = "#6FE6C1";
const CLIP_PATH = "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))";

const specialties = [
  {
    title: "Логопед",
    description: "Коррекция речевых нарушений, запуск речи, постановка звуков",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8" /><path d="M8 13h6" />
      </svg>
    )
  },
  {
    title: "Дефектолог",
    description: "Помощь детям с нарушениями развития и обучаемости",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" /><path d="M12 16h.01" />
      </svg>
    )
  },
  {
    title: "Нейропсихолог",
    description: "Развитие когнитивных функций, моторики и психических процессов",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1 0-4.88 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 0-4.88 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    )
  },
  {
    title: "АВА-специалист",
    description: "Прикладной анализ поведения, формирование навыков и коррекция поведения",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M9 3v18" /><path d="M15 3v18" /><path d="M3 9h18" /><path d="M3 15h18" />
      </svg>
    )
  }
];

export function SpecialistProfileSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredPhoto, setHoveredPhoto] = useState(false);

  return (
    <section className="relative overflow-hidden py-10 md:py-[100px]" style={{ backgroundColor: "#001d14" }}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(circle, ${CYAN} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
        <div className="absolute right-[5%] top-[10%] w-[25%] h-[35%] opacity-[0.03] hidden lg:block" style={{ background: CYAN, clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)", filter: "blur(40px)" }} />
        <div className="absolute left-[10%] bottom-[10%] w-[20%] h-[30%] opacity-[0.04] hidden lg:block" style={{ background: `linear-gradient(135deg, ${CYAN} 0%, transparent 100%)`, clipPath: "polygon(100% 0, 100% 100%, 0 100%)", filter: "blur(20px)" }} />
        <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[12%] h-[18%] opacity-[0.03] hidden lg:block" style={{ background: CYAN, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", filter: "blur(10px)" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-gradient from-[#6FE6C108] to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-radial-gradient from-[#09B98305] to-transparent blur-[100px]" />
      </div>

      <Container className="relative z-10">
        {/* ── MOBILE HEADER ── */}
        <div className="lg:hidden mb-8 text-center flex flex-col items-center">
            <p style={{ fontFamily: "'Furore', sans-serif", fontSize: "12px", color: CYAN, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px", opacity: 0.8 }}>Ваш специалист</p>
            <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(30px, 8vw, 40px)", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.1, marginBottom: "24px" }}>Помощь в развитии</h3>
            <div style={{ width: "80px", height: "4px", background: CYAN }} />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20 lg:gap-16 xl:gap-24">
          
          {/* ── PHOTO COLUMN ── */}
          <div className="w-full lg:w-[45%] max-w-[340px] lg:max-w-[540px]">
            <div className="group relative" onMouseEnter={() => setHoveredPhoto(true)} onMouseLeave={() => setHoveredPhoto(false)}>
               {/* Outer Glow */}
               <div style={{ 
                 position: "absolute", inset: "-10px", 
                 background: CYAN, opacity: hoveredPhoto ? 0.35 : 0.15, 
                 clipPath: CLIP_PATH, filter: "blur(25px)",
                 transition: "opacity 0.6s ease" 
               }} />

               {/* Conforming Border Wrapper */}
               <div style={{
                 background: hoveredPhoto ? CYAN : CYAN + "30",
                 clipPath: CLIP_PATH,
                 padding: "2px",
                 transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                 transform: hoveredPhoto ? "translateY(-10px)" : "none",
                 boxShadow: hoveredPhoto ? `0 20px 40px rgba(0,0,0,0.6), 0 0 20px ${CYAN}20` : "none"
               }}>
                  <div style={{ 
                    position: "relative",
                    background: "#00120a", 
                    clipPath: CLIP_PATH,
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    {/* Placeholder for Photo */}
                    <div className="flex flex-col items-center gap-4 text-center px-12 opacity-40 group-hover:opacity-80 transition-opacity">
                       <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                       </svg>
                       <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: CYAN, textTransform: "uppercase", letterSpacing: "0.2em" }}>Здесь будет<br/>фотография</p>
                    </div>
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-10 bg-repeat-y" style={{ backgroundImage: "linear-gradient(to bottom, transparent 0, rgba(111,230,193,0.5) 1px, transparent 2px)", backgroundSize: "100% 4px" }} />
                  </div>
               </div>

               {/* Name Tag Float */}
               <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-12 z-20 scale-[0.85] lg:scale-100 origin-bottom-right" style={{ transition: "transform 0.5s ease", transform: hoveredPhoto ? "translate(-8px, -8px)" : "none" }}>
                  <div style={{ background: hoveredPhoto ? CYAN : CYAN + "60", clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)", padding: "1.5px", transition: "background 0.4s ease" }}>
                    <div className="bg-[#00281e]/95 backdrop-blur-xl p-5 lg:p-8" style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}>
                      <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "24px", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.1 }} className="lg:text-[28px]">Ахметова<br/><span style={{ color: CYAN }}>Альбина</span></h2>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* ── CONTENT COLUMN ── */}
          <div className="w-full lg:w-[55%] flex flex-col">
             {/* Desktop Header */}
             <div className="hidden lg:block mb-[60px] text-left">
                <p style={{ fontFamily: "'Furore', sans-serif", fontSize: "12px", color: CYAN, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px", opacity: 0.8 }}>Ваш специалист</p>
                <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.1, marginBottom: "24px" }}>Профессиональная помощь<br/>в развитии ребенка</h3>
                <div style={{ width: "80px", height: "4px", background: CYAN }} />
             </div>

            {/* Role Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
               {specialties.map((spec, i) => (
                 <div 
                   key={i}
                   onMouseEnter={() => setHoveredCard(i)}
                   onMouseLeave={() => setHoveredCard(null)}
                   style={{
                     position: "relative",
                     background: hoveredCard === i ? CYAN : CYAN + "20",
                     clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))",
                     padding: "1.5px",
                     transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                     transform: hoveredCard === i ? "translateY(-6px)" : "none",
                     zIndex: hoveredCard === i ? 10 : 1,
                     filter: hoveredCard === i ? `drop-shadow(0 0 15px ${CYAN}30)` : "none",
                   }}
                 >
                    <div style={{
                      background: "rgba(0,18,10,0.95)",
                      clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))",
                      padding: "32px 28px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      position: "relative",
                      transition: "all 0.4s ease",
                    }}>
                       <div className="flex items-center justify-between relative z-10">
                          <div style={{ padding: "8px", background: "#6FE6C110", borderRadius: "8px", transition: "all 0.4s ease" }}>
                             <div style={{ color: CYAN, opacity: hoveredCard === i ? 1 : 0.7, filter: hoveredCard === i ? "brightness(1.2)" : "none" }}>{spec.icon}</div>
                          </div>
                          <div style={{ fontFamily: "'Furore', sans-serif", fontSize: "10px", color: CYAN, opacity: hoveredCard === i ? 0.8 : 0.3, transition: "all 0.4s ease" }}>0{i + 1}</div>
                       </div>
                       <h4 style={{ fontFamily: "'Furore', sans-serif", fontSize: "18px", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.05em", opacity: hoveredCard === i ? 1 : 0.9, transition: "all 0.4s ease" }}>{spec.title}</h4>
                       <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: hoveredCard === i ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)", lineHeight: 1.5, transition: "all 0.4s ease" }}>{spec.description}</p>
                       {/* HUD Corner Brackets */}
                       <div style={{ position: "absolute", top: "10px", left: "10px", width: "14px", height: "14px", borderTop: `1.5px solid ${CYAN}`, borderLeft: `1.5px solid ${CYAN}`, opacity: hoveredCard === i ? 0.8 : 0, transform: hoveredCard === i ? "translate(0,0)" : "translate(-4px,-4px)", transition: "all 0.4s ease" }} />
                       <div style={{ position: "absolute", bottom: "10px", right: "10px", width: "14px", height: "14px", borderBottom: `2.2px solid ${CYAN}`, borderRight: `2.2px solid ${CYAN}`, opacity: hoveredCard === i ? 1 : 0.4, transition: "all 0.4s ease" }} />
                    </div>
                 </div>
               ))}
            </div>

            {/* Tracing Border Button */}
            <div className="mt-12 flex justify-center sm:justify-start">
               <div className="relative group/btn" style={{ width: "320px", height: "64px" }}>
                  <style dangerouslySetInnerHTML={{__html: `
                    @keyframes trace-spec-btn {
                      0% { stroke-dashoffset: 1000; }
                      100% { stroke-dashoffset: 0; }
                    }
                    .spec-cta-btn:hover .trace-spec-path {
                      animation: trace-spec-btn 1.5s linear infinite;
                    }
                  `}} />
                  <a
                    href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spec-cta-btn block w-full h-full relative"
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ position: "absolute", inset: "-3px", background: CYAN, opacity: 0, clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)", filter: "blur(12px)", transition: "opacity 0.4s" }} className="group-hover/btn:opacity-30" />
                    
                    <button style={{
                      position: "absolute", inset: 0, width: "100%", height: "100%",
                      background: "rgba(111,230,193,0.1)", border: "none", 
                      clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)", 
                      color: "#fff", fontFamily: "'Furore', sans-serif",
                      fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase",
                      transition: "all 0.4s ease", cursor: "pointer"
                    }} className="group-hover/btn:bg-[#09B983] group-hover/btn:scale-[1.01] group-hover/btn:-translate-y-0.5">
                      Получить консультацию
                    </button>

                    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }} viewBox="0 0 320 64" preserveAspectRatio="none">
                       <path d="M14,0 L320,0 L320,50 L306,64 L0,64 L0,14 Z" fill="none" stroke={CYAN} strokeWidth="1.5" strokeOpacity="0.3" />
                       <path 
                         d="M14,0 L320,0 L320,50 L306,64 L0,64 L0,14 Z" 
                         fill="none" 
                         stroke={CYAN} 
                         strokeWidth="2"
                         strokeDasharray="1000"
                         strokeDashoffset="1000"
                         className="trace-spec-path transition-opacity duration-300 opacity-0 group-hover/btn:opacity-100"
                       />
                    </svg>
                  </a>
               </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
