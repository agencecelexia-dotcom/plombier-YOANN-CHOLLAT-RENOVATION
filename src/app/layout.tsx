import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { AnalyticsTracker } from "@/components/features/AnalyticsTracker";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { siteConfig } from "@/config/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `Plombier à ${siteConfig.address.city} | Dépannage 7j/7 — Devis Gratuit — ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <LayoutShell
          header={<Header />}
          footer={<Footer />}
          schemaOrg={<SchemaOrg />}
          scrollProgress={<ScrollProgress />}
          analytics={<AnalyticsTracker />}
        >
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
