import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** @deprecated Use `centered={false}` instead */
  align?: "left" | "center";
  light?: boolean;
  /** @deprecated Use `light` instead */
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  align,
  light,
  dark,
  className,
}: SectionHeadingProps) {
  // Support legacy `align` prop
  const isCentered = align ? align === "center" : centered;
  // Support both `light` and legacy `dark` prop
  const isLight = light ?? dark ?? false;

  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        isCentered && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          isLight ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-accent-500",
          isCentered && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg",
            isLight ? "text-neutral-200" : "text-neutral-600",
            isCentered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
