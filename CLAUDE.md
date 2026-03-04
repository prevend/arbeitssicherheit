# Arbeitssicherheit Homepage

## Projekt-Beschreibung
Homepage fuer Arbeitssicherheit - informiert ueber Vorschriften, Checklisten, Gefaehrdungsbeurteilungen und Best Practices fuer Arbeitsschutz in Deutschland.

## Tech-Stack
- **Framework**: Next.js 15 (App Router) + React 19
- **Sprache**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Testing**: Vitest (Unit/Integration) + Playwright (E2E)
- **Linting**: ESLint + Next.js Config
- **Package Manager**: npm

## Agenten-System (11 Spezialisten)

### Uebersicht aller Agenten

| Agent | CLAUDE.md | Zustaendigkeit |
|-------|-----------|----------------|
| **Research** | (Workflow) | Codebase erkunden, Recherche |
| **Plan** | (Workflow) | Architektur planen |
| **SEO** | `docs/seo-agent/CLAUDE.md` | Technisches SEO, Keywords, Schema.org, Meta-Tags |
| **Text** | `docs/text-agent/CLAUDE.md` | Copywriting, Tonfall, Verkaufsoptimierung |
| **Design** | `docs/design-agent/CLAUDE.md` | Visuelles Design, Farben, Typografie, Layout |
| **UX** | `docs/ux-agent/CLAUDE.md` | Nutzerfuehrung, Formulare, A11y, Mobile |
| **CRO** | `docs/cro-agent/CLAUDE.md` | Conversion-Optimierung, Heatmap-Wissenschaft |
| **Image** | `docs/image-agent/CLAUDE.md` | Bildgenerierung (Gemini), Icons, Badges, Alt-Texte |
| **Code** | `src/CLAUDE.md` | Implementierung, TypeScript, Next.js |
| **QA** | `docs/qa-agent/CLAUDE.md` | Cross-Page Konsistenz, Design-Review, Layout-Pruefung |
| **Test** | `tests/CLAUDE.md` | Unit/Component/E2E Tests, A11y Tests |

### Uebergabe-Logik (Wer liefert was an wen)

```
SEO-Agent ──→ Text-Agent: Keyword-Briefing pro Seite
SEO-Agent ──→ Code-Agent: Meta-Tags, Schema.org Templates, robots/sitemap Specs
Text-Agent ──→ Code-Agent: Alle Texte, Headlines, CTAs, Meta-Descriptions
Design-Agent ──→ Code-Agent: Design Tokens, Tailwind-Klassen, Komponenten-Specs
Design-Agent ──→ Image-Agent: Bildsprache-Vorgaben, Stil-Richtlinien
Image-Agent ──→ Code-Agent: Bild-Dateipfade, Alt-Texte, Image-Props
UX-Agent ──→ Code-Agent: Interaction Patterns, A11y-Anforderungen, Form-Specs
UX-Agent ──→ Image-Agent: Alt-Text-Anforderungen, A11y-Bildspecs
CRO-Agent ──→ Design-Agent: CTA-Groessen, Farb-Empfehlungen, Layout-Zonen
CRO-Agent ──→ Text-Agent: CTA-Wording, Value Proposition Feedback
CRO-Agent ──→ UX-Agent: Formular-Optimierung, Touch Target Empfehlungen
UX-Agent ──→ Test-Agent: A11y Test-Anforderungen
Code-Agent ──→ QA-Agent: Fertige Implementierung → Cross-Page Review
QA-Agent ──→ Code-Agent: Konsistenz-Fehler → Fixes
Code-Agent ──→ Test-Agent: Neue Features → Tests schreiben
```

**Regel**: Code-Agent uebernimmt Vorgaben 1:1. Er formuliert KEINE eigenen Texte,
erfindet KEINE Design-Entscheidungen und weicht NICHT von SEO-Specs ab.

## Site-Wide Consistency (PFLICHT-REGEL)

**JEDE Design-Aenderung gilt fuer ALLE Seiten, nicht nur fuer die angeforderte Seite.**

Dies ist die wichtigste Koordinations-Regel im gesamten Projekt. Sie verhindert,
dass Unterseiten visuell von der Startseite abweichen.

### Ablauf bei Design-Aenderungen (Seite-fuer-Seite mit User-Feedback)

