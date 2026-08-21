import { gsap } from "./gsap";

export const animatePageIn = (element: HTMLElement, onComplete?: () => void) => {
  gsap.to(element, {
    scaleY: 0,
    transformOrigin: "bottom",
    duration: 0.6,
    ease: "power3.inOut",
    onComplete: () => {
      gsap.set(element, { display: "none" });
      if (onComplete) onComplete();
    }
  });
};

export const animatePageOut = (element: HTMLElement, onComplete?: () => void) => {
  gsap.set(element, { display: "block", scaleY: 0, transformOrigin: "top" });
  gsap.to(element, {
    scaleY: 1,
    duration: 0.6,
    ease: "power3.inOut",
    onComplete: () => {
      if (onComplete) onComplete();
    }
  });
};
