"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { metricsConfig } from "@/data/metrics";
import { MetricItem } from "./MetricItem";
import { createMetricsIntroTimeline, createMetricItemReveal } from "@/animations/metrics";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";

export function ImpactMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Intro Refs
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);

  // Metrics Grid Refs
  const metricsContainerRef = useRef<HTMLDListElement>(null);
  const metricItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = createMetricsIntroTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        prefersReducedMotion
      );

      const items = createMetricItemReveal(
        metricsContainerRef,
        metricItemsRef,
        prefersReducedMotion
      );

      return () => {
        intro.cleanup();
        items.cleanup();
      };
    }, sectionRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Determine layout based on how many metrics we have.
  // The plan requested a featured large metric, followed by supporting metrics.
  const featuredMetric = metricsConfig.metrics[0];
  const supportingMetrics = metricsConfig.metrics.slice(1);

  return (
    <Section variant="white" className="py-24 md:py-32 lg:py-40 overflow-hidden" ref={sectionRef}>
      <Container>
        
        {/* Intro Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 md:mb-32">
          <div className="col-span-1 lg:col-span-7 xl:col-span-8">
            <div ref={eyebrowRef} className="will-change-transform mb-6">
              <Eyebrow>{metricsConfig.eyebrow}</Eyebrow>
            </div>
            <h2 
              ref={headlineRef}
              className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-800 tracking-tight will-change-transform"
            >
              {metricsConfig.headline}
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-5 xl:col-span-4 flex items-end">
            <p 
              ref={copyRef}
              className="text-[15px] md:text-[18px] lg:text-[20px] text-apex-slate-500 leading-relaxed will-change-transform pb-2"
            >
              {metricsConfig.description}
            </p>
          </div>
        </div>

        {/* Editorial Metrics Grid */}
        {/* We use a definition list <dl> for semantic accessibility of the metrics */}
        <dl 
          ref={metricsContainerRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-0"
        >
          {/* Featured Metric (Takes up half the screen on desktop) */}
          {featuredMetric && (
            <div className="col-span-1 md:col-span-12 lg:col-span-5 lg:pr-12 lg:border-r border-apex-border/40 relative">
              <MetricItem 
                metric={featuredMetric} 
                isFeatured={true}
                ref={(el) => { metricItemsRef.current[0] = el; }}
              />
            </div>
          )}

          {/* Supporting Metrics (Grid on the right side) */}
          {supportingMetrics.length > 0 && (
            <div className="col-span-1 md:col-span-12 lg:col-span-7 lg:pl-12 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 pt-8 lg:pt-0 border-t lg:border-t-0 border-apex-border/40">
              {supportingMetrics.map((metric, idx) => (
                <MetricItem 
                  key={metric.id}
                  metric={metric}
                  isFeatured={false}
                  ref={(el) => { metricItemsRef.current[idx + 1] = el; }}
                />
              ))}
            </div>
          )}
        </dl>

      </Container>
    </Section>
  );
}
