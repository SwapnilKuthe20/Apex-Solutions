"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { trustConfig } from "@/data/trust";
import { TrustedCompanyLogo } from "./TrustedCompanyLogo";

export function Trust() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <Section variant="white" className="relative pt-6 md:pt-6 pb-6 md:pb-8 overflow-hidden" ref={sectionRef}>
      {/* Decorative Dot Grid - Top Left */}
      <div 
        className="absolute top-4 left-4 lg:left-12 w-32 lg:w-44 h-32 lg:h-44 bg-[radial-gradient(circle_at_center,var(--apex-slate-300)_1.5px,transparent_1.5px)] opacity-50 pointer-events-none -z-10"
        style={{ backgroundSize: "16px 16px" }}
      />

      {/* Decorative Dot Grid - Right Side */}
      <div 
        className="absolute top-28 right-4 lg:right-12 w-32 lg:w-44 h-32 lg:h-44 bg-[radial-gradient(circle_at_center,var(--apex-slate-300)_1.5px,transparent_1.5px)] opacity-50 pointer-events-none -z-10"
        style={{ backgroundSize: "16px 16px" }}
      />

      <Container>
        {/* Header content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          <Eyebrow className="justify-center mb-3.5">{trustConfig.eyebrow}</Eyebrow>
          
          <h2 className="text-[32px] md:text-[42px] lg:text-[48px] leading-tight font-bold text-apex-navy-900 tracking-tight mb-4">
            {trustConfig.headline}
          </h2>
          
          <p className="text-[15px] md:text-[16px] text-apex-slate-500 leading-relaxed max-w-2xl mx-auto">
            We partner with startups, SMEs and enterprises to build secure,<br className="hidden md:inline" /> scalable and future-ready digital solutions.
          </p>
        </div>

        {/* 6 Company Logo Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5 max-w-6xl mx-auto">
          {trustConfig.companies.map((company) => (
            <div 
              key={company.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(8,30,66,0.06)] h-24 lg:h-28 flex items-center justify-center p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
            >
              <TrustedCompanyLogo company={company} />
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-8 lg:mt-10">
          <div className="w-8 h-1.5 rounded-full bg-apex-gold-500" />
          <div className="w-8 h-1.5 rounded-full bg-slate-200" />
          <div className="w-8 h-1.5 rounded-full bg-slate-200" />
          <div className="w-8 h-1.5 rounded-full bg-slate-200" />
        </div>
      </Container>
    </Section>
  );
}
