import { Container } from "./ui/Container";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { DetailedBrainIcon, DetailedPillIcon, DetailedPedagogicsIcon, DetailedJawIcon, DetailedHealingIcon } from "./DirectionsIcons";

const cards = [
  {
    id: 1,
    title: "Лечение ЗПРР, ЗРР, РАС, СДВГ, Сенсомоторная алалия",
    description:
      "Новые научные решения для медицины будущего, где лечение основано на глубоком понимании организма и его самовосстанавливающем потенциале.",
    tag: "Неврология",
    icon: DetailedBrainIcon,
    wide: true,
    accent: true,
  },
  {
    id: 2,
    title: "Витаминно-минеральные комплексы",
    description: "Функциональное питание на растительной основе.",
    tag: "Нутрициология",
    icon: DetailedPillIcon,
    wide: false,
    accent: false,
  },
  {
    id: 3,
    title: "Педагогическая коррекция детей",
    description:
      "С РАС, ЗПРР, Аутизмом — комплексные занятия с логопедом, дефектологом, нейропсихологом.",
    tag: "Педагогика",
    icon: DetailedPedagogicsIcon,
    wide: false,
    accent: false,
  },
  {
    id: 4,
    title: "Исправление прикуса",
    description: "Остеопатическая методика и корректор Миката.",
    tag: "Стоматология",
    icon: DetailedJawIcon,
    wide: false,
    accent: false,
  },
  {
    id: 5,
    title: "Лечение ран",
    description:
      "Трофических язв, ожогов и пролежней. Инновационная квантовая матрица.",
    tag: "Регенерация",
    icon: DetailedHealingIcon,
    wide: false,
    accent: false,
  },
];

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

/* ── Mobile tag chip — pure CSS clip-path, no measurement ── */
function MobileTagChip({ label }: { label: string }) {
  const cut = 8;
  const clip = `polygon(${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%, 0 ${cut}px)`;
  return (
    <div style={{ display: "inline-block", background: "#6FE6C1", clipPath: clip, padding: "1px" }}>
      <div style={{ background: "#001a0f", clipPath: clip, padding: "4px 10px" }}>
        <span style={{
          fontFamily: "'Furore', sans-serif",
          fontSize: "9px",
          letterSpacing: "0.18em",
          color: "#6FE6C1",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}>
          {label}
        </span>
      </div>
    </div>
  );
}

/* ── Mobile card ──────────────────────────────────────────────────────── */
function MobileCard({
  card,
  style,
}: {
  card: (typeof cards)[0];
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={`/services/${card.id}`}
      style={{ display: "block", textDecoration: "none" }}
    >
    <div
      style={{
        background: "#6FE6C1",
        clipPath: CLIP(18),
        padding: "1.5px",
        filter:
          "drop-shadow(0 0 14px rgba(111,230,193,0.18)) drop-shadow(0 6px 24px rgba(0,0,0,0.55))",
        ...style,
      }}
    >
      <div
        style={{
          background: card.accent
            ? "linear-gradient(150deg, #00391e 0%, #001810 100%)"
            : "linear-gradient(150deg, #002214 0%, #000e08 100%)",
          clipPath: CLIP(17),
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative", zIndex: 10, flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <h3
              style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#ffffff",
                textTransform: "uppercase",
                lineHeight: 1.25,
                margin: 0,
                letterSpacing: "0.03em",
                flex: 1,
                paddingRight: "12px",
              }}
            >
              {card.title}
            </h3>
            {card.icon && (
              <div style={{ 
                width: "56px", 
                height: "56px", 
                borderRadius: "50%", 
                background: "rgba(0,18,13,0.8)", 
                border: "1px solid rgba(111,230,193,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "#6FE6C1",
              }}>
                <card.icon width={36} height={36} strokeWidth={1.2} />
              </div>
            )}
          </div>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.5,
              margin: 0,
              marginBottom: "20px",
            }}
          >
            {card.description}
          </p>

          {/* Spacer to push button to the bottom if content is short, although height is now dependent on content */}
          <div style={{ marginTop: "auto" }} />

          {/* Site-style Polygon Button */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              width: "100%",
              background: "rgba(111,230,193,0.4)",
              clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              padding: "1px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
               const el = e.currentTarget;
               el.style.background = "rgba(111,230,193,1)";
               el.style.filter = "drop-shadow(0 0 12px rgba(111,230,193,0.5))";
               (el.firstChild as HTMLElement).style.background = "#002a1b"; // Solid dark green so border doesn't bleed through
            }}
            onMouseLeave={(e) => {
               const el = e.currentTarget;
               el.style.background = "rgba(111,230,193,0.4)";
               el.style.filter = "none";
               (el.firstChild as HTMLElement).style.background = "#001209"; // Solid dark background
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#001209", // Solid!
                clipPath: "polygon(9.5px 0, 100% 0, 100% calc(100% - 9.5px), calc(100% - 9.5px) 100%, 0 100%, 0 9.5px)",
                padding: "14px 16px",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.15em",
                color: "#6FE6C1",
                textTransform: "uppercase",
              }}>
                подробнее
              </span>
              <svg width="18" height="8" viewBox="0 0 18 8" fill="none">
                <path d="M0 4H16M12 1L16 4L12 7" stroke="#6FE6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    </a>
  );
}

