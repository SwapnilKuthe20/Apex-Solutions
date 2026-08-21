import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ProductSliderProps {
  children: ReactNode;
  className?: string;
}

export const ProductSlider = forwardRef<HTMLDivElement, ProductSliderProps>(({ children, className }, ref) => {
  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col lg:flex-row gap-12 lg:gap-0 w-full will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
});

ProductSlider.displayName = "ProductSlider";