Bei groesseren Design-Aenderungen (neues Layout, neue Patterns, visuelle Ueberarbeitung)
wird JEDE Seite einzeln angepasst und dem User zur Pruefung vorgelegt.

```
SCHRITT 1: Plan erstellen
  - Liste ALLER betroffenen Seiten erstellen (TodoWrite)
  - Reihenfolge festlegen: Startseite → Marketing-Seiten → Legal-Seiten
  - Plan dem User zeigen

SCHRITT 2: Seite-fuer-Seite implementieren
  Fuer JEDE Seite in der Liste:
    a) Aenderung implementieren
    b) User informieren was geaendert wurde
    c) User nach Feedback fragen (AskUserQuestion oder einfach warten)
    d) Feedback einarbeiten
    e) Erst dann naechste Seite beginnen

SCHRITT 3: Abschluss
  - QA-Agent: Alle Seiten final pruefen
  - Build verifizieren
```

### Empfohlene Seiten-Reihenfolge

```
1. Startseite (page.tsx)           ← Referenz-Design, User prueft zuerst
2. Leistungen (/leistungen)       ← Wichtigste Marketing-Seite
3. Branchen (/branchen)            ← Marketing-Seite
4. Referenzen (/referenzen)        ← Social-Proof-Seite
5. Ueber-uns (/ueber-uns)         ← Vertrauens-Seite
6. Erstanalyse (/erstanalyse)     ← Conversion-Seite
7. Kontakt (/kontakt)             ← Conversion-Seite
8. Datenschutz + Impressum        ← Legal (zusammen, weniger kritisch)
```

### Wann Seite-fuer-Seite Workflow PFLICHT ist

- Visuelle Ueberarbeitung (Layouts, Farben, Spacing)
- Neue Design-Patterns einfuehren
- Section-Umbau (z.B. Card Grid → Zigzag)
- Hintergrund-Aenderungen

### Wann NICHT noetig (direkt alle Seiten anpassen)

- Bug-Fixes (z.B. Unicode → Lucide Icon)
- Klassen-Korrekturen (z.B. fehlende bg-grid-industrial)
- Kleine Text-Aenderungen

### Konkrete Regeln

1. **Dunkle Sektionen**: IMMER `bg-primary-dark bg-grain bg-grid-industrial` (nie ohne grid-industrial)
2. **Hintergrund-Rhythmus**: Auf JEDER Seite pruefen, nicht nur auf der Startseite
3. **Animationen**: AnimateOnScroll + Stagger auf ALLEN Seiten, nicht nur Startseite
4. **Neue Komponenten/Patterns**: Werden auf ALLEN relevanten Seiten eingefuehrt
5. **Bullet-Points**: Lucide Check-Icon (nie Unicode \u2713)
6. **Container-Breiten**: max-w-7xl fuer Grids auf ALLEN Seiten

### VERBOTEN

- Eine Seite ueberarbeiten und andere ignorieren
- "Mache ich spaeter" fuer Unterseiten
- Unterschiedliche Design-Qualitaet zwischen Start- und Unterseiten
- Dunkle Sektionen ohne bg-grid-industrial

## Flexibler Workflow

Nicht jede Aufgabe braucht alle Agenten. Der Workflow wird je nach Aufgabentyp angepasst:

### Neue Seite / neues Feature (Voll-Workflow)
1. **Research** → Bestehenden Code erkunden, Anforderungen identifizieren
2. **Plan** → Implementierungs-Ansatz, betroffene Dateien
3. **SEO** → Keyword-Research, Meta-Specs, Schema.org planen
4. **Text** → Texte schreiben (mit SEO-Keywords), CTAs, Meta-Descriptions
5. **Design** → Layout, Farben, Komponenten-Specs
6. **UX** → Nutzerfuehrung, A11y, Formular-Design
7. **CRO Review** → Conversion-Check: CTAs, Above-fold, Heatmap-Patterns
8. **Image** → Fotos generieren, Icons waehlen, Alt-Texte, Badges
9. **Code** → Implementierung (uebernimmt alle Vorgaben)
10. **QA** → Cross-Page Konsistenz-Pruefung (ALLE Seiten scannen)
11. **Test** → Unit/Component/E2E/A11y Tests
12. **Final Review** → UI + CRO + UX Checklisten durchgehen

