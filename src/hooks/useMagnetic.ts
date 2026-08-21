"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "./useReducedMotion";
import { useIsTouchDevice } from "./useIsTouchDevice";

interface UseMagneticOptions {
  intensity?: number;
  disabled?: boolean;
}

/**
 * Hook to apply subtle magnetic movement to an element on mouse hover
 */
export function useMagnetic<T extends HTMLElement>(options: UseMagneticOptions = {}) {
  const elementRef = useRef<T>(null);
  const { intensity = 6, disabled = false } = options;
  
  const prefersReducedMotion = useReducedMotion();
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    const element = elementRef.current;
    if (!element || disabled || prefersReducedMotion || isTouch) return;

    // Use gsap quickTo for maximum performance
    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // Calculate constrained movement based on intensity
      const moveX = (x / width) * intensity;
      const moveY = (y / height) * intensity;
      
      xTo(moveX);
      yTo(moveY);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
      xTo(0);
      yTo(0);
    };
  }, [intensity, disabled, prefersReducedMotion, isTouch]);

  return elementRef;
}
