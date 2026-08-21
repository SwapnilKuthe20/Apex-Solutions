import type { Metadata } from "next";
import { inter, manrope, instrumentSerif } from "@/styles/fonts";
import { siteConfig } from "@/data/site";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Header } from "@/components/navigation/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexsolutions.co.in"),
  title: {
    default: `${siteConfig.name} | Enterprise Technology & Engineering`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Apex Solutions",
    "Enterprise Software Studio",
    "Digital Transformation",
    "Product Engineering",
    "Cloud Architecture",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apexsolutions.co.in",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased bg-white text-apex-navy-800 selection:bg-apex-navy-800 selection:text-apex-gold-500 min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <PageTransition />
          <CustomCursor />
          <ScrollProgress />
          <Header />
          <div className="flex-1 mt-20">{children}</div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
