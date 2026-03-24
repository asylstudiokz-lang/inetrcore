import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";
const CLIP = (s: number) =>
  `polygon(${s}px 0, 100% 0, 100% calc(100% - ${s}px), calc(100% - ${s}px) 100%, 0 100%, 0 ${s}px)`;

const usageAreas = [
  {
    title: "Косметология",
    desc: "Восстановление эстетического вида кожи и стимуляция клеточного обновления.",
  },
  {
    title: "Некрозы",
    desc: "Эффективная борьба с омертвением тканей и деструктивными процессами кожного покрова.",
  },
  {
    title: "Обморожения",
    desc: "Лечение термических поражений любой сложности, включая глубокие слои дермы.",
  },
  {
    title: "Гангрена стопы",
    desc: "Комплексная терапия тяжелых сосудистых осложнений и трофических нарушений.",
  },
  {
    title: "Ожоги и пролежни",
    desc: "Ускоренное заживление ран и предотвращение образования грубых рубцов.",
  },
  {
    title: "Трофические язвы",
    desc: "Стимуляция кровотока и регенерация длительно незаживающих раневых дефектов.",
  },
];

export function WoundTreatmentUsageSection() {
  return (
    <section
      id="usage"
      style={{ backgroundColor: "#001d14", position: "relative", overflow: "hidden" }}
    >
      {/* ── Background texture ── */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(111,230,193,0.015) 0px, rgba(111,230,193,0.015) 1px, transparent 1px, transparent 52px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-100px", left: "-80px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(111,230,193,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* ════════ MOBILE ════════ */}
      <div className="md:hidden py-[60px]">
        <Container>
          <div className="mb-[32px]">
            <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "40px", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.95, margin: "0 0 8px" }}>
              ЖКИМ<br />
              <span style={{ WebkitTextStroke: "1px #6FE6C1", color: "transparent" }}>используется</span>
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>только для наружнего применения</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
            {usageAreas.map((area, i) => (
              <div key={i} style={{ background: "rgba(111,230,193,0.15)", clipPath: CLIP(14), padding: "1px" }}>
                <div style={{ background: "linear-gradient(135deg, #00120a 0%, #000804 100%)", clipPath: CLIP(13), padding: "20px 18px", position: "relative" }}>
                   <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                     <span style={{ fontFamily: "'Furore', sans-serif", fontSize: 10, color: CYAN, opacity: 0.6, letterSpacing: "0.15em" }}>{String(i + 1).padStart(2, "0")}</span>
                     <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(111,230,193,0.2), transparent)" }} />
                   </div>
                   <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: 18, color: "#fff", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.02em" }}>{area.title}</h3>
                   <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: 0 }}>{area.desc}</p>
                </div>
              </div>
            ))}
          </div>


        </Container>
      </div>

      {/* ════════ DESKTOP ════════ */}
      <div className="hidden md:block" style={{ padding: "100px 0", position: "relative" }}>
        <Container style={{ position: "relative", zIndex: 1 }}>

          {/* ── Top: heading + subtitle ── */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(44px, 5vw, 68px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92, margin: 0 }}>
              ЖКИМ<br />
              <span style={{ WebkitTextStroke: "1.5px #6FE6C1", color: "transparent" }}>используется</span>
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "right", lineHeight: 1.8, paddingBottom: 6, maxWidth: 260 }}>
              только для<br />наружнего применения
            </p>
          </div>

          {/* ── 3-column grid of detailed cards ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
            {usageAreas.map((area, i) => (
              <div
                key={i}
                className="group transition-all duration-500 hover:translate-y-[-10px] [filter:drop-shadow(0_0_10px_rgba(0,0,0,0.4))] hover:[filter:drop-shadow(0_12px_40px_rgba(111,230,193,0.35))]"
                style={{
                  background: "rgba(111,230,193,0.18)",
                  clipPath: CLIP(20),
                  padding: "1.5px"
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #000c06 0%, #00140a 100%)",
                    clipPath: CLIP(19),
                    padding: "36px 32px 42px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  }}
                >
                  {/* Subtle corner HUD element */}
                  <div 
                    style={{ 
                      position: "absolute", top: 18, left: 18, width: 14, height: 14, 
                      borderTop: "1px solid rgba(111,230,193,0.3)", borderLeft: "1px solid rgba(111,230,193,0.3)",
                      transition: "all 0.4s ease"
                    }} 
                    className="group-hover:border-white/40 group-hover:scale-110"
                  />

                  {/* Serial Number */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <span style={{ fontFamily: "'Furore', sans-serif", fontSize: 13, color: CYAN, opacity: 0.65, letterSpacing: "0.2em" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-[#6FE6C1]/25 to-transparent group-hover:from-[#6FE6C1]/60 transition-all duration-500" />
                  </div>

                  {/* Title */}
                  <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: "22px", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.1, marginBottom: 14 }}>
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: 400, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                    {area.desc}
                  </p>

                  {/* Bottom indicator */}
                  <div style={{ marginTop: "auto", paddingTop: 28, display: "flex", alignItems: "center", gap: 8 }}>
                    <div className="w-10 h-[1px] bg-gradient-to-r from-[#6FE6C1] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    <div style={{ width: 4, height: 4, background: CYAN, borderRadius: "50%", boxShadow: `0 0 8px ${CYAN}` }} className="group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>


        </Container>
      </div>
    </section>
  );
}
