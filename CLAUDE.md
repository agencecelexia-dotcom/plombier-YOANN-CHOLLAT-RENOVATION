# Plombier - Site Web Professionnel

## Projet
Site web pour un plombier professionnel. Repository: `agencecelexia-dotcom/plombier`.

## Stack technique
- **Framework**: Next.js 14+ (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icones**: Lucide React
- **Deploiement**: Vercel
- **Package manager**: npm

## Structure du projet
```
src/
  app/              # Pages et routes (App Router)
    layout.tsx      # Layout racine
    page.tsx        # Page d'accueil
    (routes)/       # Groupes de routes
  components/       # Composants reutilisables
    ui/             # Composants shadcn/ui
    sections/       # Sections de pages (Hero, Services, etc.)
    layout/         # Header, Footer, Navigation
  lib/              # Utilitaires et helpers
  styles/           # Styles globaux
  config/           # Configuration site (textes, metadata, etc.)
  assets/           # Images, fonts
public/             # Fichiers statiques
```

## Conventions de code
- Composants React : PascalCase (`ServiceCard.tsx`)
- Fichiers utilitaires : camelCase (`formatPhone.ts`)
- CSS classes : Tailwind utility-first, pas de CSS custom sauf necessite
- Pas de `any` en TypeScript - typer correctement
- Composants serveur par defaut, `"use client"` uniquement si necessaire
- Imports absolus avec `@/` (ex: `@/components/ui/button`)

## Conventions Git
- Commits en francais, concis et descriptifs
- Branches : `feature/nom`, `fix/nom`, `style/nom`
- Ne jamais push sur `main` directement sans confirmation

## Design
- Mobile-first responsive design
- Palette de couleurs definie dans le PRD
- Accessibilite WCAG 2.1 AA minimum
- Performance : Lighthouse score > 90 sur toutes les metriques
- Images optimisees (next/image, WebP/AVIF)
- Fonts optimisees (next/font)

## Images — IMPORTANT
**Conserver les images existantes du template.** Le dossier `public/images/` contient deja des photos reelles (heroes, sections, pages, realisations). Lors de la duplication/personnalisation du template :
1. **NE PAS supprimer ni remplacer les photos existantes** — elles sont generiques et reutilisables
2. **NE PAS ajouter de nouvelles photos** — le client les ajoutera via le panel admin (onglet Photos)
3. Les chemins sont declares dans `src/config/images.ts` — ne pas les modifier sauf si necessaire
4. Le composant `ImagePlaceholder` est utilise comme fallback quand aucune image n'est configuree
5. Le client peut remplacer les images via le panel admin ou en deposant ses fichiers dans `public/images/`

## SEO
- Metadata dynamiques par page
- Schema.org (LocalBusiness, Service, FAQPage)
- Sitemap.xml et robots.txt automatiques
- Open Graph et Twitter Cards

## Personnalisation du template — IMPORTANT
Ce repo est un **template reutilisable**. Toutes les donnees specifiques au client utilisent des placeholders `{VARIABLE}` :
- `{VILLE}`, `{COMMUNE_1}`, `{COMMUNE_2}`, `{COMMUNE_3}` — villes et communes
- `{ZONE_KM}` — rayon d'intervention
- `{NOM_ENTREPRISE}`, `{PRENOM_DIRIGEANT}`, etc. — identite

**Fichiers concernes par les placeholders :**
- `CLIENT.md` — fichier principal de configuration (source de verite)
- `src/config/realisations.ts` — champ `city` de chaque realisation
- `src/data/testimonials.ts` — champ `clientRole` de chaque temoignage
- `src/data/projects.ts` — champ `location` de chaque projet
- `src/components/admin/DashboardTab.tsx` — demo data `location`
- `src/components/admin/TemoignagesTab.tsx` — placeholder du formulaire
- `storage/submissions.json` — exemples de soumissions

**Lors de la personnalisation :** remplacer TOUS les `{VARIABLE}` par les vraies valeurs du client dans chaque fichier ci-dessus, puis lancer `npm run sync-client` pour regenerer `client.config.ts`.

## Regles importantes
- Ne jamais committer de fichiers `.env` ou credentials
- Toujours tester le responsive avant de valider
- Privilegier les Server Components pour le SEO
- Utiliser les skills disponibles (frontend-design, webapp-testing) pour la qualite
- Demander confirmation avant tout push ou action irreversible
