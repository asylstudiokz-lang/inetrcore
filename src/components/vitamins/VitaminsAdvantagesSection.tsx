import { Container } from "../ui/Container";

const GOLD = "#D4AC6B";

const CLIP = (size: number) =>
  `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

const advantages = [
  {
    title: "100% Натуральный состав",
    description: "Используются только экологически чистые растительные экстракты без синтетических добавок и консервантов.",
    number: "01"
  },
  {
    title: "Высокая биодоступность",
    description: "Специальная формула обеспечивает максимальное усвоение всех микроэлементов клетками организма.",
    number: "02"
  },
  {
    title: "Растительная основа",
    description: "Продукция полностью веганская, разработана с учетом естественной физиологии человека.",
    number: "03"
  },
  {
    title: "Комплексный подход",
    description: "Синергия компонентов позволяет решать задачи по оздоровлению на системном уровне.",
    number: "04"
  }
];

export function VitaminsAdvantagesSection() {
  return (
    <section id="vitamins-advantages" className="relative overflow-hidden" style={{ backgroundColor: "#001d14", padding: "100px 0" }}>
      
      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "80%", height: "1px", background: `linear-gradient(90deg, transparent, ${GOLD}40, transparent)`, pointerEvents: "none" }} />
      
      <Container>
        <div className="mb-16 text-center">
          <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(42px, 5vw, 70px)", fontWeight: 400, color: GOLD, textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
            ПРЕИМУЩЕСТВА
          </h2>
          <div style={{ width: "80px", height: "1px", background: GOLD, margin: "24px auto 0", opacity: 0.5 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => (
            <div key={idx} className="group relative">
              <div
                style={{
                  background: `linear-gradient(135deg, ${GOLD}40 0%, transparent 100%)`,
                  clipPath: CLIP(20),
                  padding: "1px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    background: "#001d14",
                    clipPath: CLIP(19),
                    padding: "32px 24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "48px", color: GOLD, opacity: 0.1, marginBottom: "-20px" }}>
                    {adv.number}
                  </span>
                  <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: "16px", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "16px", position: "relative", zIndex: 1 }}>
                    {adv.title}
                  </h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                    {adv.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
