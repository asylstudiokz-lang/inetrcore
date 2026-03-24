import { Navbar } from "./Navbar";
import { LocationSection } from "./LocationSection";
import { Footer } from "./Footer";
import { WoundTreatmentHeroSection } from "./wound-treatment/WoundTreatmentHeroSection";
import { WoundHealingProcessSection } from "./wound-treatment/WoundHealingProcessSection";
import { WoundTreatmentProductsSection } from "./wound-treatment/WoundTreatmentProductsSection";
import { WoundTreatmentUsageSection } from "./wound-treatment/WoundTreatmentUsageSection";
import { WoundTreatmentGallerySection } from "./wound-treatment/WoundTreatmentGallerySection";

export default function WoundTreatmentApp() {
  return (
    <div suppressHydrationWarning style={{ backgroundColor: "#001d14", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

      {/* ── Global desktop button animations ── */}
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 160% 120% at 78% 52%, #003825 0%, #001e14 45%, #00110c 70%, #000503 100%)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
      </div>

      <main className="pt-[80px] md:pt-[72px]" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
        <WoundTreatmentHeroSection />
        <WoundHealingProcessSection />
        <WoundTreatmentProductsSection />
        <WoundTreatmentUsageSection />
        <WoundTreatmentGallerySection />
        <LocationSection />
      </main>
      
      <Footer />
    </div>
  );
}
