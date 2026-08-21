import { forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CaseStudyVisualProps {
  imageSrc: string;
  altText: string;
  imageInnerRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
}

export const CaseStudyVisual = forwardRef<HTMLDivElement, CaseStudyVisualProps>(
  ({ imageSrc, altText, imageInnerRef, className }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn("relative w-full overflow-hidden aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10] bg-apex-slate-100 will-change-transform", className)}
      >
        <div 
          ref={imageInnerRef}
          className="absolute inset-0 w-full h-full will-change-transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        >
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </div>
    );
  }
);

CaseStudyVisual.displayName = "CaseStudyVisual";
