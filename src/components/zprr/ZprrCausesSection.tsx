import { Container } from "../ui/Container";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

export function ZprrCausesSection() {
  const causes = [
    {
      title: "РОДОВАЯ ТРАВМА ЧЕРЕПА",
      description: "Последствия осложненного течения беременности и травматичных родов.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#6FE6C1" stroke="none">
          <path d="M12 2C8.134 2 5 5.134 5 9c0 2.218 1.05 4.195 2.684 5.438L7.5 16.5v3a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-3l-.184-.112C17.95 13.195 19 11.218 19 9c0-3.866-3.134-7-7-7zm-2.5 9c-.83 0-1.5-.67-1.5-1.5S8.67 8 9.5 8 11 8.67 11 9.5 10.33 11 9.5 11zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 8 14.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3 3h1v2h-1v-2z" />
        </svg>
      )
    },
    {
      title: "ДИСПЛАЗИЯ СОЕДИНИТЕЛЬНОЙ ТКАНИ",
      description: "Нарушение формирования структуры и функций соединительной ткани.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6FE6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11c3 2.5 6-2.5 9 0s6-2.5 9 0" />
          <path d="M3 15c3 2.5 6-2.5 9 0s6-2.5 9 0" />
          <path d="M12 3v5" /><path d="M9 5l3-2 3 2" />
          <path d="M12 21v-5" /><path d="M9 19l3 2 3-2" />
        </svg>
      )
    },
    {
      title: "МИТОХОНДРИАЛЬНАЯ ДИСФУНКЦИЯ",
      description: "Нарушение энергетического обмена на клеточном уровне.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6FE6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="9" ry="6" transform="rotate(-30 12 12)" />
          <path d="M7.5 13.5c1-1.5 2 .5 3-.5s1.5-2.5 2.5-1.5 2.5 1.5 3.5.5" />
          <circle cx="9" cy="9" r="1.5" fill="#6FE6C1" stroke="none" />
          <circle cx="15" cy="15" r="1.5" fill="#6FE6C1" stroke="none" />
        </svg>
      )
    },
    {
      title: "НЕДОЗАКЛАДКА КОЛЛАТЕРАЛЬНОГО КРОВОТОКА",
      description: "Нарушение кровообращения в условиях дефицита питания тканей.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#6FE6C1" stroke="none">
          <g transform="translate(-1, 0)">
            <ellipse cx="8" cy="8" rx="3.5" ry="5.5" transform="rotate(45 8 8)" />
            <path d="M7 8c1 1 2 1 3 0" stroke="#001810" strokeWidth="1.5" fill="none" transform="rotate(45 8 8)" />
          </g>
          <ellipse cx="16" cy="16" rx="4" ry="6" transform="rotate(-30 16 16)" />
          <path d="M15 16c1 1 2 1 3 0" stroke="#001810" strokeWidth="1.5" fill="none" transform="rotate(-30 16 16)" />
          <ellipse cx="8" cy="18" rx="3" ry="4.5" transform="rotate(15 8 18)" />
          <path d="M7 18c.8.8 1.5.8 2 0" stroke="#001810" strokeWidth="1.5" fill="none" transform="rotate(15 8 18)" />
          <ellipse cx="16" cy="7" rx="3" ry="4.5" transform="rotate(60 16 7)" />
          <path d="M15 7c.8.8 1.5.8 2 0" stroke="#001810" strokeWidth="1.5" fill="none" transform="rotate(60 16 7)" />
        </svg>
      )
    }
  ];

  return (
    <section id="causes" style={{ backgroundColor: "#001d14", position: "relative", overflow: "hidden" }}>
      
      {/* ── BACKGROUND ACCENTS ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 60% at 75% 50%, rgba(0,80,50,0.1) 0%, transparent 70%)",
        }}
      />

      {/* ── HEADING BLUEPRINT DECO ── */}
      <div className="hidden lg:block absolute top-[120px] left-[5%] w-[400px] h-[400px] pointer-events-none opacity-[0.04] z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-[#6FE6C1]" strokeWidth="0.5">
          <circle cx="50" cy="100" r="45" />
          <circle cx="50" cy="100" r="25" strokeDasharray="2 4" />
          <path d="M50 55 L50 45 M50 155 L50 145 M5 100 L15 100 M95 100 L85 100" />
          <line x1="50" y1="100" x2="180" y2="100" strokeDasharray="1 3" />
          <path d="M140 70 L180 100 L140 130" />
          <circle cx="180" cy="100" r="2" fill="#6FE6C1" />
        </svg>
      </div>
      
      <div className="relative py-[60px] md:py-[100px]">
        <Container style={{ position: "relative", zIndex: 1 }}>
          
          <div className="flex flex-col lg:flex-row items-stretch w-full justify-start">
            
            {/* ── LEFT: HEADING COLUMN ── */}
            {/* The vertical dividing line (border-r) and right padding form the left gap */}
            <div className="lg:w-[38%] xl:w-[35%] flex-shrink-0 flex flex-col items-start text-left relative z-10 w-full lg:border-r border-[#6FE6C1]/40 lg:pr-10 xl:pr-14 pb-8 lg:pb-0">
              <h2
                style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "clamp(30px, 3.5vw, 44px)",
                  fontWeight: 400,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  lineHeight: 0.95,
                  margin: 0,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Причины<br/>
                <span style={{ color: "transparent", WebkitTextStroke: "1px #6FE6C1" }}>
                  недоразвития
                </span>
              </h2>
              
              <div
                className="mt-6 md:mt-8 h-[2px] w-[80px] md:w-[140px]"
                style={{
                  background: "linear-gradient(90deg, #6FE6C1 0%, transparent 100%)",
                  opacity: 0.8
                }}
              />
              
              <p
                className="mt-6 md:mt-8 max-w-[380px]"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(13px, 1.2vw, 15px)",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Комплексное понимание природы нарушений — первый шаг к эффективной нейромодуляции.
              </p>
              
              {/* Gap to push the "04" counter down (hidden on mobile) */}
              <div className="hidden md:block flex-1 min-h-[30px] lg:min-h-[140px]"></div>
              
              <span
                className="hidden md:block mt-2 md:mt-auto"
                style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  color: "#2f6b56",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                04 Основные причины
              </span>
              
              {/* Massive Ghost 04 underneath heading on desktop */}
              <div className="hidden lg:block absolute -top-8 -left-8 font-['Furore'] text-[180px] leading-none text-[#6FE6C1]/[0.02] select-none pointer-events-none z-0">
                04
              </div>
            </div>


            {/* ── RIGHT: 2x2 GRID (STRICT ALIGNMENT) ── */}
            {/* The lg:pl-10 xl:pl-[80px] gives the massive right gap from the title/dividing line */}
            <div className="lg:w-[62%] xl:w-[65%] w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-8 relative z-10 lg:pl-10 xl:pl-[80px] pt-4 lg:pt-0">
              {causes.map((card, idx) => (
                <div
                  key={idx}
                  className="group relative cursor-default h-full w-full"
                  style={{
                    background: "#6FE6C1",
                    clipPath: CLIP(20),
                    padding: "1px",
                    transition: "transform 0.4s ease, filter 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.filter = "drop-shadow(0 10px 25px rgba(0,0,0,0.8)) drop-shadow(0 0 15px rgba(111,230,193,0.3))";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(0)";
                    el.style.filter = "none";
                  }}
                >
                  <div
                    className="p-6 pb-8 md:p-9 md:pb-11 flex flex-col h-full relative overflow-hidden box-border"
                    style={{
                      background: "linear-gradient(150deg, #001f13 0%, #00100a 100%)",
                      clipPath: CLIP(19),
                    }}
                  >
                    
                    {/* Ghost number bottom right */}
                    <div
                      className="absolute -bottom-2 right-3 text-[64px] md:text-[90px] font-['Furore'] leading-none text-transparent group-hover:text-[#6FE6C1]/5 group-hover:scale-105 transition-all duration-500 pointer-events-none select-none tracking-[-0.04em]"
                      style={{
                        WebkitTextStroke: "1px rgba(111,230,193,0.12)",
                      }}
                    >
                      0{idx + 1}
                    </div>

                    {/* Icon polygon box (top left) */}
                    <div
                      className="mb-4 md:mb-8 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-colors duration-400 group-hover:bg-[#6FE6C1]/10 bg-[#6FE6C1]/[0.05]"
                      style={{
                        clipPath: CLIP(12),
                      }}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-500 scale-90 md:scale-100">
                        {card.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className="font-['Furore'] text-[14px] md:text-[16px] text-white uppercase leading-snug tracking-wide mb-2 md:mb-4 relative z-10 group-hover:text-[#6FE6C1] transition-colors duration-300 max-w-[95%]"
                    >
                      {card.title}
                    </h3>
                    
                    <p
                      className="font-['Montserrat'] text-[12px] md:text-[13.5px] font-normal leading-relaxed text-white/60 m-0 relative z-10 max-w-[95%]"
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}
