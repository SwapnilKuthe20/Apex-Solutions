"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { caseStudiesConfig } from "@/data/caseStudies";
import { CaseStudyStory } from "./CaseStudyStory";
import { createCaseStudiesIntroTimeline } from "@/animations/caseStudies";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Intro Refs
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = createCaseStudiesIntroTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        prefersReducedMotion
      );

      return () => {
        intro.cleanup();
      };
    }, sectionRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <Section variant="surface" className="py-16 md:py-24 overflow-hidden" ref={sectionRef}>
      <Container>
        
        {/* Intro Header */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <div ref={eyebrowRef} className="will-change-transform mb-6">
            <Eyebrow>{caseStudiesConfig.eyebrow}</Eyebrow>
          </div>
          <h2 
            ref={headlineRef}
            className="text-[34px] md:text-[48px] lg:text-[64px] leading-[1.05] font-semibold text-apex-navy-900 tracking-tight will-change-transform mb-8"
          >
            {caseStudiesConfig.headline}
          </h2>
          <p 
            ref={copyRef}
            className="text-[18px] md:text-[20px] lg:text-[24px] text-apex-slate-500 leading-relaxed will-change-transform max-w-2xl"
          >
            {caseStudiesConfig.description}
          </p>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-16 md:gap-0">
          {caseStudiesConfig.caseStudies.map((caseStudy, idx) => (
            <CaseStudyStory 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              index={idx} 
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}
