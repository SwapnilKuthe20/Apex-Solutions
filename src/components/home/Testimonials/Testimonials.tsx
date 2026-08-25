"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { testimonialsConfig } from "@/data/testimonials";
import { TestimonialSlide } from "./TestimonialSlide";
import { ChevronLeft, ChevronRight, CheckCircle2, Shield, Layers, Box, Cpu, Globe } from "lucide-react";

// Simulated trusted business strip data for presentation layer
const TRUSTED_LOGOS = [
  { id: "edu", name: "EDUSMART", sub: "SOLUTIONS", icon: Globe, color: "text-[#0052CC]" },
  { id: "fin", name: "FinEdge", sub: "TECHNOLOGIES", icon: Shield, color: "text-[#00A86B]" },
  { id: "tech", name: "TechNova", sub: "SYSTEMS", icon: Cpu, color: "text-[#1E3A8A]" },
  { id: "green", name: "GreenField", sub: "INDUSTRIES", icon: CheckCircle2, color: "text-[#16A34A]" },
  { id: "city", name: "CityCare", sub: "SERVICES", icon: Box, color: "text-[#EA580C]" },
  { id: "build", name: "BuildCon", sub: "INFRA", icon: Layers, color: "text-[#2563EB]" },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = testimonialsConfig.testimonials.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <Section variant="surface" className="overflow-hidden bg-[#F7F9FC] relative py-20 lg:py-32">
      
      {/* Decorative Elements */}
      {/* 1. Dotted grid top-left */}
      <div 
        className="absolute top-12 left-12 w-48 h-48 opacity-[0.15] pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "radial-gradient(#64748B 2px, transparent 2px)",
          backgroundSize: "20px 20px"
        }}
        aria-hidden="true"
      />
      
      {/* 2. Oversized Quote mark top-right */}
      <div 
        className="absolute -top-10 right-10 text-[240px] text-slate-200/50 leading-none font-serif select-none pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        &rdquo;
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Header Area */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 lg:w-12 h-px bg-apex-gold-500" />
            <span className="text-apex-gold-500 font-bold tracking-[0.2em] text-xs lg:text-sm uppercase">
              {testimonialsConfig.eyebrow || "TESTIMONIALS"}
            </span>
            <div className="w-8 lg:w-12 h-px bg-apex-gold-500" />
          </div>

          {/* Two-Line Headline */}
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.15] font-bold tracking-tight mb-6 flex flex-col">
            <span className="text-apex-navy-900">Trusted by Businesses.</span>
            <span className="text-apex-gold-500">Proven by Results.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base lg:text-[18px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We take pride in the trust our clients place in us and the impact we create together.
          </p>
        </div>

        {/* Testimonials Grid (Desktop) / Carousel (Mobile/Tablet) */}
        
        {/* Desktop View: 3 Columns Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {testimonialsConfig.testimonials.map((testimonial) => (
            <TestimonialSlide key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile/Tablet View: Single Slide Carousel */}
        <div className="block lg:hidden mb-12">
          <div className="w-full">
            <TestimonialSlide testimonial={testimonialsConfig.testimonials[activeIndex]} />
          </div>
          
          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-apex-navy-900 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonialsConfig.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === activeIndex ? 'bg-apex-navy-900' : 'bg-slate-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-apex-navy-900 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trusted Business Strip */}
        <div className="mt-16 lg:mt-24 w-full bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] px-6 py-10 lg:px-12 lg:py-12 flex flex-col items-center">
          
          <h3 className="text-apex-navy-900 text-xs lg:text-sm font-bold tracking-[0.15em] uppercase mb-10 text-center">
            Trusted by 120+ Businesses Across Industries
          </h3>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-0 lg:divide-x divide-slate-100 items-center justify-center text-center">
            {TRUSTED_LOGOS.map((logo, idx) => {
              const Icon = logo.icon;
              return (
                <div key={logo.id} className={`flex items-center justify-center gap-2 ${idx !== 0 ? 'lg:pl-6' : ''} ${idx !== TRUSTED_LOGOS.length - 1 ? 'lg:pr-6' : ''}`}>
                  <Icon className={`w-8 h-8 ${logo.color}`} strokeWidth={1.5} />
                  <div className="flex flex-col text-left">
                    <span className={`font-bold text-sm lg:text-base leading-none tracking-tight ${logo.color}`}>{logo.name}</span>
                    <span className="text-[9px] lg:text-[10px] text-slate-500 tracking-wider mt-0.5">{logo.sub}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </Section>
  );
}
