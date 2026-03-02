"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { mainNavItems } from "@/config/navigation";
import Logo from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setServicesOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setServicesOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setServicesOpen(true);
      }
    },
    []
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Transparent on homepage when not scrolled; solid otherwise
  const isTransparent = isHomepage && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
          isTransparent
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-sm shadow-[var(--shadow-header)]"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Logo light={isTransparent} />

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Navigation principale"
            >
              {mainNavItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "group relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
                        isTransparent
                          ? "text-white/90 hover:text-white"
                          : "text-neutral-600 hover:text-primary-900"
                      )}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls="services-submenu"
                      onClick={() => setServicesOpen((prev) => !prev)}
                      onKeyDown={handleServicesKeyDown}
                    >
                      {item.label}
                      <svg
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      {/* Underline animation */}
                      <span
                        className={cn(
                          "absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                          isTransparent ? "bg-accent-300" : "bg-accent-500"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          id="services-submenu"
                          role="menu"
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-100 py-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className={cn(
                                "block px-4 py-2.5 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-primary-900 transition-colors",
                                isActive(child.href) &&
                                  "text-primary-900 font-semibold bg-neutral-50"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={cn(
                      "group relative px-3 py-2 text-sm font-medium transition-colors",
                      isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-neutral-600 hover:text-primary-900",
                      isActive(item.href!) &&
                        (isTransparent
                          ? "text-white"
                          : "text-primary-900")
                    )}
                  >
                    {item.label}
                    {/* Underline animation */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-transform duration-300 origin-left",
                        isActive(item.href!)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                        isTransparent ? "bg-accent-300" : "bg-accent-500"
                      )}
                    />
                  </Link>
                )
              )}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.phoneHref}
                data-track="header-appel"
                className={cn(
                  "hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200",
                  isTransparent
                    ? "bg-accent-500 text-white hover:bg-accent-600"
                    : "bg-accent-500 text-white hover:bg-accent-600 shadow-sm hover:shadow-md"
                )}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {siteConfig.phone}
              </a>

              {/* Mobile hamburger */}
              <button
                className={cn(
                  "lg:hidden p-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2",
                  isTransparent
                    ? "text-white hover:bg-white/10"
                    : "text-neutral-700 hover:bg-neutral-100"
                )}
                onClick={() => setMobileOpen(true)}
                aria-label="Ouvrir le menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
