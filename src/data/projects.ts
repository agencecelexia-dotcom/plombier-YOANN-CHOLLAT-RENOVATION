export interface AdminProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  year: number;
  featuredImage: string;
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

export const projects: AdminProject[] = [
  {
    id: "sdb-villeurbanne",
    slug: "renovation-sdb",
    title: "Rénovation salle de bain complète",
    category: "Salle de bain",
    shortDescription: "Transformation d'une salle de bain années 80 en espace moderne avec douche italienne.",
    fullDescription: "Transformation d'une salle de bain années 80 en espace moderne avec douche italienne, meuble vasque et miroir LED.",
    location: "{VILLE}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "cuisine-lyon3",
    slug: "refection-plomberie-cuisine",
    title: "Réfection plomberie cuisine",
    category: "Plomberie",
    shortDescription: "Remplacement complet de la tuyauterie et installation d'un évier encastré.",
    fullDescription: "Remplacement complet de la tuyauterie et installation d'un évier encastré avec robinet col de cygne.",
    location: "{VILLE}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "chauffe-eau-caluire",
    slug: "remplacement-chauffe-eau",
    title: "Remplacement chauffe-eau",
    category: "Chauffe-eau",
    shortDescription: "Remplacement d'un vieux chauffe-eau par un ballon thermodynamique classe A.",
    fullDescription: "Remplacement d'un vieux chauffe-eau rouillé par un ballon thermodynamique classe A.",
    location: "{COMMUNE_1}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "pac-bron",
    slug: "installation-pac",
    title: "Installation pompe à chaleur",
    category: "Chauffage",
    shortDescription: "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau.",
    fullDescription: "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau compacte.",
    location: "{COMMUNE_2}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "sdb-pmr-lyon6",
    slug: "salle-de-bain-pmr",
    title: "Salle de bain PMR",
    category: "Salle de bain",
    shortDescription: "Adaptation d'une salle de bain pour personne à mobilité réduite.",
    fullDescription: "Adaptation d'une salle de bain pour personne à mobilité réduite avec douche plain-pied et barres d'appui.",
    location: "{VILLE}",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "chaudiere-tassin",
    slug: "remplacement-chaudiere",
    title: "Remplacement chaudière gaz",
    category: "Chauffage",
    shortDescription: "Installation d'une chaudière gaz à condensation dernière génération.",
    fullDescription: "Installation d'une chaudière gaz à condensation dernière génération en remplacement d'un modèle de 20 ans.",
    location: "{COMMUNE_3}",
    year: 2023,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
];
