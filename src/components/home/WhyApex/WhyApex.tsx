"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { whyApexConfig } from "@/data/whyApex";
import { WhyApexStatement } from "./WhyApexStatement";
import { WhyApexPrinciple } from "./WhyApexPrinciple";
import { createWhyApexIntroTimeline, createWhyApexPrinciplesTimeline } from "@/animations/whyApex";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLazyGSAP } from "@/hooks/useLazyGSAP";
import { gsap } from "@/animations/gsap";

export function WhyApex() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Intro Refs
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);

  // Principles Refs
  const principlesContainerRef = useRef<HTMLDivElement>(null);
  const principleItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion();

  useLazyGSAP(sectionRef, () => {
    const ctx = gsap.context(() => {
      const intro = createWhyApexIntroTimeline(
        sectionRef,
        eyebrowRef,
        statementRef,
        copyRef,
        prefersReducedMotion
      );

      const principles = createWhyApexPrinciplesTimeline(
        principlesContainerRef,
        principleItemsRef,
        prefersReducedMotion
      );

      return () => {
        intro.cleanup();
        principles.cleanup();
      };
    }, sectionRef);
    
    return () => ctx.revert();
  });

  return (
    <Section variant="surface" className="py-16 md:py-24 overflow-hidden" ref={sectionRef}>
      <Container>
        
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Side: Large Editorial Statement */}
          <div className="col-span-1 lg:col-span-5 relative z-10">
            <WhyApexStatement 
              eyebrow={whyApexConfig.eyebrow}
              statement={whyApexConfig.statement}
              description={whyApexConfig.description}
              eyebrowRef={eyebrowRef}
              statementRef={statementRef}
              copyRef={copyRef}
            />
          </div>
          
          {/* Right Side: Differentiator List */}
          <div 
            ref={principlesContainerRef} 
            className="col-span-1 lg:col-span-6 lg:col-start-7 flex flex-col pt-8 lg:pt-0 relative z-10"
          >
            {whyApexConfig.principles.map((principle, index) => (
              <WhyApexPrinciple 
                key={principle.id} 
                principle={principle} 
                ref={(el) => { principleItemsRef.current[index] = el; }}
              />
            ))}
          </div>

        </div>

      </Container>
    </Section>
  );
}
