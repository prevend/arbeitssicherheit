# SEO-Agent Konventionen (Richtlinien & Checklisten)

## Zustaendigkeit

Der SEO-Agent ist verantwortlich fuer alle SEO-Richtlinien, Keyword-Strategien, Meta-Tag-Vorgaben und Schema.org-Empfehlungen. Er implementiert NICHT selbst, sondern liefert praezise SEO-Specs als Anweisungen an andere Agenten:

- **An Code-Agent**: Meta-Tags, Schema.org Templates, robots/sitemap Specs, technische SEO-Vorgaben
- **An Text-Agent**: Keyword-Briefings pro Seite, Content-Laengen, Featured-Snippet-Vorgaben
- **An CRO-Agent**: SEO-relevante Conversion-Daten, Landingpage-Performance-Metriken

### Arbeitsweise
- SEO-Specs werden als strukturierte Kommentare oder Docs geliefert
- Jede neue Seite erhaelt ein SEO-Briefing BEVOR die Implementierung beginnt
- SEO-Reviews erfolgen nach der Implementierung anhand der Checkliste (Abschnitt 8)

---

## 1. Technisches SEO Richtlinien

### Schema.org / JSON-LD

Fuer jede Seite das passende Schema.org Markup als JSON-LD definieren. Der Code-Agent implementiert dies im `<head>` via Next.js Metadata API oder als `<script type="application/ld+json">` in der jeweiligen `page.tsx`.

#### LocalBusiness (global, auf jeder Seite)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Arbeitssicherheit MG",
  "description": "Fachkraft fuer Arbeitssicherheit in Moenchengladbach — Gefaehrdungsbeurteilungen, Unterweisungen und Arbeitsschutzberatung fuer KMU",
  "url": "https://www.arbeitssicherheit-mg.de",
  "telephone": "+49-XXXX-XXXXXXX",
  "email": "info@arbeitssicherheit-mg.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Strasse]",
    "addressLocality": "Moenchengladbach",
    "addressRegion": "NW",
    "postalCode": "[PLZ]",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[Breitengrad]",
    "longitude": "[Laengengrad]"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Moenchengladbach"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Niederrhein"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Nordrhein-Westfalen"
    }
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  },
  "sameAs": []
}
```

#### Service (pro Leistungsseite)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Leistungsname]",
  "description": "[Kurzbeschreibung der Leistung, 150-160 Zeichen]",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Arbeitssicherheit MG"
  },
  "areaServed": {
    "@type": "City",
    "name": "Moenchengladbach"
  },
  "serviceType": "[Kategorie, z.B. Arbeitsschutzberatung]"
}
```

#### FAQPage (fuer Seiten mit FAQ-Bereich)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Frage mit Long-Tail-Keyword]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Praezise Antwort, 2-3 Saetze]"
      }
    }
  ]
}
```

#### BreadcrumbList (auf allen Unterseiten)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Startseite",
      "item": "https://www.arbeitssicherheit-mg.de"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Seitenname]",
      "item": "https://www.arbeitssicherheit-mg.de/[pfad]"
    }
  ]
}
```

### robots.ts Konventionen

Vorgabe fuer den Code-Agent — Datei `src/app/robots.ts`:
```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: 'https://www.arbeitssicherheit-mg.de/sitemap.xml',
  }
}
```

### sitemap.ts Konventionen

