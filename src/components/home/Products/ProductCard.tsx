import { ProductData } from "@/data/products";
import { ArrowRight, CheckCircle2, GraduationCap, MessageCircle, MonitorCheck, Printer, TrendingUp } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: ProductData;
}

const getIcon = (iconName: string, className?: string) => {
  switch (iconName) {
    case "GraduationCap": return <GraduationCap className={className} strokeWidth={1.5} />;
    case "MessageCircle": return <MessageCircle className={className} strokeWidth={1.5} />;
    case "MonitorCheck": return <MonitorCheck className={className} strokeWidth={1.5} />;
    case "Printer": return <Printer className={className} strokeWidth={1.5} />;
    case "TrendingUp": return <TrendingUp className={className} strokeWidth={1.5} />;
    default: return <CheckCircle2 className={className} strokeWidth={1.5} />;
  }
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      href={`/platforms/${product.id}`}
      className="group flex flex-col bg-white border border-slate-200 rounded-[20px] p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/50 flex-1 min-w-0"
    >
      {/* Icon Circle */}
      <div className="flex justify-center mb-6">
        <div className={cn("w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105", product.iconBg)}>
          {getIcon(product.iconName, cn("w-10 h-10", product.iconColor))}
        </div>
      </div>

      {/* Product Title */}
      <h3 className="text-center text-[22px] font-bold mb-3 tracking-tight">
        {product.titlePrefix ? (
          <>
            <span className="text-apex-navy-800">{product.titlePrefix}</span>
            <span className={product.iconColor}>{product.titleSuffix}</span>
          </>
        ) : (
          <span className="text-apex-navy-800">{product.title}</span>
        )}
      </h3>

      {/* Subtitle */}
      <p className="text-center text-[15px] text-slate-500 leading-snug mb-6 whitespace-pre-line">
        {product.subtitle}
      </p>

      {/* Divider */}
      <div className="relative w-full h-px bg-slate-100 mb-6 flex justify-center">
        <div className={cn("absolute top-0 h-[2px] w-12 -translate-y-1/2", product.accentColor)} />
      </div>

      {/* Feature List */}
      <ul className="flex flex-col gap-3 mb-8 flex-grow">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className={cn("w-5 h-5 shrink-0 mt-0.5", product.iconColor)} strokeWidth={1.5} />
            <span className="text-[14px] text-slate-600 leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className={cn("flex items-center justify-center gap-2 mt-auto text-[15px] font-semibold transition-colors", product.iconColor)}>
        Learn more
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
      </div>
    </Link>
  );
}
