import Image from "next/image";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface InsightImageProps {
  imageSrc: string;
  altText: string;
  isFeatured?: boolean;
}

export function InsightImage({ imageSrc, altText, isFeatured }: InsightImageProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden bg-apex-slate-100",
        isFeatured ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[4/3] md:aspect-[3/2]"
      )}
    >
      <div 
        className={cn(
          "absolute inset-0 w-full h-full",
          !prefersReducedMotion && "transition-transform duration-700 ease-out group-hover:scale-105"
        )}
      >
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover"
          sizes={isFeatured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
        />
      </div>
    </div>
  );
}
