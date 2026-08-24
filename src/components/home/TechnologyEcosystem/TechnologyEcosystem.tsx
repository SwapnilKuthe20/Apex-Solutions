"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { TechnologyCategoryCard } from "./TechnologyCategoryCard";
import { TechnologyArchitecture } from "./TechnologyArchitecture";
import { TechnologyPrinciples } from "./TechnologyPrinciples";
import { technologyEcosystemConfig } from "@/data/technologies";
import { createTechnologyEntranceTimeline } from "@/animations/technology";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLazyGSAP } from "@/hooks/useLazyGSAP";
import { gsap } from "@/animations/gsap";

export function TechnologyEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerElementsRef = useRef<HTMLDivElement>(null);
  const apexCoreRef = useRef<SVGGElement>(null);
  
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);
  const nodesRef = useRef<(SVGCircleElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const principlesRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const prefersReducedMotion = useReducedMotion();
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  useLazyGSAP(sectionRef, () => {
    const ctx = gsap.context(() => {
      const { cleanup } = createTechnologyEntranceTimeline(
        sectionRef,
        headerElementsRef,
        apexCoreRef,
        pathsRef,
        nodesRef,
        cardsRef,
        principlesRef,
        prefersReducedMotion
      );
      return cleanup;
    }, sectionRef);
    
    return () => ctx.revert();
  });

  // Divide categories into left and right for desktop layout around the center SVG
  const leftCategories = technologyEcosystemConfig.categories.slice(0, 3);
  const rightCategories = technologyEcosystemConfig.categories.slice(3, 6);

  return (
    <Section variant="surface" className="py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      <Container>
        {/* Header Elements */}
        <div ref={headerElementsRef} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24 will-change-transform">
          <Eyebrow className="justify-center mb-6">{technologyEcosystemConfig.eyebrow}</Eyebrow>
          <h2 className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-800 tracking-tight mb-8">
            {technologyEcosystemConfig.headline}
          </h2>
          <p className="text-[15px] md:text-[18px] lg:text-[20px] text-apex-slate-500 leading-relaxed max-w-2xl">
            {technologyEcosystemConfig.description}
          </p>
        </div>

        {/* Ecosystem Interactive Layout */}
        <div className="relative">
          
          {/* Mobile Layout: Stacked Cards (visible below lg) */}
          <div className="flex flex-col gap-6 lg:hidden relative z-10">
            {technologyEcosystemConfig.categories.map((category, index) => (
              <div key={category.id} ref={(el) => { cardsRef.current[index] = el; }}>
                <TechnologyCategoryCard 
                  category={category}
                  isActive={activeCategoryId === category.id}
                  onMouseEnter={() => setActiveCategoryId(category.id)}
                  onMouseLeave={() => setActiveCategoryId(null)}
                />
              </div>
            ))}
          </div>

          {/* Desktop Layout: Split Grid around SVG (visible lg and up) */}
          <div className="hidden lg:grid grid-cols-12 gap-8 relative z-10">
            
            {/* Left Column */}
            <div className="col-span-3 flex flex-col justify-between gap-8 py-8">
              {leftCategories.map((category, idx) => (
                <div key={category.id} ref={(el) => { cardsRef.current[idx] = el; }}>
                  <TechnologyCategoryCard 
                    category={category}
                    isActive={activeCategoryId === category.id}
                    onMouseEnter={() => setActiveCategoryId(category.id)}
                    onMouseLeave={() => setActiveCategoryId(null)}
                  />
                </div>
              ))}
            </div>

            {/* Center Column: SVG Space Reservation */}
            <div className="col-span-6 relative pointer-events-none">
              {/* The SVG is positioned absolutely inside the relative parent wrapper below */}
            </div>

            {/* Right Column */}
            <div className="col-span-3 flex flex-col justify-between gap-8 py-8">
              {rightCategories.map((category, idx) => (
                <div key={category.id} ref={(el) => { cardsRef.current[idx + 3] = el; }}>
                  <TechnologyCategoryCard 
                    category={category}
                    isActive={activeCategoryId === category.id}
                    onMouseEnter={() => setActiveCategoryId(category.id)}
                    onMouseLeave={() => setActiveCategoryId(null)}
                  />
                </div>
              ))}
            </div>
            
          </div>

          {/* Absolute Desktop SVG Architecture */}
          <div className="hidden lg:block absolute inset-0 -top-8 pointer-events-none z-0">
            <TechnologyArchitecture 
              apexCoreRef={apexCoreRef}
              pathsRef={pathsRef}
              nodesRef={nodesRef}
              activeCategoryId={activeCategoryId}
            />
          </div>

        </div>

        {/* Principles Strip */}
        <TechnologyPrinciples principlesRef={principlesRef} />
        
      </Container>
    </Section>
  );
}
