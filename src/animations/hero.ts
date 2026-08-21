import { gsap } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createHeroEntranceTimeline = (
  containerRef: React.RefObject<HTMLElement | null>,
  eyebrowRef: React.RefObject<HTMLElement | null>,
  headlineRef: React.RefObject<HTMLElement | null>,
  copyRef: React.RefObject<HTMLElement | null>,
  ctasRef: React.RefObject<HTMLElement | null>,
  visualRef: React.RefObject<HTMLElement | null>,
  pathsRef: React.MutableRefObject<(SVGPathElement | null)[]>,
  nodesRef: React.MutableRefObject<(SVGCircleElement | null)[]>,
  particlesRef: React.MutableRefObject<(SVGCircleElement | null)[]>,
  prefersReducedMotion: boolean
) => {
  const tl = gsap.timeline();

  if (prefersReducedMotion) {
    // If reduced motion, just ensure everything is visible immediately
    gsap.set([eyebrowRef.current, copyRef.current, ctasRef.current, visualRef.current], { opacity: 1, y: 0 });
    gsap.set(pathsRef.current, { strokeDashoffset: 0, opacity: 1 });
    gsap.set(nodesRef.current, { scale: 1, opacity: 1 });
    if (headlineRef.current) gsap.set(headlineRef.current, { opacity: 1 });
    return tl;
  }

  // 0. Preparation
  gsap.set([eyebrowRef.current, copyRef.current, ctasRef.current, visualRef.current], { opacity: 0, y: 20 });
  
  // Setup SplitText safely
  let splitHeadline: SafeSplitText | null = null;
  if (headlineRef.current) {
    gsap.set(headlineRef.current, { opacity: 1 });
    // @ts-expect-error - SplitType types mismatch with string vs tuple
    splitHeadline = new SafeSplitText(headlineRef.current, { types: "lines,words", lineClass: "overflow-hidden" });
    gsap.set(splitHeadline.words, { y: 40, opacity: 0 });
  }

  // Path preparation
  pathsRef.current.forEach(path => {
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 0.2 });
    }
  });

  gsap.set(nodesRef.current, { scale: 0, opacity: 0 });
  gsap.set(particlesRef.current, { opacity: 0 });

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
  
  // Visual fades in generally
  tl.to(visualRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 0.6);

  // 2. Engineering Visual Drawing
  tl.to(pathsRef.current, {
    strokeDashoffset: 0,
    opacity: 1,
    duration: 1.5,
    stagger: 0.1,
    ease: "power2.inOut"
  }, 0.80);

  // 3. Nodes Activation
  tl.to(nodesRef.current, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    stagger: 0.05,
    ease: "back.out(1.5)"
  }, 1.5);

  // 4. Subtle particles
  tl.to(particlesRef.current, {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  }, 1.8);

  return {
    timeline: tl,
    cleanup: () => {
      if (splitHeadline) splitHeadline.revert();
      tl.kill();
    }
  };
};
