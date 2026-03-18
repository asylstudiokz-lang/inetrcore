import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Единый контейнер для всех секций:
 * - Мобилка: 95% ширины экрана, по центру
 * - Десктоп: max-width 1200px, 90% ширины, по центру
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`w-[92%] mx-auto md:max-w-[1200px] md:w-[90%] ${className}`}
    >
      {children}
    </div>
  );
}