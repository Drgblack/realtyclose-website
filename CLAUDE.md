# CLAUDE.md — RealtyClose Website (Owner's Brief)

## Project Snapshot
- **Org:** Zaza Technologies → product: **RealtyClose**
- **Goal:** Marketing website for the RealtyClose Chrome/Gmail platform (launch EN now, add full DE localization).
- **Primary repo:** `github.com/Drgblack/realtyclose-website`
- **Default branch:** `master` (production-ready)
- **Active feature branch:** `feat/i18n-de` (German translation)
- **Hosting:** Vercel project `realtyclose-website`
- **Runtime:** Next.js 14 (App Router), Tailwind, `next-intl` for i18n
- **Secrets/ENV:** none required for static site

## Current State (EN = live baseline)
- EN content frozen (tag: `website-v1.0.0`).
- DE localization in progress; routes under `/de/*`.
- Navigation, CTAs, anchors, sitemap, and hreflang must work for both locales.

## i18n Architecture
- `i18n.ts`: `locales = ['en','de']`, `defaultLocale = 'en'`.
- `middleware.ts`: `next-intl` locale routing.
- App structure: `app/[locale]/...` (all pages live under a locale segment).
- Messages: `/messages/en.json`, `/messages/de.json`.
- Data access in Server Components: `const t = await getTranslations('<ns>')`.

## Language Switcher
- Component: `app/components/LanguageSwitcher.tsx` (client).
- Behavior: switches locale, keeps path and query; placed in header (desktop & mobile).
- A11y: `hrefLang`, `lang`, `aria-current`.

## SEO & Sitemap
- Each page defines `metadata.alternates.languages = { en: '/path', de: '/de/path' }`.
- Sitemap includes both locales and emits `<xhtml:link rel="alternate">`.
- Canonical: locale-specific URL.

## Content Files
- `/messages/en.json` (source of truth for copy)
- `/messages/de.json` (translations)
- Namespaces: `common`, `home`, `features`, `pricing`, `about`, `footer`, `faq`, plus other pages as needed.

## Dev & Build
```bash
npm i
npm run dev
# test: http://localhost:3000/ (EN), http://localhost:3000/de (DE)
npm run build
```

## Quality Gates

* No console errors in dev or prod.
* No "Event handlers in Client Component props" regressions.
* Lighthouse mobile ≥ 90 on Home (both locales).
* All nav links, CTAs, anchors functional.
* Language switch preserves route and query.

## How to Work

1. **Branching:** Create feature branches from `master`. Current: `feat/i18n-de`.
2. **Commits:** Conventional messages (e.g., `feat(i18n): add de/home.json`).
3. **PRs:** Include screenshots for EN & DE, note any new keys and missing translations.
4. **Rollbacks:** If a preview regresses, revert to tag `website-v1.0.0` baseline.

## Deliverables for this Sprint

* [x] Implement `[locale]` routing and middleware.
* [x] Add `LanguageSwitcher`.
* [x] Migrate pages under `app/[locale]/*`.
* [x] Provide `messages/de.json` (initial batch supplied).
* [ ] Update sitemap + hreflang.
* [ ] Pass QA checklist (EN + DE).

## Out of Scope (for now)

* Forms backend, blog CMS, pricing checkout logic.
* Additional locales beyond DE.

## Contacts / Decisions

* English copy is the source of truth.
* Prefer server components; only use client components when needed (e.g., LanguageSwitcher).
* Keep design consistent—don't change typography/spacing without explicit request.