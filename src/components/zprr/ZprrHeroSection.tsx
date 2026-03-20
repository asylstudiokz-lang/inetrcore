import { Container } from "../ui/Container";
import imgLogo from "@/assets/9f52023862aa50f87d6a753ba0b67d4e931e459f.png?url";
import { HudSVG } from "../HudSVG";
import { CTAButton } from "../HeroSection";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

export function ZprrHeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: "60px", paddingBottom: "100px" }}>
      {/* Decorative background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(111,230,193,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      
      <Container>
        {/* ── MOBILE (Logo above Text) ── */}
        <div className="flex md:hidden flex-col-reverse items-center text-center gap-16 mb-20 relative">
           {/* Ghost watermark */}
           <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(60px, 16vw, 100px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
             алалия
           </div>

           {/* Mobile Text */}
           <div className="z-10 w-full flex flex-col items-center relative">
             <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "16px" }}>
               <div style={{ width: "24px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
               <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", color: "#6FE6C1", textTransform: "uppercase" }}>
                 Комплексная работа при
               </span>
               <div style={{ width: "24px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
             </div>

             <h1 style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(28px, 9vw, 42px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.06em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", marginBottom: "16px", whiteSpace: "nowrap" }}>
                СЕНСОМОТОРНОЙ<br/>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>АЛАЛИИ</span>
             </h1>

             <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(111,230,193,0.3) 50%, transparent 100%)", marginBottom: "16px", maxWidth: "280px" }} />

             <div style={{ background: "rgba(111,230,193,0.05)", border: "1px solid rgba(111,230,193,0.15)", padding: "10px 20px", borderRadius: "100px", marginBottom: "32px", display: "inline-block", boxShadow: "0 0 20px rgba(111,230,193,0.05) inset" }}>
               <span style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "10px", color: "rgba(247,250,248,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                 ЗПРР • РАС • АУТИЗМ • ЗРР • СДВГ • ДЦП
               </span>
             </div>

             <div style={{ transform: "scale(0.85)" }}>
               <CTAButton text="Консультация" />
             </div>
           </div>

           {/* Mobile Logo with Hud Animation */}
           <div style={{ flexShrink: 0, width: "300px", height: "300px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <div className="absolute pointer-events-none" style={{ inset: "-15%" }}><HudSVG size={400} style={{ width: "100%", height: "100%" }} /></div>
             <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))", background: "rgba(111,230,193,0.07)", border: "none" }} />
             <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", outline: "1px solid rgba(111,230,193,0.22)" }} />
             <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2 }} viewBox="0 0 480 480">
               <g stroke="#6FE6C1" strokeOpacity="0.5" strokeWidth="1.5" fill="none"><path d="M57,57 L57,82" /><path d="M57,57 L82,57" /><path d="M423,57 L398,57" /><path d="M423,57 L423,82" /><path d="M57,423 L57,398" /><path d="M57,423 L82,423" /><path d="M423,423 L398,423" /><path d="M423,423 L423,398" /></g>
               <g fill="#6FE6C1" fillOpacity="0.55"><circle cx="57" cy="57" r="2.5" /><circle cx="423" cy="57" r="2.5" /><circle cx="57" cy="423" r="2.5" /><circle cx="423" cy="423" r="2.5" /></g>
             </svg>
             <img alt="ICIT Logo" src={imgLogo} style={{ width: "72%", height: "72%", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 30px rgba(9,185,131,0.4))" }} />
           </div>
        </div>

        {/* ── DESKTOP HERO WRAPPER ── */}
        <div 
          className="hidden md:flex flex-col items-center justify-center w-full relative mb-16" 
          style={{ minHeight: "calc(100vh - 80px)" }}
        >
          <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24 w-full max-w-[1240px] mx-auto px-10 relative z-10 flex-shrink-0">
             {/* Desktop Text Block (Left) */}
             <div className="flex-1 flex flex-col items-start text-left z-10 w-full max-w-[660px] relative">
               <div style={{ position: "absolute", top: "-36px", left: "-16px", fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(60px, 8vw, 120px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
                 алалия
               </div>

               <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                 <div style={{ width: "36px", height: "1px", background: "#6FE6C1", opacity: 0.7 }} />
                 <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.25em", color: "#6FE6C1", textTransform: "uppercase" }}>
                   Комплексная работа при
                 </span>
               </div>

               <h1 className="uppercase" style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(34px, 4.5vw, 68px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.05, letterSpacing: "0.06em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", margin: "0 0 16px 0", whiteSpace: "nowrap", position: "relative" }}>
                  СЕНСОМОТОРНОЙ<br/>
                  <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>АЛАЛИИ</span>
               </h1>

               <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, #6FE6C1 0%, rgba(111,230,193,0.15) 50%, transparent 100%)", marginBottom: "20px", maxWidth: "480px" }} />

               <div style={{ background: "rgba(111,230,193,0.05)", border: "1px solid rgba(111,230,193,0.15)", padding: "10px 24px", borderRadius: "100px", marginBottom: "40px", display: "inline-block", boxShadow: "0 0 20px rgba(111,230,193,0.05) inset" }}>
                 <span style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "12px", color: "rgba(247,250,248,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                   ЗПРР • РАС • АУТИЗМ • ЗРР • СДВГ • ДЦП
                 </span>
               </div>

               <CTAButton text="Консультация" />
             </div>

             {/* Desktop Logo Block (Right) */}
             <div style={{ flexShrink: 0, width: "clamp(340px, 35vw, 480px)", height: "clamp(340px, 35vw, 480px)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <div className="absolute pointer-events-none" style={{ inset: "-15%" }}><HudSVG size={600} style={{ width: "100%", height: "100%" }} /></div>
               <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", background: "rgba(111,230,193,0.07)", border: "none" }} />
               <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", outline: "1px solid rgba(111,230,193,0.22)" }} />
               <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2 }} viewBox="0 0 480 480">
                 <g stroke="#6FE6C1" strokeOpacity="0.5" strokeWidth="1.5" fill="none"><path d="M57,57 L57,82" /><path d="M57,57 L82,57" /><path d="M423,57 L398,57" /><path d="M423,57 L423,82" /><path d="M57,423 L57,398" /><path d="M57,423 L82,423" /><path d="M423,423 L398,423" /><path d="M423,423 L423,398" /></g>
                 <g fill="#6FE6C1" fillOpacity="0.55"><circle cx="57" cy="57" r="2.5" /><circle cx="423" cy="57" r="2.5" /><circle cx="57" cy="423" r="2.5" /><circle cx="423" cy="423" r="2.5" /></g>
               </svg>
               <img alt="ICIT Logo" src={imgLogo} style={{ width: "72%", height: "72%", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 40px rgba(9,185,131,0.4))" }} />
             </div>
          </div>
          
          {/* Pulsing Scroll Arrow for Desktop Hero */}
          <div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-20"
            onClick={() => {
              const el = document.getElementById("zprr-video");
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes slideDown {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(8px); }
              }
              .arrow-bounce { animation: slideDown 2s ease-in-out infinite; }
            `}} />
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "#6FE6C1", textTransform: "uppercase" }}>
              Смотреть видео
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="arrow-bounce">
              <path d="M5 9L12 16L19 9" stroke="#6FE6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* ── VIDEO SECTION ── */}
        <div id="zprr-video" style={{ position: "relative", width: "100%", maxWidth: "1024px", margin: "80px auto 120px", zIndex: 10 }}>
          {/* Decorative Corner Accents */}
          <div style={{ position: "absolute", top: "-12px", left: "-12px", width: "30px", height: "30px", borderTop: "2px solid #6FE6C1", borderLeft: "2px solid #6FE6C1", opacity: 0.5, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-12px", right: "-12px", width: "30px", height: "30px", borderBottom: "2px solid #6FE6C1", borderRight: "2px solid #6FE6C1", opacity: 0.5, pointerEvents: "none" }} />

          <div style={{
            background: "linear-gradient(135deg, rgba(111,230,193,0.5) 0%, rgba(111,230,193,0.1) 100%)",
            padding: "2px",
            clipPath: CLIP(24),
            filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.8))",
          }}>
            <div style={{
              background: "#000805",
              clipPath: CLIP(23),
              aspectRatio: "16/9",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/bTqVqk7FSmY"
                title="ЛЕКЦИЯ | ПРИЧИНЫ РАЗВИТИЯ ЗРР ЗПРР РАС СЕНСОМОТРНАЯ АЛАЛИЯ СДВГ и др"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
