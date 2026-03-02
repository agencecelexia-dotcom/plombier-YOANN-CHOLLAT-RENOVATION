# Deployer un nouveau client plombier

## Etape 1 — Dupliquer le repo

```bash
git clone https://github.com/agencecelexia-dotcom/plombier nouveau-plombier-[ville]
cd nouveau-plombier-[ville]
npm install
```

## Etape 2 — Remplir CLIENT.md via IA

Donne ce prompt a Claude (ou ChatGPT) :

> Voici le brief de mon client plombier : [colle le brief ici].
> Remplis CLIENT.md en suivant exactement le format existant.
> Chaque champ doit etre rempli ou laisser "" si inconnu.
> Ne modifie aucun autre fichier que CLIENT.md.

Le fichier `CLIENT.md` contient toutes les variables du site : identite, contact, horaires, services, temoignages, SEO, couleurs, etc.

## Etape 3 — Synchroniser

```bash
npm run sync-client
npm run dev
# Verifier sur http://localhost:3000
```

La commande `sync-client` lit `CLIENT.md` et regenere automatiquement `src/config/client.config.ts`. Tout le site se met a jour.

## Etape 4 — Deployer

```bash
git add .
git commit -m "client: [NOM_ENTREPRISE] — [VILLE]"
git push origin main
# Auto-deploie sur Vercel
```

## Panel Admin

- **URL** : `https://[domaine]/admin`
- **Password** : valeur de `ADMIN_PASSWORD` dans `CLIENT.md` (par defaut : `1234`)

Le panel admin contient :
- **Dashboard** : visites, clics CTA, formulaires, taux de conversion
- **Demandes** : liste des formulaires de contact recus avec gestion de statut
- **Contenu** : vue d'ensemble de la configuration client actuelle

## Les photos

Les photos dans `/public/images/` sont generiques pour le metier plombier.
Elles sont reutilisees pour chaque client — **ne pas les modifier**.

Arborescence :
```
public/images/
├── heroes/          — 7 images hero
├── sections/        — 2 images sections
├── pages/           — 10 images pages
└── realisations/    — 14 images avant/apres
```

## Variables disponibles

Toutes les variables sont centralisees dans `CLIENT.md`. Voici les sections :

| Section | Exemples de champs |
|---------|-------------------|
| Identite | Nom entreprise, dirigeant, genre |
| Contact | Telephone, email, adresse, ville, code postal |
| Horaires | Semaine, samedi, dimanche, urgence |
| Branding | Hue couleur primaire, hue couleur accent |
| Reseaux | Facebook, Instagram, Google, domaine |
| Legal | SIRET, RGE, assurance decennale |
| Chiffres | Experience, interventions, note Google, avis |
| Geo | Latitude, longitude |
| Communes | Liste ville:code_postal separee par \| |
| Services | 6 services avec titre, descriptions, icone, slug |
| Temoignages | 10 temoignages avec nom, note, texte, date |
| Admin | Mot de passe admin |
| SEO | Meta title, description, slogan |

## Architecture technique

- **Framework** : Next.js 16 (App Router) + TypeScript
- **Styling** : Tailwind CSS v4 + shadcn/ui
- **Animations** : Framer Motion
- **Hebergement** : Vercel
- **Donnees** : fichiers JSON locaux (`storage/`)
- **Admin** : interface integree (`/admin`)

## Workflow de modification

```
CLIENT.md (seul fichier a editer)
    ↓ npm run sync-client
src/config/client.config.ts (auto-genere)
    ↓ importe par
src/config/site.ts, services.ts, testimonials.ts, communes.ts
    ↓ utilise par
Toutes les pages et composants du site
```
