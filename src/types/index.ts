export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  slug: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
  source?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Realisation {
  id: string;
  title: string;
  category: string;
  city: string;
  description: string;
  beforePrompt: string;
  afterPrompt: string;
  aspectRatio: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photoPrompt: string;
  description: string;
}

export interface Commune {
  name: string;
  postalCode: string;
}

export interface ImagePlaceholderProps {
  prompt: string;
  aspectRatio?: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
