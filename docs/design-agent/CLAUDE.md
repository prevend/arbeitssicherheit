# Design-Agent: Arbeitssicherheit Homepage

## 1. Zustaendigkeit

Der Design-Agent verantwortet das visuelle Design-System der B2B Arbeitssicherheit Website:

- **Farbsystem** mit psychologischer Begruendung fuer Arbeitssicherheit
- **Typografie-Hierarchie** fuer Lesbarkeit und Autoritaet
- **Spacing & Layout** fuer klare Informationsstruktur
- **Bildsprache & Icons** fuer authentische Branchenkommunikation
- **Komponenten-Design-Patterns** als Specs fuer den Code-Agent
- **Responsive Design** Mobile-first mit definierten Breakpoints
- **Animation & Motion** subtil und barrierefrei

Farben und Design-Entscheidungen duerfen angepasst werden, wenn CRO-Erkenntnisse, UX-Research oder wissenschaftliche Farbpsychologie dies stuetzen. Jede Aenderung muss begruendet und dokumentiert werden.

**Uebergabe-Format**: Design Tokens, Tailwind-Klassen, Komponenten-Specs.

---

## 2. Farbsystem & Psychologie

### Primaer-Palette

| Rolle | Farbe | Hex | Psychologie / Begruendung |
|---|---|---|---|
| Primary | Blau | `#216CA5` | Vertrauen, Kompetenz, Zuverlaessigkeit -- Kernwerte im Arbeitsschutz |
| Primary Dark | Dunkelblau | `#0D2A4A` | Autoritaet, Serioesitaet fuer Header/Akzente |
| Primary Light | Hellblau | `#3784BC` | Zugaenglichkeit, Hover-States, sekundaere Elemente |
| Accent | Orange | `#FA7901` | Warnung, Handlungsaufforderung -- Signalfarbe im Arbeitsschutz |

### Neutral-Palette

| Rolle | Hex | Verwendung |
|---|---|---|
| Background | `#F5F7FA` | Seitenhintergrund, helle Sektionen |
| Text Primary | `#1A2B3C` | Fliesstext, Ueberschriften |
| Text Secondary | `#5A6B7C` | Untertitel, Hilfstexte, Meta-Infos |
| Footer BG | `#091827` | Footer-Hintergrund |

### Semantische Farben

| Rolle | Hex | Verwendung |
|---|---|---|
| Success | `#2ECC71` | Sicherheit, Checklisten-Haken, positive Rueckmeldung |
| Danger | `#E74C3C` | Fehler, Gefahrenhinweise, Validierung |
| Warning | `#F39C12` | Warnhinweise, Fristen |

### Farbpsychologie fuer Arbeitssicherheit

- **Blau** = Vertrauen und Sachkompetenz. Studien (Labrecque & Milne, 2012) belegen: Blau erhoet wahrgenommene Kompetenz bei Dienstleistern.
- **Orange** = Warnung und Action. In der Arbeitssicherheit ist Orange eine etablierte Signalfarbe (DIN EN ISO 7010). Als CTA-Farbe erzeugt der Komplementaer-Kontrast zu Blau maximale Aufmerksamkeit.
- **Gruen** = Sicherheit und Erfolg. Signalisiert "alles in Ordnung" -- psychologisch verankert durch Ampelsysteme und Sicherheitskennzeichnung.

### Kontrast-Anforderungen

- Mindestens **WCAG 2.1 AA** (4.5:1 fuer normalen Text, 3:1 fuer grossen Text)
- `#1A2B3C` auf `#F5F7FA`: Kontrast ~12:1 (AAA)
- `#FFFFFF` auf `#216CA5`: Kontrast ~4.6:1 (AA)
- `#FFFFFF` auf `#FA7901`: Kontrast ~3.1:1 -- nur fuer grossen Text/Buttons (min. 18px bold)

### Tailwind Design Tokens

```css
/* In globals.css oder Tailwind-Config */
--color-primary: #216CA5;
--color-primary-dark: #0D2A4A;
--color-primary-light: #3784BC;
--color-accent: #FA7901;
--color-bg: #F5F7FA;
--color-text: #1A2B3C;
--color-text-gray: #5A6B7C;
--color-footer: #091827;
--color-success: #2ECC71;
--color-danger: #E74C3C;
--color-warning: #F39C12;
```

