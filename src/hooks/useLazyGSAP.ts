"use client";

import { useEffect, useState, RefObject } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

/**
 * A hook that delays initialization of GSAP logic until the element is near the viewport.
 * This significantly reduces main thread blocking (TBT) and improves LCP.
 */
export function useLazyGSAP(
  ref: RefObject<HTMLElement | null>,
  callback: () => (() => void) | void,
  deps: React.DependencyList = [],
  options: IntersectionObserverInit = { rootMargin: "600px 0px" }
) {
  const [shouldInitialize, setShouldInitialize] = useState(false);

  useEffect(() => {
    if (!ref.current || shouldInitialize) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldInitialize(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options.rootMargin, shouldInitialize]);

  useIsomorphicLayoutEffect(() => {
    if (!shouldInitialize) return;
    
    const cleanup = callback();
    return () => {
      if (cleanup) cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldInitialize, ...deps]);
}
