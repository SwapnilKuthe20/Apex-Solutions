import { gsap, ScrollTrigger } from "./gsap";

export const createFooterRevealTimeline = (
  containerRef: React.RefObject<HTMLElement | null>,
  brandRef: React.RefObject<HTMLElement | null>,
  navColumnRefs: React.MutableRefObject<(HTMLElement | null)[]>,
  bottomRef: React.RefObject<HTMLElement | null>,
  prefersReducedMotion: boolean
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 90%",
      once: true,
    }
  });

  const validColumns = navColumnRefs.current.filter(Boolean);

  if (prefersReducedMotion) {
    gsap.set([brandRef.current, bottomRef.current, ...validColumns], { opacity: 1, y: 0 });
    return {
      timeline: tl,
      cleanup: () => {
        tl.kill();
        ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
      }
    };
  }

  // Initial states
  gsap.set([brandRef.current, bottomRef.current], { opacity: 0, y: 20 });
  gsap.set(validColumns, { opacity: 0, y: 20 });

  // Stagger reveal
  tl.to(brandRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
    .to(validColumns, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4")
    .to(bottomRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2");

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
    }
  };
};
