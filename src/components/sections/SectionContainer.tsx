import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "gray" | "warm" | "dark";
  id?: string;
}

const variantClasses: Record<string, string> = {
  white: "bg-white",
  gray: "bg-neutral-50",
  warm: "bg-primary-50",
  dark: "bg-primary-900 text-white",
};

export function SectionContainer({
  children,
  className,
  variant = "white",
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("py-24", variantClasses[variant], className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
