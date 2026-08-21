import Link from "next/link";
import { siteConfig } from "@/data/site";

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-6">
      <Link 
        href="/" 
        aria-label="Apex Solutions Home"
        className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 rounded-sm w-fit"
      >
        <span className="font-bold tracking-tight text-white text-3xl flex items-center">
          Apex<span className="text-apex-gold-500">.</span>
        </span>
      </Link>
      
      <p className="text-[14px] md:text-[15px] leading-relaxed text-apex-slate-400 max-w-sm">
        {siteConfig.description}
      </p>
    </div>
  );
}
