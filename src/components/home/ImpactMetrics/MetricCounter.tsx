"use client";

import { useEffect, useRef } from "react";
import { animateMetricCounter } from "@/animations/metrics";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MetricCounterProps {
  value: number;
  decimals?: number;
}

export function MetricCounter({ value, decimals = 0 }: MetricCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion, we just let the initial DOM state handle it, which is the final value.
    if (prefersReducedMotion || !numberRef.current) return;

    // Set initial DOM to 0 for the animation start
    numberRef.current.innerText = (0).toFixed(decimals);

    const anim = animateMetricCounter(numberRef.current, value, decimals, prefersReducedMotion);

    return () => {
      if (anim) {
        anim.kill();
      }
    };
  }, [value, decimals, prefersReducedMotion]);

  // The server/initial render output is the final value for SEO and No-JS fallbacks.
  // The useEffect overrides this to 0 and counts up if JS/GSAP is active.
  return (
    <span ref={numberRef} className="tabular-nums">
      {value.toFixed(decimals)}
    </span>
  );
}
