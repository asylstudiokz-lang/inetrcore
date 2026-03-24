import { useState } from "react";
import { Container } from "./ui/Container";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

const MAP_URL =
  "https://yandex.ru/map-widget/v1/?ll=76.928500%2C43.256500&z=15&pt=76.928500,43.256500,pm2gnm&l=map&lang=ru_RU&theme=dark&from=mapframe&origin=jsapi_2_1_79&mode=search&text=%D0%B3.%20%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%2C%20%D1%83%D0%BB.%20%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%20133%2F2";

function InfoItem({
  icon,
  label,
  value,
  href,
  mobile = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  mobile?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: mobile ? "12px" : "16px",
      }}
    >
      <div
        style={{
          width: mobile ? "36px" : "40px",
          height: mobile ? "36px" : "40px",
          flexShrink: 0,
          background: "#6FE6C1",
          clipPath: CLIP(8),
          padding: "1px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #002416 0%, #000e08 100%)",
            clipPath: CLIP(7),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
      </div>
      <div>
        <p
          style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.22em",
            color: "rgba(111,230,193,0.45)",
            textTransform: "uppercase",
            margin: "0 0 4px",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: mobile ? "13px" : "14px",
            color: "#fff",
            lineHeight: 1.5,
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {href ? (
            <a
              href={href}
              style={{ color: "#fff", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6FE6C1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              {value}
            </a>
          ) : (
            value
          )}
        </p>
      </div>
    </div>
  );
}

/* ── Map frame with green clipped border ─────────────────────────────── */
function MapFrame({ height, cut = 22 }: { height: string; cut?: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(111,230,193,0.6) 0%, rgba(111,230,193,0.2) 100%)",
        clipPath: CLIP(cut),
        padding: "1.5px",
        filter:
          "drop-shadow(0 0 24px rgba(111,230,193,0.18)) drop-shadow(0 12px 40px rgba(0,0,0,0.8))",
        position: "relative",
      }}
    >
      {/* Corner accents */}
      {[
        { top: "10px", left: "10px", borderTop: true, borderLeft: true },
        { top: "10px", right: "10px", borderTop: true, borderRight: true },
        { bottom: "10px", left: "10px", borderBottom: true, borderLeft: true },
        { bottom: "10px", right: "10px", borderBottom: true, borderRight: true },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "18px",
            height: "18px",
            zIndex: 3,
            pointerEvents: "none",
            ...(pos.top ? { top: pos.top } : {}),
            ...(pos.bottom ? { bottom: pos.bottom } : {}),
            ...(pos.left ? { left: pos.left } : {}),
            ...(pos.right ? { right: pos.right } : {}),
            ...(pos.borderTop ? { borderTop: "1.5px solid rgba(111,230,193,0.6)" } : {}),
            ...(pos.borderBottom ? { borderBottom: "1.5px solid rgba(111,230,193,0.6)" } : {}),
            ...(pos.borderLeft ? { borderLeft: "1.5px solid rgba(111,230,193,0.6)" } : {}),
            ...(pos.borderRight ? { borderRight: "1.5px solid rgba(111,230,193,0.6)" } : {}),
          }}
        />
      ))}

      <div
        style={{
          clipPath: CLIP(cut - 1),
          overflow: "hidden",
          position: "relative",
          height,
        }}
      >
        {/* Loading placeholder */}
        {!loaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #001a10 0%, #000c07 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: "rgba(111,230,193,0.4)",
                textTransform: "uppercase",
              }}
            >
              загрузка карты...
            </span>
          </div>
        )}

        <iframe
          src={MAP_URL}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Яндекс Карта — ул. Гагарина 133/2"
          onLoad={() => setLoaded(true)}
          style={{
            display: "block",
            border: "none",
            filter: "saturate(0.7) brightness(0.85)",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />
      </div>
    </div>
  );
}

