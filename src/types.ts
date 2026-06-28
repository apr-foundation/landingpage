export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  description: string;
}

export interface FocusArea {
  id: string;
  logo: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  description?: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PartnerLogo {
  name: string;
  logoUrl: string;
  industry: string;
}

export interface ProgramService {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  category: string;
  benefits: string[];
}

export interface ProcessStep {
  letter: "I" | "D" | "E" | "A";
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  year?: string;
  description?: string;
}

export interface VideoPortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  youtubeId: string;
  duration?: string;
}
