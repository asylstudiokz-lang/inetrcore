import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { useIsMobile } from '../ui/use-mobile';
import imgCatalogMain from '../../assets/vitamins/catalog_main.jpg?url';
import imgCatalogCard2 from '../../assets/vitamins/catalog_card2.jpg?url';
import imgCatalogCard3 from '../../assets/vitamins/catalog_card3.jpg?url';

const CYAN = "#6FE6C1";
const BG_DARK = "#001d14";
const CLIP = (s: number) => `polygon(0 0, calc(100% - ${s}px) 0, 100% ${s}px, 100% 100%, ${s}px 100%, 0 calc(100% - ${s}px))`;

export function VitaminsCatalogSection() {
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useIsMobile();
    const catalogCover = "/Users/ivanancuk/.gemini/antigravity/brain/dbefaa07-9165-4791-9d82-8891d00f9b3f/media__1774082213011.png";

    return (
        <section id="catalog-section" className="relative overflow-hidden py-[60px] md:py-[100px]" 
                 style={{ backgroundColor: BG_DARK }}>
            
            {/* ── Background Watermark ── */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: "'Furore', sans-serif",
                fontSize: "clamp(120px, 25vw, 280px)",
                fontWeight: 400,
                color: "rgba(111,230,193,0.03)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 0
            }}>
                КАТАЛОГ
            </div>

            {/* ── Decorative Grid ── */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `radial-gradient(circle, ${CYAN}12 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
                opacity: 0.3,
                maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)",
                zIndex: 0
            }} />

            <Container className="relative z-10">
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px"
                }}>
                    
                    {/* Interactive Card Stack */}
                    <a 
                        href="https://drive.google.com/drive/folders/1Bl7moB1T5HzPApA9iEXCsDh_VRQo8tKF" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Посмотреть каталог продукции в Google Drive"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div 
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                position: "relative",
                                width: isMobile ? "clamp(280px, 80vw, 420px)" : "clamp(260px, 40vw, 500px)",
                                aspectRatio: "1.5 / 1",
                                cursor: "pointer",
                                filter: isHovered ? `drop-shadow(0 0 40px ${CYAN}40)` : "none",
                                transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)"
                            }}
                        >
                            {/* Card 3 (Bottom) */}
                            <div style={{
                                position: "absolute", inset: 0, clipPath: CLIP(22),
                                background: "rgba(111,230,193,0.15)", zIndex: 1,
                                transform: isHovered ? "translate(-40px, -20px) rotate(-10deg)" : "translate(-20px, -10px) rotate(-5deg)",
                                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}>
                                <img 
                                    src={imgCatalogCard3} 
                                    alt="Витаминный комплекс - Карточка 3" 
                                    title="Натуральные витамины и БАДы"
                                    style={{
                                        position: "absolute", inset: "1.5px", clipPath: CLIP(21),
                                        width: "calc(100% - 3px)", height: "calc(100% - 3px)",
                                        objectFit: "cover", opacity: 0.8
                                    }} 
                                />
                            </div>

                            {/* Card 2 (Middle) */}
                            <div style={{
                                position: "absolute", inset: 0, clipPath: CLIP(22),
                                background: "rgba(111,230,193,0.25)", zIndex: 2,
                                transform: isHovered ? "translate(40px, -20px) rotate(10deg)" : "translate(20px, -10px) rotate(5deg)",
                                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}>
                                <img 
                                    src={imgCatalogCard2} 
                                    alt="Витаминный комплекс - Карточка 2" 
                                    title="Комплексы для восстановления организма"
                                    style={{
                                        position: "absolute", inset: "1.5px", clipPath: CLIP(21),
                                        width: "calc(100% - 3px)", height: "calc(100% - 3px)",
                                        objectFit: "cover", opacity: 0.9
                                    }} 
                                />
                            </div>

                            {/* Card 1 (Top) */}
                            <div style={{
                                position: "absolute", inset: 0, clipPath: CLIP(22),
                                background: CYAN, zIndex: 3,
                                transform: isHovered ? "translateY(-15px)" : "translateY(0)",
                                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                            }}>
                                <div style={{
                                    position: "absolute", inset: "1.5px", clipPath: CLIP(21),
                                    background: `linear-gradient(135deg, ${CYAN}80 0%, ${CYAN}40 100%)`,
                                    display: "flex", alignItems: "center", justifyContent: "center"
                                }}>
                                    <img 
                                        src={imgCatalogMain} 
                                        alt="Каталог VITAMINS - Центр Побед" 
                                        title="Скачать каталог витаминных комплексов"
                                        style={{ 
                                            width: "100%", 
                                            height: "100%", 
                                            objectFit: "cover",
                                            position: "absolute",
                                            inset: 0
                                        }} 
                                    />
                                </div>
                                {/* Gloss Overlay */}
                                <div style={{
                                    position: "absolute", inset: 0,
                                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                                    pointerEvents: "none"
                                }} />
                            </div>
                        </div>
                    </a>

                    {/* Polygon Download Button */}
                    <div style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "340px",
                        height: "64px"
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Ping / Glow shadow behind */}
                        <div style={{
                            position: "absolute", inset: "-4px",
                            clipPath: CLIP(18),
                            background: CYAN, opacity: isHovered ? 0.35 : 0,
                            transition: "opacity 0.4s",
                            filter: "blur(14px)"
                        }} />

                        {/* Main Button Body */}
                        <a 
                            href="https://drive.google.com/drive/folders/1Bl7moB1T5HzPApA9iEXCsDh_VRQo8tKF" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Скачать каталог продукции в Google Drive"
                            style={{ textDecoration: "none" }}
                        >
                            <button style={{
                                position: "absolute", inset: 0, width: "100%", height: "100%",
                                background: isHovered ? `rgba(9, 185, 131, 0.9)` : `rgba(111,230,193,0.1)`,
                                border: `1.5px solid ${CYAN}50`, outline: "none", cursor: "pointer",
                                clipPath: CLIP(14),
                                display: "flex", alignItems: "center", justifyContent: "center",
                                gap: "14px", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                transform: isHovered ? "translateY(-1px)" : "translateY(0)"
                            }}>
                                <span style={{
                                    fontFamily: "'Furore', sans-serif", fontSize: "14px", color: "#fff",
                                    letterSpacing: "0.22em", textTransform: "uppercase"
                                }}>
                                    СКАЧАТЬ КАТАЛОГ
                                </span>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={CYAN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{
                                    transform: isHovered ? "translateY(2px)" : "translateY(0)",
                                    transition: "transform 0.3s ease"
                                }}>
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                                </svg>
                            </button>
                        </a>

                        {/* Tracing SVG Border */}
                        <svg
                            style={{
                                position: "absolute", inset: 0, width: "100%", height: "100%",
                                pointerEvents: "none", overflow: "visible"
                            }}
                            viewBox="0 0 340 64"
                            preserveAspectRatio="none"
                        >
                            {/* Static Border (always visible) */}
                            <polyline
                                points="1,1 326,1 339,14 339,63 14,63 1,50 1,1"
                                fill="none"
                                stroke={CYAN}
                                strokeWidth="1.5"
                                opacity="0.3"
                            />
                            {/* Animated Tracing Border */}
                            <polyline
                                points="1,1 326,1 339,14 339,63 14,63 1,50 1,1"
                                fill="none"
                                stroke={CYAN}
                                strokeWidth="2"
                                strokeDasharray={1000}
                                strokeDashoffset={isHovered ? 0 : 1000}
                                style={{
                                    transition: isHovered ? "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)" : "stroke-dashoffset 0.4s ease",
                                    filter: isHovered ? `drop-shadow(0 0 8px ${CYAN})` : "none"
                                }}
                            />
                        </svg>
                    </div>

                </div>
            </Container>

            {/* Ambient Ambient Glow */}
            <div style={{
                position: "absolute", top: "50%", right: "-5%",
                width: "40%", height: "40%",
                background: `radial-gradient(circle, ${CYAN}06 0%, transparent 70%)`,
                transform: "translateY(-50%)",
                pointerEvents: "none"
            }} />
        </section>
    );
}
