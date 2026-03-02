import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReassuranceBand } from "@/components/sections/ReassuranceBand";
import { UrgencyProjectCards } from "@/components/sections/UrgencyProjectCards";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { RealisationCard } from "@/components/sections/RealisationCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { realisations } from "@/config/realisations";
import { testimonials } from "@/config/testimonials";
import { faqGeneral } from "@/config/faq";
import { heroImages } from "@/config/images";
import { homepage, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Plombier à ${siteConfig.address.city} | Dépannage 7j/7 — Devis Gratuit`,
  description: `${siteConfig.name}, votre plombier à ${siteConfig.address.city}. Dépannage 7j/7, rénovation salle de bain, chauffage. Certifié RGE. Devis gratuit.`,
  path: "/",
});

export default function HomePage() {
  const featuredRealisations = realisations.slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <HeroSection
        variant="home"
        title={homepage.hero.title}
        subtitle={homepage.hero.subtitle}
        imagePlaceholder={{
          prompt:
            "Plombier professionnel francais en uniforme bleu propre, agenouille sous un evier de cuisine moderne, reparant une canalisation avec une cle a molette, eclairage naturel chaleureux, interieur maison francaise contemporaine, photo realiste professionnelle, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["accueil"] || undefined,
        }}
        ctaPrimary={{
          label: `Appelez maintenant — ${siteConfig.phone}`,
          href: siteConfig.phoneHref,
        }}
        ctaSecondary={{
          label: homepage.hero.ctaSecondaryLabel,
          href: "/contact",
        }}
        badges={homepage.hero.badges}
      />

      {/* Réassurance */}
      <ReassuranceBand />

      {/* Urgence ou projet */}
      <UrgencyProjectCards />

      {/* Services */}
      <SectionContainer variant="white">
        <SectionHeading
          title={homepage.services.title}
          subtitle={homepage.services.subtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </SectionContainer>

      {/* Réalisations */}
      <SectionContainer variant="gray">
        <SectionHeading
          title={homepage.realisations.title}
          subtitle={homepage.realisations.subtitle}
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {featuredRealisations.map((real) => (
            <RealisationCard key={real.id} realisation={real} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/realisations"
            className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all inline-block"
          >
            {shared.cta.voirRealisations}
          </Link>
        </div>
      </SectionContainer>

      {/* Avis */}
      <SectionContainer variant="white">
        <SectionHeading
          title={homepage.testimonials.title}
        />
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-bold text-neutral-900">
              {siteConfig.googleRating}
            </span>
            <span className="text-2xl text-muted-foreground">/5</span>
          </div>
          <div className="flex justify-center gap-1 mb-2" role="img" aria-label="Note : 4.8 sur 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                aria-hidden="true"
                className={`w-6 h-6 ${
                  i < Math.round(siteConfig.googleRating)
                    ? "text-accent-500 fill-accent-500"
                    : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <p className="text-muted-foreground">
            {siteConfig.googleReviewCount} {homepage.testimonials.ratingLabel}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredTestimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/avis-clients"
            className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all inline-block"
          >
            {shared.cta.voirAvis}
          </Link>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <FAQSection faqs={faqGeneral} />

      {/* CTA Final */}
      <CTASection />
    </>
  );
}
