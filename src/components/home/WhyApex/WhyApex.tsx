"use client";

import { useRef } from "react";
import { Section } from "@/components/ui/Section";
import { whyApexConfig } from "@/data/whyApex";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLazyGSAP } from "@/hooks/useLazyGSAP";
import { gsap } from "@/animations/gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeatureGrid } from "./FeatureGrid";
import { MissionPanel } from "./MissionPanel";
import { OurImpact } from "./OurImpact";

export function WhyApex() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();

  useLazyGSAP(sectionRef, () => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal animations could be added here similar to createWhyApexIntroTimeline
      // For now, we rely on CSS transitions/hover effects where possible, 
      // but can expand this if GSAP scrolling is explicitly needed per element.
    }, sectionRef);

    return () => ctx.revert();
  });

  return (
    <Section variant="surface" className="overflow-hidden p-0 relative" ref={sectionRef}>
      {/* 50/50 Split Layout Section A */}
      <div className="w-full flex flex-col lg:flex-row min-h-[800px]">
        
        {/* LEFT WHITE PANEL: Engineering Excellence */}
        <div 
          ref={leftPanelRef}
          className="w-full lg:w-1/2 bg-white relative flex flex-col pt-16 lg:pt-24 pb-16 lg:pb-32 px-4 sm:px-6 lg:px-16 xl:px-24"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 lg:w-12 h-[2px] bg-apex-gold-500 rounded-full" />
            <span className="text-apex-navy-900 font-bold tracking-wider text-xs lg:text-sm uppercase">
              {whyApexConfig.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-bold leading-[1.1] tracking-tight mb-8">
            <span className="text-apex-navy-900 block">{whyApexConfig.headline.part1}</span>
            <span className="text-apex-navy-900">{whyApexConfig.headline.part2}</span>
            <span className="text-apex-gold-500">{whyApexConfig.headline.highlight}</span>
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-[500px]">
            {whyApexConfig.description}
          </p>

          {/* Feature Grid */}
          <FeatureGrid />

          {/* CTA */}
          <div className="mt-auto pt-8">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-apex-navy-900 text-white px-8 py-4 rounded-lg font-medium text-sm lg:text-base transition-all duration-300 hover:bg-apex-navy-800 hover:shadow-lg group"
            >
              Let&apos;s Work Together
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Decorative Wave/Dot Pattern */}
          <div 
            className="absolute bottom-8 left-8 w-32 h-32 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#64748B 2px, transparent 2px)",
              backgroundSize: "16px 16px"
            }}
          />
        </div>

        {/* RIGHT DARK PANEL: Mission Image */}
        <div 
          ref={rightPanelRef}
          className="w-full lg:w-1/2 relative min-h-[600px] lg:min-h-auto"
        >
          <MissionPanel />
        </div>

      </div>

      {/* SECTION B: OUR IMPACT */}
      <div ref={impactRef}>
        <OurImpact />
      </div>

    </Section>
  );
}
