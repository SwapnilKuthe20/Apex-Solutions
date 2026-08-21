export interface Insight {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readingTime?: string;
  image?: string;
  author?: string;
  href: string;
  featured?: boolean;
}

export const insightsConfig = {
  eyebrow: "INSIGHTS",
  headline: "Ideas behind the engineering.",
  description: "Perspectives on technology strategy, software architecture, and the systems that power modern business.",
  ctaText: "View All Insights",
  ctaHref: "/insights",
  insights: [
    {
      id: "insight-01",
      slug: "event-driven-architecture",
      category: "ENGINEERING",
      title: "Approved Featured Insight Title",
      description: "Approved description placeholder for the featured article. We discuss architectural approaches to complex engineering problems.",
      date: "August 21, 2026",
      readingTime: "5 MIN READ",
      author: "Approved Author",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
      href: "/insights/insight-01",
      featured: true,
    },
    {
      id: "insight-02",
      slug: "future-of-cloud",
      category: "CLOUD",
      title: "Approved Insight Title 02",
      description: "Approved description placeholder. Examining the strategic evolution of multi-cloud operational models.",
      date: "August 15, 2026",
      readingTime: "7 MIN READ",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
      href: "/insights/insight-02",
      featured: false,
    },
    {
      id: "insight-03",
      slug: "data-governance",
      category: "AI & DATA",
      title: "Approved Insight Title 03",
      description: "Approved description placeholder. Why data integrity is the prerequisite for artificial intelligence adoption.",
      date: "August 02, 2026",
      // Purposely omitting readingTime and author to demonstrate graceful degradation
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2070",
      href: "/insights/insight-03",
      featured: false,
    }
  ] as Insight[],
};
