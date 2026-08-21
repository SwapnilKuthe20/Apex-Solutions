import { siteConfig } from "@/data/site";
const SocialIcon = ({ platform, className }: { platform: string, className?: string }) => {
  switch (platform.toLowerCase()) {
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "facebook":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "x":
    case "twitter":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      );
    case "youtube":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M2.5 7.1C2.5 7.1 2.3 5.4 3 4.6 3.9 3.6 5 3.6 5.5 3.5 8 3.3 12 3.3 12 3.3s4 0 6.5.2c.5.1 1.6.1 2.5 1.1.7.8.5 2.5.5 2.5s.2 2 .2 4v1.8c0 2-.2 4-.2 4s-.2 1.7-.9 2.5c-.9 1-2 1-2.5 1.1-2.9.2-6.4.2-6.4.2s-4 0-6.5-.2c-.5-.1-1.6-.1-2.5-1.1-.7-.8-.5-2.5-.5-2.5s-.2-2-.2-4V9.1c0-2 .2-4 .2-4z" />
          <polygon points="9.5 15.2 15.5 11 9.5 6.8" />
        </svg>
      );
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
  }
};

export function FooterSocials() {
  return (
    <div className="flex items-center gap-4">
      {siteConfig.socialLinks.map((social) => {
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Apex Solutions on ${social.platform}`}
            className="w-10 h-10 rounded-full border border-apex-border/20 flex items-center justify-center text-apex-slate-400 hover:text-white hover:border-apex-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold-500"
          >
            <SocialIcon platform={social.platform} className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
}
