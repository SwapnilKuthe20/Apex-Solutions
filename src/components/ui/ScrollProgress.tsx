"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/animations/gsap";

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current) return;

    // Use gsap quickSetter for high performance DOM updates without React re-renders
    const setHeight = gsap.quickSetter(progressRef.current, "height", "%");

    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        setHeight(self.progress * 100);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      className="fixed right-2 top-1/2 -translate-y-1/2 z-50 h-32 w-1 rounded-full bg-apex-navy-800/10 pointer-events-none hidden md:block"
      aria-hidden="true"
    >
      <div
        ref={progressRef}
        className="w-full bg-apex-gold-500 rounded-full"
        style={{ height: "0%" }}
      />
    </div>
  );
}
