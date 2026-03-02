"use client";

import { useState, useEffect, useCallback } from "react";
import { Plus, Pencil, Trash2, X, Loader2, GripVertical } from "lucide-react";

interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  order: number;
}

type ServiceForm = Omit<Service, "id" | "order" | "features"> & {
  featuresText: string;
};

function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const EMPTY_FORM: ServiceForm = {
  slug: "",
  title: "",
  shortDescription: "",
  fullDescription: "",
  featuresText: "",
  icon: "Wrench",
};

export default function ServicesTab() {
  const [items, setItems] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Service | null>(null);
  const [form, setForm] = useState<ServiceForm>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const loadItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/services");
      if (res.ok) {
        const data = await res.json();
        setItems(data.data ?? data);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  function openAdd() {
    setEditItem(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  }

  function openEdit(item: Service) {
    setEditItem(item);
    setForm({
      slug: item.slug,
      title: item.title,
      shortDescription: item.shortDescription,
      fullDescription: item.fullDescription,
      featuresText: item.features.join("\n"),
      icon: item.icon,
    });
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditItem(null);
    setForm(EMPTY_FORM);
  }

  function handleTitleChange(title: string) {
    setForm((f) => ({
      ...f,
      title,
      slug: editItem ? f.slug : slugify(title),
    }));
  }

  async function handleSave() {
    setSaving(true);
    try {
      const features = form.featuresText
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      const data = editItem
        ? { ...editItem, ...form, features, slug: form.slug }
        : {
            ...form,
            features,
            id: form.slug || Date.now().toString(),
            order: items.length + 1,
          };
      const res = await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: editItem ? "update" : "add",
          data,
        }),
      });
      if (res.ok) {
        await loadItems();
        closeModal();
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!deleteId) return;
    setDeleting(true);
    try {
      const res = await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete", id: deleteId }),
      });
      if (res.ok) {
        await loadItems();
        setDeleteId(null);
      }
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-neutral-900">
            Services
          </h1>
          <p className="mt-1 text-neutral-500">
            {items.length} service{items.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          <Plus size={16} />
          Ajouter
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={24} className="animate-spin text-neutral-400" />
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50 text-left">
                <th className="w-8 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500"></th>
                <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Titre
                </th>
                <th className="hidden px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 md:table-cell">
                  Description courte
                </th>
                <th className="w-28 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {items.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-12 text-center text-neutral-400"
                  >
                    Aucun service. Ajoutez-en un !
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr
                    key={item.id}
                    className="transition-colors hover:bg-neutral-50"
                  >
                    <td className="px-4 py-3 text-neutral-300">
                      <GripVertical size={16} />
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-neutral-900">
                        {item.title}
                      </p>
                      <p className="font-mono text-xs text-neutral-400">
                        {item.slug}
                      </p>
                    </td>
                    <td className="hidden px-4 py-3 text-neutral-500 md:table-cell">
                      <p className="max-w-xs truncate">
                        {item.shortDescription}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEdit(item)}
                          className="flex items-center gap-1 rounded-lg border border-neutral-200 px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
                        >
                          <Pencil size={12} />
                          Modifier
                        </button>
                        <button
                          onClick={() => setDeleteId(item.id)}
                          className="flex items-center justify-center rounded-lg border border-red-200 p-1.5 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-5">
              <h3 className="font-heading text-xl font-bold text-neutral-900">
                {editItem ? "Modifier le service" : "Ajouter un service"}
              </h3>
              <button
                onClick={closeModal}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100"
              >
                <X size={18} />
              </button>
            </div>
            <div className="space-y-4 px-6 py-5">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Titre
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                  placeholder="Dépannage urgent"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Slug{" "}
                  <span className="font-normal normal-case text-neutral-400">
                    (auto-généré)
                  </span>
                </label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, slug: e.target.value }))
                  }
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 font-mono text-sm focus:border-primary-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Description courte
                </label>
                <textarea
                  value={form.shortDescription}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      shortDescription: e.target.value,
                    }))
                  }
                  rows={2}
                  className="w-full resize-y rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Description complète
                </label>
                <textarea
                  value={form.fullDescription}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      fullDescription: e.target.value,
                    }))
                  }
                  rows={4}
                  className="w-full resize-y rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Caractéristiques{" "}
                  <span className="font-normal normal-case text-neutral-400">
                    (une par ligne)
                  </span>
                </label>
                <textarea
                  value={form.featuresText}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, featuresText: e.target.value }))
                  }
                  rows={5}
                  className="w-full resize-y rounded-lg border border-neutral-200 px-3 py-2.5 font-mono text-sm focus:border-primary-900 focus:outline-none"
                  placeholder={
                    "Intervention rapide\nDevis gratuit\nGarantie décennale"
                  }
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Icône (nom Lucide)
                </label>
                <input
                  type="text"
                  value={form.icon}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, icon: e.target.value }))
                  }
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:border-primary-900 focus:outline-none"
                  placeholder="Wrench"
                />
              </div>
            </div>
            <div className="flex gap-3 px-6 pb-6">
              <button
                onClick={closeModal}
                className="flex-1 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              >
                Annuler
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !form.title}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
              >
                {saving && <Loader2 size={14} className="animate-spin" />}
                {saving ? "Sauvegarde..." : "Sauvegarder"}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="mb-2 font-heading text-lg font-bold text-neutral-900">
              Supprimer ce service ?
            </h3>
            <p className="mb-6 text-sm text-neutral-500">
              Cette action est irréversible.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              >
                Annuler
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
              >
                {deleting && <Loader2 size={14} className="animate-spin" />}
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
