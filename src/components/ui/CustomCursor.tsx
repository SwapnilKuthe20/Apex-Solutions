"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "@/animations/gsap";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only enable on desktop and when reduced motion is not requested
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    // Defer state update to avoid synchronous state changes during effect
    const timeoutId = setTimeout(() => setEnabled(true), 0);

    const cursor = cursorRef.current;
    if (!cursor) return;

    // High performance GSAP quickTo
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power2.out" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      
      // Check for interactive elements
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, [data-cursor]");
      
      if (interactiveEl) {
        setIsHovering(true);
        const cursorLabel = interactiveEl.getAttribute("data-cursor");
        if (cursorLabel) {
          setLabel(cursorLabel);
        } else {
          setLabel(null);
        }
      } else {
        setIsHovering(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={cn(
        "cursor-follower fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference flex items-center justify-center transition-all duration-300 ease-out",
        isHovering ? "w-16 h-16 -mt-8 -ml-8 bg-apex-white mix-blend-normal" : "w-3 h-3 -mt-1.5 -ml-1.5 bg-apex-gold-500",
        "rounded-full"
      )}
      aria-hidden="true"
    >
      {label && (
        <span 
          ref={labelRef}
          className="text-apex-navy-900 text-[10px] font-bold tracking-widest uppercase transition-opacity duration-200"
        >
          {label}
        </span>
      )}
    </div>
  );
}
