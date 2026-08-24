import { TrustedCompany } from "@/data/trust";

interface TrustedCompanyLogoProps {
  company: TrustedCompany;
}

export function TrustedCompanyLogo({ company }: TrustedCompanyLogoProps) {
  switch (company.id) {
    case "google":
      return (
        <div className="flex items-center justify-center h-full">
          <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="none">
            {/* Google official logo typography */}
            <text x="0" y="28" fontFamily="'Product Sans', Arial, sans-serif" fontWeight="bold" fontSize="28" letterSpacing="-0.5px">
              <tspan fill="#4285F4">G</tspan>
              <tspan fill="#EA4335">o</tspan>
              <tspan fill="#FBBC05">o</tspan>
              <tspan fill="#4285F4">g</tspan>
              <tspan fill="#34A853">l</tspan>
              <tspan fill="#EA4335">e</tspan>
            </text>
          </svg>
        </div>
      );

    case "microsoft":
      return (
        <div className="flex items-center justify-center gap-2.5">
          <div className="grid grid-cols-2 gap-1 w-5 h-5 shrink-0">
            <div className="bg-[#F25022] w-2 h-2 rounded-[0.5px]" />
            <div className="bg-[#7FBA00] w-2 h-2 rounded-[0.5px]" />
            <div className="bg-[#00A4EF] w-2 h-2 rounded-[0.5px]" />
            <div className="bg-[#FFB900] w-2 h-2 rounded-[0.5px]" />
          </div>
          <span className="font-semibold text-slate-700 text-[17px] tracking-tight font-sans">
            Microsoft
          </span>
        </div>
      );

    case "aws":
      return (
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 90 42" className="h-8 w-auto">
            <text x="8" y="25" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" fill="#232F3E" letterSpacing="-0.5px">
              aws
            </text>
            <path d="M 10 32 Q 40 43, 72 31" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 68 27 L 76 31 L 68 36 Z" fill="#FF9900" />
          </svg>
        </div>
      );

    case "meta":
      return (
        <div className="flex items-center justify-center gap-2">
          <svg viewBox="0 0 36 24" className="w-8 h-6" fill="#0081FB">
            <path d="M18 13.5C16.2 10.3 14 7 9.8 7 4.9 7 1 11 1 16c0 4.8 3.8 8.8 8.8 8.8 3.8 0 6.6-2.5 8.2-5.3 1.6 2.8 4.4 5.3 8.2 5.3 5 0 8.8-4 8.8-8.8 0-5-3.9-9-8.8-9-4.2 0-6.4 3.3-8.2 6.5zm-8.2 8C6 21.5 3.5 19 3.5 16s2.5-5.5 6.3-5.5c3.2 0 5 2.8 6.5 5.5-1.5 2.7-3.3 5.5-6.5 5.5zm16.4 0c-3.2 0-5-2.8-6.5-5.5 1.5-2.7 3.3-5.5 6.5-5.5 3.8 0 6.3 2.5 6.3 5.5s-2.5 5.5-6.3 5.5z" transform="scale(0.85) translate(2, -4)" />
          </svg>
          <span className="font-bold text-slate-800 text-[18px] tracking-tight font-sans">
            Meta
          </span>
        </div>
      );

    case "hp":
      return (
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[#0096D6] flex items-center justify-center shadow-inner">
            <span className="text-white font-serif italic font-bold text-2xl tracking-tighter -mt-0.5">
              hp
            </span>
          </div>
        </div>
      );

    case "zoho":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-[4px] border-[2.5px] border-[#E11938]" />
            <div className="w-4 h-4 rounded-[4px] border-[2.5px] border-[#009B4D]" />
            <div className="w-4 h-4 rounded-[4px] border-[2.5px] border-[#0072BC]" />
            <div className="w-4 h-4 rounded-[4px] border-[2.5px] border-[#F9A01B]" />
          </div>
          <span className="font-bold text-[9.5px] tracking-[0.25em] text-slate-800 uppercase mt-1">
            ZOHO
          </span>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center">
          <span className="font-bold text-lg text-slate-700">{company.name}</span>
        </div>
      );
  }
}
