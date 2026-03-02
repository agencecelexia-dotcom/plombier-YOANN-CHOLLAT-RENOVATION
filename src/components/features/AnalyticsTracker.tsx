"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef("");

  // Track page views on route change
  useEffect(() => {
    // Skip admin pages
    if (pathname.startsWith("/admin")) return;

    // Avoid double-tracking same page
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;

    fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "page_view",
        page: pathname,
        referrer: document.referrer || "",
      }),
    }).catch(() => {});
  }, [pathname]);

  // Track clicks on elements with data-track attribute
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("[data-track]");
      if (!target) return;

      const trackName = target.getAttribute("data-track");
      if (!trackName) return;

      fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "click",
          page: window.location.pathname,
          element: trackName,
        }),
      }).catch(() => {});
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
