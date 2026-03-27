import { useState } from "react";
import { Container } from "./ui/Container";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import DiyarPhoto from "../assets/team/Diyar.png";
import NatalyaPhoto from "../assets/team/Natalya.png";
import MichailPhoto from "../assets/team/Michail.png";
import AlbinaPhoto from "../assets/team/Albina.png";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

const specialists = [
  {
    id: 1,
    firstName: "Альбина",
    lastName: "Ахметова",
    ghostName: "АХМЕТОВА",
    role: "логопед-дефектолог\nнейропсихолог\nАВА-специалист",
    tag: "Педагогика",
    photo: AlbinaPhoto.src,
  },
  {
    id: 2,
    firstName: "Диар",
    lastName: "Бегужинов",
    ghostName: "БЕГУЖИНОВ",
    role: "врач-остеопат\nкардиохирург\nруководитель и основатель",
    tag: "Остеопатия",
    photo: DiyarPhoto.src,
  },
  {
    id: 3,
    firstName: "Наталья",
    lastName: "Маратовна",
    ghostName: "НАТАЛЬЯ",
    role: "краниопостуролог\nостеопат",
    tag: "Реабилитация",
    photo: NatalyaPhoto.src,
  },
  {
    id: 4,
    firstName: "Михаил",
    lastName: "Чванов",
    ghostName: "ЧВАНОВ",
    role: "остеопат",
    tag: "Остеопатия",
    photo: MichailPhoto.src,
  },
];