### Farbanpassungs-Policy

Farben duerfen angepasst werden wenn:
1. A/B-Test-Daten (CRO-Agent) eine messbare Verbesserung zeigen
2. Barrierefreiheits-Audit Kontrast-Probleme aufdeckt
3. Wissenschaftliche Erkenntnisse zur Farbwirkung im B2B-Kontext vorliegen

Jede Aenderung wird mit Begruendung in diesem Dokument protokolliert.

---

## 3. Typografie-Hierarchie

### Schriftfamilien

| Rolle | Font | Weight | Begruendung |
|---|---|---|---|
| Headings | **Outfit** | 700 (Bold) | Geometric Sans -- modern, technisch, autoritaer |
| Body | **Plus Jakarta Sans** | 400 (Regular) | Humanist Sans -- hohe Lesbarkeit, freundlich-professionell |

### Groessen-Skala

| Element | Mobile | Desktop (md:) | Line-Height | Letter-Spacing |
|---|---|---|---|---|
| H1 | 48px (`text-5xl`) | 56px (`md:text-6xl`) | 1.2 | -0.02em |
| H2 | 36px (`text-4xl`) | 44px (`md:text-[44px]`) | 1.2 | -0.01em |
| H3 | 28px (`text-3xl`) | 32px (`md:text-[32px]`) | 1.3 | 0 |
| H4 | 22px (`text-xl`) | 22px | 1.3 | 0 |
| Body | 16px (`text-base`) | 16px | 1.6 | 0 |
| Small | 14px (`text-sm`) | 14px | 1.5 | 0 |
| Button | 16px (`text-base`) | 16px | 1.0 | 0.02em |

### Typografie-Regeln

- **Maximale Zeilenbreite**: 75-80 Zeichen (`max-w-prose` oder `max-w-[75ch]`)
- **Button-Text**: SemiBold (600), Uppercase vermeiden
- **Gesetzesverweise** (z.B. § 5 ArbSchG): `font-bold` zur visuellen Hervorhebung
- **Zahlen/Statistiken**: Outfit Bold fuer Impact in Hero-Bereichen
- **Kein Blocksatz**: Immer `text-left` fuer optimale Lesbarkeit

### Tailwind Typografie-Klassen

```jsx
// H1
<h1 className="font-outfit text-5xl md:text-6xl font-bold leading-[1.2] tracking-tight text-[#1A2B3C]">

// H2
<h2 className="font-outfit text-4xl md:text-[44px] font-bold leading-[1.2] text-[#1A2B3C]">

// Body
<p className="font-jakarta text-base leading-relaxed text-[#5A6B7C] max-w-prose">

// Gesetzesverweis
<strong className="font-bold text-[#1A2B3C]">§ 5 ArbSchG</strong>
```

---

## 4. Spacing-System

### Basis-Einheit

4px (Tailwind Default). Alle Abstande sind Vielfache von 4px.

### Spacing-Skala

| Kontext | Wert | Tailwind | Verwendung |
|---|---|---|---|
| Micro | 4px | `p-1`, `gap-1` | Icon-zu-Text |
| Small | 8px | `p-2`, `gap-2` | Innerhalb Gruppen |
| Medium | 16px | `p-4`, `gap-4` | Komponenten-Padding |
| Large | 24px | `p-6`, `gap-6` | Card-Padding, Gruppen-Abstand |
| Section (mobile) | 48px | `py-12` | Vertikaler Abstand zwischen Sektionen |
| Section (desktop) | 64px | `md:py-16` | Vertikaler Abstand zwischen Sektionen |

### Container

```jsx
<div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
```

- Max-width: 1200px
- Seitenraender: 16px (mobile), 24px (sm), 32px (lg)

---

## 5. Layout-Prinzipien

### Grid-System

- **Desktop** (lg:): 12-Spalten Grid
- **Tablet** (md:): 8-Spalten Grid
- **Mobile**: 4-Spalten Grid (bzw. Single Column)

```jsx
// 12-Spalten Grid Beispiel
<div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6">
```

### Hero-Layout