/* ── Desktop card ────────────────────────────────────────────────────── */

/* Two-layer clip-path chip for desktop — no DOM measurement needed */
function DesktopTagChip({ label }: { label: string }) {
  const cut = 9;
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
          padding: "5px 12px",
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

function DesktopCard({
  card,
  style,
}: {
  card: (typeof cards)[0];
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={`/services/${card.id}`}
      style={{ display: "block", textDecoration: "none", ...style }}
    >
    <div
      className="desktop-dir-card"
      style={{
        background: "#6FE6C1",
        clipPath: CLIP(22),
        padding: "1.5px",
        transition: "filter 0.35s ease, transform 0.35s ease",
        filter:
          "drop-shadow(0 0 14px rgba(111,230,193,0.18)) drop-shadow(0 6px 24px rgba(0,0,0,0.55))",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.filter =
          "drop-shadow(0 0 30px rgba(111,230,193,0.5)) drop-shadow(0 14px 44px rgba(0,0,0,0.85))";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.filter =
          "drop-shadow(0 0 14px rgba(111,230,193,0.18)) drop-shadow(0 6px 24px rgba(0,0,0,0.55))";
        el.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          background: card.accent
            ? "linear-gradient(150deg, #00391e 0%, #001810 100%)"
            : "linear-gradient(150deg, #002214 0%, #000e08 100%)",
          clipPath: CLIP(21),
          padding: "32px 30px 28px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Icon — card 1: above title (top-left area); others: top-right corner */}
        {card.icon && (
          <div
            style={{
              position: "absolute",
              ...(card.wide
                ? { top: "80px", left: "24px" }
                : { top: "-10px", right: "-10px" }),
              color: "rgba(111,230,193,0.07)",
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {card.wide
              ? <card.icon width={220} height={220} strokeWidth={0.4} />
              : <card.icon width={108} height={108} strokeWidth={0.4} />}
          </div>
        )}

        {/* Top: tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "28px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <DesktopTagChip label={card.tag} />
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", zIndex: 10 }}>
          <h3
            style={{
              fontFamily: "'Furore', sans-serif",
              fontSize: card.accent
                ? "clamp(18px, 1.9vw, 26px)"
                : "clamp(13px, 1.2vw, 17px)",
              fontWeight: 400,
              color: "#ffffff",
              textTransform: "uppercase",
              lineHeight: 1.25,
              margin: 0,
              marginBottom: "14px",
              letterSpacing: "0.03em",
            }}
          >
            {card.title}
          </h3>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: 0,
              marginBottom: "24px",
            }}
          >
            {card.description}
          </p>

          {/* Site-style Polygon Button */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              width: "max-content",
              background: "rgba(111,230,193,0.4)",
              clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              padding: "1.5px",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
               const el = e.currentTarget;
               el.style.background = "rgba(111,230,193,1)";
               el.style.filter = "drop-shadow(0 0 16px rgba(111,230,193,0.6))";
               (el.firstChild as HTMLElement).style.background = "#002a1b"; // Solid dark green so border doesn't bleed through
            }}
            onMouseLeave={(e) => {
               const el = e.currentTarget;
               el.style.background = "rgba(111,230,193,0.4)";
               el.style.filter = "none";
               (el.firstChild as HTMLElement).style.background = "#001209"; // Solid dark background
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                background: "#001209", // Solid!
                clipPath: "polygon(10.5px 0, 100% 0, 100% calc(100% - 10.5px), calc(100% - 10.5px) 100%, 0 100%, 0 10.5px)",
                padding: "14px 22px",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.15em",
                color: "#6FE6C1",
                textTransform: "uppercase",
              }}>
                подробнее
              </span>
              <svg width="20" height="10" viewBox="0 0 18 8" fill="none">
                <path d="M0 4H16M12 1L16 4L12 7" stroke="#6FE6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    </a>
  );
}

/* ── Desktop grid ────────────────────────────────────────────────────── */
function DesktopGrid() {
  return (
    <>
      {/* Heading row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
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
          Направления
        </h2>

        {/* Counter */}
        <span
          style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.18em",
            color: "rgba(111,230,193,0.45)",
            paddingBottom: "8px",
          }}
        >
          05 направлений
        </span>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "14px",
          marginBottom: "14px",
        }}
      >
        <DesktopCard card={cards[0]} style={{ gridRow: "1 / 3", minHeight: "480px" }} />
        <DesktopCard card={cards[1]} style={{ minHeight: "228px" }} />
        <DesktopCard card={cards[2]} style={{ minHeight: "228px" }} />
        <DesktopCard card={cards[3]} style={{ minHeight: "228px" }} />
        <DesktopCard card={cards[4]} style={{ minHeight: "228px" }} />
      </div>
    </>
  );
}

