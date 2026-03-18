import { useState } from "react";
import svgPaths from "@/imports/svg-5vmpngdvp6";
import { Container } from "./ui/Container";

/*
 * EducationSection — Figma coordinates:
 *   Section start: page y=3322px
 *   Heading: top=3322 → rel=0, left=40px
 *   Accordion 1 bg: top=3428 (rel=106px), h=68px, left=22px, w=356px
 *   Accordion 2 bg: top=3508 (rel=186px), h=90px
 */

function ChevronSVG({ open }: { open: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        right: "20px",
        top: "50%",
        transform: `translateY(-50%) ${open ? "rotate(180deg)" : ""}`,
        transition: "transform 0.25s ease",
        width: "21px",
        height: "11px",
      }}
    >
      <div className="absolute inset-[-9.42%_-5.17%_-19.75%_-5.17%]">
        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1701 14.2081">
          <path d={svgPaths.p53d640} stroke="#95C1A7" strokeWidth="3" />
        </svg>
      </div>
    </div>
  );
}

const educationData = [
  {
    title: "Образование",
    content: [
      { subject: "Педиатрия", institution: "Университет им. Асфендиярова, г. Алматы" },
      { subject: "Интернатура по детской хирургии", institution: "ГМУ, г. Семей" },
      { subject: "ЦМИР", institution: "г. Усть-Каменогорск" },
      { subject: "Клиническая ординатура по сердечно-сосудистой хирургии", institution: "НИИПК им. Е.Н. Мешалкина, г. Новосибирск" },
      { subject: "Отделение кардиохирургии", institution: "ВКОБ, г. Усть-Каменогорск" },
      { subject: "Стажировка по детской кардиохирургии", institution: "GOSH, Лондон" },
      { subject: "Эндоскопическая кардиохирургия", institution: "JINAN Hospital, Китай" },
      { subject: "Гибридная кардиохирургия", institution: "FUWAI Hospital, г. Пекин" },
      { subject: "Отделение кардиохирургии", institution: "ННЦХ им. А.Н. Сызганова" },
    ],
    mobileH: 68,
    borderColor: "#a6ffca",
    gradientAngle: "84.7007deg",
  },
  {
    title: "Профессиональная переподготовка",
    content: [
      { subject: "Прикладная кинезиология", institution: "Дэвид Лиф, Москва" },
      { subject: "Краниосакральная терапия", institution: "Анто Гонзале, основатель испанской школы остеопатии" },
      { subject: "Остеопатическая методика «Краниобаланс»", institution: "Владимир Животов, Москва" },
      { subject: "Остеопластика", institution: "Виталий Ким" },
      { subject: "Профпереподготовка по остеопатии", institution: "АНПОО «Интенсив»" },
    ],
    mobileH: 90,
    borderColor: "#8ba791",
    gradientAngle: "85.9912deg",
  },
];

