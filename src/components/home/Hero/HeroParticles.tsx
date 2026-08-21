"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/animations/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HeroParticlesProps {
  particlesRef: React.MutableRefObject<(SVGCircleElement | null)[]>;
}

export function HeroParticles({ particlesRef }: HeroParticlesProps) {
  const prefersReducedMotion = useReducedMotion();
  const initialized = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion || initialized.current) return;
    
    // Animate particles along specific hardcoded paths for performance 
    // rather than using MotionPathPlugin which is heavier.
    // Particle 1 (moves from 100,500 to 450,400)
    const p1 = particlesRef.current[0];
    if (p1) {
      gsap.to(p1, {
        motionPath: {
          path: [
            { x: 100, y: 500 },
            { x: 150, y: 500 },
            { x: 250, y: 400 },
            { x: 300, y: 400 },
            { x: 450, y: 400 }
          ],
          curviness: 1,
        },
        duration: 8,
        repeat: -1,
        ease: "none",
        delay: 2
      });
    }

    // Particle 2 (moves along another active path)
    const p2 = particlesRef.current[1];
    if (p2) {
      gsap.to(p2, {
        motionPath: {
          path: [
            { x: 450, y: 400 },
            { x: 500, y: 400 },
            { x: 550, y: 500 },
            { x: 600, y: 500 },
            { x: 750, y: 500 }
          ],
          curviness: 1,
        },
        duration: 10,
        repeat: -1,
        ease: "none",
        delay: 4
      });
    }

    initialized.current = true;
    
    return () => {
      if (p1) gsap.killTweensOf(p1);
      if (p2) gsap.killTweensOf(p2);
    };
  }, [prefersReducedMotion, particlesRef]);

  return (
    <g className="hero-particles">
      <circle
        ref={(el) => { particlesRef.current[0] = el; }}
        cx="0"
        cy="0"
        r="3"
        fill="#D7AB11"
        opacity="0"
        className="will-change-transform"
      />
      <circle
        ref={(el) => { particlesRef.current[1] = el; }}
        cx="0"
        cy="0"
        r="3"
        fill="#081E42"
        opacity="0"
        className="will-change-transform"
      />
    </g>
  );
}
