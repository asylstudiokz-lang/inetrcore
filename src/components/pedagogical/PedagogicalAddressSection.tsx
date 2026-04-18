import { Container } from "../ui/Container";

export function PedagogicalAddressSection() {
  const CLIP = (size: number) =>
    `polygon(${size}px 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%, 0 ${size}px)`;

  return (
    <section 
      id="pedagogical-address" 
      className="relative overflow-hidden" 
      style={{ 
        backgroundColor: "#001d14",
        padding: "60px 0",
        position: "relative"
      }}
    >
      {/* Ambient background glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "300px",
        background: "radial-gradient(ellipse at center, rgba(111,230,193,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <Container style={{ position: "relative", zIndex: 1 }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          gap: "32px"
        }}>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Furore', sans-serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 400,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            textAlign: "center",
            margin: 0,
            lineHeight: 1.1
          }}>
            Адрес педагогического центра
          </h2>

          {/* Styled Address Card */}
          <div style={{
            width: "100%",
            maxWidth: "600px",
            background: "#6FE6C1",
            clipPath: CLIP(16),
            padding: "1.5px",
            filter: "drop-shadow(0 0 20px rgba(111,230,193,0.15))"
          }}>
            <div style={{
              background: "linear-gradient(150deg, #002214 0%, #000e08 100%)",
              clipPath: CLIP(15),
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "16px"
            }}>
              {/* Map Icon Pin */}
              <div style={{
                width: "48px",
                height: "48px",
                background: "rgba(111,230,193,0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "4px"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#6FE6C1"/>
                </svg>
              </div>

              <div>
                <p style={{
                  fontFamily: "'Furore', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  color: "rgba(111,230,193,0.5)",
                  textTransform: "uppercase",
                  margin: "0 0 10px"
                }}>Казахстан г. Алматы</p>
                
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  fontWeight: 500,
                  color: "#fff",
                  lineHeight: 1.4,
                  margin: 0
                }}>
                  Муканова 241, угол Шевченко
                </p>
              </div>

              {/* Decorative line */}
              <div style={{
                width: "40px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(111,230,193,0.3), transparent)",
                marginTop: "12px"
              }} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
