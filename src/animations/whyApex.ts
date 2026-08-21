import { gsap, ScrollTrigger } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createWhyApexIntroTimeline = (
  containerRef: React.RefObject<HTMLElement | null>,
  eyebrowRef: React.RefObject<HTMLElement | null>,
  statementRef: React.RefObject<HTMLElement | null>,
  copyRef: React.RefObject<HTMLElement | null>,
  prefersReducedMotion: boolean
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });

  if (prefersReducedMotion) {
    gsap.set([eyebrowRef.current, statementRef.current, copyRef.current], { opacity: 1, y: 0 });
    return {
      timeline: tl,
      cleanup: () => {
        tl.kill();
        ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
      }
    };
  }

  gsap.set([eyebrowRef.current, copyRef.current], { opacity: 0, y: 20 });
  
  let splitStatement: SafeSplitText | null = null;
  if (statementRef.current) {
    gsap.set(statementRef.current, { opacity: 1 });
    // @ts-expect-error - SplitType types mismatch
    splitStatement = new SafeSplitText(statementRef.current, { types: "lines", lineClass: "overflow-hidden" });
    gsap.set(splitStatement.lines, { y: 40, opacity: 0 });
  }

  tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });

  if (splitStatement && splitStatement.lines.length > 0) {
    tl.to(
      splitStatement.lines,
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );
  }

  tl.to(copyRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      if (splitStatement) splitStatement.revert();
      ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
    }
  };
};

export const createWhyApexPrinciplesTimeline = (
  containerRef: React.RefObject<HTMLElement | null>,
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
    gsap.set(principlesRef.current, { opacity: 1, y: 0 });
    return {
      timeline: tl,
      cleanup: () => {
        tl.kill();
        ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
      }
    };
  }

  const validPrinciples = principlesRef.current.filter(Boolean);
  if (validPrinciples.length > 0) {
    gsap.set(validPrinciples, { opacity: 0, y: 30 });
    tl.to(validPrinciples, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  }

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
    }
  };
};
