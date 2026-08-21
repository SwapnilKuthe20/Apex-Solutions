import { gsap, ScrollTrigger } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createCTARevealTimeline = (
  containerRef: React.RefObject<HTMLElement | null>,
  eyebrowRef: React.RefObject<HTMLElement | null>,
  headlineRef: React.RefObject<HTMLElement | null>,
  copyRef: React.RefObject<HTMLElement | null>,
  ctaRef: React.RefObject<HTMLElement | null>,
  prefersReducedMotion: boolean
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      once: true,
    }
  });

  if (prefersReducedMotion) {
    gsap.set([eyebrowRef.current, headlineRef.current, copyRef.current, ctaRef.current], { opacity: 1, y: 0 });
    return {
      timeline: tl,
      cleanup: () => {
        tl.kill();
        ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
      }
    };
  }

  gsap.set([eyebrowRef.current, copyRef.current, ctaRef.current], { opacity: 0, y: 20 });
  if (ctaRef.current) gsap.set(ctaRef.current, { scale: 0.96 });
  
  let splitHeadline: SafeSplitText | null = null;
  if (headlineRef.current) {
    gsap.set(headlineRef.current, { opacity: 1 });
    // @ts-expect-error - SplitType types mismatch
    splitHeadline = new SafeSplitText(headlineRef.current, { types: "lines", lineClass: "overflow-hidden" });
    gsap.set(splitHeadline.lines, { y: 40, opacity: 0 });
  }

  tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });

  if (splitHeadline && splitHeadline.lines.length > 0) {
    tl.to(
      splitHeadline.lines,
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );
  }

  tl.to(copyRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.5");
  
  if (ctaRef.current) {
    tl.to(ctaRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" }, "-=0.4");
  }

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      if (splitHeadline) splitHeadline.revert();
      ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
    }
  };
};

// Ambient Background Loop
export const createCTABackgroundTimeline = (
  svgRef: React.RefObject<SVGSVGElement | null>,
  prefersReducedMotion: boolean
) => {
  if (prefersReducedMotion || !svgRef.current) return { cleanup: () => {} };

  const paths = svgRef.current.querySelectorAll('.engineering-path');
  const nodes = svgRef.current.querySelectorAll('.engineering-node');

  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  if (paths.length > 0) {
    tl.to(paths, {
      strokeDashoffset: 100, // Moves the dash pattern slightly
      duration: 20,
      ease: "sine.inOut",
      stagger: 2,
    }, 0);
  }

  if (nodes.length > 0) {
    tl.to(nodes, {
      scale: 1.2,
      opacity: 0.8,
      duration: 10,
      ease: "sine.inOut",
      stagger: 1,
    }, 0);
  }

  return {
    cleanup: () => tl.kill()
  };
};
