import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Tag } from "lucide-react";
import { realisations } from "@/config/realisations";
import { realisationImages } from "@/config/images";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/badge";
import BeforeAfterSlider from "@/components/features/BeforeAfterSlider";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getRealisation(slug: string) {
  return realisations.find((r) => r.id === slug);
}

export async function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const real = getRealisation(slug);
  if (!real) return {};

  return generatePageMetadata({
    title: `${real.title} a ${real.city} — ${siteConfig.name}`,
    description: real.description,
    path: `/realisations/${real.id}`,
  });
}

export default async function RealisationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const real = getRealisation(slug);
  if (!real) notFound();

  const beforeImg = realisationImages[`${real.id}-before`];
  const afterImg = realisationImages[`${real.id}-after`];
  const hasBeforeAfter = !!beforeImg && !!afterImg;

  // Find prev/next for navigation
  const idx = realisations.findIndex((r) => r.id === real.id);
  const prev = idx > 0 ? realisations[idx - 1] : null;
  const next = idx < realisations.length - 1 ? realisations[idx + 1] : null;

  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl pt-8 pb-4">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Realisations", href: "/realisations" },
            { label: real.title },
          ]}
        />
      </div>

      <article className="container mx-auto px-4 lg:px-8 max-w-5xl pb-16">
        {/* Back link */}
        <Link
          href="/realisations"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-primary-900 transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Retour aux realisations
        </Link>

        {/* Title + meta */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Badge variant="outline" className="text-xs">
              <Tag size={12} className="mr-1" />
              {real.category}
            </Badge>
            <span className="inline-flex items-center gap-1 text-sm text-neutral-500">
              <MapPin size={14} />
              {real.city}
            </span>
          </div>
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-neutral-900">
            {real.title}
          </h1>
          <p className="mt-3 text-lg text-neutral-600 leading-relaxed">
            {real.description}
          </p>
        </div>

        {/* Before/After Slider */}
        {hasBeforeAfter && (
          <div className="mb-12">
            <BeforeAfterSlider
              beforeImage={beforeImg}
              afterImage={afterImg}
              beforeAlt={`${real.title} — avant travaux`}
              afterAlt={`${real.title} — apres travaux`}
              aspectRatio={real.aspectRatio}
            />
          </div>
        )}

        {/* Prev / Next navigation */}
        <div className="flex flex-col sm:flex-row items-stretch gap-4 mt-8 pt-8 border-t border-neutral-200">
          {prev ? (
            <Link
              href={`/realisations/${prev.id}`}
              className="flex-1 group rounded-xl border border-neutral-200 p-4 hover:border-primary-900 transition-colors"
            >
              <span className="text-xs text-neutral-400 uppercase tracking-wide">
                Precedent
              </span>
              <p className="mt-1 font-semibold text-neutral-900 group-hover:text-primary-900 transition-colors">
                {prev.title}
              </p>
              <span className="text-xs text-neutral-500">{prev.city}</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/realisations/${next.id}`}
              className="flex-1 group rounded-xl border border-neutral-200 p-4 hover:border-primary-900 transition-colors text-right"
            >
              <span className="text-xs text-neutral-400 uppercase tracking-wide">
                Suivant
              </span>
              <p className="mt-1 font-semibold text-neutral-900 group-hover:text-primary-900 transition-colors">
                {next.title}
              </p>
              <span className="text-xs text-neutral-500">{next.city}</span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </article>

      <CTASection
        title="Vous avez un projet similaire ?"
        subtitle="Contactez-nous pour un devis gratuit et personnalise."
      />
    </>
  );
}
