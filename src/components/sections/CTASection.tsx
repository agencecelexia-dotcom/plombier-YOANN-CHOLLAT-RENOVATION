"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { ctaSection } from "@/config/content";
import { sectionImages } from "@/config/images";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "urgent" | "devis" | "contact";
}

export function CTASection({
  title = ctaSection.defaultTitle,
  subtitle,
  variant = "devis",
}: CTASectionProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          prompt="Plombier professionnel au travail, ambiance professionnelle, photo réaliste"
          src={sectionImages["cta-bandeau"] || undefined}
          aspectRatio="21/9"
          alt="Contactez-nous"
          overlay
          className="w-full h-full rounded-none"
        />
      </div>
      <div className="absolute inset-0 bg-primary-900/85 z-10" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-neutral-300 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {(variant === "urgent" || variant === "devis") && (
              <a
                href={siteConfig.phoneHref}
                data-track="cta-appel-bandeau"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-4 text-base font-semibold text-primary-900 transition-colors hover:bg-accent-400"
              >
                <Phone className="h-5 w-5" />
                {ctaSection.ctaPrimary}
              </a>
            )}
            {(variant === "devis" || variant === "contact") && (
              <Link
                href="/contact"
                data-track="cta-devis-bandeau"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {ctaSection.ctaSecondary}
              </Link>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
