"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ProductStory } from "./ProductStory";
import { ProductSlider } from "./ProductSlider";
import { productsConfig } from "@/data/products";
import { createProductsIntroTimeline, createProductSliderTimeline } from "@/animations/products";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/animations/gsap";

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Intro Animation Sequence
      const intro = createProductsIntroTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        prefersReducedMotion
      );

      // 2. Horizontal Storytelling Pinning Sequence
      const horizontal = createProductSliderTimeline(
        sectionRef,
        trackRef,
        productsConfig.products.length,
        prefersReducedMotion
      );

      return () => {
        intro.cleanup();
        horizontal.cleanup();
      };
    }, sectionRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <Section variant="surface" className="py-24 md:py-32 overflow-hidden" ref={sectionRef}>
      
      {/* Intro Header */}
      <Container className="mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-1 lg:col-span-7 xl:col-span-8">
            <div ref={eyebrowRef} className="will-change-transform">
              <Eyebrow className="mb-6">{productsConfig.eyebrow}</Eyebrow>
            </div>
            <h2 
              ref={headlineRef}
              className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-800 tracking-tight will-change-transform"
            >
              {productsConfig.headline}
            </h2>
          </div>
          <div className="col-span-1 lg:col-span-5 xl:col-span-4 flex items-end">
            <p 
              ref={copyRef}
              className="text-[15px] md:text-[18px] lg:text-[20px] text-apex-slate-500 leading-relaxed will-change-transform pb-2"
            >
              {productsConfig.description}
            </p>
          </div>
        </div>
      </Container>

      {/* 
        Horizontal Pinned Story Area 
        Unlike Industry track which is a continuous ribbon, this is full-width stories.
      */}
      <div className="w-full relative px-6 md:px-8 lg:px-0">
        <ProductSlider ref={trackRef}>
          {productsConfig.products.map((product, index) => (
            <ProductStory 
              key={product.id} 
              product={product} 
              isLast={index === productsConfig.products.length - 1} 
            />
          ))}
        </ProductSlider>
      </div>

    </Section>
  );
}
