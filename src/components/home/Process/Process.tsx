"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { processConfig } from "@/data/process";
import { ProcessStep } from "./ProcessStep";
import { ProcessProgress } from "./ProcessProgress";
import { ProcessConnector } from "./ProcessConnector";
import { createProcessIntroTimeline, createProcessMasterTimeline, createProcessMobileReveal } from "@/animations/process";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLazyGSAP } from "@/hooks/useLazyGSAP";
import { gsap } from "@/animations/gsap";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Intro Refs
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  
  // Interaction Refs
  const pinnedContainerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLLIElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Desktop check
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleStepChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useLazyGSAP(sectionRef, () => {
    const ctx = gsap.context(() => {
      // 1. Intro Reveal
      createProcessIntroTimeline(sectionRef, eyebrowRef, headlineRef, copyRef, prefersReducedMotion);

      // 2. Process Interaction
      if (isDesktop) {
        createProcessMasterTimeline(
          pinnedContainerRef,
          stepsRef,
          pathRef,
          handleStepChange,
          prefersReducedMotion
        );
      } else {
        createProcessMobileReveal(
          pinnedContainerRef,
          stepsRef,
          prefersReducedMotion
        );
      }
    }, sectionRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion, isDesktop, handleStepChange]);

  return (
    <Section variant="surface" className="py-24 md:py-32 lg:py-40 overflow-hidden" ref={sectionRef}>
      <Container>
        
        {/* Intro Header */}
        <div className="max-w-3xl mb-16 md:mb-24 lg:mb-32">
          <div ref={eyebrowRef} className="will-change-transform mb-6">
            <Eyebrow>{processConfig.eyebrow}</Eyebrow>
          </div>
          <h2 
            ref={headlineRef}
            className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-900 tracking-tight will-change-transform mb-6"
          >
            {processConfig.headline}
          </h2>
          <p 
            ref={copyRef}
            className="text-[18px] md:text-[20px] text-apex-slate-500 leading-relaxed will-change-transform max-w-xl"
          >
            {processConfig.description}
          </p>
        </div>

        {/* Process Journey */}
        <div 
          ref={pinnedContainerRef}
          className="relative lg:h-screen lg:flex lg:flex-col lg:justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
            
            {/* The Animated Line */}
            <ProcessConnector ref={pathRef} />
            
            {/* Steps List */}
            <div className="col-span-1 lg:col-span-10">
              <ol className="relative m-0 p-0 list-none">
                {processConfig.steps.map((step, idx) => (
                  <ProcessStep 
                    key={step.id} 
                    step={step} 
                    ref={(el) => { stepsRef.current[idx] = el; }} 
                  />
                ))}
              </ol>
            </div>

            {/* Pagination / Progress (Desktop Only) */}
            <div className="hidden lg:flex col-span-2 flex-col items-end justify-center sticky top-1/2 -translate-y-1/2 h-fit">
               <ProcessProgress 
                 activeIndex={activeIndex} 
                 totalSteps={processConfig.steps.length} 
               />
            </div>

          </div>
        </div>

      </Container>
    </Section>
  );
}