function DesktopTagChip({ label }: { label: string }) {
  const cut = 7;
  return (
    <div
      style={{
        display: "inline-block",
        background: "#6FE6C1",
        clipPath: `polygon(${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%, 0 ${cut}px)`,
        padding: "1px",
      }}
    >
      <div
        style={{
          background: "#001a0f",
          clipPath: `polygon(${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%, 0 ${cut}px)`,
          padding: "4px 10px",
          display: "inline-block",
        }}
      >
        <span
          style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.22em",
            color: "#6FE6C1",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/* ── Desktop specialist card ─────────────────────────────────────────── */
function DesktopSpecialistCard({
  specialist,
  index,
}: {
  specialist: (typeof specialists)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo container */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#6FE6C1",
          clipPath: CLIP(22),
          padding: "1.5px",
          filter: hovered
            ? "drop-shadow(0 0 30px rgba(111,230,193,0.45)) drop-shadow(0 16px 48px rgba(0,0,0,0.9))"
            : "drop-shadow(0 0 10px rgba(111,230,193,0.12)) drop-shadow(0 8px 28px rgba(0,0,0,0.7))",
          transition: "filter 0.4s ease",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            clipPath: CLIP(21),
            aspectRatio: "3/4",
          }}
        >
          {/* Ghost name behind photo */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 0,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 400,
                color: "transparent",
                WebkitTextStroke: hovered
                  ? "1px rgba(111,230,193,0.25)"
                  : "1px rgba(111,230,193,0.12)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                lineHeight: 1.1,
                textAlign: "center",
                wordBreak: "break-word",
                padding: "0 8px",
                transition: "all 0.4s ease",
              }}
            >
              {specialist.ghostName}
            </span>
          </div>

          {/* Photo */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <ImageWithFallback
              src={specialist.photo}
              alt={`${specialist.firstName} ${specialist.lastName}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
            {/* Dark-to-transparent gradient overlay at bottom */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,18,10,0.85) 0%, rgba(0,18,10,0.2) 40%, transparent 70%)",
              }}
            />
          </div>

          {/* Index number bottom-left */}
          <div
            style={{
              position: "absolute",
              bottom: "14px",
              left: "16px",
              zIndex: 3,
              fontFamily: "'Furore', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "rgba(111,230,193,0.5)",
            }}
          >
            0{index + 1}
          </div>

          {/* Tag chip bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: "14px",
              right: "14px",
              zIndex: 3,
            }}
          >
            <DesktopTagChip label={specialist.tag} />
          </div>
        </div>
      </div>

      {/* Name + role card below */}
      <div
        style={{
          marginTop: "12px",
          background: "#6FE6C1",
          clipPath: CLIP(14),
          padding: "1.5px",
        }}
      >
        <div
          style={{
            background: hovered
              ? "linear-gradient(135deg, #003820 0%, #001810 100%)"
              : "linear-gradient(135deg, #002416 0%, #000e08 100%)",
            clipPath: CLIP(13),
            padding: "16px 18px 18px",
            transition: "background 0.4s ease",
          }}
        >
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(111,230,193,0.5) 0%, rgba(111,230,193,0.1) 100%)",
              marginBottom: "12px",
            }}
          />
          <p
            style={{
              fontFamily: "'Furore', sans-serif",
              fontSize: "clamp(12px, 1.1vw, 15px)",
              fontWeight: 400,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              lineHeight: 1.3,
              margin: 0,
              marginBottom: "8px",
            }}
          >
            {specialist.firstName} {specialist.lastName}
          </p>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(111,230,193,0.6)",
              lineHeight: 1.6,
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {specialist.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileSpecialistCard({
  specialist,
  index,
}: {
  specialist: (typeof specialists)[0];
  index: number;
}) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginBottom: "32px",
        maxWidth: "300px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {/* Photo container */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#6FE6C1",
          clipPath: CLIP(16),
          padding: "1.5px",
          filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.6))",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            clipPath: CLIP(15),
            aspectRatio: "1",
            background: "#001a10",
          }}
        >
          {/* Ghost name behind photo */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 0,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "clamp(48px, 12vw, 64px)",
                fontWeight: 400,
                color: "transparent",
                WebkitTextStroke: "1px rgba(111,230,193,0.15)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                lineHeight: 1.1,
                textAlign: "center",
                wordBreak: "break-word",
                padding: "0 8px",
              }}
            >
              {specialist.ghostName}
            </span>
          </div>

          {/* Photo */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
            }}
          >
            <ImageWithFallback
              src={specialist.photo}
              alt={`${specialist.firstName} ${specialist.lastName}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
            {/* Dark-to-transparent gradient overlay at bottom */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,18,10,0.95) 0%, rgba(0,18,10,0.3) 45%, transparent 75%)",
              }}
            />
          </div>

          {/* Index number bottom-left */}
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              left: "14px",
              zIndex: 3,
              fontFamily: "'Furore', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.18em",
              color: "rgba(111,230,193,0.5)",
            }}
          >
            0{index + 1}
          </div>

          {/* Tag chip bottom-right */}
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              zIndex: 3,
            }}
          >
            <DesktopTagChip label={specialist.tag} />
          </div>
        </div>
      </div>

      {/* Name + role card below */}
      <div
        style={{
          marginTop: "10px",
          background: "linear-gradient(135deg, #6FE6C1 0%, #09B983 100%)",
          clipPath: CLIP(14),
          padding: "1px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(160deg, #002e1c 0%, #000e08 100%)",
            clipPath: CLIP(13),
            padding: "16px 20px",
            position: "relative",
          }}
        >
          {/* Top highlight glow inside the card */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "40%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(111,230,193,0.6), transparent)",
            }}
          />

          <h3
            style={{
              fontFamily: "'Furore', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              lineHeight: 1.3,
              margin: 0,
              marginBottom: "8px",
            }}
          >
            {specialist.firstName} <br />{" "}
            <span style={{ color: "#6FE6C1" }}>{specialist.lastName}</span>
          </h3>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.5,
              margin: 0,
              whiteSpace: "pre-line",
            }}
          >
            {specialist.role}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ────────────────────────────────────────────────────── */
