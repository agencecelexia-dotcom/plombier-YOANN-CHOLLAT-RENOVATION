import type { Metadata } from "next";
import Link from "next/link";
import { Phone, AlertTriangle, Droplets, ShowerHead, Flame } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqDepannage } from "@/config/faq";
import { heroImages } from "@/config/images";
import { depannage, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Plombier urgence ${siteConfig.address.city} | Intervention rapide 7j/7`,
  description: `Dépannage plomberie urgent à ${siteConfig.address.city}. Fuite d'eau, WC bouché, canalisation bouchée. Intervention en moins de 2h, 7j/7. Appelez le ${siteConfig.phone}.`,
  path: "/depannage-plomberie",
});

const urgenceIcons = [Droplets, AlertTriangle, ShowerHead, Flame];

const serviceLiesLinks: Record<string, string> = {
  "Plomberie": "/plomberie",
  "Chauffage": "/chauffage",
  "Chauffe-eau": "/chauffe-eau",
};

export default function DepannagePage() {
  return (
    <ServicePageLayout
      hero={{
        title: depannage.hero.title,
        subtitle: depannage.hero.subtitle,
        imagePlaceholder: {
          prompt: "Plombier en intervention urgence la nuit, lampe frontale allumee, coupant l'arrivee d'eau principale dans une cave, expression concentree, eclairage dramatique, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["depannage-plomberie"] || undefined,
        },
        badges: depannage.hero.badges,
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Dépannage plomberie" },
      ]}
      faqs={faqDepannage}
      ctaVariant="urgent"
    >
      {/* Urgences prises en charge */}
      <SectionContainer>
        <SectionHeading
          title={depannage.urgences.title}
          subtitle={depannage.urgences.subtitle}
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {depannage.urgences.items.map((u, i) => {
            const Icon = urgenceIcons[i];
            return (
              <Card key={u.title} className="border-accent-500/20">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-500/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">{u.title}</h3>
                    <p className="text-sm text-muted-foreground">{u.desc}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionContainer>

      {/* Comment ça marche */}
      <SectionContainer variant="gray">
        <SectionHeading
          title={depannage.etapes.title}
          subtitle={depannage.etapes.subtitle}
        />
        <div className="grid md:grid-cols-3 gap-8">
          {depannage.etapes.items.map((e, i) => (
            <div key={e.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={siteConfig.phoneHref}
            className="px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 shadow-lg transition-all inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            {shared.cta.appelerMaintenant}
          </a>
        </div>
      </SectionContainer>

      {/* Tarifs indicatifs */}
      <SectionContainer variant="white">
        <SectionHeading
          title={depannage.tarifs.title}
          subtitle={depannage.tarifs.subtitle}
        />
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border overflow-hidden">
            {depannage.tarifs.items.map((t, i) => (
              <div key={t.service} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-muted/50" : ""}`}>
                <span className="text-sm font-medium">{t.service}</span>
                <span className="text-sm font-semibold text-accent-500">{t.prix}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            {depannage.tarifs.footnote}
          </p>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="gray">
        <SectionHeading title={shared.sections.servicesLies} />
        <div className="flex flex-wrap justify-center gap-4">
          {depannage.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
