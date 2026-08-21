import { gsap, ScrollTrigger } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createTechStackIntroTimeline = (
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

export const createTechStackScrollSync = (
  pinnedContainerRef: React.RefObject<HTMLElement | null>,
  totalCategories: number,
  activeIndex: number,
  setActiveIndex: (index: number) => void,
  prefersReducedMotion: boolean
) => {
  if (prefersReducedMotion || window.innerWidth < 1024) {
    return {
      cleanup: () => {},
      scrollToIndex: () => {}
    };
  }

  // We create a ScrollTrigger that pins the section and calls setActiveIndex when crossing boundaries.
  // This avoids setting state on every scroll frame, only when the active segment changes.
  
  let currentIndex = activeIndex;

  const st = ScrollTrigger.create({
    trigger: pinnedContainerRef.current,
    start: "top 10%",
    end: () => `+=${totalCategories * 600}`, // 600px of scroll per category
    pin: true,
    anticipatePin: 1,
    onUpdate: (self) => {
      // Calculate which segment we are in (0 to totalCategories - 1)
      const segment = Math.min(
        totalCategories - 1,
        Math.max(0, Math.floor(self.progress * totalCategories))
      );
      
      if (segment !== currentIndex) {
        currentIndex = segment;
        setActiveIndex(segment);
      }
    }
  });

  return {
    cleanup: () => {
      st.kill();
    },
    // Expose a method to smoothly scroll to a specific index if clicked
    scrollToIndex: (index: number) => {
      if (st && st.start !== undefined && st.end !== undefined) {
        // Calculate the exact scroll position for the center of that segment
        const totalScroll = st.end - st.start;
        const targetScroll = st.start + (totalScroll / totalCategories) * index + 10;
        
        // Use Lenis or native scrollTo
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };
};

// Transition animation for when a new category becomes active
export const animateCategoryTransition = (
  layerRef: React.RefObject<HTMLElement | null>,
  techItemsRef: React.MutableRefObject<(HTMLElement | null)[]>,
  prefersReducedMotion: boolean
) => {
  if (prefersReducedMotion || !layerRef.current) return;

  const tl = gsap.timeline();

  // Reset states
  gsap.killTweensOf(layerRef.current);
  gsap.killTweensOf(techItemsRef.current);

  // Fade in the main layer wrapper
  tl.fromTo(layerRef.current, 
    { opacity: 0.45, y: 15 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
  );

  // Sequential logo/tech reveal
  const validItems = techItemsRef.current.filter(Boolean);
  if (validItems.length > 0) {
    tl.fromTo(validItems,
      { opacity: 0, y: 10, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" },
      "-=0.3" // Start slightly before the layer finishes moving
    );
  }

  return tl;
};
