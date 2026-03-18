import img12 from "@/assets/49568193b92b737447ab243e47536cc0a247e271.png?url";
import { img11 } from "@/imports/svg-tl91i";
import svgPaths from "@/imports/svg-5vmpngdvp6";
import { Container } from "./ui/Container";
import { useState } from "react";

/*
 * BookSection — Figma coordinates reference:
 *   Section start: page y=2814px (left=31.12px, top=2814px block)
 *   Card bg SVG: top=2941.44px → section-relative: 2941.44-2814=127.44px
 *   Book image group (center): left=73px, top=2864px → rel: 50px
 *   Text "Автор книги:": top=3163.02px → rel: 349.02px
 *   Subtitle: top=3220px → rel: 406px
 *   Section estimated end: ~3275 → rel: ~461px
 */
export function BookSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#001d14", marginBottom: "32px" }}>

      {/* ── MOBILE ── */}
      <div className="md:hidden">
        <Container className="relative">
          {/* Card background SVG — full container width */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "127.44px",
              width: "100%",
              height: "340.058px",
            }}
          >
            <div className="absolute inset-[-8.95%_-9.65%_-9.84%_-9.65%]">
              <svg
                className="block w-full h-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 395.075 403.97"
              >
                <g filter="url(#filter0_di_book)">
                  <path d={svgPaths.p7c94f00} fill="#006747" fillOpacity="0.84" shapeRendering="crispEdges" />
                  <path d={svgPaths.p11347880} shapeRendering="crispEdges" stroke="#6FE6C1" strokeWidth="2.28257" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="403.97" id="filter0_di_book" width="395.075" x="-4.76837e-07" y="-7.15256e-07">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="1.52171" />
                    <feGaussianBlur stdDeviation="14.8367" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.639216 0 0 0 0 0.470588 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_book" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_book" mode="normal" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="1.52171" />
                    <feGaussianBlur stdDeviation="13.9617" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.810246 0 0 0 0 0.559595 0 0 0 1 0" />
                    <feBlend in2="shape" mode="normal" result="effect2_innerShadow_book" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* Book image with mask at top=50px, left=73px */}
          <div
            style={{
              position: "absolute",
              left: "50px",
              top: "50px",
              width: "254.737px",
              height: "310.65px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ transform: "rotate(-17.82deg)" }}>
              <div
                style={{
                  width: "181.428px",
                  height: "267.985px",
                  maskImage: `url('${img11}')`,
                  maskSize: "331.163px 468.371px",
                  maskPosition: "-41.884px -50px",
                  maskRepeat: "no-repeat",
                  WebkitMaskImage: `url('${img11}')`,
                  WebkitMaskSize: "331.163px 468.371px",
                  WebkitMaskPosition: "-41.884px -50px",
                  WebkitMaskRepeat: "no-repeat",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  alt="Книга: Биотрансформация"
                  src={img12}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Gradient fade overlay — full width */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "317.21px",
              width: "100%",
              height: "253.953px",
              background: "linear-gradient(to bottom, rgba(0,0,0,0), #071d10)",
            }}
          />

          {/* Bottom border overlay — drawn on top of gradient with same SVG coords */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "127.44px",
              width: "100%",
              height: "340.058px",
              pointerEvents: "none",
              filter: "drop-shadow(0px 0px 18px rgba(111,230,193,0.9)) drop-shadow(0px 0px 8px rgba(111,230,193,1))",
            }}
          >
            <div className="absolute inset-[-8.95%_-9.65%_-9.84%_-9.65%]">
              <svg
                className="block w-full h-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 395.075 403.97"
              >
                {/* Bottom edge: bottom-right corner cut + full horizontal bottom line */}
                <path
                  d="M364.26 355.545L363.865 355.886L345.985 371.355L345.664 371.634H30.8144"
                  stroke="#6FE6C1"
                  strokeWidth="2.28257"
                />
              </svg>
            </div>
          </div>

          {/* "Автор книги: / Биотрансформация" at top=349.02px */}
          <div
            style={{
              position: "absolute",
              left: "calc(50% - 143.5px)",
              top: "349.02px",
              width: "313px",
              fontFamily: "'Furore', sans-serif",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "normal",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            <p style={{ marginBottom: 0 }}>Автор книги:</p>
            <p style={{ marginBottom: 0 }}>Биотрансформация</p>
          </div>

          {/* Subtitle at top=406px */}
          <p
            style={{
              position: "absolute",
              left: "calc(50% - 143.5px)",
              top: "406px",
              width: "286px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "17px",
              fontWeight: 400,
              lineHeight: "normal",
              color: "white",
              margin: 0,
            }}
          >
            История объединения остеопатии и кардиохирургии
          </p>

          {/* Spacer */}
          <div style={{ height: "510px" }} />
        </Container>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block py-24" style={{ position: "relative", overflow: "hidden" }}>

        {/* Ambient background glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(111,230,193,0.06) 0%, transparent 70%)",
        }} />

        {/* Decorative large watermark text */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Furore', 'Exo 2', sans-serif",
          fontSize: "180px", fontWeight: 400,
          color: "rgba(111,230,193,0.03)",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          letterSpacing: "0.08em",
          pointerEvents: "none",
          userSelect: "none",
        }}>БИОТРАНСФОРМАЦИЯ</div>

        <Container>
          <div className="flex items-center justify-center gap-20">

            {/* ── Book card ── */}
            <div className="flex-shrink-0" style={{ position: "relative" }}>
              {/* Outer glow */}
              <div style={{ filter: "drop-shadow(0 0 32px rgba(111,230,193,0.35)) drop-shadow(0 0 60px rgba(9,185,131,0.15))" }}>
                {/* Border layer */}
                <div style={{
                  position: "relative",
                  width: "300px",
                  background: "#6FE6C1",
                  clipPath: "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
                  padding: "2px",
                }}>
                  {/* Inner card */}
                  <div style={{
                    background: "linear-gradient(160deg, #0a2e1e 0%, #061a10 100%)",
                    clipPath: "polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 22px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "36px 24px",
                    overflow: "hidden",
                    position: "relative",
                    minHeight: "380px",
                  }}>
                    {/* Subtle grid lines */}
                    <div style={{
                      position: "absolute", inset: 0, pointerEvents: "none",
                      backgroundImage: "linear-gradient(rgba(111,230,193,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(111,230,193,0.04) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }} />

                    {/* Book image */}
                    <img
                      alt="Книга: Биотрансформация"
                      src={img12}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      style={{
                        transform: hovered
                          ? "rotate(-10deg) scale(1.10) translateY(-10px)"
                          : "rotate(-14deg) scale(1.05)",
                        transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        maxHeight: "290px",
                        width: "auto",
                        objectFit: "contain",
                        position: "relative",
                        zIndex: 1,
                        filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.7)) drop-shadow(0 0 16px rgba(111,230,193,0.15))",
                        cursor: "pointer",
                      }}
                    />

                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0" style={{ height: "80px", background: "linear-gradient(to bottom, transparent, #061a10)" }} />
                  </div>
                </div>
              </div>

              {/* Decorative corner accent — top left */}
              <svg style={{ position: "absolute", top: -12, left: -12, pointerEvents: "none" }} width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M40 2 L2 2 L2 40" stroke="#6FE6C1" strokeWidth="2" opacity="0.5" />
              </svg>
              {/* Decorative corner accent — bottom right */}
              <svg style={{ position: "absolute", bottom: -12, right: -12, pointerEvents: "none" }} width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M0 38 L38 38 L38 0" stroke="#6FE6C1" strokeWidth="2" opacity="0.5" />
              </svg>
            </div>

            {/* ── Text block ── */}
            <div style={{ flex: 1 }}>

              {/* Eyebrow */}
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px", fontWeight: 700,
                letterSpacing: "0.18em", color: "#6FE6C1",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}>Автор книги</p>

              {/* Title */}
              <h2 style={{
                fontFamily: "'Furore', 'Exo 2', sans-serif",
                fontSize: "52px", fontWeight: 400,
                color: "#fff", lineHeight: 1.0,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                marginBottom: "24px",
                textShadow: "0 0 40px rgba(111,230,193,0.12)",
              }}>
                Био<span style={{ color: "#6FE6C1" }}>транс</span>формация
              </h2>

              {/* Divider */}
              <div style={{
                width: "100%", height: "1px",
                background: "linear-gradient(90deg, #6FE6C1 0%, rgba(111,230,193,0.15) 50%, transparent 100%)",
                marginBottom: "24px",
              }} />

              {/* Subtitle */}
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "16px", fontWeight: 400,
                lineHeight: 1.75, color: "rgba(255,255,255,0.75)",
                maxWidth: "420px",
                marginBottom: "32px",
              }}>
                История объединения остеопатии и кардиохирургии — уникальный взгляд на восстановление организма через призму двух дисциплин.
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
                {["Остеопатия", "Кардиохирургия", "Биомедицина", "Инновации"].map((tag) => (
                  <div key={tag} style={{
                    background: "#6FE6C1",
                    clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                    padding: "1px",
                  }}>
                    <div style={{
                      background: "#061a10",
                      clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)",
                      padding: "5px 16px",
                    }}>
                      <span style={{
                        fontFamily: "'Exo 2', sans-serif",
                        fontSize: "11px", fontWeight: 700,
                        letterSpacing: "0.14em", color: "#6FE6C1",
                        textTransform: "uppercase",
                      }}>{tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}