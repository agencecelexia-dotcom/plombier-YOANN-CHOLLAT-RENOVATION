import Link from "next/link";
import { Siren, Wrench, Bath, Flame, Droplets, ClipboardCheck } from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Siren,
  Wrench,
  Bath,
  Flame,
  Droplets,
  ClipboardCheck,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon];

  return (
    <div className="group rounded-2xl border border-neutral-200 p-6 transition-all duration-300 hover:border-primary-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1">
      <div className="h-12 w-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-accent-50 group-hover:text-accent-600">
        {IconComponent && (
          <IconComponent className="w-6 h-6" />
        )}
      </div>
      <h3 className="font-heading text-xl font-bold text-neutral-900 mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-neutral-600 leading-relaxed mb-4">
        {service.shortDescription}
      </p>
      <Link
        href={service.slug}
        className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
      >
        En savoir plus &rarr;
        <span className="sr-only"> sur {service.title}</span>
      </Link>
    </div>
  );
}
