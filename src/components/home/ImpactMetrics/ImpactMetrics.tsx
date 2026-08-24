import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { metricsConfig } from "@/data/metrics";
import { MetricItem } from "./MetricItem";

export function ImpactMetrics() {
  return (
    <Section variant="surface" className="py-20 md:py-28 overflow-hidden bg-apex-navy-900">
      <Container>
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <Eyebrow className="mb-6 text-apex-gold-500">{metricsConfig.eyebrow}</Eyebrow>
            <h2 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] font-semibold text-white tracking-tight mb-6">
              {metricsConfig.headline}
            </h2>
            <p className="text-[16px] md:text-[18px] text-apex-slate-400 leading-relaxed max-w-lg">
              {metricsConfig.description}
            </p>
          </div>
          
          {/* Right: Large Image Placeholder */}
          <div className="relative w-full aspect-video lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden bg-apex-navy-800 border border-apex-border/20">
            {/* Abstract visual placeholder for image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-apex-navy-900 via-apex-navy-800 to-apex-slate-800" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#DCE3EC 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          </div>
        </div>

        {/* Bottom Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-16 border-t border-apex-border/20">
          {metricsConfig.metrics.map((metric) => (
            <MetricItem key={metric.id} metric={metric} />
          ))}
        </div>

      </Container>
    </Section>
  );
}
