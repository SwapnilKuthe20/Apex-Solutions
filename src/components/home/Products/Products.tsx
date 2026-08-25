import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { productsConfig } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Products() {
  return (
    <Section variant="white" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* --- DECORATIVE BACKGROUNDS --- */}
      {/* 1. Left Dot Matrix */}
      <div className="absolute top-16 left-4 md:left-12 w-[240px] h-[240px] opacity-[0.25] pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 2px, transparent 2px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* 2. Top-Right Concentric Curves & Gold Dot */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20" aria-hidden="true">
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="0" r="250" stroke="#64748B" strokeWidth="1" />
          <circle cx="500" cy="0" r="320" stroke="#64748B" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="500" cy="0" r="400" stroke="#64748B" strokeWidth="1" />
        </svg>
        <div className="absolute top-[120px] right-[180px] w-2.5 h-2.5 rounded-full bg-apex-gold-500" />
      </div>

      <Container className="max-w-[1440px] relative z-10 px-4 sm:px-6 lg:px-12">
        {/* Intro Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-[60px]">
          {/* Custom Eyebrow with Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-apex-gold-500" />
            <span className="text-apex-gold-500 uppercase tracking-[0.2em] font-semibold text-[13px]">
              {productsConfig.eyebrow}
            </span>
          </div>
          
          <h2 className="text-[36px] md:text-[48px] lg:text-[54px] leading-[1.15] font-bold tracking-tight mb-6">
            <span className="block text-apex-navy-800">{productsConfig.headline}</span>
            <span className="block text-apex-gold-500">{productsConfig.headlineLine2}</span>
          </h2>
          
          <p className="text-[17px] md:text-[19px] text-slate-500 leading-[1.7] max-w-[800px] mx-auto font-normal">
            {productsConfig.description}
          </p>
        </div>

        {/* 5 Cards in ONE Horizontal Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full mb-16">
          {productsConfig.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Trust / Metrics Strip */}
        <div className="w-full bg-[#F7F9FC] border border-slate-200/60 rounded-[20px] p-8 lg:p-10 flex flex-col xl:flex-row items-center justify-between gap-10 shadow-sm relative overflow-hidden">
          
          {/* Left Block: Logo + Text */}
          <div className="flex flex-col md:flex-row items-center md:items-start xl:items-center gap-6 shrink-0 xl:w-[40%] text-center md:text-left">
            <div className="w-[72px] h-[72px] rounded-full bg-apex-navy-900 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-3xl font-serif italic pr-1">A</span>
            </div>
            <div>
              <p className="text-[17px] font-bold text-apex-navy-800 mb-1">INNOVATING. BUILDING. EMPOWERING.</p>
              <p className="text-[14px] text-slate-500 leading-snug max-w-[320px]">
                Our platforms are trusted by thousands of institutions, businesses and professionals across India and beyond.
              </p>
            </div>
          </div>

          <div className="hidden xl:block w-px h-20 bg-slate-200 shrink-0" />

          {/* Metrics Blocks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 flex-grow">
            {/* Metric 1 */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[32px] font-bold text-blue-600 leading-tight">4K+</span>
              <span className="text-[13px] text-slate-500 font-medium leading-snug text-center md:text-left">Institutions<br />Empowered</span>
            </div>
            {/* Metric 2 */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[32px] font-bold text-green-600 leading-tight">50K+</span>
              <span className="text-[13px] text-slate-500 font-medium leading-snug text-center md:text-left">Active<br />Users</span>
            </div>
            {/* Metric 3 */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[32px] font-bold text-purple-600 leading-tight">25+</span>
              <span className="text-[13px] text-slate-500 font-medium leading-snug text-center md:text-left">Countries<br />Reached</span>
            </div>
            {/* Metric 4 */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[32px] font-bold text-amber-500 leading-tight">99.9%</span>
              <span className="text-[13px] text-slate-500 font-medium leading-snug text-center md:text-left">Platform<br />Reliability</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="shrink-0">
            <Link 
              href="/platforms"
              className="group flex items-center justify-center gap-3 bg-apex-navy-900 hover:bg-apex-navy-800 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors duration-300 shadow-md"
            >
              Explore All Platforms
              <ArrowRight className="w-4 h-4 text-apex-gold-500 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </Container>

      {/* 3. Bottom Decorative Dotted Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] opacity-[0.15] pointer-events-none overflow-hidden" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80V40C120 15 240 65 360 60C480 55 600 10 720 15C840 20 960 60 1080 65C1200 70 1320 45 1440 40V80H0Z" fill="url(#paint0_linear_wave_prod)" />
          <defs>
            <linearGradient id="paint0_linear_wave_prod" x1="720" y1="0" x2="720" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#64748B" />
              <stop offset="1" stopColor="#64748B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Section>
  );
}
