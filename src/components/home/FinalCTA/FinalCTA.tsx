import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { finalCtaConfig } from "@/data/cta";
import { metricsConfig } from "@/data/metrics";

export function FinalCTA() {
  return (
    <Section 
      variant="navy-deep" 
      className="relative py-16 md:py-20 overflow-hidden bg-apex-navy-900" 
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#DCE3EC 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-apex-navy-800 to-transparent opacity-50" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content & CTA */}
          <div className="flex flex-col">
            <Eyebrow className="mb-6 text-apex-gold-500">{finalCtaConfig.eyebrow}</Eyebrow>
            <h2 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] font-semibold text-white tracking-tight mb-8">
              {finalCtaConfig.headline}
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-apex-slate-300 leading-relaxed max-w-xl mb-12">
              {finalCtaConfig.description}
            </p>
            
            <div>
              <Link 
                href={finalCtaConfig.ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-apex-navy-900 bg-apex-gold-500 hover:bg-apex-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm group transition-colors shadow-lg"
              >
                {finalCtaConfig.ctaText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 lg:border-l lg:border-apex-border/20 lg:pl-16">
            {metricsConfig.metrics.map((metric) => (
              <div key={metric.id} className="flex flex-col">
                <div className="flex items-baseline gap-1 text-white mb-2">
                  {metric.prefix && (
                    <span className="font-medium text-2xl md:text-3xl">{metric.prefix}</span>
                  )}
                  <span className="font-bold tracking-tight text-[36px] md:text-[48px] leading-none">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="font-bold text-apex-gold-500 text-[24px] md:text-[32px]">
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <div className="font-medium text-apex-slate-300 text-sm md:text-base">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
