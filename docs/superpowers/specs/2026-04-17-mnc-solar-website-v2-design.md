# MNC Solar Website v2 — Design Spec

## Context

MNC Solar (Mahadeva And Company) is a solar installation company operating in Jharkhand and Bihar, India. They specialize in on-grid, off-grid, and hybrid solar systems ranging from 2 KW to 100 KW for residential, commercial, and institutional clients. The company has 200+ installations across mini-grids and institutions and 5+ years of experience.

The v1 site (on `main` branch) was a basic Next.js site with 4 pages. The v2 (this work, on `v2` branch) is a complete rebuild with a modern, professional design, richer content from a detailed company writeup, and a distinctive visual identity.

## Tech Stack

- **Framework:** Next.js 16 with App Router (already configured in repo)
- **UI:** React 19, Tailwind CSS 4 (zero-config)
- **Language:** TypeScript
- **Icons:** lucide-react
- **Images:** Stock photos from Unsplash, served via `next/image` with remote patterns
- **Dev:** Turbopack (`next dev --turbopack`)
- **Package manager:** bun (bun.lock in repo history)

## Design Direction

- **Layout:** Angled/dynamic hero with bold diagonal geometry
- **Color palette:** Deep navy (`#0f172a`) primary, warm amber/orange (`#f59e0b`) accent, white/light gray backgrounds (`#f8fafc`), slate text (`#64748b`, `#334155`)
- **Typography:** System font stack or Inter, bold headings, clean body text
- **Feel:** Professional, energetic, trustworthy — not generic "green energy" aesthetic

## Pages (5 total)

### 1. Home (`/`)

Five sections in order:

1. **Hero** — Angled dynamic layout with diagonal split. Left side: dark navy with tagline "Half a Lifetime of Free Electricity", subtitle about 200+ installations, two CTA buttons (Get Free Quote, Our Services). Right side: solar installation stock photo behind the diagonal.
2. **Stats Bar** — 4 floating cards overlapping the hero bottom: "200+ Installations", "5+ Years Experience", "₹0 Electricity Bill Goal", "25yr Panel Lifespan". Each card has amber top border.
3. **Services Preview** — "Our Solar Solutions" heading, 4 icon cards (On-Grid, Off-Grid, Hybrid, Institutional). Each with icon, title, one-line description. Links to `/services`.
4. **Environmental Impact** — Dark navy background section. "A 5 KW Solar Plant Offsets 6,462 kg CO₂ — equivalent to planting 252 trees." Financial savings callout: ₹60 lakh over 30 years.
5. **Final CTA** — Amber gradient background. "Ready to Go Solar?" with Call Now and WhatsApp buttons.

### 2. Why Solar (`/why-solar`)

