"use client";

import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

/**
 * Hook to detect if the user is on a touch device
 */
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useIsomorphicLayoutEffect(() => {
    // Reliable detection for touch devices
    const checkTouch = () => {
      const matchMedia = window.matchMedia("(pointer: coarse)").matches;
      const hasTouchEvents = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouch(matchMedia || hasTouchEvents);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  return isTouch;
}
