import { TrustedCompany } from "@/data/trust";

interface TrustedCompanyLogoProps {
  company: TrustedCompany;
}

export function TrustedCompanyLogo({ company }: TrustedCompanyLogoProps) {
  // Brand colors simulation for text placeholders to match visual density
  const getBrandColor = (id: string) => {
    switch (id) {
      case "google": return "text-[#4285F4]";
      case "microsoft": return "text-[#F25022]";
      case "aws": return "text-[#FF9900]";
      case "meta": return "text-[#0668E1]";
      case "hp": return "text-[#0096D6]";
      case "zoho": return "text-[#000000]";
      default: return "text-apex-navy-800";
    }
  };

  return (
    <div className="flex items-center justify-center p-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
      <span className={`font-bold text-2xl tracking-tighter select-none ${getBrandColor(company.id)}`} aria-label={company.name}>
        {company.logoText}
      </span>
    </div>
  );
}
