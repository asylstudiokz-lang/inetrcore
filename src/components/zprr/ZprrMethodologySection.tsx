import { Container } from "../ui/Container";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

const cards = [
  {
    title: "Восстановление кровотока",
    description: "Методика направлена на восстановление мозгового кровотока путем радикальной остеопатической коррекции анатомии черепа. Это высвобождает сдавленные анатомически важные структуры основания черепа, в том числе сосуды, нормализует циркуляцию крови и ликвора, создавая условия для восстановления и развития мозга.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6FE6C1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12c2-5 6-5 6 0s4 5 6 0s4-5 6 0" />
        <path d="M4 17c2-4 6-4 6 0s4 4 6 0" opacity="0.4" />
        <circle cx="12" cy="12" r="1.8" fill="#6FE6C1" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Коррекция родовой травмы",
    description: "Методика основана на коррекции последствий родовой травмы, которая приводит к компрессии важных структур, и как показывает время самых важных — это сосудов головного мозга. Данная ситуация уходит корнями в начало времен. Недостаточное кровоснабжение ГМ, структур, и что самое важное таламуса, кто делает человека человеком.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6FE6C1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="6" />
        <path d="M9 16v2a1.5 1.5 0 003 0v-2" />
        <path d="M12 16v2a1.5 1.5 0 003 0v-2" />
        <circle cx="10" cy="10" r="1" fill="#6FE6C1" stroke="none" />
        <circle cx="14" cy="10" r="1" fill="#6FE6C1" stroke="none" />
      </svg>
    ),
  },
];

export function ZprrMethodologySection() {
  return (
    <section id="methodology" style={{ backgroundColor: "#001d14", position: "relative", overflow: "hidden" }}>
      
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 60% at 50% 10%, rgba(111,230,193,0.07) 0%, transparent 60%)" }} />
      
      {/* ── BACKGROUND BIOLOGICAL BLUEPRINT ── */}
      <div className="hidden lg:block absolute top-[15%] right-[5%] w-[600px] h-[600px] pointer-events-none opacity-[0.03] z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-[#6FE6C1] animate-[spin_160s_linear_infinite]">
          <circle cx="100" cy="100" r="90" strokeWidth="0.2" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.2" />
          <circle cx="100" cy="100" r="45" strokeWidth="0.2" />
          <path d="M100 10 L100 30 M100 170 L100 190 M10 100 L30 100 M170 100 L190 100" strokeWidth="0.5" />
          {[45, 135, 225, 315].map(a => (
            <g key={a} transform={`rotate(${a} 100 100)`}>
              <line x1="100" y1="20" x2="100" y2="40" strokeWidth="0.5" />
              <circle cx="100" cy="30" r="2" fill="#6FE6C1" />
            </g>
          ))}
        </svg>
      </div>
      
      <div className="relative pt-12 pb-16 md:pt-[100px] md:pb-[140px]">
        <Container style={{ position: "relative", zIndex: 1 }}>
          
          {/* ── HEADING ── */}
          <div className="w-full flex flex-col items-center text-center mb-12 md:mb-[80px]">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "30px", height: "1px", background: "linear-gradient(90deg, transparent, #6FE6C1)" }} />
              <div style={{ width: "6px", height: "6px", background: "#6FE6C1", borderRadius: "50%", boxShadow: "0 0 10px #6FE6C1" }} />
              <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "11px", letterSpacing: "0.25em", color: "#6FE6C1", textTransform: "uppercase" }}>ЗАПАТЕНТОВАНО</span>
              <div style={{ width: "6px", height: "6px", background: "#6FE6C1", borderRadius: "50%", boxShadow: "0 0 10px #6FE6C1" }} />
              <div style={{ width: "30px", height: "1px", background: "linear-gradient(270deg, transparent, #6FE6C1)" }} />
            </div>
            <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.1, margin: 0 }}>
              Авторская<br/>
              <span style={{ color: "transparent", WebkitTextStroke: "1px #6FE6C1" }}>Остеопатическая</span><br/>
              Методика
            </h2>
            <p className="mt-6 md:mt-8 max-w-[560px] mx-auto" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.3vw, 16px)", lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>
              Инновационный подход к лечению ЗПРР и РАС через фундаментальное восстановление краниального ритма.
            </p>
          </div>

          {/* ── CARDS ── */}
          <div className="w-full flex flex-col gap-5 md:gap-7 relative z-10">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="group relative cursor-default w-full"
                style={{
                  background: "#6FE6C1",
                  clipPath: CLIP(22),
                  padding: "1.5px",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.filter = "drop-shadow(0 10px 28px rgba(0,0,0,0.8)) drop-shadow(0 0 16px rgba(111,230,193,0.3))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.filter = "none";
                }}
              >
                {/* Inner dark fill — same 2-layer border structure as ZprrCausesSection */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    background: "linear-gradient(150deg, #001f13 0%, #00100a 100%)",
                    clipPath: CLIP(21),
                  }}
                >
                  {/* Ghost number bottom-right */}
                  <div
                    className="absolute -bottom-4 right-4 md:right-8 font-['Furore'] leading-none text-transparent pointer-events-none select-none group-hover:scale-105 transition-transform duration-500"
                    style={{
                      fontSize: "clamp(100px, 16vw, 200px)",
                      WebkitTextStroke: "1px rgba(111,230,193,0.12)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    0{idx + 1}
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start lg:items-center relative z-10 p-7 md:p-10 lg:p-14">

                    {/* LEFT: icon + step + title */}
                    <div className="lg:w-[36%] flex-shrink-0 flex flex-col items-start lg:pr-12 pb-6 lg:pb-0 border-b border-[#6FE6C1]/15 lg:border-b-0 lg:border-r lg:border-[#6FE6C1]/15">

                      {/* Icon polygon box — CausesSection pattern */}
                      <div
                        className="mb-5 md:mb-7 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#6FE6C1]/[0.05] group-hover:bg-[#6FE6C1]/10 transition-colors duration-400"
                        style={{ clipPath: CLIP(12) }}
                      >
                        <div className="group-hover:scale-110 transition-transform duration-500">
                          {card.icon}
                        </div>
                      </div>

                      <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "11px", color: "rgba(111,230,193,0.6)", letterSpacing: "0.2em", marginBottom: "12px", display: "block", textTransform: "uppercase" }}>
                        0{idx + 1} — Этап
                      </span>

                      <h3
                        className="font-['Furore'] uppercase leading-snug tracking-wide m-0 group-hover:text-[#6FE6C1] transition-colors duration-300"
                        style={{ fontSize: "clamp(20px, 2.2vw, 28px)", color: "#ffffff", lineHeight: 1.2 }}
                      >
                        {card.title}
                      </h3>
                    </div>

                    {/* Vertical separator — desktop */}
                    <div className="hidden lg:block w-px self-stretch flex-shrink-0 mx-12" style={{ background: "rgba(111,230,193,0.08)" }} />

                    {/* RIGHT: description */}
                    <div className="lg:flex-1">
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px, 1.25vw, 16px)", fontWeight: 400, color: "rgba(255,255,255,0.7)", lineHeight: 1.85, margin: 0 }}>
                        {card.description}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </div>
    </section>
  );
}
