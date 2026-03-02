import type { Metadata } from "next";
import Link from "next/link";
import { Accessibility, ShowerHead, Bath, PaintBucket, ClipboardList, HardHat, PartyPopper } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqSalleDeBain } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";
import { renovationSdb, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Rénovation salle de bain ${siteConfig.address.city} | Douche italienne`,
  description: `Rénovation de salle de bain à ${siteConfig.address.city}. Douche italienne, rénovation complète, adaptation PMR. Du projet à la réalisation. Devis gratuit.`,
  path: "/renovation-salle-de-bain",
});

const projetIcons = [ShowerHead, Bath, Accessibility];

const projetImages: Record<string, { prompt: string; imageKey: string }> = {
  "Douche italienne": { prompt: "Douche italienne ouverte, receveur extra-plat, carrelage grand format gris clair, pommeau pluie chrome, niche murale eclairee, photo realiste, ratio 4:3", imageKey: "renovation-douche-italienne" },
  "Rénovation complète": { prompt: "Magnifique salle de bain renovee style contemporain, grande douche italienne paroi vitree, vasque pierre naturelle, robinetterie laiton brosse, carrelage terrazzo, photo realiste, ratio 4:3", imageKey: "renovation-complete" },
  "Adaptation PMR": { prompt: "Salle de bain PMR adaptee, barre d'appui chromee, siege douche rabattable, receveur plain-pied antiderapant, espace circulation large, photo realiste, ratio 4:3", imageKey: "renovation-pmr" },
};

const etapeIcons = [ClipboardList, PaintBucket, HardHat, PartyPopper];

const serviceLiesLinks: Record<string, string> = {
  "Plomberie": "/plomberie",
  "Chauffe-eau": "/chauffe-eau",
};

export default function SalleDeBainPage() {
  return (
    <ServicePageLayout
      hero={{
        title: renovationSdb.hero.title,
        subtitle: renovationSdb.hero.subtitle,
        imagePlaceholder: {
          prompt: "Magnifique salle de bain renovee style contemporain, grande douche italienne paroi vitree, vasque pierre naturelle, robinetterie laiton brosse, carrelage terrazzo, plantes vertes, lumiere naturelle, photo realiste haut de gamme, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["renovation-sdb"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Salle de bain" },
      ]}
      faqs={faqSalleDeBain}
    >
      {/* Types de projets */}
      <SectionContainer>
        <SectionHeading
          title={renovationSdb.projets.title}
          subtitle={renovationSdb.projets.subtitle}
        />
        <div className="grid md:grid-cols-3 gap-8">
          {renovationSdb.projets.items.map((p, i) => {
            const Icon = projetIcons[i];
            const imgData = projetImages[p.title];
            return (
              <div key={p.title} className="space-y-4">
                <ImagePlaceholder prompt={imgData?.prompt ?? ""} src={pageImages[imgData?.imageKey ?? ""] || undefined} aspectRatio="4/3" alt={p.title} />
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-neutral-900">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Process */}
      <SectionContainer variant="gray">
        <SectionHeading
          title={renovationSdb.etapes.title}
          subtitle={renovationSdb.etapes.subtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {renovationSdb.etapes.items.map((e, i) => {
            const Icon = etapeIcons[i];
            return (
              <div key={e.title} className="text-center relative">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Galerie */}
      <SectionContainer variant="white">
        <SectionHeading
          title={renovationSdb.realisations.title}
          subtitle={renovationSdb.realisations.subtitle}
        />
        <div className="text-center">
          <Link
            href="/realisations"
            className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all inline-block"
          >
            {shared.cta.voirRealisations}
          </Link>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="gray">
        <SectionHeading title={shared.sections.servicesLies} />
        <div className="flex flex-wrap justify-center gap-4">
          {renovationSdb.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
