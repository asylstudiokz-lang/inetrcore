import { Brain, Pill, Baby, Bandage } from "lucide-react";
import type { SVGProps } from "react";

/**
 * Re-exports Lucide icons under the Directions naming convention.
 * Lucide icons are professionally designed, clear, and universally recognizable.
 */

// Neurology → Brain
export function DetailedBrainIcon(props: SVGProps<SVGSVGElement>) {
  return <Brain {...(props as any)} />;
}

// Nutriciology → Pill
export function DetailedPillIcon(props: SVGProps<SVGSVGElement>) {
  return <Pill {...(props as any)} />;
}

// Pedagogics → Baby (children correction)
export function DetailedPedagogicsIcon(props: SVGProps<SVGSVGElement>) {
  return <Baby {...(props as any)} />;
}

// Dentistry → Anatomical mandible (lower jaw) — hand-crafted SVG
export function DetailedJawIcon(props: SVGProps<SVGSVGElement>) {
  const { width = 24, height = 24, strokeWidth = 1.2, color, style, className } = props as any;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={width}
      height={height}
      style={style}
      className={className}
      color={color}
    >
      {/* Condylar processes (top-left and top-right "ears") */}
      <path d="M4 6 L4 3" />
      <path d="M20 6 L20 3" />
      {/* Ramus (vertical parts of jaw) */}
      <path d="M4 3 Q3 5, 3 8" />
      <path d="M20 3 Q21 5, 21 8" />
      {/* Main U-shaped jaw body (mandibular arch) */}
      <path d="M3 8 Q3 20, 12 21 Q21 20, 21 8" />
      {/* Teeth bumps along the top edge */}
      <path d="M6 8 Q6.5 6, 7 8" />
      <path d="M9 8 Q9.5 6, 10 8" />
      <path d="M12 8 Q12.5 6, 13 8" />
      <path d="M14 8 Q14.5 6, 15 8" />
      <path d="M17 8 Q17.5 6, 18 8" />
    </svg>
  );
}

// Regeneration → Bandage (wounds/healing)
export function DetailedHealingIcon(props: SVGProps<SVGSVGElement>) {
  return <Bandage {...(props as any)} />;
}