/* ── Section ─────────────────────────────────────────────────────────── */
export function DirectionsSection() {
  return (
    <section
      id="directions"
      style={{ backgroundColor: "#001d14", position: "relative", overflow: "hidden" }}
    >
      {/* ── MOBILE ── */}
      <div
        className="md:hidden py-10"
        style={{ position: "relative", padding: "48px 0 52px" }}
      >
        <Container style={{ position: "relative", zIndex: 1 }}>
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
              marginBottom: "32px",
            }}
          >
            Направления
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {cards.map((card) => (
              <MobileCard key={card.id} card={card} />
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
        className="hidden md:block relative" style={{ padding: "100px 0" }}
      >
        <Container style={{ position: "relative", zIndex: 1 }}>
          <DesktopGrid />

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

/* ── SVG chip — truly uniform 1px border on all edges inc. diagonal ─── */
function TagChip({ label }: { label: string }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);

  const measure = () => {
    if (textRef.current) {
      const r = textRef.current.getBoundingClientRect();
      if (r.width > 0) {
        setDims({ w: Math.ceil(r.width) + 24, h: Math.ceil(r.height) + 10 });
      }
    }
  };

  useLayoutEffect(() => {
    measure();
  }, [label]);

  useEffect(() => {
    if (dims) return;
    const id = setTimeout(measure, 120);
    return () => clearTimeout(id);
  }, [dims, label]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if ((document as any).fonts) {
      (document as any).fonts.ready.then(measure);
    }
  }, [label]);

  const cut = 9;
  const s = 0.5;

  const polyPoints = (w: number, h: number) =>
    [
      `${cut + s},${s}`,
      `${w - s},${s}`,
      `${w - s},${h - cut - s}`,
      `${w - cut - s},${h - s}`,
      `${s},${h - s}`,
      `${s},${cut + s}`,
    ].join(" ");

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <span
        ref={textRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          fontFamily: "'Furore', sans-serif",
          fontSize: "9px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>

      {dims && (
        <div
          style={{
            position: "relative",
            width: dims.w,
            height: dims.h,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#001a0f",
              clipPath: `polygon(${cut}px 0px, ${dims.w}px 0px, ${dims.w}px ${dims.h - cut}px, ${dims.w - cut}px ${dims.h}px, 0px ${dims.h}px, 0px ${cut}px)`,
            }}
          />
          <svg
            width={dims.w}
            height={dims.h}
            style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}
          >
            <polygon
              points={polyPoints(dims.w, dims.h)}
              fill="none"
              stroke="#6FE6C1"
              strokeWidth="1"
            />
          </svg>
          <span
            style={{
              position: "relative",
              zIndex: 2,
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
      )}
    </div>
  );
}