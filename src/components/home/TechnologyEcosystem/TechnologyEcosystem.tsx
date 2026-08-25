"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { technologyList, TechnologyCard } from "./TechnologyCard";
import { ShieldCheck } from "lucide-react";

export function TechnologyEcosystem() {
  return (
    <Section variant="white" className="pt-2 md:pt-2 pb-2 md:pb-2 overflow-hidden">
      <Container>
        {/* Light Tinted Rounded Container */}
        <div className="bg-[#f8fafd] border border-slate-100/90 rounded-[28px] md:rounded-[40px] py-2 md:py-2 px-2 md:px-2 max-w-7xl mx-auto shadow-[0_4px_30px_-10px_rgba(8,30,66,0.03)]">

          {/* Header Content */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-2 md:mb-3">

            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] leading-tight font-bold text-apex-navy-900 tracking-tight mb-4">
              Our Technology Ecosystem
            </h2>

            <p className="text-[15px] md:text-[16px] text-apex-slate-500 leading-relaxed max-w-2xl mx-auto">
              We leverage proven frameworks, cloud platforms and AI technologies<br className="hidden md:inline" /> to deliver high-performance, resilient and intelligent solutions.
            </p>
          </div>

          {/* 8 Technology Cards in a clean horizontal row on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5 lg:gap-3.5 max-w-6xl mx-auto">
            {technologyList.map((item) => (
              <TechnologyCard key={item.id} item={item} />
            ))}
          </div>

          {/* Bottom Security Callout */}
          <div className="flex flex-col items-center justify-center mt-10 md:mt-10">
            <div className="flex items-center gap-2 text-apex-navy-900 font-bold text-[14.5px] md:text-[16px]">
              <div className="w-5 h-5 rounded-full border border-apex-gold-500/40 bg-apex-gold-500/10 flex items-center justify-center text-apex-gold-500 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span>Secure. Scalable. Future-Ready.</span>
            </div>
            <div className="w-8 h-[2px] bg-apex-gold-500 rounded-full mt-2" />
          </div>

        </div>
      </Container>
    </Section>
  );
}
