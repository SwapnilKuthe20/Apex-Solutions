"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { techStackConfig } from "@/data/techStack";
import { TechnologyArchitecture } from "../TechnologyEcosystem/TechnologyArchitecture";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function TechnologyStack() {
  const apexCoreRef = useRef<SVGGElement>(null);
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);
  const nodesRef = useRef<(SVGCircleElement | null)[]>([]);

  return (
    <Section variant="surface" className="py-16 md:py-20 overflow-hidden bg-apex-navy-900">
      <Container>
        {/* Intro Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <Eyebrow className="justify-center mb-6 text-apex-gold-500">{techStackConfig.eyebrow}</Eyebrow>
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] font-semibold text-white tracking-tight mb-6">
            Modern Technologies. Scalable Solutions.
          </h2>
          <p className="text-[16px] md:text-[18px] text-apex-slate-400 leading-relaxed max-w-2xl mx-auto">
            {techStackConfig.description}
          </p>
        </div>

        {/* Complex Layout with Central A Logo */}
        <div className="relative w-full lg:h-[600px] flex flex-col lg:flex-row items-center justify-center mt-12">
          
          {/* Architecture Visual (Desktop Background) */}
          <div className="absolute inset-0 z-0">
            <TechnologyArchitecture 
              apexCoreRef={apexCoreRef}
              pathsRef={pathsRef}
              nodesRef={nodesRef}
              activeCategoryId={null}
            />
          </div>

          {/* Technology Categories - Positioned Around Center */}
          <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStackConfig.categories.map((category) => (
              <div key={category.id} className="flex flex-col p-6 rounded-2xl bg-[#05132A]/80 backdrop-blur-sm border border-[#253550] shadow-lg relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-apex-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-sm font-semibold tracking-widest text-apex-gold-500/50">
                    {category.number}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map(tech => (
                    <span 
                      key={tech.id} 
                      className="px-3 py-1.5 text-sm font-medium text-apex-slate-300 bg-[#081E42] border border-[#253550] rounded-md"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
}
