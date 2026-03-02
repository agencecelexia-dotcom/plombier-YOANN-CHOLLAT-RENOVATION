"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Droplets, Eye, EyeOff, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        setError("Code incorrect");
      }
    } catch {
      setError("Erreur de connexion");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-900 shadow-lg">
            <Droplets className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-1 text-2xl font-bold text-neutral-900">Administration</h1>
          <p className="text-sm text-neutral-500">{siteConfig.name}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
        >
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            Code d&apos;acces
          </label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez le code"
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-900/20 pr-12"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {error && (
            <p className="mb-4 text-center text-sm text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 py-3 font-medium text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              "Connexion"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
