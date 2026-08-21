/**
 * Apex Solutions Motion Tokens & Easing Curves
 * Centralized motion specifications per Animation System Architecture
 */

export const motionTokens = {
  duration: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.6,
    slow: 0.9,
    cinematic: 1.2,
  },
  distance: {
    small: 20,
    medium: 40,
    large: 60,
    xlarge: 100,
  },
  stagger: {
    tight: 0.05,
    normal: 0.1,
    relaxed: 0.16,
  },
  easing: {
    powerOut: "power3.out",
    powerInOut: "power3.inOut",
    expoOut: "expo.out",
    smooth: "cubic-bezier(0.25, 1, 0.5, 1)",
    bounceSoft: "back.out(1.4)",
  },
};
