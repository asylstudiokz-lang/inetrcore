import { Container } from "../ui/Container";
import { useState } from "react";

const CYAN = "#6FE6C1";

/* ── HUD Polygonal Clip ── */
const HUD_CLIP = "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px, 8px 16px, 24px 0)";
const HUD_CLIP_LARGE = "polygon(36px 0, 100% 0, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0 100%, 0 36px, 12px 24px, 36px 0)";

/* ── Decorative Scanlines Utility ── */
const Scanlines = () => (
  <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "linear-gradient(rgba(111,230,193,0.1) 1px, transparent 1px)", backgroundSize: "100% 4px" }} />
  </div>
);

/* ── Abstract Neural Icon (Speech) ── */
function NeuralIcon() {
  return (
    <svg viewBox="0 0 120 120" className="absolute top-8 right-8 w-14 h-14 md:w-20 md:h-20 opacity-20 md:opacity-25" style={{ pointerEvents: "none", zIndex: 2 }}>
      <circle cx="60" cy="60" r="3" fill={CYAN} />
      <circle cx="30" cy="40" r="2" fill={CYAN} />
      <circle cx="90" cy="40" r="2" fill={CYAN} />
      <circle cx="40" cy="90" r="2" fill={CYAN} />
      <circle cx="80" cy="90" r="2" fill={CYAN} />
      <path d="M60 60 L30 40 M60 60 L90 40 M60 60 L40 90 M60 60 L80 90 M30 40 L90 40" stroke={CYAN} strokeWidth="1" strokeDasharray="4 2" />
      <circle cx="60" cy="60" r="50" stroke={CYAN} strokeWidth="0.5" fill="none" opacity="0.5" />
    </svg>
  );
}

/* ── Abstract Wave Icon (Sensory) ── */
function WaveIcon() {
  return (
    <svg viewBox="0 0 120 120" className="absolute top-8 right-8 w-14 h-14 md:w-20 md:h-20 opacity-20 md:opacity-25" style={{ pointerEvents: "none", zIndex: 2 }}>
      <path d="M10 60 Q35 10 60 60 T110 60" stroke={CYAN} strokeWidth="1.5" fill="none" />
      <path d="M10 70 Q35 20 60 70 T110 70" stroke={CYAN} strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="60" cy="60" r="45" stroke={CYAN} strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
  );
}