### Bestehende Seite ueberarbeiten
1. **Research** → Aktuelle Seite analysieren
2. **CRO Review** → Conversion-Probleme identifizieren
3. **Text/Design/UX** → Nur die betroffenen Agenten
4. **Code** → Aenderungen umsetzen
5. **QA** → Cross-Page Konsistenz pruefen (Seiteneffekte erkennen)
6. **Test** → Regression Tests

### Bug Fix / kleine Aenderung
1. **Research** → Problem verstehen
2. **Code** → Fix implementieren
3. **QA** → Schnell-Check: Hat der Fix andere Seiten beeinflusst?
4. **Test** → Tests schreiben/anpassen

### Nur Text-Aenderung
1. **SEO** → Keywords pruefen
2. **Text** → Neue Texte schreiben
3. **Code** → Texte einbauen
4. **CRO Review** → Conversion-Impact pruefen

### Nur Design-Aenderung
1. **Design** → Neue Specs
2. **UX** → Usability pruefen
3. **Code** → Umsetzen
4. **QA** → Cross-Page Design-Konsistenz pruefen
5. **Test** → Visual Regression

## Konfliktloesung

Bei Konflikten zwischen Agenten gelten diese Prioritaeten:

1. **A11y (Barrierefreiheit)** gewinnt immer (WCAG 2.1 AA ist Pflicht)
2. **UX** > Design (Nutzbarkeit vor Aesthetik)
3. **SEO** > Text-Kreativitaet (Keywords muessen rein)
4. **CRO-Empfehlungen** sind situativ (koennen begründet abweichen)
5. Bei allem anderen: User entscheidet

## Quality Gates (vor Merge)

### Agent-spezifische Gates
- [ ] **Text**: Checkliste bestanden (Tonfall, SEO, CTAs)
- [ ] **SEO**: Meta-Tags, Schema.org, Keywords platziert
- [ ] **Design**: Farben/Spacing aus System, responsive
- [ ] **UX**: A11y bestanden (axe), Keyboard-Navigation, Mobile ok
- [ ] **CRO**: CTAs vorhanden, Above-fold geprueft, Trust Signals
- [ ] **Image**: Alt-Texte vorhanden, Bilder optimiert, Placeholder markiert
- [ ] **Code**: TypeScript strict, keine `any`, keine console.logs
- [ ] **Test**: Coverage >= 80%, alle Tests gruen

### Cross-Agent Layout-Review (PFLICHT, wissenschaftlich belegt)

Dieser Review verhindert Fehler die entstehen, wenn einzelne Agenten ihre Prinzipien
korrekt anwenden, aber die Implementierung nicht Layout-optimiert ist.

```
LAYOUT-REVIEW CHECKLISTE (nach Code-Implementierung)
=====================================================

Cards & Grids:
[ ] 3+ gleichwertige Items (Services, Testimonials, Features) in Grid?
    NICHT vertikal gestapelt! [NNGroup Lawn-Mower, Miller's Law]
[ ] Container fuer Card-Grids mind. max-w-6xl/max-w-7xl?
    NICHT max-w-3xl (= 40% zu schmal) [Baymard Institute]
[ ] Jede Card hat: Visuellen Anker + Titel + Text + Abgrenzung?
    [NNGroup Card Definition]

Social Proof:
[ ] Testimonials mit echtem Foto (nicht nur Initialen)?
    [CXL Eye-Tracking: p=0.0035 signifikant bessere Erinnerung]
[ ] Social-Proof-Sektion hat anderen Hintergrund als umgebende Sektionen?
    [Von Restorff 1933, Enders: -17% Scan-Fehler]
[ ] Social Proof nah an CTAs platziert?
    [CXL: +25-68% Conversion]
[ ] 3-5 Testimonials sichtbar auf Startseite?
    [Spiegel/Northwestern: 5 Reviews = +270% Kaufwahrscheinlichkeit]

Sektions-Rhythmus:
[ ] Aufeinanderfolgende Sektionen haben unterschiedliche Hintergruende?
    [NNGroup Layer-Cake-Pattern]
[ ] Visuelle Abwechslung alle 400-500px?
    [CRO Scroll-Depth-Optimierung]

Layout-Vielfalt (NEU):
[ ] Kein Layout-Typ wiederholt sich direkt hintereinander?
    [Never-Repeat-Regel: Habituation, Weinschenk]
[ ] Layout passt zum Inhaltstyp? (Services→Zigzag, Probleme→Before/After, etc.)
    [Design-Agent 13.1, Baymard, CXL]
[ ] Max. 4 Card-Grid-Sektionen pro Seite?
    [Monotonie-Grenze]
[ ] CTA-Rhythmus: Conversion-Punkt alle 2-3 Sektionen?
    [Unbounce: +220% Conversion]

Mobile:
[ ] Kein Carousel fuer weniger als 6 Items?
    [Notre Dame 2013: 1% Klickrate]
[ ] Cards vertikal gestapelt auf Mobile (natuerliche Scroll-Richtung)?
```
- [ ] **QA**: Cross-Page Konsistenz, Layout-Vielfalt (Never-Repeat, Inhaltstyp-Match)
- [ ] **Build**: `npm run build` erfolgreich, keine Warnings

