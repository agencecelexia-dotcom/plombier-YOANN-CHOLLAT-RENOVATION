"use client";

import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import FadeUp from "@/components/animations/FadeUp";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { urgencyProjectCards } from "@/config/content";
import { sectionImages } from "@/config/images";

export function UrgencyProjectCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
              {urgencyProjectCards.title}
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-accent-500 mx-auto" />
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Carte Urgence */}
          <FadeIn direction="left" delay={0.1}>
            <div className="group rounded-2xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-primary-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1">
              <div className="overflow-hidden">
                <div className="group-hover:scale-105 transition-transform duration-500">
                  <ImagePlaceholder
                    prompt="Gros plan sur une fuite d'eau sous un lavabo, gouttes d'eau visibles, tuyau cuivre avec joint défaillant, ambiance urgente, photo réaliste, ratio 4:3"
                    src={sectionImages["urgence-card"] || undefined}
                    aspectRatio="4/3"
                    alt="Urgence plomberie"
                    overlay
                    className="w-full rounded-none"
                  >
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/15 flex items-center justify-center">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                        {urgencyProjectCards.urgency.title}
                      </h3>
                      <p className="text-neutral-300 mb-6">
                        {urgencyProjectCards.urgency.subtitle}
                      </p>
                      <a
                        href={siteConfig.phoneHref}
                        data-track="urgence-card-appel"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-4 text-base font-semibold text-primary-900 transition-colors hover:bg-accent-400"
                      >
                        <Phone className="h-5 w-5" />
                        {urgencyProjectCards.urgency.cta}
                      </a>
                    </div>
                  </ImagePlaceholder>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Carte Projet */}
          <FadeIn direction="right" delay={0.2}>
            <div className="group rounded-2xl border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-primary-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1">
              <div className="overflow-hidden">
                <div className="group-hover:scale-105 transition-transform duration-500">
                  <ImagePlaceholder
                    prompt="Belle salle de bain moderne rénovée, douche italienne carrelage gris, robinetterie noire mate, paroi vitrée, ambiance zen, photo réaliste, ratio 4:3"
                    src={sectionImages["projet-card"] || undefined}
                    aspectRatio="4/3"
                    alt="Projet rénovation"
                    overlay
                    className="w-full rounded-none"
                  >
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/15 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                        {urgencyProjectCards.project.title}
                      </h3>
                      <p className="text-neutral-300 mb-6">
                        {urgencyProjectCards.project.subtitle}
                      </p>
                      <Link
                        href="/contact"
                        data-track="projet-card-devis"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-700 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-600"
                      >
                        <FileText className="h-5 w-5" />
                        {urgencyProjectCards.project.cta}
                      </Link>
                    </div>
                  </ImagePlaceholder>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
