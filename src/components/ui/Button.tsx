"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useMagnetic } from "@/hooks/useMagnetic";
import { ArrowRight } from "lucide-react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ButtonVariant = "primary" | "gold" | "secondary" | "outline-dark";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
  magnetic?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
  magnetic = false,
  ...props
}: ButtonProps) {
  const magneticRef = useMagnetic<HTMLButtonElement>({ disabled: !magnetic });
  
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-apex-navy-800 text-white hover:bg-apex-gold-500 hover:text-apex-navy-900 border border-transparent shadow-sm",
    gold: "bg-apex-gold-500 text-apex-navy-900 hover:bg-apex-gold-400 hover:text-apex-navy-900 border border-transparent font-semibold shadow-sm",
    secondary:
      "bg-transparent text-apex-navy-800 border border-apex-navy-800 hover:bg-apex-navy-800 hover:text-white",
    "outline-dark":
      "bg-transparent text-white border border-white/30 hover:border-apex-gold-500 hover:text-apex-gold-400",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  return (
    <button
      ref={magneticRef}
      className={cn(
        "group inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apex-gold-500 disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[5px]" />
      )}
    </button>
  );
}
