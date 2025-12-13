
export type Language = 'en' | 'ar';

export interface HeroContent {
  eyebrow: string;
  h1: string;
  subhead: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export interface TrustMarqueeContent {
  line: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  services: Service[];
}

export interface Story {
  text: string;
  author: string;
  rating?: number;
}

export interface ClientStoriesContent {
  title: string;
  stories: Story[];
  cta: string;
}

export interface JourneyStep {
  title: string;
  description: string;
}
export interface JourneyContent {
  title: string;
  steps: JourneyStep[];
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  title: string;
  faqs: FAQItem[];
}

export interface FinalCTAContent {
  line: string;
  button: string;
}

export interface FooterContent {
    tagline: string;
    privacy: string;
    terms: string;
    location: string;
}

export interface Doctor {
    name: string;
    role: string;
    image: string;
}

export interface TeamContent {
    title: string;
    doctors: Doctor[];
}

export interface AppContent {
  whatsappPrefill: string;
  hero: HeroContent;
  trustMarquee: TrustMarqueeContent;
  services: ServicesContent;
  clientStories: ClientStoriesContent;
  journey: JourneyContent;
  faq: FAQContent;
  finalCTA: FinalCTAContent;
  footer: FooterContent;
  team: TeamContent;
}
