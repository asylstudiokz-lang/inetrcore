import { useState } from "react";
import { Container } from "../ui/Container";

const faqData = [
  {
    id: "FAQ-01",
    question: "Когда можно на прием на фоне подготовки комплексами?",
    answer: "Достаточно 2-3х недель приема комплексов и можно на приём для достижения желаемого результата."
  },
  {
    id: "FAQ-02",
    question: "Сколько курсов нужно пройти чтобы был результат?",
    answer: "Индивидуально, но при условии, если ребенок прошел подготовку - 2 сеанса, без подготовки 3 сеанса, далее возможно нужно будет приезжать 1 раз в месяц до достижения результата. Результат зависит от степени сложности состояния ребенка и состояния тканей."
  },
  {
    id: "FAQ-03",
    question: "На сколько дней приезжать из другого города?",
    answer: "Если есть подготовка витаминно-минеральными комплексами, то достаточно 2х дней приема, можно каждый день или через день. Без подготовки 3 дня приема и параллельный прием витаминных комплексов."
  },
  {
    id: "FAQ-04",
    question: "Один сеанс это сколько?",
    answer: "1 сеанс это 1 день приема, длительность около часа, бывает меньше."
  },
  {
    id: "FAQ-05",
    question: "Можно ли пройти курс без подготовки если мы принимаем свои витамины?",
    answer: "Будет ли результат, который Вы хотите получить, принимая параллельно с курсами остеопатии другие препараты, мы не знаем. Все результаты которые представлены у нас в Инстаграм, это результат приема наших витаминно-минеральных комплексов. Поэтому если не будут соблюдены все рекомендации нашего Центра, дальнейшее ведение пациента невозможно."
  },
  {
    id: "FAQ-06",
    question: "Можно ли присутствовать на приеме родителям?",
    answer: "Да, конечно, каждый родитель или родственник в праве находится рядом со своим ребенком."
  },
  {
    id: "FAQ-07",
    question: "Нужны ли какие либо обследования (УЗДГ, МРТ, анализы)?",
    answer: "До приема необходимо сделать УЗДГ сосудов шеи, если будут нужны другие обследования доктор скажет на первом приёме."
  },
  {
    id: "FAQ-08",
    question: "Почему нет консультации, может мне не нужно ваше лечение?",
    answer: "Если у Вас есть уже известный диагноз, который нуждается только в лечении, то консультация не нужна, приходите сразу на прием. Так же у нас в Инстаграм, в актуальных есть перечень проблем, с которыми Вы можете обратиться в наш Центр."
  }
];

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

