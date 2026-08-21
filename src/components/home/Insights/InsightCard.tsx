"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Insight } from "@/data/insights";
import { InsightImage } from "./InsightImage";
import { InsightMeta } from "./InsightMeta";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  insight: Insight;
}

export const InsightCard = forwardRef<HTMLElement, InsightCardProps>(
  ({ insight }, ref) => {
    return (
      <article 
        ref={ref}
        className={cn(
          "group flex flex-col gap-6 lg:gap-8 will-change-transform",
          insight.featured && "lg:h-full"
        )}
      >
        <Link href={insight.href} className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-lg overflow-hidden">
          {insight.image && (
            <InsightImage 
              imageSrc={insight.image} 
              altText={insight.title} 
              isFeatured={insight.featured} 
            />
          )}
        </Link>
        
        <div className="flex flex-col flex-grow">
          <InsightMeta 
            category={insight.category} 
            date={insight.date} 
            readingTime={insight.readingTime} 
            author={insight.author} 
          />
          
          <Link href={insight.href} className="block group-hover:text-apex-gold-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm">
            <h3 className={cn(
              "font-semibold text-apex-navy-900 tracking-tight mb-4",
              insight.featured ? "text-[24px] md:text-[32px] lg:text-[40px] leading-[1.15]" : "text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2]"
            )}>
              {insight.title}
            </h3>
          </Link>
          
          <p className={cn(
            "text-apex-slate-500 mb-8",
            insight.featured ? "text-[16px] lg:text-[18px] leading-relaxed max-w-2xl" : "text-[15px] lg:text-[16px] leading-relaxed"
          )}>
            {insight.description}
          </p>

          {/* Spacer to push CTA to bottom if heights differ */}
          <div className="mt-auto pt-4 border-t border-apex-border/40">
            <Link 
              href={insight.href}
              className="inline-flex items-center text-sm font-semibold text-apex-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm"
              aria-label={`Read ${insight.title}`}
            >
              <span className="group-hover:text-apex-gold-600 transition-colors">Read Insight</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-apex-gold-600" />
            </Link>
          </div>
        </div>
      </article>
    );
  }
);

InsightCard.displayName = "InsightCard";
