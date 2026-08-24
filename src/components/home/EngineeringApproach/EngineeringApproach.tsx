"use client";

import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { EngineeringJourney } from "./EngineeringJourney";
import { EngineeringPrinciples } from "./EngineeringPrinciples";
import { engineeringApproachConfig } from "@/data/engineeringApproach";

export function EngineeringApproach() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section variant="white" className="relative py-16 md:py-24 overflow-hidden bg-white" ref={sectionRef}>
      
      {/* Background Decoration: Upper-Left Dotted Matrix */}
      <div 
        className="absolute top-8 left-6 lg:left-12 w-36 h-36 bg-[radial-gradient(circle_at_center,var(--apex-slate-300)_1.5px,transparent_1.5px)] opacity-45 pointer-events-none -z-10"
        style={{ backgroundSize: "16px 16px" }}
      />

      {/* Background Decoration: Upper-Right Concentric Arcs */}
      <svg 
        className="absolute -top-12 -right-12 w-80 lg:w-[450px] h-80 lg:h-[450px] pointer-events-none opacity-40 -z-10" 
        viewBox="0 0 400 400"
      >
        <circle cx="400" cy="0" r="140" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
        <circle cx="400" cy="0" r="220" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
        <circle cx="400" cy="0" r="300" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
        <circle cx="400" cy="0" r="380" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
      </svg>

      {/* Background Decoration: Small Gold Accent Dot on Right */}
      <div className="w-2.5 h-2.5 rounded-full bg-apex-gold-500 absolute top-40 right-16 lg:right-28 opacity-90 pointer-events-none -z-10 shadow-sm" />

      {/* Background Decoration: Bottom Flowing Wave Dot Pattern */}
      <div 
        className="absolute -bottom-6 left-0 right-0 h-24 bg-[radial-gradient(ellipse_at_bottom,var(--apex-slate-300)_1.5px,transparent_1.5px)] opacity-35 pointer-events-none -z-10"
        style={{ backgroundSize: "20px 20px" }}
      />

      <Container>
        {/* Section Header with Staggered Entrance */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}>
            <Eyebrow className="justify-center mb-3.5">
              {engineeringApproachConfig.eyebrow}
            </Eyebrow>
          </div>
          
          <h2 className={`text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.15] font-bold text-apex-navy-900 tracking-tight mb-4 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}>
            <span>{engineeringApproachConfig.headlineLine1}</span>
            <br />
            <span>{engineeringApproachConfig.headlineLine2Prefix}</span>
            <span className="text-apex-gold-500">
              {engineeringApproachConfig.headlineLine2Highlight}
            </span>
          </h2>
          
          <p className={`text-[14.5px] md:text-[16px] text-apex-slate-500 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {engineeringApproachConfig.description}
          </p>
        </div>

        {/* 5-Step Process Timeline with Flowing Motion */}
        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <EngineeringJourney isVisible={isVisible} />
        </div>

        {/* Bottom Principles Panel with Subtle Fade */}
        <div className={`transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <EngineeringPrinciples />
        </div>
      </Container>
    </Section>
  );
}
