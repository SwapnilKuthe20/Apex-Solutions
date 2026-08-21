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
      className="relative w-full min-h-[auto] md:min-h-[75vh] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center bg-white overflow-hidden pt-24 pb-20 lg:py-0"
    >
      {/* Optional ultra-subtle background surface for depth */}
      <div className="absolute inset-0 bg-[#F7F9FC] opacity-40 pointer-events-none" aria-hidden="true" />
      
      <Container className="relative z-10 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-full items-center">
          
          {/* Left Column: Typography */}
          <div className="col-span-1 lg:col-span-6 xl:col-span-5 flex flex-col justify-center h-full order-2 lg:order-1 mt-8 lg:mt-0">
            <HeroContent 
              eyebrowRef={eyebrowRef}
              headlineRef={headlineRef}
              copyRef={copyRef}
              ctasRef={ctasRef}
            />
          </div>
          
          {/* Right Column: Engineering Visual */}
          <div className="col-span-1 lg:col-span-6 xl:col-span-7 flex items-center justify-center h-full order-1 lg:order-2">
            <HeroEngineeringVisual 
              pathsRef={pathsRef}
              nodesRef={nodesRef}
              particlesRef={particlesRef}
            />
          </div>
          
        </div>
      </Container>
    </section>
  );
}
