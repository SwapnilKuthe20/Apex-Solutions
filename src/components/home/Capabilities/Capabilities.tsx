import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CapabilityCard } from "./CapabilityCard";
import { capabilitiesConfig } from "@/data/capabilities";

export function Capabilities() {
  return (
    <Section variant="surface" className="py-20 md:py-28 bg-[#F7F9FC]">
      <Container>
        {/* Editorial Intro Layout */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Eyebrow className="justify-center mb-6">{capabilitiesConfig.eyebrow}</Eyebrow>
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] font-semibold text-apex-navy-800 tracking-tight mb-6">
            {capabilitiesConfig.headline}
          </h2>
          <p className="text-[16px] md:text-[18px] text-apex-slate-500 leading-relaxed max-w-2xl mx-auto">
            {capabilitiesConfig.description}
          </p>
        </div>

        {/* 3x2 Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilitiesConfig.items.map((capability) => (
            <div key={capability.id}>
              <CapabilityCard capability={capability} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
