import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Search, Pipette, ShieldCheck, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqPlomberie } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";
import { plomberie, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Plombier ${siteConfig.address.city} | Installation et réparation`,
  description: `Plombier professionnel à ${siteConfig.address.city}. Installation, réparation, mise aux normes plomberie. Robinetterie, tuyauterie, WC, recherche de fuite. Devis gratuit.`,
  path: "/plomberie",
});

const serviceIcons = [Pipette, Wrench, Search, ShieldCheck];

const serviceImages: Record<string, { prompt: string; imageKey: string }> = {
  "Robinetterie": { prompt: "Gros plan mains de plombier serrant un raccord cuivre avec une pince, travail de precision, photo realiste, ratio 3:2", imageKey: "plomberie-robinetterie" },
  "Tuyauterie et raccordements": { prompt: "Plombier professionnel installant de la tuyauterie en cuivre dans une maison neuve, raccords visibles, travail soigne, photo realiste, ratio 3:2", imageKey: "plomberie-tuyauterie" },
  "Recherche de fuite": { prompt: "Plombier utilisant une camera d'inspection de canalisation, ecran video visible, intervention technique, photo realiste, ratio 3:2", imageKey: "plomberie-recherche-fuite" },
  "Mise aux normes": { prompt: "Plombier installant un WC suspendu neuf dans une salle de bain en renovation, bati-support visible, photo realiste, ratio 3:2", imageKey: "plomberie-mise-aux-normes" },
};

const serviceLiesLinks: Record<string, string> = {
  "Dépannage plomberie": "/depannage-plomberie",
  "Rénovation salle de bain": "/renovation-salle-de-bain",
};

export default function PlomberiePage() {
  return (
    <ServicePageLayout
      hero={{
        title: plomberie.hero.title,
        subtitle: plomberie.hero.subtitle,
        imagePlaceholder: {
          prompt: "Plombier professionnel installant de la tuyauterie en cuivre dans une maison neuve, raccords visibles, travail soigne, lumiere naturelle, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["plomberie"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Plomberie" },
      ]}
      faqs={faqPlomberie}
    >
      {/* Services détaillés */}
      <SectionContainer>
        <SectionHeading
          title={plomberie.services.title}
          subtitle={plomberie.services.subtitle}
        />
        <div className="space-y-12">
          {plomberie.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            const imgData = serviceImages[s.title];
            return (
              <div key={s.title} className={`grid lg:grid-cols-2 gap-8 items-center`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <ImagePlaceholder prompt={imgData?.prompt ?? ""} src={pageImages[imgData?.imageKey ?? ""] || undefined} aspectRatio="3/2" alt={s.title} />
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Pourquoi nous choisir */}
      <SectionContainer variant="gray">
        <SectionHeading title={plomberie.avantages.title} />
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {plomberie.avantages.items.map((a) => (
              <div key={a} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
                <span className="text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title={shared.sections.servicesLies} />
        <div className="flex flex-wrap justify-center gap-4">
          {plomberie.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