export function SpecialistsSection() {
  return (
    <section
      style={{ backgroundColor: "#001d14", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle radial glow top-center */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(111,230,193,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── MOBILE ── */}
      <div className="md:hidden py-10">
        <Container>
          {/* Section heading */}
          <div style={{ marginBottom: "32px", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.25em",
                color: "rgba(111,230,193,0.5)",
                textTransform: "uppercase",
                margin: "0 0 10px",
              }}
            >
              команда
            </p>
            <h2
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "42px",
                fontWeight: 400,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              Специа&shy;листы
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {specialists.map((s, i) => (
              <MobileSpecialistCard key={s.id} specialist={s} index={i} />
            ))}
          </div>

          {/* CTA Button */}
          <div style={{ marginTop: "36px" }}>
            <div
              style={{
                background: "#6FE6C1",
                clipPath: CLIP(14),
                padding: "1.5px",
              }}
            >
              <a
                href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                title="Записаться на консультацию через WhatsApp"
                style={{ display: "block", textDecoration: "none" }}
              >
                <button
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #002416 0%, #000e08 100%)",
                    clipPath: CLIP(13),
                    border: "none",
                    padding: "18px 24px",
                    cursor: "pointer",
                    fontFamily: "'Furore', sans-serif",
                    fontSize: "13px",
                    letterSpacing: "0.14em",
                    color: "#6FE6C1",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  Получить консультацию
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                    <path
                      d="M0 4H18M14 1L18 4L14 7"
                      stroke="#6FE6C1"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <div
            style={{
              marginTop: "40px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(111,230,193,0.18) 40%, rgba(111,230,193,0.18) 60%, transparent)",
            }}
          />
        </Container>
      </div>

      {/* ── DESKTOP ── */}
      <div
        className="hidden md:block relative" style={{ padding: "100px 0" }}
      >
        {/* Decorative background shapes (Solid Figures) */}
        {/* Massive slanted block */}
        <div style={{
          position: "absolute",
          top: "0", left: "-20%",
          width: "800px", height: "400px",
          background: "linear-gradient(90deg, rgba(111,230,193,0.03) 0%, transparent 100%)",
          transform: "skewY(-15deg)",
          borderTop: "1px solid rgba(111,230,193,0.1)",
          pointerEvents: "none",
        }} />
        {/* Solid Circle with inner gradient */}
        <div style={{
          position: "absolute",
          bottom: "10%", right: "-100px",
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, rgba(111,230,193,0.06) 0%, rgba(0,0,0,0) 80%)",
          pointerEvents: "none",
        }} />
        {/* Floating Accent Square */}
        <div style={{
          position: "absolute",
          top: "20%", right: "8%",
          width: "40px", height: "40px",
          background: "rgba(111,230,193,0.08)",
          border: "1px solid rgba(111,230,193,0.2)",
          transform: "rotate(15deg)",
          pointerEvents: "none",
        }} />

        <Container className="relative z-10">
          {/* Heading row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "52px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.28em",
                  color: "rgba(111,230,193,0.45)",
                  textTransform: "uppercase",
                  margin: "0 0 12px",
                }}
              >
                команда центра
              </p>
              <h2
                style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "clamp(52px, 5.5vw, 80px)",
                  fontWeight: 400,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  lineHeight: 0.92,
                  margin: 0,
                }}
              >
                Специалисты
              </h2>
            </div>

            {/* CTA desktop */}
            <div style={{ paddingBottom: "6px" }}>
              <div
                style={{
                  background: "#6FE6C1",
                  clipPath: CLIP(14),
                  padding: "1.5px",
                  display: "inline-block",
                }}
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Записаться на консультацию через WhatsApp"
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <button
                    className="site-btn"
                    style={{
                      background: "linear-gradient(135deg, #002416 0%, #000e08 100%)",
                      clipPath: CLIP(13),
                      border: "none",
                      padding: "16px 36px",
                      cursor: "pointer",
                      fontFamily: "'Furore', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.16em",
                      color: "#6FE6C1",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "14px",
                      transition: "background 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "linear-gradient(135deg, #003820 0%, #001810 100%)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "linear-gradient(135deg, #002416 0%, #000e08 100%)";
                    }}
                  >
                    Получить консультацию
                    <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                      <path
                        d="M0 4H20M16 1L20 4L16 7"
                        stroke="#6FE6C1"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "18px",
              alignItems: "start",
            }}
          >
            {specialists.map((s, i) => (
              <DesktopSpecialistCard key={s.id} specialist={s} index={i} />
            ))}
          </div>

          <div
            style={{
              marginTop: "64px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(111,230,193,0.18) 40%, rgba(111,230,193,0.18) 60%, transparent)",
            }}
          />
        </Container>
      </div>
    </section>
  );
}