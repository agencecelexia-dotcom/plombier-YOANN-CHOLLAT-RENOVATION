import type { FAQ } from "@/types";
import { siteConfig } from "@/config/site";
import { clientConfig } from "@/config/client.config";

export const faqGeneral: FAQ[] = [
  {
    question: "Quels sont vos délais d'intervention en urgence ?",
    answer:
      `Pour les urgences plomberie (fuite d'eau, canalisation bouchée, panne de chaudière), nous intervenons en moins de ${clientConfig.chiffres.delaiIntervention} dans un rayon de ${clientConfig.contact.zoneKm} km autour de ${siteConfig.address.city}. Appelez-nous au ${siteConfig.phone}.`,
  },
  {
    question: "Vos devis sont-ils gratuits ?",
    answer:
      "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons pour évaluer vos besoins et vous remettons un devis détaillé sous 48h.",
  },
  {
    question: "Êtes-vous assuré ?",
    answer:
      "Oui, nous disposons d'une assurance décennale et d'une responsabilité civile professionnelle. Vous pouvez nous demander une copie de nos attestations.",
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons le paiement par chèque, virement bancaire et espèces. Un acompte peut être demandé pour les travaux importants.",
  },
];

export const faqDepannage: FAQ[] = [
  {
    question: "Intervenez-vous le week-end et les jours fériés ?",
    answer:
      "Oui, nous intervenons 7 jours sur 7, y compris les jours fériés, pour toutes les urgences plomberie. Un supplément peut s'appliquer pour les interventions en dehors des heures ouvrables.",
  },
  {
    question: "Combien coûte un dépannage en urgence ?",
    answer:
      "Le tarif dépend de la nature de l'intervention. À titre indicatif : débouchage à partir de 89 euros, réparation fuite à partir de 120 euros. Le tarif exact vous est communiqué par téléphone avant intervention.",
  },
  {
    question: "Que faire en cas de fuite d'eau en attendant le plombier ?",
    answer:
      "Coupez immédiatement l'arrivée d'eau générale (vanne d'arrêt), coupez l'électricité dans la zone touchée, épongez l'eau stagnante et contactez-nous au plus vite.",
  },
];

export const faqPlomberie: FAQ[] = [
  {
    question: "Combien coûte l'installation d'un WC suspendu ?",
    answer:
      "Le coût d'installation d'un WC suspendu varie entre 800 et 1 500 euros selon le modèle et la configuration de votre salle de bain. Ce tarif comprend le bâti-support, la cuvette et la pose complète.",
  },
  {
    question: "Comment détectez-vous les fuites cachées ?",
    answer:
      "Nous utilisons des équipements professionnels : caméra d'inspection pour les canalisations, détecteur acoustique et thermographie pour les fuites dans les murs ou sous le sol, sans casse.",
  },
];

export const faqSalleDeBain: FAQ[] = [
  {
    question: "Combien de temps dure une rénovation de salle de bain ?",
    answer:
      "En moyenne, une rénovation complète de salle de bain prend entre 1 et 3 semaines selon l'ampleur des travaux. Nous établissons un planning précis dans le devis.",
  },
  {
    question: "Quelles sont les aides pour une salle de bain PMR ?",
    answer:
      "Selon votre situation, vous pouvez bénéficier de MaPrimeAdapt', des aides de l'ANAH, du crédit d'impôt et des aides de votre caisse de retraite. Nous vous accompagnons dans les démarches.",
  },
  {
    question: "Peut-on remplacer une baignoire par une douche italienne ?",
    answer:
      "Oui, c'est l'un de nos travaux les plus demandés. Nous adaptons l'évacuation, assurons l'étanchéité et posons un receveur extra-plat pour un accès facilité.",
  },
];

export const faqChauffage: FAQ[] = [
  {
    question: "L'entretien de la chaudière est-il obligatoire ?",
    answer:
      "Oui, l'entretien annuel de votre chaudière (gaz, fioul, bois) est obligatoire selon le décret du 9 juin 2009. Il permet de garantir votre sécurité et d'optimiser les performances de votre appareil.",
  },
  {
    question: "Combien coûte l'installation d'une pompe à chaleur ?",
    answer:
      "Le coût varie entre 8 000 et 15 000 euros selon le modèle et la puissance. De nombreuses aides existent : MaPrimeRénov', CEE, éco-prêt à taux zéro. Nous sommes certifiés RGE, condition pour bénéficier des aides.",
  },
  {
    question: "Quelle est la durée de vie d'une chaudière gaz ?",
    answer:
      "Une chaudière gaz bien entretenue a une durée de vie de 15 à 25 ans. Si votre chaudière a plus de 15 ans, il est recommandé de la remplacer par un modèle à condensation plus économique.",
  },
];

export const faqChauffeEau: FAQ[] = [
  {
    question: "Quand faut-il remplacer son chauffe-eau ?",
    answer:
      "Un chauffe-eau doit généralement être remplacé au bout de 10 à 15 ans, ou en cas de fuite au niveau de la cuve, de baisse de performance ou de bruits inhabituels.",
  },
  {
    question: "Chauffe-eau électrique ou thermodynamique ?",
    answer:
      "Le chauffe-eau thermodynamique consomme jusqu'à 3 fois moins d'électricité et est éligible aux aides de l'État. L'investissement est plus important (2 000 - 3 500 euros) mais amorti en 3 à 5 ans.",
  },
];
