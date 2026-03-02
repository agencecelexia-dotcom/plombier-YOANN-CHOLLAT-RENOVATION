import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/types";
import { breadcrumbSchema } from "@/lib/schema";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(items)),
        }}
      />
      <nav aria-label="Fil d'Ariane" className="py-3">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="w-3 h-3" />}
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
