import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/data/navigation";
import { FooterBrand } from "./FooterBrand";
import { FooterColumn } from "./FooterColumn";
import { FooterBottom } from "./FooterBottom";

export function Footer() {
  return (
    <footer 
      className="bg-apex-navy-900 border-t border-apex-border/10 overflow-hidden"
      aria-label="Site Footer"
    >
      <Container className="pt-20 md:pt-24 lg:pt-32 pb-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Brand Area */}
          <div className="col-span-1 lg:col-span-4 lg:pr-12">
            <FooterBrand />
          </div>
          
          {/* Navigation Area & Badges */}
          <div className="col-span-1 lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              
              <div>
                <FooterColumn title="Company" links={footerNavigation.company} />
              </div>
              
              <div>
                <FooterColumn title="Services" links={footerNavigation.services} />
              </div>
              
              <div>
                <FooterColumn title="Industries" links={footerNavigation.industries} />
              </div>

              {/* Trust Badges */}
              <div className="flex flex-col gap-6 lg:gap-8">
                <h3 className="text-[12px] uppercase tracking-widest font-semibold text-apex-slate-500">
                  Certifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-apex-navy-800/50 border border-apex-border/20 rounded flex items-center justify-center p-3 h-16">
                    <span className="text-apex-slate-400 text-[10px] font-bold text-center leading-tight">ISO 27001<br/>CERTIFIED</span>
                  </div>
                  <div className="bg-apex-navy-800/50 border border-apex-border/20 rounded flex items-center justify-center p-3 h-16">
                    <span className="text-apex-slate-400 text-[10px] font-bold text-center leading-tight">AWS<br/>PARTNER</span>
                  </div>
                  <div className="bg-apex-navy-800/50 border border-apex-border/20 rounded flex items-center justify-center p-3 h-16">
                    <span className="text-apex-slate-400 text-[10px] font-bold text-center leading-tight">SOC 2<br/>TYPE II</span>
                  </div>
                  <div className="bg-apex-navy-800/50 border border-apex-border/20 rounded flex items-center justify-center p-3 h-16">
                    <span className="text-apex-slate-400 text-[10px] font-bold text-center leading-tight">HIPAA<br/>COMPLIANT</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="mt-16">
          <FooterBottom />
        </div>

      </Container>
    </footer>
  );
}
