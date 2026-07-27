# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # run ESLint (next lint)
```

There is no test suite in this repository.

### Environment

Copy `.env.local.example` to `.env.local` and set:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Database schema changes go in `supabase/migrations/` (currently a single migration, `001_quote_requests.sql`) and must be applied to the Supabase project manually (SQL editor or CLI) — there is no migration-runner wired into this repo.

## Architecture

This is a Next.js 14 App Router site for Ferre Aceros Baruch, a hardware/construction-materials store in Cali, Colombia. It's a marketing site with one dynamic feature: a quote-request form backed by Supabase.

**i18n is hand-rolled, not a library.** `lib/i18n.ts` exports a single `translations` object keyed by `es`/`en`, each holding the full string tree for the site (nav, hero, catalog items, form labels, etc.). `context/LanguageContext.tsx` wraps the app (`app/layout.tsx`) in a client-side provider that holds the current `lang` in state, persists it to `localStorage`, and exposes `t` (the resolved translation subtree for the current language) via `useLanguage()`. Every page/component that renders text is a `"use client"` component that calls `useLanguage()` — there is no server-side locale routing (no `/es`/`/en` paths). When adding UI copy, add keys to **both** language blocks in `lib/i18n.ts` in parallel rather than hardcoding strings.

**Catalog data lives in the translation tree, not a database.** `t.catalog.{steel,hardware,supplies}.items` in `lib/i18n.ts` is the source of truth for product listings shown on `/catalogo` (rendered via `ProductCard`). There's no products table — adding/editing catalog items means editing `lib/i18n.ts` directly (in both languages).

**Supabase has two clients with different privilege levels** (`lib/supabase.ts`):
- `supabase` — anon key, safe for client-side use.
- `createServiceClient()` — service-role key, used only server-side (currently only in `app/api/quotes/route.ts`) to bypass RLS when inserting quote requests.

**Quote flow:** `/cotizar` (`app/cotizar/page.tsx`) is a client form (wrapped in `Suspense` because it reads a `?category=` search param, e.g. from a `ProductCard` "get quote" link) that POSTs JSON to `app/api/quotes/route.ts`. That route validates required fields (`name`, `phone`, `category`) and inserts into the `quote_requests` table via the service-role client. There is no email/notification side effect yet — follow-up is manual, and the success screen nudges the user to also message via WhatsApp.

**WhatsApp is the primary CTA throughout the site**, via hardcoded `wa.me/573116201961` links (hero, catalog empty state, Brilla financing banner, `WhatsAppButton` floating action button in `app/layout.tsx`, contact page). There's no shared constant for this number — it's duplicated across components.

**Styling:** Tailwind with brand colors declared in `tailwind.config.ts` (`brand.yellow #FFC107`, `brand.black #1A1A1A`, `brand.dark #111111`), but most components currently use the raw hex values (e.g. `bg-[#FFC107]`) directly rather than the `brand-*` utility classes — match existing hex usage for consistency within a file, or migrate to `brand-*` classes when touching a section (not required, just consistency to be aware of).

**Path alias:** `@/*` maps to the repo root (`tsconfig.json`), e.g. `@/lib/i18n`, `@/context/LanguageContext`.
