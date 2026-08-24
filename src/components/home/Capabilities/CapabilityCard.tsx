import { ArrowRight, Code } from "lucide-react";
import { Capability } from "@/data/capabilities";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CapabilityCardProps {
  capability: Capability;
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const { title, shortDescription, href, iconBg, iconColor } = capability;
  
  const targetHref = href || "#";

  return (
    <Link 
      href={targetHref}
      className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-apex-border bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-transparent h-full p-8"
    >
      <div className="flex flex-col flex-grow">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
          iconBg,
          iconColor
        )}>
          {/* Use a placeholder icon as assets are missing */}
          <Code className="w-6 h-6" />
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-apex-navy-800 leading-tight mb-4">
          {title}
        </h3>
        
        <p className="text-base text-apex-slate-500 leading-relaxed mb-8 flex-grow">
          {shortDescription}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <span className="text-sm font-semibold text-apex-navy-800 group-hover:text-apex-gold-500 transition-colors">
          Read More
        </span>
        <ArrowRight className="w-4 h-4 text-apex-navy-800 group-hover:text-apex-gold-500 transition-all group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
