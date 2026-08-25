export interface IndustryData {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  visualType: string;
  image?: string;
  iconName?: string;
}

export const industriesConfig = {
  eyebrow: "SOLUTIONS BY INDUSTRY",
  headline: "Industry-Focused Solutions.",
  headlineLine2: "Measurable Impact.",
  description:
    "We understand every industry is unique. Our solutions are tailored to solve real challenges and unlock new growth opportunities.",
  industries: [
    {
      id: "education",
      number: "01",
      title: "Education",
      description: "Smart learning platforms, school management systems and digital education solutions.",
      features: [],
      visualType: "education",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
      iconName: "GraduationCap"
    },
    {
      id: "finance",
      number: "02",
      title: "Finance",
      description: "Secure, compliant and scalable financial software for modern banking and fintech.",
      features: [],
      visualType: "finance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      iconName: "Landmark"
    },
    {
      id: "manufacturing",
      number: "03",
      title: "Manufacturing",
      description: "Intelligent systems to optimize operations, supply chains and production efficiency.",
      features: [],
      visualType: "manufacturing",
      image: "https://images.unsplash.com/photo-1565439390145-c4056eb3b603?auto=format&fit=crop&q=80&w=800",
      iconName: "Settings"
    },
    {
      id: "healthcare",
      number: "04",
      title: "Healthcare",
      description: "Digital solutions that improve patient care, streamline workflows and ensure data security.",
      features: [],
      visualType: "healthcare",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
      iconName: "HeartPulse"
    },
    {
      id: "government",
      number: "05",
      title: "Government",
      description: "Citizen-centric platforms for governance, public services and digital transformation.",
      features: [],
      visualType: "government",
      image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?auto=format&fit=crop&q=80&w=800",
      iconName: "Building2"
    },
    {
      id: "retail",
      number: "06",
      title: "Retail & Commerce",
      description: "Omnichannel commerce solutions that enhance customer experience and drive growth.",
      features: [],
      visualType: "retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      iconName: "ShoppingCart"
    }
  ] as IndustryData[],
};
