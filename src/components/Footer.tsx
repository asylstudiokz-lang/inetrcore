import { useState } from "react";
import { Container } from "./ui/Container";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

/* ── Instagram SVG ─────────────────────────────────────────────── */
function IconInstagram({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="#6FE6C1" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.5" stroke="#6FE6C1" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="#6FE6C1" />
    </svg>
  );
}

/* ── WhatsApp SVG ──────────────────────────────────────────────── */
function IconWhatsApp({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.417A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
        stroke="#6FE6C1"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.5c.15-.35.32-.36.57-.37.18-.01.37 0 .55 0 .2 0 .43.08.56.38.17.38.58 1.42.63 1.52.05.1.08.22.02.34-.06.12-.09.19-.18.3-.09.1-.2.22-.28.3-.09.09-.19.19-.08.38.11.19.49.81 1.05 1.31.72.64 1.33.84 1.52.93.19.09.3.08.41-.05.12-.13.5-.58.63-.78.13-.2.27-.17.45-.1.18.07 1.13.53 1.32.63.2.1.33.15.38.23.05.09.05.5-.13.98-.18.48-.99.92-1.38.97-.35.04-.79.06-2.55-.71-2.12-.93-3.47-3.08-3.57-3.22-.1-.14-.84-1.12-.84-2.14 0-1.01.52-1.5.71-1.71z"
        fill="#6FE6C1"
      />
    </svg>
  );
}

/* ── Social button ─────────────────────────────────────────────── */
function SocialBtn({
  href,
  icon,
  label,
  title,
  mobile = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  mobile?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const size = mobile ? 48 : 56;
  const cut = mobile ? 10 : 12;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={title}
      style={{ display: "inline-block", textDecoration: "none" }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered
            ? "#6FE6C1"
            : "linear-gradient(135deg, rgba(111,230,193,0.55) 0%, rgba(111,230,193,0.2) 100%)",
          clipPath: CLIP(cut),
          padding: "1.5px",
          filter: hovered
            ? "drop-shadow(0 0 20px rgba(111,230,193,0.5))"
            : "drop-shadow(0 0 8px rgba(111,230,193,0.12))",
          transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
        }}
      >
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background: hovered
              ? "linear-gradient(135deg, #002e1c 0%, #001610 100%)"
              : "linear-gradient(135deg, #001f12 0%, #000e08 100%)",
            clipPath: CLIP(cut - 1),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.35s ease",
          }}
        >
          {icon}
        </div>
      </div>
    </a>
  );
}

/* ── Legal link ────────────────────────────────────────────────── */
function LegalLink({
  href,
  title,
  children,
  mobile = false,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
  mobile?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      title={title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        fontFamily: "'Furore', sans-serif",
        fontSize: mobile ? "9px" : "10px",
        letterSpacing: "0.18em",
        color: hovered ? "#6FE6C1" : "rgba(111,230,193,0.5)",
        textTransform: "uppercase",
        textDecoration: "none",
        textAlign: "center",
        lineHeight: 1.7,
        transition: "color 0.25s ease",
      }}
    >
      {children}
    </a>
  );
}

