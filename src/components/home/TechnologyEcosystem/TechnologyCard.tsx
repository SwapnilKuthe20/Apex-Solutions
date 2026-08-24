import React from "react";

export interface TechnologyItem {
  id: string;
  name: string;
  category: string;
}

export const technologyList: TechnologyItem[] = [
  { id: "nextjs", name: "Next.js", category: "React Framework" },
  { id: "react", name: "React", category: "UI Library" },
  { id: "nodejs", name: "Node.js", category: "Runtime" },
  { id: "laravel", name: "Laravel", category: "PHP Framework" },
  { id: "postgresql", name: "PostgreSQL", category: "Database" },
  { id: "aws", name: "AWS", category: "Cloud Platform" },
  { id: "docker", name: "Docker", category: "Containerization" },
  { id: "aiml", name: "AI / ML", category: "Intelligence" },
];

export function TechnologyIcon({ id }: { id: string }) {
  switch (id) {
    case "nextjs":
      return (
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-sm">
          <svg viewBox="0 0 180 180" className="w-8 h-8" fill="none">
            <path
              d="M137.667 149.208L67.5833 55.4583H54.4583V124.542H66.9167V72.0417L128.292 153.958C131.542 152.542 134.667 150.958 137.667 149.208Z"
              fill="white"
            />
            <path
              d="M114.333 55.4583H126.792V124.542H114.333V55.4583Z"
              fill="white"
            />
          </svg>
        </div>
      );

    case "react":
      return (
        <div className="w-14 h-14 flex items-center justify-center">
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="#00D8FF"/>
            <g stroke="#00D8FF" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        </div>
      );

    case "nodejs":
      return (
        <div className="w-14 h-14 flex items-center justify-center">
          <svg viewBox="0 0 32 32" className="w-11 h-11" fill="none">
            <path d="M16 2.5L3.5 9.7V24.3L16 31.5L28.5 24.3V9.7L16 2.5Z" stroke="#539E43" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
            <text x="7.5" y="21.5" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="#539E43">JS</text>
          </svg>
        </div>
      );

    case "laravel":
      return (
        <div className="w-14 h-14 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-11 h-11" fill="none">
            {/* Laravel 3D cubic origami shape */}
            <path d="M50 15 L85 35 L85 70 L50 90 L15 70 L15 35 Z" stroke="#FF2D20" strokeWidth="6" strokeLinejoin="round" fill="none"/>
            <path d="M50 15 L50 90 M50 52 L85 35 M50 52 L15 35" stroke="#FF2D20" strokeWidth="5" strokeLinejoin="round"/>
            <path d="M32 43 L32 62 L50 72 L68 62 L68 43" stroke="#FF2D20" strokeWidth="4" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      );

    case "postgresql":
      return (
        <div className="w-14 h-14 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none">
            <path
              d="M48 16 C30 16 18 28 18 44 C18 55 24 64 28 73 C30 78 32 83 36 84 C39 85 41 81 42 76 C43 68 43 60 46 54 C49 48 55 46 60 48 C66 50 70 56 71 63 C72 70 71 78 75 82 C78 85 82 81 83 75 C85 64 86 42 78 30 C72 20 62 16 48 16 Z"
              stroke="#336791"
              strokeWidth="4"
              strokeLinejoin="round"
              fill="#e6eff7"
            />
            <path d="M38 36 C35 36 32 39 32 43 C32 47 35 50 38 50 C41 50 44 47 44 43 C44 39 41 36 38 36 Z" stroke="#336791" strokeWidth="3" fill="none" />
            <path d="M38 50 C38 60 40 70 42 78" stroke="#336791" strokeWidth="3" strokeLinecap="round" />
            <path d="M56 36 C64 36 70 42 70 50" stroke="#336791" strokeWidth="3" strokeLinecap="round" />
            <circle cx="48" cy="34" r="2.5" fill="#336791" />
          </svg>
        </div>
      );

    case "aws":
      return (
        <div className="w-14 h-14 flex items-center justify-center">
          <svg viewBox="0 0 90 42" className="h-8 w-auto">
            <text x="8" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" fill="#232F3E" letterSpacing="-0.5px">
              aws
            </text>
            <path d="M 10 30 Q 40 41, 72 29" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 68 25 L 76 29 L 68 34 Z" fill="#FF9900" />
          </svg>
        </div>
      );

    case "docker":
      return (
        <div className="w-14 h-14 flex items-center justify-center">
          <svg viewBox="0 0 64 64" className="w-11 h-11" fill="#0db7ed">
            <path d="M59.5 28.5c-1.3-.9-3.9-1.2-5.9-.6-.4-2.9-2.5-5.2-5.5-6.1l-1.3-.4-.7 1.2c-1.4 2.4-1.7 5.2-1 7.8-.8.5-2.2 1.1-4.1 1.1H4c-1.1 0-2 .9-2 2 0 6.6 2.3 12.8 6.4 17.6 4.6 5.3 10.9 8.4 17.6 8.4 13.8 0 24.9-9.1 27.6-22.3 3.6-.3 6.9-2.3 8.3-5.5l.6-1.4-3-1.8zM19 16h5v5h-5zm6 0h5v5h-5zm6 0h5v5h-5zm-12 6h5v5h-5zm6 0h5v5h-5zm6 0h5v5h-5zm6 0h5v5h-5zm-12 6h5v5h-5zm6 0h5v5h-5zm6 0h5v5h-5zm6 0h5v5h-5z"/>
          </svg>
        </div>
      );

    case "aiml":
      return (
        <div className="w-14 h-14 flex items-center justify-center">
          <svg viewBox="0 0 64 64" className="w-11 h-11" fill="none">
            {/* Processor chip */}
            <rect x="14" y="14" width="36" height="36" rx="8" fill="none" stroke="#7C3AED" strokeWidth="3.5" />
            <rect x="22" y="22" width="20" height="20" rx="4" fill="#7C3AED" fillOpacity="0.15" stroke="#7C3AED" strokeWidth="2" />
            <text x="24" y="36.5" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="13" fill="#7C3AED">AI</text>
            {/* Pins */}
            <path d="M22 6 L22 14 M32 6 L32 14 M42 6 L42 14 M22 50 L22 58 M32 50 L32 58 M42 50 L42 58 M6 22 L14 22 M6 32 L14 32 M6 42 L14 42 M50 22 L58 22 M50 32 L58 32 M50 42 L58 42" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );

    default:
      return null;
  }
}

export function TechnologyCard({ item }: { item: TechnologyItem }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(8,30,66,0.06)] py-6 px-3 flex flex-col items-center justify-between text-center min-h-[160px] transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
      <div className="h-14 flex items-center justify-center mb-4">
        <TechnologyIcon id={item.id} />
      </div>
      <div>
        <h4 className="font-bold text-apex-navy-900 text-[14px] leading-tight mb-1">
          {item.name}
        </h4>
        <p className="text-[11px] text-slate-400 font-medium leading-tight">
          {item.category}
        </p>
      </div>
    </div>
  );
}
