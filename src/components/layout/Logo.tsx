import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export default function Logo({ light = false, className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pipe / wrench icon */}
          <rect x="4" y="4" width="28" height="28" rx="8" fill={light ? "oklch(0.22 0.08 245)" : "oklch(0.22 0.08 245)"} opacity="0.12" />
          <path
            d="M18 9c-1.5 0-2.5 1-2.5 2.5v5c0 1 0.5 1.8 1.3 2.2l-3.3 5.8a1.5 1.5 0 002.6 1.5l3.4-6h1l3.4 6a1.5 1.5 0 002.6-1.5l-3.3-5.8c.8-.4 1.3-1.2 1.3-2.2v-5C24.5 10 23.5 9 22 9h-4z"
            fill={light ? "oklch(0.64 0.18 44)" : "oklch(0.22 0.08 245)"}
          />
          <circle cx="18" cy="11.5" r="1.5" fill={light ? "white" : "oklch(0.64 0.18 44)"} />
          <circle cx="22" cy="11.5" r="1.5" fill={light ? "white" : "oklch(0.64 0.18 44)"} />
        </svg>
      </div>
      <div>
        <p
          className={cn(
            "font-heading text-lg font-bold leading-none",
            light ? "text-white" : "text-primary-900"
          )}
        >
          {siteConfig.name.split(" ")[0]}
        </p>
        <p
          className={cn(
            "text-xs font-semibold tracking-widest uppercase",
            light ? "text-accent-300" : "text-accent-600"
          )}
        >
          {siteConfig.name.split(" ").slice(1).join(" ")}
        </p>
      </div>
    </Link>
  );
}
