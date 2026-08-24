"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { HeroContent } from "./HeroContent";
import { HeroEngineeringVisual } from "./HeroEngineeringVisual";
import { createHeroEntranceTimeline } from "@/animations/hero";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Refs for animation targeting
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const trustLogosRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  
  // Array refs for SVG internals
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);
  const nodesRef = useRef<(SVGCircleElement | null)[]>([]);
  const particlesRef = useRef<(SVGCircleElement | null)[]>([]);
  
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Wait for a tick to ensure refs are attached
    const ctx = gsap.context(() => {
      // Need visualRef to point to the actual visual container for GSAP
      const visualElement = document.getElementById("hero-visual-container");
      if (visualElement && !visualRef.current) {
        visualRef.current = visualElement as HTMLDivElement;
      }
      
      const { cleanup } = createHeroEntranceTimeline(
        containerRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        ctasRef,
        trustLogosRef,
        visualRef,
        pathsRef,
        nodesRef,
        particlesRef,
        prefersReducedMotion
      );
      
      return cleanup;
    }, containerRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[auto] md:min-h-[85vh] lg:min-h-[92vh] xl:min-h-[95vh] flex items-center bg-white overflow-x-clip pt-24 pb-16 lg:pt-28 lg:pb-8"
    >
      <Container className="relative z-10 w-full h-full max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row h-full items-center justify-between gap-10 lg:gap-8 xl:gap-14">
          
          {/* Left Column: Typography (~45% split) */}
          <div className="w-full lg:w-[42%] flex flex-col justify-center h-full order-2 lg:order-1 mt-12 lg:mt-0">
            <HeroContent 
              eyebrowRef={eyebrowRef}
              headlineRef={headlineRef}
              copyRef={copyRef}
              ctasRef={ctasRef}
              trustLogosRef={trustLogosRef}
            />
          </div>
          
          {/* Right Column: Engineering Visual (~50% split) */}
          <div className="w-full lg:w-[55%] flex items-center justify-center lg:justify-end h-full order-1 lg:order-2 relative">
            <HeroEngineeringVisual />
          </div>
          
        </div>
      </Container>
    </section>
  );
}
