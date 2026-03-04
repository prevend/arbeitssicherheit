# Arbeitssicherheit MG -- Website MVP

Premium B2B-Website fuer Arbeitssicherheitsberatung in Moenchengladbach und am Niederrhein.

## Setup

```bash
npm install
npm run dev
```

Oeffne [http://localhost:3000](http://localhost:3000) im Browser.

## Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `npm run dev` | Entwicklungsserver starten (Port 3000) |
| `npm run build` | Produktions-Build erstellen |
| `npm start` | Produktionsserver starten |
| `npm run lint` | ESLint ausfuehren |

## Tech-Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **lucide-react** (Icons)
- Keine weiteren externen Abhaengigkeiten

## Projektstruktur

```
src/
  app/                          # Next.js Seiten (App Router)
    page.tsx                    # Startseite
    leistungen/page.tsx         # Leistungsuebersicht
    branchen/page.tsx           # Branchenseite
    ueber-uns/page.tsx          # Ueber-uns-Seite
    kontakt/page.tsx            # Kontaktseite mit Formular
    impressum/page.tsx          # Impressum (Platzhalter)
    datenschutz/page.tsx        # Datenschutz (Platzhalter)
    layout.tsx                  # Root Layout (Header + Footer)
    globals.css                 # Tailwind Config + globale Styles
  components/
    ui/                         # Basis-Komponenten
      button.tsx                # Button (primary/secondary/outline)
      card.tsx                  # Card mit Hover-Effekt
      section-header.tsx        # Sektions-Ueberschrift (Eyebrow + H2)
      accordion.tsx             # Accordion (FAQ)
    layout/                     # Layout-Komponenten
      header.tsx                # Sticky Header + Navigation
      mobile-nav.tsx            # Mobile Navigation Drawer
      footer.tsx                # Footer (4-spaltig)
    features/                   # Feature-Komponenten
      hero.tsx                  # Hero-Bereich (Startseite)
      services-grid.tsx         # Leistungs-Karten (6er Grid)
      process-steps.tsx         # Prozess-Schritte (4 Steps)
      industries-grid.tsx       # Branchen-Karten (8er Grid)
      testimonials.tsx          # Kundenstimmen (3 Cards)
      faq-section.tsx           # FAQ-Bereich
      cta-band.tsx              # Call-to-Action-Band
      contact-form.tsx          # Kontaktformular mit Validierung
  lib/
    content.ts                  # ALLE Website-Inhalte (Single Source of Truth)
research/                       # Research-Artefakte
  reference_analysis.md         # Analyse der Referenz-Website
  competitor_analysis.md        # Wettbewerber-Analyse (10 Anbieter)
  competitors_list.md           # Wettbewerber-Liste
  blueprint.md                  # Strategie-Blueprint
  design_system.md              # Design System Spezifikation
```

## Inhalte pflegen

**Alle Texte sind zentral in `src/lib/content.ts` gespeichert.**

### Firmendaten aendern

```typescript
// src/lib/content.ts
export const siteConfig = {
  companyName: "Arbeitssicherheit MG",
  phone: "[PLATZHALTER]",           // <-- Echte Telefonnummer eintragen
  email: "[PLATZHALTER]",           // <-- Echte E-Mail eintragen
  address: {
    street: "[PLATZHALTER]",        // <-- Echte Adresse eintragen
    zip: "[PLATZHALTER]",
    city: "Moenchengladbach",
  },
}
```

### Neue Leistung hinzufuegen

```typescript
// src/lib/content.ts -- services Array erweitern
export const services: Service[] = [
  // ... bestehende Leistungen
  {
    icon: "Wrench",                  // lucide-react Icon-Name
    title: "Neue Leistung",
    description: "Kurzbeschreibung",
    slug: "neue-leistung",
    details: {
      problem: "Das Problem des Kunden",
      solution: "Unsere Loesung",
      result: "Das Ergebnis",
      process: "Typischer Ablauf",
    },
  },
]
```

### Neue Branche hinzufuegen

```typescript
// src/lib/content.ts -- industries Array erweitern
export const industries: Industry[] = [
  // ... bestehende Branchen
  {
    icon: "Factory",
    title: "Neue Branche",
    risks: "Typische Gefaehrdungen",
    measures: "Relevante Massnahmen",
  },
]
```

### Neue Seite hinzufuegen

1. Verzeichnis unter `src/app/` erstellen: `src/app/neuer-bereich/`
2. `page.tsx` anlegen mit metadata-Export:
   ```typescript
   import type { Metadata } from "next"

   export const metadata: Metadata = {
     title: "Neuer Bereich",
     description: "Beschreibung fuer SEO",
   }

   export default function NeuerBereichPage() {
     return <main>...</main>
   }
   ```
3. Navigation in `content.ts` unter `navigation` erweitern

## Platzhalter ersetzen

Suche im Projekt nach `[PLATZHALTER]` -- das sind alle Stellen, an denen echte Daten eingetragen werden muessen:

- Firmendaten (Adresse, Telefon, E-Mail)
- Impressum (Handelsregister, USt-IdNr., Vertretungsberechtigte)
- Datenschutz (Verantwortlicher, Hosting-Anbieter)
- Team-Fotos und echte Qualifikationen
- Testimonials (echte Kundenstimmen nach Einwilligung)
- Trust-Badges (nur echte Zertifizierungen verwenden)

## Deployment

```bash
npm run build    # Statischen Build erstellen
npm start        # Produktionsserver starten
```

Oder auf Vercel deployen: `npx vercel`

## Was als Naechstes ausgebaut werden kann

- **Blog / Wissensbereich** -- SEO-Fachartikel (z.B. "Gefaehrdungsbeurteilung: Was Geschaeftsfuehrer wissen muessen")
- **Case Studies** -- Anonymisierte Projektbeispiele als Conversion-Element
- **Online-Terminbuchung** -- Calendly/Cal.com Integration fuer Erstgespraeche
- **Interaktiver Bedarfs-Check** -- Fragebogen: "Welche Arbeitsschutz-Pflichten habe ich?"
- **Google-Bewertungen** -- Integration von echten Google Reviews auf der Website
- **Cookie-Consent-Banner** -- z.B. mit CookieConsent oder eigenem Banner
- **Web-Analyse** -- Plausible Analytics oder Google Analytics 4
- **Schema.org Markup** -- LocalBusiness + FAQ strukturierte Daten
- **Mehrsprachigkeit** -- Englische Version fuer internationale Unternehmen
- **Dark Mode** -- Bereits vorbereitet ueber Tailwind dark: Prefix
