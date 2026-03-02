import { NextResponse } from "next/server";
import { saveAnalyticsEvent } from "@/lib/storage";
import type { AnalyticsEvent } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const event: AnalyticsEvent = {
      type: body.type || "page_view",
      page: body.page || "/",
      referrer: body.referrer || "",
      element: body.element || "",
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "",
    };

    await saveAnalyticsEvent(event);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}
