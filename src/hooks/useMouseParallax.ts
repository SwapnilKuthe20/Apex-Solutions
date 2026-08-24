"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "./useReducedMotion";
import { useIsTouchDevice } from "./useIsTouchDevice";

interface UseMouseParallaxOptions {
  depth: number; // 0-1 multiplier (e.g., 0.1 for 10px movement, 0.2 for 20px)
  disabled?: boolean;
}

/**
 * Hook to apply subtle mouse parallax movement to an element
 */
export function useMouseParallax<T extends HTMLElement | SVGElement>(options: UseMouseParallaxOptions) {
  const elementRef = useRef<T>(null);
  const { depth, disabled = false } = options;
  
  const prefersReducedMotion = useReducedMotion();
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    const element = elementRef.current;
    if (!element || disabled || prefersReducedMotion || isTouch || window.innerWidth < 1024) return;

    // Use gsap quickTo for maximum performance
    const xTo = gsap.quickTo(element, "x", { duration: 0.8, ease: "power3.out" });
    const yTo = gsap.quickTo(element, "y", { duration: 0.8, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      // Calculate constrained movement based on depth
      // Maximum base movement is roughly 100px, so depth of 0.15 = 15px max
      const moveX = x * (100 * depth);
      const moveY = y * (100 * depth);
      
      xTo(moveX);
      yTo(moveY);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      xTo(0);
      yTo(0);
    };
  }, [depth, disabled, prefersReducedMotion, isTouch]);

  return elementRef;
}
