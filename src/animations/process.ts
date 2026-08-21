import { gsap, ScrollTrigger } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createProcessIntroTimeline = (
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

// Desktop Pinned Storytelling
export const createProcessMasterTimeline = (
  containerRef: React.RefObject<HTMLElement | null>,
  stepsRef: React.MutableRefObject<(HTMLElement | null)[]>,
  pathRef: React.RefObject<SVGPathElement | null>,
  onStepChange: (index: number) => void,
  prefersReducedMotion: boolean
) => {
  if (prefersReducedMotion || !containerRef.current || !pathRef.current) {
    return {
      timeline: null,
      cleanup: () => {}
    };
  }

  const validSteps = stepsRef.current.filter(Boolean);
  if (validSteps.length === 0) return { timeline: null, cleanup: () => {} };

  const totalSteps = validSteps.length;
  
  // Setup SVG Path
  const pathLength = pathRef.current.getTotalLength();
  gsap.set(pathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

  // Setup Steps initial state
  gsap.set(validSteps, { opacity: 0.5 });
  // The first step should be active immediately
  gsap.set(validSteps[0], { opacity: 1 });
  const firstTitle = validSteps[0]?.querySelector('.step-title');
  const firstDesc = validSteps[0]?.querySelector('.step-description');
  const firstIcon = validSteps[0]?.querySelector('.step-icon');
  const firstNode = validSteps[0]?.querySelector('.step-node');
  
  if (firstTitle) gsap.set(firstTitle, { color: "#D7AB11" }); // Apex Gold
  if (firstDesc) gsap.set(firstDesc, { opacity: 1, y: 0 });
  if (firstIcon) gsap.set(firstIcon, { opacity: 1, scale: 1 });
  if (firstNode) gsap.set(firstNode, { scale: 1.08, borderColor: "#D7AB11", backgroundColor: "#D7AB11" });

  // Hide other descriptions initially
  validSteps.slice(1).forEach(step => {
    const desc = step?.querySelector('.step-description');
    if (desc) gsap.set(desc, { opacity: 0, y: 15 });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 15%",
      end: `+=${totalSteps * 400}`, // 400px scroll per step
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        // Calculate discrete active step for React state (progress indicator)
        const rawIndex = Math.floor(self.progress * totalSteps);
        const activeIndex = Math.min(rawIndex, totalSteps - 1);
        onStepChange(activeIndex);
      }
    }
  });

  // Animate the path continuously
  tl.to(pathRef.current, {
    strokeDashoffset: 0,
    ease: "none",
    duration: totalSteps
  }, 0);

  // We map the activation of each step to the timeline
  validSteps.forEach((step, index) => {
    if (index === 0) return; // First step is already active

    const title = step?.querySelector('.step-title');
    const desc = step?.querySelector('.step-description');
    const icon = step?.querySelector('.step-icon');
    const node = step?.querySelector('.step-node');

    const prevStep = validSteps[index - 1];
    const prevTitle = prevStep?.querySelector('.step-title');
    const prevDesc = prevStep?.querySelector('.step-description');
    const prevIcon = prevStep?.querySelector('.step-icon');
    const prevNode = prevStep?.querySelector('.step-node');

    const startTime = index;
    const transitionDuration = 0.5;

    // Fade out previous step
    if (prevStep) tl.to(prevStep, { opacity: 0.5, duration: transitionDuration, ease: "power2.inOut" }, startTime - transitionDuration);
    if (prevTitle) tl.to(prevTitle, { color: "#081E42", duration: transitionDuration }, startTime - transitionDuration); // Muted Navy
    if (prevDesc) tl.to(prevDesc, { opacity: 0.5, duration: transitionDuration }, startTime - transitionDuration);
    if (prevIcon) tl.to(prevIcon, { opacity: 0.5, scale: 0.95, duration: transitionDuration }, startTime - transitionDuration);
    if (prevNode) tl.to(prevNode, { scale: 1, borderColor: "#DCE3EC", backgroundColor: "transparent", duration: transitionDuration }, startTime - transitionDuration);

    // Fade in new step
    tl.to(step, { opacity: 1, duration: transitionDuration, ease: "power2.inOut" }, startTime - transitionDuration);
    if (title) tl.to(title, { color: "#D7AB11", duration: transitionDuration }, startTime - transitionDuration);
    if (desc) tl.to(desc, { opacity: 1, y: 0, duration: transitionDuration, ease: "power2.out" }, startTime - transitionDuration);
    if (icon) tl.to(icon, { opacity: 1, scale: 1, duration: transitionDuration }, startTime - transitionDuration);
    if (node) tl.to(node, { scale: 1.08, borderColor: "#D7AB11", backgroundColor: "#D7AB11", duration: transitionDuration }, startTime - transitionDuration);
  });

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      ScrollTrigger.getAll().filter(t => t.trigger === containerRef.current).forEach(t => t.kill());
    }
  };
};

// Mobile Fallback Timeline (Simple vertical reveal)
export const createProcessMobileReveal = (
  containerRef: React.RefObject<HTMLElement | null>,
  stepsRef: React.MutableRefObject<(HTMLElement | null)[]>,
  prefersReducedMotion: boolean
) => {
  if (prefersReducedMotion) return { cleanup: () => {} };

  const validSteps = stepsRef.current.filter(Boolean);
  const timelines: gsap.core.Timeline[] = [];

  validSteps.forEach((step) => {
    if (!step) return;
    
    const node = step.querySelector('.step-node');
    const title = step.querySelector('.step-title');
    
    // Set initial state
    gsap.set(step, { opacity: 0, y: 20 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: step,
        start: "top 85%",
        once: true
      }
    });

    tl.to(step, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
    if (title) tl.to(title, { color: "#D7AB11", duration: 0.4 }, "-=0.2");
    if (node) tl.to(node, { scale: 1.08, borderColor: "#D7AB11", backgroundColor: "#D7AB11", duration: 0.4 }, "-=0.4");
    
    timelines.push(tl);
  });

  return {
    cleanup: () => {
      timelines.forEach(tl => tl.kill());
    }
  };
};