function ContentList({ items, small }: { items: { subject: string; institution: string }[]; small?: boolean }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: small ? "10px" : "14px",
            paddingTop: i === 0 ? 0 : small ? "10px" : "12px",
            paddingBottom: small ? "10px" : "12px",
            borderBottom: i < items.length - 1 ? "1px solid rgba(111,230,193,0.15)" : "none",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: small ? "22px" : "26px",
              height: small ? "22px" : "26px",
              borderRadius: "50%",
              border: "1px solid rgba(111,230,193,0.5)",
              background: "rgba(111,230,193,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: small ? "10px" : "11px",
              fontWeight: 600,
              color: "#6FE6C1",
              marginTop: "1px",
            }}
          >
            {i + 1}
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: small ? "13px" : "15px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.95)",
                lineHeight: 1.4,
                marginBottom: "3px",
              }}
            >
              {item.subject}
            </div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: small ? "11.5px" : "13px",
                fontWeight: 400,
                color: "#95C1A7",
                lineHeight: 1.4,
              }}
            >
              {item.institution}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function DesktopTimeline({ items }: { items: { subject: string; institution: string }[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div style={{ position: "relative", paddingLeft: "48px" }}>
      {/* Vertical glowing line */}
      

      {items.map((item, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            position: "relative",
            marginBottom: i < items.length - 1 ? "6px" : "0",
            cursor: "default",
          }}
        >
          {/* Node on timeline */}
          <div style={{
            position: "absolute",
            left: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "18px", height: "18px",
            background: hovered === i ? "#6FE6C1" : "transparent",
            border: `2px solid ${hovered === i ? "#6FE6C1" : "transparent"}`,
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            transition: "all 0.25s ease",
            boxShadow: hovered === i ? "0 0 14px rgba(111,230,193,0.8)" : "none",
            zIndex: 2,
          }} />

          {/* Connector from node to card */}
          <div style={{
            position: "absolute",
            left: "-22px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "22px", height: "1px",
            background: hovered === i ? "rgba(111,230,193,0.6)" : "transparent",
            transition: "background 0.25s ease",
          }} />

          {/* Card — two-layer border along full contour incl. cut corners */}
          <div style={{
            background: hovered === i ? "rgba(111,230,193,0.35)" : "rgba(111,230,193,0.12)",
            clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            padding: "1px",
            transition: "all 0.25s ease",
            transform: hovered === i ? "translateX(4px)" : "translateX(0)",
          }}>
            <div style={{
              background: hovered === i
                ? "linear-gradient(135deg, rgba(111,230,193,0.08) 0%, rgba(0,30,18,0.95) 100%)"
                : "rgba(0,20,12,0.92)",
              clipPath: "polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 11px 100%, 0 calc(100% - 11px))",
              padding: "12px 20px 12px 16px",
              transition: "background 0.25s ease",
            }}>
              {/* Index badge + subject row */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                <span style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "10px",
                  color: "#6FE6C1",
                  opacity: 0.6,
                  letterSpacing: "0.1em",
                  flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "14px", fontWeight: 600,
                  color: hovered === i ? "#fff" : "rgba(255,255,255,0.85)",
                  lineHeight: 1.3,
                  transition: "color 0.25s",
                }}>{item.subject}</div>
              </div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px", fontWeight: 400,
                color: hovered === i ? "#6FE6C1" : "#95C1A7",
                lineHeight: 1.4,
                paddingLeft: "26px",
                transition: "color 0.25s",
                opacity: hovered === i ? 1 : 0.7,
              }}>{item.institution}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function EducationSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activePanel, setActivePanel] = useState(0);

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#001d14" }}>

      {/* ── MOBILE ── */}
      <div className="md:hidden" style={{ position: "relative", padding: "48px 0 56px" }}>

        {/* Subtle dot grid */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(111,230,193,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 90% 100% at 50% 50%, black 30%, transparent 100%)",
        }} />

        <Container className="relative">

          {/* Heading */}
          <div style={{ marginBottom: "32px" }}>
            <h2 style={{
              fontFamily: "'Furore', sans-serif",
              fontSize: "32px", fontWeight: 400,
              color: "#fff", lineHeight: 1.1,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              margin: 0,
            }}>
              Образование &amp;<br />
              <span style={{ color: "#6FE6C1" }}>подготовка</span>
            </h2>
          </div>

          {/* Accordion items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {educationData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index}>
                  {/* Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    style={{
                      width: "100%",
                      border: "none",
                      background: "none",
                      padding: 0,
                      cursor: "pointer",
                      outline: "none",
                      display: "block",
                    }}
                  >
                    {/* Two-layer clip-path border */}
                    <div style={{
                      background: isOpen ? "#6FE6C1" : "rgba(111,230,193,0.25)",
                      clipPath: "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                      padding: "1.5px",
                      transition: "background 0.3s ease",
                    }}>
                      <div style={{
                        background: isOpen
                          ? "linear-gradient(135deg, #0e4a28 0%, #062515 100%)"
                          : "rgba(0,20,12,0.9)",
                        clipPath: "polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)",
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        transition: "background 0.3s ease",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                          <span style={{
                            fontFamily: "'Furore', sans-serif",
                            fontSize: "26px", fontWeight: 400,
                            color: isOpen ? "#6FE6C1" : "rgba(111,230,193,0.25)",
                            lineHeight: 1,
                            transition: "color 0.3s ease",
                            flexShrink: 0,
                          }}>0{index + 1}</span>
                          <span style={{
                            fontFamily: "'Furore', sans-serif",
                            fontSize: "13px", fontWeight: 400,
                            color: isOpen ? "#fff" : "rgba(255,255,255,0.55)",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            lineHeight: 1.3,
                            textAlign: "left",
                            transition: "color 0.3s ease",
                          }}>{item.title}</span>
                        </div>
                        {/* Chevron */}
                        <div style={{
                          flexShrink: 0,
                          width: "20px", height: "20px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 6L11 1" stroke={isOpen ? "#6FE6C1" : "rgba(111,230,193,0.5)"} strokeWidth="1.8" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div style={{
                      marginTop: "4px",
                      background: "rgba(111,230,193,0.06)",
                      borderLeft: "2px solid rgba(111,230,193,0.3)",
                      borderBottom: "1px solid rgba(111,230,193,0.12)",
                      borderRight: "1px solid rgba(111,230,193,0.12)",
                      padding: "12px 16px 16px",
                    }}>
                      {item.content.map((entry, i) => (
                        <div key={i} style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          paddingTop: i === 0 ? 0 : "10px",
                          paddingBottom: "10px",
                          borderBottom: i < item.content.length - 1
                            ? "1px solid rgba(111,230,193,0.1)" : "none",
                        }}>
                          <span style={{
                            fontFamily: "'Furore', sans-serif",
                            fontSize: "10px",
                            color: "#6FE6C1",
                            opacity: 0.6,
                            flexShrink: 0,
                            marginTop: "2px",
                            letterSpacing: "0.08em",
                          }}>{String(i + 1).padStart(2, "0")}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "13px", fontWeight: 600,
                              color: "rgba(255,255,255,0.9)",
                              lineHeight: 1.4,
                              marginBottom: "2px",
                            }}>{entry.subject}</div>
                            <div style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "11.5px", fontWeight: 400,
                              color: "#95C1A7",
                              lineHeight: 1.4,
                            }}>{entry.institution}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block" style={{ position: "relative", padding: "80px 0 100px" }}>

        {/* Decorative grid dots */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(111,230,193,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 100% at 50% 50%, black 40%, transparent 100%)",
        }} />

        {/* Left ambient glow */}
        <div style={{
          position: "absolute", top: 0, left: "-10%",
          width: "40%", height: "100%",
          background: "radial-gradient(ellipse 60% 70% at 20% 50%, rgba(111,230,193,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Decorative shapes (Solid Figures) */}
        {/* Solid Hexagon */}
        <div style={{
          position: "absolute",
          top: "10%", right: "-80px",
          width: "300px", height: "340px",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          background: "linear-gradient(180deg, rgba(111,230,193,0.06) 0%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
        }} />
        {/* Solid triangle */}
        <div style={{
          position: "absolute",
          bottom: "30%", left: "-50px",
          width: "200px", height: "200px",
          clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
          background: "rgba(111,230,193,0.03)",
          borderBottom: "2px solid rgba(111,230,193,0.15)",
          pointerEvents: "none",
        }} />
        {/* Accent square */}
        <div style={{
          position: "absolute",
          bottom: "10%", right: "12%",
          width: "80px", height: "80px",
          background: "rgba(111,230,193,0.1)",
          transform: "rotate(45deg)",
          filter: "drop-shadow(0 0 20px rgba(111,230,193,0.3))",
          pointerEvents: "none",
        }} />

        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: "60px", alignItems: "start" }}>

            {/* ── LEFT: selector + heading ── */}
            <div style={{ position: "sticky", top: "32px" }}>

              {/* Title */}
              <h2 style={{
                fontFamily: "'Furore', sans-serif",
                fontSize: "40px", fontWeight: 400,
                color: "#fff", lineHeight: 1.05,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                marginTop: 0,
                marginBottom: "72px",
                marginLeft: 0,
                marginRight: 0,
              }}>
                Образо-<br />вание &amp;<br />
                <span style={{ color: "#6FE6C1" }}>подготовка</span>
              </h2>

              {/* Category tabs */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {educationData.map((panel, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePanel(idx)}
                    style={{
                      position: "relative",
                      textAlign: "left",
                      cursor: "pointer",
                      border: "none",
                      background: "none",
                      padding: 0,
                      outline: "none",
                    }}
                  >
                    <div style={{
                      background: activePanel === idx ? "#6FE6C1" : "rgba(111,230,193,0.2)",
                      clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
                      padding: "1.5px",
                      transition: "background 0.3s ease",
                    }}>
                      <div style={{
                        background: activePanel === idx
                          ? "linear-gradient(135deg, #0e4a28 0%, #062515 100%)"
                          : "rgba(0,20,12,0.8)",
                        clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)",
                        padding: "18px 22px",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        transition: "background 0.3s ease",
                      }}>
                        <span style={{
                          fontFamily: "'Furore', sans-serif",
                          fontSize: "32px", fontWeight: 400,
                          color: activePanel === idx ? "#6FE6C1" : "rgba(111,230,193,0.25)",
                          lineHeight: 1,
                          transition: "color 0.3s ease",
                          flexShrink: 0,
                        }}>0{idx + 1}</span>

                        <div>
                          <div style={{
                            fontFamily: "'Furore', sans-serif",
                            fontSize: "13px", fontWeight: 400,
                            color: activePanel === idx ? "#fff" : "rgba(255,255,255,0.45)",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            lineHeight: 1.3,
                            transition: "color 0.3s ease",
                          }}>{panel.title}</div>
                          <div style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "11px", fontWeight: 400,
                            color: activePanel === idx ? "rgba(111,230,193,0.7)" : "rgba(111,230,193,0.25)",
                            marginTop: "4px",
                            transition: "color 0.3s ease",
                          }}>
                            {panel.content.length} {panel.content.length === 1 ? "позиция" : panel.content.length < 5 ? "позиции" : "позиций"}
                          </div>
                        </div>
                      </div>
                    </div>

                    {activePanel === idx && (
                      <div style={{
                        position: "absolute",
                        left: "-16px", top: "50%",
                        transform: "translateY(-50%)",
                        width: "3px", height: "60%",
                        background: "linear-gradient(180deg, transparent, #6FE6C1, transparent)",
                        boxShadow: "0 0 8px #6FE6C1",
                      }} />
                    )}
                  </button>
                ))}
              </div>

            </div>

            {/* ── RIGHT: category heading + timeline ── */}
            <div style={{ position: "relative", minHeight: "400px" }}>

              {/* Category heading above timeline */}
              <div style={{
                marginBottom: "32px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(111,230,193,0.12)",
                display: "flex", alignItems: "flex-end", justifyContent: "space-between",
              }}>
                <div>
                  <div style={{
                    fontFamily: "'Furore', sans-serif",
                    fontSize: "22px", fontWeight: 400,
                    color: "#fff", textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}>{educationData[activePanel].title}</div>
                </div>
              </div>

              <DesktopTimeline items={educationData[activePanel].content} />
            </div>

          </div>
        </Container>
      </div>
    </section>
  );
}