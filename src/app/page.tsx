import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { TechnologyEcosystem } from "@/components/home/TechnologyEcosystem";
import { Capabilities } from "@/components/home/Capabilities";
import { EngineeringApproach } from "@/components/home/EngineeringApproach";
import { IndustrySolutions } from "@/components/home/IndustrySolutions";
import { Products } from "@/components/home/Products";
import { TechnologyStack } from "@/components/home/TechnologyStack";
import { WhyApex } from "@/components/home/WhyApex";
import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { Process } from "@/components/home/Process";
import { Insights } from "@/components/home/Insights";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <TechnologyEcosystem />
      <Capabilities />
      <EngineeringApproach />
      <IndustrySolutions />
      <Products />
      <TechnologyStack />
      <WhyApex />
      <ImpactMetrics />
      <CaseStudies />
      <Testimonials />
      <Process />
      <Insights />
      <FinalCTA />
    </main>
  );
}
