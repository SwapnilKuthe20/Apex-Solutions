import { IndustryData } from "@/data/industries";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface IndustryCardProps {
  industry: IndustryData;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <div className="w-[85vw] md:w-[60vw] lg:w-[800px] h-full flex-shrink-0 relative group rounded-2xl overflow-hidden bg-white border border-apex-border flex flex-col md:flex-row transition-shadow duration-500 hover:shadow-xl hover:border-apex-gold-500">
      
      {/* Content Side (Left) */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between h-full relative z-10 bg-white">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-semibold tracking-widest text-apex-gold-500">
              {industry.number}
            </span>
            <div className="h-[1px] w-8 bg-apex-border" />
          </div>

          <h3 className="text-3xl md:text-4xl font-semibold text-apex-navy-800 tracking-tight mb-6">
            {industry.title}
          </h3>
          
          <p className="text-base md:text-lg text-apex-slate-500 leading-relaxed mb-8">
            {industry.description}
          </p>

          <ul className="space-y-4 mb-12">
            {industry.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-apex-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium text-apex-navy-800">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link 
          href="/industries"
          className="inline-flex items-center gap-2 group/link"
        >
          <span className="text-sm font-semibold tracking-wide text-apex-navy-800 transition-colors group-hover/link:text-apex-gold-500">
            Explore Solutions
          </span>
          <ArrowRight className="w-4 h-4 text-apex-navy-800 transition-transform duration-300 will-change-transform group-hover/link:translate-x-1.5 group-hover/link:text-apex-gold-500" />
        </Link>
      </div>

      {/* Visual Side (Right) */}
      <div className="hidden md:flex w-1/2 bg-apex-navy-900 relative overflow-hidden items-center justify-center">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#DCE3EC 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        {/* Render Abstract Technical Visual based on type */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-12 transition-transform duration-700 will-change-transform group-hover:scale-105">
          {industry.visualType === "manufacturing" && (
            <svg viewBox="0 0 200 200" className="w-full max-w-[240px] opacity-80">
              <rect x="40" y="40" width="120" height="120" fill="none" stroke="#D7AB11" strokeWidth="2" strokeDasharray="4 4" />
              <rect x="60" y="60" width="80" height="80" fill="none" stroke="#F7F9FC" strokeWidth="1" />
              <circle cx="100" cy="100" r="16" fill="#D7AB11" />
              <path d="M 100 40 L 100 20 M 100 160 L 100 180 M 40 100 L 20 100 M 160 100 L 180 100" stroke="#F7F9FC" strokeWidth="2" />
            </svg>
          )}
          {industry.visualType === "healthcare" && (
            <svg viewBox="0 0 200 200" className="w-full max-w-[240px] opacity-80">
              <path d="M 40 100 L 80 100 L 100 60 L 120 140 L 140 100 L 180 100" fill="none" stroke="#D7AB11" strokeWidth="3" strokeLinejoin="round" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#F7F9FC" strokeWidth="1" strokeDasharray="2 4" />
            </svg>
          )}
          {industry.visualType === "logistics" && (
            <svg viewBox="0 0 200 200" className="w-full max-w-[240px] opacity-80">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#F7F9FC" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#F7F9FC" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 100 100 L 140 60" stroke="#D7AB11" strokeWidth="3" />
              <circle cx="140" cy="60" r="6" fill="#D7AB11" />
              <path d="M 100 100 L 60 120" stroke="#F7F9FC" strokeWidth="2" />
              <circle cx="60" cy="120" r="4" fill="#F7F9FC" />
            </svg>
          )}
          {industry.visualType === "finance" && (
            <svg viewBox="0 0 200 200" className="w-full max-w-[240px] opacity-80">
              <rect x="40" y="80" width="30" height="80" fill="none" stroke="#F7F9FC" strokeWidth="2" />
              <rect x="85" y="40" width="30" height="120" fill="none" stroke="#D7AB11" strokeWidth="2" />
              <rect x="130" y="100" width="30" height="60" fill="none" stroke="#F7F9FC" strokeWidth="2" />
              <path d="M 40 160 L 160 160" stroke="#DCE3EC" strokeWidth="2" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
