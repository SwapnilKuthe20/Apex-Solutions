import { forwardRef } from "react";
import { Insight } from "@/data/insights";
import { InsightCard } from "./InsightCard";

interface InsightListProps {
  insights: Insight[];
}

export const InsightList = forwardRef<HTMLDivElement, InsightListProps>(
  ({ insights }, ref) => {
    
    // We expect up to 3 insights as per the design requirements.
    const featuredInsight = insights.find(i => i.featured) || insights[0];
    const standardInsights = insights.filter(i => i !== featuredInsight).slice(0, 2);

    if (insights.length === 0) {
      return null;
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12">
        
        {/* Featured Left Side */}
        {featuredInsight && (
          <div 
            className="col-span-1 lg:col-span-7"
            ref={ref} // We will attach refs to children via the orchestrator, but can also use this as a container
          >
            <InsightCard insight={featuredInsight} />
          </div>
        )}

        {/* Standard Stacked Right Side */}
        {standardInsights.length > 0 && (
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-12 md:gap-12 lg:gap-12">
            {standardInsights.map(insight => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        )}

      </div>
    );
  }
);

InsightList.displayName = "InsightList";