```
Desktop (lg:):
┌──────────────────────────────────────────┐
│  Text (60%)           │  Visual (40%)    │
│  H1 + Subtitle        │  Bild/Grafik     │
│  CTA Button           │                  │
└──────────────────────────────────────────┘

Mobile:
┌──────────────────┐
│  Visual (100%)   │
│  Text (100%)     │
│  H1 + Subtitle   │
│  CTA Button      │
└──────────────────┘
```

```jsx
<section className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
  <div className="lg:col-span-3">{/* Text Content: 60% */}</div>
  <div className="lg:col-span-2">{/* Visual: 40% */}</div>
</section>
```

### Whitespace-Regel

- **30-40% der sichtbaren Flaeche** soll Whitespace sein
- Nicht "vollpacken" -- Luft lassen fuer Professionalitaet und Lesbarkeit
- B2B-Kunden scannen Seiten schnell; klare Hierarchie durch Whitespace

### Above-the-fold Prioritaet

1. Hero mit Value Proposition
2. Primaerer CTA
3. Trust-Signal (optional: Zertifikats-Badge oder Kundenzahl)

### Visuelle Hierarchie (Aufmerksamkeits-Reihenfolge)

1. **CTA-Buttons** -- groesste visuelle Gewichtung (Accent-Farbe, Groesse)
2. **Headlines** -- Outfit Bold, grosse Schrift
3. **Body-Text** -- normale Gewichtung
4. **Sekundaere Elemente** -- Text Secondary Farbe, kleinere Schrift

---

## 6. Bildsprache & Icons

### Fotografie

- **Authentische Arbeitsschutz-Fotos**: echte Arbeitsumgebungen, echte Schutzausruestung
- **Keine generischen Clipart** oder Stock-Fotos mit gestellten Laecheln
- **Farb-Grading**: leicht entsaettigt, professionell, konsistent mit Brand-Palette
- **MCP-Image Server** (Gemini) fuer KI-generierte Bilder nutzen wenn Fotos benoetigt werden

### Icon-System

| Eigenschaft | Wert |
|---|---|
| Stil | Line Icons, konsistent |
| Stroke | 2px |
| Corner Radius | 4px |
| Farbe | `currentColor` (erbt Textfarbe) |

### Icon-Groessen

| Kontext | Groesse | Tailwind |
|---|---|---|
| Inline (neben Text) | 24px | `w-6 h-6` |
| Feature-Card | 32px | `w-8 h-8` |
| Hero-Feature | 48px | `w-12 h-12` |
| Spotlight/Highlight | 64px | `w-16 h-16` |

### Illustrationen

- Minimalistisch, sachlich, nicht verspielt
- Brand-Farben verwenden (Primary Blue + Accent Orange als Akzent)
- Technischer Stil passend zum Arbeitsschutz-Kontext

---

## 7. Komponenten-Design-Patterns

### Buttons

```jsx
// Primary (Hauptaktion)
<button className="bg-[#FA7901] hover:bg-[#e06e01] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FA7901] focus:ring-offset-2">
  Beratung anfragen
</button>

// Secondary
<button className="bg-[#216CA5] hover:bg-[#1a5684] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#216CA5] focus:ring-offset-2">
  Mehr erfahren
</button>

// Outline
<button className="border-2 border-[#216CA5] text-[#216CA5] hover:bg-[#216CA5] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#216CA5] focus:ring-offset-2">
  Details ansehen
</button>

// Danger
<button className="bg-[#E74C3C] hover:bg-[#c0392b] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E74C3C] focus:ring-offset-2">
  Abbrechen
</button>
```

### Cards

```jsx
<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
  {/* Card Content */}
</div>
```

- Padding: 24px (`p-6`)
- Border-Radius: 12px (`rounded-xl`)
- Shadow: `shadow-sm`, Hover: `shadow-md`
- Border: 1px `border-gray-100` fuer subtile Abgrenzung

### Form Fields

```jsx
<div className="space-y-1.5">
  <label className="block text-sm font-semibold text-[#1A2B3C]">
    E-Mail-Adresse
  </label>
  <input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#216CA5] focus:ring-2 focus:ring-[#216CA5]/20 transition-colors duration-200 text-[#1A2B3C] placeholder:text-gray-400" />
  {/* Error State */}
  <p className="text-sm text-[#E74C3C]">Bitte gueltige E-Mail eingeben.</p>
  {/* Helper Text */}
  <p className="text-sm text-[#5A6B7C]">Wir verwenden Ihre E-Mail nur fuer die Kontaktaufnahme.</p>
</div>
```

