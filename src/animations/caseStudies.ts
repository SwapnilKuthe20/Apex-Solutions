import { gsap, ScrollTrigger } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createCaseStudiesIntroTimeline = (
  containerRef: React.RefObject<HTMLElement | null>,
  eyebrowRef: React.RefObject<HTMLElement | null>,
  headlineRef: React.RefObject<HTMLElement | null>,
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
    gsap.set([eyebrowRef.current, headlineRef.current, copyRef.current], { opacity: 1, y: 0 });
    return {
      timeline: tl,
      cleanup: () => {
        tl.kill();
        ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
      }
    };
  }

  gsap.set([eyebrowRef.current, copyRef.current], { opacity: 0, y: 20 });
  
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
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );
  }

  tl.to(copyRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      if (splitHeadline) splitHeadline.revert();
      ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
    }
  };
};

export const createCaseStudyReveal = (
  containerRef: React.RefObject<HTMLElement | null>,
  imageWrapperRef: React.RefObject<HTMLElement | null>,
  imageInnerRef: React.RefObject<HTMLElement | null>,
  textElementsRef: React.MutableRefObject<(HTMLElement | null)[]>,
  prefersReducedMotion: boolean
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 75%",
      once: true,
    }
  });

  if (prefersReducedMotion) {
    gsap.set(imageWrapperRef.current, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" });
    gsap.set(imageInnerRef.current, { scale: 1 });
    gsap.set(textElementsRef.current, { opacity: 1, y: 0 });
    return {
      timeline: tl,
      cleanup: () => {
        tl.kill();
      }
    };
  }

  // Initial States
  gsap.set(imageWrapperRef.current, { opacity: 0, clipPath: "inset(8% 8% 8% 8%)" });
  gsap.set(imageInnerRef.current, { scale: 1.08 });
  
  const validText = textElementsRef.current.filter(Boolean);
  gsap.set(validText, { opacity: 0, y: 20 });

  // Animation Sequence
  tl.to(imageWrapperRef.current, {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1.2,
    ease: "power2.out"
  });

  tl.to(imageInnerRef.current, {
    scale: 1,
    duration: 1.2,
    ease: "power2.out"
  }, "<"); // start at the same time

  if (validText.length > 0) {
    tl.to(validText, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.8");
  }

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
    }
  };
};
