import { useState } from "react";
import { Container } from "./ui/Container";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import DiyarPhoto from "../assets/team/Diyar.png";
import NatalyaPhoto from "../assets/team/Natalya.png";
import MichailPhoto from "../assets/team/Michail.png";
import AlbinaPhoto from "../assets/team/Albina.png";

const CYAN = "#6FE6C1";

// Default clip path for bento cards
const BENTO_CLIP = "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)";

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
    tag: "Основатель",
    photo: DiyarPhoto.src,
  },
  {
    id: 3,
    firstName: "Наталья",
    lastName: "Маратовна",
    ghostName: "МАРАТОВНА",
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
  {
    id: 5,
    firstName: "Рано",
    lastName: "Шаукетовна",
    ghostName: "РАНО",
    role: "массажист",
    tag: "Массаж",
    photo: "", // Placeholder will be handled by ImageWithFallback
  },
];

function TagBadge({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "inline-block",
        background: `${CYAN}40`,
        clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
        padding: "1px",
      }}
    >
      <div
        style={{
          background: "rgba(0,20,12,0.85)",
          clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
          padding: "6px 14px",
          backdropFilter: "blur(4px)",
        }}
      >
        <span
          style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: CYAN,
            textTransform: "uppercase",
            textShadow: `0 0 10px ${CYAN}40`,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