export function ZprrFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-[60px] md:py-[100px] overflow-hidden" style={{ backgroundColor: "#001d14" }}>
      
      {/* ── BACKGROUND DECORATIONS ── */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 opacity-[0.08] z-0">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="faq-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#6FE6C1" strokeWidth="0.5" />
                <circle cx="0" cy="0" r="1.5" fill="#6FE6C1" fillOpacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faq-grid)" />
          </svg>
        </div>

        {/* Large Diamond (Left) */}
        <div style={{
          position: "absolute", top: "10%", left: "-200px", width: "500px", height: "500px",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          background: "linear-gradient(135deg, rgba(111,230,193,0.05) 0%, transparent 100%)",
        }} />
        
        {/* Dot pattern box (Bottom Right) */}
        <div style={{
          position: "absolute", bottom: "10%", right: "5%", width: "200px", height: "200px",
          backgroundImage: "radial-gradient(circle, #6FE6C1 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px", opacity: 0.1,
        }} />
        
        {/* Hollow Circle (Top Right) */}
        <div style={{
          position: "absolute", top: "-150px", right: "-100px", width: "500px", height: "500px",
          borderRadius: "50%", border: "1px solid rgba(111,230,193,0.04)",
        }} />
      </div>

      <Container className="relative z-10">
        
        {/* ── HEADER ── */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-[60px]">
          <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(30px, 8vw, 72px)", color: "#fff", textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
             Часто задаваемые<br />
             <span style={{ color: "#00cf8f", textShadow: "0 0 28px rgba(0,207,143,0.4)" }}>Вопросы</span>
          </h2>
        </div>

        {/* ── MODULAR DASHBOARD FAQ ── */}
        <div className="grid grid-cols-1 gap-4 md:gap-8 max-w-[1100px] mx-auto">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            // Adaptive cut: 12px on mobile, 20px on desktop
            const currentClip = (size: number) => CLIP(size);

            return (
              <div 
                key={index}
                className="group relative transition-all duration-500 ease-out"
                style={{
                  background: isOpen 
                    ? "linear-gradient(135deg, rgba(111,230,193,0.1) 0%, rgba(111,230,193,0.02) 100%)" 
                    : "rgba(111,230,193,0.03)",
                  padding: "1px",
                  boxShadow: isOpen ? "0 20px 50px rgba(0,0,0,0.5)" : "none",
                }}
              >
                {/* Border layer (only shows glow on hover/open) */}
                <div 
                    className="absolute inset-0 group-hover:opacity-60 transition-opacity"
                    style={{
                  position: "absolute", inset: 0, 
                  background: isOpen ? "#6FE6C1" : "rgba(111,230,193,0.15)",
                  zIndex: -1,
                  opacity: isOpen ? 0.6 : 0.3,
                  // We handle the clip-path via a class or dynamic style that's responsive
                }} />

                <div 
                  className="relative overflow-hidden faq-card-inner" 
                  style={{ background: "#00100a", transition: "background 0.3s" }}
                >
                  {/* CSS classes for responsive clip-path handled in global style or utility */}
                  <style dangerouslySetInnerHTML={{ __html: `
                    .faq-card-inner { clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px); }
                    @media (min-width: 768px) {
                        .faq-card-inner { clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); }
                    }
                  `}} />

                  {/* Subtle Grid Pattern when open */}
                  <div 
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isOpen ? 'opacity-10' : 'opacity-0'}`}
                    style={{
                      backgroundImage: "linear-gradient(rgba(111,230,193,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(111,230,193,0.4) 1px, transparent 1px)",
                      backgroundSize: "40px 40px"
                    }}
                  />

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 md:p-8 flex flex-row items-center justify-between gap-4 md:gap-6 relative z-10"
                  >
                    <div className="flex flex-col gap-2 flex-1">
                        <div className="flex items-center gap-3">
                          <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "11px", color: "#6FE6C1", opacity: 0.6 }}>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                          <span style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "9px", color: isOpen ? "#6FE6C1" : "rgba(255,255,255,0.4)", letterSpacing: "0.15em" }}>
                            {isOpen ? "// СВЕРНУТЬ" : "// ЧИТАТЬ"}
                          </span>
                       </div>
                       <h3 style={{ 
                        fontFamily: "'Furore', sans-serif", 
                        fontSize: "clamp(17px, 4vw, 24px)", 
                        color: isOpen ? "#6FE6C1" : "#fff",
                        lineHeight: 1.25,
                        textTransform: "uppercase"
                       }} className="transition-colors">
                         {item.question}
                       </h3>
                    </div>

                    <div className="flex items-center">
                       <div 
                         className={`w-9 h-9 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#6FE6C1] border-[#6FE6C1] rotate-[135deg]' : 'bg-transparent border-[#6FE6C1]/30 group-hover:border-[#6FE6C1]'}`}
                       >
                         <svg 
                           className="w-5 h-5 md:w-6 md:h-6"
                           viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#00100a" : "#6FE6C1"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                         </svg>
                       </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-[600px] opacity-100 px-5 md:px-8 pb-8 md:pb-12' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="h-px w-full bg-gradient-to-r from-[#6FE6C1]/30 to-transparent mb-5 md:mb-8" />
                    <p 
                      style={{ 
                        fontFamily: "'Montserrat', sans-serif", 
                        fontSize: "clamp(14px, 1.8vw, 18px)", 
                        lineHeight: 1.75, 
                        color: "rgba(255,255,255,0.75)",
                        maxWidth: "900px"
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                  
                  {/* Corner Accent Decor (Open Only) */}
                  {isOpen && (
                    <div className="absolute top-2 right-2 w-12 h-12 md:w-16 md:h-16 pointer-events-none opacity-20">
                       <div className="absolute top-0 right-0 w-full h-full border-t border-r border-[#6FE6C1]" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
