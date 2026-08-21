import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white text-apex-navy-800 pt-20">
      <Container className="flex flex-col items-center text-center">
        <h1 className="text-[64px] md:text-[120px] font-bold tracking-tight text-apex-navy-900 leading-none mb-4">
          404
        </h1>
        <h2 className="text-[24px] md:text-[32px] font-semibold tracking-tight text-apex-navy-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-apex-slate-500 max-w-md mb-10 text-[16px] md:text-[18px]">
          The engineering documentation, solution, or resource you are looking for does not exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center bg-apex-navy-900 text-white h-[48px] px-8 rounded-md font-semibold text-[15px] transition-colors hover:bg-apex-gold-500 hover:text-apex-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 focus-visible:ring-offset-2"
        >
          Return Home
        </Link>
      </Container>
    </div>
  );
}
