import { useState, useRef, useCallback } from "react";
import { CTAButton } from "../HeroSection";
import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";
const CUT = 20;
const CLIP_PATH = `polygon(0 0, calc(100% - ${CUT}px) 0, 100% ${CUT}px, 100% 100%, ${CUT}px 100%, 0 calc(100% - ${CUT}px))`;
const CLIP_PATH_SM = `polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))`;

const PROBLEMS = [
  "Исправление прикуса",
  "Лечение околозубных заболеваний",
  "Профилактика бруксизма",
  "Тренировка периоральной мускулатуры",
  "Нормализация носового дыхания",
  "Профилактика апноэ",
];

const TOTAL_SLIDES = 10;

export function BiteCorrectionResultsSection() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : TOTAL_SLIDES - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrent((c) => (c < TOTAL_SLIDES - 1 ? c + 1 : 0));
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) goNext();
    else if (diff < -40) goPrev();
    touchStartX.current = null;
  };

  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "96px 0 108px" }}>

      {/* Ambient background glows */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: [
          "radial-gradient(ellipse 65% 55% at 85% 15%, rgba(111,230,193,0.07) 0%, transparent 60%)",
          "radial-gradient(ellipse 45% 45% at 8% 85%, rgba(0,55,28,0.35) 0%, transparent 60%)",
        ].join(", "),
      }} />

      {/* Subtle top border glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "60%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.4) 40%, rgba(111,230,193,0.6) 50%, rgba(111,230,193,0.4) 60%, transparent)",
        pointerEvents: "none",
      }} />

      {/* Dot ornament — top right */}
      <div style={{
        position: "absolute", top: "52px", right: "44px",
        width: "110px", height: "90px",
        backgroundImage: `radial-gradient(circle, ${CYAN} 1.3px, transparent 1.3px)`,
        backgroundSize: "14px 14px",
        opacity: 0.11, pointerEvents: "none",
      }} />

      {/* Diagonal lines — bottom left */}
      <svg
        style={{ position: "absolute", bottom: "36px", left: 0, opacity: 0.09, pointerEvents: "none" }}
        width="150" height="110" viewBox="0 0 150 110" fill="none"
      >
        <line x1="0" y1="0" x2="150" y2="110" stroke="#6FE6C1" strokeWidth="1" />
        <line x1="0" y1="22" x2="128" y2="110" stroke="#6FE6C1" strokeWidth="1" />
        <line x1="0" y1="44" x2="106" y2="110" stroke="#6FE6C1" strokeWidth="1" />
      </svg>

      {/* ─── MOBILE ─── */}
      <div className="md:hidden">
        <Container style={{ position: "relative", zIndex: 1 }}>

          {/* Problems */}
          <Eyebrow label="// проблемы" />
          <h2 style={mobileH2}>
            Какие проблемы{" "}
            <span style={{ color: CYAN, textShadow: "0 0 18px rgba(111,230,193,0.45)" }}>
              решает миката?
            </span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "120px" }}>
            {PROBLEMS.map((label, i) => (
              <ProblemRow key={i} index={i} label={label} />
            ))}
          </div>

          {/* Results slider */}
          <Eyebrow label="// результаты" />
          <h2 style={{ ...mobileH2, marginBottom: "26px" }}>
            Результаты{" "}
            <span style={{ color: CYAN, textShadow: "0 0 18px rgba(111,230,193,0.45)" }}>
              лечения
            </span>
          </h2>
          <p style={{
            fontFamily: "'Raleway', sans-serif", fontSize: "14px", lineHeight: 1.6,
            color: "rgba(255,255,255,0.6)", marginBottom: "32px",
          }}>
            Реальные снимки пациентов до и после прохождения курса коррекции прикуса корректором МИКАТА.
          </p>
          <SliderBlock
            current={current}
            onPrev={goPrev}
            onNext={goNext}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
            <CTAButton text="Консультация" />
          </div>
        </Container>
      </div>

      {/* ─── DESKTOP ─── */}
      <div className="hidden md:block">
        <Container style={{ position: "relative", zIndex: 1 }}>

          {/* ── PROBLEMS BLOCK ── */}
          <Eyebrow label="// проблемы" />

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", gap: "24px", flexWrap: "wrap" }}>
            <h2 style={desktopH2}>
              Какие проблемы{" "}
              <span style={{ color: CYAN, textShadow: "0 0 30px rgba(111,230,193,0.4)" }}>
                решает миката?
              </span>
            </h2>
            {/* Decorative line right of heading */}
            <div style={{ flex: 1, minWidth: "60px", height: "1px", background: "linear-gradient(90deg, rgba(111,230,193,0.4) 0%, transparent 100%)", marginBottom: "8px" }} />
          </div>

          {/* 3-column grid of problem cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", marginBottom: "160px" }}>
            {PROBLEMS.map((label, i) => (
              <ProblemCard key={i} index={i} label={label} />
            ))}
          </div>

          {/* ── RESULTS SLIDER BLOCK ── */}
          <Eyebrow label="// результаты лечения" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "center" }}>
            {/* Left — title + description */}
            <div>
              <h2 style={{ ...desktopH2, marginBottom: "24px" }}>
                Результаты{" "}
                <span style={{ color: CYAN, textShadow: "0 0 30px rgba(111,230,193,0.4)" }}>
                  лечения
                </span>
              </h2>
              <div style={{ width: "48px", height: "2px", background: `linear-gradient(90deg, ${CYAN}, transparent)`, opacity: 0.7, marginBottom: "20px" }} />
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px", fontWeight: 400,
                color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0, marginBottom: "32px",
              }}>
                Реальные снимки пациентов до и после прохождения курса коррекции прикуса корректором МИКАТА.
              </p>
              <div style={{ marginBottom: "48px" }}>
                <CTAButton text="Консультация" />
              </div>
            </div>

            {/* Right — slider */}
            <SliderBlock
              current={current}
              onPrev={goPrev}
              onNext={goNext}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />
          </div>
        </Container>
      </div>
    </section>
  );
}

