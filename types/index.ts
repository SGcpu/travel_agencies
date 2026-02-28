export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  region: string;
  country: string;
  continent: string;
  heroImage: string;
  galleryImages: string[];
  highlights: string[];
  bestTimeToVisit: string;
  duration: string;
  priceFrom: number;
  currency: string;
  tags: string[];
  featured: boolean;
  itinerary: ItineraryDay[];
  includes: string[];
  accommodation: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  quote: string;
  destination: string;
  rating: number;
  date: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  coverImage: string;
  destination: string;
  readTime: number;
  publishedAt: string;
  tags: string[];
}

export interface InquiryFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travelers: string;
  budget: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export type Region =
  | "North India"
  | "South India"
  | "Himalayan"
  | "Coastal"
  | "East India"
  | "Central India";
