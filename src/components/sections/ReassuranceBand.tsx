"use client";

import FadeUp from "@/components/animations/FadeUp";
import CountUp from "@/components/animations/CountUp";
import { reassuranceBand } from "@/config/content";

export function ReassuranceBand() {
  return (
    <section className="bg-primary-900 py-20" aria-label="Nos chiffres clés">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {reassuranceBand.stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <span className="font-heading text-5xl md:text-6xl font-bold text-white">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </span>
                <p className="mt-2 text-sm font-medium text-neutral-300">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
