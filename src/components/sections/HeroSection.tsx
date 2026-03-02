"use client";

import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "@/components/animations/SplitText";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { heroSection, shared } from "@/config/content";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imagePlaceholder: {
    prompt: string;
    aspectRatio?: string;
    src?: string;
  };
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badges?: string[];
  variant?: "home" | "service" | "page";
}

export function HeroSection({
  title,
  subtitle,
  imagePlaceholder,
  ctaPrimary,
  ctaSecondary,
  badges,
  variant = "service",
}: HeroSectionProps) {
  if (variant === "home") {
    return (
      <section className="relative min-h-screen flex flex-col">
        {/* Background image */}
        <div className="absolute inset-0">
          <ImagePlaceholder
            prompt={imagePlaceholder.prompt}
            src={imagePlaceholder.src}
            aspectRatio="16/9"
            alt={title}
            overlay
            className="w-full h-full rounded-none"
            priority={true}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black/80 z-10" />

        {/* Main content */}
        <div className="relative z-20 flex-1 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-accent-400 mb-6"
              >
                {heroSection.eyebrow}
              </motion.span>

              {/* Title with word-by-word animation */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight">
                <SplitText delay={0.2}>{title}</SplitText>
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl"
                >
                  {subtitle}
                </motion.p>
              )}

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                {ctaPrimary && (
                  <a
                    href={ctaPrimary.href}
                    data-track="hero-appel"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-4 text-base font-semibold text-primary-900 transition-colors hover:bg-accent-400"
                  >
                    <Phone className="h-5 w-5" />
                    {ctaPrimary.label}
                  </a>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    data-track="hero-devis"
                    className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {ctaSecondary.label}
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-20 flex justify-center pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-8 w-8 text-white/60" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom credential bar */}
        {badges && badges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 bg-primary-950/50 backdrop-blur-sm border-t border-white/10 rounded-t-3xl"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-sm font-medium text-neutral-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </section>
    );
  }

  if (variant === "page") {
    return (
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0">
          <ImagePlaceholder
            prompt={imagePlaceholder.prompt}
            src={imagePlaceholder.src}
            aspectRatio="21/9"
            alt={title}
            overlay
            className="w-full h-full rounded-none"
            priority={true}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black/80 z-10" />
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  // variant === "service"
  return (
    <section className="py-12 md:py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 md:mt-6 text-lg text-neutral-600 leading-relaxed">
                {subtitle}
              </p>
            )}
            {badges && (
              <div className="mt-4 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.phoneHref}
                data-track="service-hero-appel"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-4 text-base font-semibold text-primary-900 transition-colors hover:bg-accent-400"
              >
                <Phone className="h-5 w-5" />
                {shared.cta.appelezNous}
              </a>
              <Link
                href="/contact"
                data-track="service-hero-devis"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-8 py-4 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
              >
                {shared.cta.demanderDevis}
              </Link>
            </div>
          </div>
          <div>
            <ImagePlaceholder
              prompt={imagePlaceholder.prompt}
              src={imagePlaceholder.src}
              aspectRatio={imagePlaceholder.aspectRatio || "16/9"}
              alt={title}
              className={cn("shadow-xl rounded-2xl")}
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