- Label: oben, `text-sm font-semibold`
- Input: 12px padding vertikal, 16px horizontal
- Error: `text-[#E74C3C]`, unter dem Feld
- Helper: `text-[#5A6B7C]`, unter dem Feld

### Hover & Focus States

| Element | Hover | Focus |
|---|---|---|
| Button Primary | `hover:bg-[#e06e01]` | `focus:ring-2 focus:ring-[#FA7901] focus:ring-offset-2` |
| Button Secondary | `hover:bg-[#1a5684]` | `focus:ring-2 focus:ring-[#216CA5] focus:ring-offset-2` |
| Card | `hover:shadow-md` | -- |
| Link | `hover:text-[#FA7901]` | `focus:outline-none focus:underline` |
| Input | `hover:border-gray-400` | `focus:border-[#216CA5] focus:ring-2 focus:ring-[#216CA5]/20` |

Alle Transitions: `transition-colors duration-200` oder `transition-shadow duration-200`.

---

## 8. Responsive Design Breakpoints

### Breakpoint-Skala

| Name | Min-Width | Tailwind Prefix | Typischer Viewport |
|---|---|---|---|
| Mobile | 0px | (default) | Smartphones |
| sm | 640px | `sm:` | Grosse Smartphones, kleine Tablets |
| md | 768px | `md:` | Tablets |
| lg | 1024px | `lg:` | Laptops, kleine Desktops |
| xl | 1280px | `xl:` | Grosse Desktops |

### Mobile-first Ansatz

Immer erst Mobile stylen, dann mit Breakpoint-Prefixes hochskalieren:

```jsx
// Richtig: Mobile-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

// Falsch: Desktop-first (nicht verwenden)
<div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
```

### Responsive Anpassungen

| Element | Mobile | Tablet (md:) | Desktop (lg:) |
|---|---|---|---|
| Container Padding | 16px | 24px | 32px |
| Section Spacing | 48px | 56px | 64px |
| Grid Columns | 1 | 2 | 3-4 |
| H1 | 48px | 52px | 56px |
| Navigation | Hamburger Menu | Hamburger Menu | Volle Navigation |
| Hero Layout | Stacked | Stacked | Side-by-side |

---

## 9. Animation & Motion

### Grundsaetze

- **Subtil und funktional** -- Animationen unterstuetzen die UX, lenken nicht ab
- **Performance** -- nur `transform` und `opacity` animieren (GPU-beschleunigt)
- **Barrierefreiheit** -- `prefers-reduced-motion` immer respektieren

### Scroll-Animationen (AOS-Stil)

```jsx
// Fade-up Animation fuer Sektionen
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier
    },
  },
};
```

### Hover-Transitions

```css
/* Standard Hover Transition */
transition-colors duration-200 ease-in-out

/* Shadow Transition */
transition-shadow duration-200 ease-in-out

/* Transform Transition (z.B. Card lift) */
transition-transform duration-200 ease-in-out hover:-translate-y-1
```

### Reduced Motion

```jsx
// In Tailwind / CSS
<div className="motion-safe:animate-fadeUp motion-reduce:animate-none">

// In CSS
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Jede Animation muss mit `prefers-reduced-motion: reduce` deaktiviert oder auf ein Minimum reduziert werden.

---

## 10. B2B Arbeitssicherheit Spezifisch

### Tonalitaet des Designs

- **Serioes und vertrauenswuerdig** -- keine verspielten Elemente
- **Professionell** -- klare Linien, strukturierte Layouts
- **Kompetent** -- Daten und Fakten visuell hervorheben
- **Handlungsorientiert** -- CTAs klar und prominent

### Trust Signals

- Zertifikate und Qualifikationen **prominent** platzieren (Header oder Hero-Bereich)
- Kunden-Logos in einer Leiste (Grayscale, Hover: Farbe)
- Zahlen/Statistiken als grosse Typografie-Elemente
- TUeV, DGUV, BG-Logos wenn vorhanden

### Rechtliche Verweise

Gesetzesverweise und Normen visuell hervorheben:

```jsx
// Gesetzesverweis inline
<strong className="font-bold text-[#1A2B3C]">§ 5 ArbSchG</strong>

