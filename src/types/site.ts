export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended: boolean;
  ctaText: string;
  whatsappMessage: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
  text: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterCard: string;
  canonical: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  logo: string;
  whatsappNumber: string;
  email: string;
  phone: string;
  hours: string;
  socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  metrics: Metric[];
  benefits: Benefit[];
  features: Feature[];
  differentials: Differential[];
  howItWorks: HowItWorksStep[];
  plans: Plan[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  footer: {
    about: string;
    copyright: string;
  };
}

export interface PublicPlanFeatures {
  pdv: boolean;
  reports: boolean;
  boarding: boolean;
  grooming: boolean;
  whatsapp: boolean;
  financial: boolean;
  inventory: boolean;
  surgeries: boolean;
  multi_user: boolean;
  vaccination: boolean;
  appointments: boolean;
  external_api: boolean;
  integrations: boolean;
  hospitalization: boolean;
  advanced_dashboard: boolean;
}

export interface PublicPlan {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  monthly_price: number;
  yearly_price: number;
  yearly_discount_percent: number;
  is_featured: boolean;
  has_trial: boolean;
  trial_days: number;
  display_order: number;
  badge: string | null;
  color: string;
  max_users: number | null;
  max_clients: number | null;
  max_pets: number | null;
  max_appointments: number | null;
  max_products: number | null;
  max_services: number | null;
  max_stock_items: number | null;
  max_documents: number | null;
  max_attachments?: number | null;
  max_storage_mb?: number | null;
  features: PublicPlanFeatures;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

