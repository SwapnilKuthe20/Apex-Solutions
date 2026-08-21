import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type SectionVariant = "white" | "surface" | "navy" | "navy-deep";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({
  children,
  variant = "white",
  className,
  id,
  ...props
}, ref) => {
  const variantStyles: Record<SectionVariant, string> = {
    white: "bg-white text-apex-navy-800",
    surface: "bg-apex-surface-50 text-apex-navy-800",
    navy: "bg-apex-navy-800 text-white",
    "navy-deep": "bg-apex-navy-900 text-white",
  };

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-36 relative overflow-hidden transition-colors duration-300",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";
