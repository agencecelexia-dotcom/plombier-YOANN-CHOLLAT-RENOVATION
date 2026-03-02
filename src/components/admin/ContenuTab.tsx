"use client";

import { useState } from "react";
import { Save, CheckCircle, AlertCircle } from "lucide-react";

interface Fields {
  NOM_ENTREPRISE: string;
  NOM_LEGAL: string;
  PRENOM_DIRIGEANT: string;
  NOM_DIRIGEANT: string;
  GENRE_DIRIGEANT: string;
  TELEPHONE: string;
  TELEPHONE_URGENCE: string;
  EMAIL: string;
  ADRESSE: string;
  CODE_POSTAL: string;
  VILLE: string;
  DEPARTEMENT: string;
  REGION: string;
  ZONE_KM: string;
  HORAIRES_SEMAINE: string;
  HORAIRES_SAMEDI: string;
  HORAIRES_DIMANCHE: string;
  HORAIRES_URGENCE: string;
  SLOGAN: string;
  DESCRIPTION_ENTREPRISE: string;
  META_TITLE_ACCUEIL: string;
  META_DESC_ACCUEIL: string;
  FACEBOOK_URL: string;
  INSTAGRAM_URL: string;
  GOOGLE_URL: string;
  DOMAINE: string;
  SIRET: string;
  RGE: string;
  ASSURANCE_DECENNALE: string;
  ANNEES_EXPERIENCE: string;
  NOMBRE_INTERVENTIONS: string;
  NOTE_GOOGLE: string;
  NOMBRE_AVIS: string;
  ANNEE_CREATION: string;
  DELAI_INTERVENTION: string;
  DISPONIBILITE: string;
  TAUX_SATISFACTION: string;
  ADMIN_PASSWORD: string;
}

const INITIAL_FIELDS: Fields = {
  NOM_ENTREPRISE: "",
  NOM_LEGAL: "",
  PRENOM_DIRIGEANT: "",
  NOM_DIRIGEANT: "",
  GENRE_DIRIGEANT: "masculin",
  TELEPHONE: "",
  TELEPHONE_URGENCE: "",
  EMAIL: "",
  ADRESSE: "",
  CODE_POSTAL: "",
  VILLE: "",
  DEPARTEMENT: "",
  REGION: "",
  ZONE_KM: "",
  HORAIRES_SEMAINE: "",
  HORAIRES_SAMEDI: "",
  HORAIRES_DIMANCHE: "",
  HORAIRES_URGENCE: "",
  SLOGAN: "",
  DESCRIPTION_ENTREPRISE: "",
  META_TITLE_ACCUEIL: "",
  META_DESC_ACCUEIL: "",
  FACEBOOK_URL: "",
  INSTAGRAM_URL: "",
  GOOGLE_URL: "",
  DOMAINE: "",
  SIRET: "",
  RGE: "",
  ASSURANCE_DECENNALE: "",
  ANNEES_EXPERIENCE: "",
  NOMBRE_INTERVENTIONS: "",
  NOTE_GOOGLE: "",
  NOMBRE_AVIS: "",
  ANNEE_CREATION: "",
  DELAI_INTERVENTION: "",
  DISPONIBILITE: "",
  TAUX_SATISFACTION: "",
  ADMIN_PASSWORD: "",
};

const LONG_FIELDS: (keyof Fields)[] = [
  "DESCRIPTION_ENTREPRISE",
  "META_DESC_ACCUEIL",
  "SLOGAN",
];

type Toast = { type: "success" | "error"; message: string } | null;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 font-heading text-base font-semibold text-neutral-900">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function Field({
  label,
  fieldKey,
  fields,
  onChange,
  fullWidth,
}: {
  label: string;
  fieldKey: keyof Fields;
  fields: Fields;
  onChange: (key: keyof Fields, value: string) => void;
  fullWidth?: boolean;
}) {
  const isLong = LONG_FIELDS.includes(fieldKey);
  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {label}
      </label>
      {isLong ? (
        <textarea
          value={fields[fieldKey]}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          rows={3}
          className="w-full resize-y rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 focus:border-primary-900 focus:outline-none focus:ring-1 focus:ring-primary-900"
        />
      ) : (
        <input
          type="text"
          value={fields[fieldKey]}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-900 focus:border-primary-900 focus:outline-none focus:ring-1 focus:ring-primary-900"
        />
      )}
    </div>
  );
}

