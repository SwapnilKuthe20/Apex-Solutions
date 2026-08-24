import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { simpleEcosystem } from "@/data/technologies";

export function TechnologyEcosystem() {
  return (
    <Section variant="white" className="py-20 border-b border-apex-border/40">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <Eyebrow className="justify-center mb-4">OUR TECHNOLOGY ECOSYSTEM</Eyebrow>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {simpleEcosystem.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 rounded-full border border-apex-border bg-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:border-apex-gold-500 group-hover:-translate-y-1">
                <item.icon className="w-8 h-8 text-apex-navy-800" />
              </div>
              <span className="font-semibold text-apex-navy-800 text-sm tracking-wide uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
