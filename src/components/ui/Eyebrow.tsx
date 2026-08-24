import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  darkBackground?: boolean;
}

export function Eyebrow({
  children,
  className,
  darkBackground = false,
  ...props
}: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 text-eyebrow mb-3 uppercase font-semibold tracking-[0.14em] text-[12px] md:text-[13px]",
        darkBackground ? "text-apex-gold-400" : "text-apex-gold-600",
        className
      )}
      {...props}
    >
      <span className="w-6 h-[2px] bg-apex-gold-500 inline-block shrink-0 rounded-full" />
      <span>{children}</span>
    </div>
  );
}
