import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";
const CLIP_OUTER = (s: number) =>
  `polygon(${s}px 0, 100% 0, 100% calc(100% - ${s}px), calc(100% - ${s}px) 100%, 0 100%, 0 ${s}px)`;

const products = [
  {
    id: "01",
    tag: "ПРЕПАРАТ",
    title: "ЖКИМ",
    subtitle: "Жидкая Квантовая\nИнформационная Матрица",
    description:
      "Инновационный состав для обработки и эффективного лечения раневых поверхностей. Технология обеспечивает глубокое проникновение активных компонентов и стимулирует естественные процессы самоочищения раны.",
    chips: ["Антимикробный эффект", "Регенерация тканей", "Аппликация"],
  },
  {
    id: "02",
    tag: "БИОМАТРИЦА",
    title: "Биоматрица Гаряева",
    subtitle: "КИК-1, 2, 3",
    description:
      "Комплекс информационных матриц для глубокой активации регенеративных процессов на клеточном уровне. Способствует быстрому восстановлению тканей без образования гипертрофированных рубцов.",
    chips: ["Клеточный уровень", "Нет рубцов", "Информационная матрица"],
  },
];

export function WoundTreatmentProductsSection() {
  return (
    <section
      id="products"
      style={{ backgroundColor: "#001d14", position: "relative", overflow: "hidden" }}
    >
      {/* ── Ambient glows ── */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "40%", height: "100%", background: "radial-gradient(ellipse 70% 80% at 10% 50%, rgba(111,230,193,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(111,230,193,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 80% 100% at 50% 50%, black 40%, transparent 100%)", pointerEvents: "none" }} />

      {/* ════════ MOBILE ════════ */}
      <div className="md:hidden" style={{ padding: "48px 0 56px" }}>
        <Container>
          {/* Section heading */}
          <div style={{ marginBottom: "32px" }}>
            <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "40px", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.95, margin: 0 }}>
              Применяемые<br />
              <span style={{ WebkitTextStroke: "1.5px #6FE6C1", color: "transparent" }}>препараты</span>
            </h2>
          </div>

          {products.map((p) => (
            <div key={p.id} style={{ marginBottom: "32px" }}>
              {/* Photo block */}
              <div style={{ position: "relative", background: "#6FE6C1", clipPath: CLIP_OUTER(18), padding: "1.5px", marginBottom: "12px", filter: "drop-shadow(0 6px 24px rgba(0,0,0,0.7))" }}>
                <div style={{ position: "relative", background: "#000c06", clipPath: CLIP_OUTER(17), aspectRatio: "1 / 1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(111,230,193,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                  <div style={{ position: "absolute", top: 20, left: 20, width: 40, height: 40, borderTop: "2px solid rgba(111,230,193,0.5)", borderLeft: "2px solid rgba(111,230,193,0.5)" }} />
                  <div style={{ position: "absolute", bottom: 20, right: 20, width: 40, height: 40, borderBottom: "2px solid rgba(111,230,193,0.5)", borderRight: "2px solid rgba(111,230,193,0.5)" }} />
                  <div style={{ position: "absolute", bottom: -16, right: 8, fontFamily: "'Furore', sans-serif", fontSize: 120, color: "transparent", WebkitTextStroke: "2px rgba(111,230,193,0.08)", lineHeight: 0.8, userSelect: "none" }}>{p.id}</div>
                  <svg style={{ width: 64, height: 64, color: CYAN, opacity: 0.5, marginBottom: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span style={{ fontFamily: "'Furore', sans-serif", fontSize: 12, color: CYAN, letterSpacing: "0.25em", opacity: 0.6 }}>МЕСТО ДЛЯ ФОТО</span>
                  {/* Tag chip */}
                  <div style={{ position: "absolute", bottom: 14, right: 14, background: "rgba(111,230,193,0.35)", clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)", padding: "1px" }}>
                    <div style={{ background: "rgba(0,18,12,0.88)", clipPath: "polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px)", padding: "5px 12px" }}>
                      <span style={{ fontFamily: "'Furore', sans-serif", fontSize: 10, letterSpacing: "0.2em", color: CYAN, textTransform: "uppercase" }}>{p.tag}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text block */}
              <div style={{ background: "#6FE6C1", clipPath: CLIP_OUTER(14), padding: "1.5px" }}>
                <div style={{ background: "linear-gradient(135deg, #002416 0%, #000c06 100%)", clipPath: CLIP_OUTER(13), padding: "24px 20px 28px" }}>
                  <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: 24, fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.1, margin: "0 0 4px" }}>{p.title}</h3>
                  <p style={{ fontFamily: "'Furore', sans-serif", fontSize: 14, color: CYAN, margin: "0 0 16px", lineHeight: 1.3, whiteSpace: "pre-line" }}>{p.subtitle}</p>
                  <div style={{ height: 1, background: "linear-gradient(90deg, #6FE6C1, rgba(111,230,193,0.1) 60%, transparent)", marginBottom: 16 }} />
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, margin: "0 0 20px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                    {p.description}
                  </p>
                  <button style={{ width: "100%", height: 60, background: CYAN, clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)", border: "none", cursor: "pointer", fontFamily: "'Furore', sans-serif", fontSize: 13, letterSpacing: "0.14em", color: "#001d14", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                    Получить консультацию
                    <svg width="18" height="8" viewBox="0 0 18 8" fill="none"><path d="M0 4H16M12 1L16 4L12 7" stroke="#001d14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* ════════ DESKTOP ════════ */}
      <div className="hidden md:block" style={{ position: "relative", padding: "90px 0 110px" }}>
        {/* Decorative bg shapes */}
        <div style={{ position: "absolute", top: "0", left: "-20%", width: "800px", height: "400px", background: "linear-gradient(90deg, rgba(111,230,193,0.03) 0%, transparent 100%)", transform: "skewY(-15deg)", borderTop: "1px solid rgba(111,230,193,0.1)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "-100px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle at 30% 30%, rgba(111,230,193,0.05) 0%, rgba(0,0,0,0) 80%)", border: "1px solid rgba(111,230,193,0.06)", pointerEvents: "none" }} />

        <Container style={{ position: "relative", zIndex: 1 }}>
          {/* Section heading */}
          <div style={{ marginBottom: "60px" }}>
            <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 400, color: "#fff", textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 0.92, margin: 0 }}>
              Применяемые<br />
              <span style={{ WebkitTextStroke: "1.5px #6FE6C1", color: "transparent" }}>препараты</span>
            </h2>
          </div>

          {/* Product cards — each wrapped in a border block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {products.map((p, i) => (
              <div key={p.id}>
                {/* ── Outer diamond-cut border wrapper ── */}
                <div style={{ background: "#6FE6C1", clipPath: CLIP_OUTER(24), padding: "1.5px", filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.7))" }}>
                  <div style={{ background: "linear-gradient(135deg, #001a0f 0%, #000a05 100%)", clipPath: CLIP_OUTER(23), padding: "28px" }}>

                    {/* ── Inner row: photo + text ── */}
                    <div style={{ display: "flex", gap: "48px", alignItems: "center", flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}>

                      {/* Photo card */}
                      <div style={{ flexShrink: 0, width: "380px", height: "380px", position: "relative", background: "#000c06", clipPath: "polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)", overflow: "hidden" }}>
                        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(111,230,193,0.07) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                        <div style={{ position: "absolute", top: 28, left: 28, width: 50, height: 50, borderTop: "1.5px solid rgba(111,230,193,0.5)", borderLeft: "1.5px solid rgba(111,230,193,0.5)" }} />
                        <div style={{ position: "absolute", bottom: 28, right: 28, width: 50, height: 50, borderBottom: "1.5px solid rgba(111,230,193,0.5)", borderRight: "1.5px solid rgba(111,230,193,0.5)" }} />
                        <div style={{ position: "absolute", bottom: -20, right: 10, fontFamily: "'Furore', sans-serif", fontSize: 160, color: "transparent", WebkitTextStroke: "2px rgba(111,230,193,0.06)", lineHeight: 0.8, userSelect: "none" }}>{p.id}</div>
                        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                          <svg style={{ width: 80, height: 80, color: CYAN, opacity: 0.4, marginBottom: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span style={{ fontFamily: "'Furore', sans-serif", fontSize: 13, color: CYAN, letterSpacing: "0.25em", opacity: 0.5 }}>МЕСТО ДЛЯ ФОТО</span>
                        </div>
                        <div style={{ position: "absolute", bottom: 18, left: 22, fontFamily: "'Furore', sans-serif", fontSize: 12, letterSpacing: "0.18em", color: "rgba(111,230,193,0.45)" }}>{p.id}</div>
                        <div style={{ position: "absolute", bottom: 14, right: 16, background: "rgba(111,230,193,0.35)", clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)", padding: "1px" }}>
                          <div style={{ background: "rgba(0,18,12,0.82)", clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)", padding: "6px 16px" }}>
                            <span style={{ fontFamily: "'Furore', sans-serif", fontSize: 11, letterSpacing: "0.22em", color: CYAN, textTransform: "uppercase" }}>{p.tag}</span>
                          </div>
                        </div>
                        {/* SVG border overlay */}
                        <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", filter: "drop-shadow(0 0 6px rgba(111,230,193,0.6))", overflow: "visible" }} viewBox="0 0 380 380" preserveAspectRatio="none" fill="none">
                          <polyline points="16,1 364,1 379,16 379,364 364,379 16,379 1,364 1,16 16,1" stroke="#6FE6C1" strokeWidth="1.5" fill="none" />
                        </svg>
                      </div>

                      {/* Text block */}
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        {/* Title */}
                        <p style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(22px, 2.2vw, 30px)", fontWeight: 400, lineHeight: 1.15, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6, textShadow: "0 0 40px rgba(111,230,193,0.15)" }}>
                          {p.title}<br />
                          <span style={{ color: CYAN }}>{p.subtitle.split("\n").pop()}</span>
                        </p>

                        {/* Divider */}
                        <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, #6FE6C1 0%, rgba(111,230,193,0.1) 60%, transparent 100%)", margin: "20px 0" }} />

                        {/* Description — 2-line clamp */}
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", maxWidth: 520, marginBottom: 28, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                          {p.description}
                        </p>

                        {/* Credential chips */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
                          {p.chips.map((chip) => (
                            <div key={chip} style={{ display: "inline-block", background: "rgba(111,230,193,0.45)", clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)", padding: "1px" }}>
                              <div style={{ background: "#061a10", clipPath: "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)", padding: "5px 14px" }}>
                                <span style={{ fontFamily: "'Furore', sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: "0.12em", color: CYAN, textTransform: "uppercase", display: "block" }}>{chip}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <div style={{ background: CYAN, clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)", padding: "1.5px", display: "inline-block", width: "fit-content", alignSelf: "flex-start" }}>
                          <button
                            style={{ height: 72, background: "linear-gradient(135deg, #002416 0%, #000e08 100%)", clipPath: "polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)", border: "none", padding: "0 44px", cursor: "pointer", fontFamily: "'Furore', sans-serif", fontSize: 14, letterSpacing: "0.16em", color: CYAN, textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 16, transition: "background 0.3s ease" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #003820 0%, #001810 100%)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg, #002416 0%, #000e08 100%)"; }}
                          >
                            Получить консультацию
                            <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                              <path d="M0 4H20M16 1L20 4L16 7" stroke="#6FE6C1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom divider */}
          <div style={{ marginTop: "72px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.18) 40%, rgba(111,230,193,0.18) 60%, transparent)" }} />
        </Container>
      </div>
    </section>
  );
}
