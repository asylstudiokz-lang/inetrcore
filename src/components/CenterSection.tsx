import imgLayer2112 from "@/assets/715843f66d27252ba7fde56ad138a1d24895b5be.png?url";
import imgDesktop from "@/assets/d2d985305618bae330c5b0d7ee4148ffb2e2445e.png?url";
import { imgLayer2111 } from "@/imports/svg-tl91i";
import svgPaths from "@/imports/svg-5vmpngdvp6";
import { useState } from "react";
import { Container } from "./ui/Container";

/* Card polygon clip shapes */
const CARD_OUTER_CLIP = "polygon(17.88px 0, 100% 0, 100% calc(100% - 17.88px), calc(100% - 17.88px) 100%, 0 100%, 0 17.88px)";
const CARD_INNER_CLIP = "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)";

/* Card background SVG (Figma BackgroundImage1: 444.651px tall) */
function CardBackgroundSVG() {
  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        top: "98px",
        width: "331.163px",
        height: "444.651px",
      }}
    >
      <div className="absolute inset-[-6.84%_-9.65%_-7.53%_-9.65%]">
        <svg
          className="block w-full h-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 395.075 508.563"
        >
          <g filter="url(#filter0_di_centerbg)">
            <path d={svgPaths.pd4d89f8} fill="#006747" fillOpacity="0.84" shapeRendering="crispEdges" />
            <path d={svgPaths.p9853800} shapeRendering="crispEdges" stroke="#6FE6C1" strokeWidth="2.28257" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="508.563"
              id="filter0_di_centerbg"
              width="395.075"
              x="-4.76837e-07"
              y="-7.15256e-07"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.52171" />
              <feGaussianBlur stdDeviation="14.8367" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.639216 0 0 0 0 0.470588 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_centerbg" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_centerbg" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.52171" />
              <feGaussianBlur stdDeviation="13.9617" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feBlend in2="shape" mode="normal" result="effect2_innerShadow_centerbg" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function CenterSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      id="center"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#001d14" }}
    >
      {/* ── MOBILE ── */}
      <div className="md:hidden py-10">
        <Container className="relative">
          {/* Section heading */}
          <div
            className="text-center uppercase w-full mb-[32px]"
            style={{
              fontFamily: "'Furore', 'Exo 2', sans-serif",
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            <p style={{ margin: 0, fontSize: "34px", color: "#ffffff", letterSpacing: "1px" }}>
              Международный
            </p>
            <p style={{ margin: 0, fontSize: "22px", color: "#6fe6c1", letterSpacing: "0.5px" }}>
              оздоровительный центр
            </p>
          </div>

          {/* Section description */}
          <p
            className="text-center text-white w-full"
            style={{
              margin: "10px 0 0 0",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: "1.6",
            }}
          >
            Это многопрофильный оздоровительный центр, объединяющий передовые технологии.
          </p>

          {/* Person card — photo overflows top, border SVG overlay */}
          <div className="relative mb-6" style={{ height: "550px", overflow: "hidden" }}>
            {/* ── Green fill — only inside the border frame (from top: 130px) ── */}
            <div
              style={{
                position: "absolute",
                top: "130px",
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,103,71,0.84)",
                clipPath: "polygon(0% 3.19%, 5.44% 0%, 100% 0%, 100% 96.81%, 94.26% 100%, 0% 100%)",
                zIndex: 0,
              }}
            />

            {/* ── SVG border: TOP segment BEHIND photo ── */}
            <svg
              style={{
                position: "absolute",
                top: "130px",
                left: 0,
                width: "100%",
                height: "calc(100% - 130px)",
                pointerEvents: "none",
                zIndex: 0,
                filter: "drop-shadow(0 0 8px rgba(111,230,193,0.9))",
                overflow: "visible",
              }}
              viewBox="0 0 331 565"
              preserveAspectRatio="none"
              fill="none"
            >
              <polyline
                points="1,18 18,1 330,1"
                stroke="#6FE6C1"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* ── Photo ── */}
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: 0,
                right: 0,
                height: "546px",
                zIndex: 1,
              }}
            >
              <img
                alt="Бегужинов Дияр Маратович"
                src={imgLayer2112}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "32% top",
                  display: "block",
                }}
              />
            </div>

            {/* Gradient: fades photo bottom into dark */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0, right: 0,
                height: "280px",
                background: "linear-gradient(to bottom, rgba(0,29,20,0) 0%, rgba(0,29,20,0.85) 45%, rgba(0,29,20,0.97) 100%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            {/* Name — overlaid on photo */}
            <div
              style={{
                position: "absolute",
                bottom: "158px",
                left: 0, right: 0,
                textAlign: "center",
                color: "#fff",
                fontFamily: "'Furore', 'Exo 2', sans-serif",
                fontSize: "29px",
                fontWeight: 400,
                textTransform: "uppercase",
                lineHeight: 1.05,
                padding: "0 8px",
                zIndex: 3,
              }}
            >
              <p style={{ margin: 0 }}>БЕГУЖИНОВ</p>
              <p style={{ margin: 0 }}>ДИЯР МАРАТОВИЧ</p>
            </div>

            {/* Green bar */}
            <div
              style={{
                position: "absolute",
                bottom: "116px",
                left: 0, right: 0,
                display: "flex",
                justifyContent: "center",
                zIndex: 3,
              }}
            >
              <div
                style={{
                  background: "#00cf8f",
                  boxShadow: "0 0 18px rgba(0,207,143,0.65)",
                  textAlign: "center",
                  padding: "5px 32px",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  letterSpacing: "6px",
                  color: "#fff",
                }}
              >
                основатель проекта
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                position: "absolute",
                bottom: 0,
                left: 0, right: 0,
                margin: 0,
                padding: "8px 16px 16px",
                color: "#fff",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: 1.65,
                textAlign: "center",
                zIndex: 3,
              }}
            >
              Изобретатель, инноватор, врач-кардиохирург, врач-остеопат. Врач и инноватор, который открыл новые горизонты в вопросах восстановления организма.
            </p>

            {/* ── SVG border: LEFT + RIGHT + BOTTOM in front of photo ── */}
            <svg
              style={{
                position: "absolute",
                top: "130px",
                left: 0,
                width: "100%",
                height: "calc(100% - 130px)",
                pointerEvents: "none",
                zIndex: 10,
                filter: "drop-shadow(0 0 8px rgba(111,230,193,0.9))",
                overflow: "visible",
              }}
              viewBox="0 0 331 565"
              preserveAspectRatio="none"
              fill="none"
            >
              <polyline points="330,1 330,547 312,564" stroke="#6FE6C1" strokeWidth="2" fill="none" />
              <polyline points="312,564 1,564" stroke="#6FE6C1" strokeWidth="2" fill="none" />
              <polyline points="1,564 1,18" stroke="#6FE6C1" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </Container>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative" style={{ padding: "100px 0" }}>
        {/* Decorative background shapes (Solid Figures) */}
        {/* Diamond */}
        <div style={{
          position: "absolute",
          top: "10%", left: "-100px",
          width: "350px", height: "350px",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          background: "linear-gradient(135deg, rgba(111,230,193,0.08) 0%, rgba(0,29,20,0) 100%)",
          pointerEvents: "none",
        }} />
        {/* Dot pattern box */}
        <div style={{
          position: "absolute",
          bottom: "15%", left: "5%",
          width: "160px", height: "160px",
          backgroundImage: "radial-gradient(circle, #6FE6C1 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
          opacity: 0.15,
          pointerEvents: "none",
        }} />
        {/* Solid blurry circle block */}
        <div style={{
          position: "absolute",
          bottom: "-100px", right: "-50px",
          width: "450px", height: "450px",
          borderRadius: "50%",
          background: "rgba(111,230,193,0.02)",
          border: "1px solid rgba(111,230,193,0.08)",
          boxShadow: "inset 0 0 60px rgba(111,230,193,0.03)",
          pointerEvents: "none",
        }} />
        {/* Floating cross */}
        <svg style={{ position: "absolute", top: "15%", right: "10%", opacity: 0.15, pointerEvents: "none" }} width="40" height="40" viewBox="0 0 40 40" fill="none">
           <path d="M19 0H21V40H19V0Z" fill="#6FE6C1" />
           <path d="M0 19H40V21H0V19Z" fill="#6FE6C1" />
        </svg>

        <Container>
          <div className="flex gap-16 items-center justify-center">

            {/* Person card — left */}
            <div
              className="flex-shrink-0"
              style={{
                width: "340px",
                height: "480px",
                position: "relative",
                background: "#001d14",
                clipPath: "polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)",
                overflow: "hidden",
                transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: hovered ? "translateY(-10px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Photo — shifted down to create space below top border */}
              <img
                alt="Бегужинов Дияр Маратович"
                src={imgLayer2112}
                style={{
                  position: "absolute",
                  top: "24px",
                  left: 0,
                  width: "100%",
                  height: "calc(100% - 24px)",
                  objectFit: "cover",
                  objectPosition: "32% top",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: hovered ? "scale(1.05)" : "scale(1)",
                }}
              />

              {/* Bottom gradient */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: "100px",
                background: "linear-gradient(to bottom, transparent 0%, rgba(0,15,10,0.80) 100%)",
                pointerEvents: "none",
              }} />

              {/* Number — bottom left */}
              <div style={{
                position: "absolute",
                bottom: "18px",
                left: "20px",
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "rgba(111,230,193,0.55)",
              }}>01</div>

              {/* Badge — bottom right */}
              <div style={{
                position: "absolute",
                bottom: "14px",
                right: "16px",
                background: hovered ? "#6FE6C1" : "rgba(111,230,193,0.35)",
                clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                padding: "1px",
                transition: "background 0.4s ease",
              }}>
                <div style={{
                  background: hovered ? "#0e4a2e" : "rgba(0,18,12,0.82)",
                  clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)",
                  padding: "6px 16px",
                }}>
                  <span style={{
                    fontFamily: "'Furore', 'Exo 2', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    color: "#6FE6C1",
                    textTransform: "uppercase",
                    display: "block",
                  }}>ОСНОВАТЕЛЬ</span>
                </div>
              </div>

              {/* SVG border overlay */}
              <svg
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: "100%", height: "100%",
                  pointerEvents: "none",
                  filter: hovered 
                    ? "drop-shadow(0 0 15px rgba(111,230,193,0.9)) drop-shadow(0 0 30px rgba(111,230,193,0.4))"
                    : "drop-shadow(0 0 6px rgba(111,230,193,0.7))",
                  overflow: "visible",
                  transition: "filter 0.4s ease",
                }}
                viewBox="0 0 340 480"
                preserveAspectRatio="none"
                fill="none"
              >
                <polyline
                  points="16,1 324,1 339,16 339,464 324,479 16,479 1,464 1,16 16,1"
                  stroke="#6FE6C1"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>

            {/* Right content */}
            <div className="flex-1 flex flex-col justify-center" style={{ paddingTop: "8px" }}>

              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                <div style={{ width: "36px", height: "1px", background: "#6FE6C1", opacity: 0.6 }} />
                <span style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  color: "#6FE6C1",
                  textTransform: "uppercase",
                }}>Основатель проекта</span>
              </div>

              {/* Name */}
              <p
                className="uppercase"
                style={{
                  fontFamily: "'Furore', 'Exo 2', sans-serif",
                  fontSize: "48px",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  color: "#fff",
                  letterSpacing: "0.04em",
                  marginBottom: "6px",
                  textShadow: "0 0 40px rgba(111,230,193,0.15)",
                }}
              >
                бегужинов<br />
                <span style={{ color: "#6FE6C1" }}>дияр</span> маратович
              </p>

              {/* Divider */}
              <div style={{
                width: "100%",
                height: "1px",
                background: "linear-gradient(90deg, #6FE6C1 0%, rgba(111,230,193,0.1) 60%, transparent 100%)",
                margin: "20px 0",
              }} />

              {/* Bio */}
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.82)",
                  maxWidth: "520px",
                  marginBottom: "28px",
                }}
              >
                Изобретатель, инноватор, врач-кардиохирург, врач-остеопат. Открыл новые горизоны в вопросах восстановления организма. Разработал инновационный остеопатический подход к лечению детей с РАС и ЗПРР.
              </p>

              {/* Credential tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
                {["Врач-кардиохирург", "Врач-остеопат", "Инноватор", "Изобретатель"].map((tag) => (
                  <div
                    key={tag}
                    style={{
                      display: "inline-block",
                      background: "rgba(111,230,193,0.45)",
                      clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                      padding: "1px",
                    }}
                  >
                    <div
                      style={{
                        background: "#061a10",
                        clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)",
                        padding: "5px 14px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Exo 2', sans-serif",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          color: "#6FE6C1",
                          textTransform: "uppercase",
                          display: "block",
                        }}
                      >
                        {tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div style={{ display: "flex", gap: "40px" }}>
                {[
                  { num: "20+", label: "лет опыта" },
                  { num: "5000+", label: "пациентов" },
                  { num: "12+", label: "изобретений" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <p style={{
                      fontFamily: "'Furore', 'Exo 2', sans-serif",
                      fontSize: "36px",
                      fontWeight: 400,
                      color: "#6FE6C1",
                      lineHeight: 1,
                      margin: 0,
                      textShadow: "0 0 20px rgba(111,230,193,0.4)",
                    }}>{num}</p>
                    <p style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                      margin: "4px 0 0 0",
                    }}>{label}</p>
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