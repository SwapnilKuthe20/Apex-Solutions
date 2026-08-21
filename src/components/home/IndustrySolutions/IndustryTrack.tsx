import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface IndustryTrackProps {
  children: ReactNode;
  className?: string;
}

export const IndustryTrack = forwardRef<HTMLDivElement, IndustryTrackProps>(({ children, className }, ref) => {
  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col lg:flex-row gap-6 lg:gap-8 w-full will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
});

IndustryTrack.displayName = "IndustryTrack";
