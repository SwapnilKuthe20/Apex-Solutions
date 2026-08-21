import { gsap, ScrollTrigger } from "./gsap";

export const createTrustEntranceTimeline = (
  containerRef: React.RefObject<HTMLElement | null>,
  eyebrowRef: React.RefObject<HTMLElement | null>,
  headlineRef: React.RefObject<HTMLElement | null>,
  copyRef: React.RefObject<HTMLElement | null>,
  marqueeRef: React.RefObject<HTMLElement | null>,
  prefersReducedMotion: boolean
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 85%",
      toggleActions: "play none none reverse",
    }
  });

  if (prefersReducedMotion) {
    gsap.set([eyebrowRef.current, headlineRef.current, copyRef.current, marqueeRef.current], { opacity: 1, y: 0 });
    return {
      timeline: tl,
      cleanup: () => {
        tl.kill();
        ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
      }
    };
  }

  // Preparation
  gsap.set([eyebrowRef.current, headlineRef.current, copyRef.current, marqueeRef.current], { opacity: 0, y: 30 });

  // Sequence
  tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
    .to(copyRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
    .to(marqueeRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.2");

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
    }
  };
};