function LessonCard({ 
  index, 
  titlePart1, 
  titlePart2, 
  subtitle, 
  features, 
  icon: Icon 
}: { 
  index: string; 
  titlePart1: string; 
  titlePart2: string; 
  subtitle: string; 
  features: string[]; 
  icon: React.ElementType; 
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="group relative h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer Glow / Shadow */}
      <div 
        className="absolute -inset-1 md:-inset-2 opacity-20 md:opacity-0 group-hover:opacity-35 transition-all duration-500 blur-lg"
        style={{ 
          background: CYAN, 
          clipPath: "url(#hud-clip-mobile)",
        }} 
      >
        <svg width="0" height="0">
          <defs>
            <clipPath id="hud-clip-mobile" clipPathUnits="objectBoundingBox">
              <path d="M0,0.08 L0.08,0.05 L0.15,0 L1,0 L1,0.92 L0.92,1 L0,1 L0,0.08" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Main Border Wrapper */}
      <div 
        className={`p-[1.5px] h-full transition-all duration-400 ease-out group-hover:scale-[1.01] group-hover:-translate-y-2 lg:group-hover:-translate-y-3 shadow-none lg:group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]`}
        style={{
          background: hovered ? CYAN : `${CYAN}50`, // Increased mobile opacity
          clipPath: `polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px, 8px 16px, 24px 0)`,
        }}
      >
        {/* Inner Content Area */}
        <div 
          className={`relative bg-[#001810] group-hover:bg-[#002a1b] px-6 py-10 md:px-10 md:pt-14 md:pb-16 h-full flex flex-col transition-colors duration-500 overflow-hidden`}
          style={{
            clipPath: `polygon(23px 0, 100% 0, 100% calc(100% - 23px), calc(100% - 23px) 100%, 0 100%, 0 23px, 8px 16px, 23px 0)`,
          }}
        >
          {/* Decorative Elements */}
          <Scanlines />
          <Icon />
          
          {/* Left Side Accent Bar */}
          <div className="absolute left-0 top-[15%] bottom-[15%] w-[2px] bg-gradient-to-b from-transparent via-[#6FE6C1] to-transparent opacity-60 md:opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Top-Left Notch Accent */}
          <div 
            className="absolute top-0 left-0 w-8 h-8 opacity-60 pointer-events-none"
            style={{ 
              background: `linear-gradient(135deg, ${CYAN} 0%, transparent 50%)`,
              clipPath: "polygon(0 0, 100% 0, 0 100%)"
            }} 
          />

          {/* Corner Notch Accent (Top Right) */}
          <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-r from-transparent to-[#6FE6C1] z-10" />

          {/* Header */}
          <div className="relative z-10 mb-6 md:mb-12">
            <h3 
              className="text-[26px] sm:text-[28px] md:text-[36px] lg:text-[44px] leading-none text-white uppercase tracking-wider mb-4 md:mb-6"
              style={{ fontFamily: "'Furore', sans-serif" }}
            >
              {titlePart1}<br/>
              <span 
                className="text-[#6FE6C1]"
                style={{ fontFamily: "'Furore', sans-serif" }}
              >
                {titlePart2}
              </span>
            </h3>
            
            <div className="hidden md:flex items-center gap-3">
              <div className="w-4 md:w-6 h-[2px] bg-[#6FE6C1]" />
              <p className="font-montserrat text-[10px] md:text-[11px] font-bold text-[#6FE6C1] tracking-[0.2em] uppercase opacity-90 leading-none">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="relative z-10 flex-grow mb-10 md:mb-14">
            <ul className="flex flex-col gap-4 md:gap-5 list-none p-0 m-0">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 bg-[#6FE6C1] flex-shrink-0 shadow-[0_0_8px_#6FE6C1]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
                  <p className="font-montserrat text-[13px] md:text-[15px] text-white/80 leading-snug md:leading-relaxed m-0">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer CTA */}
          <div className="relative z-10 mt-auto">
            <div className="bg-[#6FE6C1] p-[1.5px] inline-block" style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}>
              <a 
                href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block no-underline"
              >
                <button 
                  className="site-btn bg-gradient-to-br from-[#002416] to-[#000e08] border-none px-6 py-4 md:px-8 md:py-5 cursor-pointer font-furore text-[10px] md:text-[12px] tracking-widest text-[#6FE6C1] uppercase flex items-center gap-3 transition-colors duration-300" 
                  style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                >
                  <span className="relative z-10 leading-none">Получить консультацию</span>
                  <svg width="18" height="8" viewBox="0 0 18 8" fill="none" className="relative z-10">
                    <path d="M0 4H16M12 1L16 4L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComplexLessonsSection() {
  return (
    <section 
      className="relative overflow-hidden py-14 md:py-24 lg:py-32" 
      style={{ backgroundColor: "#001d14" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(${CYAN} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-furore text-[18vw] lg:text-[22vw] text-[#6FE6C1]/[0.012] uppercase tracking-[0.15em] select-none whitespace-nowrap">
          SPECIALIZATION
        </div>
      </div>

      <Container className="relative z-10 w-full max-w-[1300px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14">
          
          <LessonCard 
            index="01"
            titlePart1="Индивидуальные"
            titlePart2="Занятия"
            subtitle="Персональный протокол"
            icon={NeuralIcon}
            features={[
              "Индивидуальный план коррекции на основе нейропсихологической диагностики",
              "Интенсивная работа один на один с ведущими специалистами центра",
              "Адаптация методики под темп и психоэмоциональное состояние ребенка",
              "Регулярная отчетность для родителей о динамике развития навыков"
            ]}
          />

          <LessonCard 
            index="02"
            titlePart1="Групповые"
            titlePart2="Занятия"
            subtitle="Социальный опыт"
            icon={WaveIcon}
            features={[
              "Формирование коммуникативных стратегий для общения со сверстниками",
              "Отработка социальных ролей и базовых правил поведения в коллективе",
              "Развитие эмоционального интеллекта и навыков саморегуляции в группе",
              "Стимулирование речевой активности через совместную игровую деятельность",
              "Подготовка к успешной интеграции в школьную и социальную среду"
            ]}
          />

        </div>
      </Container>
    </section>
  );
}
