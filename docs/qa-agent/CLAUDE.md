# QA-Agent: Cross-Page Consistency & Design Review

## 1. Zustaendigkeit

Der QA-Agent ist der **letzte Pruefschritt** vor jedem Merge/Deploy. Er prueft die gesamte Website auf visuelle und funktionale Konsistenz – ueber alle Seiten hinweg.

**Wann wird der QA-Agent aufgerufen?**
- Nach JEDER Implementierung (neue Seite, Feature, Design-Aenderung)
- Vor jedem Build/Deploy
- Bei Aenderungen, die mehr als 1 Seite betreffen

**Was prueft er?**
- Cross-Page Design-Konsistenz
- Layout-Pattern-Einhaltung
- Animations-Konsistenz
- Sektions-Rhythmus
- CTA-Vollstaendigkeit
- Component-Wiederverwendung

---

## 2. Cross-Page Konsistenz-Checkliste (PFLICHT)

### 2.1 Page Header / Hero

Jede Seite MUSS einen visuell abgegrenzten Header haben:

| Seitentyp | Header-Anforderung |
|-----------|-------------------|
| Marketing-Seiten (Leistungen, Branchen, etc.) | `min-h-[400px]` + Hintergrundbild + dunkler Gradient-Overlay |
| Formular-Seiten (Kontakt, Erstanalyse) | `min-h-[400px]` + Hintergrundbild + dunkler Gradient-Overlay |
| Legal-Seiten (Datenschutz, Impressum) | `bg-primary-dark bg-grain` + Icon + Titel (kompakter, ohne Bild) |
| Startseite | `min-h-[90vh]` + Hintergrundbild + volle Hero-Section |

**VERBOTEN**: Seiten ohne Header direkt mit weissem Content beginnen lassen.

**Pruefung**: Jede `page.tsx` muss als erstes visuelles Element eine `<section>` mit dunklem Hintergrund haben.

### 2.2 Sektions-Hintergrund-Rhythmus

Aufeinanderfolgende Sektionen MUESSEN sich visuell unterscheiden (NNGroup Layer-Cake Pattern, Von Restorff 1933).

**Erlaubte Hintergruende** (in Alternierung):
- `bg-white` (neutral)
- `bg-amber-50` / `bg-bg-light` (warm)
- `bg-primary-dark` (dunkel, Akzent)
- `bg-gradient-to-br from-slate-900 ...` (dunkel, CTA)

**Regel**: Zwei aufeinanderfolgende Sektionen duerfen NICHT den gleichen oder einen zu aehnlichen Hintergrund haben.

**VERBOTEN**:
- `bg-slate-50` nach `bg-white` (zu aehnlich)
- `bg-bg-light` nach `bg-amber-50` (identisch/zu aehnlich)
- 3+ Sektionen mit aehnlich hellem Hintergrund hintereinander

**Pruefung**: Fuer jede Seite den Hintergrund-Stack auflisten und Konflikte markieren.

### 2.3 Container-Breiten

| Seitentyp | Container |
|-----------|-----------|
| Card-Grids, Features | `max-w-7xl` |
| Referenzen, mittlere Dichte | `max-w-6xl` |
| Textseiten (Legal, Blog) | `max-w-3xl` |
| Hero-Text | `max-w-3xl` (innerhalb voller Breite) |

**VERBOTEN**: `max-w-5xl` fuer Card-Grids (Baymard Institute: 40% zu schmal).

### 2.4 Animationen

Jede Seite MUSS Scroll-Animationen verwenden:

| Element | Animation |
|---------|-----------|
| Sektionen | `<AnimateOnScroll animation="fade-up">` |
| Card-Grids (3+ Karten) | `<Stagger animation="fade-up" staggerDelay={80-120}>` |
| Hero/Header | CSS `page-header-animate` oder keine Animation (bereits sichtbar) |
| CTA-Band | `<AnimateOnScroll animation="fade-up">` |

**VERBOTEN**: Sektionen ohne AnimateOnScroll (ausser Hero, der ist already visible).

**Pruefung**: Jede `<section>` ausserhalb des Hero muss in AnimateOnScroll gewrappt sein. Jeder Card-Grid muss Stagger verwenden.

### 2.5 CTA-Vollstaendigkeit

