"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { EngineeringJourney } from "./EngineeringJourney";
import { processConfig } from "@/data/engineeringApproach";
import { createEngineeringIntroTimeline } from "@/animations/engineeringApproach";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";

export function EngineeringApproach() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const { cleanup } = createEngineeringIntroTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        prefersReducedMotion
      );
      return cleanup;
    }, sectionRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <Section variant="surface" className="py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      <Container>
        {/* Editorial Intro Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-1 lg:col-span-7 xl:col-span-8">
            <div ref={eyebrowRef} className="will-change-transform">
              <Eyebrow className="mb-6">{processConfig.eyebrow}</Eyebrow>
            </div>
            <h2 
              ref={headlineRef}
              className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-800 tracking-tight will-change-transform"
            >
              {processConfig.headline}
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-5 xl:col-span-4 flex items-end">
            <p 
              ref={copyRef}
              className="text-[15px] md:text-[18px] lg:text-[20px] text-apex-slate-500 leading-relaxed will-change-transform pb-2"
            >
              {processConfig.description}
            </p>
          </div>
        </div>

        {/* The Core Journey Integration */}
        <EngineeringJourney />
      </Container>
    </Section>
  );
}
