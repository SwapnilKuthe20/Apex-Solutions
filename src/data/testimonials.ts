export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  company?: string;
  companyLogo?: string;
  image?: string;
}

export const testimonialsConfig = {
  eyebrow: "CLIENT PERSPECTIVES",
  headline: "Built With Clients, Not Just For Them.",
  description: "Hear directly from the engineering and business leaders who partner with Apex.",
  testimonials: [
    {
      id: "testimonial-01",
      quote: "Apex doesn't just write code; they engineer business solutions. Their ability to align technical architecture with our long-term strategic goals transformed how we operate globally.",
      name: "Sarah Jenkins",
      role: "Chief Technology Officer",
      company: "Global Logistics Provider",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "testimonial-02",
      quote: "We needed a partner capable of handling extreme technical complexity without losing sight of the user experience. The engineering discipline at Apex is unmatched in the industry.",
      name: "David Chen",
      role: "VP of Engineering",
      company: "Enterprise Fintech",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "testimonial-03",
      quote: "The stability and scalability of the platforms they deliver gave us the confidence to expand our operations internationally far ahead of our original schedule.",
      name: "Marcus Vance",
      role: "Chief Operating Officer",
      company: "Healthcare Analytics Platform",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    }
  ] as Testimonial[],
};
