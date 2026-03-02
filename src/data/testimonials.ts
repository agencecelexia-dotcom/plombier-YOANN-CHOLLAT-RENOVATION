export interface AdminTestimonial {
  id: string;
  clientName: string;
  clientRole?: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}

export const testimonials: AdminTestimonial[] = [
  {
    id: "1",
    clientName: "Marie Dupont",
    clientRole: "Propriétaire à {VILLE}",
    quote: "Intervention rapide et efficace pour une fuite d'eau en pleine nuit. Le plombier est arrivé en 45 minutes et a résolu le problème rapidement. Je recommande vivement !",
    rating: 5,
    projectType: "Dépannage urgent",
    date: "2024-06",
  },
  {
    id: "2",
    clientName: "Pierre Martin",
    clientRole: "Propriétaire à {COMMUNE_1}",
    quote: "Excellente rénovation de notre salle de bain. La douche italienne est magnifique et les finitions sont impeccables. Travail soigné et dans les délais.",
    rating: 5,
    projectType: "Salle de bain",
    date: "2024-03",
  },
  {
    id: "3",
    clientName: "Sophie Laurent",
    clientRole: "Propriétaire à {COMMUNE_2}",
    quote: "Remplacement de notre vieux chauffe-eau par un ballon thermodynamique. Le plombier a pris le temps de nous expliquer les avantages. Très professionnel.",
    rating: 5,
    projectType: "Chauffe-eau",
    date: "2024-08",
  },
  {
    id: "4",
    clientName: "Jean-Paul Moreau",
    clientRole: "Propriétaire à {COMMUNE_3}",
    quote: "Installation d'une pompe à chaleur très bien réalisée. L'équipe est compétente et respectueuse du logement. Facture conforme au devis.",
    rating: 4,
    projectType: "Chauffage",
    date: "2024-01",
  },
  {
    id: "5",
    clientName: "Isabelle Petit",
    clientRole: "Propriétaire à {VILLE}",
    quote: "Contrat d'entretien chaudière depuis 2 ans. Toujours ponctuel, travail minutieux, et très bon conseil pour optimiser notre installation.",
    rating: 5,
    projectType: "Entretien",
    date: "2023-11",
  },
];
