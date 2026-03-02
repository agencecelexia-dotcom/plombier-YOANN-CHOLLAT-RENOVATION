import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { realisationImages } from "@/config/images";
import type { Realisation } from "@/types";

interface RealisationCardProps {
  realisation: Realisation;
}

export function RealisationCard({ realisation }: RealisationCardProps) {
  return (
    <Link
      href={`/realisations/${realisation.id}`}
      className="group block rounded-2xl overflow-hidden border border-neutral-200 bg-card hover:border-primary-900 hover:shadow-lg transition-all duration-300"
    >
      <div className="grid grid-cols-2">
        <div className="relative overflow-hidden">
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-block text-xs px-2 py-0.5 rounded bg-neutral-800/70 text-white backdrop-blur-sm">
              Avant
            </span>
          </div>
          <ImagePlaceholder
            prompt={realisation.beforePrompt}
            src={realisationImages[`${realisation.id}-before`] || undefined}
            aspectRatio={realisation.aspectRatio}
            alt={`${realisation.title} — avant`}
            className="rounded-none h-full transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-block text-xs px-2 py-0.5 rounded bg-accent-500/80 text-white backdrop-blur-sm">
              Apres
            </span>
          </div>
          <ImagePlaceholder
            prompt={realisation.afterPrompt}
            src={realisationImages[`${realisation.id}-after`] || undefined}
            aspectRatio={realisation.aspectRatio}
            alt={`${realisation.title} — apres`}
            className="rounded-none h-full transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="outline" className="text-xs">
            {realisation.category}
          </Badge>
          <span className="text-xs text-neutral-500">
            {realisation.city}
          </span>
        </div>
        <h3 className="font-semibold text-sm text-neutral-900 group-hover:text-primary-900 transition-colors">
          {realisation.title}
        </h3>
        <p className="text-xs text-neutral-600 mt-1 line-clamp-2">
          {realisation.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent-600 group-hover:text-accent-500 transition-colors">
          Voir le avant / apres
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
