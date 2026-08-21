"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { finalCtaConfig } from "@/data/cta";
import { CTABackground } from "./CTABackground";
import { MagneticButton } from "./MagneticButton";
import { createCTARevealTimeline } from "@/animations/finalCta";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const { cleanup } = createCTARevealTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        ctaRef,
        prefersReducedMotion
      );
      return cleanup;
    }, sectionRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <Section 
      variant="navy-deep" 
      className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px] py-32 overflow-hidden bg-apex-navy-900" 
      ref={sectionRef}
    >
      <CTABackground />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <div ref={eyebrowRef} className="will-change-transform mb-6 md:mb-8">
            <Eyebrow className="text-apex-gold-500">{finalCtaConfig.eyebrow}</Eyebrow>
          </div>
          
          <h2 
            ref={headlineRef}
            className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] font-semibold text-white tracking-tight will-change-transform mb-6"
          >
            {finalCtaConfig.headline}
          </h2>
          
          <p 
            ref={copyRef}
            className="text-[16px] md:text-[18px] lg:text-[20px] text-apex-slate-300 leading-relaxed will-change-transform max-w-xl mb-12"
          >
            {finalCtaConfig.description}
          </p>
          
          <div ref={ctaRef} className="will-change-transform">
            <MagneticButton href={finalCtaConfig.ctaHref}>
              {finalCtaConfig.ctaText}
            </MagneticButton>
          </div>

        </div>
      </Container>
    </Section>
  );
}
