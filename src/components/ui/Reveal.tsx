"use client";

import React, { useRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { gsap, ScrollTrigger } from "@/animations/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type RevealVariant = "fadeUp" | "fade" | "fadeLeft" | "fadeRight";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: React.ElementType;
}

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.8,
  className,
  as: Component = "div",
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const element = elementRef.current;
    if (!element || prefersReducedMotion) {
      if (element) {
        gsap.set(element, { opacity: 1, x: 0, y: 0 });
      }
      return;
    }

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    };

    switch (variant) {
      case "fadeUp":
        fromVars.y = 40;
        break;
      case "fadeLeft":
        fromVars.x = -40;
        break;
      case "fadeRight":
        fromVars.x = 40;
        break;
      case "fade":
      default:
        break;
    }

    gsap.set(element, fromVars);
    const tween = gsap.to(element, toVars);

    return () => {
      tween.kill();
      ScrollTrigger.getById(element.id)?.kill();
    };
  }, [variant, delay, duration, prefersReducedMotion]);

  return (
    <Component
      ref={elementRef}
      className={cn("will-change-[opacity,transform]", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
