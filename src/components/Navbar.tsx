import { useState } from "react";
import imgLogo from "@/assets/9f52023862aa50f87d6a753ba0b67d4e931e459f.png?url";

/*
 * Navbar mobile shape from Figma analysis:
 *   Container: 404px × 111.964px at left=-6px, top=-32.5px (in Figma page)
 *   Visible portion: from page y=0 to y≈80px
 *
 *   Shape polygon (in page / viewport coordinates, 390px wide, 80px tall):
 *   - Top-left:         (0, 0)
 *   - Top-right:        (100%, 0)
 *   - Right side end:   (100%, 70px)        ← cut starts
 *   - Bottom-right:     (calc(100% - 48px), 80px)  ← cut ends at ~342px
 *   - Bottom-left:      (50px, 80px)        ← cut ends
 *   - Left side end:    (0, 70px)           ← cut starts
 *
 * Border: gradient stroke #6FE6C1 → #56A88E (1px, two-layer clip trick)
 * Glow: drop-shadow filter + inner glow via background gradient
 */

const MOBILE_H = 80; // total clip height px
const CUT_Y = 70;    // y where bottom diagonal cuts start
const CUT_L = 50;    // x of left bottom cut endpoint (px)
const CUT_R = 48;    // distance from right edge of right bottom cut endpoint

// Outer clip (includes 1px border)
const OUTER_CLIP = `polygon(0 0, 100% 0, 100% ${CUT_Y}px, calc(100% - ${CUT_R}px) ${MOBILE_H}px, ${CUT_L}px ${MOBILE_H}px, 0 ${CUT_Y}px)`;

