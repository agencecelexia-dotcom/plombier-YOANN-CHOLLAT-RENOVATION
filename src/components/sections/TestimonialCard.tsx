import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 h-full flex flex-col">
      <div className="flex gap-0.5 mb-3" role="img" aria-label={`Note : ${testimonial.rating} sur 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            aria-hidden="true"
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? "text-accent-500 fill-accent-500"
                : "text-neutral-300"
            }`}
          />
        ))}
      </div>
      <blockquote className="text-sm text-neutral-600 italic leading-relaxed flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>
      <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-700 font-semibold flex items-center justify-center shrink-0">
          <span className="text-sm">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <span className="font-semibold text-sm text-neutral-900 block">
            {testimonial.name}
          </span>
          <span className="text-xs text-neutral-500">
            {testimonial.date}
            {testimonial.source && ` — ${testimonial.source}`}
          </span>
        </div>
      </div>
    </div>
  );
}
