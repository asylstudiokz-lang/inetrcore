import { Container } from "../ui/Container";
import { useState } from "react";
import AlbinaPhoto from "@/assets/pedagogical/ped_team_1.png";
import NadezhdaPhoto from "@/assets/pedagogical/ped_team_2.png";
import GulzhanPhoto from "@/assets/pedagogical/ped_team_3.png";

const CYAN = "#6FE6C1";

const specialists = [
  {
    name: "Ахметова\nАльбина\nЕвгеньевна",
    photo: AlbinaPhoto,
    roles: ["ЛОГОПЕД", "ДЕФЕКТОЛОГ", "НЕЙРОПСИХОЛОГ", "АВА-СПЕЦИАЛИСТ", "СПЕЦИАЛИСТ\nЛОГОРИТМИКИ"],
    lang: ["RUS"],
    methods: "НА ЗАНЯТИЯХ ПРИМЕНЯЕТ: ЭЛЕМЕНТЫ АФК,\nСЕНСОРНУЮ ИНТЕГРАЦИЮ",
    price: "350 000",
    priceSub: "1,5 часа в центре\n12 занятий 3 раза в неделю\n(пн, ср, пт)",
    rusAbsolute: false
  },
  {
    name: "ПЛАКСУНОВА\nНАДЕЖДА\nВАЛЕРЬЕВНА",
    photo: NadezhdaPhoto,
    roles: ["ЛОГОПЕД", "АВА СПЕЦИАЛИСТ", "ДЕФЕКТОЛОГ", "НЕЙРОПСИХОЛОГ"],
    lang: ["RUS"],
    methods: "НА ЗАНЯТИЯХ ПРИМЕНЯЕТ: ЭЛЕМЕНТЫ АФК,\nСЕНСОРНУЮ ИНТЕГРАЦИЮ",
    price: "150 000",
    priceSub: "по 45 минут\n12 занятий 3 раза в неделю\n(вт, чт, бс)",
    rusAbsolute: true
  },
  {
    name: "ШАЙМАРДАНОВА\nГУЛЬЖАН\nСЕЛТКАЛИЕВНА",
    photo: GulzhanPhoto,
    roles: ["ЛОГОПЕД", "АВА СПЕЦИАЛИСТ", "ДЕФЕКТОЛОГ", "НЕЙРОПСИХОЛОГ"],
    lang: ["KAZ", "RUS"],
    methods: "НА ЗАНЯТИЯХ ПРИМЕНЯЕТ: ЭЛЕМЕНТЫ АФК,\nСЕНСОРНУЮ ИНТЕГРАЦИЮ",
    price: "150 000",
    priceSub: "по 45 минут\n12 занятий 3 раза в неделю\n(пн, ср, пт)",
    rusAbsolute: true
  }
];

export function SpecialistProfileSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-12 md:pt-20 md:pb-32" style={{ backgroundColor: "#011610" }}>
      {/* ── BACKGROUND SONAR EFFECT ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div 
          className="absolute top-[-140px] md:top-[-120px] w-[1600px] h-[1600px] opacity-[0.15]" 
          style={{ 
            backgroundImage: `repeating-radial-gradient(circle at center, transparent 0, transparent 44px, ${CYAN}20 45px, transparent 46px)`,
            maskImage: "radial-gradient(circle at center, black 0%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 65%)"
          }} 
        />
      </div>

      <Container className="relative z-10 w-full max-w-[1440px] mx-auto px-4">
        <div className="text-center mb-24 md:mb-32">
          <h2 style={{ 
            fontFamily: "'Furore', sans-serif", 
            fontSize: "clamp(32px, 5vw, 48px)", 
            color: CYAN, 
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textShadow: `0 0 20px ${CYAN}40`,
            margin: 0
          }}>
            НАШИ СПЕЦИАЛИСТЫ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 md:gap-8 xl:gap-12 justify-items-center">
          {specialists.map((spec, idx) => (
            <SpecialistCard key={idx} {...spec} />
          ))}
        </div>

        {/* ── SINGLE BUTTON FOR MOBILE ── */}
        <div className="mt-[43px] block md:hidden flex justify-center">
          <ConsultationButton showArrow={true} />
        </div>
      </Container>
    </section>
  );
}

