"use client";

import { Container } from "@/components/ui/Container";
import { techStackConfig, TechnologyCategory } from "@/data/techStack";
import { ArrowRight, Code2, Server, Database, Cloud, Smartphone, Cpu, ShieldCheck, Rocket, CodeSquare, RefreshCcw, Users, User, Box, Shield, CloudLightning, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Helper for rendering simple tech logos or badges
function TechLogo({ id, name }: { id: string; name: string }) {
  const renderIcon = () => {
    switch (id) {
      case "react": return <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 text-[#00D8FF]"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>;
      case "nextjs": return <svg viewBox="0 0 180 180" className="w-6 h-6" fill="none"><circle cx="90" cy="90" r="90" fill="black"/><path d="M137.667 149.208L67.5833 55.4583H54.4583V124.542H66.9167V72.0417L128.292 153.958C131.542 152.542 134.667 150.958 137.667 149.208Z" fill="white"/><path d="M114.333 55.4583H126.792V124.542H114.333V55.4583Z" fill="white"/></svg>;
      case "typescript": return <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#3178C6]" fill="currentColor"><path d="M1.5 1.5v21h21v-21h-21zm11 13.5c0 2.5-2 4-5 4-2.5 0-4-1.5-4-3.5h2.5c0 1 1 1.5 2 1.5 1 0 1.5-.5 1.5-1 0-1-1-1.5-2.5-2-2.5-.5-4-1.5-4-3.5 0-2.5 2-4 4.5-4 2 0 3.5 1 4 2.5h-2.5c-.5-.5-1-1-1.5-1-1.5 0-2 .5-2 1 0 1 .5 1.5 2 2 2.5.5 4 1.5 4 3.5zm7 4h-2.5v-9h-3v-2.5h8v2.5h-2.5v9z"/></svg>;
      case "tailwind": return <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#06B6D4]" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.9 2.2 1.6 1.2 1.3 2.7 2.8 5.6 2.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.2-1.6-1.2-1.3-2.7-2.8-5.6-2.8Z"/><path d="M6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.9 2.2 1.6 1.2 1.3 2.7 2.8 5.6 2.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.2-1.6C10.1 12.9 8.6 11.4 5.7 11.4c.1.2.2.4.3.6Z"/></svg>;
      case "nodejs": return <svg viewBox="0 0 32 32" className="w-6 h-6"><path d="M16 2.5L3.5 9.7V24.3L16 31.5L28.5 24.3V9.7L16 2.5Z" stroke="#539E43" strokeWidth="2.5" fill="none" strokeLinejoin="round"/><text x="7.5" y="21.5" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="#539E43">JS</text></svg>;
      case "nestjs": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M50 5 L95 30 L95 80 L50 95 L5 80 L5 30 Z" fill="#E0234E"/></svg>;
      case "laravel": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M50 15 L85 35 L85 70 L50 90 L15 70 L15 35 Z" fill="#FF2D20"/></svg>;
      case "dotnet": return <div className="text-[#512BD4] font-black tracking-tight text-[15px]">.NET</div>;
      case "postgresql": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M48 16 C30 16 18 28 18 44 C18 55 24 64 28 73 C30 78 32 83 36 84 C39 85 41 81 42 76 C43 68 43 60 46 54 C49 48 55 46 60 48 C66 50 70 56 71 63 C72 70 71 78 75 82 C78 85 82 81 83 75 C85 64 86 42 78 30 C72 20 62 16 48 16 Z" fill="#336791"/></svg>;
      case "mysql": return <div className="text-[#00758F] font-black text-[14px]">MySQL</div>;
      case "mongodb": return <div className="text-[#47A248] font-black text-[14px]">MongoDB</div>;
      case "redis": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M50 10 C30 10 20 30 20 50 C20 70 30 90 50 90 C70 90 80 70 80 50 C80 30 70 10 50 10 Z" fill="#DC382D"/></svg>;
      case "aws": return <svg viewBox="0 0 90 42" className="h-5 w-auto"><text x="8" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" fill="#232F3E" letterSpacing="-0.5px">aws</text><path d="M 10 30 Q 40 41, 72 29" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none" /><path d="M 68 25 L 76 29 L 68 34 Z" fill="#FF9900" /></svg>;
      case "azure": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M20 80 L50 20 L80 80 Z" fill="#008AD7"/></svg>;
      case "googlecloud": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M30 70 L70 70 L50 30 Z" fill="#4285F4"/></svg>;
      case "docker": return <svg viewBox="0 0 64 64" className="w-6 h-6" fill="#0db7ed"><path d="M59.5 28.5c-1.3-.9-3.9-1.2-5.9-.6-.4-2.9-2.5-5.2-5.5-6.1l-1.3-.4-.7 1.2c-1.4 2.4-1.7 5.2-1 7.8-.8.5-2.2 1.1-4.1 1.1H4c-1.1 0-2 .9-2 2 0 6.6 2.3 12.8 6.4 17.6 4.6 5.3 10.9 8.4 17.6 8.4 13.8 0 24.9-9.1 27.6-22.3 3.6-.3 6.9-2.3 8.3-5.5l.6-1.4-3-1.8zM19 16h5v5h-5zm6 0h5v5h-5zm6 0h5v5h-5zm-12 6h5v5h-5zm6 0h5v5h-5zm6 0h5v5h-5zm6 0h5v5h-5zm-12 6h5v5h-5zm6 0h5v5h-5zm6 0h5v5h-5zm6 0h5v5h-5z"/></svg>;
      case "kubernetes": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" fill="#326CE5"/></svg>;
      case "flutter": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M30 70 L70 30 M30 30 L70 70" stroke="#02569B" strokeWidth="10"/></svg>;
      case "reactnative": return <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 text-[#00D8FF]"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>;
      case "kotlin": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M20 80 L80 20 M20 20 L50 50" stroke="#7F52FF" strokeWidth="10"/></svg>;
      case "swift": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M20 80 Q 50 20 80 80" stroke="#F05138" strokeWidth="10" fill="none"/></svg>;
      case "openai": return <svg viewBox="0 0 100 100" className="w-6 h-6"><path d="M50 10 A 40 40 0 1 1 49.9 10" stroke="black" strokeWidth="8" fill="none"/></svg>;
      case "python": return <div className="text-[#3776AB] font-black tracking-tight text-[15px]">Py</div>;
      case "tensorflow": return <div className="text-[#FF6F00] font-black text-[14px]">TF</div>;
      case "langchain": return <div className="text-[#121212] font-black text-[14px]">LC</div>;
      case "powerbi": return <div className="text-[#F2C811] font-black text-[14px]">PBI</div>;
      default: return <div className="text-apex-navy-800 font-bold text-[11px] uppercase whitespace-nowrap">{name.substring(0,3)}</div>;
    }
  };

  return (
    <div className="flex flex-col items-center gap-2" title={name}>
      {renderIcon()}
      <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">{name}</span>
    </div>
  );
}

function CategoryIcon({ id }: { id: string }) {
  switch(id) {
    case "frontend": return <Code2 className="w-6 h-6 text-white" strokeWidth={1.5} />;
    case "backend": return <Server className="w-6 h-6 text-white" strokeWidth={1.5} />;
    case "databases": return <Database className="w-6 h-6 text-white" strokeWidth={1.5} />;
    case "cloud": return <Cloud className="w-6 h-6 text-white" strokeWidth={1.5} />;
    case "mobile": return <Smartphone className="w-6 h-6 text-white" strokeWidth={1.5} />;
    case "ai-data": return <Cpu className="w-6 h-6 text-white" strokeWidth={1.5} />;
    default: return <Code2 className="w-6 h-6 text-white" strokeWidth={1.5} />;
  }
}

function CategoryCard({ category, alignment }: { category: TechnologyCategory, alignment: 'left' | 'right' }) {
  return (
    <div className={cn(
      "w-full bg-white rounded-[24px] border border-slate-200/80 p-6 xl:p-8 shadow-[0_4px_24px_-8px_rgba(8,30,66,0.06)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative z-10",
      alignment === 'left' ? 'mr-0' : 'ml-0'
    )}>
      <div className="flex items-start gap-5 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-apex-navy-900 flex items-center justify-center shrink-0 shadow-md">
          <CategoryIcon id={category.id} />
        </div>
        <div>
          <h3 className="text-[20px] font-bold text-apex-navy-900 tracking-tight leading-tight mb-1.5">
            {category.title}
          </h3>
          <p className="text-[14px] text-slate-500 leading-[1.4] max-w-[240px]">
            {category.description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 xl:gap-8 items-center">
        {category.technologies.map((tech) => (
          <TechLogo key={tech.id} id={tech.id} name={tech.name} />
        ))}
      </div>
    </div>
  );
}

export function TechnologyStack() {
  const leftCategories = techStackConfig.categories.slice(0, 3);
  const rightCategories = techStackConfig.categories.slice(3, 6);

  return (
    <section className="relative w-full bg-[#FAFCFF] py-24 lg:py-32 overflow-hidden">
      
      {/* ---------------------------------------------------------------- */}
      {/* 1. DECORATIVE BACKGROUNDS (Subtle & Premium)                      */}
      {/* ---------------------------------------------------------------- */}
      {/* Top Left Dotted Matrix */}
      <div className="absolute top-16 left-4 lg:left-12 w-[180px] h-[180px] lg:w-[240px] lg:h-[240px] opacity-[0.2]" aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(#64748B 2px, transparent 2px)",
          backgroundSize: "24px 24px"
        }}
      />
      {/* Top Right Concentric Arcs */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.15] lg:opacity-[0.2]" aria-hidden="true">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="600" cy="0" r="300" stroke="#64748B" strokeWidth="1" />
          <circle cx="600" cy="0" r="400" stroke="#64748B" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="600" cy="0" r="500" stroke="#64748B" strokeWidth="1" />
        </svg>
        <div className="absolute top-[180px] right-[240px] w-2.5 h-2.5 rounded-full bg-apex-gold-500 shadow-sm" />
      </div>

      <Container className="max-w-[1700px] relative z-10 px-4 sm:px-6 lg:px-12">
        
        {/* ---------------------------------------------------------------- */}
        {/* 2. HEADER SECTION                                                */}
        {/* ---------------------------------------------------------------- */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-24 relative z-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-[2px] bg-apex-gold-500" />
            <span className="text-apex-gold-500 uppercase tracking-[0.25em] font-bold text-[13px]">
              {techStackConfig.eyebrow}
            </span>
            <div className="w-10 h-[2px] bg-apex-gold-500" />
          </div>
          
          <h2 className="text-[44px] md:text-[56px] lg:text-[64px] leading-[1.1] font-bold tracking-tight mb-8">
            <span className="block text-apex-navy-800">{techStackConfig.headline}</span>
            <span className="block text-apex-gold-500">{techStackConfig.headlineLine2}</span>
          </h2>
          
          <p className="text-[18px] md:text-[20px] text-slate-500 leading-[1.6] max-w-[800px] mx-auto font-medium">
            {techStackConfig.description}
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 3. MAIN TECHNOLOGY ECOSYSTEM (CARDS + ORBIT)                    */}
        {/* ---------------------------------------------------------------- */}
        <div className="relative w-full mb-16 lg:mb-24 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-4 xl:gap-8">
          
          {/* SVG CONNECTOR LINES (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <g stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
                {/* Left Cards to Center */}
                <path d="M28% 18% L50% 50%" />
                <path d="M28% 50% L50% 50%" />
                <path d="M28% 82% L50% 50%" />
                {/* Right Cards to Center */}
                <path d="M72% 18% L50% 50%" />
                <path d="M72% 50% L50% 50%" />
                <path d="M72% 82% L50% 50%" />
              </g>
              {/* Connector Nodes */}
              <circle cx="28%" cy="18%" r="4" fill="#94A3B8" />
              <circle cx="28%" cy="50%" r="4" fill="#94A3B8" />
              <circle cx="28%" cy="82%" r="4" fill="#94A3B8" />
              <circle cx="72%" cy="18%" r="4" fill="#94A3B8" />
              <circle cx="72%" cy="50%" r="4" fill="#94A3B8" />
              <circle cx="72%" cy="82%" r="4" fill="#94A3B8" />
            </svg>
          </div>

          {/* LEFT CARDS */}
          <div className="w-full lg:w-[32%] xl:w-[30%] flex flex-col gap-6 lg:gap-10 relative z-10">
            {leftCategories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} alignment="left" />
            ))}
          </div>

          {/* CENTER APEX ORBITAL SYSTEM */}
          <div className="w-full lg:w-[36%] xl:w-[40%] aspect-square lg:aspect-auto h-[500px] lg:h-auto relative flex items-center justify-center shrink-0 z-0 my-10 lg:my-0">
            {/* Orbital Rings - Much larger now */}
            <div className="absolute inset-[-20%] lg:inset-[-30%] xl:inset-[-40%] flex items-center justify-center opacity-80 pointer-events-none">
              <div className="w-[100%] aspect-square rounded-full border border-slate-200 absolute animate-[spin_120s_linear_infinite]" />
              <div className="w-[80%] aspect-square rounded-full border border-slate-200 border-dashed absolute animate-[spin_90s_linear_infinite_reverse]" />
              <div className="w-[55%] aspect-square rounded-full border border-slate-300 absolute" />
              <div className="w-[30%] aspect-square rounded-full border border-slate-200 border-dashed absolute animate-[spin_60s_linear_infinite]" />
            </div>

            {/* Orbiting Nodes */}
            <div className="absolute top-[10%] left-[25%] w-4 h-4 rounded-full bg-[#008AD7] shadow-[0_0_15px_rgba(0,138,215,0.4)] animate-pulse" />
            <div className="absolute bottom-[15%] right-[20%] w-3 h-3 rounded-full bg-apex-navy-800" />
            <div className="absolute top-[35%] right-[10%] w-5 h-5 rounded-full bg-apex-gold-500 shadow-[0_0_20px_rgba(229,160,0,0.6)]" />
            <div className="absolute bottom-[25%] left-[20%] w-2.5 h-2.5 rounded-full bg-slate-400" />
            <div className="absolute top-[20%] right-[30%] w-3 h-3 rounded-full bg-[#326CE5]" />

            {/* Huge Central Logo Disc */}
            <div className="w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[260px] xl:h-[260px] bg-white rounded-full shadow-[0_20px_60px_-15px_rgba(8,30,66,0.15)] border border-slate-100 flex items-center justify-center relative z-20 transition-transform duration-1000 hover:scale-105">
              {/* Internal subtle rings inside the white disc */}
              <div className="absolute inset-4 lg:inset-6 border border-slate-100 rounded-full" />
              <div className="absolute inset-8 lg:inset-12 border border-slate-50 border-dashed rounded-full" />
              {/* Apex Vector Logo */}
              <div className="flex relative z-10 w-20 h-20 lg:w-28 lg:h-28">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-apex-navy-900" fill="currentColor">
                    <path d="M50 15 L85 85 L70 85 L50 45 L30 85 L15 85 Z" />
                    <path d="M40 65 L60 65 L50 85 Z" fill="#E5A000" />
                 </svg>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="w-full lg:w-[32%] xl:w-[30%] flex flex-col gap-6 lg:gap-10 relative z-10">
            {rightCategories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} alignment="right" />
            ))}
          </div>

        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 4. PRINCIPLES PANEL (White Rounded Strip)                        */}
        {/* ---------------------------------------------------------------- */}
        <div className="w-full max-w-[1200px] mx-auto bg-white rounded-[24px] border border-slate-200 p-6 lg:p-8 shadow-sm mb-6 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-20">
          
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-full bg-[#F8FAFD] border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 text-apex-navy-800" strokeWidth={2} />
            </div>
            <span className="text-apex-navy-900 font-bold text-[15px]">Secure<br/>by Design</span>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-200" />
          
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-full bg-[#F8FAFD] border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Rocket className="w-5 h-5 text-apex-navy-800" strokeWidth={2} />
            </div>
            <span className="text-apex-navy-900 font-bold text-[15px]">Built for<br/>Performance</span>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-200" />
          
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-full bg-[#F8FAFD] border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CodeSquare className="w-5 h-5 text-apex-navy-800" strokeWidth={2} />
            </div>
            <span className="text-apex-navy-900 font-bold text-[15px]">Scalable<br/>Architecture</span>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-slate-200" />
          
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-full bg-[#F8FAFD] border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <RefreshCcw className="w-5 h-5 text-apex-navy-800" strokeWidth={2} />
            </div>
            <span className="text-apex-navy-900 font-bold text-[15px]">Continuous<br/>Delivery</span>
          </div>

          <div className="hidden lg:block w-px h-12 bg-slate-200" />
          
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-full bg-[#F8FAFD] border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5 text-apex-navy-800" strokeWidth={2} />
            </div>
            <span className="text-apex-navy-900 font-bold text-[15px]">Future<br/>Ready</span>
          </div>

        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 5. BOTTOM CTA JOURNEY STRIP (Dark Navy)                          */}
        {/* ---------------------------------------------------------------- */}
        <div className="w-full bg-apex-navy-900 rounded-[24px] p-8 lg:p-10 flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-6 relative overflow-hidden shadow-2xl">
          {/* Subtle background map/pattern */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }} />

          {/* Left Text */}
          <div className="shrink-0 xl:w-[22%] text-center xl:text-left relative z-10">
            <h3 className="text-[24px] lg:text-[28px] font-bold text-white leading-[1.2]">
              A future-ready ecosystem<br />
              that <span className="text-apex-gold-500">powers innovation.</span>
            </h3>
          </div>

          {/* Services Journey (Strategic Consulting -> Product Eng -> QA ...) */}
          <div className="flex-grow flex flex-wrap items-center justify-center gap-x-3 gap-y-4 lg:gap-x-4 relative z-10">
            
            <div className="flex items-center gap-3 bg-[#0a1f42] border border-[#162a52] rounded-xl px-4 py-3 hover:bg-[#0d2650] transition-colors cursor-pointer">
              <User className="w-5 h-5 text-white/80" strokeWidth={1.5} />
              <span className="text-white text-sm font-semibold whitespace-nowrap">Strategic Consulting</span>
            </div>
            
            <div className="hidden lg:block w-4 h-[2px] bg-[#162a52]" />
            
            <div className="flex items-center gap-3 bg-[#0a1f42] border border-[#162a52] rounded-xl px-4 py-3 hover:bg-[#0d2650] transition-colors cursor-pointer">
              <Box className="w-5 h-5 text-white/80" strokeWidth={1.5} />
              <span className="text-white text-sm font-semibold whitespace-nowrap">Product Engineering</span>
            </div>
            
            <div className="hidden lg:block w-4 h-[2px] bg-[#162a52]" />
            
            <div className="flex items-center gap-3 bg-[#0a1f42] border border-[#162a52] rounded-xl px-4 py-3 hover:bg-[#0d2650] transition-colors cursor-pointer">
              <Shield className="w-5 h-5 text-white/80" strokeWidth={1.5} />
              <span className="text-white text-sm font-semibold whitespace-nowrap">Quality Assurance</span>
            </div>
            
            <div className="hidden xl:block w-4 h-[2px] bg-[#162a52]" />
            
            <div className="flex items-center gap-3 bg-[#0a1f42] border border-[#162a52] rounded-xl px-4 py-3 hover:bg-[#0d2650] transition-colors cursor-pointer">
              <CloudLightning className="w-5 h-5 text-white/80" strokeWidth={1.5} />
              <span className="text-white text-sm font-semibold whitespace-nowrap">Cloud Transformation</span>
            </div>

            <div className="hidden xl:block w-4 h-[2px] bg-[#162a52]" />
            
            <div className="flex items-center gap-3 bg-[#0a1f42] border border-[#162a52] rounded-xl px-4 py-3 hover:bg-[#0d2650] transition-colors cursor-pointer">
              <HeadphonesIcon className="w-5 h-5 text-white/80" strokeWidth={1.5} />
              <span className="text-white text-sm font-semibold whitespace-nowrap">Support & Maintenance</span>
            </div>

          </div>

          {/* Right CTA */}
          <div className="shrink-0 xl:w-[20%] flex flex-col items-center xl:items-end gap-3 relative z-10">
            <span className="text-white/90 font-semibold text-[16px]">Let&apos;s build what&apos;s next.</span>
            <Link href="/contact" className="group flex items-center gap-3 bg-apex-gold-500 hover:bg-apex-gold-400 text-apex-navy-900 px-7 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105">
              Work With Us
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>

        </div>

      </Container>
    </section>
  );
}
