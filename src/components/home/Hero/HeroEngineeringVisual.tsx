"use client";

import { useMouseParallax } from "@/hooks/useMouseParallax";
import { HeroNetwork } from "./HeroNetwork";
import { HeroNodes } from "./HeroNodes";
import { HeroParticles } from "./HeroParticles";

interface HeroEngineeringVisualProps {
  pathsRef: React.MutableRefObject<(SVGPathElement | null)[]>;
  nodesRef: React.MutableRefObject<(SVGCircleElement | null)[]>;
  particlesRef: React.MutableRefObject<(SVGCircleElement | null)[]>;
}

export function HeroEngineeringVisual({
  pathsRef,
  nodesRef,
  particlesRef
}: HeroEngineeringVisualProps) {
  // Apply parallax to the entire visual, but layers could be split if desired
  const parallaxRef = useMouseParallax<SVGSVGElement>({ depth: 0.1 });

  return (
    <div className="relative w-full h-full flex items-center justify-center lg:justify-end min-h-[400px] lg:min-h-full opacity-0 will-change-transform" id="hero-visual-container">
      <svg
        ref={parallaxRef}
        viewBox="0 0 1000 800"
        className="w-full max-w-[800px] h-auto drop-shadow-sm will-change-transform"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Layer 1: Subtle Grid (Optional) */}
        <g stroke="#081E42" strokeWidth="1" opacity="0.03">
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 100} x2="1000" y2={i * 100} />
          ))}
        </g>

        {/* Layer 2: Subtle Geometric A */}
        <g opacity="0.04" stroke="#081E42" strokeWidth="2" fill="none" transform="translate(200, 100)">
          <path d="M300,50 L500,600 L100,600 Z" />
          <path d="M220,400 L380,400" />
        </g>

        {/* Layer 3: Connection Paths */}
        <HeroNetwork pathsRef={pathsRef} />

        {/* Layer 4: Activation Nodes */}
        <HeroNodes nodesRef={nodesRef} />

        {/* Layer 5: Data Particles */}
        <HeroParticles particlesRef={particlesRef} />
      </svg>
    </div>
  );
}
