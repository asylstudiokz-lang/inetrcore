const fs = require('fs');
const file = '/Users/ivanancuk/Desktop/ICIT/astro-project/src/components/DirectionsSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. imports
content = content.replace(
  'import { useRef, useLayoutEffect, useState, useEffect } from "react";',
  'import { useRef, useLayoutEffect, useState, useEffect } from "react";\nimport { Skull, Pill, ToyBrick, Bone, Bandage } from "lucide-react";'
);

// 2. Add icons to cards
content = content.replace(
  'tag: "Неврология",\n    wide: true',
  'tag: "Неврология",\n    icon: Skull,\n    wide: true'
);
content = content.replace(
  'tag: "Нутрициология",\n    wide: false',
  'tag: "Нутрициология",\n    icon: Pill,\n    wide: false'
);
content = content.replace(
  'tag: "Педагогика",\n    wide: false',
  'tag: "Педагогика",\n    icon: ToyBrick,\n    wide: false'
);
content = content.replace(
  'tag: "Стоматология",\n    wide: false',
  'tag: "Стоматология",\n    icon: Bone,\n    wide: false'
);
content = content.replace(
  'tag: "Регенерация",\n    wide: false',
  'tag: "Регенерация",\n    icon: Bandage,\n    wide: false'
);

// 3. MobileCard updates
content = content.replace(
  /padding: "22px 20px 20px",/g,
  'padding: "16px 16px 16px",\n          minHeight: "160px",\n          gap: "8px",'
);
content = content.replace(
  /\{\/\* Top: TagChip \*\/\}\s*<div style=\{\{ marginBottom: "18px" \}\}>\s*<MobileTagChip label=\{card\.tag\} \/>\s*<\/div>/,
  ''
);
// replace ghost number mobile
content = content.replace(
  /\{\/\* Ghost number \*\/\}\s*<div\s*style=\{\{\s*position: "absolute",\s*bottom: "-8px",\s*right: "12px",\s*fontFamily: "'Furore', sans-serif",\s*fontSize: "96px",\s*lineHeight: 1,\s*color: "transparent",\s*WebkitTextStroke: "1px rgba\(111,230,193,0\.09\)",\s*userSelect: "none",\s*pointerEvents: "none",\s*letterSpacing: "-0\.04em",\s*\}\}\s*>\s*0\{card\.id\}\s*<\/div>/g,
  `{/* Background Icon */}
        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            right: "-10px",
            color: "rgba(111,230,193,0.06)",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {card.icon && <card.icon size={110} strokeWidth={1.5} />}
        </div>`
);

// update fonts in MobileCard
content = content.replace(
  /fontSize: "15px",\s*fontWeight: 400,\s*color: "#ffffff",\s*textTransform: "uppercase",\s*lineHeight: 1\.25,\s*margin: 0,\s*marginBottom: "12px",/g,
  'fontSize: "14px",\n              fontWeight: 400,\n              color: "#ffffff",\n              textTransform: "uppercase",\n              lineHeight: 1.2,\n              margin: 0,\n              marginBottom: "8px",'
);
content = content.replace(
  /fontSize: "14px",\s*fontWeight: 400,\s*color: "rgba\(255,255,255,0\.55\)",\s*lineHeight: 1\.7,\s*margin: 0,\s*marginBottom: "20px",/g,
  'fontSize: "12px",\n              fontWeight: 400,\n              color: "rgba(255,255,255,0.65)",\n              lineHeight: 1.5,\n              margin: 0,\n              marginBottom: "16px",'
);

// update DesktopCard ghost number
content = content.replace(
  /\{\/\* Ghost number \*\/\}\s*<div\s*style=\{\{\s*position: "absolute",\s*bottom: "-12px",\s*right: "16px",\s*fontFamily: "'Furore', sans-serif",\s*fontSize: "clamp\(80px, 9vw, 130px\)",\s*lineHeight: 1,\s*color: "transparent",\s*WebkitTextStroke: "1px rgba\(111,230,193,0\.09\)",\s*userSelect: "none",\s*pointerEvents: "none",\s*letterSpacing: "-0\.04em",\s*\}\}\s*>\s*0\{card\.id\}\s*<\/div>/g,
  `{/* Background Icon */}
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            right: "-20px",
            color: "rgba(111,230,193,0.06)",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {card.icon && <card.icon size={220} strokeWidth={1} />}
        </div>`
);


// replace the button logic (both desktop and mobile)
const buttonRegex = /\{\/\* Divider \+ button \*\/\}\s*<div[\s\S]*?<\/button>/g;
const newButtonStr = `{/* Divider + button */}
          <button
            className="site-btn-main"
            style={{
              position: "relative",
              zIndex: 10,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              background: "rgba(111,230,193,0.08)",
              border: "1px solid rgba(111,230,193,0.25)",
              borderRadius: "6px",
              padding: "10px 16px",
              cursor: "pointer",
              fontFamily: "'Furore', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "#6FE6C1",
              textTransform: "uppercase",
              width: "auto",
              maxWidth: "max-content",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
               (e.currentTarget as HTMLButtonElement).style.background = "rgba(111,230,193,0.18)";
               (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(111,230,193,0.5)";
            }}
            onMouseLeave={(e) => {
               (e.currentTarget as HTMLButtonElement).style.background = "rgba(111,230,193,0.08)";
               (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(111,230,193,0.25)";
            }}
          >
            подробнее
            <svg width="18" height="8" viewBox="0 0 18 8" fill="none">
              <path
                d="M0 4H16M12 1L16 4L12 7"
                stroke="#6FE6C1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>`;
content = content.replace(buttonRegex, newButtonStr);

fs.writeFileSync(file, content);
console.log("Updated Components successfully!");
