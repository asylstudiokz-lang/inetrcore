import { Container } from "./ui/Container";
import { useRef, useLayoutEffect, useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "Лечение ЗПРР, ЗРР, РАС, СДВГ, Сенсомоторная алалия",
    description:
      "Новые научные решения для медицины будущего, где лечение основано на глубоком понимании организма и его самовосстанавливающем потенциале.",
    tag: "Неврология",
    wide: true,
    accent: true,
  },
  {
    id: 2,
    title: "Витаминно-минеральные комплексы",
    description: "Функциональное питание на растительной основе",
    tag: "Нутрициология",
    wide: false,
    accent: false,
  },
  {
    id: 3,
    title: "Педагогическая коррекция детей",
    description:
      "С РАС, ЗПРР, Аутизмом — комплексные занятия с логопедом, дефектологом, нейропсихологом.",
    tag: "Педагогика",
    wide: false,
    accent: false,
  },
  {
    id: 4,
    title: "Исправление прикуса",
    description: "Остеопатическая методика и корректор Миката",
    tag: "Стоматология",
    wide: false,
    accent: false,
  },
  {
    id: 5,
    title: "Лечение ран",
    description:
      "Трофических язв, ожогов и пролежней. Инновационная квантовая матрица",
    tag: "Регенерация",
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
          padding: "22px 20px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ghost number */}
        <div
          style={{
            position: "absolute",
            bottom: "-8px",
            right: "12px",
            fontFamily: "'Furore', sans-serif",
            fontSize: "96px",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(111,230,193,0.09)",
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.04em",
          }}
        >
          0{card.id}
        </div>

        {/* Top: TagChip */}
        <div style={{ marginBottom: "18px" }}>
          <MobileTagChip label={card.tag} />
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontFamily: "'Furore', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "#ffffff",
              textTransform: "uppercase",
              lineHeight: 1.25,
              margin: 0,
              marginBottom: "12px",
              letterSpacing: "0.03em",
            }}
          >
            {card.title}
          </h3>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: 0,
              marginBottom: "20px",
            }}
          >
            {card.description}
          </p>

          {/* Divider + button */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(111,230,193,0.3) 0%, transparent 70%)",
              marginBottom: "16px",
            }}
          />
          <button
            className="site-btn-text"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: "'Furore', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "#6FE6C1",
              textTransform: "uppercase",
            }}
          >
            подробнее
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none">
              <path
                d="M0 4H16M12 1L16 4L12 7"
                stroke="#6FE6C1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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
        {/* Ghost number */}
        <div
          style={{
            position: "absolute",
            bottom: "-12px",
            right: "16px",
            fontFamily: "'Furore', sans-serif",
            fontSize: "clamp(80px, 9vw, 130px)",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(111,230,193,0.09)",
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.04em",
          }}
        >
          0{card.id}
        </div>

        {/* Top: tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "28px",
          }}
        >
          <DesktopTagChip label={card.tag} />
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
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

          {/* Divider + button */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(111,230,193,0.3) 0%, transparent 70%)",
              marginBottom: "18px",
            }}
          />
          <button
            className="site-btn-text"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: "'Furore', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.18em",
              color: "#6FE6C1",
              textTransform: "uppercase",
            }}
          >
            подробнее
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none">
              <path
                d="M0 4H16M12 1L16 4L12 7"
                stroke="#6FE6C1"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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
      className="relative overflow-hidden"
      style={{ backgroundColor: "#001d14" }}
    >
      {/* ── MOBILE ── */}
      <div
        className="md:hidden"
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
        className="hidden md:block"
        style={{ position: "relative", padding: "90px 0 100px" }}
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