export interface Technology {
  id: string;
  name: string;
}

export interface TechnologyCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: Technology[];
}

export const techStackConfig = {
  eyebrow: "TECHNOLOGY STACK",
  headline: "Built on Modern, Proven Technologies",
  description:
    "We select and combine proven technologies to build reliable, scalable and maintainable digital systems.",
  categories: [
    {
      id: "frontend",
      number: "01",
      title: "Frontend",
      description: "Interfaces engineered for speed, accessibility, and scalable user experiences.",
      technologies: [
        { id: "react", name: "React" },
        { id: "nextjs", name: "Next.js" },
        { id: "typescript", name: "TypeScript" },
        { id: "tailwind", name: "Tailwind CSS" },
      ],
    },
    {
      id: "backend",
      number: "02",
      title: "Backend",
      description: "High-performance services built for security, throughput, and complex business logic.",
      technologies: [
        { id: "nodejs", name: "Node.js" },
        { id: "dotnet", name: ".NET" },
        { id: "python", name: "Python" },
        { id: "go", name: "Go" },
      ],
    },
    {
      id: "databases",
      number: "03",
      title: "Databases",
      description: "Resilient data structures optimized for read/write speed, reliability, and scale.",
      technologies: [
        { id: "postgresql", name: "PostgreSQL" },
        { id: "mongodb", name: "MongoDB" },
        { id: "redis", name: "Redis" },
        { id: "elasticsearch", name: "Elasticsearch" },
      ],
    },
    {
      id: "cloud",
      number: "04",
      title: "Cloud & DevOps",
      description: "Automated pipelines and scalable infrastructure for continuous deployment.",
      technologies: [
        { id: "aws", name: "AWS" },
        { id: "azure", name: "Azure" },
        { id: "docker", name: "Docker" },
        { id: "kubernetes", name: "Kubernetes" },
      ],
    },
    {
      id: "mobile",
      number: "05",
      title: "Mobile",
      description: "Native and cross-platform applications delivering seamless device experiences.",
      technologies: [
        { id: "reactnative", name: "React Native" },
        { id: "swift", name: "Swift" },
        { id: "kotlin", name: "Kotlin" },
      ],
    },
    {
      id: "ai-data",
      number: "06",
      title: "AI & Data",
      description: "Intelligent pipelines and machine learning models for operational advantage.",
      technologies: [
        { id: "tensorflow", name: "TensorFlow" },
        { id: "pytorch", name: "PyTorch" },
        { id: "apachekafka", name: "Apache Kafka" },
      ],
    },
  ] as TechnologyCategory[],
};
