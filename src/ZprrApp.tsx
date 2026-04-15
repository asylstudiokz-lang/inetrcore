import { Navbar } from "./components/Navbar";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { ZprrHeroSection } from "./components/zprr/ZprrHeroSection";
import { ZprrCausesSection } from "./components/zprr/ZprrCausesSection";
import { ZprrMethodologySection } from "./components/zprr/ZprrMethodologySection";
import { ZprrTherapyStagesSection } from "./components/zprr/ZprrTherapyStagesSection";
import { ZprrDeclarationsSection } from "./components/zprr/ZprrDeclarationsSection";
import { ZprrReviewsSection } from "./components/zprr/ZprrReviewsSection";
import { ZprrFaqSection } from "./components/zprr/ZprrFaqSection";
import { ZprrArticlesSection } from "./components/zprr/ZprrArticlesSection";

export default function ZprrApp() {
  return (
    <div suppressHydrationWarning style={{ backgroundColor: "#001d14", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

      {/* ── Global desktop button animations ── */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Shimmer + glow — for solid/clipPath buttons */
        .site-btn {
          position: relative;
          overflow: hidden;
          transition: filter 0.3s ease, transform 0.2s ease !important;
        }
        .site-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.16) 50%, transparent 65%);
          transform: translateX(-160%);
          transition: transform 0.5s ease;
          pointer-events: none;
          z-index: 2;
        }
        .site-btn:hover {
          filter: drop-shadow(0 0 14px rgba(111,230,193,0.75)) brightness(1.1);
          transform: translateY(-1px);
        }
        .site-btn:hover::after {
          transform: translateX(160%);
        }
        .site-btn:active {
          transform: translateY(0px);
          filter: drop-shadow(0 0 8px rgba(111,230,193,0.5)) brightness(1.05);
        }

        /* Text/arrow buttons (transparent background) */
        .site-btn-text {
          transition: color 0.25s ease, letter-spacing 0.3s ease !important;
        }
        .site-btn-text:hover {
          color: #9ffce0 !important;
          letter-spacing: 0.24em !important;
          text-shadow: 0 0 14px rgba(111,230,193,0.55);
        }
        .site-btn-text svg {
          transition: transform 0.3s ease;
        }
        .site-btn-text:hover svg {
          transform: translateX(6px);
        }
      `}}></style>

      {/* ── DESKTOP-ONLY background: covers navbar + hero ── */}
      <div
        className="hidden md:block"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Radial gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 160% 120% at 78% 52%, #003825 0%, #001e14 45%, #00110c 70%, #000503 100%)",
          }}
        />
      </div>

      {/* Navbar sits above background */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
      </div>

      <main style={{ paddingTop: "80px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
        <ZprrHeroSection />

        {/* ── MOBILE VIDEO SECTION (mobile only) ── */}
        <div className="md:hidden w-full" style={{ paddingTop: "10px", paddingBottom: "20px", paddingLeft: "16px", paddingRight: "16px" }}>
          <div style={{
            width: "100%",
            maxWidth: "480px",
            margin: "0 auto",
            position: "relative",
            background: "linear-gradient(135deg, rgba(111,230,193,0.5) 0%, rgba(111,230,193,0.1) 100%)",
            padding: "1.5px",
            clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.6))",
          }}>
            <div style={{
              background: "#000805",
              clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)",
              aspectRatio: "16 / 9",
              position: "relative",
              overflow: "hidden",
            }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/K7HDqvZI0YQ?start=3"
                title="ЗПРР Видео"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0 }}
              ></iframe>
            </div>
          </div>
        </div>

        <ZprrCausesSection />
        <ZprrMethodologySection />
        <ZprrTherapyStagesSection />
        <ZprrDeclarationsSection />
        <ZprrReviewsSection />
        <ZprrFaqSection />
        <ZprrArticlesSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
