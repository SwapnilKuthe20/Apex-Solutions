import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { IndustryCard } from "./IndustryCard";
import { industriesConfig } from "@/data/industries";
import { Building2, Target, TrendingUp, ShieldCheck, Settings } from "lucide-react";
import React from "react";

export function IndustrySolutions() {
  return (
    <Section variant="white" className="relative overflow-hidden bg-[#FAFAFA] py-20 lg:py-28">
      {/* --- DECORATIVE BACKGROUNDS --- */}
      {/* 1. Left Dot Matrix */}
      <div className="absolute top-10 -left-10 md:left-10 w-[200px] h-[200px] opacity-40 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 2px, transparent 2px)",
          backgroundSize: "20px 20px"
        }}
      />

      {/* 2. Top-Right Concentric Curves & Gold Dot */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-30" aria-hidden="true">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="0" r="200" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="0" r="250" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="0" r="300" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
        <div className="absolute top-[80px] right-[120px] w-2 h-2 rounded-full bg-apex-gold-500" />
      </div>

      <Container className="max-w-[1400px] relative z-10">
        {/* Intro Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <Eyebrow className="justify-center mb-6 text-apex-gold-500 tracking-[0.2em] font-medium text-xs">
            — {industriesConfig.eyebrow}
          </Eyebrow>
          
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.15] font-bold tracking-tight mb-6">
            <span className="block text-apex-navy-800">{industriesConfig.headline}</span>
            <span className="block text-apex-gold-500">{industriesConfig.headlineLine2}</span>
          </h2>
          
          <p className="text-[16px] md:text-[18px] text-slate-500 leading-relaxed max-w-[800px] mx-auto font-normal">
            {industriesConfig.description}
          </p>
        </div>

        {/* 6 Cards in ONE Horizontal Row on Desktop */}
        {/* On tablet 3+3, on mobile 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5 lg:gap-6 w-full mb-16">
          {industriesConfig.industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>

        {/* Bottom Value Strip */}
        <div className="w-full bg-[#F1F5F9] border border-slate-200 rounded-[20px] p-6 lg:p-8 flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-0 shadow-sm relative overflow-hidden">
          
          {/* Main Left Block */}
          <div className="flex items-center gap-6 xl:w-[35%] shrink-0">
            <div className="w-16 h-16 rounded-full bg-apex-navy-800 flex items-center justify-center shrink-0 shadow-md">
              <Building2 className="w-7 h-7 text-apex-gold-500" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[18px] font-bold text-apex-navy-800 leading-tight">Built for every industry.</p>
              <p className="text-[18px] font-bold text-apex-gold-500 leading-tight">Customized for your business.</p>
            </div>
          </div>

          {/* Feature Blocks Container */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full xl:w-[65%] gap-6 md:gap-0 xl:pl-10">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0">
                <Target className="w-5 h-5 text-apex-navy-800" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-apex-navy-800 mb-1">Deep Industry<br className="hidden xl:block" /> Expertise</span>
                <span className="text-[13px] text-slate-500 leading-snug">Domain knowledge that<br className="hidden xl:block" /> delivers real results.</span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-16 bg-slate-200 mx-4" />

            {/* Feature 2 */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0">
                <Settings className="w-5 h-5 text-apex-navy-800" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-apex-navy-800 mb-1">Tailored<br className="hidden xl:block" /> Solutions</span>
                <span className="text-[13px] text-slate-500 leading-snug">Custom-fit solutions for<br className="hidden xl:block" /> unique challenges.</span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-16 bg-slate-200 mx-4" />

            {/* Feature 3 */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0">
                <TrendingUp className="w-5 h-5 text-apex-navy-800" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-apex-navy-800 mb-1">Measurable<br className="hidden xl:block" /> Outcomes</span>
                <span className="text-[13px] text-slate-500 leading-snug">Solutions that drive growth,<br className="hidden xl:block" /> efficiency and impact.</span>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-16 bg-slate-200 mx-4" />

            {/* Feature 4 */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0">
                <ShieldCheck className="w-5 h-5 text-apex-navy-800" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-apex-navy-800 mb-1">Future-Ready<br className="hidden xl:block" /> Approach</span>
                <span className="text-[13px] text-slate-500 leading-snug">Scalable, secure and built<br className="hidden xl:block" /> for what&apos;s next.</span>
              </div>
            </div>

          </div>
        </div>
      </Container>

      {/* 3. Bottom Decorative Dotted Wave (simplified as SVG) */}
      <div className="absolute bottom-0 left-0 right-0 h-[60px] opacity-20 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C120 10 240 50 360 45C480 40 600 5 720 10C840 15 960 45 1080 50C1200 55 1320 35 1440 30V60H0Z" fill="url(#paint0_linear_wave)" fillOpacity="0.2"/>
          <defs>
            <linearGradient id="paint0_linear_wave" x1="720" y1="0" x2="720" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#94A3B8" />
              <stop offset="1" stopColor="#94A3B8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Section>
  );
}

