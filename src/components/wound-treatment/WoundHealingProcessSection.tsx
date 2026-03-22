import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";
const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

/* ── DATA (Exact User Text) ───────────────────────────────────────── */

const phases = [
  {
    id: "01",
    title: "Очищение раны",
    text: "Благодаря ЖКИМ ведения раны облегчается, регулярными ежедневными перевязками активизируется раневой процесс, что облегчает ведение таких ран, благодаря комплексному терапевтическому действию ЖКИМ.",
  },
  {
    id: "02",
    title: "Стимуляции местного иммунитета",
    text: "ЖКИМ стимулирует местный иммунитет, активизируя местный раневой процесс, запуская процесс самоочищения раны. Когда ЖКИМ попадает в рану, происходит активация местного раневого процесса, реакция воспаления активизируется, появляется отек, гиперемия (покраснение тканей)- это все происходит за счет усиления кровотока, так активизируется местный иммунитет.",
  },
  {
    id: "03",
    title: "Грануляция (регенерация) тканей",
    text: "В обычных случаях процесс грануляции достичь не просто, достаточно длительный процесс, а если и получилось, то при больших ранах происходит переход в процесс гипергрануляции. Избыточная грануляционная ткань выходит за границы раны и препятствуют регенерации кожи (эпителизации) с краев навстречу друг другу, т.е эпителизации по факту не происходит. ЖКИМ в нужный момент, когда рана полностью чистая активирует процесс грануляции и, что очень важно, без гипергрануляции, и далее стимулирует процесс регенерации кожи под струпом.",
  },
  {
    id: "04",
    title: "Регенерация кожи (эпителизация)",
    text: "ЖКИМ процесс эпителизации раны и заживляет основную рану без необходимости аутодермопластики. Другая особенность применения ЖКИМ– минимизация появления гипертрофических и келоидных рубцов. В случае эпителизации краев ран, как правило возникают массивные келоидные рубцы, которые могут привести к контрактуре т.е. в состояние когда конечность не может двигаться в полном объеме, так как объем кожи уменьшен, кожа не эластичная и, соответственно неподвижная. ЖКИМ после процесса грануляции активизирует эпителизацию под струпом (заживление кожи под корочкой) и далее при отсутствии гипергрануляции регенерация кожи происходит с краев раны в центр, без образования гипертрофированных и келоидных рубцов.",
  }
];

