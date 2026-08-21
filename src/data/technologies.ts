import { 
  Monitor, 
  Server, 
  Database, 
  Cloud, 
  Smartphone, 
  BrainCircuit 
} from "lucide-react";

export interface Technology {
  name: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  technologies: Technology[];
}

export const technologyEcosystemConfig = {
  eyebrow: "BUILT WITH MODERN TECHNOLOGIES",
  headline: "Our Technology Ecosystem",
  description:
    "We leverage proven frameworks, cloud platforms and AI technologies to deliver high-performance, resilient and intelligent solutions.",
  principles: [
    "Secure by Design",
    "Built for Performance",
    "Scalable Architecture",
    "Continuous Delivery",
    "Future Ready"
  ],
  categories: [
    {
      id: "frontend",
      title: "Frontend",
      description: "Modern, responsive and interactive experiences.",
      icon: Monitor,
      technologies: [{ name: "React" }, { name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }],
    },
    {
      id: "backend",
      title: "Backend",
      description: "Robust, secure and high-performance server logic.",
      icon: Server,
      technologies: [{ name: "Node.js" }, { name: "NestJS" }, { name: "Laravel" }, { name: ".NET" }],
    },
    {
      id: "databases",
      title: "Databases",
      description: "Scalable data storage and fast retrieval.",
      icon: Database,
      technologies: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB" }, { name: "Redis" }],
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      description: "Reliable hosting and automated deployment pipelines.",
      icon: Cloud,
      technologies: [{ name: "AWS" }, { name: "Azure" }, { name: "Google Cloud" }, { name: "Docker" }, { name: "Kubernetes" }],
    },
    {
      id: "mobile",
      title: "Mobile",
      description: "Native-like performance across iOS and Android.",
      icon: Smartphone,
      technologies: [{ name: "Flutter" }, { name: "React Native" }, { name: "Kotlin" }, { name: "Swift" }],
    },
    {
      id: "ai-data",
      title: "AI & Data",
      description: "Intelligent systems and actionable data insights.",
      icon: BrainCircuit,
      technologies: [{ name: "OpenAI" }, { name: "Python" }, { name: "TensorFlow" }, { name: "LangChain" }, { name: "Power BI" }],
    },
  ] as TechnologyCategory[],
};
