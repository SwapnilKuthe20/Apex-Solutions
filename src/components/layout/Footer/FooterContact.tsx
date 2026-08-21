import { siteConfig } from "@/data/site";
import { FooterSocials } from "./FooterSocials";

export function FooterContact() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <h3 className="text-[12px] uppercase tracking-widest font-semibold text-apex-slate-500">
        Contact
      </h3>
      
      <address className="not-italic flex flex-col gap-4 text-[14px] md:text-[15px] text-apex-slate-300">
        <a 
          href={`mailto:${siteConfig.contact.email}`}
          className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm w-fit"
        >
          {siteConfig.contact.email}
        </a>
        <a 
          href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
          className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm w-fit"
        >
          {siteConfig.contact.phone}
        </a>
        <p className="text-apex-slate-400">
          {siteConfig.contact.location}
        </p>
      </address>

      <div className="pt-2">
        <FooterSocials />
      </div>
    </div>
  );
}
