import { gsap, ScrollTrigger } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createIndustryIntroTimeline = (
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

export const createIndustryHorizontalTimeline = (
  pinnedContainerRef: React.RefObject<HTMLElement | null>,
  trackRef: React.RefObject<HTMLElement | null>,
  totalCards: number,
  prefersReducedMotion: boolean
) => {
  // If reduced motion or mobile view (which won't pin), we don't do horizontal scroll pinning.
  // We'll let CSS handle the natural stack or scrolling.
  if (prefersReducedMotion || window.innerWidth < 1024) {
    return {
      timeline: null,
      cleanup: () => {}
    };
  }

  // We want to translate the track to the left so that the last card ends up visible.
  // X translation distance depends on the total width vs the viewport width.
  // Using xPercent on the track is easiest if the track width is intrinsically determined by the children.
  
  // Calculate how far to move: 
  // -100% moves it completely off screen. We want to move it just enough so the right edge of the last item aligns.
  // A cleaner approach with GSAP ScrollTrigger for horizontal scrolling:
  // x: () => -(trackRef.current.scrollWidth - window.innerWidth)
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinnedContainerRef.current,
      start: "top top",
      // End point determines how long the scroll lasts. 
      // A common formula is based on the scroll width to maintain a 1:1 scroll ratio
      end: () => `+=${trackRef.current?.scrollWidth || 3000}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true, // Recalculate distances on window resize
    }
  });

  tl.to(trackRef.current, {
    x: () => {
      if (!trackRef.current) return 0;
      // We want to stop scrolling when the right edge of the track hits the right edge of the window.
      // Padding can be added if we want the last card to sit a bit inwards.
      const scrollWidth = trackRef.current.scrollWidth;
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
