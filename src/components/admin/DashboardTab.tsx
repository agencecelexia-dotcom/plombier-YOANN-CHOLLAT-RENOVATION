"use client";

import { useState } from "react";
import {
  Eye,
  Users,
  MousePointerClick,
  FileText,
  RefreshCw,
  Phone,
  Mail,
  X,
  TrendingUp,
  Clock,
  Percent,
} from "lucide-react";

type SubmissionStatus = "Nouveau" | "Contacté" | "En cours" | "Converti";

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
  location: string;
  date: string;
  time: string;
  status: SubmissionStatus;
}

const INITIAL_SUBMISSIONS: Submission[] = [
  {
    id: "1",
    name: "Marie Dupont",
    email: "marie.dupont@email.fr",
    phone: "06 12 34 56 78",
    service: "Dépannage urgent",
    subject: "Fuite urgente sous évier cuisine",
    message:
      "Bonjour, j'ai une fuite importante sous l'évier de ma cuisine. L'eau coule en permanence. Pouvez-vous intervenir rapidement ?",
    location: "{VILLE}",
    date: "21/02/2026",
    time: "10:23",
    status: "Nouveau",
  },
  {
    id: "2",
    name: "Pierre & Nathalie Martin",
    email: "martin.pierre@gmail.com",
    phone: "06 98 76 54 32",
    service: "Salle de bain",
    subject: "Rénovation salle de bain 12m²",
    message:
      "Nous souhaiterions rénover notre salle de bain de 12m² avec une douche italienne et un double vasque. Budget prévu : 8 000€.",
    location: "{COMMUNE_1}",
    date: "20/02/2026",
    time: "14:45",
    status: "Contacté",
  },
  {
    id: "3",
    name: "Michel Faure",
    email: "m.faure@orange.fr",
    phone: "07 23 45 67 89",
    service: "Entretien",
    subject: "Entretien chaudière annuel",
    message:
      "Je recherche un contrat d'entretien annuel pour ma chaudière gaz. Marque Saunier Duval, installée en 2019.",
    location: "{COMMUNE_2}",
    date: "19/02/2026",
    time: "09:15",
    status: "En cours",
  },
  {
    id: "4",
    name: "Isabelle Petit",
    email: "isabelle.petit@sfr.fr",
    phone: "06 34 56 78 90",
    service: "Chauffe-eau",
    subject: "Remplacement chauffe-eau 200L",
    message:
      "Mon chauffe-eau de 200L fuit par le bas. Il a 15 ans. Je souhaiterais un devis pour le remplacement par un modèle thermodynamique.",
    location: "{COMMUNE_3}",
    date: "18/02/2026",
    time: "16:30",
    status: "Converti",
  },
  {
    id: "5",
    name: "Jean-Marc Reynaud",
    email: "jm.reynaud@free.fr",
    phone: "06 45 67 89 01",
    service: "Plomberie générale",
    subject: "Débouchage canalisation + WC",
    message:
      "Canalisation bouchée au niveau des WC du 1er étage. L'eau remonte dans la douche. Merci de me rappeler rapidement.",
    location: "{VILLE}",
    date: "17/02/2026",
    time: "11:00",
    status: "Nouveau",
  },
];

const FAKE_STATS = {
  totalViews: 3241,
  todayViews: 47,
  weekViews: 213,
  monthViews: 891,
  ctaClicks: 178,
  formSubmits: 54,
  uniqueVisitors: 2156,
  avgSessionDuration: "2m 51s",
  bounceRate: "35.7%",
  conversionRate: "1.7%",
  topPages: [
    { page: "/", label: "Accueil", views: 1284 },
    { page: "/depannage-plomberie", label: "Dépannage", views: 643 },
    { page: "/renovation-salle-de-bain", label: "Salle de bain", views: 521 },
    { page: "/contact", label: "Contact", views: 389 },
    { page: "/chauffage", label: "Chauffage", views: 234 },
    { page: "/realisations", label: "Réalisations", views: 170 },
  ],
  topReferrers: [
    { source: "Google organic", visits: 1456, pct: "67%" },
    { source: "Direct", visits: 412, pct: "19%" },
    { source: "Google Maps", visits: 178, pct: "8%" },
    { source: "Pages Jaunes", visits: 75, pct: "3%" },
    { source: "Facebook", visits: 35, pct: "2%" },
  ],
};

