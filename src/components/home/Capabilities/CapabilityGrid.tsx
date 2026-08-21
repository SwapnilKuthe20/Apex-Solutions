import { ReactNode } from "react";

interface CapabilityGridProps {
  children: ReactNode;
}

export function CapabilityGrid({ children }: CapabilityGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      {children}
    </div>
  );
}
