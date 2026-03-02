import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "sdb-villeurbanne",
    title: "Rénovation salle de bain complète",
    category: "Salle de bain",
    city: "{VILLE}",
    description:
      "Transformation d'une salle de bain années 80 en espace moderne avec douche italienne, meuble vasque et miroir LED.",
    beforePrompt:
      "Vieille salle de bain années 80, baignoire jaunâtre, carrelage rose fissuré, robinetterie rouillée, photo réaliste brute, ratio 4:3",
    afterPrompt:
      "Même salle de bain rénovée, douche italienne carrelage gris anthracite, meuble vasque bois clair, miroir LED, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "cuisine-lyon3",
    title: "Réfection plomberie cuisine",
    category: "Plomberie",
    city: "{VILLE}",
    description:
      "Remplacement complet de la tuyauterie et installation d'un évier encastré avec robinet col de cygne.",
    beforePrompt:
      "Vieille cuisine évier inox usé, tuyauterie apparente oxydée, robinet qui goutte, photo réaliste, ratio 4:3",
    afterPrompt:
      "Cuisine moderne évier encastré granit noir, robinet col de cygne chromé, tuyauterie neuve cachée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chauffe-eau-caluire",
    title: "Remplacement chauffe-eau",
    category: "Chauffe-eau",
    city: "{COMMUNE_1}",
    description:
      "Remplacement d'un vieux chauffe-eau rouillé par un ballon thermodynamique classe A.",
    beforePrompt:
      "Vieux chauffe-eau rouillé encrassé dans placard technique, tuyaux oxydés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chauffe-eau thermodynamique neuf blanc, tuyauterie cuivre neuve, étiquette énergie A, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "pac-bron",
    title: "Installation pompe à chaleur",
    category: "Chauffage",
    city: "{COMMUNE_2}",
    description:
      "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau compacte.",
    beforePrompt:
      "Vieille chaudière fioul volumineuse dans cave sombre, tuyaux rouillés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Pompe à chaleur air-eau compacte installée dans buanderie moderne, écran digital, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-pmr-lyon6",
    title: "Salle de bain PMR",
    category: "Salle de bain",
    city: "{VILLE}",
    description:
      "Adaptation d'une salle de bain pour personne à mobilité réduite avec douche plain-pied et barres d'appui.",
    beforePrompt:
      "Salle de bain étroite avec baignoire haute, accès difficile, carrelage glissant, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salle de bain PMR adaptée, barre d'appui chromée, siège douche rabattable, receveur plain-pied antidérapant, espace circulation large, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chaudiere-tassin",
    title: "Remplacement chaudière gaz",
    category: "Chauffage",
    city: "{COMMUNE_3}",
    description:
      "Installation d'une chaudière gaz à condensation dernière génération en remplacement d'un modèle de 20 ans.",
    beforePrompt:
      "Vieille chaudière gaz murale encrassée, tuyaux anciens, thermostat analogique, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chaudière gaz condensation murale blanche moderne, écran digital vert, tuyauterie cuivre propre, thermostat connecté, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "douche-lyon7",
    title: "Douche italienne sur mesure",
    category: "Salle de bain",
    city: "{VILLE}",
    description:
      "Création d'une douche italienne avec receveur extra-plat, carrelage grand format et niche murale éclairée.",
    beforePrompt:
      "Salle de bain avec baignoire classique blanche, murs peints écaillés, sol vinyle usé, photo réaliste, ratio 4:3",
    afterPrompt:
      "Douche italienne ouverte, receveur extra-plat, carrelage grand format gris clair, pommeau pluie chromé, niche murale éclairée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "plancher-chauffant-ecully",
    title: "Installation plancher chauffant",
    category: "Chauffage",
    city: "{COMMUNE_1}",
    description:
      "Pose d'un plancher chauffant hydraulique dans une maison en rénovation complète.",
    beforePrompt:
      "Sol brut en béton dans pièce en rénovation, gaines électriques apparentes, chantier en cours, photo réaliste, ratio 4:3",
    afterPrompt:
      "Installation plancher chauffant en cours, tubes PER rouges en serpentin sur isolant argenté, vue plongée, chantier propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "depannage-lyon2",
    title: "Réparation fuite urgente",
    category: "Plomberie",
    city: "{VILLE}",
    description:
      "Intervention d'urgence pour une fuite sur canalisation d'eau chaude dans un appartement ancien.",
    beforePrompt:
      "Fuite d'eau importante sur tuyau cuivre sous évier, gouttes d'eau, sol mouillé, urgence, photo réaliste, ratio 4:3",
    afterPrompt:
      "Tuyauterie cuivre neuve sous évier, raccords neufs chromés, sol sec, réparation propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-complete-oullins",
    title: "Rénovation salle de bain luxe",
    category: "Salle de bain",
    city: "{COMMUNE_2}",
    description:
      "Rénovation haut de gamme avec double vasque, robinetterie laiton brossé et carrelage terrazzo.",
    beforePrompt:
      "Salle de bain ancienne, carrelage blanc basique, lavabo sur colonne, baignoire jaunâtre, éclairage néon, photo réaliste, ratio 4:3",
    afterPrompt:
      "Magnifique salle de bain rénovée style contemporain, grande douche italienne paroi vitrée, vasque pierre naturelle, robinetterie laiton brossé, carrelage terrazzo, plantes vertes, lumière naturelle, photo réaliste haut de gamme, ratio 4:3",
    aspectRatio: "4/3",
  },
];