| Seitentyp | CTA-Anforderung |
|-----------|----------------|
| Marketing-Seiten | `<CtaBand>` am Seitenende (PFLICHT) |
| Formular-Seiten | Formular ist der CTA (kein extra Band noetig) |
| Legal-Seiten | Kompakter CTA-Block mit Link zu /kontakt |
| Startseite | Mindestens 2 CTAs (Band + Kontakt-Section) |

**Pruefung**: Jede Marketing-Seite muss `CtaBand` oder gleichwertigen CTA enthalten.

### 2.6 Card-Layout-Regeln

| Anzahl Items | Desktop Grid | Tablet | Mobile |
|-------------|-------------|--------|--------|
| 1 | Volle Breite oder 2-Spalten mit Bild | 1 Spalte | 1 Spalte |
| 2 | `grid-cols-2` | `grid-cols-2` | `grid-cols-1` |
| 3 | `grid-cols-3` | `grid-cols-2` | `grid-cols-1` |
| 4 | `grid-cols-4` oder `grid-cols-2` | `grid-cols-2` | `grid-cols-1` |
| 5-6 | `grid-cols-3` | `grid-cols-2` | `grid-cols-1` |
| 7+ | `grid-cols-3` oder `grid-cols-4` | `grid-cols-2` | `grid-cols-1` |

