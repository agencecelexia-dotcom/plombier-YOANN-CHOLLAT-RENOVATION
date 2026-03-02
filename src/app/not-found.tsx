import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-extrabold text-primary mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Page introuvable
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          Pas d&apos;inquiétude, vous pouvez revenir à l&apos;accueil ou nous contacter directement.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