// Inner clip (1px inset for border effect)
const INNER_CLIP = `polygon(1px 1px, calc(100% - 1px) 1px, calc(100% - 1px) ${CUT_Y}px, calc(100% - ${CUT_R + 1}px) ${MOBILE_H - 1}px, ${CUT_L + 1}px ${MOBILE_H - 1}px, 1px ${CUT_Y}px)`;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const SERVICES = [
    { label: "Лечение ЗПРР, ЗРР, РАС", href: "/services/1" },
    { label: "Витаминные комплексы", href: "/services/2" },
    { label: "Педагогическая коррекция", href: "/services/3" },
    { label: "Исправление прикуса", href: "/services/4" },
    { label: "Лечение ран", href: "/services/5" },
  ];

  return (
    <>
      {/* ── MOBILE HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
        style={{ height: `${MOBILE_H}px`, pointerEvents: "none" }}
      >
        {/* Glow outer filter wrapper */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            filter: "drop-shadow(0px 6px 48px rgba(0,207,143,0.72)) drop-shadow(0px 0px 16px rgba(0,207,143,0.4))",
          }}
        >
          {/* Border layer: gradient from #6FE6C1 → #56A88E */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, #6FE6C1 0%, #8AF0D0 40%, #6FE6C1 60%, #56A88E 100%)",
              clipPath: OUTER_CLIP,
            }}
          />

          {/* Inner background layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(22,110,65,0.97) 0%, rgba(0,103,71,0.92) 55%, rgba(0,80,52,0.97) 100%)",
              clipPath: INNER_CLIP,
            }}
          />

          {/* Inner glow highlight (top edge) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(111,230,193,0.18) 0%, transparent 100%)",
              clipPath: INNER_CLIP,
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "16px",
            paddingRight: "16px",
            pointerEvents: "auto",
          }}
        >
          {/* Invisible spacer to balance hamburger */}
          <div style={{ width: "24px" }} />

          {/* "ЦЕНТР ПОБЕД" — centered exactly as in Figma */}
          <a href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "'Furore', 'Exo 2', sans-serif",
                fontSize: "28.732px",
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: "#f9f9f9",
                textShadow: "0px 3.471px 28.58px #00eea3",
                lineHeight: 1,
                textTransform: "uppercase",
                userSelect: "none",
                display: "block",
              }}
            >
              центр побед
            </span>
          </a>

          {/* Hamburger menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: "24px",
              height: "18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="Меню"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 1L17 17M17 1L1 17" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            ) : (
              <>
                <span style={{ display: "block", width: "24px", height: "2.5px", background: "white", borderRadius: "1px" }} />
                <span style={{ display: "block", width: "24px", height: "2.5px", background: "white", borderRadius: "1px" }} />
                <span style={{ display: "block", width: "24px", height: "2.5px", background: "white", borderRadius: "1px" }} />
              </>
            )}
          </button>
        </div>
      </header>

      {/* ── DESKTOP HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 hidden md:flex"
        style={{
          height: "72px",
          background: "linear-gradient(180deg, rgba(0,20,13,0.98) 0%, rgba(0,40,25,0.93) 100%)",
          borderBottom: "1px solid rgba(111,230,193,0.25)",
        }}
      >
        {/* Animated scan line */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scan-x {
            0%   { transform: translateX(-100%); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translateX(100vw); opacity: 0; }
          }
          @keyframes nav-link-glow {
            0%, 100% { text-shadow: none; }
            50% { text-shadow: 0 0 12px rgba(111,230,193,0.6); }
          }
          @keyframes logo-pulse {
            0%, 100% { text-shadow: 0px 0px 18px #00eea3, 0px 0px 40px rgba(0,238,163,0.3); }
            50%       { text-shadow: 0px 0px 28px #00eea3, 0px 0px 60px rgba(0,238,163,0.5); }
          }
          @keyframes badge-spin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          .nav-link-desktop {
            position: relative;
            font-family: 'Exo 2', sans-serif;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.14em;
            color: rgba(200,245,228,0.8);
            text-transform: uppercase;
            text-decoration: none;
            padding: 6px 0;
            transition: color 0.25s;
          }
          .nav-link-desktop::after {
            content: '';
            position: absolute;
            bottom: 0; left: 50%; right: 50%;
            height: 1px;
            background: linear-gradient(90deg, transparent, #6FE6C1, transparent);
            transition: left 0.3s, right 0.3s;
          }
          .nav-link-desktop:hover {
            color: #6FE6C1;
          }
          .nav-link-desktop:hover::after {
            left: 0; right: 0;
          }
          .cta-btn-desktop {
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.3s;
          }
          .cta-btn-desktop:hover {
            box-shadow: 0 0 32px rgba(0,238,163,0.7), 0 0 8px rgba(0,238,163,0.4) !important;
          }
          .cta-btn-desktop::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%);
            transform: translateX(-100%);
            transition: transform 0.4s;
          }
          .cta-btn-desktop:hover::before {
            transform: translateX(100%);
          }
          .services-dropdown {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            background: rgba(111,230,193,0.3);
            padding: 1px;
            min-width: 260px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
            box-shadow: 0 10px 40px rgba(0,0,0,0.6), 0 0 20px rgba(111,230,193,0.1);
            z-index: 100;
          }
          .services-dropdown-inner {
            background: linear-gradient(180deg, rgba(0,35,22,0.98) 0%, rgba(0,20,12,0.99) 100%);
            padding: 12px 0;
            clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
          }
          .services-dropdown.open {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }
          .dropdown-item {
            display: block;
            padding: 12px 24px;
            font-family: 'Exo 2', sans-serif;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.1em;
            color: rgba(200,245,228,0.7);
            text-transform: uppercase;
            text-decoration: none;
            transition: all 0.25s;
            border-left: 2px solid transparent;
            text-align: left;
          }
          .dropdown-item:hover {
            color: #6FE6C1;
            background: rgba(111,230,193,0.06);
            border-left: 2px solid #6FE6C1;
            padding-left: 28px;
          }
        `}}></style>

        {/* Scan line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #6FE6C1, transparent)",
          animation: "scan-x 6s linear infinite",
          opacity: 0.5,
          pointerEvents: "none",
        }} />

        {/* Inner content */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "48px",
          paddingRight: "48px",
          height: "100%",
        }}>

          {/* Logo block Link */}
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "14px", color: "inherit" }}>
            {/* Company logo image */}
            <img
              src={imgLogo}
              alt="Центр Побед"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "contain",
                flexShrink: 0,
                filter: "drop-shadow(0 0 8px rgba(0,238,163,0.35))",
              }}
            />

            {/* Divider */}
            <div style={{ width: "1px", height: "28px", background: "linear-gradient(180deg, transparent, #6FE6C1, transparent)", opacity: 0.4 }} />

            {/* Logo text */}
            <div>
              <span
                style={{
                  fontFamily: "'Furore', 'Exo 2', sans-serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: "#f9f9f9",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  display: "block",
                  animation: "logo-pulse 4s ease-in-out infinite",
                }}
              >
                центр побед
              </span>
              <span style={{
                display: "block",
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.22em",
                color: "rgba(111,230,193,0.7)",
                textTransform: "uppercase",
                marginTop: "3px",
              }}>
                оздоровительный центр
              </span>
            </div>
          </a>

          {/* Center separator lines */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "0", margin: "0 32px" }}>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.2))" }} />
            <div style={{ width: "4px", height: "4px", border: "1px solid rgba(111,230,193,0.5)", transform: "rotate(45deg)", margin: "0 10px", flexShrink: 0 }} />
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(111,230,193,0.2), transparent)" }} />
          </div>

          {/* Nav links + CTA */}
          <nav style={{ display: "flex", gap: "36px", alignItems: "center" }}>
            {[
              { label: "О центре", href: "/#center" },
              { label: "Услуги", href: "/#directions", dropdown: true },
              { label: "Достижения", href: "/#achievements" },
              { label: "Контакты", href: "/#location" }
            ].map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
              >
                <a
                  href={item.href}
                  className="nav-link-desktop"
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      width="8" height="6" viewBox="0 0 8 6" fill="none"
                      style={{ transform: dropdownOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s", opacity: 0.6 }}
                    >
                      <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
                
                {item.dropdown && (
                  <div className={`services-dropdown ${dropdownOpen ? "open" : ""}`}>
                    <div className="services-dropdown-inner">
                      {SERVICES.map((service) => (
                        <a key={service.label} href={service.href} className="dropdown-item">
                          {service.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button — hex cut corners */}
            <a
              href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
            <button
              className="cta-btn-desktop"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#001a10",
                textTransform: "uppercase",
                padding: "10px 28px",
                background: "linear-gradient(135deg, #6FE6C1 0%, #09B983 60%, #00a06e 100%)",
                border: "none",
                boxShadow: "0 0 24px rgba(0,238,163,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
                clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Записаться
            </button>
            </a>
          </nav>
        </div>

        {/* Bottom glow line */}
        <div style={{
          position: "absolute", bottom: 0, left: "10%", right: "10%", height: "1px",
          background: "linear-gradient(90deg, transparent, #6FE6C1 30%, #09B983 50%, #6FE6C1 70%, transparent)",
          opacity: 0.45,
          pointerEvents: "none",
        }} />
      </header>

      {/* Mobile fullscreen menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: "rgba(0,20,13,0.98)" }}
        >
          {[
            { label: "Главная", href: "/#hero" },
            { label: "О центре", href: "/#center" },
            { label: "Услуги", href: "/#directions", isServices: true },
            { label: "Запись", href: "https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0" },
            { label: "Контакты", href: "/#location" }
          ].map((item) => (
            <div key={item.label} style={{ width: "100%", textAlign: "center" }}>
              {item.isServices ? (
                <>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{
                      fontFamily: "'Furore', 'Exo 2', sans-serif",
                      fontSize: "24px",
                      fontWeight: 400,
                      letterSpacing: "0.1em",
                      color: "white",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      background: "none",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      width: "100%",
                      padding: 0,
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                    <svg
                      width="12" height="8" viewBox="0 0 12 8" fill="none"
                      style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s", opacity: 0.7 }}
                    >
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  
                  {mobileServicesOpen && (
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      marginTop: "20px",
                      marginBottom: "10px",
                      background: "rgba(111,230,193,0.04)",
                      padding: "16px 0",
                      borderRadius: "8px",
                    }}>
                      {SERVICES.map((service) => (
                        <a
                          key={service.label}
                          href={service.href}
                          onClick={() => setMenuOpen(false)}
                          style={{
                            fontFamily: "'Exo 2', sans-serif",
                            fontSize: "13px",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            color: "rgba(111,230,193,0.8)",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            display: "block",
                          }}
                        >
                          {service.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Furore', 'Exo 2', sans-serif",
                    fontSize: "24px",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    color: "white",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    background: "none",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}