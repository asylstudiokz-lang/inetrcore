import { useState } from "react";
import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";
const BG_DARK = "#001d14";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

const uniquenessItems = [
  {
    id: 1,
    title: "НЕ ИМЕЕМ АНАЛОГОВ В МИРЕ",
    description: "Мы — первые, кто предлагает продукцию с комплексным подходом к восстановлению организма на клеточном уровне.",
    tag: "ГЛОБАЛЬНОСТЬ",
    isLarge: true,
  },
  {
    id: 2,
    title: "ИННОВАЦИОННАЯ ТЕХНОЛОГИЯ",
    description: "Запатентованная технология производства продуктов нового поколения.",
    tag: "ИННОВАЦИИ",
    isLarge: false,
  },
  {
    id: 3,
    title: "МЕЖДУНАРОДНОЕ ПРИЗНАНИЕ",
    description: "Методика успешно внедрена в России, Казахстане и странах дальнего зарубежья.",
    tag: "ЭТАЛОН",
    isLarge: false,
  },
  {
    id: 4,
    title: "КОМПЛЕКСНЫЙ ПОДХОД",
    description: "Восстановление организма от клеточного до системного уровня.",
    tag: "СИСТЕМНОСТЬ",
    isLarge: false,
  },
  {
    id: 5,
    title: "СИНТЕЗ НАУКИ И ПРИРОДЫ",
    description: "Лучшие природные компоненты и достижения биотехнологий.",
    tag: "СИНТЕЗ",
    isLarge: false,
  },
];

