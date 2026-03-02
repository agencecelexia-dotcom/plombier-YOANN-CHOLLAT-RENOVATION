import type { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/config/testimonials";
import { heroImages } from "@/config/images";
import { avisClients, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Avis clients plombier ${siteConfig.address.city}`,
  description: `Découvrez les avis de nos clients. Note ${siteConfig.googleRating}/5 sur ${siteConfig.googleReviewCount} avis Google. Plombier de confiance à ${siteConfig.address.city}.`,
  path: "/avis-clients",
});

export default function AvisClientsPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title={avisClients.hero.title}
        subtitle={`${siteConfig.googleRating}/5 sur ${siteConfig.googleReviewCount} avis Google`}
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme bleu travaillant sur tuyauterie cuivre neuve dans maison en construction, lumiere naturelle, tons chauds, photo realiste, ratio 21:9",
          aspectRatio: "21/9",
          src: heroImages["avis-clients"] || undefined,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Avis clients" },
          ]}
        />
      </div>

      {/* Note globale */}
      <SectionContainer>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-6 bg-primary-50 rounded-2xl px-10 py-8">
            <div>
              <span className="text-6xl font-bold text-neutral-900">
                {siteConfig.googleRating}
              </span>
              <span className="text-2xl text-muted-foreground">/5</span>
            </div>
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-7 h-7 ${
                      i < Math.round(siteConfig.googleRating)
                        ? "text-accent-500 fill-accent-500"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {avisClients.ratingIntro(siteConfig.googleReviewCount)}
              </p>
            </div>
          </div>
        </div>

        {/* Liste des avis */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>

        {/* Lien Google */}
        <div className="mt-12 text-center space-y-4">
          <a
            href={siteConfig.social.google}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all inline-flex items-center gap-2"
          >
            {avisClients.voirGoogle}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </SectionContainer>

      <CTASection
        title={avisClients.cta.title}
        subtitle={avisClients.cta.subtitle}
      />
    </>
  );
}
