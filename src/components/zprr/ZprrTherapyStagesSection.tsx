import { Container } from "../ui/Container";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

/* ── Tag chip (same pattern as DirectionsSection) ── */
function TagChip({ label }: { label: string }) {
  const cut = 9;
  return (
    <div style={{ display: "inline-block", background: "#6FE6C1", clipPath: CLIP(cut), padding: "1px" }}>
      <div style={{ background: "#001a0f", clipPath: CLIP(cut), padding: "5px 12px" }}>
        <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "9px", letterSpacing: "0.22em", color: "#6FE6C1", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          {label}
        </span>
      </div>
    </div>
  );
}

const stages = [
  {
    num: 1,
    tag: "Подготовка",
    title: "Очищение",
    description: "Для подготовки к сеансам прохождение антипаразитарной программы комфортно в домашних условиях: очищение организма от паразитов, а также очищение ЖКТ от патогенной микрофлоры, бактерий и слизи.",
    accent: true,
    // Large background SVG — concentric rings (purification)
    BgSvg: () => (
      <svg className="absolute bottom-0 right-0 w-[60%] pointer-events-none opacity-[0.07]" viewBox="0 0 200 200" fill="none">
        <circle cx="160" cy="160" r="130" stroke="#6FE6C1" strokeWidth="1"/>
        <circle cx="160" cy="160" r="90" stroke="#6FE6C1" strokeWidth="1"/>
        <circle cx="160" cy="160" r="54" stroke="#6FE6C1" strokeWidth="1"/>
        <circle cx="160" cy="160" r="22" fill="rgba(111,230,193,0.12)" stroke="#6FE6C1" strokeWidth="1"/>
        {[0,45,90,135,180,225,270,315].map((a, i) => (
          <line key={i}
            x1={160 + Math.cos(a*Math.PI/180)*22} y1={160 + Math.sin(a*Math.PI/180)*22}
            x2={160 + Math.cos(a*Math.PI/180)*130} y2={160 + Math.sin(a*Math.PI/180)*130}
            stroke="#6FE6C1" strokeWidth="0.7" />
        ))}
      </svg>
    ),
  },
  {
    num: 2,
    tag: "Нутрициология",
    title: "Восстановление и наполнение",
    description: "Приём витаминно-минеральных комплексов направлен на восполнение дефицитов, запуск процессов регенерации организма и головного мозга, восстановление баланса кишечной микрофлоры, подготовку тканей и фасций, нормализацию работы митохондрий, а также устранение дисплазии соединительной ткани.",
    accent: false,
    // Background SVG — wave strands (regeneration)
    BgSvg: () => (
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" viewBox="0 0 260 180" fill="none" preserveAspectRatio="xMidYMid slice">
        {[0,1,2,3,4,5].map(i => (
          <path key={i} d={`M0 ${30+i*26} Q65 ${14+i*26} 130 ${30+i*26} T260 ${30+i*26}`} stroke="#6FE6C1" strokeWidth="1.2" fill="none"/>
        ))}
        {[40,100,160,220].map((x,i) => (
          <line key={i} x1={x} y1="30" x2={x} y2="158" stroke="#6FE6C1" strokeWidth="0.6" strokeDasharray="4 7"/>
        ))}
      </svg>
    ),
  },
  {
    num: 3,
    tag: "Остеопатия",
    title: "Остеопатическая коррекция",
    description: "Налаживание мозгового кровообращения радикальным образом (с помощью авторской остеопатической методики).",
    accent: false,
    // Background SVG — hexagons (skull/bone structure)
    BgSvg: () => (
      <svg className="absolute bottom-0 right-0 w-[75%] pointer-events-none opacity-[0.07]" viewBox="0 0 240 200" fill="none">
        {([[100,60],[60,30],[140,30],[30,60],[170,60],[60,110],[140,110],[100,140],[30,110],[170,110]] as [number,number][]).map(([cx,cy],i) => (
          <polygon key={i}
            points={[0,1,2,3,4,5].map(k=>{const a=(60*k-30)*Math.PI/180;return `${cx+26*Math.cos(a)},${cy+26*Math.sin(a)}`;}).join(' ')}
            stroke="#6FE6C1" strokeWidth="1" fill="none"/>
        ))}
      </svg>
    ),
  },
];

