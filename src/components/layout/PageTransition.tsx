"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { animatePageIn } from "@/animations/pageTransition";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function PageTransition() {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (overlayRef.current && !prefersReducedMotion) {
      animatePageIn(overlayRef.current);
    }
  }, [pathname, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-apex-navy-900 pointer-events-none transform origin-bottom"
    />
  );
}

