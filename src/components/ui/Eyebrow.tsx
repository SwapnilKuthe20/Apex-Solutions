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
        "inline-flex items-center gap-2 text-eyebrow mb-3 uppercase font-semibold tracking-[0.12em]",
        darkBackground ? "text-apex-gold-400" : "text-apex-gold-700",
        className
      )}
      {...props}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-apex-gold-500 inline-block" />
      <span>{children}</span>
    </div>
  );
}