/* ── Bento Card Component ─────────────────────────────────────────── */
function BentoCard({
  specialist,
  index,
  large = false,
}: {
  specialist: (typeof specialists)[0];
  index: number;
  large?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative group w-full ${large ? 'min-h-[340px] lg:min-h-full lg:h-full' : 'min-h-[260px] md:min-h-[300px] lg:min-h-[320px]'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer Border wrapper with clip-path */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered ? CYAN : `${CYAN}25`,
          clipPath: BENTO_CLIP,
          padding: "1.5px",
          transition: "all 0.4s ease",
          boxShadow: hovered ? `0 0 25px ${CYAN}30` : "none",
        }}
      >
        {/* Inner Background wrapper */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            background: "#00120a",
            clipPath: BENTO_CLIP,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Photo */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
            }}
          >
            <ImageWithFallback
              src={specialist.photo}
              alt={`${specialist.firstName} ${specialist.lastName}`}
              className={specialist.id === 2 ? "object-[center_12%] md:object-top" : "object-top"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            />
          </div>

          {/* Large Vertical Ghost Text */}
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontFamily: "'Furore', sans-serif",
                color: "transparent",
                WebkitTextStroke: hovered
                  ? `1px ${CYAN}30`
                  : `1px ${CYAN}15`,
                textTransform: "uppercase",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
                transition: "all 0.5s ease",
              }}
              className={`${large ? 'text-[42px] lg:text-[64px]' : 'text-[28px] lg:text-[42px]'}`}
            >
              {specialist.ghostName}
            </span>
          </div>

          {/* Gradient Overlay for Text Readability */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: hovered
              ? "linear-gradient(to top, rgba(0,24,16,0.95) 0%, rgba(0,24,16,0.3) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(0,18,10,0.95) 0%, rgba(0,18,10,0.4) 45%, transparent 100%)",
              zIndex: 3,
              transition: "background 0.5s ease",
            }}
          />

          {/* Content Layer */}
          <div
            className={`relative z-10 flex flex-col justify-between h-full w-full ${large ? 'p-4 md:p-6 lg:p-8' : 'p-3 md:p-4 lg:p-6'}`}
          >
            {/* Top Right: Tag */}
            <div className="flex justify-end items-start w-full">
              <div className={`${large ? 'block' : 'hidden md:block'} origin-top-right transform scale-[0.85] lg:scale-100 ${!large ? "lg:-mt-3 lg:-mr-3" : ""}`}>
                <TagBadge label={specialist.tag} />
              </div>
            </div>

            {/* Bottom: Name & Role */}
            <div className="mt-auto transform transition-transform duration-500" style={{ transform: hovered ? "translateY(0)" : "translateY(4px)" }}>
              <div className="mb-2 lg:mb-3 w-8 h-1" style={{ background: `linear-gradient(90deg, ${CYAN}, transparent)` }} />
              <h3
                style={{
                  fontFamily: "'Furore', sans-serif",
                  fontWeight: 400,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                  textShadow: "0 4px 12px rgba(0,0,0,0.5)",
                }}
                className={`mb-1 lg:mb-2 ${large ? 'text-[24px] md:text-[24px] lg:text-[32px]' : 'text-[17px] md:text-[18px] lg:text-[22px]'}`}
              >
                {specialist.firstName} <br />
                <span style={{ color: CYAN }}>{specialist.lastName}</span>
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.75)",
                  margin: 0,
                  whiteSpace: "pre-line",
                  opacity: hovered ? 1 : 0.85,
                  transition: "opacity 0.4s ease",
                }}
                className={`leading-tight lg:leading-relaxed ${large ? 'text-[13px] lg:text-[15px]' : 'text-[11px] lg:text-[13px]'}`}
              >
                {specialist.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ────────────────────────────────────────────────────── */
export function SpecialistsSection() {
  const founder = specialists.find(s => s.id === 2)!;
  const team = specialists.filter(s => s.id !== 2);

  return (
    <section className="relative overflow-hidden py-14 md:py-24" style={{ backgroundColor: "#001d14" }}>
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(circle, ${CYAN} 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-[-10%] w-[60%] h-[50%] bg-radial-gradient from-[#6FE6C108] to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-radial-gradient from-[#003B2615] to-transparent blur-[100px]" />
        <div style={{ position: "absolute", top: "10%", right: "8%", width: "40px", height: "40px", background: "rgba(111,230,193,0.08)", border: "1px solid rgba(111,230,193,0.2)", transform: "rotate(15deg)" }} />
      </div>

      <Container className="relative z-10 w-full max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="text-center md:text-left">
            <p
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.25em",
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
                fontSize: "clamp(42px, 5vw, 76px)",
                fontWeight: 400,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              Специалисты
            </h2>
          </div>

          <div className="hidden md:inline-block" style={{ background: "#6FE6C1", clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)", padding: "1.5px", alignSelf: "flex-start" }}>
            <a
              href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textDecoration: "none" }}
            >
              <button
                className="site-btn relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #002416 0%, #000e08 100%)",
                  clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                  border: "none", padding: "18px 36px", cursor: "pointer",
                  fontFamily: "'Furore', sans-serif", fontSize: "12px", letterSpacing: "0.16em",
                  color: "#6FE6C1", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "14px",
                  transition: "color 0.3s ease",
                }}
              >
                {/* Glow sweep */}
                <div className="absolute inset-0 bg-[#6FE6C1] -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                
                <span className="relative z-10 group-hover:text-[#00120a]">Получить консультацию</span>
                <svg width="22" height="8" viewBox="0 0 22 8" fill="none" className="relative z-10">
                  <path d="M0 4H20M16 1L20 4L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </a>
          </div>
        </div>

        {/* ── Bento Grid ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-5 lg:gap-6 min-h-[400px] lg:h-[700px]">
          
          {/* Left Column (Founder, Large) */}
          <div className="lg:col-span-5 h-auto lg:h-full">
            <BentoCard specialist={founder} index={founder.id - 1} large={true} />
          </div>

          {/* Right Column (2x2 Grid for Team) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-5 lg:gap-6 h-full">
            {team.map((s) => (
              <BentoCard key={s.id} specialist={s} index={s.id - 1} large={false} />
            ))}
          </div>

        </div>

        {/* Mobile CTA Button */}
        <div className="mt-10 md:hidden flex justify-center">
          <div style={{ background: "#6FE6C1", clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)", padding: "1.5px" }}>
            <a
              href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", textDecoration: "none" }}
            >
              <button
                className="site-btn relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #002416 0%, #000e08 100%)",
                  clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                  border: "none", padding: "18px 36px", cursor: "pointer",
                  fontFamily: "'Furore', sans-serif", fontSize: "12px", letterSpacing: "0.16em",
                  color: "#6FE6C1", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "14px",
                }}
              >
                <span className="relative z-10">Получить консультацию</span>
                <svg width="22" height="8" viewBox="0 0 22 8" fill="none" className="relative z-10">
                  <path d="M0 4H20M16 1L20 4L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </a>
          </div>
        </div>

      </Container>
    </section>
  );
}