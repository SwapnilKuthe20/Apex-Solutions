import { gsap, ScrollTrigger } from "./gsap";

export const createTechnologyEntranceTimeline = (
  containerRef: React.RefObject<HTMLElement | null>,
  headerElementsRef: React.RefObject<HTMLElement | null>,
  apexCoreRef: React.RefObject<Element | null>,
  pathsRef: React.MutableRefObject<(SVGPathElement | null)[]>,
  nodesRef: React.MutableRefObject<(SVGCircleElement | null)[]>,
  cardsRef: React.MutableRefObject<(HTMLElement | null)[]>,
  principlesRef: React.MutableRefObject<(HTMLElement | null)[]>,
  prefersReducedMotion: boolean
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 75%",
      toggleActions: "play none none reverse",
    }
  });

  if (prefersReducedMotion) {
    gsap.set(headerElementsRef.current, { opacity: 1, y: 0 });
    gsap.set(apexCoreRef.current, { opacity: 1, scale: 1 });
    gsap.set(pathsRef.current, { strokeDashoffset: 0, opacity: 1 });
    gsap.set(nodesRef.current, { scale: 1, opacity: 1 });
    gsap.set(cardsRef.current, { opacity: 1, y: 0 });
    gsap.set(principlesRef.current, { opacity: 1, x: 0 });
    return {
      timeline: tl,
      cleanup: () => {
        tl.kill();
        ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
      }
    };
  }

  // Preparation
  gsap.set(headerElementsRef.current, { opacity: 0, y: 30 });
  gsap.set(apexCoreRef.current, { opacity: 0, scale: 0.8 });
  
  pathsRef.current.forEach(path => {
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 0.2 });
    }
  });
  
  gsap.set(nodesRef.current, { scale: 0, opacity: 0 });
  gsap.set(cardsRef.current, { opacity: 0, y: 30 });
  gsap.set(principlesRef.current, { opacity: 0, x: -20 });

  // Sequence
  tl.to(headerElementsRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
    .to(apexCoreRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)" }, "-=0.2")
    .to(pathsRef.current, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: "power2.inOut"
    }, "-=0.4")
    .to(nodesRef.current, {
      scale: 1,
      opacity: 0.5, // default inactive state
      duration: 0.4,
      stagger: 0.05,
      ease: "back.out(1.5)"
    }, "-=0.6")
    .to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out"
    }, "-=0.4")
    .to(principlesRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.2");

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
    }
  };
};