const STATUS_COLORS: Record<SubmissionStatus, string> = {
  Nouveau: "bg-blue-100 text-blue-700",
  Contacté: "bg-yellow-100 text-yellow-700",
  "En cours": "bg-orange-100 text-orange-700",
  Converti: "bg-green-100 text-green-700",
};

export default function DashboardTab() {
  const [submissions, setSubmissions] =
    useState<Submission[]>(INITIAL_SUBMISSIONS);
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [stats, setStats] = useState(FAKE_STATS);
  const [refreshing, setRefreshing] = useState(false);

  function handleStatusChange(id: string, status: SubmissionStatus) {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
    if (selectedSubmission?.id === id) {
      setSelectedSubmission((prev) => (prev ? { ...prev, status } : null));
    }
  }

  function handleRefresh() {
    setRefreshing(true);
    setTimeout(() => {
      setStats((prev) => ({
        ...prev,
        todayViews: prev.todayViews + Math.floor(Math.random() * 5) + 1,
        totalViews: prev.totalViews + Math.floor(Math.random() * 5) + 1,
      }));
      setRefreshing(false);
    }, 800);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-neutral-900">
            Tableau de bord
          </h1>
          <p className="mt-1 text-neutral-500">
            Vue d&apos;ensemble de votre activité
          </p>
        </div>
        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          <RefreshCw
            size={15}
            className={refreshing ? "animate-spin" : ""}
          />
          Actualiser
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          icon={Eye}
          label="Vues totales"
          value={stats.totalViews.toLocaleString("fr-FR")}
          sub={`+${stats.todayViews} aujourd'hui`}
          color="bg-blue-50 text-blue-700"
        />
        <StatCard
          icon={Users}
          label="Visiteurs uniques"
          value={stats.uniqueVisitors.toLocaleString("fr-FR")}
          sub={`Ce mois: ${stats.monthViews}`}
          color="bg-primary-50 text-primary-700"
        />
        <StatCard
          icon={MousePointerClick}
          label="Clics CTA"
          value={stats.ctaClicks.toString()}
          sub={`Taux: ${stats.conversionRate}`}
          color="bg-accent-50 text-accent-700"
        />
        <StatCard
          icon={FileText}
          label="Formulaires"
          value={stats.formSubmits.toString()}
          sub={`Rebond: ${stats.bounceRate}`}
          color="bg-green-50 text-green-700"
        />
      </div>

      {/* Secondary stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <Clock size={18} className="flex-shrink-0 text-neutral-400" />
          <div>
            <p className="text-xs text-neutral-500">Durée moy. session</p>
            <p className="text-lg font-bold text-neutral-900">
              {stats.avgSessionDuration}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <TrendingUp size={18} className="flex-shrink-0 text-neutral-400" />
          <div>
            <p className="text-xs text-neutral-500">Vues cette semaine</p>
            <p className="text-lg font-bold text-neutral-900">
              {stats.weekViews}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <Percent size={18} className="flex-shrink-0 text-neutral-400" />
          <div>
            <p className="text-xs text-neutral-500">Taux de rebond</p>
            <p className="text-lg font-bold text-neutral-900">
              {stats.bounceRate}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="border-b border-neutral-100 px-6 py-4">
          <h2 className="font-heading text-lg font-semibold text-neutral-900">
            Demandes récentes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-50 text-left">
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Nom
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Localisation
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Sujet
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Date
                </th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {submissions.map((s) => (
                <tr
                  key={s.id}
                  className="cursor-pointer transition-colors hover:bg-neutral-50"
                  onClick={() => setSelectedSubmission(s)}
                >
                  <td className="px-4 py-3 font-medium text-neutral-900">
                    {s.name}
                  </td>
                  <td className="px-4 py-3 text-neutral-500">{s.location}</td>
                  <td className="max-w-xs truncate px-4 py-3 text-neutral-700">
                    {s.subject}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-neutral-500">
                    {s.date}
                  </td>
                  <td
                    className="px-4 py-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <select
                      value={s.status}
                      onChange={(e) =>
                        handleStatusChange(
                          s.id,
                          e.target.value as SubmissionStatus
                        )
                      }
                      className={`cursor-pointer rounded-full border-0 px-2.5 py-1 text-xs font-medium ${STATUS_COLORS[s.status]}`}
                    >
                      <option value="Nouveau">Nouveau</option>
                      <option value="Contacté">Contacté</option>
                      <option value="En cours">En cours</option>
                      <option value="Converti">Converti</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-100 px-6 py-4">
            <h2 className="font-heading text-base font-semibold text-neutral-900">
              Pages les plus visitées
            </h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {stats.topPages.map((p, i) => (
              <div
                key={p.page}
                className="flex items-center justify-between px-6 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-4 font-mono text-xs text-neutral-400">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      {p.label}
                    </p>
                    <p className="font-mono text-xs text-neutral-400">
                      {p.page}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-neutral-700">
                  {p.views.toLocaleString("fr-FR")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-100 px-6 py-4">
            <h2 className="font-heading text-base font-semibold text-neutral-900">
              Sources de trafic
            </h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {stats.topReferrers.map((r) => (
              <div
                key={r.source}
                className="flex items-center justify-between px-6 py-3"
              >
                <span className="text-sm text-neutral-700">{r.source}</span>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-accent-500"
                      style={{ width: r.pct }}
                    />
                  </div>
                  <span className="w-8 text-right text-xs font-medium text-neutral-500">
                    {r.pct}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-5">
              <div>
                <h3 className="font-heading text-xl font-bold text-neutral-900">
                  {selectedSubmission.name}
                </h3>
                <p className="text-sm text-neutral-500">
                  {selectedSubmission.location} — {selectedSubmission.date} à{" "}
                  {selectedSubmission.time}
                </p>
              </div>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 px-6 py-5">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_COLORS[selectedSubmission.status]}`}
                >
                  {selectedSubmission.status}
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  {selectedSubmission.service}
                </span>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Sujet
                </p>
                <p className="text-sm font-medium text-neutral-900">
                  {selectedSubmission.subject}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Message
                </p>
                <p className="text-sm leading-relaxed text-neutral-700">
                  {selectedSubmission.message}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    Email
                  </p>
                  <p className="text-sm text-neutral-700">
                    {selectedSubmission.email}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    Téléphone
                  </p>
                  <p className="text-sm text-neutral-700">
                    {selectedSubmission.phone}
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Changer le statut
                </p>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      "Nouveau",
                      "Contacté",
                      "En cours",
                      "Converti",
                    ] as SubmissionStatus[]
                  ).map((s) => (
                    <button
                      key={s}
                      onClick={() =>
                        handleStatusChange(selectedSubmission.id, s)
                      }
                      className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                        selectedSubmission.status === s
                          ? STATUS_COLORS[s] +
                            " ring-2 ring-current ring-offset-1"
                          : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 px-6 pb-6">
              <a
                href={`tel:${selectedSubmission.phone}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
              >
                <Phone size={15} />
                Appeler
              </a>
              <a
                href={`mailto:${selectedSubmission.email}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              >
                <Mail size={15} />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  color: string;
}

function StatCard({ icon: Icon, label, value, sub, color }: StatCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {label}
          </p>
          <p className="mt-1.5 text-2xl font-bold text-neutral-900">{value}</p>
          <p className="mt-0.5 text-xs text-neutral-400">{sub}</p>
        </div>
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${color}`}
        >
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
}