// Normenverweis als Badge
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#216CA5]/10 text-[#216CA5]">
  DIN EN ISO 45001
</span>
```

### Was vermieden werden muss

- Zu bunte oder spielerische Elemente
- Clipart oder generische Illustrationen
- Ueberladene Layouts ohne Whitespace
- Animationen die von Inhalten ablenken
- Informelle oder unserioes wirkende Gestaltung

---

## 11. Uebergabe an andere Agenten

### An Code-Agent

Der Code-Agent erhaelt:
- **Design Tokens**: Alle Farben, Schriftgroessen, Spacing-Werte als CSS Custom Properties
- **Tailwind-Klassen**: Fertige Klassen-Strings fuer Copy-Paste
- **Komponenten-Specs**: JSX-Struktur mit allen Klassen (siehe Abschnitt 7)
- **Responsive Specs**: Breakpoint-spezifische Anpassungen

### An UX-Agent

Der UX-Agent erhaelt:
- **Layout-Templates**: Grid-Definitionen und Sektions-Strukturen
- **Responsive Specs**: Verhalten pro Breakpoint
- **Interaktions-Specs**: Hover/Focus/Active States

### An CRO-Agent

Der CRO-Agent erhaelt:
- **CTA-Spezifikationen**: Farbe, Groesse, Platzierung fuer primaere/sekundaere CTAs
- **Farb-Empfehlungen**: Kontrast-Analyse fuer Conversion-relevante Elemente
- **A/B-Test-Vorschlaege**: Varianten fuer Design-Elemente die getestet werden koennen

---

## 12. Grid- & Layout-Regeln (wissenschaftlich belegt)

### Standard-Grid-Patterns (PFLICHT)

| Anzahl Items | Desktop | Tablet | Mobile | Quelle |
|---|---|---|---|---|
| 2 gleiche | `grid-cols-2` | `grid-cols-2` | `grid-cols-1` | NNGroup Vergleichs-Pattern |
| 3 gleiche | `grid-cols-3` | `grid-cols-2` | `grid-cols-1` | Springer Eye-Tracking 2018 |
| 4 gleiche | `grid-cols-4` | `grid-cols-2` | `grid-cols-1` | Material Design 3 |
| 5-6 gleiche | `grid-cols-3` | `grid-cols-2` | `grid-cols-1` | Erste Reihe dominant |

**Begruendung:** Side-by-side ermoeglicht das NNGroup "Lawn-Mower-Pattern" (effizienteste Scanning-Strategie). Vertikales Stacking erzwingt kognitiv teures Scrollen und belastet Working Memory (Miller's Law: ~7±2 Items).

### Container-Breiten fuer Card-Grids

- Card-Grids: `max-w-7xl` (80rem) – NICHT `max-w-3xl` (768px = 40% zu schmal, Baymard)
- Text-Content: `max-w-3xl` ist korrekt (65-75 Zeichen/Zeile optimal)
- Card-Gutter: 16-24px (`gap-4` bis `gap-6`) – Material Design 3

### Karten-Minimum-Elemente (NNGroup Card Definition)

Jede Card MUSS enthalten:
1. **Visueller Anker** (Bild, Icon, Avatar) – NNGroup: Erster Fixationspunkt beim Scanning
2. **Titel** (font-heading, font-bold) – Primaere Identifikation
3. **Kurzbeschreibung** (text-sm) – Kontext fuer Entscheidung
4. **Visuelle Abgrenzung** (Border, Shadow oder Hintergrund) – NNGroup: Definiert ueberhaupt erst eine "Card"
5. **CTA** (Link oder Button) – Auf Conversion-Seiten Pflicht

### Sektions-Hintergrund-Wechsel

Aufeinanderfolgende Sektionen MUESSEN sich visuell unterscheiden:
- `bg-white` → `bg-bg-light` → `bg-white` → `bg-primary-dark`
- Social-Proof-Sektionen bekommen IMMER abgesetzten Hintergrund
- **Begruendung:** NNGroup Layer-Cake-Scanning + Von Restorff (1933). Enders-Studie: Zebra-Striping reduziert fehlerhafte Scanning-Patterns um **17%**. Hintergrundwechsel bei Formularen: **+91.7% Submissions**.

### Equal-Height Cards in Grids (PFLICHT)

Wenn Cards in einem CSS Grid nebeneinander stehen, MUESSEN alle Cards gleich hoch sein:

- Grid-Kinder erhalten `h-full` damit sie die volle Zeilen-Hoehe nutzen
- Wenn Wrapper-Elemente existieren (z.B. AnimateOnScroll, Stagger), muessen ALLE Wrapper in der Kette `h-full` erhalten
- Text-Laengen-Unterschiede duerfen NICHT zu unterschiedlichen Card-Hoehen fuehren
- **Begruendung:** Ungleiche Card-Hoehen erzeugen visuelles "Flimmern" und signalisieren mangelnde Sorgfalt. NNGroup: Konsistente Kartengroessen verbessern Scanning-Effizienz um 23%.

```jsx
// RICHTIG: h-full auf Wrapper UND Card
<Stagger className="h-full">
  <div className="h-full bg-white rounded-xl p-6">...</div>
