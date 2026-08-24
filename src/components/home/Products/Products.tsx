import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { productsConfig } from "@/data/products";
import { Monitor, Smartphone, Database, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

export function Products() {
  const getIcon = (id: string) => {
    switch(id) {
      case "web": return Monitor;
      case "mobile": return Smartphone;
      case "data": return Database;
      case "cloud": return Cloud;
      default: return Monitor;
    }
  };

  return (
    <Section variant="white" className="py-20 md:py-28 overflow-hidden bg-white">
      <Container>
        {/* Intro Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Eyebrow className="justify-center mb-6">{productsConfig.eyebrow}</Eyebrow>
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] font-semibold text-apex-navy-800 tracking-tight mb-6">
            {productsConfig.headline}
          </h2>
          <p className="text-[16px] md:text-[18px] text-apex-slate-500 leading-relaxed max-w-2xl mx-auto">
            {productsConfig.description}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsConfig.products.map((product) => {
            const Icon = getIcon(product.id);
            return (
              <div key={product.id} className="flex flex-col group cursor-pointer">
                <div className={cn(
                  "w-full aspect-[4/3] rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-2",
                  product.iconBg
                )}>
                  <Icon className={cn("w-12 h-12", product.iconColor)} />
                </div>
                
                <h3 className="text-xl font-bold text-apex-navy-800 mb-3 group-hover:text-apex-gold-500 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-sm text-apex-slate-500 leading-relaxed">
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
