# Alina Kaplia — Luxury Social Media Manager

Marketing site for Alina Kaplia, a Vienna-based Social Media Manager & Content
Creator. Built with **TanStack Start** (React 19 + Vite 7) and **Tailwind CSS v4**.

## Stack

- TanStack Start v1 (SSR) + TanStack Router (file-based routing)
- React 19, TypeScript (strict)
- Tailwind CSS v4 with custom luxury design tokens
- lucide-react icons
- shadcn/ui component primitives

## Project structure

```
src/
├── assets/                  # Image/video asset metadata (CDN URLs)
├── components/
│   ├── common/              # Shared building blocks (SectionTitle)
│   ├── layout/              # Nav, Footer, Decor, FloatingBookButton
│   ├── sections/            # One file per landing-page section
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyMe.tsx
│   │   ├── VideoPortfolio.tsx
│   │   ├── Clients.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Certificates.tsx
│   │   ├── Pricing.tsx
│   │   └── Contact.tsx
│   └── ui/                  # shadcn/ui primitives
├── data/
│   ├── site.ts              # Contact info + Instagram link
│   └── content.ts           # Services, plans, testimonials, reels, clients…
├── hooks/
├── lib/
├── routes/
│   ├── __root.tsx           # HTML shell, fonts, global head metadata
│   ├── index.tsx            # Landing page composition
│   └── sitemap[.]xml.ts     # sitemap.xml route
├── router.tsx
├── server.ts
├── start.ts
└── styles.css               # Tailwind v4 tokens + custom utilities
```

## Scripts

```bash
bun install           # install dependencies
bun run dev           # start dev server (http://localhost:8080)
bun run build         # production build
```

## Editing content

All copy, pricing, testimonials, services, reels and client work live in
`src/data/content.ts`. Contact links live in `src/data/site.ts`. Update those
files instead of editing components to change site copy.

## Deployment

Any static/edge host that supports TanStack Start (Cloudflare Workers, Vercel,
Netlify). Push to GitHub and connect the repo to your host of choice.
