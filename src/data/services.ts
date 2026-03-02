export interface AdminService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  order: number;
}

export const services: AdminService[] = [
  {
    id: "depannage-urgent",
    slug: "depannage-plomberie",
    title: "Dépannage urgent",
    shortDescription: "Intervention rapide en moins de 2h pour toutes vos urgences plomberie.",
    fullDescription: "Fuite d'eau, canalisation bouchée, dégât des eaux, panne de chaudière... Notre équipe intervient en urgence 7j/7. Diagnostic sur place et réparation immédiate dans la majorité des cas.",
    features: ["Intervention en moins de 2h", "Disponible 7j/7", "Diagnostic sur place", "Réparation immédiate", "Devis gratuit"],
    icon: "Siren",
    order: 1,
  },
  {
    id: "plomberie-generale",
    slug: "plomberie",
    title: "Plomberie générale",
    shortDescription: "Installation, remplacement et mise aux normes de vos équipements.",
    fullDescription: "Robinetterie, tuyauterie, raccordements, WC, éviers, recherche de fuite... Nous intervenons pour tous vos travaux de plomberie, de l'installation neuve à la mise aux normes de vos installations existantes.",
    features: ["Robinetterie et tuyauterie", "Raccordements", "Recherche de fuite", "Mise aux normes", "Installation neuve"],
    icon: "Wrench",
    order: 2,
  },
  {
    id: "salle-de-bain",
    slug: "renovation-salle-de-bain",
    title: "Salle de bain",
    shortDescription: "Rénovation complète, douche italienne, adaptation PMR.",
    fullDescription: "De la conception à la réalisation, nous prenons en charge votre projet de rénovation de salle de bain. Douche italienne, remplacement baignoire, accessibilité PMR, meuble vasque... Un interlocuteur unique du début à la fin.",
    features: ["Douche italienne", "Remplacement baignoire", "Adaptation PMR", "Meuble vasque", "Carrelage"],
    icon: "Bath",
    order: 3,
  },
  {
    id: "chauffage",
    slug: "chauffage",
    title: "Chauffage",
    shortDescription: "Chaudière, pompe à chaleur, plancher chauffant, entretien annuel.",
    fullDescription: "Installation et remplacement de chaudière gaz condensation, pompe à chaleur air-eau, plancher chauffant, radiateurs. Entretien annuel obligatoire et dépannage de votre système de chauffage.",
    features: ["Chaudière gaz condensation", "Pompe à chaleur air-eau", "Plancher chauffant", "Radiateurs", "Entretien annuel"],
    icon: "Flame",
    order: 4,
  },
  {
    id: "chauffe-eau",
    slug: "chauffe-eau",
    title: "Chauffe-eau",
    shortDescription: "Remplacement, ballon thermodynamique, détartrage.",
    fullDescription: "Remplacement de chauffe-eau électrique ou gaz, installation de ballon thermodynamique pour réduire votre facture énergétique. Détartrage et entretien pour prolonger la durée de vie de votre équipement.",
    features: ["Chauffe-eau électrique", "Ballon thermodynamique", "Détartrage", "Installation", "Dépannage"],
    icon: "Droplets",
    order: 5,
  },
  {
    id: "entretien",
    slug: "entretien",
    title: "Entretien",
    shortDescription: "Contrats d'entretien chaudière et maintenance préventive.",
    fullDescription: "L'entretien annuel de votre chaudière est obligatoire. Nous proposons des contrats d'entretien incluant la visite annuelle, le dépannage prioritaire et les pièces d'usure.",
    features: ["Entretien annuel obligatoire", "Contrat de maintenance", "Dépannage prioritaire", "Pièces d'usure incluses", "Certificat de conformité"],
    icon: "ClipboardCheck",
    order: 6,
  },
];
