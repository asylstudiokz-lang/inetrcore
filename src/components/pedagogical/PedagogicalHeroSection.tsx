import { Container } from "../ui/Container";
import imgLogo from "@/assets/9f52023862aa50f87d6a753ba0b67d4e931e459f.png?url";
import { HudSVG } from "../HudSVG";
import { useState } from "react";

const CYAN = "#6FE6C1";

/* Refined CTA Button for Pedagogical Hero */
function CTAButton({ text = "Консультация" }: { text?: string } = {}) {
  const [hovered, setHovered] = useState(false);
  
  const baseW = 310; // Back to standard width for shorter text
  const baseH = 65.34;
  const cut = 13;

  const polyline = `${cut},0 ${baseW},0 ${baseW},${baseH - cut} ${baseW - cut},${baseH} 0,${baseH} 0,${cut}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes hero-btn-ping-ped {
          0%   { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.1, 1.2); opacity: 0; }
        }
        .ped-cta-btn {
          clip-path: polygon(${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%, 0 ${cut}px);
          transition: all 0.35s ease;
        }
        .ped-cta-btn:hover {
          background: #0dd49a !important;
          filter: drop-shadow(0 0 18px rgba(111,230,193,0.9));
          transform: translateY(-2px) scale(1.02);
          letter-spacing: 0.15em;
        }
      `}}></style>

      <div
        className="relative group"
        style={{ width: "100%", maxWidth: `${baseW}px`, height: `${baseH}px`, margin: "0" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-3px",
            clipPath: `polygon(${cut + 3}px 0, 100% 0, 100% calc(100% - ${cut + 3}px), calc(100% - ${cut + 3}px) 100%, 0 100%, 0 ${cut + 3}px)`,
            background: "transparent",
            outline: "1.5px solid rgba(111,230,193,0.4)",
            animation: hovered ? "hero-btn-ping-ped 0.7s ease-out infinite" : "none",
            pointerEvents: "none",
          }}
        />

        <a
          href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 block"
        >
          <button
            className="ped-cta-btn w-full h-full"
            style={{
              background: "#09B983",
              cursor: "pointer",
              fontFamily: "'Furore', 'Exo 2', sans-serif",
              fontSize: "20.6px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "#ffffff",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
            }}
          >
            {text}
          </button>
        </a>

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${baseW} ${baseH}`}
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="btn-glow-ped">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <polygon
            points={polyline}
            fill="none"
            stroke={CYAN}
            strokeWidth="1.5"
            strokeOpacity={hovered ? 0 : 1}
            filter="url(#btn-glow-ped)"
            vectorEffect="non-scaling-stroke"
            style={{ transition: "stroke-opacity 0.3s ease" }}
          />

          <polygon
            points={polyline}
            fill="none"
            stroke={CYAN}
            strokeWidth="2.5"
            strokeDasharray={1000}
            strokeDashoffset={hovered ? 0 : 1000}
            vectorEffect="non-scaling-stroke"
            style={{
              transition: hovered ? "stroke-dashoffset 0.55s cubic-bezier(0.4,0,0.2,1)" : "stroke-dashoffset 0.4s ease",
            }}
          />
        </svg>
      </div>
    </>
  );
}

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

export function PedagogicalHeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ paddingBottom: "50px" }}>
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
      
      {/* ── MOBILE (Logo above Text) ── */}
      <Container>
        <div className="flex md:hidden flex-col-reverse items-center text-center gap-16 pb-20 pt-8 mt-7 relative animate-in fade-in slide-in-from-bottom duration-1000">
           {/* Ghost watermark */}
           <div style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(60px, 16vw, 100px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
             коррекция
           </div>

           {/* Mobile Text */}
           <div className="z-10 w-full flex flex-col items-center relative delay-300">
             <h1 style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(28px, 9vw, 42px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.1, letterSpacing: "0.06em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", marginBottom: "16px", whiteSpace: "nowrap" }}>
                ПЕДАГОГИЧЕСКАЯ<br/>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>КОРРЕКЦИЯ</span><br/>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>ДЕТЕЙ</span>
             </h1>

             <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(111,230,193,0.3) 50%, transparent 100%)", marginBottom: "16px", maxWidth: "280px" }} />

             <div style={{ background: "rgba(111,230,193,0.05)", border: "1px solid rgba(111,230,193,0.15)", padding: "10px 20px", borderRadius: "100px", display: "inline-block", boxShadow: "0 0 20px rgba(111,230,193,0.05) inset", marginBottom: "32px" }}>
               <span style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "10px", color: "rgba(247,250,248,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                 С РАС • ЗПРР • АУТИЗМОМ
               </span>
             </div>

             <div style={{ width: "310px", margin: "0 auto" }}>
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
      </Container>

      {/* ── DESKTOP HERO WRAPPER ── */}
      <div 
        className="hidden md:flex flex-col items-center justify-center w-full relative mb-12 px-8" 
        style={{ minHeight: "calc(100vh - 80px)", paddingBottom: "6vh" }}
      >
        {/* Фоновый радиальный свет */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 60% at 68% 50%, rgba(0,80,50,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Background Blueprint Grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none", zIndex: 0 }}>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hero-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#6FE6C1" strokeWidth="0.6" />
                <circle cx="0" cy="0" r="1.5" fill="#6FE6C1" fillOpacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Decorative Data Stream Lines */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          <div className="absolute left-[5%] top-[-100px] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-[#6FE6C1]/30 to-transparent animate-[flowDown_8s_linear_infinite]" />
          <div className="absolute left-[12%] top-[-100px] w-[1px] h-[500px] bg-gradient-to-b from-transparent via-[#6FE6C1]/15 to-transparent animate-[flowDown_12s_linear_infinite]" style={{ animationDelay: "2s" }} />
          <div className="absolute right-[8%] top-[-100px] w-[1px] h-[400px] bg-gradient-to-b from-transparent via-[#6FE6C1]/20 to-transparent animate-[flowDown_10s_linear_infinite]" style={{ animationDelay: "5s" }} />
        </div>

        {/* Декоративные circuit-точки */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
          }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter
              id="cg2"
              x="-120%"
              y="-120%"
              width="340%"
              height="340%"
            >
              <feGaussianBlur stdDeviation="7" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g stroke="#6FE6C1" fill="#6FE6C1">
            <g opacity="0.3">
              <line x1="60" y1="190" x2="180" y2="190" strokeWidth="0.7" />
              <circle cx="60" cy="190" r="12" fillOpacity="0.08" strokeWidth="0.6" />
              <circle cx="60" cy="190" r="5" fillOpacity="0.25" strokeWidth="0" />
              <circle cx="180" cy="190" r="4" fillOpacity="0.2" strokeWidth="0.6" />
              <circle cx="180" cy="190" r="1.8" fillOpacity="0.7" strokeWidth="0" />
            </g>
            <g opacity="0.28">
              <line x1="1220" y1="240" x2="1380" y2="240" strokeWidth="0.7" />
              <circle cx="1220" cy="240" r="5" fillOpacity="0.18" strokeWidth="0.6" />
              <circle cx="1220" cy="240" r="2" fillOpacity="0.6" strokeWidth="0" />
              <circle cx="1380" cy="240" r="14" fillOpacity="0.07" strokeWidth="0.6" />
              <circle cx="1380" cy="240" r="7" fillOpacity="0.2" strokeWidth="0" />
            </g>
            <g opacity="0.25">
              <line x1="100" y1="580" x2="260" y2="580" strokeWidth="0.7" />
              <circle cx="100" cy="580" r="16" fillOpacity="0.06" strokeWidth="0.6" />
              <circle cx="100" cy="580" r="8" fillOpacity="0.18" strokeWidth="0" />
              <circle cx="260" cy="580" r="6" fillOpacity="0.15" strokeWidth="0.6" />
              <circle cx="260" cy="580" r="2.5" fillOpacity="0.55" strokeWidth="0" />
            </g>
            <g opacity="0.27">
              <line x1="1160" y1="520" x2="1340" y2="520" strokeWidth="0.7" />
              <circle cx="1160" cy="520" r="10" fillOpacity="0.08" strokeWidth="0.6" />
              <circle cx="1160" cy="520" r="4.5" fillOpacity="0.22" strokeWidth="0" />
              <circle cx="1340" cy="520" r="4" fillOpacity="0.18" strokeWidth="0.6" />
              <circle cx="1340" cy="520" r="1.8" fillOpacity="0.65" strokeWidth="0" />
            </g>
            <g opacity="0.22">
              <line x1="340" y1="920" x2="520" y2="920" strokeWidth="0.7" />
              <circle cx="340" cy="920" r="5" fillOpacity="0.18" strokeWidth="0.6" />
              <circle cx="340" cy="920" r="2" fillOpacity="0.6" strokeWidth="0" />
              <circle cx="520" cy="920" r="13" fillOpacity="0.07" strokeWidth="0.6" />
              <circle cx="520" cy="920" r="6" fillOpacity="0.18" strokeWidth="0" />
            </g>
            <g opacity="0.24">
              <line x1="1050" y1="860" x2="1200" y2="860" strokeWidth="0.7" />
              <circle cx="1050" cy="860" r="14" fillOpacity="0.07" strokeWidth="0.6" />
              <circle cx="1050" cy="860" r="6" fillOpacity="0.2" strokeWidth="0" />
              <circle cx="1200" cy="860" r="4" fillOpacity="0.18" strokeWidth="0.6" />
              <circle cx="1200" cy="860" r="1.8" fillOpacity="0.65" strokeWidth="0" />
            </g>
          </g>
        </svg>

        <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24 w-full max-w-[1200px] mx-auto relative z-10 flex-shrink-0 mt-4 lg:mt-6">
           {/* Desktop Text Block (Left) */}
           <div className="flex-1 flex flex-col items-start text-left z-10 w-full max-w-[660px] relative">
             <div style={{ position: "absolute", top: "-36px", left: "-16px", fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(60px, 8vw, 120px)", fontWeight: 400, color: "rgba(111,230,193,0.03)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>
               коррекция
             </div>

             <h1 className="uppercase" style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "clamp(34px, 4.5vw, 68px)", fontWeight: 400, color: "#ffffff", textTransform: "uppercase", lineHeight: 1.05, letterSpacing: "0.06em", textShadow: "0px 4px 40px rgba(0,238,163,0.45)", margin: "0 0 16px 0", whiteSpace: "nowrap", position: "relative" }}>
                ПЕДАГОГИЧЕСКАЯ<br/>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>КОРРЕКЦИЯ</span><br/>
                <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>ДЕТЕЙ</span>
             </h1>

             <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg, #6FE6C1 0%, rgba(111,230,193,0.15) 50%, transparent 100%)", marginBottom: "20px", maxWidth: "480px" }} />

             <div style={{ background: "rgba(111,230,193,0.05)", border: "1px solid rgba(111,230,193,0.15)", padding: "10px 24px", borderRadius: "100px", marginBottom: "40px", display: "inline-block", boxShadow: "0 0 20px rgba(111,230,193,0.05) inset" }}>
               <span style={{ fontFamily: "'Furore', 'Exo 2', sans-serif", fontSize: "12px", color: "rgba(247,250,248,0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                 С РАС • ЗПРР • АУТИЗМОМ
               </span>
             </div>

             <CTAButton />
           </div>

           {/* Desktop Logo Block (Right) */}
           <div style={{ flexShrink: 0, width: "clamp(340px, 35vw, 480px)", height: "clamp(340px, 35vw, 480px)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <div className="absolute pointer-events-none" style={{ inset: "-15%" }}><HudSVG size={600} style={{ width: "100%", height: "100%" }} /></div>
             <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 22px))", background: "rgba(111,230,193,0.07)", border: "none" }} />
             <div style={{ position: "absolute", inset: "12%", clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))", outline: "1px solid rgba(111,230,193,0.22)" }} />
             <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 2 }} viewBox="0 0 480 480">
               <g stroke="#6FE6C1" strokeOpacity="0.5" strokeWidth="1.5" fill="none"><path d="M57,57 L57,82" /><path d="M57,57 L82,57" /><path d="M423,57 L398,57" /><path d="M423,57 L423,82" /><path d="M57,423 L57,398" /><path d="M57,423 L82,423" /><path d="M423,423 L398,423" /><path d="M423,423 L423,398" /></g>
               <g fill="#6FE6C1" fillOpacity="0.55"><circle cx="57" cy="57" r="2.5" /><circle cx="423" cy="57" r="2.5" /><circle cx="57" cy="423" r="2.5" /><circle cx="423" cy="423" r="2.5" /></g>
             </svg>
             <img alt="ICIT Logo" src={imgLogo} style={{ width: "72%", height: "72%", objectFit: "contain", position: "relative", zIndex: 1, filter: "drop-shadow(0 0 40px rgba(9,185,131,0.4))" }} />
           </div>
        </div>
        
      </div>
    </section>
  );
}