/* ─── Eyebrow ─── */
function Eyebrow({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
      <div style={{ width: "28px", height: "1px", background: CYAN, opacity: 0.6 }} />
      <span style={{
        fontFamily: "'Furore', sans-serif", fontSize: "10px",
        letterSpacing: "0.26em", color: CYAN, textTransform: "uppercase", opacity: 0.8,
      }}>
        {label}
      </span>
    </div>
  );
}

/* ─── Mobile heading style ─── */
const mobileH2: React.CSSProperties = {
  fontFamily: "'Furore', sans-serif",
  fontSize: "clamp(21px, 6.5vw, 27px)",
  fontWeight: 400, color: "#fff",
  lineHeight: 1.2, letterSpacing: "0.04em",
  textTransform: "uppercase", margin: "0 0 28px 0",
};

/* ─── Desktop heading style ─── */
const desktopH2: React.CSSProperties = {
  fontFamily: "'Furore', sans-serif",
  fontSize: "clamp(28px, 3.2vw, 46px)",
  fontWeight: 400, color: "#fff",
  lineHeight: 1.1, letterSpacing: "0.04em",
  textTransform: "uppercase", margin: 0,
};

/* ─── Mobile problem row ─── */
function ProblemRow({ index, label }: { index: number; label: string }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <div style={{ position: "relative" }}>
      {/* Border wrapper — relative so it follows content height */}
      <div style={{
        background: `linear-gradient(135deg, ${CYAN}aa 0%, ${CYAN}22 100%)`,
        padding: "1.2px", clipPath: CLIP_PATH_SM,
        minHeight: "64px",
        display: "flex",
      }}>
        <div style={{
          width: "100%", height: "100%",
          clipPath: `polygon(0 0, calc(100% - 11.2px) 0, 100% 11.2px, 100% 100%, 11.2px 100%, 0 calc(100% - 11.2px))`,
          display: "flex", alignItems: "center", gap: "0",
          overflow: "hidden",
          background: "linear-gradient(145deg, rgba(0,40,24,0.95) 0%, rgba(0,10,5,0.98) 100%)",
          padding: "16px 0",
          flex: 1,
        }}>
          {/* Number strip */}
          <div style={{
            flexShrink: 0, width: "38px", alignSelf: "stretch",
            background: "rgba(111,230,193,0.08)",
            borderRight: "1px solid rgba(111,230,193,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "10px", color: CYAN, opacity: 0.6, letterSpacing: "0.04em" }}>{num}</span>
          </div>
          {/* Text area */}
          <div style={{ padding: "0 14px", flex: 1 }}>
            <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "14px", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.03em", color: "rgba(255,255,255,0.95)" }}>{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Desktop problem card ─── */
function ProblemCard({ index, label }: { index: number; label: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");
  return (
    <div 
      className={`problem-card-wrapper ${isHovered ? "is-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .problem-card-wrapper.is-hovered {
            transform: translateY(-8px);
          }
          .problem-card-glow-bg {
            transition: opacity 0.5s ease;
          }
          .problem-card-wrapper.is-hovered .problem-card-glow-bg {
            opacity: 0.15 !important;
          }
        }
      `}} />
      {/* Border wrapper */}
      <div style={{
        background: isHovered ? CYAN : `linear-gradient(135deg, ${CYAN}aa 0%, ${CYAN}22 100%)`,
        padding: "1.5px", clipPath: CLIP_PATH,
        height: "100%",
        transition: "background 0.3s ease",
        filter: isHovered ? `drop-shadow(0 0 15px ${CYAN}44)` : "none"
      }}>
        <div style={{
          width: "100%", height: "100%",
          clipPath: `polygon(0 0, calc(100% - ${CUT - 1.5}px) 0, 100% ${CUT - 1.5}px, 100% 100%, ${CUT - 1.5}px 100%, 0 calc(100% - ${CUT - 1.5}px))`,
          background: "linear-gradient(145deg, rgba(0,36,20,0.95) 0%, rgba(0,8,4,0.98) 100%)",
          padding: "0", overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}>
          {/* Top accent glow bar */}
          <div style={{
            height: "2.5px",
            background: `linear-gradient(90deg, transparent 0%, ${CYAN}77 40%, ${CYAN}aa 50%, ${CYAN}77 60%, transparent 100%)`,
            filter: "drop-shadow(0 0 4px rgba(111,230,193,0.5))",
          }} />
          {/* Content area */}
          <div style={{ padding: "20px 20px 22px 20px", position: "relative", flex: 1 }}>
            {/* Diagonal texture */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03, pointerEvents: "none" }}>
              <defs>
                <pattern id={`diag-${index}`} width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="16" stroke="#6FE6C1" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#diag-${index})`} />
            </svg>
            {/* Ghost number watermark */}
            <div style={{
              position: "absolute", right: "12px", bottom: "-4px",
              fontFamily: "'Furore', sans-serif", fontSize: "80px",
              lineHeight: 1, letterSpacing: "-0.05em",
              color: "rgba(111,230,193,0.05)", userSelect: "none", pointerEvents: "none",
            }}>{num}</div>
            
            {/* Number badge — premium contour border */}
            <div style={{
              display: "inline-flex", marginBottom: "14px",
              background: `linear-gradient(135deg, ${CYAN}88 0%, ${CYAN}33 100%)`,
              clipPath: CLIP_PATH_SM,
              padding: "1.2px",
            }}>
              <div style={{
                background: "rgba(0,12,6,0.95)",
                clipPath: `polygon(0 0, calc(100% - 11.2px) 0, 100% 11.2px, 100% 100%, 11.2px 100%, 0 calc(100% - 11.2px))`,
                padding: "3px 10px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "10px", color: CYAN, letterSpacing: "0.15em", lineHeight: 1 }}>{num}</span>
              </div>
            </div>

            {/* Label */}
            <p style={{
              fontFamily: "'Furore', sans-serif", fontSize: "15px", fontWeight: 400,
              color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: 1.35,
              letterSpacing: "0.03em", textTransform: "uppercase",
              position: "relative", zIndex: 1,
            }}>{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slider block ─── */
interface SliderBlockProps {
  current: number;
  onPrev: () => void;
  onNext: () => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
}

function SliderBlock({ current, onPrev, onNext, onTouchStart, onTouchEnd }: SliderBlockProps) {
  const [isHovered, setIsHovered] = useState(false);
  const slides = Array.from({ length: TOTAL_SLIDES }, (_, i) => i);
  const num = String(current + 1).padStart(2, "0");
  const total = String(TOTAL_SLIDES).padStart(2, "0");

  return (
    <div 
      className={`results-slider-wrapper ${isHovered ? "is-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .results-slider-wrapper.is-hovered {
            transform: translateY(-10px);
          }
        }
      `}} />
      {/* Slide: 4:3 ratio */}
      <div
        style={{ position: "relative", width: "100%", paddingTop: "75%", marginBottom: "20px" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Glow halo behind frame */}
        <div style={{
          position: "absolute", inset: "-4px",
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(111,230,193,0.06) 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        {/* Border contour wrapper */}
        <div style={{
          position: "absolute", inset: 0,
          background: isHovered ? CYAN : `linear-gradient(135deg, ${CYAN}ee 0%, ${CYAN}22 100%)`,
          padding: "1.5px", clipPath: CLIP_PATH,
          filter: isHovered ? `drop-shadow(0 0 20px ${CYAN}55) drop-shadow(0 20px 50px rgba(0,0,0,0.8))` : "drop-shadow(0 20px 50px rgba(0,0,0,0.8))",
          transition: "all 0.3s ease",
        }}>
          <div style={{
            width: "100%", height: "100%",
            clipPath: `polygon(0 0, calc(100% - ${CUT - 1.5}px) 0, 100% ${CUT - 1.5}px, 100% 100%, ${CUT - 1.5}px 100%, 0 calc(100% - ${CUT - 1.5}px))`,
            background: "linear-gradient(150deg, rgba(0,30,16,0.98) 0%, rgba(0,4,2,1) 100%)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "12px", color: `rgba(111,230,193,0.2)`,
            position: "relative", overflow: "hidden",
          }}>
            {/* Dot grid texture */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `radial-gradient(circle, rgba(111,230,193,0.08) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
              pointerEvents: "none",
            }} />
            {/* Radial center glow */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 50% at 50% 45%, rgba(111,230,193,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
            {/* Crosshair */}
            <svg style={{ position: "absolute", opacity: 0.08, pointerEvents: "none" }} width="60" height="60" viewBox="0 0 60 60">
              <path d="M30 0V60M0 30H60" stroke="#6FE6C1" strokeWidth="0.8" />
              <circle cx="30" cy="30" r="14" fill="none" stroke="#6FE6C1" strokeWidth="0.8" />
            </svg>
            {/* Photo icon */}
            <div style={{
              width: "58px", height: "58px", borderRadius: "50%",
              border: "1px solid rgba(111,230,193,0.2)",
              background: "rgba(111,230,193,0.04)",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", zIndex: 1,
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "8px", letterSpacing: "0.35em", textTransform: "uppercase", opacity: 0.4, position: "relative", zIndex: 1 }}>
              Результат {num}
            </span>
          </div>
        </div>

        {/* Corner L accents */}
        <div style={{ position: "absolute", top: "10px", left: "10px", width: "24px", height: "24px", borderTop: `2px solid ${CYAN}`, borderLeft: `2px solid ${CYAN}`, opacity: 0.5, zIndex: 3 }} />
        <div style={{ position: "absolute", bottom: "10px", right: "10px", width: "24px", height: "24px", borderBottom: `2px solid ${CYAN}`, borderRight: `2px solid ${CYAN}`, opacity: 0.35, zIndex: 3 }} />

        {/* HUD counter — bottom right inside */}
        <div style={{ position: "absolute", bottom: "14px", left: "14px", zIndex: 4, display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "6px", height: "6px", background: CYAN, opacity: 0.6, borderRadius: "50%" }} />
          <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "11px", color: CYAN, opacity: 0.45, letterSpacing: "0.08em" }}>
            {num} / {total}
          </span>
        </div>
      </div>

      {/* Navigation row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        {/* Progress track */}
        <div style={{ flex: 1, height: "3px", background: "rgba(111,230,193,0.1)", borderRadius: "2px", overflow: "hidden", position: "relative" }}>
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: `${((current + 1) / TOTAL_SLIDES) * 100}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${CYAN}88, ${CYAN})`,
            borderRadius: "2px",
            transition: "width 0.35s ease",
            boxShadow: `0 0 8px ${CYAN}66`,
          }} />
        </div>

        {/* Dot count + Prev / Next */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "10px", color: CYAN, opacity: 0.4, letterSpacing: "0.06em" }}>{num}/{total}</span>
          {(["prev", "next"] as const).map((dir) => {
            const isDisabled = dir === "prev" ? current === 0 : current === TOTAL_SLIDES - 1;
            const bCut = 12;
            const bClip = `polygon(0 0, calc(100% - ${bCut}px) 0, 100% ${bCut}px, 100% 100%, ${bCut}px 100%, 0 calc(100% - ${bCut}px))`;
            return (
              <div key={dir} style={{
                position: "relative", width: "42px", height: "42px",
                padding: "1.2px", clipPath: bClip,
                background: isDisabled ? "rgba(111,230,193,0.08)" : `linear-gradient(135deg, ${CYAN}99 0%, ${CYAN}33 100%)`,
                opacity: isDisabled ? 0.3 : 1,
                transition: "all 0.2s ease",
              }}>
                <button
                  onClick={dir === "prev" ? onPrev : onNext}
                  disabled={isDisabled}
                  style={{
                    width: "100%", height: "100%",
                    background: isDisabled ? "transparent" : `linear-gradient(145deg, rgba(0,44,22,0.95), rgba(0,10,4,0.98))`,
                    clipPath: `polygon(0 0, calc(100% - ${bCut - 1.2}px) 0, 100% ${bCut - 1.2}px, 100% 100%, ${bCut - 1.2}px 100%, 0 calc(100% - ${bCut - 1.2}px))`,
                    cursor: isDisabled ? "default" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "none",
                  }}
                >
                  <svg
                    width="14" height="14" viewBox="0 0 16 16" fill="none"
                    style={{ transform: dir === "prev" ? "rotate(180deg)" : "none", opacity: isDisabled ? 0.4 : 0.8 }}
                  >
                    <path d="M3 8H13M9 4L13 8L9 12" stroke={CYAN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
