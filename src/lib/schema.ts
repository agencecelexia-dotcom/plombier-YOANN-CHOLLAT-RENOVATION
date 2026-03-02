import { siteConfig } from "@/config/site";
import { clientConfig } from "@/config/client.config";
import type { FAQ, BreadcrumbItem } from "@/types";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    image: `${siteConfig.url}/images/heroes/accueil.jpeg`,
    logo: `${siteConfig.url}/images/heroes/accueil.jpeg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clientConfig.geo.latitude,
      longitude: clientConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating,
      reviewCount: siteConfig.googleReviewCount,
      bestRating: 5,
    },
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: clientConfig.geo.latitude,
        longitude: clientConfig.geo.longitude,
      },
      geoRadius: String(Number(clientConfig.contact.zoneKm) * 1000),
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.google,
    ],
  };
}

export function serviceSchema(serviceName: string, serviceDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.address.city,
    },
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${siteConfig.url}${item.href}` }),
    })),
  };
}
