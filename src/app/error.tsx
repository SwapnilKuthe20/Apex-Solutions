"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white text-apex-navy-800 pt-20">
      <Container className="flex flex-col items-center text-center">
        <h1 className="text-[32px] md:text-[48px] font-bold tracking-tight text-apex-navy-900 mb-6">
          System Interruption
        </h1>
        <p className="text-apex-slate-500 max-w-md mb-10 text-[16px] md:text-[18px]">
          An unexpected error occurred while processing your request. Our engineering team has been notified.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center bg-apex-navy-900 text-white h-[48px] px-8 rounded-md font-semibold text-[15px] transition-colors hover:bg-apex-gold-500 hover:text-apex-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500 focus-visible:ring-offset-2"
        >
          Try Again
        </button>
      </Container>
    </div>
  );
}