</Stagger>

// FALSCH: Keine Hoehen-Kontrolle
<Stagger>
  <div className="bg-white rounded-xl p-6">...</div>
</Stagger>
```

### VERBOTENE Patterns

- 3+ gleichwertige Items in `space-y-*` untereinander (Desktop)
- `max-w-3xl` oder enger fuer Card-Listen
- Cards ohne visuellen Anker (Icon/Bild fehlt)
- Zwei aufeinanderfolgende Sektionen mit identischem Hintergrund (wenn Social Proof beteiligt)
- Cards in Grids mit unterschiedlichen Hoehen (fehlende `h-full` Kette)

---

## 13. Layout-Vielfalt (wissenschaftlich belegt)

### Kernprinzip

**Visuelle Monotonie ist der groesste Conversion-Killer.** NNGroup belegt: Wenn mehrere Sektionen identisch aussehen (z.B. alle als Card-Grid), tritt das F-Pattern auf – Nutzer ueberspringen Inhalte. Visuell abwechslungsreiche Seiten erzielen **15-25% hoehere Scroll-Tiefe** (Chartbeat) und **3.2% hoehere Conversion** (Unbounce B2B-Studie).

### 13.1 Inhaltstyp → Layout-Zuordnung (PFLICHT)

Jeder Inhaltstyp hat wissenschaftlich optimierte Layout-Patterns. Der Design-Agent MUSS das passende Layout waehlen:

| Inhaltstyp | Empfohlenes Layout | Alternativen | Quelle |
|---|---|---|---|
| **Hero / Value Proposition** | Split Screen (Text 60% / Visual 40%) | Centered Hero (bei starkem Bild) | NNGroup: Split erzeugt Z-Entry-Point |
| **Schmerzpunkte / Probleme** | Before/After Vergleich, Icon-Row | Split Screen (Problem vs. Loesung) | CXL: Vergleichslayouts +34% Engagement |
| **Dienstleistungen / Features** | Alternating Zigzag (Bild-Text-Wechsel) | Bento Grid (bei 6+ Services) | Baymard: Zigzag erzwingt Zeilen-Scanning |
| **USP / Warum wir** | Stats Bar + Icon-Highlights | Logo Cloud + Fakten | HubSpot: Zahlen-Visualisierung +37% Trust |
| **Prozess / Ablauf** | Timeline / Numbered Steps | Horizontal Steps mit Connector | NNGroup: Sequenz-Layout fuer Prozesse |
| **Social Proof (kurz)** | Logo Bar / Review Strip | Stats Counter | Spenner & Freeman: Logo-Leisten = Shortcut-Trust |
| **Social Proof (detail)** | Testimonial Spotlight (1 gross + 2 klein) | Karussell, Grid (max 3) | Baymard: Einzelnes Featured-Testimonial +28% Glaubwuerdigkeit |
| **CTA / Conversion** | Full-Width Band (Gradient) | Split (Text + Form) | Unbounce: Isolierte CTA-Baender +220% Klickrate |
| **FAQ** | 2-Spalten Accordion | Single-Column Accordion | NNGroup: 2-Spalten spart 40% Scroll |
| **Kontakt** | Split (Form + Info) | Centered Form | Formstack: Side-Info reduziert Abbrueche um 15% |
| **Team / Ueber uns** | Feature-Karten mit Foto | Zigzag (bei wenigen Personen) | Authentizitaet > Einheitlichkeit |
| **Branchen / Zielgruppen** | Bento Grid (verschiedene Groessen) | Standard Card Grid | NNGroup: Bento = visuelle Hierarchie |

### 13.2 Die 6 Goldenen Kombinations-Regeln

#### Regel 1: Never-Repeat (PFLICHT)
**Nie zwei identische Layout-Typen direkt hintereinander.** Habituation (Weinschenk) laesst das Gehirn Wiederholungen ausblenden.

```
VERBOTEN:
  Card-Grid → Card-Grid → Card-Grid

