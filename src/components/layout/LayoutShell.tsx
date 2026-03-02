"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface LayoutShellProps {
  header: ReactNode;
  footer: ReactNode;
  schemaOrg: ReactNode;
  scrollProgress: ReactNode;
  analytics: ReactNode;
  children: ReactNode;
}

export function LayoutShell({
  header,
  footer,
  schemaOrg,
  scrollProgress,
  analytics,
  children,
}: LayoutShellProps) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {schemaOrg}
      {scrollProgress}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Aller au contenu principal
      </a>
      {header}
      <main id="main-content">{children}</main>
      {footer}
      {analytics}
    </>
  );
}
