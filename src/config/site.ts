import { clientConfig } from "./client.config";

export const siteConfig = {
  name: clientConfig.identity.nomEntreprise,
  legalName: clientConfig.identity.nomLegal,
  description: clientConfig.seo.descriptionEntreprise,
  url: clientConfig.url,
  phone: clientConfig.contact.telephone,
  phoneHref: clientConfig.contact.telephoneHref,
  email: clientConfig.contact.email,
  address: {
    street: clientConfig.contact.adresse,
    city: clientConfig.contact.ville,
    postalCode: clientConfig.contact.codePostal,
    region: clientConfig.contact.region,
    country: "France",
  },
  openingHours: {
    weekdays: clientConfig.horaires.semaine,
    saturday: clientConfig.horaires.samedi,
    sunday: clientConfig.horaires.dimanche,
    emergency: clientConfig.horaires.urgence,
  },
  social: clientConfig.social,
  siret: clientConfig.legal.siret,
  rge: clientConfig.legal.rge,
  assuranceDecennale: clientConfig.legal.assuranceDecennale,
  yearsExperience: clientConfig.chiffres.anneesExperience,
  interventionsCount: clientConfig.chiffres.nombreInterventions,
  googleRating: clientConfig.chiffres.noteGoogle,
  googleReviewCount: clientConfig.chiffres.nombreAvis,
  foundedYear: clientConfig.chiffres.anneeCreation,
  founder: clientConfig.identity.founder,
} as const;

export type SiteConfig = typeof siteConfig;