export function WoundHealingProcessSection() {
  return (
    <section id="healing-process" className="relative overflow-hidden" style={{ backgroundColor: "#001d14", padding: "60px 0 80px" }}>
      
      {/* ── GLOBAL SECTION SATIATION (Glows & Grids) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(111,230,193,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-1/4 -left-[20%] w-[600px] h-[600px] bg-[#6FE6C1] rounded-full blur-[160px] opacity-[0.04]" />
        <div className="absolute bottom-1/4 -right-[20%] w-[500px] h-[500px] bg-[#6FE6C1] rounded-full blur-[140px] opacity-[0.03]" />
      </div>

      <Container className="relative z-10">
        
        {/* ── PREMIUM HEADER ── */}
        <div className="mb-10 md:mb-20 text-center lg:text-left">
           <h2 style={{ 
             fontFamily: "'Furore', sans-serif", fontSize: "clamp(28px, 4.5vw, 56px)", 
             color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.15
           }}>
             Процесс заживления <br className="hidden lg:block"/>
             <span style={{ color: "transparent", WebkitTextStroke: "1px #6FE6C1" }}>хронической раны</span>
           </h2>
           
           <div className="mt-8 hidden md:flex w-full justify-center">
              <div className="w-[60px] h-[3px] bg-[#6FE6C1] shadow-[0_0_15px_rgba(111,230,193,0.6)]" />
           </div>
        </div>

        {/* ── VERTICAL PREMIUM STEPPER ── */}
        <div className="max-w-[1100px] mx-auto relative px-2 md:px-0">
           
           {/* GLOWING AXIS LINE */}
           <div className="hidden md:block absolute top-[80px] bottom-[140px] left-[39px] md:left-[54px] w-[2px] bg-gradient-to-b from-transparent via-[#6FE6C1] to-transparent opacity-40 shadow-[0_0_20px_rgba(111,230,193,0.7)] z-0" />

           <div className="flex flex-col gap-8 sm:gap-10 md:gap-20">
              {phases.map((phase, i) => (
                <div key={phase.id} className="relative z-10 flex flex-col md:flex-row items-stretch gap-6 md:gap-14 group">
                   
                   {/* 1. AXIS MARKER (Timeline Node) */}
                   <div className="hidden md:flex flex-shrink-0 w-[80px] md:w-[110px] justify-center mt-2 md:mt-6">
                      <div className="relative w-[80px] h-[80px] md:w-[110px] md:h-[110px] flex items-center justify-center">
                          {/* Inner pulsing ring */}
                          <div className="absolute inset-0 rounded-full border border-[#6FE6C1]/20 group-hover:border-[#6FE6C1]/80 transition-colors duration-500 shadow-[0_0_10px_rgba(111,230,193,0.1)] group-hover:shadow-[0_0_20px_rgba(111,230,193,0.4)]" />
                          
                          {/* Rotating dashed ring */}
                          <div className="absolute inset-2 md:inset-3 rounded-full border-2 border-dashed border-[#6FE6C1]/30 group-hover:border-[#6FE6C1]/60 group-hover:animate-[spin_8s_linear_infinite]" />
                          
                          {/* Saturated glowing core */}
                          <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-[#001710] border-2 border-[#6FE6C1] shadow-[0_0_20px_rgba(111,230,193,0.4)] group-hover:shadow-[0_0_35px_rgba(111,230,193,0.8)] flex items-center justify-center transition-all duration-500 z-10">
                             <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(20px, 3vw, 26px)", color: CYAN }} className="group-hover:scale-110 transition-transform duration-500">
                               {phase.id}
                             </span>
                          </div>
                      </div>
                   </div>

                   {/* 2. SATURATED CONTENT CARD */}
                   <div className="flex-1 w-full relative">
                      {/* Backlight Glow on hover */}
                      <div className="absolute inset-0 bg-[#6FE6C1] opacity-0 group-hover:opacity-[0.15] blur-[40px] transition-opacity duration-500 pointer-events-none" style={{ clipPath: CLIP(24) }} />

                      {/* Outer Card Contour (Diamond Cut) */}
                      <div style={{ 
                        clipPath: CLIP(24), padding: "2px", 
                        background: "linear-gradient(135deg, rgba(111,230,193,0.9) 0%, rgba(111,230,193,0.2) 100%)" 
                      }} 
                      className="group-hover:-translate-y-2 group-hover:scale-[1.01] transition-all duration-500 h-full drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                         
                         {/* Inner Dark Card Canvas */}
                         <div style={{ 
                           clipPath: CLIP(23), background: "linear-gradient(145deg, #00261a 0%, #000c08 100%)", 
                           position: "relative", overflow: "hidden", minHeight: "100%"
                         }} className="p-5 md:p-[clamp(30px,5vw,45px)]">
                            
                            {/* Inner Details: Diagonal Data Lines */}
                            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(111,230,193,1) 10px, rgba(111,230,193,1) 11px)" }} />
                            
                            {/* Large Filled Geometric Accents (Card Background) */}
                            <div 
                              className={`absolute bg-[#6FE6C1]/[0.05] pointer-events-none transition-transform duration-1000 group-hover:scale-105 group-hover:bg-[#6FE6C1]/[0.08] ${
                                i % 4 === 0 ? "w-[250px] h-[250px] md:w-[350px] md:h-[350px] right-[-10%] top-[-10%] rotate-[15deg]" :
                                i % 4 === 1 ? "w-[300px] h-[300px] md:w-[400px] md:h-[400px] right-[-15%] bottom-[-15%] rotate-45" :
                                i % 4 === 2 ? "w-[200px] h-[200px] md:w-[300px] md:h-[300px] left-[5%] top-[15%] rotate-[-20deg]" :
                                "w-[350px] h-[350px] md:w-[450px] md:h-[450px] left-[-10%] bottom-[-10%] rotate-[-15deg]"
                              }`}
                              style={{ 
                                clipPath: 
                                  i % 4 === 0 ? "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" :
                                  i % 4 === 2 ? "polygon(50% 0%, 100% 100%, 0% 100%)" :
                                  i % 4 === 3 ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" : 
                                  "none"
                              }}
                            />

                            {/* Inner Details: Corner Radial Glow */}
                            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#6FE6C1] opacity-[0.12] blur-[50px] pointer-events-none rounded-full transition-opacity duration-500 group-hover:opacity-[0.25]" />

                            {/* HUD Corner Bracket (Bottom Right Only) */}
                            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#6FE6C1]/40 pointer-events-none" />

                            {/* Massive Ghost Number */}
                            <div className="absolute -bottom-4 md:-bottom-8 -right-2 md:-right-4 pointer-events-none opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500 text-[100px] md:text-[180px]" style={{ fontFamily: "'Furore', sans-serif", lineHeight: 0.8, color: "transparent", WebkitTextStroke: "3px rgba(111,230,193,0.8)" }}>
                               {phase.id}
                            </div>

                            <div className="relative z-10 w-full">
                               {/* Stage Tag Label (HUD Style) */}
                               <div className="mb-4 md:mb-6 inline-flex drop-shadow-[0_0_10px_rgba(111,230,193,0.15)]">
                                  <div style={{ clipPath: CLIP(8), padding: "1px", backgroundColor: "rgba(111,230,193,0.4)" }}>
                                     <div style={{ clipPath: CLIP(8) }} className="flex items-center gap-2 md:gap-3 bg-[#001710] px-3 md:px-4 py-1.5 md:py-2">
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#6FE6C1] animate-pulse shadow-[0_0_8px_#6FE6C1]" />
                                        <span style={{ fontFamily: "'Furore', sans-serif", color: CYAN, letterSpacing: "0.2em" }} className="text-[10px] md:text-[12px]">ЭТАП {phase.id}</span>
                                     </div>
                                  </div>
                               </div>

                               {/* Stage Title */}
                               <h3 style={{ fontFamily: "'Furore', sans-serif", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.25, textShadow: "0 2px 15px rgba(111,230,193,0.3)" }} className="text-[18px] md:text-[clamp(22px,3.5vw,26px)] mb-3 md:mb-[20px]">
                                 {phase.title}
                               </h3>

                               {/* Decorative Separator */}
                               <div className="hidden md:block w-[80px] h-[3px] bg-[#6FE6C1] mb-6 shadow-[0_0_15px_rgba(111,230,193,0.7)]" />

                               {/* Exact User Text */}
                               <p style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.85)", letterSpacing: "0.015em", maxWidth: "90%", fontWeight: 400 }} className="text-[13px] md:text-[16px] leading-[1.6] md:leading-[1.8]">
                                 {phase.text}
                               </p>
                            </div>

                         </div>
                      </div>
                   </div>

                </div>
              ))}
           </div>
        </div>

      </Container>
    </section>
  );
}