/* ── Main section ─────────────────────────────────────────────────────── */
export function LocationSection() {
  return (
    <section id="location" style={{ backgroundColor: "#001d14", position: "relative", overflow: "hidden" }}>
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(111,230,193,0.055) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── MOBILE ── */}
      <div className="md:hidden" style={{ padding: "48px 0 52px" }}>
        <Container>
          {/* Heading */}
          <div style={{ marginBottom: "28px" }}>
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
              как с нами связаться
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
              Контакты
            </h2>
          </div>

          {/* Info card */}
          <div
            style={{
              background: "#6FE6C1",
              clipPath: CLIP(16),
              padding: "1.5px",
              marginBottom: "16px",
              filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.6))",
            }}
          >
            <div
              style={{
                background: "linear-gradient(150deg, #002214 0%, #000e08 100%)",
                clipPath: CLIP(15),
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <InfoItem
                icon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1C5.24 1 3 3.24 3 6C3 9.75 8 15 8 15C8 15 13 9.75 13 6C13 3.24 10.76 1 8 1ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5Z"
                      fill="#6FE6C1"
                    />
                  </svg>
                }
                label="адрес"
                value={"г. Алматы, ул. Гагарина 133/2\nофис 100, этаж 18"}
                mobile
              />
              <div
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(111,230,193,0.3) 0%, transparent 80%)",
                }}
              />
              <InfoItem
                icon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 2C3 1.45 3.45 1 4 1H5.5C5.78 1 6 1.22 6 1.5V5C6 5.28 5.78 5.5 5.5 5.5H4.5C4.5 5.5 4.5 7.5 6 9C7.5 10.5 9.5 10.5 9.5 10.5V9.5C9.5 9.22 9.72 9 10 9H13.5C13.78 9 14 9.22 14 9.5V11.5C14 12.33 13.1 13 12 13C7 13 3 9 3 4C3 2.9 3 2 3 2Z"
                      fill="#6FE6C1"
                    />
                  </svg>
                }
                label="телефон"
                value={"+7 702 173 7192"}
                href="tel:+77021737192"
                mobile
              />
              <div
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(111,230,193,0.3) 0%, transparent 80%)",
                }}
              />
              <InfoItem
                icon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="#6FE6C1" strokeWidth="1.4"/>
                    <path d="M1 5L8 9.5L15 5" stroke="#6FE6C1" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                }
                label="email"
                value={"info@begumed.kz"}
                href="mailto:info@begumed.kz"
                mobile
              />
            </div>
          </div>

          {/* Map */}
          <MapFrame height="240px" cut={16} />

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
          {/* Heading */}
          <div style={{ marginBottom: "52px" }}>
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
              как с нами связаться
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
              Контакты
            </h2>
          </div>

          {/* Two-column layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "24px",
              alignItems: "start",
            }}
          >
            {/* Left: info card */}
            <div
              style={{
                background: "#6FE6C1",
                clipPath: CLIP(20),
                padding: "1.5px",
                filter:
                  "drop-shadow(0 0 14px rgba(111,230,193,0.12)) drop-shadow(0 8px 28px rgba(0,0,0,0.7))",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(150deg, #002214 0%, #000e08 100%)",
                  clipPath: CLIP(19),
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Ghost text */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-16px",
                    right: "-8px",
                    fontFamily: "'Furore', sans-serif",
                    fontSize: "90px",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(111,230,193,0.05)",
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                    letterSpacing: "-0.04em",
                  }}
                >
                  GEO
                </div>

                <InfoItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M9 1C5.69 1 3 3.69 3 7C3 11.25 9 17 9 17C9 17 15 11.25 15 7C15 3.69 12.31 1 9 1ZM9 8.75C8.03 8.75 7.25 7.97 7.25 7C7.25 6.03 8.03 5.25 9 5.25C9.97 5.25 10.75 6.03 10.75 7C10.75 7.97 9.97 8.75 9 8.75Z"
                        fill="#6FE6C1"
                      />
                    </svg>
                  }
                  label="адрес"
                  value={"г. Алматы\nул. Гагарина 133/2\nофис 100, этаж 18"}
                />

                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(111,230,193,0.3) 0%, transparent 80%)",
                  }}
                />

                <InfoItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M3.5 2C3.5 1.45 3.95 1 4.5 1H6.5C6.78 1 7 1.22 7 1.5V6C7 6.28 6.78 6.5 6.5 6.5H5.5C5.5 6.5 5.5 8.5 7.5 10.5C9.5 12.5 11.5 12.5 11.5 12.5V11.5C11.5 11.22 11.72 11 12 11H16C16.28 11 16.5 11.22 16.5 11.5V13.5C16.5 14.6 15.38 15.5 14 15.5C7.65 15.5 2.5 10.35 2.5 4C2.5 2.9 2.5 2 3.5 2Z"
                        fill="#6FE6C1"
                      />
                    </svg>
                  }
                  label="телефон"
                  value={"+7 702 173 7192"}
                  href="tel:+77021737192"
                />

                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(111,230,193,0.3) 0%, transparent 80%)",
                  }}
                />

                <InfoItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="1" y="3.5" width="16" height="11" rx="2.5" stroke="#6FE6C1" strokeWidth="1.5"/>
                      <path d="M1 6L9 11L17 6" stroke="#6FE6C1" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  }
                  label="email"
                  value={"info@begumed.kz"}
                  href="mailto:info@begumed.kz"
                />

                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(111,230,193,0.3) 0%, transparent 80%)",
                  }}
                />

                {/* CTA button */}
                <div
                  style={{
                    background: "#6FE6C1",
                    clipPath: CLIP(10),
                    padding: "1.5px",
                    display: "inline-block",
                  }}
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", textDecoration: "none" }}
                  >
                  <button
                    className="site-btn"
                    style={{
                      background: "linear-gradient(135deg, #002416 0%, #000e08 100%)",
                      clipPath: CLIP(9),
                      border: "none",
                      padding: "14px 24px",
                      cursor: "pointer",
                      fontFamily: "'Furore', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.16em",
                      color: "#6FE6C1",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "12px",
                      width: "100%",
                      justifyContent: "center",
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
                    Записаться на приём
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
            </div>

            {/* Right: map */}
            <MapFrame height="520px" cut={22} />
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