/* ── Shared card inner content ── */
function StageCard({ stage, large = false }: { stage: typeof stages[0]; large?: boolean }) {
  return (
    <div
      className="group cursor-default h-full"
      style={{
        background: "#6FE6C1",
        clipPath: CLIP(22),
        padding: "1.5px",
        transition: "filter 0.35s ease, transform 0.35s ease",
        filter: "drop-shadow(0 0 14px rgba(111,230,193,0.15)) drop-shadow(0 6px 24px rgba(0,0,0,0.5))",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.filter = "drop-shadow(0 0 30px rgba(111,230,193,0.45)) drop-shadow(0 14px 44px rgba(0,0,0,0.85))";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.filter = "drop-shadow(0 0 14px rgba(111,230,193,0.15)) drop-shadow(0 6px 24px rgba(0,0,0,0.5))";
        el.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          background: stage.accent
            ? "linear-gradient(150deg, #00391e 0%, #001810 100%)"
            : "linear-gradient(150deg, #002214 0%, #000e08 100%)",
          clipPath: CLIP(21),
          padding: large ? "36px 32px" : "28px 26px",
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
        <div style={{
          position: "absolute", bottom: "-10px", right: "16px",
          fontFamily: "'Furore', sans-serif",
          fontSize: large ? "clamp(100px, 12vw, 180px)" : "clamp(80px, 9vw, 140px)",
          lineHeight: 1, color: "transparent",
          WebkitTextStroke: "1px rgba(111,230,193,0.09)",
          userSelect: "none", pointerEvents: "none", letterSpacing: "-0.04em",
        }}>
          0{stage.num}
        </div>

        {/* Top: tag */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: large ? "32px" : "22px" }}>
          <TagChip label={stage.tag} />
          {/* Corner accent */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ opacity: 0.25 }}>
            <path d="M20 0 L20 20 L0 20" stroke="#6FE6C1" strokeWidth="1.5"/>
          </svg>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", zIndex: 1 }}>
          <h3 style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: large ? "clamp(22px, 2.2vw, 32px)" : "clamp(16px, 1.5vw, 22px)",
            fontWeight: 400, color: "#ffffff",
            textTransform: "uppercase", lineHeight: 1.2,
            margin: "0 0 14px 0", letterSpacing: "0.03em",
          }}>
            {stage.title}
          </h3>

          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: large ? "15px" : "13px",
            fontWeight: 400, color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, margin: "0 0 24px 0",
          }}>
            {stage.description}
          </p>

          <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(111,230,193,0.35) 0%, transparent 70%)" }} />
        </div>
      </div>
    </div>
  );
}

export function ZprrTherapyStagesSection() {
  return (
    <section id="therapy-stages" className="relative overflow-hidden" style={{ backgroundColor: "#001d14" }}>

      {/* ── Ambient glows ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(111,230,193,0.06) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", top: "-100px", right: "-80px", width: "380px", height: "380px", borderRadius: "50%", border: "1px solid rgba(111,230,193,0.07)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-40px", right: "-20px", width: "240px", height: "240px", borderRadius: "50%", border: "1px solid rgba(111,230,193,0.1)", pointerEvents: "none" }} />
      <svg style={{ position: "absolute", bottom: "20px", left: 0, pointerEvents: "none", opacity: 0.12 }} width="180" height="120" viewBox="0 0 180 120" fill="none">
        <line x1="0" y1="120" x2="180" y2="0" stroke="#6FE6C1" strokeWidth="1"/>
        <line x1="20" y1="120" x2="180" y2="20" stroke="#6FE6C1" strokeWidth="1"/>
        <line x1="40" y1="120" x2="180" y2="40" stroke="#6FE6C1" strokeWidth="1"/>
        <line x1="60" y1="120" x2="180" y2="60" stroke="#6FE6C1" strokeWidth="1"/>
      </svg>

      {/* ── MOBILE ── */}
      <div className="md:hidden py-[60px]" style={{ position: "relative" }}>
        <Container style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "38px", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.95, margin: "0 0 32px 0" }}>
            Этапы <span style={{ color: "transparent", WebkitTextStroke: "1.5px #6FE6C1" }}>Терапии</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {stages.map(stage => (
              <div key={stage.num} style={{ minHeight: "240px" }}>
                <StageCard stage={stage} large={false} />
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.18) 40%, rgba(111,230,193,0.18) 60%, transparent)" }} />
        </Container>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative" style={{ padding: "100px 0" }}>
        <Container style={{ position: "relative", zIndex: 1 }}>

          {/* Heading row */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "60px" }}>
            <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(52px, 5.5vw, 80px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92, margin: 0 }}>
              Этапы <span style={{ color: "transparent", WebkitTextStroke: "1.5px #6FE6C1" }}>Терапии</span>
            </h2>
            <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "13px", letterSpacing: "0.18em", color: "rgba(111,230,193,0.45)", paddingBottom: "8px" }}>
              03 этапа
            </span>
          </div>

          {/* Two-column layout: large card left, 3 stacked cards right */}
          <div style={{ display: "grid", gridTemplateColumns: "0.56fr 1fr", gap: "14px", alignItems: "start" }}>

            {/* Card 1 — Очищение + CTA button below */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ height: "452px" }}>
                <StageCard stage={stages[0]} large />
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=77021737192&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                <button
                  style={{
                    fontFamily: "'Furore', sans-serif",
                    fontSize: "11px",
                    color: "#000",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    padding: "16px 24px",
                    background: "linear-gradient(135deg, #6FE6C1 0%, #059669 100%)",
                    clipPath: CLIP(10),
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 0 20px rgba(111,230,193,0.3)",
                    width: "100%",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 35px rgba(111,230,193,0.55)"; (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(111,230,193,0.3)"; (e.currentTarget as HTMLButtonElement).style.filter = "none"; }}
                >
                  Получить консультацию
                </button>
              </a>
            </div>

            {/* Right column: 3 cards stacked, height by content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

              {/* Card 2 */}
              <div>
                <StageCard stage={stages[1]} />
              </div>

              {/* Card 3 */}
              <div>
                <StageCard stage={stages[2]} />
              </div>


            </div>
          </div>

          <div style={{ marginTop: "64px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.18) 40%, rgba(111,230,193,0.18) 60%, transparent)" }} />
        </Container>
      </div>
    </section>
  );
}
