import { useState } from "react";
import { Container } from "./ui/Container";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgBiotechnopark from "@/assets/8a71c4f58553558454fdc5826859b024b2b2fdc9.png?url";
import imgCVT from "@/assets/5ef5c91170efa33c2a7979f472f33b4418658c55.png?url";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

const partners = [
  {
    id: 1,
    logo: imgCVT,
    name: "Центр внедрения технологий",
    shortName: "ЦВТ",
    description: "Инновационные решения\nв области технологий",
    logoSize: { width: 88, height: 88 },
  },
  {
    id: 2,
    logo: imgBiotechnopark,
    name: "Биотехнопарк\nНовосибирской области",
    shortName: "БИОТЕХНОПАРК",
    description: "Центр инновационных\nбиотехнологий",
    logoSize: { width: 220, height: 62 },
  },
];

/* ── Partner card ─────────────────────────────────────────────────────── */
function PartnerCard({
  partner,
  index,
  mobile = false,
}: {
  partner: (typeof partners)[0];
  index: number;
  mobile?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const cut = mobile ? 16 : 20;

  return (
    <div
      style={{
        position: "relative",
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hovered && !mobile ? "translateY(-8px)" : "translateY(0)",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer border layer */}
      <div
        style={{
          background: hovered
            ? "linear-gradient(135deg, #6FE6C1 0%, #3ab890 100%)"
            : "linear-gradient(135deg, rgba(111,230,193,0.55) 0%, rgba(111,230,193,0.2) 100%)",
          clipPath: CLIP(cut),
          padding: "1.5px",
          filter: hovered
            ? "drop-shadow(0 0 28px rgba(111,230,193,0.4)) drop-shadow(0 12px 36px rgba(0,0,0,0.8))"
            : "drop-shadow(0 0 8px rgba(111,230,193,0.1)) drop-shadow(0 6px 20px rgba(0,0,0,0.6))",
          transition: "all 0.4s ease",
        }}
      >
        {/* Inner card */}
        <div
          style={{
            background: hovered
              ? "linear-gradient(135deg, #002e1c 0%, #001610 100%)"
              : "linear-gradient(135deg, #001f12 0%, #000e08 100%)",
            clipPath: CLIP(cut - 1),
            padding: mobile ? "28px 24px" : "36px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: mobile ? "20px" : "28px",
            position: "relative",
            overflow: "hidden",
            minHeight: mobile ? "180px" : "240px",
            transition: "background 0.4s ease",
          }}
        >
          {/* Ghost number */}
          <div
            style={{
              position: "absolute",
              top: "-10px",
              right: "16px",
              fontFamily: "'Furore', sans-serif",
              fontSize: mobile ? "72px" : "100px",
              color: "transparent",
              WebkitTextStroke: hovered
                ? "1px rgba(111,230,193,0.13)"
                : "1px rgba(111,230,193,0.06)",
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
              transition: "all 0.4s ease",
            }}
          >
            0{index + 1}
          </div>

          {/* Corner accent lines */}
          <div
            style={{
              position: "absolute",
              top: mobile ? "10px" : "14px",
              left: mobile ? "10px" : "14px",
              width: "20px",
              height: "20px",
              borderTop: "1.5px solid rgba(111,230,193,0.35)",
              borderLeft: "1.5px solid rgba(111,230,193,0.35)",
              opacity: hovered ? 1 : 0.5,
              transition: "opacity 0.4s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: mobile ? "10px" : "14px",
              right: mobile ? "10px" : "14px",
              width: "20px",
              height: "20px",
              borderBottom: "1.5px solid rgba(111,230,193,0.35)",
              borderRight: "1.5px solid rgba(111,230,193,0.35)",
              opacity: hovered ? 1 : 0.5,
              transition: "opacity 0.4s ease",
            }}
          />

          {/* Logo */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              filter: hovered ? "brightness(1.1) saturate(1.1)" : "brightness(0.9) saturate(0.9)",
              transition: "filter 0.4s ease",
            }}
          >
            <ImageWithFallback
              src={partner.logo}
              alt={partner.name}
              style={{
                width: mobile
                  ? `${partner.logoSize.width * 0.85}px`
                  : `${partner.logoSize.width}px`,
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* Divider */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: hovered
                ? "linear-gradient(90deg, transparent, rgba(111,230,193,0.5), transparent)"
                : "linear-gradient(90deg, transparent, rgba(111,230,193,0.18), transparent)",
              transition: "background 0.4s ease",
              zIndex: 1,
            }}
          />

          {/* Partner name */}
          <div style={{ textAlign: "center", zIndex: 1 }}>
            <p
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: mobile ? "12px" : "13px",
                fontWeight: 400,
                color: hovered ? "#ffffff" : "rgba(255,255,255,0.75)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                lineHeight: 1.4,
                margin: 0,
                marginBottom: "6px",
                whiteSpace: "pre-line",
                transition: "color 0.4s ease",
              }}
            >
              {partner.name}
            </p>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                color: "rgba(111,230,193,0.5)",
                lineHeight: 1.5,
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {partner.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main section ─────────────────────────────────────────────────────── */
export function PartnersSection() {
  return (
    <section
      style={{ backgroundColor: "#001d14", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse at center, rgba(111,230,193,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── MOBILE ── */}
      <div className="md:hidden" style={{ padding: "48px 0 52px" }}>
        <Container>
          {/* Heading */}
          <div style={{ marginBottom: "32px" }}>
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
              сотрудничество
            </p>
            <h2
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "36px",
                fontWeight: 400,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                lineHeight: 0.95,
                margin: 0,
              }}
            >
              Наши<br />партнёры
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {partners.map((p, i) => (
              <PartnerCard key={p.id} partner={p} index={i} mobile />
            ))}
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
        className="hidden md:block"
        style={{ position: "relative", padding: "90px 0 100px" }}
      >
        <Container style={{ position: "relative", zIndex: 1 }}>
          {/* Heading + subtitle row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "60px",
              marginBottom: "60px",
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
                сотрудничество
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
                Наши партнёры
              </h2>
            </div>

            {/* Subtitle text */}
            <div style={{ paddingBottom: "10px", maxWidth: "340px" }}>
              <div
                style={{
                  width: "32px",
                  height: "1.5px",
                  background: "rgba(111,230,193,0.4)",
                  marginBottom: "12px",
                }}
              />
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Мы работаем совместно с ведущими научными и инновационными организациями, разделяющими наши ценности.
              </p>
            </div>
          </div>

          {/* Cards row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              maxWidth: "860px",
            }}
          >
            {partners.map((p, i) => (
              <PartnerCard key={p.id} partner={p} index={i} />
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
