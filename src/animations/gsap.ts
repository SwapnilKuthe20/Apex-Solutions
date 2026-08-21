"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Ensure GSAP plugins are registered safely on client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export { gsap, ScrollTrigger, MotionPathPlugin };

/**
 * Creates a safe GSAP Context scoped to a React component ref
 * Automatically cleans up ScrollTriggers and timelines on unmount
 */
export function createGSAPContext(
  func: gsap.ContextFunc,
  scope?: React.RefObject<Element | null> | Element
) {
  const ctx = gsap.context(func, scope);
  return ctx;
}
