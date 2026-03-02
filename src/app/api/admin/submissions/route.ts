import { NextResponse } from "next/server";
import { getSubmissions, updateSubmission, deleteSubmission } from "@/lib/storage";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const submissions = await getSubmissions();
    return NextResponse.json(submissions);
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, ...updates } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID manquant" }, { status: 400 });
    }
    const updated = await updateSubmission(id, updates);
    if (!updated) {
      return NextResponse.json({ error: "Soumission introuvable" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID manquant" }, { status: 400 });
    }
    const deleted = await deleteSubmission(id);
    if (!deleted) {
      return NextResponse.json({ error: "Soumission introuvable" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
