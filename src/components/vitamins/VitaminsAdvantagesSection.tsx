import { useState } from "react";
import { Container } from "../ui/Container";
import { CTAButton } from "../HeroSection";

const CYAN = "#6FE6C1";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

const advantages = [
  {
    id: 1,
    title: "100% НАТУРАЛЬНЫЙ СОСТАВ",
    description: "Мы используем только растительное сырье без химических реагентов, сохраняя природную чистоту и эффективность.",
    tag: "СОСТАВ",
    span: "col-span-1 md:col-span-2",
    // Tabler: plant-2
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"><path d="M2 9a10 10 0 1 0 20 0"/><path d="M12 19A10 10 0 0 1 22 9M2 9a10 10 0 0 1 10 10"/><path d="M12 4a9.7 9.7 0 0 1 2.99 7.5m-5.98 0A9.7 9.7 0 0 1 12 4"/></g></svg>`,
  },
  {
    id: 2,
    title: "ХЕЛАТНЫЕ ФОРМЫ МИКРОЭЛЕМЕНТОВ",
    description: "Высокая биодоступность и легкое усвоение организмом — максимум пользы с минимальной нагрузкой.",
    tag: "БИОЛОГИЯ",
    span: "col-span-1",
    // Tabler: dna
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"><path d="M14.828 14.828a4 4 0 1 0-5.656-5.656a4 4 0 0 0 5.656 5.656"/><path d="M9.172 20.485a4 4 0 1 0-5.657-5.657M14.828 3.515a4 4 0 0 0 5.657 5.657"/></g></svg>`,
  },
  {
    id: 3,
    title: "НАУЧНАЯ ДОКАЗАТЕЛЬНАЯ БАЗА",
    description: "Все составы разрабатываются на основе актуальных научных исследований и клинических данных.",
    tag: "НАУКА",
    span: "col-span-1",
    // Tabler: flask
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M9 3h6m-5 6h4m-4-6v6L6 20a.7.7 0 0 0 .5 1h11a.7.7 0 0 0 .5-1L14 9V3"/></svg>`,
  },
  {
    id: 4,
    title: "СОБСТВЕННАЯ R&D ЛАБОРАТОРИЯ",
    description: "Разработка и тестирование ведется на базе технопарков Академгородка и Кольцово ведущими учеными.",
    tag: "РАЗРАБОТКА",
    span: "col-span-1",
    // Tabler: microscope
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M5 21h14M6 18h2m-1 0v3m2-10l3 3l6-6l-3-3zm1.5 1.5L9 14m8-11l3 3m-8 15a6 6 0 0 0 3.715-10.712"/></svg>`,
  },
  {
    id: 5,
    title: "СОВРЕМЕННЫЕ ПРОИЗВОДСТВЕННЫЕ ТЕХНОЛОГИИ",
    description: "Уникальный технологический процесс обеспечивает 100% усвоение всех необходимых веществ.",
    tag: "ТЕХНОЛОГИИ",
    span: "col-span-1",
    // Tabler: cpu
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"><path d="M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/><path d="M9 9h6v6H9zm-6 1h2m-2 4h2m5-11v2m4-2v2m7 5h-2m2 4h-2m-5 7v-2m-4 2v-2"/></g></svg>`,
  },
  {
    id: 6,
    title: "БЕЗОПАСНОСТЬ И ЭФФЕКТИВНОСТЬ",
    description: "Подтвержденные результаты, натуральность и отсутствие побочных эффектов — идеальное решение для здоровья и восстановления.",
    tag: "КОНТРОЛЬ",
    span: "col-span-1 md:col-span-3",
    // Tabler: certificate
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"><path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/><path d="M13 17.5V22l2-1.5l2 1.5v-4.5"/><path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2"/></g></svg>`,
  }
];

