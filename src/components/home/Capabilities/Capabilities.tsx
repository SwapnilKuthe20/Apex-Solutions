"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CapabilityCard } from "./CapabilityCard";
import { capabilitiesConfig } from "@/data/capabilities";
import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Capabilities() {
  return (
    <Section variant="surface" className="relative bg-[#FAFBFD] overflow-hidden">
      {/* Corner Decorative Dot Matrices */}
      <div 
        className="absolute top-8 left-6 lg:left-12 w-36 h-36 bg-[radial-gradient(circle_at_center,var(--apex-slate-300)_1.5px,transparent_1.5px)] opacity-40 pointer-events-none -z-10"
        style={{ backgroundSize: "16px 16px" }}
      />
      <div 
        className="absolute top-8 right-6 lg:right-12 w-36 h-36 bg-[radial-gradient(circle_at_center,var(--apex-slate-300)_1.5px,transparent_1.5px)] opacity-40 pointer-events-none -z-10"
        style={{ backgroundSize: "16px 16px" }}
      />
      <div 
        className="absolute bottom-8 left-6 lg:left-12 w-36 h-36 bg-[radial-gradient(circle_at_center,var(--apex-slate-300)_1.5px,transparent_1.5px)] opacity-40 pointer-events-none -z-10"
        style={{ backgroundSize: "16px 16px" }}
      />
      <div 
        className="absolute bottom-8 right-6 lg:right-12 w-36 h-36 bg-[radial-gradient(circle_at_center,var(--apex-slate-300)_1.5px,transparent_1.5px)] opacity-40 pointer-events-none -z-10"
        style={{ backgroundSize: "16px 16px" }}
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-10">
          <Eyebrow className="justify-center mb-4">{capabilitiesConfig.eyebrow}</Eyebrow>
          
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-tight font-bold text-apex-navy-900 tracking-tight mb-4">
            <span>{capabilitiesConfig.headlinePrefix}</span>
            <span className="text-apex-gold-500">{capabilitiesConfig.headlineHighlight}</span>
          </h2>
          
          <p className="text-[15px] md:text-[16px] text-apex-slate-500 leading-relaxed max-w-2xl mx-auto">
            We combine deep technical expertise with domain knowledge to build<br className="hidden md:inline" /> secure, scalable and future-ready digital solutions.
          </p>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-7xl mx-auto">
          {capabilitiesConfig.items.map((capability) => (
            <div key={capability.id}>
              <CapabilityCard capability={capability} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-10 md:mt-12 max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100/90 shadow-[0_4px_25px_-4px_rgba(8,30,66,0.06)] p-4 md:px-6 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50/70 border border-apex-gold-500/30 flex items-center justify-center text-apex-gold-500 shrink-0">
              <Rocket className="w-6 h-6" />
            </div>
            <div className="h-9 w-[1px] bg-slate-200 hidden sm:block" />
            <div className="text-left">
              <h4 className="font-bold text-apex-navy-900 text-[15.5px] leading-tight">
                {capabilitiesConfig.bottomCta.heading}
              </h4>
              <p className="text-[13px] text-apex-slate-500 leading-tight mt-0.5">
                {capabilitiesConfig.bottomCta.subheading}
              </p>
            </div>
          </div>

          <Link
            href={capabilitiesConfig.bottomCta.buttonHref}
            className="bg-apex-navy-900 hover:bg-apex-navy-800 text-white font-bold text-[13.5px] px-6 py-3 rounded-xl flex items-center gap-2 transition-all shrink-0 shadow-sm group"
          >
            <span>{capabilitiesConfig.bottomCta.buttonText}</span>
            <ArrowRight className="w-4 h-4 text-apex-gold-500 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