## Code-Konventionen

### Datei-Benennung
- Dateien und Verzeichnisse: `kebab-case` (z.B. `safety-checklist.tsx`)
- React-Komponenten exportieren: `PascalCase` (z.B. `SafetyChecklist`)
- Utility-Funktionen: `camelCase`
- Konstanten: `UPPER_SNAKE_CASE`

### React/Next.js Patterns
- Server Components als Default
- `"use client"` nur bei interaktiven Elementen (onClick, useState, useEffect)
- Layouts in `layout.tsx`, Seiten in `page.tsx`
- Loading States in `loading.tsx`, Error Boundaries in `error.tsx`
- Metadata fuer SEO in jeder `page.tsx` exportieren

### TypeScript
- Strict mode, keine `any` Types
- Interfaces fuer Props, Types fuer Unions/Utility Types
- Zod fuer Runtime-Validierung von externen Daten

### Styling
- Tailwind CSS Utility Classes direkt im JSX
- Keine CSS-Module oder styled-components
- Responsive Design: Mobile-first (`sm:`, `md:`, `lg:`)

## Verzeichnis-Struktur
```
src/
  app/              # Next.js App Router (Seiten, Layouts, API Routes)
  components/       # Wiederverwendbare React-Komponenten
    ui/             # Basis-UI-Komponenten (Button, Card, etc.)
    layout/         # Layout-Komponenten (Header, Footer, Nav)
    features/       # Feature-spezifische Komponenten
  lib/              # Utility-Funktionen, Helpers, Konfiguration
  types/            # Globale TypeScript Type-Definitionen
tests/              # E2E Tests (Playwright)
docs/
  research/         # Research-Ergebnisse
  seo-agent/        # SEO-Agent Konventionen
  text-agent/       # Text-Agent Konventionen
  design-agent/     # Design-Agent Konventionen
  ux-agent/         # UX-Agent Konventionen
  cro-agent/        # CRO-Agent Konventionen
  image-agent/      # Image-Agent Konventionen (Gemini API, Icons, Badges)
public/             # Statische Assets (Bilder, Fonts)
```

## MCP-Server: Bildgenerierung

Der MCP-Server `mcp-image` (shinpr/mcp-image) ist konfiguriert fuer automatische Bildgenerierung mit Google Gemini.

- **Modelle**: Gemini 3.1 Flash Image (schnell) + Gemini 3 Pro Image (Qualitaet)
- **Output**: Bilder werden direkt in `public/images/` gespeichert
- **Features**: Automatische Prompt-Optimierung, 4K Output, Charakter-Konsistenz, Bildbearbeitung
- **Nutzung**: MCP-Tools fuer Bildgenerierung verwenden wenn Bilder fuer die Seite benoetigt werden
- Bilder in Next.js referenzieren als: `<Image src="/images/dateiname.png" ... />`

## Befehle
- `npm run dev` - Entwicklungsserver starten
- `npm run build` - Produktions-Build
- `npm run lint` - ESLint ausfuehren
- `npm test` - Vitest Tests ausfuehren (wenn konfiguriert)
- `npx playwright test` - E2E Tests (wenn konfiguriert)
