import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { ContactForm } from "@/components/sections/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { heroImages } from "@/config/images";
import { contact } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Contact plombier ${siteConfig.address.city} | Devis gratuit`,
  description: `Contactez ${siteConfig.name} à ${siteConfig.address.city}. Devis gratuit sous 48h. Appelez le ${siteConfig.phone} ou remplissez notre formulaire.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme bleu travaillant sur tuyauterie cuivre neuve dans maison en construction, lumiere naturelle, tons chauds, photo realiste, ratio 21:9",
          aspectRatio: "21/9",
          src: heroImages["contact"] || undefined,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Contact" },
          ]}
        />
      </div>

      <SectionContainer>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Formulaire */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
              {contact.formTitle}
            </h2>
            <ContactForm />
          </div>

          {/* Infos contact */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
              {contact.coordonnees.title}
            </h2>

            <Card>
              <CardContent className="p-6 space-y-6">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-4 p-4 rounded-xl bg-accent-500/5 hover:bg-accent-500/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{contact.coordonnees.labels.telephone}</p>
                    <p className="text-xl font-bold text-neutral-900">{siteConfig.phone}</p>
                  </div>
                </a>

                <Separator />

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{contact.coordonnees.labels.email}</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium hover:text-primary transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{contact.coordonnees.labels.adresse}</p>
                    <p className="text-sm font-medium">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{contact.coordonnees.labels.horaires}</p>
                    <div className="text-sm space-y-1">
                      <p>{contact.coordonnees.horairesLabels.semaine} {siteConfig.openingHours.weekdays}</p>
                      <p>{contact.coordonnees.horairesLabels.samedi} {siteConfig.openingHours.saturday}</p>
                      <p className="font-semibold text-accent-500">
                        {contact.coordonnees.horairesLabels.urgences} {siteConfig.openingHours.emergency}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carte Google Maps placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden border">
              <div
                className="bg-muted aspect-video flex items-center justify-center"
                role="img"
                aria-label="Carte Google Maps — zone d'intervention"
              >
                <div className="text-center p-4">
                  <MapPin className="w-10 h-10 text-primary/30 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground italic">
                    {contact.coordonnees.mapPlaceholder}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
