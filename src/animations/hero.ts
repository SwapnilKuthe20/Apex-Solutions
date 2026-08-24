import { gsap } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createHeroEntranceTimeline = (
  containerRef: React.RefObject<HTMLElement | null>,
  eyebrowRef: React.RefObject<HTMLElement | null>,
  headlineRef: React.RefObject<HTMLElement | null>,
  copyRef: React.RefObject<HTMLElement | null>,
  ctasRef: React.RefObject<HTMLElement | null>,
  trustLogosRef: React.RefObject<HTMLElement | null>,
  visualRef: React.RefObject<HTMLElement | null>,
  pathsRef?: React.MutableRefObject<(SVGPathElement | null)[]>,
  nodesRef?: React.MutableRefObject<(SVGCircleElement | null)[]>,
  particlesRef?: React.MutableRefObject<(SVGCircleElement | null)[]>,
  prefersReducedMotion?: boolean
) => {
  const tl = gsap.timeline();

  if (prefersReducedMotion) {
    // If reduced motion, just ensure everything is visible immediately
    gsap.set([eyebrowRef.current, copyRef.current, ctasRef.current, trustLogosRef.current, visualRef.current], { opacity: 1, y: 0 });
    if (headlineRef.current) gsap.set(headlineRef.current, { opacity: 1 });
    return { timeline: tl, cleanup: () => tl.kill() };
  }

  // 0. Preparation
  gsap.set([eyebrowRef.current, copyRef.current, ctasRef.current, trustLogosRef.current], { opacity: 0, y: 20 });
  gsap.set(visualRef.current, { opacity: 0, scale: 0.95 });
  
  // Setup SplitText safely
  let splitHeadline: SafeSplitText | null = null;
  if (headlineRef.current) {
    gsap.set(headlineRef.current, { opacity: 1 });
    // @ts-expect-error - SplitType types mismatch with string vs tuple
    splitHeadline = new SafeSplitText(headlineRef.current, { types: "lines,words", lineClass: "overflow-hidden" });
    gsap.set(splitHeadline.words, { y: 40, opacity: 0 });
  }

  // 1. Entrance Sequence
  tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.05);

  if (splitHeadline) {
    tl.to(splitHeadline.words, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.04,
      ease: "power3.out"
    }, 0.15);
  }

  tl.to(copyRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.50);
  tl.to(ctasRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.65);
  
  // Visual fades and scales in slightly
  tl.to(visualRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, 0.4);
  
  // Trust logos fade in last
  tl.to(trustLogosRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.9);

  return {
    timeline: tl,
    cleanup: () => {
      if (splitHeadline) splitHeadline.revert();
      tl.kill();
    }
  };
};
