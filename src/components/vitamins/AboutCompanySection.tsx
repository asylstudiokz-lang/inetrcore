import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';

const CYAN = "#6FE6C1";
const BG_DARK = "#001d14";
const CLIP = (s: number) => `polygon(${s}px 0, 100% 0, 100% calc(100% - ${s}px), calc(100% - ${s}px) 100%, 0 100%, 0 ${s}px)`;

const CERTIFICATES = [
    "/Users/ivanancuk/.gemini/antigravity/brain/dbefaa07-9165-4791-9d82-8891d00f9b3f/quality_certificate_mock_1_1774043468361.png",
    "/Users/ivanancuk/.gemini/antigravity/brain/dbefaa07-9165-4791-9d82-8891d00f9b3f/quality_certificate_mock_3_1774043493592.png",
    "/Users/ivanancuk/.gemini/antigravity/brain/dbefaa07-9165-4791-9d82-8891d00f9b3f/quality_certificate_mock_1_1774043468361.png",
    "/Users/ivanancuk/.gemini/antigravity/brain/dbefaa07-9165-4791-9d82-8891d00f9b3f/quality_certificate_mock_3_1774043493592.png",
    "/Users/ivanancuk/.gemini/antigravity/brain/dbefaa07-9165-4791-9d82-8891d00f9b3f/quality_certificate_mock_1_1774043468361.png",
];