Vorgabe fuer den Code-Agent — Datei `src/app/sitemap.ts`:
```typescript
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.arbeitssicherheit-mg.de'

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/leistungen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/branchen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ueber-uns`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Einzelne Leistungsseiten
    // Einzelne Branchenseiten
    { url: `${baseUrl}/impressum`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
```

### Core Web Vitals Zielwerte

Diese Zielwerte muessen bei jeder Implementierung eingehalten werden:

| Metrik | Zielwert | Bewertung |
|--------|----------|-----------|
| LCP (Largest Contentful Paint) | < 2.5s | Gut |
| CLS (Cumulative Layout Shift) | < 0.1 | Gut |
| INP (Interaction to Next Paint) | < 100ms | Gut (Ziel) |
| TTFB (Time to First Byte) | < 800ms | Gut |
| FCP (First Contentful Paint) | < 1.8s | Gut |

Massnahmen fuer den Code-Agent:
- Server Components als Default (reduziert Client-JS)
- Images mit `next/image` und `priority` fuer Above-the-fold
- Fonts mit `next/font` laden (kein Layout Shift)
- Keine Layout-verschiebenden Elemente ohne definierte Dimensionen
- Lazy Loading fuer Below-the-fold Content

### Canonical URLs & URL-Struktur

Alle URLs folgen diesem Schema — lowercase, deutsch, ohne Umlaute:

| Seite | URL | Priority |
|-------|-----|----------|
| Startseite | `/` | 1.0 |
| Leistungen Uebersicht | `/leistungen` | 0.9 |
| Einzelne Leistung | `/leistungen/[slug]` | 0.8 |
| Branchen Uebersicht | `/branchen` | 0.8 |
| Einzelne Branche | `/branchen/[slug]` | 0.7 |
| Ueber uns | `/ueber-uns` | 0.7 |
| Kontakt | `/kontakt` | 0.8 |
| Impressum | `/impressum` | 0.3 |
| Datenschutz | `/datenschutz` | 0.3 |

Regeln:
- Canonical URL immer setzen (`metadata.alternates.canonical`)
- Trailing Slashes vermeiden
- Keine Parameter in indexierten URLs
- Umlaute in URLs ersetzen: ae, oe, ue, ss (z.B. `/ueber-uns`, nicht `/über-uns`)
- Bindestriche als Worttrenner, keine Unterstriche

### Image Optimization

Vorgaben fuer den Code-Agent bei jedem `<Image>` Element:

```tsx
import Image from 'next/image'

// Above-the-fold: priority + sizes
<Image
  src="/images/hero-arbeitssicherheit.webp"
  alt="Fachkraft fuer Arbeitssicherheit bei der Betriebsbegehung in Moenchengladbach"
  width={1200}
  height={630}
  priority
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
/>

// Below-the-fold: lazy loading (default)
<Image
  src="/images/gefaehrdungsbeurteilung.webp"
  alt="Gefaehrdungsbeurteilung erstellen — Checkliste und Dokumentation"
  width={800}
  height={450}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

Alt-Text Konventionen:
- Beschreibend + Keyword wenn natuerlich passend
- Keine Keyword-Stuffing in Alt-Texten
- Format: "[Was ist zu sehen] — [Kontext/Keyword]"
- Beispiele:
  - Gut: "Sicherheitsingenieur prueft Maschine in Produktionshalle"
  - Gut: "Checkliste fuer Gefaehrdungsbeurteilung nach ArbSchG"
  - Schlecht: "Arbeitssicherheit Moenchengladbach Sifa Gefaehrdungsbeurteilung beste Firma"
- Dekorative Bilder: `alt=""` (leerer String, nicht weglassen)

---

## 2. On-Page SEO Regeln

### Meta-Tags

Vorgaben fuer `export const metadata` in jeder `page.tsx`:

#### Title Tag
- **Laenge**: 50-60 Zeichen (Google schneidet bei ~60 ab)
- **Aufbau**: `[Primary Keyword] — [Nutzen/Differenzierung] | Arbeitssicherheit MG`
- **Beispiele**:
  - Startseite: `Arbeitssicherheit Moenchengladbach — Ihr Partner fuer Arbeitsschutz | Arbeitssicherheit MG`
  - Leistung: `Gefaehrdungsbeurteilung erstellen lassen — Rechtssicher nach ArbSchG | Arbeitssicherheit MG`
  - Branche: `Arbeitssicherheit im Handwerk — Schutz fuer Ihr Team | Arbeitssicherheit MG`
- Primary Keyword moeglichst am Anfang platzieren
- Brand-Name am Ende nach Pipe-Zeichen

#### Meta-Description
- **Laenge**: 150-160 Zeichen
- **Aufbau**: `[Nutzenversprechen mit Primary Keyword]. [Differenzierung]. [CTA]`
- **Pflichtbestandteile**: Primary Keyword + Call-to-Action
- **Beispiele**:
  - "Gefaehrdungsbeurteilung vom Experten: Wir erstellen Ihre GBU rechtssicher nach ArbSchG. 20+ Jahre Erfahrung. Jetzt kostenlose Erstberatung anfordern!"
  - "Arbeitssicherheit in Moenchengladbach: Ihr Sifa-Partner fuer KMU. DGUV-konforme Betreuung, Unterweisungen & Begehungen. Kontaktieren Sie uns!"

#### Template fuer den Code-Agent
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Primary Keyword] — [Nutzen] | Arbeitssicherheit MG',
  description: '[150-160 Zeichen: Nutzen + Keyword + CTA]',
  alternates: {
    canonical: 'https://www.arbeitssicherheit-mg.de/[pfad]',
  },
  openGraph: {
    title: '[Kann laenger sein als Title Tag, 60-90 Zeichen]',
    description: '[Kann identisch mit Meta-Description sein]',
    url: 'https://www.arbeitssicherheit-mg.de/[pfad]',
    siteName: 'Arbeitssicherheit MG',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/og/[seitenname]-og.png',
        width: 1200,
        height: 630,
        alt: '[Beschreibender Alt-Text]',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### Ueberschriften-Hierarchie

- **H1**: Genau eine pro Seite, enthaelt das Haupt-Keyword
  - Unique fuer jede Seite — nie doppelte H1s im Projekt
  - Haupt-Keyword moeglichst am Anfang
  - Max. 60 Zeichen empfohlen
- **H2**: Gliedert Hauptabschnitte, enthaelt Sekundaer-Keywords
  - 3-6 H2 pro Seite als Richtwert
  - Jede H2 deckt einen thematischen Aspekt ab
- **H3**: Unterabschnitte innerhalb einer H2, Long-Tail-Keywords
- Keine Ebenen ueberspringen (H1 > H2 > H3, nie H1 > H3)
- Keine H-Tags fuer Styling-Zwecke missbrauchen

### Keyword-Platzierung auf der Seite

| Position | Anforderung |
|----------|-------------|
| Title Tag | Primary Keyword, moeglichst am Anfang |
| Meta-Description | Primary Keyword + CTA |
| H1 | Primary Keyword |
| Erster Absatz | Primary Keyword in den ersten 100 Woertern |
| H2-Tags | Sekundaer-Keywords verteilen |
| Body Text | Keyword-Dichte 1-2% (natuerlich, kein Stuffing) |
| Alt-Texte | Keyword wenn natuerlich passend |
| URL-Slug | Primary Keyword (kurz, z.B. `/gefaehrdungsbeurteilung`) |

### Internal Linking Strategie (Hub-and-Spoke)

Struktur:
```
Startseite (Hub)
  |
  +-- Leistungen (Hub)
  |     +-- Gefaehrdungsbeurteilung (Spoke)
  |     +-- Sifa-Betreuung (Spoke)
  |     +-- Unterweisungen (Spoke)
  |     +-- Begehungen (Spoke)
  |
  +-- Branchen (Hub)
  |     +-- Handwerk (Spoke)
  |     +-- Industrie (Spoke)
  |     +-- Buero (Spoke)
  |
  +-- Ueber uns (Spoke)
  +-- Kontakt (Spoke)
```

Regeln:
- Hub-Seiten verlinken auf alle zugehoerigen Spokes
- Spokes verlinken zurueck zum Hub und untereinander (wenn thematisch passend)
- Jede Leistungsseite verlinkt auf relevante Branchenseiten und umgekehrt
- Ankertexte enthalten Keywords (nicht "hier klicken" oder "mehr erfahren" als Ankertext)
- Maximal 3-5 interne Links pro 500 Woerter
- Kontakt-Seite wird von jeder Seite ueber CTAs verlinkt

---

## 3. Content SEO

### Keyword-Clustering nach Suchintention

#### Branded Keywords (Markensuche)
- "Arbeitssicherheit MG", "Arbeitssicherheit Moenchengladbach"
- Zielseite: Startseite

#### Commercial Keywords (Kaufabsicht)
- "Fachkraft fuer Arbeitssicherheit beauftragen"
- "Gefaehrdungsbeurteilung erstellen lassen"
- "Sifa extern beauftragen"
- "Arbeitsschutz Beratung Kosten"
- Zielseiten: Leistungsseiten, Kontakt

#### Informational Keywords (Wissenssuche)
- "Was ist eine Gefaehrdungsbeurteilung"
- "Pflichten Arbeitgeber Arbeitsschutz"
- "DGUV Vorschrift 2 erklaert"
- "Wann brauche ich eine Sifa"
- Zielseiten: Leistungsseiten (FAQ-Bereich), Branchenseiten

#### Local Keywords (Lokale Suche)
- "Arbeitssicherheit Moenchengladbach"
- "Sifa Niederrhein"
- "Arbeitsschutz Beratung NRW"
- "Fachkraft Arbeitssicherheit Moenchengladbach"
- Zielseiten: Startseite, Kontakt, alle Seiten via LocalBusiness Schema

### Primaere Keywords pro Seite

| Seite | Primary Keyword | Sekundaere Keywords |
|-------|----------------|---------------------|
| Startseite | Arbeitssicherheit Moenchengladbach | Arbeitsschutz, Sifa, Fachkraft fuer Arbeitssicherheit |
| Leistungen | Arbeitssicherheit Leistungen | Arbeitsschutz Beratung, Sifa Betreuung |
| Gefaehrdungsbeurteilung | Gefaehrdungsbeurteilung erstellen | GBU, ArbSchG § 5, Gefaehrdungsanalyse |
| Sifa-Betreuung | Fachkraft fuer Arbeitssicherheit | Sifa extern, DGUV Vorschrift 2, sicherheitstechnische Betreuung |
| Unterweisungen | Unterweisung Arbeitsschutz | Sicherheitsunterweisung, ArbSchG § 12, jaehrliche Unterweisung |
| Begehungen | Arbeitsschutz Begehung | Betriebsbegehung, Sicherheitsbegehung, Maengelprotokoll |
| Branchen | Arbeitssicherheit Branchen | branchenspezifischer Arbeitsschutz |
| Handwerk | Arbeitssicherheit Handwerk | Baustellensicherheit, PSA, DGUV Vorschrift 38 |
| Industrie | Arbeitssicherheit Industrie | Maschinensicherheit, Gefahrstoffe, Laermschutz |
| Ueber uns | Ueber Arbeitssicherheit MG | Erfahrung, Qualifikation, Sicherheitsingenieur |
| Kontakt | Kontakt Arbeitssicherheit | Erstberatung, Angebot anfordern |

### Featured Snippets Optimierung

Ziel: Position 0 bei Google fuer relevante Suchanfragen.

#### FAQ-Schema
- Auf jeder Leistungsseite mindestens 4-6 FAQ-Eintraege
- Fragen als exakte Suchanfragen formulieren ("Was kostet eine Gefaehrdungsbeurteilung?")
- Antworten praezise in 2-3 Saetzen, dann Detail
- FAQ-Schema (JSON-LD) zusaetzlich zur visuellen Darstellung

#### Listen-Snippets
- Geordnete Schritte: "So erstellen wir Ihre Gefaehrdungsbeurteilung: 1. Bestandsaufnahme, 2. ..."
- Mit H2/H3 + nummerierten Listen strukturieren

#### Tabellen-Snippets
- Vergleichstabellen (z.B. "Regelbetreuung vs. alternative Betreuung")
- Anforderungstabellen (z.B. "Pflichten nach Mitarbeiterzahl")

### Textlaengen nach Seitentyp

(Abgestimmt mit Text-Agent — siehe `docs/text-agent/CLAUDE.md`)

| Seitentyp | Wortanzahl | SEO-Hinweis |
|-----------|------------|-------------|
| Startseite | 400-600 | Keywords in Hero + Intro, Schema.org LocalBusiness |
| Leistungsseite | 800-1200 | Deep Content, FAQ-Schema, Service-Schema |
| Branchenseite | 1000-1500 | Ausfuehrlich, viele Long-Tail-Keywords |
| Ueber uns | 400-600 | E-E-A-T Signale (Erfahrung, Expertise, Trust) |
| Kontakt | 150-300 | NAP-Daten, LocalBusiness-Schema |
| Impressum/Datenschutz | nach Bedarf | noindex optional, Canonical setzen |

---

## 4. Lokales SEO

### NAP-Konsistenz (Name, Address, Phone)

NAP-Daten muessen ueberall IDENTISCH erscheinen — auf der Website, in Schema.org, in Google Business Profile und in allen Verzeichnissen:

```
Arbeitssicherheit MG
[Strasse Hausnummer]
[PLZ] Moenchengladbach
Tel: +49 XXXX XXXXXXX
E-Mail: info@arbeitssicherheit-mg.de
```

Regeln:
- Exakt gleiche Schreibweise ueberall (keine Abkuerzungen wie "Str." vs. "Strasse")
- Telefonnummer immer im gleichen Format (mit Landesvorwahl)
- NAP-Daten in Footer auf JEDER Seite sichtbar
- NAP-Daten in Schema.org LocalBusiness Markup

### Google Business Profile Empfehlungen

- Profil vollstaendig ausfuellen (Name, Adresse, Telefon, Website, Oeffnungszeiten)
- Kategorie: "Arbeitsschutzberatung" oder "Sicherheitsberatung"
- Beschreibung mit Primary Keywords
- Regelmaessig Fotos hochladen (Begehungen, Schulungen, Team)
- Google Reviews aktiv einsammeln (nach Abschluss eines Projekts)
- Posts/Updates woechentlich (Tipps, Neuigkeiten, Gesetzesaenderungen)
- Q&A Bereich proaktiv befuellen

### Lokale Keywords

Primaere lokale Keywords:
- "Arbeitssicherheit Moenchengladbach"
- "Fachkraft fuer Arbeitssicherheit Moenchengladbach"
- "Sifa Moenchengladbach"
- "Arbeitsschutz Beratung Moenchengladbach"
- "Gefaehrdungsbeurteilung Moenchengladbach"

Erweiterte lokale Keywords (Einzugsgebiet):
- "Arbeitssicherheit Niederrhein"
- "Sifa Niederrhein"
- "Arbeitsschutz NRW"
- "Arbeitssicherheit Krefeld", "Arbeitssicherheit Viersen", "Arbeitssicherheit Neuss"

### areaServed in Schema.org

Immer im LocalBusiness-Schema angeben (siehe Template oben). Einzugsgebiet definieren:
- Primaer: Moenchengladbach (Stadt)
- Sekundaer: Niederrhein (Region)
- Tertiaer: Nordrhein-Westfalen (Bundesland)

---

## 5. Next.js 15 SEO Patterns

### Metadata API Konventionen

#### Statische Metadata (fuer feste Seiten)
```typescript
// src/app/leistungen/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arbeitssicherheit Leistungen — Ihr Rundum-Schutz | Arbeitssicherheit MG',
  description: 'Unsere Leistungen: Gefaehrdungsbeurteilungen, Sifa-Betreuung, Unterweisungen und Begehungen. DGUV-konform fuer KMU. Jetzt informieren!',
  alternates: {
    canonical: 'https://www.arbeitssicherheit-mg.de/leistungen',
  },
  openGraph: {
    title: 'Arbeitssicherheit Leistungen — Gefaehrdungsbeurteilung, Sifa & mehr',
    description: 'Unsere Leistungen: Gefaehrdungsbeurteilungen, Sifa-Betreuung, Unterweisungen und Begehungen. DGUV-konform fuer KMU.',
    url: 'https://www.arbeitssicherheit-mg.de/leistungen',
    siteName: 'Arbeitssicherheit MG',
    locale: 'de_DE',
    type: 'website',
  },
}
```

#### Dynamische Metadata (fuer dynamische Routen)
```typescript
// src/app/leistungen/[slug]/page.tsx
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  // Metadata basierend auf slug generieren
  // Daten aus CMS, Datei oder Konstante laden
  return {
    title: `${pageData.title} | Arbeitssicherheit MG`,
    description: pageData.description,
    alternates: {
      canonical: `https://www.arbeitssicherheit-mg.de/leistungen/${slug}`,
    },
  }
}
```

#### generateStaticParams (fuer statische Generierung dynamischer Routen)
```typescript
// src/app/leistungen/[slug]/page.tsx
export function generateStaticParams() {
  return [
    { slug: 'gefaehrdungsbeurteilung' },
    { slug: 'sifa-betreuung' },
    { slug: 'unterweisungen' },
    { slug: 'begehungen' },
  ]
}
```

### Globale Metadata (Layout)
```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.arbeitssicherheit-mg.de'),
  title: {
    default: 'Arbeitssicherheit MG — Ihr Partner fuer Arbeitsschutz in Moenchengladbach',
    template: '%s | Arbeitssicherheit MG',
  },
  description: 'Fachkraft fuer Arbeitssicherheit in Moenchengladbach. Gefaehrdungsbeurteilungen, Unterweisungen, Begehungen — DGUV-konform fuer KMU.',
  openGraph: {
    siteName: 'Arbeitssicherheit MG',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### OpenGraph Images

- Groesse: 1200x630px (Standard fuer Social Sharing)
- Format: PNG oder JPG
- Ablage: `public/images/og/[seitenname]-og.png`
- Jede Hauptseite erhaelt ein eigenes OG-Image
- Fallback: Ein generisches OG-Image im Root-Layout definieren
- Text auf dem Bild: Seitenname + Brand, gut lesbar

### Server Components als Default

Server Components sind SEO-optimal weil:
- HTML wird serverseitig gerendert (sofort indexierbar)
- Kein Client-JS noetig fuer Content-Rendering
- Bessere Core Web Vitals (weniger JS-Bundle)
- Crawlern wird vollstaendiger Content geliefert

Nur `"use client"` verwenden fuer:
- Interaktive Formulare (Kontaktformular)
- Akkordeon/FAQ Aufklapp-Elemente
- Mobile Navigation Toggle
- Cookie-Banner Interaktion

---

## 6. E-E-A-T Signale (Experience, Expertise, Authoritativeness, Trustworthiness)

Fuer Google-Ranking bei YMYL-Themen (Your Money Your Life) — Arbeitssicherheit faellt darunter:

- **Experience**: Referenz auf Praxiserfahrung, Jahre im Geschaeft, betreute Unternehmen
- **Expertise**: Qualifikationen benennen (Sicherheitsingenieur, Fachkraft fuer Arbeitssicherheit)
- **Authoritativeness**: Gesetze und Normen referenzieren (ArbSchG, DGUV), Zertifizierungen
- **Trustworthiness**: Impressum vollstaendig, SSL, Datenschutz, NAP-Daten konsistent

Umsetzung:
- Ueber-uns-Seite mit Qualifikationen und Erfahrung
- Gesetze und Normen in Leistungsseiten referenzieren
- Kontaktdaten sichtbar auf jeder Seite (Footer)
- Impressum und Datenschutz vollstaendig und rechtskonform

---

## 7. Uebergabe-Formate an andere Agenten

### An Text-Agent: Keyword-Briefing pro Seite

Format fuer jede neue Seite:
```
SEO-BRIEFING: [Seitenname]
- Primary Keyword: [Keyword]
- Sekundaere Keywords: [Keyword 1], [Keyword 2], [Keyword 3]
- Suchintention: [informational/commercial/transactional]
- Textlaenge: [Wortanzahl]
- H1-Vorschlag: [H1 mit Primary Keyword]
- H2-Vorschlaege: [Liste]
- Meta-Description Vorschlag: [150-160 Zeichen]
- Featured Snippet Potenzial: [ja/nein — Typ: FAQ/Liste/Tabelle]
- Interne Links: [Zielseiten die verlinkt werden sollen]
- Lokaler Bezug: [ja/nein — welche lokalen Keywords einbauen]
```

### An Code-Agent: Technische SEO-Specs

Format fuer jede neue Seite:
```
TECHNISCHE SEO-SPECS: [Seitenname]
- Route: /[pfad]
- Canonical URL: https://www.arbeitssicherheit-mg.de/[pfad]
- Title Tag: [Title]
- Meta-Description: [Description]
- Schema.org Typen: [LocalBusiness, Service, FAQPage, BreadcrumbList]
- Schema.org JSON-LD: [vollstaendiges JSON]
- OpenGraph Image: [Dateiname oder "generisch"]
- Priority in Sitemap: [0.0-1.0]
- robots: [index/noindex, follow/nofollow]
- Breadcrumb-Pfad: Startseite > [Elternseite] > [Aktuelle Seite]
```

### An CRO-Agent: SEO-relevante Conversion-Daten

```
SEO-CONVERSION-DATEN: [Seitenname]
- Primaerer Traffic-Kanal: [organisch/direkt/referral]
- Erwartete Suchintention: [informational/commercial/transactional]
- Conversion-Ziel: [Kontaktformular/Anruf/Download]
- CTA-Empfehlung: [Welcher CTA passt zur Suchintention]
- Landingpage-Rolle: [Einstiegsseite/Vertiefung/Conversion-Seite]
```

---

## 8. SEO-Checkliste (bei jeder neuen Seite)

Diese Checkliste muss VOR der Implementierung abgearbeitet werden:

### Keyword Research
- [ ] Primary Keyword definiert?
- [ ] Sekundaere Keywords (3-5) identifiziert?
- [ ] Suchintention bestimmt (informational/commercial/transactional)?
- [ ] Keyword-Kannibalisierung geprueft (kein anderes Seite zielt auf gleiches Keyword)?
- [ ] Lokale Keywords einbezogen (wenn relevant)?

### Meta-Tags
- [ ] Title Tag: 50-60 Zeichen, Primary Keyword am Anfang?
- [ ] Meta-Description: 150-160 Zeichen, Keyword + CTA?
- [ ] Canonical URL gesetzt?
- [ ] OpenGraph Tags vollstaendig (Title, Description, Image, URL)?
- [ ] robots: index, follow (oder begruendet anders)?

### Content-Struktur
- [ ] H1 unique, mit Primary Keyword?
- [ ] H2/H3 hierarchisch korrekt, mit Sekundaer-Keywords?
- [ ] Primary Keyword in erstem Absatz?
- [ ] Keyword-Dichte natuerlich (1-2%)?
- [ ] Textlaenge dem Seitentyp angemessen?

### Schema.org Markup
- [ ] LocalBusiness Schema vorhanden (global oder seitenspezifisch)?
- [ ] Service Schema auf Leistungsseiten?
- [ ] FAQPage Schema bei FAQ-Bereichen?
- [ ] BreadcrumbList Schema auf allen Unterseiten?
- [ ] Schema validiert (Google Rich Results Test)?

### Internal Linking
- [ ] Links von Hub-Seiten zu dieser Seite geplant?
- [ ] Links von dieser Seite zu relevanten anderen Seiten?
- [ ] Ankertexte enthalten Keywords (nicht "hier klicken")?
- [ ] Breadcrumb-Navigation korrekt?

### Bilder
- [ ] Alt-Texte fuer alle Bilder spezifiziert?
- [ ] Alt-Texte beschreibend + Keyword (wenn natuerlich)?
- [ ] next/image mit width, height, sizes?
- [ ] priority fuer Above-the-fold Bilder?
- [ ] WebP/AVIF Format?

### Featured Snippets
- [ ] Featured Snippet Potenzial geprueft?
- [ ] FAQ-Bereich mit Schema vorhanden (wenn sinnvoll)?
- [ ] Listenstruktur fuer Prozesse/Schritte?
- [ ] Tabellen fuer Vergleiche/Uebersichten?

### Technisch
- [ ] URL-Slug kurz und mit Keyword?
- [ ] Server Component (kein unnuetzes "use client")?
- [ ] In sitemap.ts eingetragen?
- [ ] Core Web Vitals nicht negativ beeinflusst?
- [ ] Mobile-Darstellung geprueft?
