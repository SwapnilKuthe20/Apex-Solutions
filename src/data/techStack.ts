export interface Technology {
  id: string;
  name: string;
  iconName?: string;
}

export interface TechnologyCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: Technology[];
  iconName?: string;
}

export const techStackConfig = {
  eyebrow: "OUR TECHNOLOGY STACK",
  headline: "Modern Technologies.",
  headlineLine2: "Scalable Solutions.",
  description:
    "We leverage the best-in-class technologies and frameworks to build secure, high-performance and future-ready digital solutions.",
  categories: [
    {
      id: "frontend",
      number: "01",
      title: "Frontend",
      description: "Modern, responsive and interactive user experiences.",
      iconName: "Code2",
      technologies: [
        { id: "react", name: "React", iconName: "react" },
        { id: "nextjs", name: "Next.js", iconName: "nextjs" },
        { id: "typescript", name: "TypeScript", iconName: "typescript" },
        { id: "tailwind", name: "Tailwind CSS", iconName: "tailwind" },
      ],
    },
    {
      id: "backend",
      number: "02",
      title: "Backend",
      description: "Robust, secure and scalable server-side applications.",
      iconName: "Server",
      technologies: [
        { id: "nodejs", name: "Node.js", iconName: "nodejs" },
        { id: "nestjs", name: "NestJS", iconName: "nestjs" },
        { id: "laravel", name: "Laravel", iconName: "laravel" },
        { id: "dotnet", name: ".NET", iconName: "dotnet" },
      ],
    },
    {
      id: "databases",
      number: "03",
      title: "Databases",
      description: "Reliable, flexible and high-performance data storage.",
      iconName: "Database",
      technologies: [
        { id: "postgresql", name: "PostgreSQL", iconName: "postgresql" },
        { id: "mysql", name: "MySQL", iconName: "mysql" },
        { id: "mongodb", name: "MongoDB", iconName: "mongodb" },
        { id: "redis", name: "Redis", iconName: "redis" },
      ],
    },
    {
      id: "cloud",
      number: "04",
      title: "Cloud & DevOps",
      description: "Automated, reliable and scalable cloud infrastructure.",
      iconName: "Cloud",
      technologies: [
        { id: "aws", name: "AWS", iconName: "aws" },
        { id: "azure", name: "Azure", iconName: "azure" },
        { id: "googlecloud", name: "Google Cloud", iconName: "googlecloud" },
        { id: "docker", name: "Docker", iconName: "docker" },
        { id: "kubernetes", name: "Kubernetes", iconName: "kubernetes" },
      ],
    },
    {
      id: "mobile",
      number: "05",
      title: "Mobile",
      description: "Cross-platform and native mobile app development.",
      iconName: "Smartphone",
      technologies: [
        { id: "flutter", name: "Flutter", iconName: "flutter" },
        { id: "reactnative", name: "React Native", iconName: "react" },
        { id: "kotlin", name: "Kotlin", iconName: "kotlin" },
        { id: "swift", name: "Swift", iconName: "swift" },
      ],
    },
    {
      id: "ai-data",
      number: "06",
      title: "AI & Data",
      description: "Intelligent solutions powered by data and AI.",
      iconName: "Cpu",
      technologies: [
        { id: "openai", name: "OpenAI", iconName: "openai" },
        { id: "python", name: "Python", iconName: "python" },
        { id: "tensorflow", name: "TensorFlow", iconName: "tensorflow" },
        { id: "langchain", name: "LangChain", iconName: "langchain" },
        { id: "powerbi", name: "Power BI", iconName: "powerbi" },
      ],
    },
  ] as TechnologyCategory[],
};
