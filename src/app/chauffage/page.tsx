import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Wind, Heater, ShieldCheck, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqChauffage } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";
import { chauffage, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Chauffagiste ${siteConfig.address.city} | Chaudière, PAC, entretien`,
  description: `Chauffagiste certifié RGE à ${siteConfig.address.city}. Installation chaudière gaz, pompe à chaleur, plancher chauffant. Entretien annuel et dépannage. Devis gratuit.`,
  path: "/chauffage",
});

const solutionIcons = [Flame, Wind, Heater];

const solutionImages: Record<string, { prompt: string; imageKey: string }> = {
  "Chaudière gaz condensation": { prompt: "Chaudiere gaz condensation murale blanche moderne dans buanderie rangee, ecran digital vert, tuyauterie cuivre propre, photo realiste, ratio 3:2", imageKey: "chauffage-chaudiere-gaz" },
  "Pompe à chaleur air-eau": { prompt: "Unite exterieure pompe a chaleur air-eau blanche installee sur terrasse maison individuelle francaise, jardin soigne, photo realiste, ratio 3:2", imageKey: "chauffage-pac" },
  "Plancher chauffant": { prompt: "Installation plancher chauffant en cours, tubes PER rouges en serpentin sur isolant argente, vue plongee, chantier propre, photo realiste, ratio 3:2", imageKey: "chauffage-plancher-chauffant" },
};

const serviceLiesLinks: Record<string, string> = {
  "Chauffe-eau": "/chauffe-eau",
  "Dépannage plomberie": "/depannage-plomberie",
};

export default function ChauffagePage() {
  return (
    <ServicePageLayout
      hero={{
        title: chauffage.hero.title,
        subtitle: chauffage.hero.subtitle,
        imagePlaceholder: {
          prompt: "Salon chaleureux maison francaise, radiateur design blanc sous fenetre, lumiere doree hivernale, sensation confort et chaleur, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffage"] || undefined,
        },
        badges: chauffage.hero.badges,
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Chauffage" },
      ]}
      faqs={faqChauffage}
    >
      {/* Services */}
      <SectionContainer>
        <SectionHeading
          title={chauffage.solutions.title}
          subtitle={chauffage.solutions.subtitle}
        />
        <div className="space-y-12">
          {chauffage.solutions.items.map((s, i) => {
            const Icon = solutionIcons[i];
            const imgData = solutionImages[s.title];
            return (
              <div key={s.title} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
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

      {/* Entretien */}
      <SectionContainer variant="gray" id="entretien">
        <SectionHeading
          title={chauffage.entretien.title}
          subtitle={chauffage.entretien.subtitle}
        />
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-900">{chauffage.entretien.cardTitle}</h3>
                <span className="px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">{chauffage.entretien.prix}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {chauffage.entretien.items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* RGE */}
      <SectionContainer variant="white">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 text-accent-500 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-4">
            {chauffage.rge.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {chauffage.rge.text}
          </p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.rge}
          </p>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="gray">
        <SectionHeading title={shared.sections.servicesLies} />
        <div className="flex flex-wrap justify-center gap-4">
          {chauffage.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
