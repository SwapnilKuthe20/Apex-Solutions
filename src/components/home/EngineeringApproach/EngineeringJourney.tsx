"use client";

import { useRef, useEffect } from "react";
import { EngineeringPath } from "./EngineeringPath";
import { EngineeringStep } from "./EngineeringStep";
import { processConfig } from "@/data/engineeringApproach";
import { createEngineeringJourneyTimeline } from "@/animations/engineeringApproach";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";

export function EngineeringJourney() {
  const pinnedContainerRef = useRef<HTMLDivElement>(null);
  const goldPathRef = useRef<SVGPathElement>(null);
  const nodesRef = useRef<(SVGCircleElement | null)[]>([]);
  const stepContainersRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const { cleanup } = createEngineeringJourneyTimeline(
        pinnedContainerRef,
        goldPathRef,
        nodesRef,
        stepContainersRef,
        prefersReducedMotion
      );
      return cleanup;
    }, pinnedContainerRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Positions on desktop relative to the SVG nodes (y offsets)
  // Node CYs in SVG are: 100, 250, 400, 550, 700
  // Container H is 800px. We use % tops.
  const desktopPositions = [
    { top: "12%", align: "right" as const }, // Node 1 (100)
    { top: "31%", align: "left" as const },  // Node 2 (250)
    { top: "50%", align: "right" as const }, // Node 3 (400)
    { top: "68%", align: "left" as const },  // Node 4 (550)
    { top: "87%", align: "right" as const }, // Node 5 (700)
  ];

  return (
    <>
      {/* 
        DESKTOP LAYOUT (Pinned)
        Visible only on lg+ screens 
      */}
      <div 
        ref={pinnedContainerRef} 
        className="hidden lg:block relative w-full h-[80vh] max-h-[900px] min-h-[700px] max-w-5xl mx-auto mt-24"
      >
        {/* The SVG architecture */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[400px] z-10 pointer-events-none">
          <EngineeringPath goldPathRef={goldPathRef} nodesRef={nodesRef} />
        </div>

        {/* The Steps Content */}
        {processConfig.steps.map((step, index) => {
          const pos = desktopPositions[index];
          return (
            <div 
              key={step.id}
              ref={(el) => { stepContainersRef.current[index] = el; }}
              className="absolute w-[calc(50%-100px)] will-change-transform z-20"
              style={{ 
                top: pos.top, 
                [pos.align === "right" ? "left" : "right"]: "55%", 
                transform: "translateY(-50%)" 
              }}
            >
              <EngineeringStep step={step} align={pos.align} />
            </div>
          );
        })}
      </div>

      {/* 
        MOBILE / TABLET LAYOUT (Unpinned Vertical Stack)
        Visible only below lg screens 
      */}
      <div className="lg:hidden flex flex-col gap-12 mt-16 relative">
        {/* Subtle vertical line connecting them on mobile */}
        <div className="absolute top-8 bottom-8 left-[15px] md:left-1/2 md:-translate-x-1/2 w-[2px] bg-apex-border opacity-50 z-0" />
        
        {processConfig.steps.map((step, index) => {
          const isEven = index % 2 !== 0; // 0-indexed, so 1,3 are even steps (2,4)
          return (
            <div key={step.id} className="relative z-10 flex flex-row md:justify-center items-start">
              {/* Mobile layout keeps step content to the right, Tablet alternates */}
              <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'} pl-12 md:pl-0`}>
                {/* 
                  Render a small node for mobile 
                  On Mobile: fixed left. On Tablet: positioned in center
                */}
                <div className="absolute left-[9px] md:left-1/2 top-1 w-3 h-3 bg-apex-gold-500 rounded-full border-2 border-white shadow-sm md:-translate-x-[6px]" />
                
                <EngineeringStep step={step} align={isEven ? "left" : "right"} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
