import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date("2026-02-20");

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/depannage-plomberie`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/plomberie`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/renovation-salle-de-bain`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/chauffage`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/chauffe-eau`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/realisations`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/avis-clients`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/a-propos`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
