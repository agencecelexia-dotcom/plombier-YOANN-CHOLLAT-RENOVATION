import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";

async function checkAuth() {
  const cookieStore = await cookies();
  return cookieStore.has("admin_auth");
}

export async function POST(request: NextRequest) {
  if (!(await checkAuth()))
    return NextResponse.json({ error: "Non autorise" }, { status: 401 });

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const targetPath = formData.get("path") as string | null;

  if (!file || !targetPath) {
    return NextResponse.json({ error: "Fichier et chemin requis" }, { status: 400 });
  }

  // Security: only allow writing to /images/ in public/
  const normalizedPath = targetPath.replace(/\\/g, "/");
  if (!normalizedPath.startsWith("/images/") || normalizedPath.includes("..")) {
    return NextResponse.json({ error: "Chemin non autorise" }, { status: 403 });
  }

  const publicDir = path.join(process.cwd(), "public");
  const fullPath = path.join(publicDir, normalizedPath);
  const dir = path.dirname(fullPath);

  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write file
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(fullPath, buffer);

  return NextResponse.json({ success: true, path: normalizedPath });
}