const PlatedCard = ({ children, className = "", style = {}, tag = "", isMobile = false }: any) => {
    const [hovered, setHovered] = useState(false);
    return (
    <div 
        className={className} 
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
        style={{
            position: "relative",
            background: hovered ? CYAN : `${CYAN}50`,
            clipPath: CLIP(isMobile ? 18 : 22),
            padding: "1.5px",
            transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: hovered ? "translateY(-6px)" : "translateY(0)",
            boxShadow: hovered ? `0 0 25px ${CYAN}30` : "none",
            ...style
        }}
    >
        <div style={{
            background: hovered 
                ? "linear-gradient(155deg, #003620 0%, #00150c 100%)" 
                : "linear-gradient(155deg, #002818 0%, #00110c 100%)",
            clipPath: CLIP(isMobile ? 17 : 21),
            padding: isMobile ? "16px" : "24px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "10px" : "12px",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Inner Tag Plate */}
            {tag && (
                <div style={{ background: `${CYAN}35`, padding: "1px", clipPath: CLIP(8), alignSelf: "flex-start" }}>
                    <div style={{ background: "rgba(111,230,193,0.1)", padding: isMobile ? "8px 14px" : "10px 18px", clipPath: CLIP(7.5) }}>
                        <span style={{ fontFamily: "'Furore', sans-serif", fontSize: isMobile ? "8px" : "9px", color: CYAN, letterSpacing: "0.2em", opacity: 0.9 }}>{tag}</span>
                    </div>
                </div>
            )}
            {/* Content Plate Wrapper */}
            <div style={{ background: "rgba(111,230,193,0.05)", padding: "1px", clipPath: CLIP(12), flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ background: "rgba(0,0,0,0.25)", padding: isMobile ? "14px" : "20px", clipPath: CLIP(11.5), height: "100%", flex: 1 }}>
                    {children}
                </div>
            </div>
            {/* Technical Node */}
            <div style={{ position: "absolute", bottom: "12px", right: "12px", width: "8px", height: "8px", border: `1px solid ${CYAN}55`, transform: "rotate(45deg)" }} />
        </div>
    </div>
    );
};

export function AboutCompanySection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateWidth = () => {
            const width = window.innerWidth;
            setVisibleSlides(width < 1024 ? 1 : 3);
            setIsMobile(width < 768);
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const maxSlide = CERTIFICATES.length - visibleSlides;
    const isAtStart = currentSlide === 0;
    const isAtEnd = currentSlide >= maxSlide;

    const handleNext = () => {
        if (!isAtEnd) setCurrentSlide(prev => prev + 1);
    };
    const handlePrev = () => {
        if (!isAtStart) setCurrentSlide(prev => prev - 1);
    };

    const SliderControls = ({ mobile }: { mobile: boolean }) => (
        <div style={{ 
            display: "flex", 
            gap: "12px", 
            width: mobile ? "100%" : "auto",
            marginTop: "0"
        }}>
            <button 
                onClick={handlePrev} 
                disabled={isAtStart}
                style={{ 
                    background: "transparent", 
                    border: `1px solid ${CYAN}44`, 
                    color: CYAN, 
                    width: mobile ? "100%" : "52px", 
                    height: mobile ? "48px" : "52px", 
                    cursor: isAtStart ? "default" : "pointer", 
                    transition: "all 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: isAtStart ? 0.25 : 1,
                    pointerEvents: isAtStart ? "none" : "auto"
                }} 
                onMouseEnter={(e) => !isAtStart && (e.currentTarget.style.borderColor = CYAN)}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button 
                onClick={handleNext} 
                disabled={isAtEnd}
                style={{ 
                    background: "transparent", 
                    border: `1px solid ${CYAN}44`, 
                    color: CYAN, 
                    width: mobile ? "100%" : "52px", 
                    height: mobile ? "48px" : "52px", 
                    cursor: isAtEnd ? "default" : "pointer", 
                    transition: "all 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: isAtEnd ? 0.25 : 1,
                    pointerEvents: isAtEnd ? "none" : "auto"
                }} 
                onMouseEnter={(e) => !isAtEnd && (e.currentTarget.style.borderColor = CYAN)}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
        </div>
    );

    return (
        <section id="about-company" className="relative overflow-hidden" 
                 style={{ backgroundColor: BG_DARK, paddingTop: isMobile ? "60px" : "80px", paddingBottom: isMobile ? "80px" : "120px" }}>
            
            {/* ── BACKGROUND SCHEMATIC ── */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none" }}>
                <svg width="100%" height="100%">
                    <pattern id="about-plated-grid" width="120" height="120" patternUnits="userSpaceOnUse">
                        <path d="M 120 0 L 0 0 0 120" fill="none" stroke={CYAN} strokeWidth="0.5" />
                        <circle cx="0" cy="0" r="1.5" fill={CYAN} />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#about-plated-grid)" />
                </svg>
            </div>

            <Container className="relative z-10">
                {/* ── HEADER ── */}
                <div style={{ marginBottom: isMobile ? "40px" : "60px", borderBottom: `1px solid ${CYAN}15`, paddingBottom: isMobile ? "24px" : "32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                             <div style={{ width: "32px", height: "1px", background: CYAN }} />
                             <span style={{ fontFamily: "'Furore', sans-serif", fontSize: isMobile ? "9px" : "11px", color: CYAN, letterSpacing: "0.25em" }}>ЦЕНТР ВНЕДРЕНИЯ ТЕХНОЛОГИЙ</span>
                        </div>
                        <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(32px, 6vw, 84px)", color: "#fff", textTransform: "uppercase", margin: 0, lineHeight: 0.9 }}>
                            О <span style={{ color: CYAN }}>КОМПАНИИ</span>
                        </h2>
                    </div>
                    <div style={{ fontFamily: "'Furore', sans-serif", fontSize: "12px", color: CYAN, opacity: 0.4, display: isMobile ? "none" : "block" }}>ЦЕНТР ВНЕДРЕНИЯ ТЕХНОЛОГИЙ</div>
                </div>

                {/* ── BENTO GRID with PLATED CARDS ── */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: isMobile ? "12px" : "16px" }}>
                    
                    {/* Story Plate */}
                    <PlatedCard className="col-span-12 lg:col-span-8" tag="ИСТОРИЯ И СТАТУС" isMobile={isMobile}>
                         <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: isMobile ? "16px" : "20px", color: "#fff", marginBottom: "16px", letterSpacing: "0.04em" }}>НОВОСИБИРСКИЙ <span style={{ color: CYAN }}>БИОТЕХНОПАРК</span></h3>
                         <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: isMobile ? "14px" : "16px", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, margin: 0 }}>
                             ООО «Центр Внедрения Технологий» стартовало в качестве резидента Новосибирского технопарка, созданного по поручению Президента РФ В. В. Путина (№ Пр-91 от 22.01.2005). В настоящее время мы являемся резидентами <strong style={{ color: CYAN }}>Биотехнопарка</strong> — ведущей научно-производственной площадки Сибири.
                         </p>
                         <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: isMobile ? "13px" : "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginTop: "20px" }}>
                            Основным видом деятельности ООО «ЦВТ» является серийное производство инновационной продукции для здоровья человека, основанной на последних научных разработках.
                        </p>
                    </PlatedCard>

                    {/* Image Plate */}
                    <div className="col-span-12 lg:col-span-4" style={{
                        position: "relative",
                        background: `${CYAN}80`,
                        clipPath: CLIP(isMobile ? 18 : 22),
                        padding: "1.5px",
                        minHeight: isMobile ? "240px" : "auto"
                    }}>
                        <div style={{ 
                            position: "relative", margin: "1px", height: "calc(100% - 2px)", clipPath: CLIP(isMobile ? 17 : 21),
                            overflow: "hidden"
                        }}>
                             <div style={{ 
                                width: "100%", height: "100%", 
                                display: "flex", alignItems: "center", justifyContent: "center",
                                background: "rgba(111,230,193,0.05)",
                                color: CYAN, fontFamily: "'Furore', sans-serif", fontSize: isMobile ? "11px" : "14px",
                                textAlign: "center", padding: "20px"
                            }}>
                                [ ФОТОГРАФИЯ БИОТЕХНОПАРКА КОЛЬЦОВО ]
                            </div>
                            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, #001d14 0%, transparent 50%)`, opacity: 0.6 }} />
                            <div style={{ position: "absolute", bottom: isMobile ? "16px" : "24px", left: isMobile ? "16px" : "24px", fontFamily: "'Furore', sans-serif", fontSize: "9px", color: CYAN, letterSpacing: "0.2em" }}>БИОТЕХНОПАРК КОЛЬЦОВО</div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <PlatedCard className="col-span-12 md:col-span-4" tag="МЕЖДУНАРОДНЫЙ" isMobile={isMobile}>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>
                            Мы — международная компания, и наш инновационный метод восстановления организма применяется не только по всей России, но и в странах ближнего и дальнего зарубежья.
                        </p>
                    </PlatedCard>

                    <PlatedCard className="col-span-12 md:col-span-4" tag="ПРОИЗВОДСТВО" isMobile={isMobile}>
                         <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>
                            ООО «ЦВТ» занимается разработкой продукции растительного происхождения. Это растительные комплексы в виде хелатных соединений без химии.
                        </p>
                    </PlatedCard>

                    <PlatedCard className="col-span-12 md:col-span-4" tag="НАУЧНЫЙ ЦЕНТР" isMobile={isMobile}>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                            Собственная научно-исследовательская база на территории технопарка Академгородка и Биотехнопарка Кольцово.
                        </p>
                    </PlatedCard>

                    {/* Certificate Plate Wide */}
                    <div className="col-span-12" style={{
                        position: "relative",
                        background: `${CYAN}50`,
                        clipPath: CLIP(isMobile ? 18 : 22),
                        padding: "1.5px",
                    }}>
                        <div style={{
                            background: "linear-gradient(155deg, #002818 0%, #00110c 100%)",
                            clipPath: CLIP(isMobile ? 17 : 21),
                            padding: isMobile ? "24px" : "40px",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: isMobile ? "16px" : "40px",
                        }}>
                             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                                <div>
                                    <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: isMobile ? "20px" : "28px", color: "#fff", margin: 0 }}>СЕРТИФИКАТЫ <span style={{ color: CYAN }}>КАЧЕСТВА</span></h3>
                                </div>
                                {!isMobile && <SliderControls mobile={false} />}
                            </div>

                            {/* Slider Viewport */}
                            <div style={{ overflow: "hidden", margin: isMobile ? "0" : "0 -10px" }}>
                                <div style={{ 
                                    display: "flex", 
                                    gap: "0", 
                                    transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
                                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                                    width: "100%"
                                }}>
                                    {CERTIFICATES.map((cert, i) => (
                                        <div key={i} style={{ 
                                            flex: `0 0 ${100 / visibleSlides}%`,
                                            padding: isMobile ? "0" : "0 10px",
                                            boxSizing: "border-box"
                                        }}>
                                                <div style={{ 
                                                    background: "rgba(111,230,193,0.03)", 
                                                    padding: "1px", 
                                                    clipPath: CLIP(12),
                                                    height: "100%",
                                                    transition: "all 0.4s ease",
                                                    transform: "translateZ(0)"
                                                }}
                                                className="hover:shadow-[0_0_25px_rgba(111,230,193,0.3)] hover:-translate-y-2 transition-all duration-300"
                                                >
                                                <div style={{ background: "rgba(0,0,0,0.3)", padding: isMobile ? "12px" : "16px", clipPath: CLIP(11.5) }}>
                                                    <div style={{ 
                                                        width: "100%", 
                                                        aspectRatio: "1 / 1.414", 
                                                        background: "#fff", 
                                                        position: "relative",
                                                        boxShadow: `0 0 40px ${CYAN}05`
                                                    }}>
                                                        <div style={{ 
                                                            width: "100%", height: "100%", 
                                                            display: "flex", alignItems: "center", justifyContent: "center",
                                                            background: "#f0f0f0",
                                                            color: "#999", fontFamily: "'Montserrat', sans-serif", fontSize: "10px",
                                                            textAlign: "center"
                                                        }}>
                                                            СЕРТИФИКАТ <br/> (ФОРМАТ A4)
                                                        </div>
                                                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: CYAN, animation: "scan-plated 4s linear infinite", opacity: 0.4 }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {isMobile && <SliderControls mobile={true} />}
                        </div>
                    </div>

                </div>
            </Container>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes scan-plated { 0% { top: 0%; } 100% { top: 100%; } }
                @media (max-width: 1024px) {
                    .col-span-12 { grid-column: span 12 / span 12 !important; }
                }
            `}} />
        </section>
    );
}
