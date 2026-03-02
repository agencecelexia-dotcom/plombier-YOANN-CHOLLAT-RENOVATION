import { NextResponse } from "next/server";
import { clientConfig } from "@/config/client.config";

const ADMIN_PASSWORD = clientConfig.admin.password;
const ADMIN_COOKIE = "admin_auth";
const ADMIN_SESSION_VALUE = "plombier-admin-session-v1";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Code incorrect" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_COOKIE, ADMIN_SESSION_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Requete invalide" }, { status: 400 });
  }
}