/* ── Main footer ───────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#001208",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top divider line */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(111,230,193,0.25) 30%, rgba(111,230,193,0.25) 70%, transparent)",
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "300px",
          background:
            "radial-gradient(ellipse at center, rgba(111,230,193,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative corner shapes */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          width: "60px",
          height: "60px",
          borderTop: "1px solid rgba(111,230,193,0.12)",
          borderLeft: "1px solid rgba(111,230,193,0.12)",
          clipPath: CLIP(12),
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "40px",
          width: "60px",
          height: "60px",
          borderBottom: "1px solid rgba(111,230,193,0.12)",
          borderRight: "1px solid rgba(111,230,193,0.12)",
          clipPath: `polygon(0 0, 100% 0, 100% 100%, 12px 100%, 0 calc(100% - 12px))`,
          pointerEvents: "none",
        }}
      />

      {/* ── MOBILE ── */}
      <div className="md:hidden" style={{ padding: "52px 0 40px", position: "relative", zIndex: 1 }}>
        <Container>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "36px" }}>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              <SocialBtn
                href="https://www.instagram.com/centr_pobed_kz?igsh=MW84azgzZTN2OXRlZw=="
                icon={<IconInstagram size={20} />}
                label="Instagram"
                title="Наш Instagram - Центр Побед"
                mobile
              />
              <SocialBtn
                href="https://wa.me/77021737192"
                icon={<IconWhatsApp size={20} />}
                label="WhatsApp"
                title="Связаться с нами в WhatsApp"
                mobile
              />
            </div>

            {/* Tagline */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "32px",
                  height: "1.5px",
                  background: "rgba(111,230,193,0.3)",
                  margin: "0 auto 16px",
                }}
              />
              <p
                style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  lineHeight: 1.2,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Двери нашего центра<br />всегда открыты для вас
              </p>
              <div
                style={{
                  width: "32px",
                  height: "1.5px",
                  background: "rgba(111,230,193,0.3)",
                  margin: "16px auto 0",
                }}
              />
            </div>

            {/* Legal links */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <LegalLink href="/privacy-policy" title="Перейти к политике конфиденциальности" mobile>
                Политика конфиденциальности<br />и обработки персональных данных
              </LegalLink>
              <LegalLink href="/public-offer" title="Перейти к публичной оферте" mobile>
                Публичная оферта
              </LegalLink>
            </div>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(111,230,193,0.15) 50%, transparent)",
              }}
            />

            {/* Contact info */}
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: 0 }}>
                Казахстан г. Алматы
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: 0 }}>
                Телефон для связи:{" "}
                <a
                  href="tel:+77021737192"
                  title="Позвонить нам"
                  style={{ color: "#6FE6C1", textDecoration: "none" }}
                >
                  +7 702 173 7192
                </a>
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.6 }}>
                Адрес: Гагарина 133/2, офис 100 этаж 18<br />
                ЖК Оркендеу (вход со стороны Мынбаева)
              </p>
            </div>

            {/* Copyright */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                color: "rgba(255,255,255,0.2)",
                margin: 0,
                textAlign: "center",
                letterSpacing: "0.06em",
              }}
            >
              © 2026 Центр побед. Все права защищены.
            </p>
          </div>
        </Container>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block" style={{ padding: "80px 0 48px", position: "relative", zIndex: 1 }}>
        <Container>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "48px" }}>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "16px" }}>
              <SocialBtn
                href="https://www.instagram.com/centr_pobed_kz?igsh=MW84azgzZTN2OXRlZw=="
                icon={<IconInstagram size={22} />}
                label="Instagram"
                title="Наш Instagram - Центр Побед"
              />
              <SocialBtn
                href="https://wa.me/77021737192"
                icon={<IconWhatsApp size={22} />}
                label="WhatsApp"
                title="Связаться с нами в WhatsApp"
              />
            </div>

            {/* Tagline */}
            <div style={{ textAlign: "center", position: "relative" }}>
              {/* Ghost letters behind */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "120px",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(111,230,193,0.04)",
                  pointerEvents: "none",
                  userSelect: "none",
                  letterSpacing: "-0.04em",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                OPEN
              </div>

              <div
                style={{
                  width: "48px",
                  height: "1.5px",
                  background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.4), transparent)",
                  margin: "0 auto 20px",
                }}
              />
              <p
                style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "clamp(28px, 3.2vw, 44px)",
                  fontWeight: 400,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  lineHeight: 1.15,
                  margin: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Двери нашего центра всегда открыты для вас
              </p>
              <div
                style={{
                  width: "48px",
                  height: "1.5px",
                  background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.4), transparent)",
                  margin: "20px auto 0",
                }}
              />
            </div>

            {/* Legal links */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <LegalLink href="/privacy-policy" title="Перейти к политике конфиденциальности">
                Политика конфиденциальности и обработки персональных данных
              </LegalLink>
              <LegalLink href="/public-offer" title="Перейти к публичной оферте">Публичная оферта</LegalLink>
            </div>

            {/* Wide divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(111,230,193,0.2) 30%, rgba(111,230,193,0.2) 70%, transparent)",
              }}
            />

            {/* Contact info row — spread left / right */}
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              {/* Address block */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: 0,
                    background: "rgba(111,230,193,0.45)",
                    clipPath: CLIP(7),
                    padding: "1.5px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(135deg, #002214 0%, #000e08 100%)",
                      clipPath: CLIP(6),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1C5.24 1 3 3.24 3 6C3 9.75 8 15 8 15C8 15 13 9.75 13 6C13 3.24 10.76 1 8 1ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5Z" fill="#6FE6C1"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Furore', sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.22em",
                      color: "rgba(111,230,193,0.5)",
                      textTransform: "uppercase",
                      margin: "0 0 6px",
                    }}
                  >
                    Казахстан г. Алматы
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.75)",
                      margin: "0 0 3px",
                      lineHeight: 1.5,
                    }}
                  >
                    Гагарина 133/2, офис 100 этаж 18
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.75)",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    ЖК Оркендеу (вход со стороны Мынбаева)
                  </p>
                </div>
              </div>

              {/* Phone block */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: 0,
                    background: "rgba(111,230,193,0.45)",
                    clipPath: CLIP(7),
                    padding: "1.5px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(135deg, #002214 0%, #000e08 100%)",
                      clipPath: CLIP(6),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 2C3 1.45 3.45 1 4 1H5.5C5.78 1 6 1.22 6 1.5V5C6 5.28 5.78 5.5 5.5 5.5H4.5C4.5 5.5 4.5 7.5 6 9C7.5 10.5 9.5 10.5 9.5 10.5V9.5C9.5 9.22 9.72 9 10 9H13.5C13.78 9 14 9.22 14 9.5V11.5C14 12.33 13.1 13 12 13C7 13 3 9 3 4C3 2.9 3 2 3 2Z" fill="#6FE6C1"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Furore', sans-serif",
                      fontSize: "9px",
                      letterSpacing: "0.22em",
                      color: "rgba(111,230,193,0.5)",
                      textTransform: "uppercase",
                      margin: "0 0 6px",
                    }}
                  >
                    Телефон для связи
                  </p>
                  <a
                    href="tel:+77021737192"
                    title="Позвонить нам"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "18px",
                      color: "#6FE6C1",
                      textDecoration: "none",
                      display: "block",
                      lineHeight: 1.4,
                      letterSpacing: "0.02em",
                    }}
                  >
                    +7 702 173 7192
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom copyright */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                paddingTop: "8px",
                width: "100%",
              }}
            >
              <div style={{ width: "32px", height: "1px", background: "rgba(111,230,193,0.2)" }} />
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.2)",
                  margin: 0,
                  letterSpacing: "0.06em",
                }}
              >
                © 2026 Центр побед. Все права защищены.
              </p>
              <div style={{ width: "32px", height: "1px", background: "rgba(111,230,193,0.2)" }} />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}