export function VitaminsAdvantagesSection() {
  return (
    <section id="vitamins-advantages" className="relative overflow-hidden py-[60px] md:py-[100px]" style={{ backgroundColor: "#001d14" }}>
      
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
        <div id="advantages-header-container" className="mb-8 md:mb-[60px]" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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

        {/* Mobile: slider (1 card at a time) */}
        <div className="md:hidden">
          <MobileSlider />
        </div>

        {/* Desktop: asymmetric bento grid */}
        <div className="hidden md:grid grid-cols-3 gap-5 lg:gap-6">
          {advantages.map((adv) => (
            <ModuleCard key={adv.id} adv={adv} />
          ))}
        </div>

        {/* Кнопка CTA с анимацией контура */}
        <div id="v-advantages-cta" style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}>
           <div className="relative" style={{ width: "320px", height: "64px" }}>
             <style dangerouslySetInnerHTML={{__html: `
               @keyframes trace-path {
                 0% { stroke-dashoffset: 1000; }
                 100% { stroke-dashoffset: 0; }
               }
               .advantages-cta-btn:hover .trace-border {
                 animation: trace-path 1.5s linear infinite;
               }
             `}} />
             <a
               href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
               target="_blank"
               rel="noopener noreferrer"
               className="advantages-cta-btn group block w-full h-full relative"
               style={{ textDecoration: "none" }}
             >
                {/* Glow behind */}
                <div style={{ position: "absolute", inset: "-2px", background: CYAN, opacity: 0, clipPath: CLIP(14), filter: "blur(12px)", transition: "opacity 0.4s" }} className="group-hover:opacity-30" />
                
                <button style={{
                  position: "absolute", inset: 0, width: "100%", height: "100%",
                  background: "rgba(111,230,193,0.1)", border: "none", 
                  clipPath: CLIP(14), color: "#fff", fontFamily: "'Furore', sans-serif",
                  fontSize: "14px", letterSpacing: "0.2em", textTransform: "uppercase",
                  transition: "all 0.4s ease", cursor: "pointer"
                }} className="group-hover:bg-[#09B983] group-hover:scale-[1.01] group-hover:-translate-y-0.5">
                  Получить консультацию
                </button>

                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }} viewBox="0 0 320 64" preserveAspectRatio="none">
                   {/* Static Border - Always Visible */}
                   <path 
                     d="M14,0 L320,0 L320,50 L306,64 L0,64 L0,14 Z" 
                     fill="none" 
                     stroke={CYAN} 
                     strokeWidth="1.5"
                     strokeOpacity="0.3"
                   />
                   {/* Tracing Border - Hover Only */}
                   <path 
                     d="M14,0 L320,0 L320,50 L306,64 L0,64 L0,14 Z" 
                     fill="none" 
                     stroke={CYAN} 
                     strokeWidth="2"
                     strokeDasharray="1000"
                     strokeDashoffset="1000"
                     className="trace-border transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                   />
                </svg>
             </a>
           </div>
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
          #v-advantages-cta {
            margin-top: 24px !important;
          }
        }
      `}} />
    </section>
  );
}
function MobileSlider() {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = advantages.length;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div style={{ position: "relative", userSelect: "none" }}>
      {/* Track */}
      <div
        style={{ overflow: "hidden" }}
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX === null) return;
          const delta = e.changedTouches[0].clientX - touchStartX;
          if (delta > 50) prev();
          else if (delta < -50) next();
          setTouchStartX(null);
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "stretch", // Ensure cards stretch to same height
            transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {advantages.map((adv) => (
            <div key={adv.id} style={{ minWidth: "100%", padding: "0 10px", display: "flex" }}>
              <ModuleCard adv={adv} isMobileSlider />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators & Arrows & Rectangular Buttons */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "14px" }}>
        {/* Left Arrow Button (Rectangular) */}
        <button
          onClick={prev}
          disabled={isFirst}
          style={{
            width: "50px",
            height: "42px",
            background: isFirst ? "rgba(111,230,193,0.1)" : `${CYAN}40`,
            padding: "1.5px",
            clipPath: CLIP(8),
            cursor: isFirst ? "default" : "pointer",
            border: "none",
            transition: "all 0.3s ease",
            WebkitTapHighlightColor: "transparent",
            display: "flex",
            opacity: isFirst ? 0.3 : 1
          }}
        >
          <div style={{ 
            width: "100%", 
            height: "100%", 
            background: "#00100a", 
            clipPath: CLIP(7.5), 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: CYAN
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
        </button>

        <div style={{ display: "flex", gap: "8px" }}>
          {advantages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === current ? CYAN : `${CYAN}40`,
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Right Arrow Button (Rectangular) */}
        <button
          onClick={next}
          disabled={isLast}
          style={{
            width: "50px",
            height: "42px",
            background: isLast ? "rgba(111,230,193,0.1)" : `${CYAN}40`,
            padding: "1.5px",
            clipPath: CLIP(8),
            cursor: isLast ? "default" : "pointer",
            border: "none",
            transition: "all 0.3s ease",
            WebkitTapHighlightColor: "transparent",
            display: "flex",
            opacity: isLast ? 0.3 : 1
          }}
        >
          <div style={{ 
            width: "100%", 
            height: "100%", 
            background: "#00100a", 
            clipPath: CLIP(7.5), 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: CYAN
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function ModuleCard({ adv, isMobileSlider }: { adv: any; isMobileSlider?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`${adv.span} group relative w-full`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${CYAN}40` : `${CYAN}20`,
        clipPath: CLIP(22),
        padding: "1.5px",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        minHeight: isMobileSlider ? "260px" : "auto", // Reduced height for more compact look
        display: "flex",
        flexDirection: "column"
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
          background: hovered 
            ? "linear-gradient(155deg, #003620 0%, #00150c 100%)" 
            : "linear-gradient(155deg, #002818 0%, #000e08 100%)",
          clipPath: CLIP(21),
          padding: isMobileSlider ? "30px 24px" : "40px 30px", // Reduced padding on mobile
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

        {/* Тематическая иконка-водяной знак */}
        <div
          style={{
            position: "absolute",
            bottom: "-15px",
            right: "-5px",
            width: "130px",
            height: "130px",
            color: CYAN,
            opacity: 0.06,
            userSelect: "none",
            pointerEvents: "none",
            transition: "all 0.4s ease",
          }}
          className="group-hover:opacity-[0.12] group-hover:scale-105"
          dangerouslySetInnerHTML={{ __html: adv.icon }}
        />

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
