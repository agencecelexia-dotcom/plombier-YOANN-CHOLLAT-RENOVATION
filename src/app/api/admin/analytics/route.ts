import { NextResponse } from "next/server";
import { getAnalyticsEvents } from "@/lib/storage";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const events = await getAnalyticsEvents();
    return NextResponse.json(events);
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
