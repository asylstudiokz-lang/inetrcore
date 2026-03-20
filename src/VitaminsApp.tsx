import { Navbar } from "./components/Navbar";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { VitaminsHeroSection } from "./components/vitamins/VitaminsHeroSection";
import { VitaminsAdvantagesSection } from "./components/vitamins/VitaminsAdvantagesSection";
import { VitaminsVideoSection } from "./components/vitamins/VitaminsVideoSection";
import { VitaminsUniquenessSection } from "./components/vitamins/VitaminsUniquenessSection";
import { AboutCompanySection } from "./components/vitamins/AboutCompanySection";

export default function VitaminsApp() {
  return (
    <div suppressHydrationWarning style={{ backgroundColor: "#001d14", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

      {/* ── Global desktop button animations (shared with ZPRR) ── */}
      <style dangerouslySetInnerHTML={{__html: `
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
          filter: drop-shadow(0 0 14px rgba(212,172,107,0.75)) brightness(1.1);
          transform: translateY(-1px);
        }
        .site-btn:hover::after {
          transform: translateX(160%);
        }
        .site-btn:active {
          transform: translateY(0px);
          filter: drop-shadow(0 0 8px rgba(212,172,107,0.5)) brightness(1.05);
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 160% 120% at 50% 50%, #003825 0%, #001e14 45%, #00110c 70%, #110500 100%)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
      </div>

      <main style={{ paddingTop: "80px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
        <VitaminsHeroSection />
        <VitaminsAdvantagesSection />
        <VitaminsVideoSection />
        <VitaminsUniquenessSection />
        <AboutCompanySection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
