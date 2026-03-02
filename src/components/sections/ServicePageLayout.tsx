import { HeroSection } from "./HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";
import type { BreadcrumbItem, FAQ } from "@/types";

interface ServicePageLayoutProps {
  hero: {
    title: string;
    subtitle?: string;
    imagePlaceholder: { prompt: string; aspectRatio?: string; src?: string };
    badges?: string[];
  };
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
  faqs?: FAQ[];
  ctaVariant?: "urgent" | "devis";
}

export function ServicePageLayout({
  hero,
  breadcrumbs,
  children,
  faqs,
  ctaVariant = "devis",
}: ServicePageLayoutProps) {
  return (
    <>
      <HeroSection variant="service" {...hero} />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {children}

      {faqs && faqs.length > 0 && <FAQSection faqs={faqs} />}

      <CTASection variant={ctaVariant} />
    </>
  );
}
