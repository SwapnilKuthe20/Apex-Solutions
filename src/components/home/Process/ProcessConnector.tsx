import { forwardRef } from "react";

export const ProcessConnector = forwardRef<SVGPathElement, React.ComponentPropsWithoutRef<"svg">>((props, ref) => {
  return (
    <div 
      className="absolute top-8 bottom-8 left-[19px] md:left-[29px] w-px z-0 pointer-events-none"
      aria-hidden="true"
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-apex-border/40 w-px" />
      
      {/* The animated SVG stroke */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        preserveAspectRatio="none"
        viewBox="0 0 1 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={ref}
          d="M0.5 0 L0.5 100"
          stroke="#D7AB11"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="will-change-[stroke-dashoffset]"
        />
      </svg>
    </div>
  );
});

ProcessConnector.displayName = "ProcessConnector";
