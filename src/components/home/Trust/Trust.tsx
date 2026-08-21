"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { LogoMarquee } from "./LogoMarquee";
import { trustConfig } from "@/data/trust";
import { createTrustEntranceTimeline } from "@/animations/trust";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";

export function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const { cleanup } = createTrustEntranceTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        marqueeRef,
        prefersReducedMotion
      );
      return cleanup;
    }, sectionRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <Section variant="white" className="py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div ref={eyebrowRef} className="will-change-transform">
            <Eyebrow className="justify-center mb-6">{trustConfig.eyebrow}</Eyebrow>
          </div>
          
          <h2 
            ref={headlineRef}
            className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-800 tracking-tight mb-8 will-change-transform"
          >
            {trustConfig.headline}
          </h2>
          
          <p 
            ref={copyRef}
            className="text-[15px] md:text-[18px] lg:text-[20px] text-apex-slate-500 leading-relaxed max-w-2xl will-change-transform"
          >
            {trustConfig.description}
          </p>
        </div>
      </Container>
      
      {/* Marquee extends full width, breaking out of container intentionally */}
      <div ref={marqueeRef} className="will-change-transform w-full max-w-[1920px] mx-auto">
        <LogoMarquee />
      </div>
    </Section>
  );
}
