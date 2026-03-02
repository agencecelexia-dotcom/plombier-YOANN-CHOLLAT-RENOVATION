"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { mainNavItems } from "@/config/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 z-50 w-80 bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-neutral-100">
              <div className="flex items-center gap-2.5">
                <div className="relative shrink-0">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="28"
                      height="28"
                      rx="8"
                      fill="oklch(0.22 0.08 245)"
                      opacity="0.12"
                    />
                    <path
                      d="M18 9c-1.5 0-2.5 1-2.5 2.5v5c0 1 0.5 1.8 1.3 2.2l-3.3 5.8a1.5 1.5 0 002.6 1.5l3.4-6h1l3.4 6a1.5 1.5 0 002.6-1.5l-3.3-5.8c.8-.4 1.3-1.2 1.3-2.2v-5C24.5 10 23.5 9 22 9h-4z"
                      fill="oklch(0.22 0.08 245)"
                    />
                    <circle cx="18" cy="11.5" r="1.5" fill="oklch(0.64 0.18 44)" />
                    <circle cx="22" cy="11.5" r="1.5" fill="oklch(0.64 0.18 44)" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-base font-bold leading-none text-primary-900">
                    {siteConfig.name.split(" ")[0]}
                  </p>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-accent-600">
                    {siteConfig.name.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Fermer le menu"
              >
                <svg
                  className="w-5 h-5 text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav
              className="flex-1 overflow-y-auto py-4"
              aria-label="Navigation principale"
            >
              {mainNavItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full px-6 py-3 text-sm font-medium text-neutral-700 hover:text-primary-900 hover:bg-neutral-50 transition-colors"
                      aria-expanded={servicesOpen}
                      aria-controls="mobile-services-submenu"
                    >
                      {item.label}
                      <motion.svg
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4 text-neutral-400"
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
                      </motion.svg>
                    </button>
                    <AnimatePresence initial={false}>
                      {servicesOpen && (
                        <motion.div
                          id="mobile-services-submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="py-1 ml-6 border-l-2 border-accent-200">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className="block pl-4 pr-6 py-2.5 text-sm text-neutral-500 hover:text-primary-900 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    onClick={onClose}
                    className="block px-6 py-3 text-sm font-medium text-neutral-700 hover:text-primary-900 hover:bg-neutral-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Bottom CTA */}
            <div className="p-5 border-t border-neutral-100 space-y-3">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Lun-Ven {siteConfig.openingHours.weekdays} | Sam{" "}
                  {siteConfig.openingHours.saturday}
                </span>
              </div>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm rounded-xl transition-colors duration-200"
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
                Appelez-nous — {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
