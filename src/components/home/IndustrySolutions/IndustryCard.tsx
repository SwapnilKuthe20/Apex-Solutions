import { IndustryData } from "@/data/industries";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  industry: IndustryData;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  // Use a placeholder image mapped by visualType
  const placeholderImages = {
    manufacturing: "bg-slate-300",
    healthcare: "bg-slate-400",
    logistics: "bg-slate-500",
    finance: "bg-slate-600",
    retail: "bg-slate-700",
    energy: "bg-slate-800",
  };
  
  const bgClass = placeholderImages[industry.visualType as keyof typeof placeholderImages] || "bg-slate-900";

  return (
    <Link 
      href="/industries"
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-[20px] h-[300px] md:h-[400px] w-full transition-all duration-300",
        bgClass
      )}
    >
      {/* Dark gradient overlay matching reference */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Content at bottom */}
      <div className="relative z-20 p-6 md:p-8 flex justify-between items-end w-full">
        <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight group-hover:-translate-y-1 transition-transform duration-300">
          {industry.title}
        </h3>
        
        <div className="w-10 h-10 rounded-full bg-apex-gold-500 flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </Link>
  );
}
