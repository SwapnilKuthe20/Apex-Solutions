import { gsap, ScrollTrigger } from "./gsap";
import { SafeSplitText } from "./splitText";

export const createEngineeringIntroTimeline = (
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

  // Preparation
  gsap.set([eyebrowRef.current, copyRef.current], { opacity: 0, y: 30 });
  
  let splitHeadline: SafeSplitText | null = null;
  if (headlineRef.current) {
    gsap.set(headlineRef.current, { opacity: 1 });
    // @ts-expect-error - SplitType string types mismatch
    splitHeadline = new SafeSplitText(headlineRef.current, { types: "lines", lineClass: "overflow-hidden" });
    gsap.set(splitHeadline.lines, { y: 40, opacity: 0 });
  }

  // Sequence
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

export const createEngineeringJourneyTimeline = (
  pinnedContainerRef: React.RefObject<HTMLElement | null>,
  goldPathRef: React.RefObject<SVGPathElement | null>,
  nodesRef: React.MutableRefObject<(SVGCircleElement | null)[]>,
  stepContainersRef: React.MutableRefObject<(HTMLElement | null)[]>,
  prefersReducedMotion: boolean
) => {
  // We use one master timeline with scrub for the pinning behavior
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinnedContainerRef.current,
      start: "top 15%",
      end: "+=3000", // 3000px of scrolling for the 5 steps
      pin: true,
      scrub: 1, // Smooth scrub
      anticipatePin: 1,
    }
  });

  if (prefersReducedMotion) {
    // If reduced motion is on, don't pin and don't animate the path.
    tl.scrollTrigger?.kill();
    tl.kill();
    
    // Just ensure everything is visible
    gsap.set(goldPathRef.current, { strokeDashoffset: 0, opacity: 1 });
    gsap.set(nodesRef.current, { scale: 1, opacity: 1, fill: "#D7AB11" });
    gsap.set(stepContainersRef.current, { opacity: 1, y: 0 });
    
    return {
      timeline: tl,
      cleanup: () => {}
    };
  }

  // Setup path drawing
  const path = goldPathRef.current;
  let pathLength = 0;
  if (path) {
    pathLength = path.getTotalLength();
    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
  }

  // Initial state setup for nodes and content
  gsap.set(nodesRef.current, { scale: 1, opacity: 0.5, fill: "#FFFFFF" });
  gsap.set(stepContainersRef.current, { opacity: 0.4, y: 0 });
  
  // Highlight the first node immediately
  gsap.set(nodesRef.current[0], { scale: 1.15, opacity: 1, fill: "#D7AB11" });
  gsap.set(stepContainersRef.current[0], { opacity: 1 });

  const numSteps = 5;
  const segmentLength = pathLength / (numSteps - 1);
  const timePerStep = 1 / (numSteps - 1); // Normalize timeline from 0 to 1

  // Create the timeline sequence
  for (let i = 0; i < numSteps - 1; i++) {
    const startTime = i * timePerStep;

    // Draw the path to the next node
    tl.to(path, {
      strokeDashoffset: pathLength - (segmentLength * (i + 1)),
      duration: timePerStep,
      ease: "none"
    }, startTime);

    // About halfway through the segment, start fading out the old step and fading in the new one
    const midTime = startTime + (timePerStep * 0.6);

    // Old step fades out
    tl.to(nodesRef.current[i], { scale: 1, opacity: 0.5, fill: "#FFFFFF", duration: timePerStep * 0.3 }, midTime);
    tl.to(stepContainersRef.current[i], { opacity: 0.2, y: -10, duration: timePerStep * 0.3 }, midTime);

    // New step fades in
    tl.to(nodesRef.current[i + 1], { scale: 1.15, opacity: 1, fill: "#D7AB11", duration: timePerStep * 0.4, ease: "power2.out" }, midTime);
    tl.fromTo(stepContainersRef.current[i + 1], 
      { opacity: 0.4, y: 10 },
      { opacity: 1, y: 0, duration: timePerStep * 0.4, ease: "power2.out" },
      midTime
    );
  }

  return {
    timeline: tl,
    cleanup: () => {
      tl.kill();
      ScrollTrigger.getById(pinnedContainerRef.current?.id || "")?.kill();
    }
  };
};
