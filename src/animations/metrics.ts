import { gsap, ScrollTrigger } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createMetricsIntroTimeline = (
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

export const createMetricItemReveal = (
  containerRef: React.RefObject<HTMLElement | null>,
  metricItemsRef: React.MutableRefObject<(HTMLElement | null)[]>,
  prefersReducedMotion: boolean
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 75%",
      // IMPORTANT: "once" prevents counter replay unless explicitly designed to reverse
      once: true,
    }
  });

  if (prefersReducedMotion) {
    gsap.set(metricItemsRef.current, { opacity: 1, y: 0 });
    return {
      timeline: tl,
      cleanup: () => {
        tl.kill();
      }
    };
  }

  const validItems = metricItemsRef.current.filter(Boolean);
  if (validItems.length > 0) {
    gsap.set(validItems, { opacity: 0, y: 30 });
    tl.to(validItems, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out"
    });
  }

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
    }
  };
};

export const animateMetricCounter = (
  element: HTMLElement | null,
  targetValue: number,
  decimals: number,
  prefersReducedMotion: boolean
) => {
  if (!element || prefersReducedMotion) return null;

  // We use a dummy object to interpolate, then update the DOM on every tick.
  const proxy = { value: 0 };
  
  return gsap.to(proxy, {
    value: targetValue,
    duration: 1.8,
    ease: "power2.out",
    onUpdate: () => {
      element.innerText = proxy.value.toFixed(decimals);
    },
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      once: true,
    }
  });
};
