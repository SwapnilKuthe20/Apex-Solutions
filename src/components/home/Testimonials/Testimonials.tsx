"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { testimonialsConfig } from "@/data/testimonials";
import { TestimonialSlide } from "./TestimonialSlide";
import { TestimonialControls } from "./TestimonialControls";
import { createTestimonialsIntroTimeline } from "@/animations/testimonials";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLazyGSAP } from "@/hooks/useLazyGSAP";
import { gsap } from "@/animations/gsap";

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Intro Refs
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useLazyGSAP(sectionRef, () => {
    const ctx = gsap.context(() => {
      const intro = createTestimonialsIntroTimeline(
        sectionRef,
        eyebrowRef,
        headlineRef,
        copyRef,
        swiperContainerRef,
        prefersReducedMotion
      );

      return () => {
        intro.cleanup();
      };
    }, sectionRef);
    
    return () => ctx.revert();
  });

  return (
    <Section variant="white" className="py-24 md:py-32 lg:py-40 overflow-hidden" ref={sectionRef}>
      <Container>
        
        {/* Intro Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div ref={eyebrowRef} className="will-change-transform mb-6">
            <Eyebrow>{testimonialsConfig.eyebrow}</Eyebrow>
          </div>
          <h2 
            ref={headlineRef}
            className="text-[34px] md:text-[48px] lg:text-[64px] leading-tight font-semibold text-apex-navy-900 tracking-tight will-change-transform mb-6"
          >
            {testimonialsConfig.headline}
          </h2>
          <p 
            ref={copyRef}
            className="text-[18px] md:text-[20px] text-apex-slate-500 leading-relaxed will-change-transform max-w-xl"
          >
            {testimonialsConfig.description}
          </p>
        </div>

        {/* Swiper Container */}
        <div ref={swiperContainerRef} className="relative will-change-transform">
          <Swiper
            modules={[EffectFade, Navigation]}
            effect={prefersReducedMotion ? "slide" : "fade"}
            fadeEffect={{ crossFade: true }}
            speed={prefersReducedMotion ? 0 : 600}
            loop={true}
            allowTouchMove={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full"
          >
            {testimonialsConfig.testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                {({ isActive }) => (
                  <TestimonialSlide 
                    testimonial={testimonial} 
                    isActive={isActive} 
                    prefersReducedMotion={prefersReducedMotion}
                  />
                )}
              </SwiperSlide>
            ))}
            
            {/* Custom Controls (Inside Swiper context to use useSwiper) */}
            <TestimonialControls 
              currentIndex={activeIndex} 
              totalSlides={testimonialsConfig.testimonials.length} 
            />
          </Swiper>
        </div>

      </Container>
    </Section>
  );
}
