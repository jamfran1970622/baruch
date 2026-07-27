# Ferre Aceros Baruch

Marketing and quote-request website for **Ferre Aceros Baruch**, a hardware and construction-materials store in Alfonso López, Cali, Colombia. Built with Next.js (App Router) and Supabase.

## Features

- Bilingual UI (Spanish/English) via a client-side `LanguageContext`
- Home page with hero, trust bar, and product category highlights
- Product catalog (`/catalogo`) organized into Steel & Profiles, General Hardware, and Construction Supplies
- Quote request form (`/cotizar`) that submits to `/api/quotes` and stores requests in Supabase
- Contact page (`/contacto`) with address, phone numbers, embedded map, and social links
- Floating WhatsApp button and WhatsApp deep links throughout for direct customer contact
- "Brilla" financing callouts

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) (Postgres) for storing quote requests

## Project Structure

```
app/
  page.tsx              Home page
  catalogo/page.tsx      Product catalog
  cotizar/page.tsx       Quote request form
  contacto/page.tsx      Contact page
  api/quotes/route.ts    API route that inserts quote requests into Supabase
  layout.tsx             Root layout (Navbar, Footer, WhatsApp button)
components/
  Navbar.tsx, Footer.tsx, ProductCard.tsx, WhatsAppButton.tsx
context/
  LanguageContext.tsx    ES/EN language provider
lib/
  i18n.ts                Translation strings
  supabase.ts            Supabase client (anon + service role)
supabase/migrations/
  001_quote_requests.sql Schema for the quote_requests table
```

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment file and fill in your Supabase credentials:
   ```bash
   cp .env.local.example .env.local
   ```
   ```
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   SUPABASE_SERVICE_ROLE_KEY=
   ```
3. Apply the database migration in `supabase/migrations/001_quote_requests.sql` to your Supabase project (via the Supabase SQL editor or CLI) to create the `quote_requests` table.
4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the dev server          |
| `npm run build` | Build for production          |
| `npm run start` | Run the production build      |
| `npm run lint`  | Run ESLint                     |
