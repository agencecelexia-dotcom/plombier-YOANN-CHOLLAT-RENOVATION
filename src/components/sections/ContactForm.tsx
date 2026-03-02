"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactForm, shared } from "@/config/content";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      nom: formData.get("nom") as string,
      telephone: formData.get("telephone") as string,
      email: formData.get("email") as string,
      service: formData.get("service") as string || "Autre",
      message: formData.get("message") as string,
      _gotcha: formData.get("_gotcha") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          {contactForm.success.title}
        </h3>
        <p className="text-neutral-600">
          {contactForm.success.text}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div role="alert" className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          <AlertCircle className="w-4 h-4" />
          {contactForm.error}
        </div>
      )}

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nom">{contactForm.labels.nom}</Label>
          <Input id="nom" name="nom" required placeholder={contactForm.placeholders.nom} className="focus:ring-accent-500 focus:border-accent-500" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telephone">{contactForm.labels.telephone}</Label>
          <Input id="telephone" name="telephone" type="tel" required placeholder={contactForm.placeholders.telephone} className="focus:ring-accent-500 focus:border-accent-500" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{contactForm.labels.email}</Label>
        <Input id="email" name="email" type="email" required placeholder={contactForm.placeholders.email} className="focus:ring-accent-500 focus:border-accent-500" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">{contactForm.labels.service}</Label>
        <Select name="service">
          <SelectTrigger id="service">
            <SelectValue placeholder={contactForm.placeholders.service} />
          </SelectTrigger>
          <SelectContent>
            {contactForm.serviceOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{contactForm.labels.message}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={contactForm.placeholders.message}
          rows={4}
          className="focus:ring-accent-500 focus:border-accent-500"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="rgpd"
          name="rgpd"
          required
          className="mt-1 w-4 h-4 accent-accent-500 rounded border-neutral-300"
        />
        <Label htmlFor="rgpd" className="text-xs text-neutral-500 font-normal leading-relaxed">
          {contactForm.rgpd}
        </Label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 bg-accent-500 text-white rounded-lg font-medium text-sm transition-all duration-200 hover:bg-accent-600 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none inline-flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        {isSubmitting ? shared.cta.envoiEnCours : shared.cta.envoyerDemande}
      </button>
    </form>
  );
}
