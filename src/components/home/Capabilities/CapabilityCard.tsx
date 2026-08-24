import { ArrowRight, Code, Bot, Cloud, LayoutDashboard, Smartphone, Database } from "lucide-react";
import { Capability } from "@/data/capabilities";
import Link from "next/link";

interface CapabilityCardProps {
  capability: Capability;
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const { title, description, href, iconType, number } = capability;
  const targetHref = href || "#";

  const renderIcon = () => {
    switch (iconType) {
      case "code":
        return <Code className="w-5 h-5 text-apex-gold-500" />;
      case "ai":
        return <Bot className="w-5 h-5 text-apex-gold-500" />;
      case "cloud":
        return <Cloud className="w-5 h-5 text-apex-gold-500" />;
      case "crm":
        return <LayoutDashboard className="w-5 h-5 text-apex-gold-500" />;
      case "mobile":
        return <Smartphone className="w-5 h-5 text-apex-gold-500" />;
      case "data":
        return <Database className="w-5 h-5 text-apex-gold-500" />;
      default:
        return <Code className="w-5 h-5 text-apex-gold-500" />;
    }
  };

  return (
    <Link 
      href={targetHref}
      className="group flex flex-col justify-between rounded-[20px] border border-slate-100/90 bg-white transition-all duration-300 hover:shadow-[0_12px_30px_-8px_rgba(8,30,66,0.1)] hover:-translate-y-1 h-full min-h-[295px] p-7 md:p-8 shadow-[0_4px_20px_-4px_rgba(8,30,66,0.05)] relative overflow-hidden"
    >
      <div className="flex flex-col flex-grow">
        {/* Top Header Row: Navy Icon Tile + Dotted Pattern + Number Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-12 h-12 rounded-xl bg-apex-navy-900 border border-apex-navy-800 flex items-center justify-center shadow-sm shrink-0">
              {renderIcon()}
            </div>
            
            {/* Micro Dotted Matrix */}
            <div 
              className="w-20 h-7 bg-[radial-gradient(circle_at_center,var(--apex-slate-400)_1.5px,transparent_1.5px)] opacity-60 pointer-events-none"
              style={{ backgroundSize: "9px 9px" }}
            />
          </div>

          {/* Number Badge */}
          <div className="w-11 h-9 rounded-lg bg-[#f0f4f9] text-apex-slate-500 font-bold text-[13.5px] flex items-center justify-center tracking-wide shrink-0">
            {number}
          </div>
        </div>

        {/* Card Title */}
        <h3 className="text-[20px] md:text-[22px] font-bold text-apex-navy-900 leading-snug mb-3 whitespace-pre-line group-hover:text-apex-navy-800 transition-colors">
          {title}
        </h3>
        
        {/* Card Description */}
        <p className="text-[13.5px] md:text-[14.5px] text-apex-slate-500 leading-relaxed mb-6 flex-grow">
          {description}
        </p>
      </div>

      {/* Bottom Area: Gold Divider + CTA */}
      <div className="mt-auto pt-2">
        <div className="w-full h-[1px] bg-apex-gold-500/35 mb-4" />
        
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] font-bold text-apex-navy-900 group-hover:text-apex-gold-600 transition-colors">
            Explore Capability
          </span>
          <ArrowRight className="w-4 h-4 text-apex-gold-500 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
