import { useState, useRef, useEffect } from "react";
import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";
const CLIP = (s: number) =>
  `polygon(${s}px 0, 100% 0, 100% calc(100% - ${s}px), calc(100% - ${s}px) 100%, 0 100%, 0 ${s}px)`;

const slides = Array.from({ length: 10 }, (_, i) => ({
  id: String(i + 1).padStart(2, "0"),
  title: `Результат ${i + 1}`,
}));

export function WoundTreatmentGallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalSlides = slides.length;
  const visibleSlides = isMobile ? 1 : 2;
  const maxIndex = totalSlides - visibleSlides;

  const nextSlide = () => setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  const prevSlide = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));

  return (
    <section
      id="gallery"
      style={{ backgroundColor: "#001d14", position: "relative", overflow: "hidden" }}
    >
      {/* ── Background decoration ── */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(111,230,193,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "10%", right: "5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(111,230,193,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <Container style={{ position: "relative", zIndex: 1, padding: "80px 0 100px" }}>
        <div style={{ 
          display: "flex", 
          flexDirection: isMobile ? "column" : "row", 
          gap: isMobile ? "40px" : "60px", 
          alignItems: "center",
          justifyContent: "center"
        }}>
          
          {/* ── LEFT: Slider Area ── */}
          <div style={{ 
            flex: isMobile ? "none" : "0 1 740px", 
            width: "100%", 
            maxWidth: isMobile ? "none" : "740px",
            position: "relative" 
          }}>
            
            {/* Slider Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ width: 40, height: 1, background: CYAN, opacity: 0.5 }} />
              <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "11px", color: "rgba(111,230,193,0.6)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                фотографии результатов
              </span>
            </div>

            <div style={{ overflow: "hidden", position: "relative", padding: "4px" }}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  transition: "transform 0.60s cubic-bezier(0.19, 1, 0.22, 1)",
                  transform: `translateX(calc(-${activeIndex * (100 / (isMobile ? 1 : 2))}% - ${activeIndex * (isMobile ? 20 : 10)}px))`,
                }}
              >
                {slides.map((slide) => (
                  <div
                    key={slide.id}
                    style={{
                      flex: `0 0 calc(${100 / (isMobile ? 1 : 2)}% - ${isMobile ? 0 : 10}px)`,
                      aspectRatio: "1/1",
                      background: "rgba(111,230,193,0.18)",
                      clipPath: CLIP(24),
                      padding: "1.5px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        background: "linear-gradient(135deg, #000c06 0%, #00140a 100%)",
                        clipPath: CLIP(23),
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(111,230,193,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                      
                      <svg style={{ width: 64, height: 64, color: CYAN, opacity: 0.35, marginBottom: 18 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      
                      <span style={{ fontFamily: "'Furore', sans-serif", fontSize: 12, color: CYAN, letterSpacing: "0.2em", opacity: 0.5, textAlign: "center", padding: "0 20px", textTransform: "uppercase" }}>
                        Здесь будут фотографии
                      </span>

                      {/* Ghost ID */}
                      <div style={{ position: "absolute", bottom: -10, right: 12, fontFamily: "'Furore', sans-serif", fontSize: 84, color: "transparent", WebkitTextStroke: "1px rgba(111,230,193,0.04)", userSelect: "none", lineHeight: 0.8 }}>
                        {slide.id}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <div style={{ display: "flex", gap: "12px", marginTop: isMobile ? "24px" : "28px", justifyContent: isMobile ? "center" : "flex-start" }}>
              <button
                onClick={prevSlide}
                disabled={activeIndex === 0}
                style={{
                  width: isMobile ? 80 : 48, 
                  height: isMobile ? 36 : 48,
                  background: "rgba(111,230,193,0.1)",
                  clipPath: CLIP(isMobile ? 6 : 8),
                  border: "none",
                  cursor: activeIndex === 0 ? "default" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease",
                  color: CYAN,
                  opacity: activeIndex === 0 ? 0.2 : 1,
                  pointerEvents: activeIndex === 0 ? "none" : "auto"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(111,230,193,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(111,230,193,0.1)")}
              >
                {isMobile ? (
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><path d="M22 6H2M2 6L7 1M2 6L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 15L8 10L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                )}
              </button>
              <button
                onClick={nextSlide}
                disabled={activeIndex === maxIndex}
                style={{
                  width: isMobile ? 80 : 48, 
                  height: isMobile ? 36 : 48,
                  background: "rgba(111,230,193,0.1)",
                  clipPath: CLIP(isMobile ? 6 : 8),
                  border: "none",
                  cursor: activeIndex === maxIndex ? "default" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease",
                  color: CYAN,
                  opacity: activeIndex === maxIndex ? 0.2 : 1,
                  pointerEvents: activeIndex === maxIndex ? "none" : "auto"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(111,230,193,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(111,230,193,0.1)")}
              >
                {isMobile ? (
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none"><path d="M2 6H22M22 6L17 1M22 6L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 15L12 10L7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                )}
              </button>
            </div>

          </div>

          {/* ── RIGHT: Info Block ── */}
          <div style={{ 
            flex: isMobile ? "none" : "0 0 420px", 
            width: isMobile ? "100%" : "420px",
            background: "rgba(111,230,193,0.15)", // Border Color
            clipPath: CLIP(32),
            padding: "1.5px", // Border thickness
            boxSizing: "border-box"
          }}>
            <div style={{
              background: "linear-gradient(135deg, #001f16 0%, #000c08 100%)", 
              clipPath: CLIP(31.5), // Inner clip to reveal border
              padding: "48px 40px", 
              height: "100%",
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              textAlign: isMobile ? "center" : "left",
            }}>
              <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "28px", color: "#fff", textTransform: "uppercase", lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "0.02em" }}>
                Побочных эффектов<br />
                <span style={{ color: CYAN }}>не обнаружено</span>
              </h2>
              <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "28px", color: "#fff", textTransform: "uppercase", lineHeight: 1.2, margin: "0 0 40px", letterSpacing: "0.02em" }}>
                Противопоказаний<br />
                <span style={{ color: CYAN }}>нет</span>
              </h2>

              <div style={{ background: CYAN, clipPath: CLIP(14), padding: "1.5px", width: "fit-content", margin: isMobile ? "0 auto" : "0" }}>
                <button
                  className="site-btn"
                  style={{
                    height: 72,
                    background: "linear-gradient(135deg, #002416 0%, #000e08 100%)",
                    clipPath: CLIP(13),
                    border: "none",
                    padding: "0 44px",
                    cursor: "pointer",
                    fontFamily: "'Furore', sans-serif",
                    fontSize: 14,
                    letterSpacing: "0.14em",
                    color: CYAN,
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 16,
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #003820 0%, #001810 100%)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #002416 0%, #000e08 100%)"; }}
                >
                  Получить консультацию
                  <svg width="22" height="8" viewBox="0 0 22 8" fill="none"><path d="M0 4H20M16 1L20 4L16 7" stroke="#6FE6C1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
