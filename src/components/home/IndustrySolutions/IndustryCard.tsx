import { IndustryData } from "@/data/industries";
import { ArrowRight, GraduationCap, Landmark, Settings, HeartPulse, Building2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface IndustryCardProps {
  industry: IndustryData;
}

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case "GraduationCap": return <GraduationCap className="w-6 h-6 text-apex-gold-500" strokeWidth={1.5} />;
    case "Landmark": return <Landmark className="w-6 h-6 text-apex-gold-500" strokeWidth={1.5} />;
    case "Settings": return <Settings className="w-6 h-6 text-apex-gold-500" strokeWidth={1.5} />;
    case "HeartPulse": return <HeartPulse className="w-6 h-6 text-apex-gold-500" strokeWidth={1.5} />;
    case "Building2": return <Building2 className="w-6 h-6 text-apex-gold-500" strokeWidth={1.5} />;
    case "ShoppingCart": return <ShoppingCart className="w-6 h-6 text-apex-gold-500" strokeWidth={1.5} />;
    default: return <Settings className="w-6 h-6 text-apex-gold-500" strokeWidth={1.5} />;
  }
};

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <Link 
      href={`/industries/${industry.id}`}
      className="group relative flex flex-col bg-white overflow-hidden rounded-[16px] w-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-15px_rgba(11,31,65,0.15)] border border-slate-100 flex-1 min-w-0"
    >
      {/* Image Area */}
      <div className="relative h-[140px] md:h-[160px] w-full overflow-hidden">
        {industry.image && (
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Floating Circular Icon */}
      <div className="absolute top-[140px] md:top-[160px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-14 h-14 bg-apex-navy-800 rounded-full flex items-center justify-center border-[4px] border-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
          {getIcon(industry.iconName)}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow pt-10 pb-6 px-4 md:px-5">
        <h3 className="text-[17px] md:text-[19px] font-semibold text-apex-navy-800 text-center mb-3">
          {industry.title}
        </h3>
        
        {/* Gold Short Underline */}
        <div className="w-8 h-[2px] bg-apex-gold-500 mx-auto mb-4" />
        
        <p className="text-[13px] md:text-[14px] text-slate-500 text-center leading-relaxed flex-grow">
          {descriptionTruncated(industry.description)}
        </p>
        
        {/* Bottom Divider */}
        <div className="w-full h-px bg-slate-100 mt-6 mb-5" />
        
        {/* CTA */}
        <div className="flex items-center justify-between mt-auto group-hover:text-apex-navy-800 transition-colors">
          <span className="text-[13px] md:text-[14px] font-semibold text-apex-navy-800">
            Explore Solutions
          </span>
          <ArrowRight className="w-4 h-4 text-apex-gold-500 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

// Optional helper to keep descriptions consistent height if needed, 
// though flex-grow on the p tag handles vertical alignment.
function descriptionTruncated(desc: string) {
  return desc;
}

