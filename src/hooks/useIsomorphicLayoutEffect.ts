import { useEffect, useLayoutEffect } from "react";

/**
 * Safe useLayoutEffect for SSR
 * Prevents warning messages when rendering on the server
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