RICHTIG:
  Zigzag → Stats-Bar → Card-Grid → CTA-Band → Spotlight
```

#### Regel 2: Density Wave (EMPFOHLEN)
Wechsel zwischen dichten und luftigen Sektionen. Cognitive Load sinkt um 15-25% (Sweller).

```
Dense (Bento, Grid) → Spacious (CTA-Band, Stats) → Dense → Spacious
```

#### Regel 3: CTA-Rhythmus (PFLICHT)
Conversion-Punkt alle 2-3 Sektionen. Unbounce: **+220% Conversion** gegenueber einzelnem End-CTA.

```
Hero → Content → Content → CTA → Content → Content → CTA → Kontakt
```

#### Regel 4: Z-Pattern Flow (EMPFOHLEN)
Visuelle Schwerpunkte alternieren zwischen links und rechts. Erzwingt aktives Scanning statt F-Pattern.

```
[Text | Bild]  → Volle Breite  → [Bild | Text]  → Volle Breite
```

#### Regel 5: Contrast Frame (PFLICHT)
Hintergrund-Kontrast rahmt Inhalte ein. Von Restorff: Isolation Effect erhoeht Erinnerung um bis zu 70%.

```
bg-white → bg-amber-50 → bg-primary-dark → bg-white → bg-gradient
```

#### Regel 6: Progressive Disclosure (EMPFOHLEN)
Informationsdichte steigt sanft an: Wenig (Hero) → Mittel (Features) → Viel (FAQ/Kontakt).

### 13.3 Genehmigte Layout-Patterns (15 Typen)

| # | Layout-Typ | Struktur (Desktop) | Wann verwenden |
|---|---|---|---|
| 1 | **Hero Split** | `[Text 60% │ Visual 40%]` | Startseite Hero |
| 2 | **Hero Centered** | `[ Zentriert: H1 + Subtitle + CTA ]` | Unterseiten-Header |
| 3 | **Bento Grid** | Verschieden grosse Kacheln | 4+ Features/Branchen |
| 4 | **Alternating Zigzag** | `[Text│Bild]` dann `[Bild│Text]` | Services, Features |
| 5 | **Stats Bar** | 3-4 Zahlen nebeneinander | KPIs, Trust-Zahlen |
| 6 | **Logo Cloud** | Logos in Reihe, Grayscale | Partner, Zertifikate |
| 7 | **Testimonial Spotlight** | 1 grosses + 2 kleine Zitate | Social Proof |
| 8 | **CTA Banner** | Volle Breite, Gradient-BG | Conversion-Punkte |
| 9 | **Process Steps** | Nummerierte Schritte + Connector | Ablaeufe, Prozesse |
| 10 | **Content Cards** | Gleichfoermiges Grid (2-4 cols) | Vergleichbare Items |
| 11 | **Split Visual** | Bild 50% + Text 50% | Ueber-uns, Team |
| 12 | **Stacked Feature List** | Icon links + Text rechts, gestapelt | Vorteile, Checklisten |
| 13 | **FAQ Accordion** | 2 Spalten oder Single-Column | Haeufige Fragen |
| 14 | **Before/After** | Vergleich zweier Zustaende | Schmerzpunkte, Ergebnisse |
| 15 | **Sticky Scroll / Tabs** | Fixierter Bereich + scrollender Inhalt | Komplexe Features |

### 13.4 Homepage-Empfehlung (AIDA-Flow)

```
1. Hero Split          → Attention (Value Proposition)
2. Before/After        → Interest (Schmerzpunkte zeigen)
3. Stats Bar / USP     → Interest (Vertrauen aufbauen)
4. Zigzag Services     → Desire (Loesungen detailliert)
5. Process Steps       → Desire (Einfachheit zeigen)
6. CTA Banner          → Action (Conversion-Punkt 1)
7. Logo Cloud / Reviews → Desire (Social Proof kurz)
8. Testimonial Spotlight → Desire (Social Proof detail)
9. FAQ Accordion       → Desire (Einwaende entkraeften)
10. Contact Split      → Action (Conversion-Punkt 2)
```

**Kein einziges Layout wiederholt sich in dieser Sequenz.**

### 13.5 VERBOTENE Layout-Patterns

- **2+ identische Layout-Typen direkt hintereinander** (Never-Repeat-Regel)
- **5+ Card-Grids auf einer Seite** (Monotonie-Grenze)
- **Alle Sektionen als Card-Grid** ("Kachel-Kachel-Kachel")
- **CTA nur am Ende** (muss alle 2-3 Sektionen erscheinen)
- **Gleichfoermige Sektionen ohne visuellen Rhythmus-Wechsel**

### 13.6 Mobile-Anpassung der Layouts

| Desktop-Layout | Mobile-Verhalten |
|---|---|
| Zigzag (Text│Bild) | Stacked: Bild oben → Text unten |
| Bento Grid | 1-2 Spalten, gleichfoermig |
| Split Screen | Stacked |
| Stats Bar | 2x2 Grid |
| Testimonial Spotlight | Alle gleich gross, vertikal |
| Before/After | Vertikal gestapelt |

---

## 14. Design-Checkliste

Bei jeder neuen Seite oder Komponente diese Punkte pruefen:

- [ ] **Farben** aus dem Design System verwendet? (keine Hex-Werte ausserhalb der Palette)
- [ ] **Typografie-Hierarchie** eingehalten? (H1 > H2 > H3, korrekte Fonts)
- [ ] **Spacing** konsistent? (4px-Vielfache, Section-Spacing beachtet)
- [ ] **Responsive** getestet? (Mobile, Tablet, Desktop)
- [ ] **Kontrast** WCAG 2.1 AA? (4.5:1 fuer Text, 3:1 fuer grosse Elemente)
- [ ] **Brand-Konsistenz**? (Serioes, professionell, B2B-angemessen)
- [ ] **Animationen** respektieren `prefers-reduced-motion`?
- [ ] **Focus States** fuer Keyboard-Navigation vorhanden?
- [ ] **Icons** konsistenter Stil? (2px stroke, richtige Groesse)
- [ ] **Whitespace** 30-40%? (Nicht ueberladen)
- [ ] **Trust Signals** sichtbar? (Zertifikate, Logos wo relevant)
- [ ] **CTAs** visuell dominant? (Accent-Farbe, ausreichend gross)
- [ ] **Grid-Layout** fuer 3+ gleichwertige Items (NICHT vertikal gestapelt)? [NNGroup, Miller's Law]
- [ ] **Container** mind. `max-w-6xl`/`max-w-7xl` fuer Card-Grids? [Baymard: max-w-3xl = 40% zu schmal]
- [ ] **Sektions-Hintergrund** wechselt bei aufeinanderfolgenden Sektionen? [Enders: -17% Scan-Fehler]
- [ ] **Karten** haben min. 4 Elemente (Bild/Icon, Titel, Text, Abgrenzung)? [NNGroup Card Definition]
- [ ] **Layout-Vielfalt**: Kein Layout-Typ wiederholt sich direkt hintereinander? [Never-Repeat-Regel]
- [ ] **Inhaltstyp-Layout-Match**: Passt das Layout zum Inhaltstyp? (Tabelle 13.1)
- [ ] **CTA-Rhythmus**: Conversion-Punkt alle 2-3 Sektionen? [Unbounce: +220%]
- [ ] **Density Wave**: Dichte und luftige Sektionen wechseln sich ab?
- [ ] **Max. Card-Grids**: Nicht mehr als 4 Card-Grid-Sektionen pro Seite?
- [ ] **Equal-Height Cards**: Alle Cards in Grids gleich hoch (`h-full` auf allen Wrappern)?