export function VitaminsUniquenessSection() {
  return (
    <section id="vitamins-uniqueness" className="relative overflow-hidden py-[60px] md:py-[100px]" 
             style={{ backgroundColor: BG_DARK }}>
      
      {/* ── GLOBAL SCHEMATIC BACKGROUND ── */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
        <svg width="100%" height="100%">
          <pattern id="global-grid-uniqueness" width="120" height="120" patternUnits="userSpaceOnUse">
             <path d="M 120 0 L 0 0 0 120" fill="none" stroke={CYAN} strokeWidth="0.5" opacity="0.3" />
             <path d="M 60 0 L 60 120 M 0 60 L 120 60" fill="none" stroke={CYAN} strokeWidth="0.2" opacity="0.1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#global-grid-uniqueness)" />
        </svg>
      </div>

      {/* ── GLOBAL BACKGROUND DECORATIONS ── */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          {/* Shape 1: Large Tech Circle (Left) */}
          <div className="animate-float" style={{ position: "absolute", top: "10%", left: "-10%", width: "600px", height: "600px", opacity: 0.05 }}>
              <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
                  <circle cx="100" cy="100" r="90" stroke={CYAN} strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="70" stroke={CYAN} strokeWidth="0.3" fill="none" />
                  <line x1="10" y1="100" x2="190" y2="100" stroke={CYAN} strokeWidth="0.2" />
                  <line x1="100" y1="10" x2="100" y2="190" stroke={CYAN} strokeWidth="0.2" />
              </svg>
          </div>

          {/* Shape 2: Large Hexagon Outline (Right) */}
          <div className="animate-float" style={{ position: "absolute", bottom: "10%", right: "-5%", width: "500px", height: "500px", opacity: 0.04, animationDelay: "-5s" }}>
              <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
                  <path d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z" stroke={CYAN} fill="none" strokeWidth="0.5" />
                  <path d="M100 40 L150 70 L150 130 L100 160 L50 130 L50 70 Z" stroke={CYAN} fill="none" strokeWidth="0.3" opacity="0.5" />
              </svg>
          </div>
      </div>

      <Container className="relative z-10">
        
        {/* Заголовок секции */}
        <div className="mb-8 md:mb-[60px]" style={{ textAlign: "left" }}>
            <h2 style={{ 
                fontFamily: "'Furore', sans-serif", 
                fontSize: "clamp(34px, 5.5vw, 68px)", 
                fontWeight: 400, 
                textTransform: "uppercase", 
                color: "#fff",
                margin: 0,
                lineHeight: 1.0,
                letterSpacing: "0.02em"
            }}>
                Наша <span style={{ color: CYAN }}>Уникальность</span>
            </h2>
            <div style={{ width: "80px", height: "1px", background: CYAN, marginTop: "20px", opacity: 0.8 }} />
        </div>

        {/* ── PLATES & SHAPES 1+4 GRID (Desktop) ── */}
        <div className="hidden md:grid gap-4 lg:gap-5" 
             style={{ gridTemplateColumns: "1.35fr 1fr 1fr", gridTemplateRows: "auto auto" }}>
            
            {/* LARGE CARD (Item 1) */}
            <div style={{ gridRow: "1 / 3" }}>
                <UniquenessCard item={uniquenessItems[0]} />
            </div>

            {/* SMALL CARDS (Items 2-5) */}
            {uniquenessItems.slice(1).map((item) => (
                <div key={item.id}>
                    <UniquenessCard item={item} />
                </div>
            ))}
        </div>

        {/* ── MOBILE STACK ── */}
        <div className="md:hidden flex flex-col gap-6">
            {uniquenessItems.map((item) => (
                <div key={item.id}>
                    <UniquenessCard item={item} mobile />
                </div>
            ))}
        </div>

      </Container>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
        }
        @keyframes spin-meridian {
            0% { rx: 100; opacity: 0.1; }
            25% { rx: 50; opacity: 0.4; }
            50% { rx: 0; opacity: 0.8; }
            75% { rx: 50; opacity: 0.4; }
            100% { rx: 100; opacity: 0.1; }
        }
        @keyframes pulse-molecule {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-float {
            animation: float 15s ease-in-out infinite;
        }
        .animate-spin-meridian {
            animation: spin-meridian 10s linear infinite;
        }
        .animate-pulse-molecule {
            animation: pulse-molecule 4s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}

function UniquenessCard({ item, mobile }: { item: any; mobile?: boolean }) {
    const isLarge = item.isLarge && !mobile;
    const [hovered, setHovered] = useState(false);

    return (
        <div 
          className="group relative h-full"
          onMouseEnter={() => !mobile && setHovered(true)}
          onMouseLeave={() => !mobile && setHovered(false)}
          style={{
            background: hovered ? `${CYAN}` : `${CYAN}80`,
            clipPath: CLIP(22),
            padding: "2px",
            transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            minHeight: isLarge ? "520px" : "250px",
            boxShadow: hovered ? `0 0 35px ${CYAN}40` : `0 0 20px ${CYAN}15`,
            transform: hovered ? "translateY(-10px)" : "translateY(0)",
          }}
        >
          <div
            style={{
              background: hovered 
                ? "linear-gradient(155deg, #003620 0%, #00150c 100%)" 
                : "linear-gradient(155deg, #002818 0%, #00110c 100%)",
              clipPath: CLIP(21),
              padding: isLarge ? "48px" : "32px 28px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              position: "relative",
              overflow: "hidden",
            }}
          >

            {/* Node Number */}
            <div style={{ 
                position: "absolute", top: "22px", left: "22px", 
                width: "24px", height: "24px", borderRadius: "50%",
                border: `1px solid ${CYAN}60`, display: "flex", 
                alignItems: "center", justifyContent: "center",
                background: "rgba(0,0,0,0.5)",
                zIndex: 10
            }}>
                <span style={{ 
                    fontFamily: "'Furore', sans-serif", fontSize: "10px", 
                    color: CYAN, opacity: 0.9 
                }}>
                    {item.id}
                </span>
            </div>

            {/* Content organised into PLATED LAYERS */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
                
                {/* Plate 1: Tag & Title (Saturated Wrapper) */}
                <div style={{ 
                    background: `${CYAN}50`, 
                    padding: "1px", 
                    clipPath: CLIP(12) 
                }}>
                    <div style={{ 
                        background: "rgba(111,230,193,0.1)", 
                        padding: "20px 24px", 
                        clipPath: CLIP(11.5),
                        height: "100%"
                    }}>
                        <div style={{ 
                            fontFamily: "'Furore', sans-serif", fontSize: "9px", 
                            color: CYAN, letterSpacing: "0.2em", marginBottom: "12px", 
                            opacity: 0.9, textTransform: "uppercase" 
                        }}>
                            // {item.tag}
                        </div>
                        <h3 style={{ 
                            fontFamily: "'Furore', sans-serif", 
                            fontSize: isLarge ? "28px" : "15px", 
                            color: "#ffffff", textTransform: "uppercase", 
                            letterSpacing: "0.03em", lineHeight: 1.25, margin: 0
                        }}>
                            {item.title}
                        </h3>
                    </div>
                </div>

                {/* Plate 2: Description (Saturated Wrapper) */}
                <div style={{ 
                    background: `${CYAN}35`, 
                    padding: "1px", 
                    clipPath: CLIP(12),
                    flex: 1
                }}>
                    <div style={{ 
                        background: "rgba(0,0,0,0.35)", 
                        padding: "24px", 
                        clipPath: CLIP(11.5),
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px"
                    }}>
                        <p style={{ 
                            fontFamily: "'Montserrat', sans-serif", 
                            fontSize: isLarge ? "15px" : "13.5px", color: "rgba(255,255,255,0.85)", 
                            lineHeight: 1.7, margin: 0, fontWeight: 400
                        }}>
                            {item.description}
                        </p>

                        {/* ── PREMIUM TECHNICAL GLOBE (Below Text) ── */}
                        {isLarge && (
                            <div style={{ width: "100%", height: "260px", opacity: 0.9, pointerEvents: "none", marginTop: "10px" }}>
                                <svg viewBox="0 0 400 300" style={{ width: "100%", height: "100%" }}>
                                    <defs>
                                        <filter id="globe-glow-refined">
                                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                        </filter>
                                    </defs>
                                    <g transform="translate(200, 150) rotate(-15)">
                                        {/* Atmosphere Glow */}
                                        <circle r="102" fill="none" stroke={CYAN} strokeWidth="0.5" opacity="0.15" />
                                        
                                        {/* Primary Sphere Body - STATIC */}
                                        <circle r="100" stroke={CYAN} strokeWidth="2.5" fill="rgba(111,230,193,0.03)" filter="url(#globe-glow-refined)" />
                                        
                                        {/* Rotating Meridians (Simulated 3D rx animation) */}
                                        <ellipse rx="100" ry="100" stroke={CYAN} strokeWidth="1.2" fill="none" className="animate-spin-meridian" style={{ animationDelay: "0s" }} />
                                        <ellipse rx="100" ry="100" stroke={CYAN} strokeWidth="1.2" fill="none" className="animate-spin-meridian" style={{ animationDelay: "-2.5s" }} />
                                        <ellipse rx="100" ry="100" stroke={CYAN} strokeWidth="1.2" fill="none" className="animate-spin-meridian" style={{ animationDelay: "-5s" }} />
                                        <ellipse rx="100" ry="100" stroke={CYAN} strokeWidth="1.2" fill="none" className="animate-spin-meridian" style={{ animationDelay: "-7.5s" }} />

                                        {/* Static Parallels (Horizontal depth) */}
                                        <ellipse rx="100" ry="30" stroke={CYAN} strokeWidth="1.0" fill="none" opacity="0.3" />
                                        <ellipse rx="86" ry="20" stroke={CYAN} strokeWidth="0.8" fill="none" opacity="0.2" transform="translate(0, -50)" />
                                        <ellipse rx="86" ry="20" stroke={CYAN} strokeWidth="0.8" fill="none" opacity="0.2" transform="translate(0, 50)" />
                                        <line x1="-100" y1="0" x2="100" y2="0" stroke={CYAN} strokeWidth="1.0" opacity="0.4" />

                                        {/* Technical Accents (Bounding Corners) - STATIC */}
                                        <g stroke={CYAN} strokeWidth="1" opacity="0.4">
                                            <path d="M-120,-120 L-110,-120 M-120,-120 L-120,-110" />
                                            <path d="M120,-120 L110,-120 M120,-120 L120,-110" />
                                            <path d="M-120,120 L-110,120 M-120,120 L-120,110" />
                                            <path d="M120,120 L110,120 M120,120 L120,110" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            {/* Ghost Detail */}
            <div style={{
                position: "absolute", bottom: "-10px", right: "15px",
                fontFamily: "'Furore', sans-serif", fontSize: "100px",
                color: "transparent", WebkitTextStroke: `1px ${CYAN}04`,
                zIndex: -1, pointerEvents: "none"
            }}>
                0{item.id}
            </div>
          </div>
        </div>
    );
}
