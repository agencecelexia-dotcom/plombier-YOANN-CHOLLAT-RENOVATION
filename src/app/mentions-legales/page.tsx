import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { siteConfig } from "@/config/site";
import { mentionsLegales } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name}. Informations sur l'éditeur, l'hébergeur, la protection des données et les cookies.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Mentions légales" },
          ]}
        />
      </div>

      <SectionContainer>
        <div className="max-w-3xl mx-auto prose prose-sm prose-slate">
          <h1 className="text-3xl font-heading font-bold text-neutral-900 mb-8">{mentionsLegales.title}</h1>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">{mentionsLegales.editeur.title}</h2>
          <p>
            {mentionsLegales.editeur.intro(siteConfig.url)}
          </p>
          <ul className="list-none space-y-1 pl-0">
            <li><strong>{mentionsLegales.editeur.labels.raisonSociale}</strong> {siteConfig.legalName}</li>
            <li><strong>{mentionsLegales.editeur.labels.siege}</strong> {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}</li>
            <li><strong>{mentionsLegales.editeur.labels.siret}</strong> {siteConfig.siret}</li>
            <li><strong>{mentionsLegales.editeur.labels.telephone}</strong> {siteConfig.phone}</li>
            <li><strong>{mentionsLegales.editeur.labels.email}</strong> {siteConfig.email}</li>
            <li><strong>{mentionsLegales.editeur.labels.directeurPublication}</strong> {siteConfig.founder}</li>
          </ul>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">{mentionsLegales.hebergeur.title}</h2>
          <p>
            {mentionsLegales.hebergeur.text}
          </p>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">{mentionsLegales.propriete.title}</h2>
          <p>
            {mentionsLegales.propriete.text(siteConfig.legalName)}
          </p>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">{mentionsLegales.rgpd.title}</h2>
          {mentionsLegales.rgpd.paragraphs.map((paragraph, i) => (
            <p key={i}>
              {paragraph}
            </p>
          ))}
          <p>
            <strong>{mentionsLegales.rgpd.labels.responsable}</strong> {siteConfig.founder}<br />
            <strong>{mentionsLegales.rgpd.labels.contact}</strong> {siteConfig.email}<br />
            <strong>{mentionsLegales.rgpd.labels.duree}</strong> {mentionsLegales.rgpd.dureeValue}
          </p>
          <p>
            {mentionsLegales.rgpd.droitsIntro} <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
          </p>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">{mentionsLegales.cookies.title}</h2>
          <p>
            {mentionsLegales.cookies.text}
          </p>

          <h2 className="text-xl font-heading font-bold text-neutral-900 mt-8 mb-4">{mentionsLegales.credits.title}</h2>
          <p>
            {mentionsLegales.credits.text} <strong>{mentionsLegales.credits.agence}</strong>.
          </p>
        </div>
      </SectionContainer>
    </>
  );
}
