import { Product, CategoryItem, Testimonial, FAQItem } from './index';

export interface HeroConfig {
  badge: string;
  titleLine1: string;
  titleLine2Green: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage: string;
}

export interface SiteColorsConfig {
  primaryGreen: string; // #0D5C3B
  mediumGreen: string;  // #1F8A4D
  lightGreen: string;   // #22C55E
  backgroundColor: string; // #000000
  cardBackgroundColor: string; // #060A08
  borderColor: string; // #16281E
}

export interface SocialLinksConfig {
  discordServerUrl: string;
  discordSupportUrl: string;
  discordFeedbacksUrl: string;
}

export interface SeoConfig {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface PromotionCampaign {
  id: string;
  title: string;
  badge: string;
  discountPercent: number;
  startDate: string;
  endDate: string;
  active: boolean;
  bannerImage?: string;
}

export interface StoreConfig {
  companyName: string;
  logoUrl: string;
  faviconUrl: string;
  supportSlaMinutes: string;
  hero: HeroConfig;
  colors: SiteColorsConfig;
  social: SocialLinksConfig;
  seo: SeoConfig;
  promotions: PromotionCampaign[];
}

export interface AdminSession {
  token: string;
  loginAt: string;
  lastLoginAt: string;
}