**VERBOTEN**:
- Asymmetrische letzte Zeile mit `col-span-2` (NNGroup: bricht Scanbarkeit)
- Vertikale Einzel-Spalten-Stapel fuer vergleichbare Items (Miller's Law: Arbeitsgedaechtnis ueberfordert)
- `max-w-3xl` fuer Card-Grids (zu schmal)

### 2.7 Layout-Vielfalt (NEU)

Jede Seite MUSS visuell abwechslungsreiche Layouts verwenden (NNGroup, Chartbeat, Unbounce).

**Pruefung fuer jede Seite:**

1. **Layout-Typ pro Sektion auflisten:**
   ```
   Sektion 1: Hero Split
   Sektion 2: Card Grid       ← Layout-Typ notieren
   Sektion 3: Card Grid       ← FEHLER: Wiederholung!
   Sektion 4: CTA Band
   ```

2. **Never-Repeat-Regel**: Zwei aufeinanderfolgende Sektionen duerfen NICHT das gleiche Layout verwenden.

3. **Inhaltstyp-Match pruefen** (siehe Design-Agent 13.1):
   | Inhaltstyp | Erwartetes Layout |
   |---|---|
   | Schmerzpunkte | Before/After oder Icon-Row (NICHT Card Grid) |
   | Dienstleistungen | Zigzag oder Bento (NICHT einfaches Card Grid) |
   | Social Proof (kurz) | Logo Bar / Review Strip |
   | Social Proof (detail) | Testimonial Spotlight |
   | Prozess | Timeline / Steps |
   | FAQ | Accordion (1 oder 2 Spalten) |

4. **Card-Grid-Zaehler**: Maximal 4 Card-Grid-Sektionen pro Seite. Mehr = "Kachel-Kachel-Kachel"-Problem.

5. **CTA-Rhythmus**: Conversion-Punkt alle 2-3 Sektionen pruefen.

6. **Density Wave**: Abwechslung zwischen dichten (Grid, Bento) und luftigen (CTA, Stats) Sektionen pruefen.

**VERBOTEN**:
- 2+ identische Layout-Typen direkt hintereinander
- 5+ Card-Grids auf einer Seite
- Alle Sektionen als Card-Grid ("Kachel-Kachel-Kachel")
- CTA nur ganz am Ende der Seite

### 2.8 Typografie & Spacing

Alle Seiten muessen einheitliches Spacing verwenden:

| Element | Padding |
|---------|---------|
| Marketing-Sektionen | `py-20 md:py-28` oder `py-20 md:py-32` |
| Legal-Content | `py-16 md:py-24` |
| CTA-Baender | In CtaBand-Komponente definiert |
| Sektions-Header zu Content | `mb-10` bis `mb-12` |

---

## 3. Pruefverfahren

### Schritt 1: Vollstaendiger Seiten-Scan

Fuer JEDE Seite in `src/app/*/page.tsx`:

```
1. Header vorhanden? (Typ pruefen)
2. Hintergrund-Stack auflisten (alle Sektionen)
3. Layout-Typ pro Sektion notieren (Never-Repeat pruefen)
4. Inhaltstyp-Layout-Match pruefen (Design-Agent 13.1)
5. Card-Grid-Zaehler (max 4 pro Seite)
6. Container-Breiten pruefen
7. AnimateOnScroll vorhanden?
8. Stagger auf Card-Grids?
9. CTA vorhanden? (Rhythmus: alle 2-3 Sektionen)
10. Card-Grid korrekt? (Spalten, kein col-span Hack)
```

### Schritt 2: Cross-Page Vergleich

```
1. Alle Header-Stile vergleichen → gleicher Typ = gleicher Stil?
2. Animations-Patterns konsistent?
3. Card-Styles konsistent? (gleiche Rundungen, Schatten, Hover)
4. Icon-Nutzung konsistent? (Lucide, gleiche Groessen)
5. CTA-Wording-Stil konsistent?
```

### Schritt 3: Ergebnis-Report

Format:

```
## QA-Report: [Datum]

### Seiten-Status
| Seite | Header | BG-Rhythmus | Layout-Vielfalt | Animations | CTA | Cards | Status |
|-------|--------|-------------|-----------------|------------|-----|-------|--------|

### Gefundene Probleme
1. [Seite]: [Problem] → [Fix]

### Empfehlungen
- [Optional: Verbesserungen, die nicht zwingend sind]
```

---

## 4. Haeufige Fehler (aus Erfahrung)

Diese Fehler sind in der Vergangenheit aufgetreten und muessen aktiv geprueft werden:

| Fehler | Ursache | Pruefung |
|--------|---------|----------|
| Testimonials in Einzel-Spalte gestapelt | Kein Grid-Layout definiert | Card-Grid-Regel pruefen |
| Legal-Seiten ohne Hero | Nicht als "Seite" betrachtet | Header-Pflicht-Regel |
| `bg-slate-50` neben `bg-bg-light` | Zu aehnliche Toene | BG-Stack vergleichen |
| Fehlende Stagger auf Karten | Nur AnimateOnScroll, kein Stagger | Jedes Grid pruefen |
| `\u2713` als Text statt Icon | Unicode-Escape nicht in JSX-Expression | Lucide-Icon verwenden |
| `max-w-5xl` fuer Card-Grids | Baymard: 40% zu schmal | Container-Breiten scannen |
| Dunkle Sektionen ohne `bg-grid-industrial` | Klasse vergessen | Grep nach `bg-primary-dark` ohne `bg-grid-industrial` |
| `bg-slate-900` statt `bg-primary-dark` | Falscher Farbwert | Grep nach `bg-slate-900` in Sektionen |
| Unterseiten visuell anders als Startseite | Startseite geaendert, Unterseiten nicht | Site-Wide Consistency Checkliste |
| Gradient statt `bg-primary-dark` auf CTAs | Inkonsistente dunkle Sektionen | Grep nach `bg-gradient` in Sektionen |
| Asymmetrische letzte Karte `col-span-2` | Versuch, Luecke zu fuellen | Grid-Spalten-Regel |

---

## 5. Integration in den Workflow

### Wann wird der QA-Agent aufgerufen?

```
Jede Implementierung:
  Code-Agent → fertig → QA-Agent → prueft ALLE Seiten → Report

Wenn QA-Agent Fehler findet:
  QA-Agent → Report an Code-Agent → Fix → QA-Agent prueft erneut
```

### Im Root CLAUDE.md Workflow:

Der QA-Agent kommt NACH dem Code-Agent und VOR dem Test-Agent:

```
... → Code-Agent → QA-Agent (Cross-Page Review) → Test-Agent → Final Review
```

### Quality Gate

**QA-Agent MUSS bestanden werden, bevor:**
- `npm run build` als "fertig" gilt
- Test-Agent startet
- Deployment erfolgt

---

## 6. Tooling

Der QA-Agent nutzt diese Werkzeuge:

1. **Glob**: Alle `src/app/*/page.tsx` finden
2. **Grep**: Hintergrund-Klassen, Container-Breiten, Animationen scannen
3. **Read**: Vollstaendige Seiten lesen fuer Detail-Pruefung
4. **Explore-Agent**: Tiefe Analyse bei komplexen Problemen

### Quick-Scan Befehle

```bash
# Alle Hintergrund-Klassen finden
grep -rn "className.*bg-" src/app/*/page.tsx

# Container-Breiten pruefen
grep -rn "max-w-" src/app/*/page.tsx

# AnimateOnScroll-Nutzung pruefen
grep -rn "AnimateOnScroll\|Stagger" src/app/*/page.tsx

# Fehlende Stagger auf Grids
grep -rn "grid.*grid-cols" src/app/*/page.tsx
```
