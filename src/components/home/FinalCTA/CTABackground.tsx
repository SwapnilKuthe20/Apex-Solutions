"use client";

import { useRef, useEffect, useState } from "react";
import { createCTABackgroundTimeline } from "@/animations/finalCta";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";
import { cn } from "@/lib/utils";

export function CTABackground() {
  const svgRef = useRef<SVGSVGElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Basic touch detection to simplify SVG on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const { cleanup } = createCTABackgroundTimeline(svgRef, prefersReducedMotion);
      return cleanup;
    }, svgRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Soft Radial Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1200px] aspect-square bg-apex-navy-800/40 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* Engineering SVG Graphic */}
      <svg
        ref={svgRef}
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full",
          isMobile ? "opacity-30 scale-150" : "opacity-40"
        )}
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#CBD4E2" strokeWidth="1" strokeOpacity="0.15" fill="none">
          {/* Base Static Architecture */}
          <path d="M-100 400 L1540 400" />
          <path d="M720 -100 L720 900" strokeOpacity="0.05" />
          
          {/* Animated Paths */}
          <path className="engineering-path" d="M0 200 Q 360 200, 720 400 T 1440 600" strokeDasharray="10 10" />
          <path className="engineering-path" d="M0 600 Q 360 600, 720 400 T 1440 200" strokeDasharray="10 10" />
          
          {/* Only render complex paths on Desktop to save mobile performance */}
          {!isMobile && (
            <>
              <path className="engineering-path" d="M300 0 C 300 400, 1140 400, 1140 800" strokeDasharray="15 15" strokeOpacity="0.1" />
              <path className="engineering-path" d="M200 800 C 200 400, 1240 400, 1240 0" strokeDasharray="5 15" strokeOpacity="0.1" />
            </>
          )}
        </g>

        {/* Nodes */}
        <g fill="#D7AB11" fillOpacity="0.5">
          <circle className="engineering-node" cx="720" cy="400" r="4" fillOpacity="0.8" />
          <circle className="engineering-node" cx="360" cy="200" r="2" />
          <circle className="engineering-node" cx="1080" cy="600" r="2" />
          {!isMobile && (
            <>
              <circle className="engineering-node" cx="1080" cy="200" r="2" />
              <circle className="engineering-node" cx="360" cy="600" r="2" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
