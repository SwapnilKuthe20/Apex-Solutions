"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ href, children, className }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isTouchDevice = useRef(false);

  useEffect(() => {
    // Basic touch detection
    isTouchDevice.current = window.matchMedia("(pointer: coarse)").matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isTouchDevice.current || !buttonRef.current || !textRef.current) {
      return;
    }

    const button = buttonRef.current;
    
    // Create quickTo instances for high performance
    const xTo = gsap.quickTo(button, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(button, "y", { duration: 0.4, ease: "power3" });
    const textXTo = gsap.quickTo(textRef.current, "x", { duration: 0.4, ease: "power3" });
    const textYTo = gsap.quickTo(textRef.current, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate distance from center (-1 to 1)
      const distanceX = (clientX - centerX) / (width / 2);
      const distanceY = (clientY - centerY) / (height / 2);

      // Max movement 8px for button, 4px for text
      xTo(distanceX * 8);
      yTo(distanceY * 8);
      textXTo(distanceX * 4);
      textYTo(distanceY * 4);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      textXTo(0);
      textYTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <Link
      href={href}
      ref={buttonRef}
      className={cn(
        "group relative inline-flex items-center justify-center bg-apex-gold-500 text-apex-navy-900",
        "h-[48px] md:h-[56px] px-8 md:px-10 rounded-md font-semibold text-[15px] md:text-[16px]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-apex-navy-900",
        "transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
    >
      <span ref={textRef} className="inline-flex items-center relative z-10 pointer-events-none">
        {children}
        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md pointer-events-none" />
    </Link>
  );
}
