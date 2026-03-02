import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/storage";
import type { Submission } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body._gotcha) {
      return NextResponse.json({ success: true });
    }

    const submission: Submission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      nom: body.nom || "",
      telephone: body.telephone || "",
      email: body.email || "",
      service: body.service || "Autre",
      message: body.message || "",
      date: new Date().toISOString(),
      status: "new",
    };

    await saveSubmission(submission);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
