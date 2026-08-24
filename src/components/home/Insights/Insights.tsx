"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { insightsConfig } from "@/data/insights";
import { InsightList } from "./InsightList";
import { createInsightsIntroTimeline } from "@/animations/insights";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLazyGSAP } from "@/hooks/useLazyGSAP";
import { gsap } from "@/animations/gsap";

export function Insights() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Intro Refs
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<(HTMLElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion();

  useLazyGSAP(sectionRef, () => {
    const ctx = gsap.context(() => {
      // Find all article elements within the section to stagger them
      const articles = gsap.utils.toArray('article') as HTMLElement[];
      articlesRef.current = articles;

      const intro = createInsightsIntroTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        ctaRef,
        articlesRef,
        prefersReducedMotion
      );

      return () => {
        intro.cleanup();
      };
    }, sectionRef);
    
    return () => ctx.revert();
  });

  if (insightsConfig.insights.length === 0) {
    return null; // Empty state guard as requested
  }

  return (
    <Section variant="white" className="py-24 md:py-32 lg:py-40 overflow-hidden" ref={sectionRef}>
      <Container>
        
        {/* Intro Header & Global CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div ref={eyebrowRef} className="will-change-transform mb-6">
              <Eyebrow>{insightsConfig.eyebrow}</Eyebrow>
            </div>
            <h2 
              ref={headlineRef}
              className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-900 tracking-tight will-change-transform mb-6"
            >
              {insightsConfig.headline}
            </h2>
            <p 
              ref={copyRef}
              className="text-[18px] md:text-[20px] text-apex-slate-500 leading-relaxed will-change-transform"
            >
              {insightsConfig.description}
            </p>
          </div>

          <div ref={ctaRef} className="will-change-transform shrink-0 pb-2">
            <Link 
              href={insightsConfig.ctaHref}
              className="inline-flex items-center text-[15px] font-semibold text-apex-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm group"
            >
              <span className="group-hover:text-apex-gold-600 transition-colors">{insightsConfig.ctaText}</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-apex-gold-600" />
            </Link>
          </div>
        </div>

        {/* Editorial Layout */}
        <InsightList insights={insightsConfig.insights} />

      </Container>
    </Section>
  );
}
