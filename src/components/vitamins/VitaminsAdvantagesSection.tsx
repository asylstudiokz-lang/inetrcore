import { Container } from "../ui/Container";
import { CTAButton } from "../HeroSection";

const CYAN = "#6FE6C1";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

const advantages = [
  {
    id: 1,
    title: "100% натуральный состав",
    description: "Мы используем только растительное сырье без химических реагентов, сохраняя природную чистоту и эффективность продукта.",
    tag: "СОСТАВ",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: 2,
    title: "Хелатные формы",
    description: "Высокая биодоступность и легкое усвоение — максимум пользы с минимальной нагрузкой на организм.",
    tag: "БИОЛОГИЯ",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Научная база",
    description: "Все составы разрабатываются на основе актуальных научных исследований и проверенных клинических данных.",
    tag: "НАУКА",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "R&D лаборатория",
    description: "Собственная разработка и тестирование на базе ведущих технопарков Академгородка и Кольцово.",
    tag: "РАЗРАБОТКА",
    span: "col-span-1",
  },
  {
    id: 5,
    title: "Современные технологии",
    description: "Уникальный технологический процесс обеспечивает сохранение всех полезных свойств компонентов.",
    tag: "ТЕХНОЛОГИИ",
    span: "col-span-1",
  },
  {
    id: 6,
    title: "Безопасность и эффективность",
    description: "Строгий контроль качества на каждом этапе производства гарантирует отсутствие побочных эффектов.",
    tag: "КОНТРОЛЬ",
    span: "col-span-1 md:col-span-3",
  }
];

