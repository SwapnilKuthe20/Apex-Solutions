import { Search, Layers, Code2, Rocket, TrendingUp } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export type IconType = ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;

export interface ProcessStep {
  id: string;
  number: string;
  title: "Discover" | "Architect" | "Build" | "Deploy" | "Scale";
  description: string;
  activities?: string[];
  icon: IconType;
}

export const processConfig = {
  eyebrow: "OUR PROCESS",
  headline: "From First Conversation to Scalable Systems.",
  description: "We follow a structured engineering lifecycle, ensuring every system is designed for operational reality and long-term viability.",
  steps: [
    {
      id: "discover",
      number: "01",
      title: "Discover",
      description: "We analyze your business context, operational workflows, and technical constraints to define exact engineering requirements.",
      activities: ["Requirements Definition", "Workflow Analysis", "Technical Feasibility"],
      icon: Search,
    },
    {
      id: "architect",
      number: "02",
      title: "Architect",
      description: "We design the underlying system architecture, selecting the optimal technology stack and defining scalable data models.",
      activities: ["System Design", "Technology Selection", "Security Modeling"],
      icon: Layers,
    },
    {
      id: "build",
      number: "03",
      title: "Build",
      description: "Our engineers construct the solution using rigorous development practices, ensuring high performance and code quality.",
      activities: ["Iterative Development", "Component Engineering", "Automated Testing"],
      icon: Code2,
    },
    {
      id: "deploy",
      number: "04",
      title: "Deploy",
      description: "We transition the system into production environments through automated CI/CD pipelines with zero downtime.",
      activities: ["Infrastructure Provisioning", "Release Management", "Performance Monitoring"],
      icon: Rocket,
    },
    {
      id: "scale",
      number: "05",
      title: "Scale",
      description: "We provide ongoing optimization and enhancement, ensuring the platform evolves naturally alongside your business growth.",
      activities: ["Capacity Planning", "Feature Enhancement", "Technical Debt Reduction"],
      icon: TrendingUp,
    }
  ] as ProcessStep[],
};
