"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CapabilityCard } from "./CapabilityCard";
import { CapabilityGrid } from "./CapabilityGrid";
import { capabilitiesConfig } from "@/data/capabilities";
import { createCapabilitiesEntranceTimeline } from "@/animations/capabilities";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLazyGSAP } from "@/hooks/useLazyGSAP";
import { gsap } from "@/animations/gsap";

export function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useLazyGSAP(sectionRef, () => {
    const ctx = gsap.context(() => {
      const { cleanup } = createCapabilitiesEntranceTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        cardsRef,
        prefersReducedMotion
      );
      return cleanup;
    }, sectionRef);
    
    return () => ctx.revert();
  });

  return (
    <Section variant="white" className="py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      <Container>
        {/* Editorial Intro Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="col-span-1 lg:col-span-7 xl:col-span-8">
            <div ref={eyebrowRef} className="will-change-transform">
              <Eyebrow className="mb-6">{capabilitiesConfig.eyebrow}</Eyebrow>
            </div>
            <h2 
              ref={headlineRef}
              className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-800 tracking-tight will-change-transform"
            >
              {capabilitiesConfig.headline}
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-5 xl:col-span-4 flex items-end">
            <p 
              ref={copyRef}
              className="text-[15px] md:text-[18px] lg:text-[20px] text-apex-slate-500 leading-relaxed will-change-transform pb-2"
            >
              {capabilitiesConfig.description}
            </p>
          </div>
        </div>

        {/* Bento Grid layout */}
        <CapabilityGrid>
          {capabilitiesConfig.items.map((capability, index) => (
            <div 
              key={capability.id} 
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`col-span-1 ${
                capability.variant === "featured" 
                  ? "lg:col-span-8" 
                  : capability.variant === "wide" 
                    ? "lg:col-span-7"
                    : "lg:col-span-4"
              } will-change-transform`}
            >
              <CapabilityCard capability={capability} />
            </div>
          ))}
        </CapabilityGrid>
      </Container>
    </Section>
  );
}
