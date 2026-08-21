import { gsap, ScrollTrigger } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createProductsIntroTimeline = (
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

  gsap.set([eyebrowRef.current, copyRef.current], { opacity: 0, y: 30 });
  
  let splitHeadline: SafeSplitText | null = null;
  if (headlineRef.current) {
    gsap.set(headlineRef.current, { opacity: 1 });
    // @ts-expect-error - SplitType types mismatch with string vs tuple
    splitHeadline = new SafeSplitText(headlineRef.current, { types: "lines", lineClass: "overflow-hidden" });
    gsap.set(splitHeadline.lines, { y: 40, opacity: 0 });
  }

  tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });

  if (splitHeadline && splitHeadline.lines.length > 0) {
    tl.to(
      splitHeadline.lines,
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );
  }

  tl.to(copyRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.6");

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      if (splitHeadline) splitHeadline.revert();
      ScrollTrigger.getById(containerRef.current?.id || "")?.kill();
    }
  };
};

export const createProductSliderTimeline = (
  pinnedContainerRef: React.RefObject<HTMLElement | null>,
  sliderRef: React.RefObject<HTMLElement | null>,
  totalProducts: number,
  prefersReducedMotion: boolean
) => {
  // If reduced motion or mobile view (which won't pin), we bypass the pinned sequence.
  if (prefersReducedMotion || window.innerWidth < 1024) {
    return {
      timeline: null,
      cleanup: () => {}
    };
  }
  
  // We want each product to take up the full width, so we translate by window.innerWidth
  // However, because we might have container padding, it's safer to use the exact width of the first child.
  // We'll calculate it using scrollWidth - window.innerWidth.
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinnedContainerRef.current,
      start: "top top",
      // Multiply end scroll distance by number of products to ensure a comfortable scroll pace.
      // E.g., 3 products = scroll for 200vw.
      end: () => `+=${(totalProducts - 1) * window.innerWidth}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true, // Recalculate distances on window resize
    }
  });

  tl.to(sliderRef.current, {
    x: () => {
      if (!sliderRef.current) return 0;
      // We want to stop scrolling when the right edge of the track hits the right edge of the window.
      const scrollWidth = sliderRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      return -(scrollWidth - viewportWidth);
    },
    ease: "none"
  });

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      ScrollTrigger.getById(pinnedContainerRef.current?.id || "")?.kill();
    }
  };
};
