import { Database, Infinity as InfinityIcon, Layers, Cpu, Code2 } from "lucide-react";

export interface EngineeringStepData {
  id: string;
  number: string;
  title: string;
  description: string;
  principles: string[];
  icon: React.ElementType;
}

export const processConfig = {
  eyebrow: "ENGINEERING APPROACH",
  headline: "Built for Complexity. Engineered for Scale.",
  description: "We approach software engineering as a discipline of systems thinking. Our methodology ensures resilience, security, and scalability from the very first line of code.",
  steps: [
    {
      id: "system-architecture",
      number: "01",
      title: "System Architecture",
      description: "We design resilient systems capable of handling extreme data volumes and complex integration requirements without degradation.",
      principles: ["Microservices", "Event-Driven", "High Availability"],
      icon: Layers,
    },
    {
      id: "data-engineering",
      number: "02",
      title: "Data Engineering",
      description: "We build robust data pipelines that guarantee integrity, enforce security, and enable real-time operational analytics.",
      principles: ["Data Lakes", "Stream Processing", "Governance"],
      icon: Database,
    },
    {
      id: "platform-engineering",
      number: "03",
      title: "Platform Engineering",
      description: "We engineer developer platforms that automate infrastructure, accelerate deployment, and enforce standardized quality.",
      principles: ["Infrastructure as Code", "Kubernetes", "Developer Experience"],
      icon: Cpu,
    },
    {
      id: "software-development",
      number: "04",
      title: "Software Development",
      description: "We write clean, typed, and tested code that serves as the reliable foundation for mission-critical business applications.",
      principles: ["TypeScript/Go", "TDD", "Clean Code"],
      icon: Code2,
    },
    {
      id: "continuous-delivery",
      number: "05",
      title: "Continuous Delivery",
      description: "We implement fully automated release pipelines that enable safe, frequent, and rollback-ready deployments to production.",
      principles: ["CI/CD", "Zero-Downtime", "Observability"],
      icon: InfinityIcon,
    }
  ] as EngineeringStepData[],
};