export function VitaminsAdvantagesSection() {
  return (
    <section id="vitamins-advantages" className="relative overflow-hidden" style={{ backgroundColor: "#001d14", padding: "20px 0 120px 0" }}>
      
      {/* ── ГЕКСАГОНАЛЬНАЯ СЕТКА (HEX GRID) ── */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hex-dots" x="0" y="0" width="40" height="69.28" patternUnits="userSpaceOnUse">
             <circle cx="20" cy="0" r="1.2" fill={CYAN} />
             <circle cx="20" cy="69.28" r="1.2" fill={CYAN} />
             <circle cx="0" cy="34.64" r="1.2" fill={CYAN} />
             <circle cx="40" cy="34.64" r="1.2" fill={CYAN} />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hex-dots)" />
        </svg>
      </div>

      {/* ── МОЛЕКУЛЯРНЫЕ ВОДЯНЫЕ ЗНАКИ (WATERMARKS) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <svg style={{ position: "absolute", top: "10%", left: "5%", width: "400px", height: "400px", transform: "rotate(-15deg)" }} viewBox="0 0 200 200">
              <path d="M100 40 L130 60 L130 95 L100 115 L70 95 L70 60 Z" stroke={CYAN} strokeWidth="1" fill="none" />
              <path d="M130 60 L160 40 M130 95 L160 115 M70 95 L40 115 M70 60 L40 40" stroke={CYAN} strokeWidth="1" />
              <circle cx="160" cy="40" r="4" stroke={CYAN} strokeWidth="1" />
              <circle cx="40" cy="115" r="4" stroke={CYAN} strokeWidth="1" />
          </svg>
          <svg style={{ position: "absolute", bottom: "5%", right: "8%", width: "500px", height: "500px", transform: "rotate(20deg)" }} viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="50" stroke={CYAN} strokeWidth="0.5" strokeDasharray="5 5" />
              <path d="M100 30 L100 170 M30 100 L170 100" stroke={CYAN} strokeWidth="0.5" opacity="0.3" />
              <rect x="70" y="70" width="60" height="60" stroke={CYAN} strokeWidth="1" transform="rotate(45 100 100)" fill="none" />
          </svg>
      </div>

      <Container className="relative z-10">
        {/* Заголовок секции */}
        <div id="advantages-header-container" style={{ marginBottom: "60px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div 
                    style={{ 
                        background: `${CYAN}15`, 
                        borderLeft: `2px solid ${CYAN}`, 
                        padding: "4px 12px", 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "8px" 
                    }}
                >
                    <div className="blink-dot" style={{ width: "4px", height: "4px", background: CYAN, borderRadius: "50%" }} />
                    <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "10px", color: CYAN, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                        ТЕХНОЛОГИЧЕСКИЙ БАЗИС
                    </span>
                </div>
            </div>
            <h2 
                id="advantages-title"
                style={{ 
                    fontFamily: "'Furore', sans-serif", 
                    fontSize: "clamp(28px, 8.5vw, 84px)", 
                    fontWeight: 400, 
                    background: `linear-gradient(to bottom, #fff 40%, ${CYAN}80 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textTransform: "uppercase", 
                    letterSpacing: "0.02em", 
                    lineHeight: 0.9, 
                    margin: 0,
                    filter: "drop-shadow(0 2px 10px rgba(111,230,193,0.1))"
                }}
            >
               Преимущества
            </h2>
        </div>

        {/* Асимметричная сетка Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {advantages.map((adv) => (
            <ModuleCard key={adv.id} adv={adv} />
          ))}
        </div>

        {/* Кнопка CTA */}
        <div id="v-advantages-cta" style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}>
           <CTAButton text="Получить консультацию" variant="secondary" />
        </div>
      </Container>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes tech-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .blink-dot {
          animation: tech-blink 2s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          #vitamins-advantages {
            padding-top: 5px !important;
            padding-bottom: 40px !important;
          }
          #v-advantages-cta {
            margin-top: 24px !important;
          }
        }
      `}} />
    </section>
  );
}

function ModuleCard({ adv }: { adv: any }) {
  return (
    <div 
      className={`${adv.span} group relative`}
      style={{
        background: `${CYAN}20`,
        clipPath: CLIP(22),
        padding: "1.5px",
        transition: "all 0.4s ease",
      }}
    >
        {/* Внешнее свечение */}
        <div 
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(circle, ${CYAN}15 0%, transparent 70%)`,
            filter: "blur(30px)",
          }}
        />

      <div
        style={{
          background: "linear-gradient(155deg, #002818 0%, #000e08 100%)",
          clipPath: CLIP(21),
          padding: "40px 30px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Внутренняя текстура */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none" }}>
            <svg width="100%" height="100%">
                <pattern id={`dot-pattern-${adv.id}`} x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.5" fill={CYAN} />
                </pattern>
                <rect width="100%" height="100%" fill={`url(#dot-pattern-${adv.id})`} />
            </svg>
        </div>

        {/* Призрачный номер */}
        <div
          style={{
            position: "absolute",
            bottom: "-15px",
            right: "15px",
            fontFamily: "'Furore', sans-serif",
            fontSize: "130px",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: `1px ${CYAN}15`,
            userSelect: "none",
            pointerEvents: "none",
            transition: "all 0.4s ease",
          }}
          className="group-hover:opacity-40 group-hover:scale-105"
        >
          0{adv.id}
        </div>

        {/* ТЕХНИЧЕСКАЯ ПЛАШКА (PLATE) С SVG БОРДЕРОМ */}
        <div style={{ position: "absolute", top: "25px", left: "25px", zIndex: 5, height: "22px", display: "inline-flex", alignItems: "center" }}>
            <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 100 22" preserveAspectRatio="none">
                <path 
                    d="M6,0 L100,0 L100,16 L94,22 L0,22 L0,6 L6,0 Z" 
                    fill="rgba(111,230,193,0.1)" 
                    stroke={CYAN} 
                    strokeWidth="1" 
                    vectorEffect="non-scaling-stroke"
                    style={{ opacity: 0.6 }}
                />
            </svg>
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px", height: "100%" }}>
                <div className="blink-dot" style={{ width: "4px", height: "4px", background: CYAN, borderRadius: "50%", boxShadow: `0 0 5px ${CYAN}` }} />
                <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "9px", color: CYAN, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    {adv.tag}
                </span>
            </div>
        </div>

        {/* Контент */}
        <div style={{ position: "relative", zIndex: 2, paddingTop: "35px" }}>
          <h3 style={{ 
            fontFamily: "'Furore', sans-serif", 
            fontSize: "17px", 
            color: "#fff", 
            textTransform: "uppercase", 
            letterSpacing: "0.06em", 
            lineHeight: 1.3,
            marginBottom: "16px"
          }}>
            {adv.title}
          </h3>
          <p style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontSize: "14px", 
            color: "rgba(255,255,255,0.6)", 
            lineHeight: 1.6, 
            margin: 0,
            fontWeight: 400
          }}>
            {adv.description}
          </p>
        </div>

        {/* Декоративные уголки */}
        <div style={{ position: "absolute", bottom: "15px", left: "15px", width: "10px", height: "1px", background: `${CYAN}20` }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "50px", height: "50px", background: `linear-gradient(225deg, ${CYAN}08 0%, transparent 60%)`, pointerEvents: "none" }} />
      </div>
    </div>
  );
}
