# MNC Solar Website v2 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 5-page modern, professional website for MNC Solar — a solar installation company in Bihar & Jharkhand — using Next.js 16, React 19, and Tailwind CSS 4 with an angled/dynamic visual design.

**Architecture:** Next.js App Router with 5 page routes, shared Header/Footer layout components, 3 reusable UI components (ServiceCard, StatCard, Accordion). All content is static (no backend/database). Images from Unsplash via `next/image` remote patterns.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript, lucide-react, bun

**Spec:** `docs/superpowers/specs/2026-04-17-mnc-solar-website-v2-design.md`

---

## File Map

| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies: next, react, react-dom, lucide-react, tailwindcss, @tailwindcss/postcss, typescript, @types/* |
| `next.config.ts` | Unsplash remote image patterns |
| `tsconfig.json` | TypeScript config with `@/*` path alias |
| `postcss.config.mjs` | PostCSS with @tailwindcss/postcss |
| `eslint.config.mjs` | ESLint with next/core-web-vitals |
| `src/types/index.ts` | TypeScript interfaces for ContactInfo, ServiceItem, NavItem, StatItem |
| `src/lib/constants.ts` | Company info, nav items, services data, stats data |
| `src/app/globals.css` | Tailwind import, CSS custom properties for color palette, utility classes |
| `src/app/layout.tsx` | Root layout with Header + Footer, Geist font, metadata |
| `src/components/ui/StatCard.tsx` | Stat display card (number + label + amber border) |
| `src/components/ui/ServiceCard.tsx` | Service card (icon + title + description + features) |
| `src/components/ui/Accordion.tsx` | Client component, expandable section for tech content |
| `src/components/layout/Header.tsx` | Client component, sticky nav, mobile hamburger, Get Quote CTA |
| `src/components/layout/Footer.tsx` | Footer with links, contact info, copyright |
| `src/app/page.tsx` | Homepage: hero, stats, services preview, environmental impact, CTA |
| `src/app/why-solar/page.tsx` | Why Solar: financial case, environmental case, tech deep dive with accordions |
| `src/app/why-mnc-solar/page.tsx` | Why MNC Solar: benefits, expertise, school case study, service areas |
| `src/app/services/page.tsx` | Services: 4 detailed service cards with features |
| `src/app/contact/page.tsx` | Contact: phone, email, address, WhatsApp, optional map |

---

### Task 1: Project Setup & Configuration

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`

- [ ] **Step 1: Create `package.json`**

Remove unused v1 deps (`date-fns`, `react-hook-form`). Keep core stack.

```json
{
  "name": "mncsolar",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^1.8.0",
    "next": "16.2.3",
    "react": "19.2.5",
    "react-dom": "19.2.5"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.3.5",
    "@tailwindcss/postcss": "^4.2.2",
    "@types/node": "^25.6.0",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "eslint": "^10.2.0",
    "eslint-config-next": "16.2.3",
    "tailwindcss": "^4.2.2",
    "typescript": "^6.0.2"
  }
}
```

- [ ] **Step 2: Create `next.config.ts`**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 3: Create `tsconfig.json`**

Use the same config from v1 — it's already correct with `@/*` path alias.

- [ ] **Step 4: Create `postcss.config.mjs`**

```javascript
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
```

- [ ] **Step 5: Create `eslint.config.mjs`**

Same as v1.

- [ ] **Step 6: Run `bun install`**

Run: `bun install`
Expected: Dependencies install successfully, `bun.lock` is generated.

- [ ] **Step 7: Commit**

```bash
git add package.json bun.lock next.config.ts tsconfig.json postcss.config.mjs eslint.config.mjs .gitignore
git commit -m "chore: set up project configuration for v2 rebuild"
```

---

### Task 2: Types, Constants & Global Styles

**Files:**
- Create: `src/types/index.ts`, `src/lib/constants.ts`, `src/app/globals.css`

- [ ] **Step 1: Create `src/types/index.ts`**

```typescript
export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string; // lucide-react icon name
  capacity: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}
```

- [ ] **Step 2: Create `src/lib/constants.ts`**

Define all company data, navigation, services, and stats. Services: On-Grid, Off-Grid, Hybrid, Institutional/Commercial. Stats: 200+ Installations, 5+ Years, ₹0 Bill Goal, 25yr Lifespan. Contact info with WhatsApp number. Nav items for all 5 pages.

- [ ] **Step 3: Create `src/app/globals.css`**

Tailwind import (`@import "tailwindcss"`), `@theme inline` block with color palette:
- Navy primary: `#0f172a`
- Amber accent: `#f59e0b`
- Light backgrounds: `#f8fafc`
- Slate text: `#64748b`, `#334155`

Custom utility classes: `.gradient-solar`, `.gradient-primary`, `.shadow-solar`. Body styling with Geist font fallback.

- [ ] **Step 4: Commit**

```bash
git add src/types/index.ts src/lib/constants.ts src/app/globals.css
git commit -m "feat: add types, constants, and global styles"
```

---

### Task 3: UI Components (StatCard, ServiceCard, Accordion)

**Files:**
- Create: `src/components/ui/StatCard.tsx`, `src/components/ui/ServiceCard.tsx`, `src/components/ui/Accordion.tsx`

- [ ] **Step 1: Create `StatCard.tsx`**

Server component. Props: `value: string`, `label: string`. Renders a card with amber top border, large bold value, small label text below.

- [ ] **Step 2: Create `ServiceCard.tsx`**

Server component. Props: `ServiceItem` from types. Renders icon (from lucide-react, use dynamic import or a mapped object), title, description, features list with checkmarks, capacity range badge.

- [ ] **Step 3: Create `Accordion.tsx`**

Client component (`"use client"`). Props: `title: string`, `children: React.ReactNode`, optional `defaultOpen: boolean`. Uses `useState` to toggle open/close. Animated chevron icon, smooth height transition. Uses `ChevronDown` from lucide-react.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add StatCard, ServiceCard, and Accordion UI components"
```

---

### Task 4: Layout Components (Header, Footer)

**Files:**
- Create: `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`

- [ ] **Step 1: Create `Header.tsx`**

Client component (`"use client"`). Sticky top nav with:
- Logo: `Sun` icon from lucide-react + "MNC Solar" text
- Desktop: 5 nav links horizontally, "Get Quote" amber button linking to `/contact`
- Mobile: hamburger `Menu`/`X` icon toggle, slide-out nav panel
- Uses `NAV_ITEMS` from constants
- Active link highlighting with `usePathname()` from `next/navigation`
- Background: `#0f172a` (dark navy)

- [ ] **Step 2: Create `Footer.tsx`**

Server component. 4-column grid on desktop, stacked on mobile:
- Col 1: Company name, tagline, brief description
- Col 2: Quick Links (all 5 pages)
- Col 3: Contact info (phone, email, address)
- Col 4: Service areas (Bihar, Jharkhand)
- Bottom: copyright with current year
- Background: `#0f172a`

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/
git commit -m "feat: add Header and Footer layout components"
```

---

### Task 5: Root Layout & Verify Dev Server

**Files:**
- Create: `src/app/layout.tsx`

- [ ] **Step 1: Create `src/app/layout.tsx`**

Import Geist and Geist_Mono fonts. Set metadata: title "MNC Solar - Solar Solutions for Jharkhand & Bihar", description about the company. Wrap children with `<Header />` and `<Footer />`. Apply font variables and `antialiased` class.

- [ ] **Step 2: Create a minimal `src/app/page.tsx` placeholder**

Just enough to verify the dev server starts:
```tsx
export default function HomePage() {
  return <div className="p-8"><h1>MNC Solar v2</h1></div>;
}
```

- [ ] **Step 3: Start dev server and verify**

Run: `bun run dev`
Expected: Server starts on localhost:3000. Page renders with Header, placeholder content, and Footer. No console errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat: add root layout with header and footer"
```

---

### Task 6: Homepage

**Files:**
- Modify: `src/app/page.tsx` (replace placeholder)

- [ ] **Step 1: Build the Hero section**

Angled dynamic layout with diagonal split using CSS `clip-path` or skewed pseudo-element:
- Left side (dark navy `#0f172a`): subtitle "Jharkhand & Bihar's Trusted Solar Partner" in amber, heading "Half a Lifetime of Free Electricity", body text about 200+ installations, two buttons (Get Free Quote → `/contact`, Our Services → `/services`)
- Right side: Unsplash solar installation image via `next/image` with `fill` and `object-cover`
- The diagonal is created by a CSS clip-path on the image container or an angled overlay

- [ ] **Step 2: Build the Stats Bar section**

4 `StatCard` components in a flex/grid row, positioned to overlap the hero bottom with negative margin. Use stats from `STATS` constant. Cards have white background, amber top border, subtle shadow.

- [ ] **Step 3: Build the Services Preview section**

"Our Solar Solutions" heading, "From 2 KW residential to 100 KW commercial" subtitle. 4 icon cards in a grid. Each card: lucide icon, service title, one-line description. Entire card links to `/services`. Light background `#f8fafc`.

- [ ] **Step 4: Build the Environmental Impact section**

Dark navy `#0f172a` background. Two-column layout:
- Left: "Environmental Impact" label in amber, "A 5 KW Solar Plant Offsets" heading, two big stat callouts (6,462 kg CO₂, 252 equivalent trees), financial savings text (₹60 lakh over 30 years)
- Right: Unsplash nature/environmental image

- [ ] **Step 5: Build the Final CTA section**

Amber gradient background (`#f59e0b` to `#d97706`). Centered text: "Ready to Go Solar?" heading, subtitle. Two buttons: Call Now (tel: link) and WhatsApp (wa.me link). Dark text on amber.

- [ ] **Step 6: Verify in browser**

Run dev server, check all 5 sections render correctly. Test mobile responsiveness at 375px. Verify images load from Unsplash. Verify CTA links work (tel:, wa.me).

- [ ] **Step 7: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: build homepage with hero, stats, services, impact, and CTA sections"
```

---

### Task 7: Why Solar Page

**Files:**
- Create: `src/app/why-solar/page.tsx`

- [ ] **Step 1: Build page hero and financial case section**

Hero banner: "Why Go Solar?" heading with compelling intro from writeup ("How would you like free electricity...not for a day...but for 25-30 years").

Financial case section:
- List of household appliances (from writeup)
- Monthly bill calculation: 5KW load → ₹12-16K/month at ₹8/unit → ₹2L/year → ₹60L over 30 years → ~₹1 Crore with interest
- Visual callout cards for the key numbers

- [ ] **Step 2: Build the environmental case section**

Content from the writeup:
- Coal generates 74-75% of India's electricity
- Greenhouse gases, climate change effects
- WHO stat: 250,000 additional deaths/year by 2030-2050
- Climate change impacts: extreme weather, health, food/water insecurity
- Call to action: "Is it not late enough that we realize this now and act upon it"

- [ ] **Step 3: Build the Solar Technology Deep Dive section**

6 `Accordion` components, each containing detailed technical content from the writeup:

1. **Solar Panels** — Poly PERC (15-18%), Mono PERC (20-22%), TOPCon (24%), TOPCon Bifi (26%), HJY Bifi. Band gap explanation (400-1100nm). TOPCon Bifi specs (575-620W, ~50V Voc, ~12A Imp).
2. **Mounting Structures** — MMS materials: HDGI/GI (120-150 microns, 650 GSM, IS 2062:2011), AA 6063 T6 aluminum, SS 304 fasteners, Galvalume. Wind: 150-180 km/h. Tilt: 20-25° for Bihar/Jharkhand (near Tropic of Cancer 23.5°).
3. **Inverters** — String vs Micro, On-Grid vs Off-Grid vs Hybrid, Transformer vs Semiconductor. MPPT explanation. Net metering.
4. **Wiring & Connectors** — UV-resistant tinned copper XLPE cable. Voltage drop <3%. 1 sqmm = 8-10A. MC4 connectors (4sqmm DC). Lugs.
5. **Batteries** — LiFePO4 (6000 cycles, 90% DoD, BMS) vs Lead-acid (3000 cycles, 70% DoD, ~5yr life). 150Ah 12V example.
6. **Safety** — Earthing (copper/galvanized rod, 3ft depth). Lightning arrester (60m radius). Fire extinguishers (CO2/ABC).

- [ ] **Step 4: Verify in browser**

Navigate to `/why-solar`. All sections render. Accordions expand/collapse. Content is readable and well-formatted. Mobile responsive.

- [ ] **Step 5: Commit**

```bash
git add src/app/why-solar/
git commit -m "feat: build Why Solar page with financial, environmental, and technical content"
```

---

### Task 8: Why MNC Solar Page

**Files:**
- Create: `src/app/why-mnc-solar/page.tsx`

- [ ] **Step 1: Build page hero and benefits section**

Hero: "Why Choose MNC Solar?" with mission statement.

5 benefit cards with lucide icons:
- Electricity Cost Saving — bring bill to zero
- Safeguard Environment — clean, green, no greenhouse gases
- Low Maintenance — periodic panel cleaning
- High Durability — panels last 25+ years
- Energy Security — uninterrupted supply, hedge against rising costs

- [ ] **Step 2: Build expertise and case study sections**

Expertise section: 5+ years experience, trained professionals, on-grid/off-grid/hybrid, 2KW-100KW range.

School case study (from writeup): School with heavy daytime load (hundreds of fans/lights) but minimal night load. Problem: generator for every outage — cost of diesel, maintenance, manpower, dark periods. Solution: 24hr uninterrupted solar with MNC Solar. No generator, no dedicated manpower.

- [ ] **Step 3: Build service areas and CTA sections**

Service areas: Bihar & Jharkhand prominently displayed.

Final CTA: "Not many can meet our expertise... Give us a chance to work for you and we promise that you would be our next satisfied and happy customer." Call/WhatsApp buttons.

- [ ] **Step 4: Verify in browser**

Navigate to `/why-mnc-solar`. All sections render correctly. Mobile responsive.

- [ ] **Step 5: Commit**

```bash
git add src/app/why-mnc-solar/
git commit -m "feat: build Why MNC Solar page with benefits, case study, and service areas"
```

---

### Task 9: Services Page

**Files:**
- Create: `src/app/services/page.tsx`

- [ ] **Step 1: Build page header and service cards**

Header: "Our Solar Solutions" with subtitle "From 2 KW to 100 KW — we have the right system for you."

4 `ServiceCard` components using `SERVICES` data from constants:
1. On-Grid Systems — Grid-connected, net metering, bill reduction, government subsidy eligible
2. Off-Grid Systems — Battery-based, complete independence, remote areas, 24hr
3. Hybrid Systems — Grid + battery, outage protection, varying loads
4. Institutional/Commercial — Schools, offices, mini-grids, custom solutions

Each card rendered with full features list.

- [ ] **Step 2: Build bottom CTA**

CTA section: "Need help choosing the right system?" with link to contact page.

- [ ] **Step 3: Verify in browser**

Navigate to `/services`. All 4 cards render with icons, descriptions, features. Mobile responsive — cards stack on small screens.

- [ ] **Step 4: Commit**

```bash
git add src/app/services/
git commit -m "feat: build Services page with 4 service cards"
```

---

### Task 10: Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Build contact information display**

Page header: "Get In Touch"

Three info cards:
- Phone: `+91 9643805595` with `tel:` link and `Phone` icon
- Email: `contact@mncsolar.com` with `mailto:` link and `Mail` icon
- Address: Full Patna address with `MapPin` icon

Prominent WhatsApp button: green background, links to `https://wa.me/919643805595`

- [ ] **Step 2: Build service areas section**

"We Serve" section: Bihar and Jharkhand with `MapPin` icons. Brief note about coverage.

- [ ] **Step 3: Verify in browser**

Navigate to `/contact`. All contact info renders. Click-to-call link works. WhatsApp link opens correctly. Mobile responsive.

- [ ] **Step 4: Commit**

```bash
git add src/app/contact/
git commit -m "feat: build Contact page with phone, email, address, and WhatsApp"
```

---

### Task 11: Final Verification & Build

- [ ] **Step 1: Navigate all pages**

Visit each page in browser: `/`, `/why-solar`, `/why-mnc-solar`, `/services`, `/contact`. Verify:
- No broken links in nav or CTAs
- All Unsplash images load
- Consistent styling across pages
- Footer renders correctly on each page

- [ ] **Step 2: Test mobile responsiveness**

Check at 375px width:
- Hamburger menu opens/closes
- Hero layouts adapt
- Cards stack vertically
- Text is readable
- Accordions work

- [ ] **Step 3: Run production build**

Run: `bun run build`
Expected: Build succeeds with no TypeScript or build errors.

- [ ] **Step 4: Run lint**

Run: `bun run lint`
Expected: No lint errors.

- [ ] **Step 5: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: address build and lint issues"
```