- **Hero banner** — "Why Go Solar?" with compelling intro pitch
- **The Financial Case** — Monthly bill calculation: 5KW load → ₹12-16K/month → ₹2L/year → ₹60L over 30 years → ~₹1 Crore with interest. Household appliance list.
- **The Environmental Case** — Carbon footprint from coal (74-75% of India's electricity), greenhouse gases, climate change effects (extreme weather, health impacts, polar ice). WHO stat: 250,000 additional deaths/year by 2030-2050.
- **Solar Technology Deep Dive** — Accordion/expandable sections:
  - **Solar Panels** — Poly PERC (15-18%), Mono PERC (20-22%), TOPCon (24%), TOPCon Bifi (26%), HJY Bifi. Band gap explanation.
  - **Mounting Structures** — MMS types, materials (HDGI/GI, Aluminium AA 6063 T6, SS 304 fasteners), wind resistance (150-180 km/h), tilt angle (20-25° for Bihar/Jharkhand).
  - **Inverters** — String vs Micro, On-Grid vs Off-Grid vs Hybrid, Transformer vs Semiconductor. MPPT, net metering.
  - **Wiring & Connectors** — UV-resistant XLPE copper wire, voltage drop calculations, MC4 connectors, lugs.
  - **Batteries** — LiFePO4 (6000 cycles, 90% DoD) vs Lead-acid (3000 cycles, 70% DoD). BMS.
  - **Safety** — Earthing (copper/galvanized rod), lightning arresters (60m radius), fire extinguishers (CO2/ABC).

### 3. Why MNC Solar (`/why-mnc-solar`)

- **Hero** — "Why Choose MNC Solar?" with company mission
- **Key Benefits** — Icon cards: Electricity Cost Saving, Safeguard Environment, Low Maintenance, High Durability, Energy Security
- **Our Expertise** — 5+ years, trained professionals, on-grid/off-grid/hybrid, 2KW-100KW range
- **Case Study: The School Example** — Detailed scenario from writeup about varying loads, generator costs vs 24hr uninterrupted solar
- **Service Areas** — Bihar & Jharkhand with coverage map or region callout
- **CTA** — "Give us a chance and we promise you'd be our next satisfied customer"

### 4. Services (`/services`)

- **Page header** — "Our Solar Solutions" with capacity range subtitle
- **4 detailed service cards:**
  - **On-Grid Systems** — Grid-connected, net metering, bill reduction to zero, government subsidy eligible
  - **Off-Grid Systems** — Battery-based, complete energy independence, remote areas, 24hr availability
  - **Hybrid Systems** — Grid + battery, power during outages, best of both worlds, ideal for varying loads
  - **Institutional/Commercial** — Schools, offices, mini-grids, custom solutions for large and varying loads
- Each card: icon, title, description, feature list, capacity range
- Bottom CTA to contact

### 5. Contact (`/contact`)

- **Contact information displayed prominently:**
  - Phone: +91 9643805595 (click-to-call link)
  - Email: contact@mncsolar.com
  - Address: BMP-16, Rd Number 1, Maurya Vihar Colony, Khagaul, Patna, Bihar 801105
- **WhatsApp button** — Direct chat link
- **Optional:** Embedded Google Map for Patna office location
- **Service areas** callout: Jharkhand & Bihar

## Shared Components

### Header (`components/layout/Header.tsx`)
- Sticky top navigation
- Logo (text-based: "☀ MNC Solar" or similar with lucide Sun icon)
- 5 nav links: Home, Why Solar, Why MNC Solar, Services, Contact
- "Get Quote" amber CTA button (links to Contact)
- Mobile: hamburger menu with slide-out nav

### Footer (`components/layout/Footer.tsx`)
- Company name and tagline
- Quick links (all 5 pages)
- Contact info (phone, email, address)
- Service areas
- Copyright notice

### UI Components
- **ServiceCard** (`components/ui/ServiceCard.tsx`) — Reusable card with icon, title, description, features list
- **StatCard** (`components/ui/StatCard.tsx`) — Number + label card with amber accent
- **Accordion** (`components/ui/Accordion.tsx`) — Expandable section for technical content, click to expand/collapse

## Data & Constants (`lib/constants.ts`)

```typescript
CONTACT_INFO: { email, phone, address }
COMPANY_NAME: "Mahadeva And Company"
COMPANY_SHORT: "MNC Solar"
NAV_ITEMS: 5 items
SERVICES: 4 service definitions with features
SERVICE_AREAS: ["Jharkhand", "Bihar"]
```

## Images

All images sourced from Unsplash via direct URLs. Configure `next.config.ts` with:
```typescript
images: {
  remotePatterns: [{ hostname: 'images.unsplash.com' }]
}
```

Image needs:
- Hero: Large solar installation / solar farm
- Why Solar: Solar panels on rooftop, environmental imagery
- Why MNC Solar: Team/workers, Indian solar installation
- Services: Individual images per service type
- Contact: Office or location imagery

## File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── favicon.ico
│   ├── why-solar/page.tsx
│   ├── why-mnc-solar/page.tsx
│   ├── services/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── ServiceCard.tsx
│       ├── StatCard.tsx
│       └── Accordion.tsx
├── lib/
│   └── constants.ts
└── types/
    └── index.ts
```

## Verification

1. Run `bun install` and `bun run dev` — site should start on localhost:3000
2. Navigate all 5 pages — no broken links
3. Check mobile responsiveness at 375px width
4. Verify all images load from Unsplash
5. Click-to-call and WhatsApp links work
6. Accordion sections on Why Solar page expand/collapse correctly
7. Run `bun run build` — no TypeScript or build errors
