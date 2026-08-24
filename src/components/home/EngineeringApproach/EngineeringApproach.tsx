import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { EngineeringJourney } from "./EngineeringJourney";

export function EngineeringApproach() {
  return (
    <Section variant="white" className="py-20 md:py-28 overflow-hidden">
      <Container>
        {/* Title Layout */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] font-semibold text-apex-navy-800 tracking-tight mb-6">
            Our Working Process
          </h2>
        </div>

        {/* The Core Journey Integration */}
        <EngineeringJourney />
      </Container>
    </Section>
  );
}
