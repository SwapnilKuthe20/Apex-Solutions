import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { insightsConfig } from "@/data/insights";

export function Insights() {
  if (insightsConfig.insights.length === 0) {
    return null;
  }

  return (
    <Section variant="white" className="py-20 md:py-28 overflow-hidden bg-white">
      <Container>
        
        {/* Intro Header & Global CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6">{insightsConfig.eyebrow}</Eyebrow>
            <h2 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] font-semibold text-apex-navy-800 tracking-tight mb-6">
              {insightsConfig.headline}
            </h2>
            <p className="text-[16px] md:text-[18px] text-apex-slate-500 leading-relaxed">
              {insightsConfig.description}
            </p>
          </div>

          <div className="shrink-0 pb-2">
            <Link 
              href={insightsConfig.ctaHref}
              className="inline-flex items-center text-[15px] font-semibold text-apex-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm group"
            >
              <span className="group-hover:text-apex-gold-600 transition-colors">{insightsConfig.ctaText}</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-apex-gold-600" />
            </Link>
          </div>
        </div>

        {/* 3-Col Dark Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsConfig.insights.map((insight) => (
            <article 
              key={insight.id}
              className="flex flex-col bg-apex-navy-900 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-apex-border/10"
            >
              <Link href={insight.href} className="block relative w-full aspect-[4/3] overflow-hidden">
                {insight.image ? (
                  <Image 
                    src={insight.image} 
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-apex-navy-800 flex items-center justify-center">
                    <span className="text-apex-slate-500">No Image</span>
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-apex-navy-900 to-transparent opacity-60" />
              </Link>
              
              <div className="flex flex-col flex-grow p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-apex-blue-500/20 text-apex-blue-400 text-xs font-bold tracking-widest rounded-full border border-apex-blue-500/20">
                    {insight.category}
                  </span>
                  <span className="text-sm font-semibold text-apex-gold-500">
                    {insight.date}
                  </span>
                </div>
                
                <Link href={insight.href} className="block group-hover:text-apex-gold-500 transition-colors mb-4">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {insight.title}
                  </h3>
                </Link>
                
                <p className="text-apex-slate-400 mb-8 leading-relaxed line-clamp-3">
                  {insight.description}
                </p>

                <div className="mt-auto border-t border-apex-border/10 pt-6">
                  <Link 
                    href={insight.href}
                    className="inline-flex items-center text-sm font-bold text-white group-hover:text-apex-gold-500 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </Container>
    </Section>
  );
}
