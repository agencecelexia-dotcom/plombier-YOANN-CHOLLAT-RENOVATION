import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_COOKIE = "admin_auth";
const ADMIN_SESSION_VALUE = "plombier-admin-session-v1";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes (except login)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const cookie = request.cookies.get(ADMIN_COOKIE);
    if (!cookie || cookie.value !== ADMIN_SESSION_VALUE) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Protect admin API routes (except login/logout)
  if (
    pathname.startsWith("/api/admin") &&
    !pathname.startsWith("/api/admin/login") &&
    !pathname.startsWith("/api/admin/logout")
  ) {
    const cookie = request.cookies.get(ADMIN_COOKIE);
    if (!cookie || cookie.value !== ADMIN_SESSION_VALUE) {
      return NextResponse.json({ error: "Non autorise" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