export default function ContenuTab() {
  const [fields, setFields] = useState<Fields>(INITIAL_FIELDS);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  function handleChange(key: keyof Fields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave() {
    setSaving(true);
    setToast(null);
    try {
      const res = await fetch("/api/admin/save-client", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setToast({
        type: "success",
        message: "Contenu sauvegardé avec succès !",
      });
    } catch {
      setToast({
        type: "error",
        message: "Erreur lors de la sauvegarde. Réessayez.",
      });
    } finally {
      setSaving(false);
      setTimeout(() => setToast(null), 4000);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-neutral-900">
            Contenu du site
          </h1>
          <p className="mt-1 text-neutral-500">
            Modifiez les informations de votre entreprise
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
        >
          <Save size={15} />
          {saving ? "Sauvegarde..." : "Sauvegarder"}
        </button>
      </div>

      {toast && (
        <div
          className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium ${
            toast.type === "success"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle size={16} />
          ) : (
            <AlertCircle size={16} />
          )}
          {toast.message}
        </div>
      )}

      <Section title="Identité">
        <Field label="Nom de l'entreprise" fieldKey="NOM_ENTREPRISE" fields={fields} onChange={handleChange} />
        <Field label="Nom légal" fieldKey="NOM_LEGAL" fields={fields} onChange={handleChange} />
        <Field label="Prénom du dirigeant" fieldKey="PRENOM_DIRIGEANT" fields={fields} onChange={handleChange} />
        <Field label="Nom du dirigeant" fieldKey="NOM_DIRIGEANT" fields={fields} onChange={handleChange} />
        <Field label="Genre (masculin/féminin)" fieldKey="GENRE_DIRIGEANT" fields={fields} onChange={handleChange} />
      </Section>

      <Section title="Contact">
        <Field label="Téléphone" fieldKey="TELEPHONE" fields={fields} onChange={handleChange} />
        <Field label="Téléphone urgence" fieldKey="TELEPHONE_URGENCE" fields={fields} onChange={handleChange} />
        <Field label="Email" fieldKey="EMAIL" fields={fields} onChange={handleChange} />
        <Field label="Adresse" fieldKey="ADRESSE" fields={fields} onChange={handleChange} />
        <Field label="Code postal" fieldKey="CODE_POSTAL" fields={fields} onChange={handleChange} />
        <Field label="Ville" fieldKey="VILLE" fields={fields} onChange={handleChange} />
        <Field label="Département" fieldKey="DEPARTEMENT" fields={fields} onChange={handleChange} />
        <Field label="Région" fieldKey="REGION" fields={fields} onChange={handleChange} />
        <Field label="Zone d'intervention (km)" fieldKey="ZONE_KM" fields={fields} onChange={handleChange} />
      </Section>

      <Section title="Horaires">
        <Field label="Semaine" fieldKey="HORAIRES_SEMAINE" fields={fields} onChange={handleChange} />
        <Field label="Samedi" fieldKey="HORAIRES_SAMEDI" fields={fields} onChange={handleChange} />
        <Field label="Dimanche" fieldKey="HORAIRES_DIMANCHE" fields={fields} onChange={handleChange} />
        <Field label="Urgences" fieldKey="HORAIRES_URGENCE" fields={fields} onChange={handleChange} />
      </Section>

      <Section title="Contenu du site">
        <Field label="Slogan" fieldKey="SLOGAN" fields={fields} onChange={handleChange} fullWidth />
        <Field label="Description entreprise" fieldKey="DESCRIPTION_ENTREPRISE" fields={fields} onChange={handleChange} fullWidth />
        <Field label="Meta title accueil" fieldKey="META_TITLE_ACCUEIL" fields={fields} onChange={handleChange} fullWidth />
        <Field label="Meta description accueil" fieldKey="META_DESC_ACCUEIL" fields={fields} onChange={handleChange} fullWidth />
      </Section>

      <Section title="Réseaux sociaux">
        <Field label="Facebook URL" fieldKey="FACEBOOK_URL" fields={fields} onChange={handleChange} />
        <Field label="Instagram URL" fieldKey="INSTAGRAM_URL" fields={fields} onChange={handleChange} />
        <Field label="Google Business URL" fieldKey="GOOGLE_URL" fields={fields} onChange={handleChange} />
        <Field label="Domaine" fieldKey="DOMAINE" fields={fields} onChange={handleChange} />
      </Section>

      <Section title="Légal">
        <Field label="SIRET" fieldKey="SIRET" fields={fields} onChange={handleChange} />
        <Field label="RGE" fieldKey="RGE" fields={fields} onChange={handleChange} />
        <Field label="Assurance décennale" fieldKey="ASSURANCE_DECENNALE" fields={fields} onChange={handleChange} />
      </Section>

      <Section title="Chiffres clés">
        <Field label="Années d'expérience" fieldKey="ANNEES_EXPERIENCE" fields={fields} onChange={handleChange} />
        <Field label="Nombre d'interventions" fieldKey="NOMBRE_INTERVENTIONS" fields={fields} onChange={handleChange} />
        <Field label="Note Google" fieldKey="NOTE_GOOGLE" fields={fields} onChange={handleChange} />
        <Field label="Nombre d'avis" fieldKey="NOMBRE_AVIS" fields={fields} onChange={handleChange} />
        <Field label="Année de création" fieldKey="ANNEE_CREATION" fields={fields} onChange={handleChange} />
        <Field label="Délai d'intervention" fieldKey="DELAI_INTERVENTION" fields={fields} onChange={handleChange} />
        <Field label="Disponibilité" fieldKey="DISPONIBILITE" fields={fields} onChange={handleChange} />
        <Field label="Taux de satisfaction" fieldKey="TAUX_SATISFACTION" fields={fields} onChange={handleChange} />
      </Section>

      <Section title="Administration">
        <Field label="Mot de passe admin" fieldKey="ADMIN_PASSWORD" fields={fields} onChange={handleChange} />
      </Section>

      <div className="flex justify-end pb-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
        >
          <Save size={15} />
          {saving ? "Sauvegarde..." : "Sauvegarder les modifications"}
        </button>
      </div>
    </div>
  );
}
