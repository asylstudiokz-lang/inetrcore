import { Container } from "../ui/Container";
import { useState } from "react";
import AlbinaPhoto from "@/assets/team/Albina.png";

const CYAN = "#6FE6C1";
const CLIP_PATH = "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))";
const CLIP_MODULE = "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)";

export function SpecialistProfileSection() {
  const [hoveredPhoto, setHoveredPhoto] = useState(false);

  return (
    <section className="relative overflow-hidden py-12 md:py-[100px]" style={{ backgroundColor: "#001d14" }}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(circle, ${CYAN} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
        <div className="absolute right-[5%] top-[10%] w-[25%] h-[35%] opacity-[0.03] hidden lg:block" style={{ background: CYAN, clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)", filter: "blur(40px)" }} />
        <div className="absolute left-[10%] bottom-[10%] w-[20%] h-[30%] opacity-[0.04] hidden lg:block" style={{ background: `linear-gradient(135deg, ${CYAN} 0%, transparent 100%)`, clipPath: "polygon(100% 0, 100% 100%, 0 100%)", filter: "blur(20px)" }} />
        <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-[12%] h-[18%] opacity-[0.03] hidden lg:block" style={{ background: CYAN, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", filter: "blur(10px)" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-gradient from-[#6FE6C108] to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-radial-gradient from-[#09B98305] to-transparent blur-[100px]" />
      </div>

      <Container className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-20">
          
          {/* ── PHOTO COLUMN ── */}
          <div className="w-full lg:w-[40%] max-w-[260px] lg:max-w-[460px] mx-auto lg:mx-0 mt-4 lg:mt-0 relative">
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
                    {/* Photo */}
                    <img 
                      src={AlbinaPhoto.src} 
                      alt="Альбина Ахметова" 
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transform: hoveredPhoto ? "scale(1.05)" : "scale(1)"
                      }}
                    />
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-10 bg-repeat-y" style={{ backgroundImage: "linear-gradient(to bottom, transparent 0, rgba(111,230,193,0.5) 1px, transparent 2px)", backgroundSize: "100% 4px" }} />
                  </div>
               </div>
               
               {/* Restored Floating Name Tag */}
               <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-12 z-20 scale-[0.85] lg:scale-100 origin-bottom-right" style={{ transition: "transform 0.5s ease", transform: hoveredPhoto ? "translate(-8px, -8px)" : "none" }}>
                  <div style={{ background: hoveredPhoto ? CYAN : CYAN + "60", clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)", padding: "1.5px", transition: "background 0.4s ease" }}>
                    <div className="bg-[#00281e]/95 backdrop-blur-xl p-5 lg:p-8" style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}>
                      <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "22px", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.1 }} className="lg:text-[28px]">Ахметова<br/><span style={{ color: CYAN }}>Альбина</span></h2>
                    </div>
                  </div>
               </div>
             </div>
          </div>

          {/* ── DASHBOARD COLUMN ── */}
          <div className="w-full lg:w-[60%] flex flex-col gap-5 lg:gap-6 mt-8 lg:mt-0">
             
             {/* Dashboard Grid for Modules 1 & 2 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                
                {/* Module 1: Competencies */}
                <DashboardModule title="КОМПЕТЕНЦИИ">
                   <ul style={{ 
                      fontFamily: "'Montserrat', sans-serif", 
                      fontSize: "13px", 
                      color: "rgba(255,255,255,0.85)", 
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      lineHeight: 1.8,
                      listStyleType: "none",
                      paddingLeft: 0,
                      margin: 0
                   }} className="flex flex-col gap-2">
                      <li className="flex gap-2 items-start"><span style={{color: CYAN}}>▸</span> ЛОГОПЕД</li>
                      <li className="flex gap-2 items-start"><span style={{color: CYAN}}>▸</span> ДЕФЕКТОЛОГ</li>
                      <li className="flex gap-2 items-start"><span style={{color: CYAN}}>▸</span> НЕЙРОПСИХОЛОГ</li>
                      <li className="flex gap-2 items-start"><span style={{color: CYAN}}>▸</span> АВА-СПЕЦИАЛИСТ</li>
                      <li className="flex gap-2 items-start"><span style={{color: CYAN}}>▸</span> СПЕЦИАЛИСТ ЛОГОРИТМИКИ</li>
                   </ul>
                </DashboardModule>

                {/* Module 2: Methods & Language */}
                <DashboardModule title="ПРИМЕНЯЕТ (МЕТОДИКА)">
                   <div className="flex flex-col h-full justify-between gap-4">
                      <p style={{ 
                         fontFamily: "'Montserrat', sans-serif", 
                         fontSize: "13px", 
                         color: "rgba(255,255,255,0.85)", 
                         textTransform: "uppercase",
                         fontWeight: 500,
                         letterSpacing: "0.05em",
                         lineHeight: 1.6,
                         margin: 0
                      }}>
                         ЭЛЕМЕНТЫ АФК,<br/>
                         СЕНСОРНАЯ ИНТЕГРАЦИЯ
                      </p>
                      {/* Language Badge */}
                      <div className="self-start mt-auto">
                        <div style={{
                            background: `${CYAN}50`, // acts as border color
                            padding: "1px", // acts as border width
                            clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                            display: "inline-block"
                        }}>
                            <div style={{
                                background: "rgba(0, 24, 16, 0.95)", // dark cyan-tinted inner background
                                padding: "4px 12px",
                                clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                                fontFamily: "'Furore', sans-serif",
                                fontSize: "12px",
                                color: "#6FE6C1",
                                letterSpacing: "0.1em",
                                boxShadow: "inset 0 0 10px rgba(111,230,193,0.15)" // optional subtle inner glow
                            }}>
                                ЯЗЫК: RUS
                            </div>
                        </div>
                      </div>
                   </div>
                </DashboardModule>
             </div>

             {/* Module 3: Intensive Program */}
             <div style={{ 
                 background: `${CYAN}30`, 
                 padding: "1.5px", 
                 clipPath: CLIP_MODULE 
             }}>
                 <div style={{ 
                     background: "linear-gradient(135deg, #002216 0%, #00120a 100%)", 
                     clipPath: CLIP_MODULE,
                     display: "flex",
                     flexDirection: "column",
                     height: "100%"
                 }}>
                     {/* Header */}
                     <div style={{ padding: "16px 24px", borderBottom: `1px solid ${CYAN}20`, background: "rgba(111,230,193,0.05)" }}>
                        <h4 style={{ fontFamily: "'Furore', sans-serif", fontSize: "16px", color: "#fff", letterSpacing: "0.1em", margin: 0 }}>
                            ПРОГРАММА ИНТЕНСИВА
                        </h4>
                     </div>
                     {/* Content Row */}
                     <div className="p-6 flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-6">
                        {/* Details */}
                        <ul className="flex flex-col gap-3 text-left w-full sm:w-auto">
                           <li className="flex items-start gap-3">
                              <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginTop: "4px", minWidth: "12px" }}>
                                 <polygon points="0,0 12,6 0,12" fill={CYAN} opacity={0.6}/>
                              </svg>
                              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
                                 1,5 часа в центре
                              </span>
                           </li>
                           <li className="flex items-start gap-3">
                              <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginTop: "4px", minWidth: "12px" }}>
                                 <polygon points="0,0 12,6 0,12" fill={CYAN} opacity={0.6}/>
                              </svg>
                              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
                                 12 занятий 3 раза<br/>в неделю (пн, ср, пт)
                              </span>
                           </li>
                        </ul>
                        {/* Price Display */}
                        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end sm:border-l border-[rgba(111,230,193,0.2)] sm:pl-6">
                           <div style={{
                               fontFamily: "'Furore', sans-serif",
                               fontSize: "clamp(24px, 4vw, 32px)",
                               color: CYAN,
                               letterSpacing: "0.05em",
                               textShadow: `0 0 20px ${CYAN}40`,
                               textAlign: "center"
                           }}>
                               350 000 <span style={{ fontSize: "0.5em", opacity: 0.8, verticalAlign: "top" }}>ТГ</span>
                           </div>
                        </div>
                     </div>
                     {/* Bottom Decorative Edge */}
                     <div style={{ height: "4px", background: `linear-gradient(90deg, ${CYAN} 0%, transparent 100%)`, opacity: 0.5 }} />
                 </div>
             </div>

             {/* Tracing Border Button (CTA) */}
             <div className="mt-4 flex justify-center lg:justify-start">
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

function DashboardModule({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div style={{ 
            background: `${CYAN}20`, 
            padding: "1px", 
            clipPath: CLIP_MODULE,
            height: "100%"
        }}>
            <div style={{ 
                background: "rgba(0, 20, 14, 0.8)", 
                clipPath: CLIP_MODULE,
                height: "100%",
                display: "flex",
                flexDirection: "column"
            }}>
                <div style={{ padding: "14px 20px", borderBottom: `1px solid ${CYAN}15` }}>
                   <div style={{ fontFamily: "'Furore', sans-serif", fontSize: "11px", color: CYAN, letterSpacing: "0.15em", opacity: 0.9 }}>
                       // {title}
                   </div>
                </div>
                <div style={{ padding: "20px", flex: 1 }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
