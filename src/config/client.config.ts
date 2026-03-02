// ⚠️ FICHIER AUTO-GÉNÉRÉ — ne pas modifier manuellement
// Modifie CLIENT.md puis relance : npm run sync-client

export const clientConfig = {
  identity: {
    prenomDirigeant: "{PRENOM_DIRIGEANT}",
    nomDirigeant: "{NOM_DIRIGEANT}",
    nomEntreprise: "{NOM_ENTREPRISE}",
    nomLegal: "{NOM_LEGAL}",
    genreDirigeant: "masculin",
    founder: "{PRENOM_DIRIGEANT} {NOM_DIRIGEANT}",
  },
  contact: {
    telephone: "{TELEPHONE}",
    telephoneHref: "tel:{TELEPHONE}",
    telephoneUrgence: "{TELEPHONE_URGENCE}",
    email: "{EMAIL}",
    adresse: "{ADRESSE}",
    ville: "{VILLE}",
    codePostal: "{CODE_POSTAL}",
    departement: "{DEPARTEMENT}",
    region: "{REGION}",
    zoneIntervention: "{VILLE} et {ZONE_KM}km autour",
    zoneKm: "{ZONE_KM}",
  },
  horaires: {
    semaine: "{HORAIRES_SEMAINE}",
    samedi: "{HORAIRES_SAMEDI}",
    dimanche: "{HORAIRES_DIMANCHE}",
    urgence: "{HORAIRES_URGENCE}",
  },
  branding: {
    couleurPrimaireHue: "245",
    couleurAccentHue: "44",
  },
  social: {
    facebook: "{FACEBOOK_URL}",
    instagram: "{INSTAGRAM_URL}",
    google: "{GOOGLE_URL}",
  },
  domaine: "{DOMAINE}",
  url: "https://www.{DOMAINE}",
  legal: {
    siret: "{SIRET}",
    rge: "{RGE}",
    assuranceDecennale: "{ASSURANCE_DECENNALE}",
  },
  chiffres: {
    anneesExperience: 0,
    nombreInterventions: 0,
    noteGoogle: 0,
    nombreAvis: 0,
    anneeCreation: 0,
    delaiIntervention: "{DELAI_INTERVENTION}",
    disponibilite: "{DISPONIBILITE}",
    tauxSatisfaction: "{TAUX_SATISFACTION}",
  },
  geo: {
    latitude: "0",
    longitude: "0",
  },
  communes: [
    { name: "{COMMUNE_1}", postalCode: "{CODE_POSTAL_1}" },
    { name: "{COMMUNE_2}", postalCode: "{CODE_POSTAL_2}" },
    { name: "{COMMUNE_3}", postalCode: "{CODE_POSTAL_3}" },
  ],
  services: [
    { title: "Dépannage urgent", shortDescription: "Intervention rapide en moins de 2h pour toutes vos urgences plomberie.", description: "Fuite d'eau, canalisation bouchée, dégât des eaux, panne de chaudière... Notre équipe intervient en urgence 7j/7 dans un rayon de {ZONE_KM} km autour de {VILLE}. Diagnostic sur place et réparation immédiate dans la majorité des cas.", icon: "Siren", slug: "/depannage-plomberie" },
    { title: "Plomberie générale", shortDescription: "Installation, remplacement et mise aux normes de vos équipements.", description: "Robinetterie, tuyauterie, raccordements, WC, éviers, recherche de fuite... Nous intervenons pour tous vos travaux de plomberie, de l'installation neuve à la mise aux normes de vos installations existantes.", icon: "Wrench", slug: "/plomberie" },
    { title: "Salle de bain", shortDescription: "Rénovation complète, douche italienne, adaptation PMR.", description: "De la conception à la réalisation, nous prenons en charge votre projet de rénovation de salle de bain. Douche italienne, remplacement baignoire, accessibilité PMR, meuble vasque... Un interlocuteur unique du début à la fin.", icon: "Bath", slug: "/renovation-salle-de-bain" },
    { title: "Chauffage", shortDescription: "Chaudière, pompe à chaleur, plancher chauffant, entretien annuel.", description: "Installation et remplacement de chaudière gaz condensation, pompe à chaleur air-eau, plancher chauffant, radiateurs. Entretien annuel obligatoire et dépannage de votre système de chauffage.", icon: "Flame", slug: "/chauffage" },
    { title: "Chauffe-eau", shortDescription: "Remplacement, ballon thermodynamique, détartrage.", description: "Remplacement de chauffe-eau électrique ou gaz, installation de ballon thermodynamique pour réduire votre facture énergétique. Détartrage et entretien pour prolonger la durée de vie de votre équipement.", icon: "Droplets", slug: "/chauffe-eau" },
    { title: "Entretien", shortDescription: "Contrats d'entretien chaudière et maintenance préventive.", description: "L'entretien annuel de votre chaudière est obligatoire. Nous proposons des contrats d'entretien incluant la visite annuelle, le dépannage prioritaire et les pièces d'usure.", icon: "ClipboardCheck", slug: "/chauffage#entretien" },
  ],
  testimonials: [
    { name: "{TEMOIN_1_NOM}", rating: 5, text: "{TEMOIN_1_TEXTE}", date: "{TEMOIN_1_DATE}", source: "Google" },
    { name: "{TEMOIN_2_NOM}", rating: 5, text: "{TEMOIN_2_TEXTE}", date: "{TEMOIN_2_DATE}", source: "Google" },
    { name: "{TEMOIN_3_NOM}", rating: 5, text: "{TEMOIN_3_TEXTE}", date: "{TEMOIN_3_DATE}", source: "Google" },
    { name: "{TEMOIN_4_NOM}", rating: 4, text: "{TEMOIN_4_TEXTE}", date: "{TEMOIN_4_DATE}", source: "Google" },
    { name: "{TEMOIN_5_NOM}", rating: 5, text: "{TEMOIN_5_TEXTE}", date: "{TEMOIN_5_DATE}", source: "Google" },
    { name: "{TEMOIN_6_NOM}", rating: 5, text: "{TEMOIN_6_TEXTE}", date: "{TEMOIN_6_DATE}", source: "Google" },
    { name: "{TEMOIN_7_NOM}", rating: 5, text: "{TEMOIN_7_TEXTE}", date: "{TEMOIN_7_DATE}", source: "Google" },
    { name: "{TEMOIN_8_NOM}", rating: 4, text: "{TEMOIN_8_TEXTE}", date: "{TEMOIN_8_DATE}", source: "Google" },
    { name: "{TEMOIN_9_NOM}", rating: 5, text: "{TEMOIN_9_TEXTE}", date: "{TEMOIN_9_DATE}", source: "Google" },
    { name: "{TEMOIN_10_NOM}", rating: 5, text: "{TEMOIN_10_TEXTE}", date: "{TEMOIN_10_DATE}", source: "Google" },
  ],
  admin: {
    password: "1234",
  },
  seo: {
    metaTitleAccueil: "Plombier {VILLE} — {NOM_ENTREPRISE} | Dépannage 7j/7",
    metaDescAccueil: "Plombier chauffagiste à {VILLE}. Dépannage urgent 7j/7, installation, rénovation salle de bain, chauffage. Devis gratuit.",
    descriptionEntreprise: "Plombier chauffagiste à {VILLE}. Dépannage urgent 7j/7, installation, rénovation salle de bain, chauffage. Devis gratuit.",
    slogan: "Votre plombier à {VILLE} — Dépannage {DISPONIBILITE}, intervention rapide",
  },
} as const;

export type ClientConfig = typeof clientConfig;
