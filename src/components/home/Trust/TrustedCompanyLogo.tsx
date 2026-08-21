import { TrustedCompany } from "@/data/trust";

interface TrustedCompanyLogoProps {
  company: TrustedCompany;
}

export function TrustedCompanyLogo({ company }: TrustedCompanyLogoProps) {
  return (
    <div className="w-[160px] h-[80px] md:w-[200px] md:h-[100px] flex-shrink-0 flex items-center justify-center bg-white border border-apex-border rounded-xl transition-all duration-300 opacity-60 hover:opacity-100 hover:-translate-y-1 hover:border-apex-gold-500 shadow-sm mx-4">
      {/* Fallback to text if no SVG logo is provided */}
      <span className="font-semibold text-apex-navy-800 text-lg tracking-wide select-none" aria-label={company.name}>
        {company.logoText}
      </span>
    </div>
  );
}
