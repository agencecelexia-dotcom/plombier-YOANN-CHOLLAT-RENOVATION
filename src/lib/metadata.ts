import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function generatePageMetadata({
  title,
  description,
  path,
  ogType = "website",
}: {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: ogType,
      images: [
        {
          url: `${siteConfig.url}/images/heroes/accueil.jpeg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `${siteConfig.url}/images/heroes/accueil.jpeg`,
          alt: title,
        },
      ],
    },
  };
}
