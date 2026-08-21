import { cn } from "@/lib/utils";

interface StackArchitectureProps {
  activeCategoryId: string;
}

export function StackArchitecture({ activeCategoryId }: StackArchitectureProps) {
  // A layered SVG architecture visual
  // Top: Frontend (y=60)
  // Mid-High: Backend (y=160)
  // Mid: Databases (y=260)
  // Bottom: Cloud (y=360)
  // Left Branch: Mobile (connects to Backend)
  // Right Branch: AI/Data (connects to Databases)

  const checkActive = (id: string) => activeCategoryId === id;

  return (
    <div className="w-full h-[500px] flex items-center justify-center relative bg-apex-navy-900 rounded-2xl overflow-hidden shadow-2xl border border-apex-border/10">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#F7F9FC 1px, transparent 1px), linear-gradient(90deg, #F7F9FC 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <svg viewBox="0 0 500 500" className="w-full h-full absolute inset-0 pointer-events-none drop-shadow-lg" aria-hidden="true">
        <defs>
          <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D7AB11" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D7AB11" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* --- CONNECTIONS (Draw behind blocks) --- */}
        <g strokeWidth="2" fill="none">
          {/* Frontend -> Backend */}
          <path d="M 250 100 L 250 160" stroke={checkActive("frontend") || checkActive("backend") ? "#D7AB11" : "#253550"} className="transition-colors duration-500" />
          
          {/* Backend -> Databases */}
          <path d="M 250 200 L 250 260" stroke={checkActive("backend") || checkActive("databases") ? "#D7AB11" : "#253550"} className="transition-colors duration-500" />
          
          {/* Databases -> Cloud */}
          <path d="M 250 300 L 250 360" stroke={checkActive("databases") || checkActive("cloud") ? "#D7AB11" : "#253550"} className="transition-colors duration-500" />
          
          {/* Mobile -> Backend (Horizontal connection) */}
          <path d="M 120 180 L 170 180" stroke={checkActive("mobile") || checkActive("backend") ? "#D7AB11" : "#253550"} className="transition-colors duration-500" />
          
          {/* AI/Data -> Databases (Horizontal connection) */}
          <path d="M 380 280 L 330 280" stroke={checkActive("ai-data") || checkActive("databases") ? "#D7AB11" : "#253550"} className="transition-colors duration-500" />
        </g>

        {/* --- BLOCKS --- */}
        
        {/* Frontend Layer */}
        <g className={cn("transition-all duration-500", checkActive("frontend") ? "opacity-100" : "opacity-50")}>
          <rect x="170" y="60" width="160" height="40" rx="4" fill="#05132A" stroke={checkActive("frontend") ? "#D7AB11" : "#F7F9FC"} strokeWidth={checkActive("frontend") ? 2 : 1} />
          <text x="250" y="85" textAnchor="middle" fill="#F7F9FC" fontSize="12" fontWeight="600" letterSpacing="1">FRONTEND</text>
        </g>

        {/* Backend Layer */}
        <g className={cn("transition-all duration-500", checkActive("backend") ? "opacity-100" : "opacity-50")}>
          <rect x="170" y="160" width="160" height="40" rx="4" fill="#05132A" stroke={checkActive("backend") ? "#D7AB11" : "#F7F9FC"} strokeWidth={checkActive("backend") ? 2 : 1} />
          <text x="250" y="185" textAnchor="middle" fill="#F7F9FC" fontSize="12" fontWeight="600" letterSpacing="1">BACKEND</text>
        </g>

        {/* Databases Layer */}
        <g className={cn("transition-all duration-500", checkActive("databases") ? "opacity-100" : "opacity-50")}>
          <rect x="170" y="260" width="160" height="40" rx="4" fill="#05132A" stroke={checkActive("databases") ? "#D7AB11" : "#F7F9FC"} strokeWidth={checkActive("databases") ? 2 : 1} />
          <text x="250" y="285" textAnchor="middle" fill="#F7F9FC" fontSize="12" fontWeight="600" letterSpacing="1">DATABASES</text>
        </g>

        {/* Cloud / DevOps Layer */}
        <g className={cn("transition-all duration-500", checkActive("cloud") ? "opacity-100" : "opacity-50")}>
          <rect x="170" y="360" width="160" height="40" rx="4" fill="#05132A" stroke={checkActive("cloud") ? "#D7AB11" : "#F7F9FC"} strokeWidth={checkActive("cloud") ? 2 : 1} />
          <text x="250" y="385" textAnchor="middle" fill="#F7F9FC" fontSize="12" fontWeight="600" letterSpacing="1">CLOUD / DEVOPS</text>
        </g>

        {/* Mobile Branch */}
        <g className={cn("transition-all duration-500", checkActive("mobile") ? "opacity-100" : "opacity-50")}>
          <rect x="40" y="160" width="80" height="40" rx="4" fill="#05132A" stroke={checkActive("mobile") ? "#D7AB11" : "#F7F9FC"} strokeWidth={checkActive("mobile") ? 2 : 1} />
          <text x="80" y="185" textAnchor="middle" fill="#F7F9FC" fontSize="10" fontWeight="600" letterSpacing="1">MOBILE</text>
        </g>

        {/* AI & Data Branch */}
        <g className={cn("transition-all duration-500", checkActive("ai-data") ? "opacity-100" : "opacity-50")}>
          <rect x="380" y="260" width="80" height="40" rx="4" fill="#05132A" stroke={checkActive("ai-data") ? "#D7AB11" : "#F7F9FC"} strokeWidth={checkActive("ai-data") ? 2 : 1} />
          <text x="420" y="285" textAnchor="middle" fill="#F7F9FC" fontSize="10" fontWeight="600" letterSpacing="1">AI / DATA</text>
        </g>

      </svg>
    </div>
  );
}