function SpecialistCard({ name, photo, roles, lang, methods, price, priceSub, rusAbsolute }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
        className="flex flex-col items-center w-full"
        style={{ maxWidth: "380px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
      {/* ── PHOTO HEADER ── */}
      <div className="relative mb-6 md:mb-8">
         <div className="relative w-[180px] h-[180px] lg:w-[210px] lg:h-[210px] transition-all duration-700">
            <div 
                className="absolute inset-[-6px] rounded-full border-[2px]" 
                style={{ 
                    borderColor: CYAN, 
                    boxShadow: `inset 0 0 50px ${CYAN}80, inset 0 0 20px rgba(255,255,255,0.4)`, 
                    zIndex: 2 
                }}
            />
            
            <div className="w-full h-full rounded-full overflow-hidden bg-[#001d14] relative z-1">
                <img 
                    src={photo.src} 
                    alt="Specialist base" 
                    className="h-[160%] max-w-none transition-transform duration-500 origin-bottom absolute left-1/2"
                    style={{ 
                        filter: "brightness(1.05) contrast(1.05)",
                        transform: hovered ? "translateX(-50%) translateY(-65px) scale(1.05)" : "translateX(-50%) translateY(-60px) scale(1)"
                    }}
                />
                <div className="absolute inset-0 bg-cyan-900/10 mix-blend-color opacity-20" />
            </div>

            <div className="absolute inset-0 pointer-events-none z-10 overflow-visible" 
                 style={{ clipPath: "polygon(0 -100%, 100% -100%, 100% 50%, 0 50%)" }}>
                <img 
                    src={photo.src} 
                    alt="Specialist head" 
                    className="h-[160%] max-w-none transition-transform duration-500 origin-bottom absolute left-1/2"
                    style={{ 
                        filter: "brightness(1.05) contrast(1.05)",
                        transform: hovered ? "translateX(-50%) translateY(-65px) scale(1.05)" : "translateX(-50%) translateY(-60px) scale(1)"
                    }}
                />
            </div>
         </div>
      </div>

      {/* ── NAME & COMPETENCIES ── */}
      <div className="w-full flex flex-row items-start justify-between gap-4 mb-4 md:mb-5 relative">
         <div className="text-left flex-shrink-0">
            <h2 style={{ 
                fontFamily: "'Furore', sans-serif", 
                fontSize: "24px", 
                color: CYAN, 
                textTransform: "uppercase", 
                letterSpacing: "0.02em", 
                lineHeight: 1.55, 
                margin: 0, 
                marginTop: "-2px"
            }}>
              {name.split('\n').map((line: string, i: number) => <span key={i} style={{ display: "block", whiteSpace: "nowrap" }}>{line}</span>)}
            </h2>
         </div>

         <div className={`flex flex-row items-stretch gap-2 pt-1.5 flex-1 justify-end ${rusAbsolute ? 'relative pb-10' : ''}`}>
            <ul className="flex flex-col gap-1 list-none p-0 m-0">
                {roles.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-1.5" style={{ whiteSpace: "nowrap" }}>
                        <span className="w-1 h-1 rounded-full" style={{ background: "#fff", opacity: 0.9 }} />
                        <span style={{ 
                            fontFamily: "'Montserrat', sans-serif", 
                            fontSize: "9px", 
                            color: "#fff", 
                            fontWeight: 600,
                            letterSpacing: "0.02em",
                        }}>{item.split('\n').map((line: string, i: number) => <span key={i} style={{ display: "block" }}>{line}</span>)}</span>
                    </li>
                ))}
            </ul>
            <div className={`flex ${rusAbsolute ? 'absolute bottom-[9px] right-0 flex-row gap-1' : 'flex-col gap-1 mt-auto'}`}>
                {lang.map((l: string, i: number) => (
                    <div 
                        key={i}
                        className="px-1.5 rounded bg-[#011610] flex items-center justify-center" 
                        style={{ 
                            border: `1px solid ${CYAN}80`, 
                            height: "24px", 
                            minWidth: "36px"
                        }}
                    >
                        <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "10px", color: "#fff", letterSpacing: "0.1em", lineHeight: 1 }}>{l}</span>
                    </div>
                ))}
            </div>
         </div>
      </div>

      {/* ── METHODS BOX ── */}
      <div 
        className="w-full mb-4 md:mb-5 py-2 px-4 text-center" 
        style={{ 
            border: `1px solid ${CYAN}30`, 
            borderRadius: "12px",
            background: "rgba(111,230,193,0.02)",
        }}
      >
         <p style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: "11px", 
            color: CYAN, 
            fontWeight: 700, 
            letterSpacing: "0.05em",
            margin: 0,
            textTransform: "uppercase"
         }}>
            {methods.split('\n').map((line: string, i: number) => <span key={i} style={{ display: "block", whiteSpace: "nowrap" }}>{line}</span>)}
         </p>
      </div>

      {/* ── PRICE SECTION ── */}
      <div 
        className="w-full relative overflow-hidden"
        style={{ 
            border: `1px solid ${CYAN}50`, 
            borderRadius: "16px",
            background: "rgba(0, 15, 10, 0.8)",
            display: "flex",
            flexDirection: "column"
        }}
      >
         <div className="py-2 text-center" style={{ background: CYAN }}>
            <h3 style={{ 
                fontFamily: "'Furore', sans-serif", 
                fontSize: "14px", 
                color: "#011610", 
                letterSpacing: "0.2em", 
                margin: 0,
                fontWeight: 900
            }}>ЦЕНА ИНТЕНСИВА</h3>
         </div>

         <div className="p-5 pb-0 flex flex-col items-center flex-1">
            <ul className="flex flex-col gap-2 list-none p-0 m-0 w-full mb-6">
               {priceSub.split('\n').map((line: string, i: number) => {
                 if (line.includes('(')) {
                    return <li key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[#6FE6C1] border-b-[4px] border-b-transparent" />
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", color: "#fff", fontWeight: 400, lineHeight: 1.3, whiteSpace: "nowrap" }}>
                            {priceSub.split('\n')[i-1]}<br/>
                            <span style={{ fontSize: "14px", opacity: 0.8 }}>{line}</span>
                        </span>
                    </li>
                 }
                 if (i > 0 && priceSub.split('\n')[i+1]?.includes('(')) return null;
                 return <li key={i} className="flex items-start gap-3" style={{ whiteSpace: "nowrap" }}>
                    <div className="mt-1.5 w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[#6FE6C1] border-b-[4px] border-b-transparent" />
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", color: "#fff", fontWeight: 400 }}>{line}</span>
                 </li>
               })}
            </ul>

            <div 
                className="w-full max-w-[240px] py-2 rounded-t-xl text-center mt-auto"
                style={{ 
                    borderWidth: "1.5px 1.5px 0 1.5px",
                    borderStyle: "solid",
                    borderColor: `${CYAN}60`,
                    background: "rgba(0,0,0,0.5)",
                }}
            >
                <span style={{ 
                    fontFamily: "'Furore', sans-serif", 
                    fontSize: "26px", 
                    color: CYAN, 
                    letterSpacing: "0.08em"
                }}>
                    {price} <span style={{ fontSize: "14px", verticalAlign: "baseline", opacity: 0.9 }}>тг</span>
                </span>
            </div>
         </div>
      </div>

      <div className="mt-5 md:mt-7 w-full flex justify-center pb-4 hidden md:flex">
         <ConsultationButton showArrow={false} />
      </div>
    </div>
  );
}

function ConsultationButton({ showArrow = true }: { showArrow?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="relative group/btn" 
      style={{ width: "260px", height: "48px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        <a
            href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full no-underline"
        >
            <div 
              style={{
                position: "absolute", 
                inset: "-1.5px", 
                background: hovered ? CYAN : `${CYAN}50`, 
                clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                transition: "all 0.4s ease",
                zIndex: 0
              }} 
            />
            <button 
              style={{
                position: "absolute", 
                inset: 0, 
                width: "100%", 
                height: "100%",
                background: "bg-gradient-to-br from-[#002416] to-[#000e08]",
                border: "none", 
                clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)", 
                color: CYAN, 
                fontFamily: "'Furore', sans-serif",
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase",
                transition: "all 0.4s ease", 
                cursor: "pointer", 
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                padding: "0 24px"
              }} 
              className="bg-gradient-to-br from-[#002416] to-[#000e08]"
            >
                <span className="relative z-10 leading-none" style={{ whiteSpace: "nowrap" }}>Получить консультацию</span>
                {showArrow && (
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" className="relative z-10 transition-transform duration-300 transform group-hover/btn:translate-x-1">
                        <path d="M0 4H16M12 1L16 4L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </button>
        </a>
    </div>
  );
}
