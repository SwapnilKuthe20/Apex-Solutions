"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { IndustryCard } from "./IndustryCard";
import { IndustryTrack } from "./IndustryTrack";
import { industriesConfig } from "@/data/industries";
import { createIndustryIntroTimeline, createIndustryHorizontalTimeline } from "@/animations/industrySolutions";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLazyGSAP } from "@/hooks/useLazyGSAP";
import { gsap } from "@/animations/gsap";

export function IndustrySolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useLazyGSAP(sectionRef, () => {
    const ctx = gsap.context(() => {
      // 1. Intro Animation Sequence
      const intro = createIndustryIntroTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        prefersReducedMotion
      );

      // 2. Horizontal Scroll Pinning Sequence
      const horizontal = createIndustryHorizontalTimeline(
        sectionRef,
        trackRef,
        industriesConfig.industries.length,
        prefersReducedMotion
      );

      return () => {
        intro.cleanup();
        horizontal.cleanup();
      };
    }, sectionRef);
    
    return () => ctx.revert();
  });

  return (
    <Section variant="white" className="py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      
      {/* Intro Header */}
      <Container className="mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-1 lg:col-span-7 xl:col-span-8">
            <div ref={eyebrowRef} className="will-change-transform">
              <Eyebrow className="mb-6">{industriesConfig.eyebrow}</Eyebrow>
            </div>
            <h2 
              ref={headlineRef}
              className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-800 tracking-tight will-change-transform"
            >
              {industriesConfig.headline}
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-5 xl:col-span-4 flex items-end">
            <p 
              ref={copyRef}
              className="text-[15px] md:text-[18px] lg:text-[20px] text-apex-slate-500 leading-relaxed will-change-transform pb-2"
            >
              {industriesConfig.description}
            </p>
          </div>
        </div>
      </Container>

      {/* 
        Horizontal Track Area 
        On desktop, Container controls the left padding via CSS to align perfectly.
        On mobile, we just use standard container constraints.
      */}
      <div className="w-full relative px-6 md:px-8 lg:pl-[max(2rem,calc((100vw-1216px)/2))] lg:pr-0">
        <IndustryTrack ref={trackRef}>
          {industriesConfig.industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
          {/* Spacer block at end to give breathing room on horizontal scroll */}
          <div className="hidden lg:block w-[10vw] flex-shrink-0" />
        </IndustryTrack>
      </div>

    </Section>
  );
}
