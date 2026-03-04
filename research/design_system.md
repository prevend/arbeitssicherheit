# Design System: Arbeitssicherheit MG -- Premium B2B Website

> Technische Spezifikation fuer die Implementierung der neuen Website.
> Alle Werte sind als Tailwind-CSS-Klassen angegeben und direkt umsetzbar.
> Ziel: Serioes, technisch, vertrauenswuerdig -- Premium B2B ohne Langeweile.

---

## 1. Design-Direction

### Leitprinzipien

**Serioes, nicht steif.** Die Website muss sofort Kompetenz und Vertrauenswuerdigkeit signalisieren -- wir arbeiten im Bereich Sicherheit, nicht im Bereich Lifestyle. Gleichzeitig darf der Auftritt nicht nach Behoerde oder Versicherungskonzern aussehen. Die Balance: professionell wie eine Ingenieurgesellschaft, zugaenglich wie ein moderner Mittelstandsberater.

**Technisch, nicht kalt.** Klare Strukturen, praezise Typographie, saubere Kanten. Die Informationsarchitektur ist sichtbar und nachvollziehbar. Keine verspielten Illustrationen, keine Stock-Foto-Welten mit lachenden Menschen in Warnwesten. Stattdessen: reduzierte Bildsprache, technische Praezision, Weissraum als Gestaltungsmittel.

**Vertrauenswuerdig, nicht prahlend.** Trust-Elemente sind dezent, aber allgegenwaertig: Zertifizierungen, Erfahrungszahlen, Kundenstimmen. Sie ueberzeugen durch Substanz, nicht durch Superlative. Der Ton ist sachlich-kompetent mit einem Hauch Nahbarkeit.

### Visuelle Referenz

Die Aesthetik orientiert sich an Premium-B2B-SaaS-Websites (z.B. Linear, Stripe, Vercel) -- adaptiert fuer den deutschen Mittelstand:
- Dunkle Typographie auf hellen Flaechen
- Grosszuegiger Weissraum
- Subtile Farbakzente statt bunter Flaechen
- Micro-Animationen statt statischer Layouts
- Klare Informationshierarchie

### Differenzierung zum Wettbewerb

Die Wettbewerbsanalyse zeigt: 5 von 8 Wettbewerbern haben veraltete Websites (Baukasten, ueberladene WordPress-Themes). Die neue Website muss sich durch Geschwindigkeit, visuelle Klarheit und durchdachte UX sofort abheben. Das ist kein Redesign -- es ist ein Kategorie-Wechsel.

---

## 2. Farbwelt

### Primaerfarben (Neutrale Basis)

Die Basis bildet eine kuehl-neutrale Slate-Palette. Slate statt reines Grau, weil es einen subtilen Blaustich hat, der Professionalitaet und Technik suggeriert.

| Verwendung | Tailwind-Klasse | Hex (Referenz) | Einsatz |
|---|---|---|---|
| Primaertextfarbe | `text-slate-900` | #0f172a | Ueberschriften, wichtige Texte |
| Sekundaertextfarbe | `text-slate-700` | #334155 | Fliesstext, Beschreibungen |
| Tertiaertextfarbe | `text-slate-500` | #64748b | Subtexte, Bildunterschriften, Labels |
| Dezenter Text | `text-slate-400` | #94a3b8 | Platzhaltertext, deaktivierte Elemente |
| Hintergrund Sektion (alt.) | `bg-slate-50` | #f8fafc | Abwechselnde Sektionen, Karten-Hintergrund |
| Hintergrund Standard | `bg-white` | #ffffff | Standard-Seitenhintergrund |
| Rahmenfarbe | `border-slate-200` | #e2e8f0 | Karten-Rahmen, Trennlinien |
| Rahmenfarbe (hover) | `border-slate-300` | #cbd5e1 | Hover-Zustand auf Karten |

### Akzentfarbe (Blau -- Sicherheit & Vertrauen)

Blau als Akzentfarbe, weil es im Kontext Arbeitssicherheit dreifach funktioniert: (1) Assoziation mit Sicherheit und Zuverlaessigkeit, (2) Konvention in technischen/industriellen Branchen, (3) hoher Kontrast auf hellen Flaechen.

| Verwendung | Tailwind-Klasse | Hex (Referenz) | Einsatz |
|---|---|---|---|
| Primaer-Akzent | `bg-blue-600` / `text-blue-600` | #2563eb | Buttons, Links, aktive Elemente |
| Primaer-Akzent (hover) | `bg-blue-700` | #1d4ed8 | Button-Hover, Link-Hover |
| Primaer-Akzent (pressed) | `bg-blue-800` | #1e40af | Button-Active-Zustand |
| Akzent hell | `bg-blue-50` | #eff6ff | Hintergrund fuer Hinweis-Boxen, Badge-BG |
| Akzent-Text auf hellem BG | `text-blue-700` | #1d4ed8 | Text auf blue-50-Hintergrund |
| Akzent-Rahmen | `border-blue-200` | #bfdbfe | Rahmen fuer Hinweis-Boxen |

### Semantische Farben

| Bedeutung | Hintergrund | Text | Rahmen | Einsatz |
|---|---|---|---|---|
| Erfolg | `bg-emerald-50` | `text-emerald-700` | `border-emerald-200` | Formular-Erfolg, positive Hinweise |
| Warnung | `bg-amber-50` | `text-amber-700` | `border-amber-200` | Hinweise, wichtige Informationen |
| Fehler | `bg-red-50` | `text-red-700` | `border-red-200` | Formularfehler, kritische Meldungen |
| Info | `bg-blue-50` | `text-blue-700` | `border-blue-200` | Allgemeine Informationshinweise |

### Dunkle Flaechen (CTA-Band, Footer)

| Verwendung | Tailwind-Klasse | Einsatz |
|---|---|---|
| Dunkler Hintergrund | `bg-slate-900` | Footer, CTA-Band |
| Text auf dunklem BG | `text-white` | Ueberschriften auf dunklem BG |
| Sekundaertext auf dunklem BG | `text-slate-300` | Fliesstext auf dunklem BG |
| Dezentest auf dunklem BG | `text-slate-400` | Copyright, Kleingedrucktes |
| Rahmen auf dunklem BG | `border-slate-700` | Trennlinien im Footer |

### Gradient (Hero-Bereich)

```html
<!-- Hero-Overlay auf Hintergrundbild -->
<div class="bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50">
```

Alternativ fuer rein farbigen Hero ohne Bild:

```html
<div class="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
```

---

## 3. Typographie-Hierarchie

### Schriftart

**Inter** als primaere Schriftart. Gruende: (1) hervorragende Lesbarkeit auf Bildschirmen, (2) breite Gewichtspanne (300-800), (3) professionelle Aesthetik ohne Korporat-Klischee, (4) kostenlos via Google Fonts oder self-hosted, (5) exzellente Tailwind-Integration.

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Tailwind-Config:

```js
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
}
```

### Ueberschriften-Hierarchie

| Level | Desktop | Mobile | Tailwind-Klassen |
|---|---|---|---|
| H1 | 48px / 3rem | 32px / 2rem | `text-3xl md:text-5xl font-extrabold tracking-tight leading-tight` |
| H2 | 36px / 2.25rem | 28px / 1.75rem | `text-2xl md:text-4xl font-bold tracking-tight leading-tight` |
| H3 | 24px / 1.5rem | 20px / 1.25rem | `text-xl md:text-2xl font-semibold leading-snug` |
| H4 | 20px / 1.25rem | 18px / 1.125rem | `text-lg md:text-xl font-semibold leading-snug` |

Alle Ueberschriften: `text-slate-900`

### Fliesstext

| Typ | Tailwind-Klassen | Einsatz |
|---|---|---|
| Body (Standard) | `text-base text-slate-700 leading-relaxed` | Absaetze, Beschreibungen |
| Body (gross) | `text-lg text-slate-700 leading-relaxed` | Hero-Subtext, Einleitungstexte |
| Body (klein) | `text-sm text-slate-500 leading-relaxed` | Bildunterschriften, Anmerkungen |
| Label | `text-sm font-medium text-slate-700` | Formular-Labels, Kategorie-Tags |
| Overline / Eyebrow | `text-sm font-semibold text-blue-600 uppercase tracking-wider` | Sektions-Einleitung ueber H2 |
| Button-Text | `text-sm font-semibold` oder `text-base font-semibold` | Buttons |
| Zitat | `text-xl md:text-2xl text-slate-700 italic leading-relaxed` | Testimonials |

### Abstands-Regeln (Typographie)

| Situation | Tailwind-Klasse | Wert |
|---|---|---|
| Abstand Overline zu H2 | `mb-2` | 8px |
| Abstand H2 zu Body | `mt-4` | 16px |
| Abstand zwischen Absaetzen | `mt-4` | 16px |
| Abstand H3 zu Body | `mt-3` | 12px |
| Abstand Sektion-Ueberschrift zu Inhalt | `mb-12 md:mb-16` | 48-64px |

---

## 4. Komponentenliste mit Spezifikationen

### 4.1 Header (Navigation)

**Verhalten:** Sticky, bleibt beim Scrollen oben fixiert. Bekommt nach dem ersten Scroll-Event einen Schatten und eine Hintergrundfarbe.

```html
<!-- Grundzustand (oben) -->
<header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-transparent transition-all duration-300">

<!-- Nach Scroll (Shadow-Zustand) -->
<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
```

**Layout:**

```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="flex items-center justify-between h-16 md:h-20">
    <!-- Logo (links) -->
    <a href="/" class="flex-shrink-0">
      <!-- Logo: max-h-8 md:max-h-10 -->
    </a>

    <!-- Navigation (mitte, nur Desktop ab lg:) -->
    <nav class="hidden lg:flex items-center space-x-8">
      <a class="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">Leistungen</a>
      <a class="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">Branchen</a>
      <a class="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">Ueber uns</a>
      <a class="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">Wissen</a>
      <a class="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">Kontakt</a>
    </nav>

    <!-- CTA + Telefon (rechts, nur Desktop) -->
    <div class="hidden lg:flex items-center space-x-4">
      <a href="tel:+49..." class="text-sm font-medium text-slate-700 hover:text-blue-600">
        <!-- Phone-Icon --> 02161 / XXX XXX
      </a>
      <a href="#kontakt" class="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm">
        Kostenlose Erstberatung
      </a>
    </div>

    <!-- Hamburger (nur Mobile, unter lg:) -->
    <button class="lg:hidden p-2 -mr-2 text-slate-700 hover:text-slate-900">
      <!-- Hamburger-Icon: 24x24px -->
    </button>
  </div>
</div>
```

**Spezifikation:**
- Hoehe: `h-16` (64px) mobile, `h-20` (80px) desktop
- Max-Breite Container: `max-w-7xl` (1280px)
- Padding horizontal: `px-4 sm:px-6 lg:px-8`
- Navigation sichtbar ab: `lg:` (1024px)
- Hamburger-Button sichtbar bis: `lg:hidden`
- CTA-Button immer sichtbar im Header (Desktop) und im Mobile-Drawer
- Telefonnummer links neben CTA-Button (Desktop)

### 4.2 Mobile Navigation Drawer

**Verhalten:** Oeffnet sich von rechts als Overlay-Panel. Hintergrund wird mit einem halbtransparenten Overlay abgedunkelt. Schliesst bei Klick auf Overlay, Klick auf X-Button oder Klick auf einen Link.

```html
<!-- Overlay -->
<div class="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300">

  <!-- Drawer-Panel -->
  <div class="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300">

    <!-- Header mit Schliessen-Button -->
    <div class="flex items-center justify-between px-4 h-16 border-b border-slate-200">
      <!-- Logo -->
      <button class="p-2 -mr-2 text-slate-500 hover:text-slate-700">
        <!-- X-Icon: 24x24px -->
      </button>
    </div>

    <!-- Navigation -->
    <nav class="px-4 py-6 space-y-1">
      <a class="block px-3 py-3 text-base font-medium text-slate-900 rounded-lg hover:bg-slate-50 transition-colors duration-150">
        Leistungen
      </a>
      <!-- Weitere Links identisch -->
    </nav>

    <!-- CTA unten im Drawer -->
    <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 bg-white">
      <a class="block w-full text-center px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
        Kostenlose Erstberatung
      </a>
      <a href="tel:+49..." class="block w-full text-center mt-3 text-sm font-medium text-slate-700">
        02161 / XXX XXX
      </a>
    </div>
  </div>
</div>
```

**Spezifikation:**
- Max-Breite Panel: `max-w-sm` (384px)
- Links: `text-base`, `py-3` (min. 48px Touch-Target)
- CTA fixiert am unteren Rand: `absolute bottom-0`
- Animation: `transform transition-transform duration-300` (translateX rein/raus)
- Overlay: `bg-slate-900/50 backdrop-blur-sm`

### 4.3 Hero Section

**Layout:** Vollbreite, dunkler Hintergrund (Gradient oder Bild mit Overlay). Starker Kontrast. Einzige Sektion, die visuell "laut" sein darf.

```html
<section class="relative min-h-[600px] md:min-h-[700px] flex items-center bg-slate-900 overflow-hidden">

  <!-- Hintergrundbild (optional) -->
  <img src="..." alt="" class="absolute inset-0 w-full h-full object-cover opacity-30" />

  <!-- Gradient-Overlay -->
  <div class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>

  <!-- Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div class="max-w-3xl">

      <!-- Eyebrow -->
      <p class="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
        Fachkraft fuer Arbeitssicherheit
      </p>

      <!-- H1 -->
      <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
        Arbeitssicherheit,<br />
        die Ihr Unternehmen<br />
        <span class="text-blue-400">wirklich schuetzt.</span>
      </h1>

      <!-- Subtext -->
      <p class="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
        Wir uebernehmen Ihre gesetzliche Pflichtbetreuung -- rechtssicher,
        digital dokumentiert und mit transparenten Festpreisen.
      </p>

      <!-- CTA-Gruppe -->
      <div class="mt-10 flex flex-col sm:flex-row gap-4">
        <a href="#kontakt" class="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-600/25">
          Kostenlose Erstberatung
          <svg class="ml-2 w-5 h-5"><!-- Arrow-Right-Icon --></svg>
        </a>
        <a href="tel:+49..." class="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white text-base font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200">
          <svg class="mr-2 w-5 h-5"><!-- Phone-Icon --></svg>
          02161 / XXX XXX
        </a>
      </div>

      <!-- Trust-Badges (unterhalb CTAs) -->
      <div class="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-400">
        <span class="flex items-center gap-2">
          <svg class="w-5 h-5 text-emerald-400"><!-- Check-Icon --></svg>
          Zertifiziert nach DGUV V2
        </span>
        <span class="flex items-center gap-2">
          <svg class="w-5 h-5 text-emerald-400"><!-- Check-Icon --></svg>
          15+ Jahre Erfahrung
        </span>
        <span class="flex items-center gap-2">
          <svg class="w-5 h-5 text-emerald-400"><!-- Check-Icon --></svg>
          500+ betreute Unternehmen
        </span>
      </div>
    </div>
  </div>
</section>
```

**Spezifikation:**
- Mindesthoehe: `min-h-[600px] md:min-h-[700px]`
- Content-Breite: `max-w-3xl` innerhalb `max-w-7xl`
- Padding: `py-24 md:py-32` (96px / 128px vertikal)
- H1 mit farbigem Akzent: `text-blue-400` fuer einzelne Woerter
- CTA-Buttons: Stack vertikal auf Mobile (`flex-col`), horizontal ab `sm:` (`sm:flex-row`)
- Primaerer CTA: `bg-blue-600` mit `shadow-lg shadow-blue-600/25` (subtiler Glow)
- Sekundaerer CTA: `bg-white/10 border border-white/20` (Ghost-Button)

### 4.4 USP Cards (Alleinstellungsmerkmale)

**Layout:** 3 Karten nebeneinander auf Desktop, gestapelt auf Mobile. Jede Karte: Icon + Headline + Beschreibung.

```html
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Sektions-Header -->
    <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
      <p class="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Warum wir</p>
      <h2 class="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
        Arbeitssicherheit ohne Kompromisse
      </h2>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Einzelne USP-Card -->
      <div class="relative p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">

        <!-- Icon-Container -->
        <div class="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-5">
          <svg class="w-6 h-6"><!-- Icon --></svg>
        </div>

        <!-- Headline -->
        <h3 class="text-lg font-semibold text-slate-900 mb-2">Transparente Festpreise</h3>

        <!-- Beschreibung -->
        <p class="text-sm text-slate-600 leading-relaxed">
          Keine versteckten Kosten. Sie wissen vorher, was die Betreuung kostet --
          mit klaren Paketpreisen pro Mitarbeiter.
        </p>
      </div>

      <!-- Weitere Karten identisch -->
    </div>
  </div>
</section>
```

**Spezifikation:**
- Grid: `grid-cols-1 md:grid-cols-3 gap-8`
- Karten-Padding: `p-8` (32px)
- Icon-Container: `w-12 h-12`, `bg-blue-100`, `rounded-xl`
- Karten-Ecken: `rounded-2xl`
- Karten-Rahmen: `border border-slate-200`
- Hover: `hover:border-slate-300 hover:shadow-lg`
- Abstand Icon zu Headline: `mb-5` (20px)
- Abstand Headline zu Text: `mb-2` (8px)

### 4.5 Service Grid (Leistungen)

**Layout:** 6 Karten im 2x3-Grid auf Desktop, 1-spaltig auf Mobile. Jede Karte verlinkt zur entsprechenden Leistungsseite.

```html
<section class="py-16 md:py-24 bg-slate-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Sektions-Header (linksbundig) -->
    <div class="max-w-2xl mb-12 md:mb-16">
      <p class="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Leistungen</p>
      <h2 class="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
        Alles aus einer Hand -- von der Beratung bis zur Pruefung
      </h2>
      <p class="mt-4 text-lg text-slate-600 leading-relaxed">
        Unsere Leistungsmodule decken den gesamten Arbeitsschutz Ihres Unternehmens ab.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Service-Card -->
      <a href="/leistungen/..." class="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300">

        <!-- Icon -->
        <div class="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-100 transition-colors duration-300">
          <svg class="w-5 h-5"><!-- Icon --></svg>
        </div>

        <!-- Headline -->
        <h3 class="text-base font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
          Gefaehrdungsbeurteilung
        </h3>

        <!-- Kurzbeschreibung -->
        <p class="text-sm text-slate-500 leading-relaxed">
          Systematische Analyse aller Arbeitsplaetze und Taetigkeiten.
        </p>

        <!-- Link-Indikator -->
        <span class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Mehr erfahren
          <svg class="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"><!-- Arrow --></svg>
        </span>
      </a>

      <!-- 5 weitere Karten identisch -->
    </div>
  </div>
</section>
```

**Spezifikation:**
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- Karten-Padding: `p-6` (24px)
- Karten-Ecken: `rounded-xl`
- Icon-Container: `w-10 h-10`, `bg-blue-50`, `rounded-lg`
- Hover-Verhalten: Rahmen wechselt zu `border-blue-200`, Schatten erscheint, Headline wird blau, "Mehr erfahren"-Link erscheint
- Gesamte Karte ist klickbar (`<a>` als Wrapper)

### 4.6 Process Steps (Ablauf der Zusammenarbeit)

**Layout:** 4 nummerierte Schritte. Horizontal auf Desktop (Zeile mit Verbindungslinien), vertikal auf Mobile (Spalte mit Verbindungslinien).

```html
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Sektions-Header -->
    <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
      <p class="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">So funktioniert es</p>
      <h2 class="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
        In vier Schritten zur sicheren Betreuung
      </h2>
    </div>

    <!-- Steps-Container -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">

      <!-- Verbindungslinie (nur Desktop) -->
      <div class="hidden md:block absolute top-8 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-slate-200"></div>

      <!-- Step -->
      <div class="relative flex md:flex-col items-start md:items-center text-left md:text-center">

        <!-- Nummer -->
        <div class="relative z-10 w-16 h-16 flex items-center justify-center bg-blue-600 text-white text-xl font-bold rounded-full shrink-0 shadow-lg shadow-blue-600/20">
          1
        </div>

        <!-- Verbindungslinie (nur Mobile) -->
        <div class="md:hidden absolute left-8 top-16 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

        <!-- Text -->
        <div class="ml-6 md:ml-0 md:mt-6 pb-8 md:pb-0">
          <h3 class="text-base font-semibold text-slate-900 mb-1">Erstberatung</h3>
          <p class="text-sm text-slate-500 leading-relaxed">
            Kostenlos und unverbindlich. Wir analysieren Ihren Bedarf und erstellen ein Angebot.
          </p>
        </div>
      </div>

      <!-- Steps 2, 3, 4 identisch (letzter Step ohne untere Verbindungslinie auf Mobile) -->
    </div>
  </div>
</section>
```

**Spezifikation:**
- Grid: `grid-cols-1 md:grid-cols-4 gap-8 md:gap-4`
- Nummer-Kreis: `w-16 h-16`, `bg-blue-600`, `rounded-full`, `text-xl font-bold`
- Desktop: Zentriert, Nummer oben, Text darunter (`flex-col items-center text-center`)
- Mobile: Horizontal, Nummer links, Text rechts (`flex items-start text-left`)
- Verbindungslinie Desktop: Horizontale Linie (`h-0.5 bg-slate-200`) hinter den Kreisen
- Verbindungslinie Mobile: Vertikale Linie (`w-0.5 bg-slate-200`) von Kreis zu Kreis

### 4.7 Branchen Grid

**Layout:** 8 Karten im 4x2-Grid auf Desktop, 2x4 auf Tablet, 1-spaltig auf Mobile. Kompaktere Karten als Service-Grid.

```html
<section class="py-16 md:py-24 bg-slate-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Sektions-Header -->
    <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
      <p class="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Branchen</p>
      <h2 class="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
        Branchenkenntnis schafft Sicherheit
      </h2>
      <p class="mt-4 text-lg text-slate-600">
        Wir kennen die spezifischen Anforderungen Ihrer Branche.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

      <!-- Branchen-Card -->
      <a href="/branchen/..." class="group flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300">

        <!-- Icon -->
        <div class="w-12 h-12 flex items-center justify-center bg-slate-100 text-slate-600 rounded-xl shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
          <svg class="w-6 h-6"><!-- Branchen-Icon --></svg>
        </div>

        <!-- Text -->
        <div>
          <h3 class="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
            Produktion & Fertigung
          </h3>
          <p class="text-xs text-slate-500 mt-0.5">Maschinen, Laerm, Gefahrstoffe</p>
        </div>
      </a>

      <!-- 7 weitere Karten identisch -->
    </div>
  </div>
</section>
```

**Spezifikation:**
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4`
- Karten-Padding: `p-5` (20px)
- Layout innerhalb der Karte: Horizontal (`flex items-center gap-4`)
- Icon-Container: `w-12 h-12`, `bg-slate-100`, `rounded-xl`
- Headline: `text-sm font-semibold`
- Subtext: `text-xs text-slate-500`
- Hover: Icon-BG wechselt zu `bg-blue-50`, Icon-Farbe zu `text-blue-600`

### 4.8 Testimonials

**Layout:** 3 Karten nebeneinander auf Desktop. Jede Karte: Zitat, Name, Position, Unternehmen. Optional Sternebewertung.

```html
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Sektions-Header -->
    <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
      <p class="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Kundenstimmen</p>
      <h2 class="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
        Was unsere Kunden sagen
      </h2>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Testimonial-Card -->
      <div class="p-8 bg-slate-50 rounded-2xl border border-slate-200">

        <!-- Sterne -->
        <div class="flex items-center gap-1 mb-4">
          <!-- 5x Stern-Icon -->
          <svg class="w-5 h-5 text-amber-400 fill-current"><!-- Star --></svg>
          <svg class="w-5 h-5 text-amber-400 fill-current"><!-- Star --></svg>
          <svg class="w-5 h-5 text-amber-400 fill-current"><!-- Star --></svg>
          <svg class="w-5 h-5 text-amber-400 fill-current"><!-- Star --></svg>
          <svg class="w-5 h-5 text-amber-400 fill-current"><!-- Star --></svg>
        </div>

        <!-- Zitat -->
        <blockquote class="text-base text-slate-700 leading-relaxed mb-6">
          "Die Zusammenarbeit ist vorbildlich. Schnelle Reaktionszeiten,
          kompetente Beratung und eine lueckenlose Dokumentation.
          Wir fuehlen uns bestens betreut."
        </blockquote>

        <!-- Person -->
        <div class="flex items-center gap-3">
          <!-- Avatar (optional) -->
          <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
            MK
          </div>
          <div>
            <p class="text-sm font-semibold text-slate-900">Michael Krause</p>
            <p class="text-xs text-slate-500">Geschaeftsfuehrer, Krause Metallbau GmbH</p>
          </div>
        </div>
      </div>

      <!-- 2 weitere Karten identisch -->
    </div>
  </div>
</section>
```

**Spezifikation:**
- Grid: `grid-cols-1 md:grid-cols-3 gap-8`
- Karten-Padding: `p-8` (32px)
- Karten-Ecken: `rounded-2xl`
- Karten-Hintergrund: `bg-slate-50`
- Sterne: `w-5 h-5 text-amber-400 fill-current`
- Zitat: `text-base text-slate-700 leading-relaxed`
- Avatar: `w-10 h-10`, `bg-blue-100`, `rounded-full`, Initialen als Fallback
- Name: `text-sm font-semibold text-slate-900`
- Position/Firma: `text-xs text-slate-500`

### 4.9 FAQ Accordion

**Layout:** Einzelne Spalte, zentriert. Fragen klappbar, jeweils nur eine geoeffnet. Plus/Minus-Icon rechts.

```html
<section class="py-16 md:py-24 bg-white">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Sektions-Header -->
    <div class="text-center mb-12 md:mb-16">
      <p class="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">FAQ</p>
      <h2 class="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
        Haeufig gestellte Fragen
      </h2>
    </div>

    <!-- Accordion-Container -->
    <div class="divide-y divide-slate-200 border-t border-b border-slate-200">

      <!-- Accordion-Item (geschlossen) -->
      <div>
        <button class="w-full flex items-center justify-between py-5 text-left group">
          <span class="text-base font-medium text-slate-900 pr-4 group-hover:text-blue-600 transition-colors duration-200">
            Was kostet die Betreuung durch eine Fachkraft fuer Arbeitssicherheit?
          </span>
          <svg class="w-5 h-5 text-slate-400 shrink-0 transform transition-transform duration-300">
            <!-- Plus-Icon (wird bei geoeffnet zu Minus oder 180deg rotiert) -->
          </svg>
        </button>
      </div>

      <!-- Accordion-Item (geoeffnet) -->
      <div>
        <button class="w-full flex items-center justify-between py-5 text-left">
          <span class="text-base font-medium text-blue-600 pr-4">
            Brauche ich ueberhaupt eine externe Fachkraft fuer Arbeitssicherheit?
          </span>
          <svg class="w-5 h-5 text-blue-600 shrink-0 transform rotate-180 transition-transform duration-300">
            <!-- Icon rotiert -->
          </svg>
        </button>
        <!-- Antwort-Content -->
        <div class="pb-5 pr-12">
          <p class="text-sm text-slate-600 leading-relaxed">
            Ja, nach DGUV Vorschrift 2 ist jeder Arbeitgeber verpflichtet...
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
```

**Spezifikation:**
- Content-Breite: `max-w-3xl` (768px)
- Trennung: `divide-y divide-slate-200` plus aeussere Raender `border-t border-b`
- Button-Hoehe: `py-5` (20px oben + unten) -- ergibt min. 60px Touch-Target
- Frage-Text: `text-base font-medium text-slate-900`
- Frage-Text (aktiv): `text-blue-600`
- Antwort-Text: `text-sm text-slate-600 leading-relaxed`
- Antwort-Padding: `pb-5 pr-12` (rechts Platz fuer Icon)
- Icon-Rotation: `transform rotate-180 transition-transform duration-300`
- Animation Antwort-Bereich: Hoehe animiert mit CSS `max-height` und `overflow-hidden`

### 4.10 CTA Band

**Layout:** Vollbreite, dunkler Hintergrund (Slate-900). Zentrierter Text mit CTA-Button. Erscheint typischerweise zwischen Sektionen oder vor dem Footer.

```html
<section class="py-16 md:py-20 bg-slate-900">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    <!-- Headline -->
    <h2 class="text-2xl md:text-4xl font-bold text-white tracking-tight">
      Bereit fuer rechtssicheren Arbeitsschutz?
    </h2>

    <!-- Subtext -->
    <p class="mt-4 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
      Lassen Sie uns in einem kostenlosen Erstgespraech herausfinden,
      wie wir Ihr Unternehmen unterstuetzen koennen.
    </p>

    <!-- CTA-Buttons -->
    <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="#kontakt" class="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-600/25">
        Kostenlose Erstberatung
        <svg class="ml-2 w-5 h-5"><!-- Arrow --></svg>
      </a>
      <a href="tel:+49..." class="inline-flex items-center justify-center px-8 py-4 text-white text-base font-semibold hover:text-blue-400 transition-colors duration-200">
        <svg class="mr-2 w-5 h-5"><!-- Phone --></svg>
        02161 / XXX XXX
      </a>
    </div>

    <!-- Vertrauenssignal -->
    <p class="mt-8 text-sm text-slate-400">
      Kostenlos und unverbindlich -- Antwort innerhalb von 24 Stunden
    </p>
  </div>
</section>
```

**Spezifikation:**
- Hintergrund: `bg-slate-900`
- Padding: `py-16 md:py-20`
- Content-Breite: `max-w-4xl` (896px)
- Zentriert: `text-center`
- CTA-Button: Identisch mit Hero-CTA (`bg-blue-600`, `shadow-lg shadow-blue-600/25`)
- Telefon-Link: Ghost-Style (`text-white hover:text-blue-400`)
- Zusatztext: `text-sm text-slate-400`

### 4.11 Footer

**Layout:** 4 Spalten auf Desktop (Kontakt, Leistungen, Unternehmen, Rechtliches). Dunkler Hintergrund. Copyright-Zeile unten.

```html
<footer class="bg-slate-900 border-t border-slate-800">

  <!-- Hauptbereich -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

      <!-- Spalte 1: Kontakt / Branding -->
      <div class="sm:col-span-2 lg:col-span-1">
        <!-- Logo (hell/weiss-Variante) -->
        <img src="..." alt="Arbeitssicherheit MG" class="h-8 mb-4" />
        <p class="text-sm text-slate-400 leading-relaxed mb-6">
          Ihre externe Fachkraft fuer Arbeitssicherheit
          in Moenchengladbach und Umgebung.
        </p>
        <div class="space-y-2">
          <a href="tel:+49..." class="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors duration-200">
            <svg class="w-4 h-4 text-slate-500"><!-- Phone --></svg>
            02161 / XXX XXX
          </a>
          <a href="mailto:..." class="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors duration-200">
            <svg class="w-4 h-4 text-slate-500"><!-- Mail --></svg>
            info@arbeitssicherheit-mg.de
          </a>
        </div>
      </div>

      <!-- Spalte 2: Leistungen -->
      <div>
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Leistungen</h4>
        <ul class="space-y-2">
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Gefaehrdungsbeurteilung</a></li>
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Betriebsbegehungen</a></li>
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Unterweisungen</a></li>
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Betriebsmittelpruefungen</a></li>
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Schulungen</a></li>
        </ul>
      </div>

      <!-- Spalte 3: Unternehmen -->
      <div>
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Unternehmen</h4>
        <ul class="space-y-2">
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Ueber uns</a></li>
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Team</a></li>
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Branchen</a></li>
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Blog</a></li>
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Kontakt</a></li>
        </ul>
      </div>

      <!-- Spalte 4: Rechtliches -->
      <div>
        <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Rechtliches</h4>
        <ul class="space-y-2">
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Impressum</a></li>
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">Datenschutz</a></li>
          <li><a href="..." class="text-sm text-slate-400 hover:text-white transition-colors duration-200">AGB</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Copyright-Zeile -->
  <div class="border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-xs text-slate-500">
        2026 Arbeitssicherheit MG GmbH. Alle Rechte vorbehalten.
      </p>
      <!-- Zertifizierungs-Logos (optional) -->
      <div class="flex items-center gap-4">
        <img src="..." alt="DGUV V2" class="h-6 opacity-50 hover:opacity-100 transition-opacity duration-200" />
      </div>
    </div>
  </div>
</footer>
```

**Spezifikation:**
- Hintergrund: `bg-slate-900`
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12`
- Spalten-Ueberschriften: `text-sm font-semibold text-white uppercase tracking-wider`
- Links: `text-sm text-slate-400 hover:text-white`
- Link-Abstand: `space-y-2`
- Padding Hauptbereich: `py-12 md:py-16`
- Copyright-Bereich: Getrennt durch `border-t border-slate-800`, `py-6`
- Copyright-Text: `text-xs text-slate-500`

### 4.12 Contact Form (Kontaktformular)

**Layout:** 2 Spalten auf Desktop (Formular links, Kontaktinfos rechts). Volle Breite auf Mobile.

```html
<section id="kontakt" class="py-16 md:py-24 bg-slate-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

      <!-- Formular (3/5 Breite) -->
      <div class="lg:col-span-3">
        <h2 class="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2">
          Kostenlose Erstberatung anfragen
        </h2>
        <p class="text-lg text-slate-600 mb-8">
          Fuellen Sie das Formular aus -- wir melden uns innerhalb von 24 Stunden.
        </p>

        <form class="space-y-6">
          <!-- 2-Spalten-Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <!-- Input-Feld -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1.5">
                Vorname <span class="text-red-500">*</span>
              </label>
              <input type="text" required
                class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600
                       transition-colors duration-200"
                placeholder="Ihr Vorname" />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1.5">
                Nachname <span class="text-red-500">*</span>
              </label>
              <input type="text" required
                class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600
                       transition-colors duration-200"
                placeholder="Ihr Nachname" />
            </div>
          </div>

          <!-- Volle Breite -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5">
              Unternehmen <span class="text-red-500">*</span>
            </label>
            <input type="text" required
              class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400
                     focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600
                     transition-colors duration-200"
              placeholder="Firmenname" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1.5">
                E-Mail <span class="text-red-500">*</span>
              </label>
              <input type="email" required
                class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600
                       transition-colors duration-200"
                placeholder="ihre@email.de" />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1.5">Telefon</label>
              <input type="tel"
                class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600
                       transition-colors duration-200"
                placeholder="+49 ..." />
            </div>
          </div>

          <!-- Select-Feld -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5">
              Anzahl Mitarbeiter
            </label>
            <select class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900
                          focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600
                          transition-colors duration-200">
              <option value="">Bitte waehlen</option>
              <option>1-10 Mitarbeiter</option>
              <option>11-49 Mitarbeiter</option>
              <option>50-249 Mitarbeiter</option>
              <option>250+ Mitarbeiter</option>
            </select>
          </div>

          <!-- Textarea -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1.5">Ihre Nachricht</label>
            <textarea rows="4"
              class="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400
                     focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600
                     transition-colors duration-200 resize-y"
              placeholder="Wie koennen wir Ihnen helfen?"></textarea>
          </div>

          <!-- DSGVO Checkbox -->
          <div class="flex items-start gap-3">
            <input type="checkbox" required
              class="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded
                     focus:ring-2 focus:ring-blue-600/20" />
            <label class="text-sm text-slate-600 leading-relaxed">
              Ich stimme der Verarbeitung meiner Daten gemaess der
              <a href="/datenschutz" class="text-blue-600 hover:text-blue-700 underline">Datenschutzerklaerung</a> zu.
              <span class="text-red-500">*</span>
            </label>
          </div>

          <!-- Submit -->
          <button type="submit"
            class="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-lg
                   hover:bg-blue-700 active:bg-blue-800
                   focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:ring-offset-2
                   transition-colors duration-200 shadow-sm
                   disabled:opacity-50 disabled:cursor-not-allowed">
            Erstberatung anfragen
          </button>
        </form>

        <!-- Erfolgs-Meldung (initial hidden) -->
        <div class="hidden mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0"><!-- Check-Circle --></svg>
            <div>
              <p class="text-sm font-medium text-emerald-800">Ihre Anfrage wurde erfolgreich gesendet.</p>
              <p class="text-sm text-emerald-700 mt-1">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
            </div>
          </div>
        </div>

        <!-- Fehler-Meldung (initial hidden) -->
        <div class="hidden mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-red-600 mt-0.5 shrink-0"><!-- Exclamation-Circle --></svg>
            <div>
              <p class="text-sm font-medium text-red-800">Beim Senden ist ein Fehler aufgetreten.</p>
              <p class="text-sm text-red-700 mt-1">Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Kontaktinfo-Sidebar (2/5 Breite) -->
      <div class="lg:col-span-2">
        <div class="bg-white p-8 rounded-2xl border border-slate-200 sticky top-24">
          <h3 class="text-lg font-semibold text-slate-900 mb-6">Kontakt</h3>

          <div class="space-y-6">
            <!-- Telefon -->
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <svg class="w-5 h-5"><!-- Phone --></svg>
              </div>
              <div>
                <p class="text-sm font-medium text-slate-900">Telefon</p>
                <a href="tel:+49..." class="text-sm text-slate-600 hover:text-blue-600 transition-colors">02161 / XXX XXX</a>
              </div>
            </div>

            <!-- E-Mail -->
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <svg class="w-5 h-5"><!-- Mail --></svg>
              </div>
              <div>
                <p class="text-sm font-medium text-slate-900">E-Mail</p>
                <a href="mailto:..." class="text-sm text-slate-600 hover:text-blue-600 transition-colors">info@arbeitssicherheit-mg.de</a>
              </div>
            </div>

            <!-- Adresse -->
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <svg class="w-5 h-5"><!-- MapPin --></svg>
              </div>
              <div>
                <p class="text-sm font-medium text-slate-900">Adresse</p>
                <p class="text-sm text-slate-600">Musterstrasse 1<br />41061 Moenchengladbach</p>
              </div>
            </div>

            <!-- Erreichbarkeit -->
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg shrink-0">
                <svg class="w-5 h-5"><!-- Clock --></svg>
              </div>
              <div>
                <p class="text-sm font-medium text-slate-900">Erreichbarkeit</p>
                <p class="text-sm text-slate-600">Mo-Fr: 08:00 - 17:00 Uhr</p>
              </div>
            </div>
          </div>

          <!-- Vertrauenssignal -->
          <div class="mt-8 pt-6 border-t border-slate-200">
            <div class="flex items-center gap-2 text-sm text-slate-500">
              <svg class="w-4 h-4 text-emerald-500"><!-- Shield-Check --></svg>
              Ihre Daten werden SSL-verschluesselt uebertragen
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Spezifikation:**
- Grid: `grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16`
- Formular: `lg:col-span-3`
- Sidebar: `lg:col-span-2`, `sticky top-24` (klebt beim Scrollen)
- Input-Felder: `px-4 py-3`, `border border-slate-300`, `rounded-lg`
- Focus-Ring: `focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`
- Fehler-Zustand auf Inputs: `border-red-500 focus:ring-red-600/20 focus:border-red-600`
- Label: `text-sm font-medium text-slate-700 mb-1.5`
- Pflichtfeld-Markierung: `text-red-500` auf dem Asterisk
- Submit-Button: Volle Breite auf Mobile (`w-full sm:w-auto`), Standard-Breite ab `sm:`
- Disabled-Zustand (waehrend Absenden): `disabled:opacity-50 disabled:cursor-not-allowed`

---

## 5. Microinteractions

### 5.1 Hover-Effekte

**Karten (USP, Service, Branchen, Testimonials):**
```css
/* Tailwind-Klassen auf dem Element */
class="transition-all duration-300 hover:shadow-lg hover:border-slate-300"
/* Bei Service-Karten zusaetzlich: */
class="hover:border-blue-200"
```
- Dauer: `duration-300` (300ms)
- Timing: Standard ease (Tailwind default)
- Effekt: Schatten erscheint, Rahmenfarbe wechselt dezent

**Buttons (primaer):**
```css
class="transition-colors duration-200 hover:bg-blue-700 active:bg-blue-800"
```
- Dauer: `duration-200` (200ms, schneller als Karten)
- Active-State: Noch dunklere Farbe fuer haptisches Feedback

**Links (Text):**
```css
class="transition-colors duration-200 hover:text-blue-600"
```

**Navigation-Links:**
```css
class="transition-colors duration-200 hover:text-blue-600"
/* Optional: Underline-Animation */
class="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
```

### 5.2 Focus-States (Barrierefreiheit)

Alle interaktiven Elemente muessen einen sichtbaren Focus-State haben:

**Buttons:**
```css
class="focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:ring-offset-2"
```

**Input-Felder:**
```css
class="focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
```

**Links:**
```css
class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/20 focus-visible:ring-offset-2 focus-visible:rounded"
```

**Karten (wenn klickbar):**
```css
class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/20 focus-visible:ring-offset-2"
```

Hinweis: `focus-visible` statt `focus` verwenden, wo moeglich, damit der Ring nur bei Tastatur-Navigation erscheint, nicht bei Mausklick.

### 5.3 Accordion Animation

```css
/* CSS fuer die Hoehen-Animation (nicht nativ mit Tailwind moeglich): */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.2s ease-out;
  opacity: 0;
}

.accordion-content.is-open {
  max-height: 500px; /* Ausreichend grosser Wert */
  opacity: 1;
  transition: max-height 0.4s ease-in, opacity 0.3s ease-in;
}
```

Icon-Rotation:
```css
class="transform transition-transform duration-300"
/* Bei geoeffnet: */
class="transform rotate-180 transition-transform duration-300"
```

### 5.4 Scroll-Triggered Section Visibility

Sektionen erscheinen beim Scrollen mit einer subtilen Einblende-Animation. Implementierung via Intersection Observer API.

```css
/* Ausgangszustand (unsichtbar) */
.reveal-section {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Sichtbar (JS fuegt Klasse hinzu) */
.reveal-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered-Effekt fuer Karten innerhalb eines Grids */
.reveal-section.is-visible .reveal-child:nth-child(1) { transition-delay: 0ms; }
.reveal-section.is-visible .reveal-child:nth-child(2) { transition-delay: 100ms; }
.reveal-section.is-visible .reveal-child:nth-child(3) { transition-delay: 200ms; }
.reveal-section.is-visible .reveal-child:nth-child(4) { transition-delay: 300ms; }
.reveal-section.is-visible .reveal-child:nth-child(5) { transition-delay: 400ms; }
.reveal-section.is-visible .reveal-child:nth-child(6) { transition-delay: 500ms; }
```

**JavaScript (Intersection Observer):**
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Nur einmal auslosen
    }
  });
}, { threshold: 0.15 }); // Ausloesen bei 15% Sichtbarkeit

document.querySelectorAll('.reveal-section').forEach(el => observer.observe(el));
```

**Spezifikation:**
- Bewegung: `translateY(24px)` nach `translateY(0)` -- subtle, nicht dramatisch
- Dauer: `0.6s` fuer Sektionen
- Stagger-Delay: 100ms zwischen Karten
- Threshold: 15% (Sektion muss 15% sichtbar sein)
- Nur einmaliges Auslosen (kein Re-Trigger beim Hochscrollen)
- `prefers-reduced-motion` respektieren: Animation deaktivieren fuer Nutzer, die das wuenschen

```css
@media (prefers-reduced-motion: reduce) {
  .reveal-section {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### 5.5 Button Click Feedback

```css
/* Primaerer Button: Kurzes "Eindrucken" bei Klick */
class="active:scale-[0.98] transition-all duration-200"
```

Dauer: Minimal (200ms), nicht stoerend, aber spuerbar.

### 5.6 Loading-Zustand (Formular-Submit)

```html
<!-- Button waehrend des Sendens -->
<button disabled class="... disabled:opacity-50 disabled:cursor-not-allowed">
  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white">
    <!-- Spinner-SVG -->
  </svg>
  Wird gesendet...
</button>
```

---

## 6. Responsive Verhalten

### 6.1 Breakpoints

| Breakpoint | Tailwind-Prefix | Min-Width | Aenderungen |
|---|---|---|---|
| Basis (Mobile) | (kein Prefix) | 0px | 1-spaltig, gestapelt, Hamburger-Menu, grosse Touch-Targets |
| Small | `sm:` | 640px | 2-spaltige Grids (Formular, Branchen), Buttons nebeneinander |
| Medium | `md:` | 768px | Groessere Ueberschriften, mehr Padding, 2-3-spaltige Grids |
| Large | `lg:` | 1024px | Desktop-Navigation sichtbar, volle Grid-Layouts, Sidebar-Layouts |
| XL | `xl:` | 1280px | Maximale Container-Breite erreicht |

### 6.2 Konkrete Aenderungen je Breakpoint

**Mobile (< 640px):**
- Navigation: Hamburger-Menu, Mobile-Drawer
- Alle Grids: 1-spaltig (`grid-cols-1`)
- CTA-Buttons: Volle Breite (`w-full`), vertikal gestapelt (`flex-col`)
- H1: `text-3xl` (30px)
- H2: `text-2xl` (24px)
- Section-Padding: `py-16` (64px)
- Karten: Volle Breite, reduziertes Padding
- Process Steps: Vertikal mit seitlicher Verbindungslinie
- Kontaktformular: 1-spaltig
- Footer: 1-spaltig, gestapelt

**Tablet (640px - 1023px):**
- Navigation: Immer noch Hamburger-Menu (bis `lg:`)
- Grids: 2-spaltig (`sm:grid-cols-2`)
- CTA-Buttons: Nebeneinander (`sm:flex-row`)
- Formular-Felder: 2-spaltig wo sinnvoll (`sm:grid-cols-2`)
- Branchen-Grid: 2 Spalten
- Footer: 2 Spalten

**Desktop (ab 1024px):**
- Navigation: Vollstaendige Navigation sichtbar (`lg:flex`)
- Hamburger-Menu: Versteckt (`lg:hidden`)
- Service-Grid: 3 Spalten (`lg:grid-cols-3`)
- Branchen-Grid: 4 Spalten (`lg:grid-cols-4`)
- Process Steps: 4 Spalten horizontal (`md:grid-cols-4`)
- Kontaktformular: 3/5 + 2/5 Split (`lg:grid-cols-5`)
- Footer: 4 Spalten (`lg:grid-cols-4`)
- Section-Padding: `md:py-24` (96px)

### 6.3 Touch-Targets

Alle interaktiven Elemente muessen eine Mindestgroesse von 44x44px haben:

| Element | Umsetzung |
|---|---|
| Navigation-Links (Mobile) | `py-3` (12px oben + unten) + `text-base` = ca. 48px Hoehe |
| Buttons | `py-3` oder `py-4` = 48-56px Hoehe |
| Hamburger-Button | `p-2` + 24px Icon = 40px, mit `-mr-2` visuell korrigiert |
| Accordion-Buttons | `py-5` = 60px+ Hoehe |
| Checkbox | `w-4 h-4` mit grosszuegigem Label-Bereich |
| Select-Felder | `py-3` = 48px Hoehe |

### 6.4 Navigation Collapse

- **Unter 1024px (`lg:`):** Desktop-Navigation und CTA-Bereich werden ausgeblendet (`hidden lg:flex`). Hamburger-Button wird sichtbar (`lg:hidden`).
- **Ab 1024px:** Hamburger-Button wird ausgeblendet, Desktop-Navigation erscheint.
- **Kein Zwischen-Zustand:** Es gibt keine "Tablet-Navigation" -- nur Mobile (Drawer) oder Desktop (inline).

---

## 7. Spacing & Layout System

### 7.1 Container

```html
<!-- Standard-Container fuer alle Sektionen -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

| Eigenschaft | Wert | Tailwind |
|---|---|---|
| Max-Breite | 1280px | `max-w-7xl` |
| Padding links/rechts (Mobile) | 16px | `px-4` |
| Padding links/rechts (Tablet) | 24px | `sm:px-6` |
| Padding links/rechts (Desktop) | 32px | `lg:px-8` |
| Zentrierung | auto | `mx-auto` |

**Schmaler Container** (fuer Textsektionen, FAQ):
```html
<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
```
Max-Breite: 768px (`max-w-3xl`)

**CTA-Container** (fuer CTA-Band):
```html
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
```
Max-Breite: 896px (`max-w-4xl`)

### 7.2 Sektions-Abstaende (vertikal)

| Sektion | Padding | Tailwind |
|---|---|---|
| Standard-Sektion | 64px / 96px | `py-16 md:py-24` |
| Hero | 96px / 128px | `py-24 md:py-32` |
| CTA-Band | 64px / 80px | `py-16 md:py-20` |
| Footer (Hauptbereich) | 48px / 64px | `py-12 md:py-16` |
| Footer (Copyright) | 24px | `py-6` |

### 7.3 Grid-Gaps

| Kontext | Gap-Wert | Tailwind |
|---|---|---|
| USP Cards | 32px | `gap-8` |
| Service Grid | 24px | `gap-6` |
| Branchen Grid | 16px | `gap-4` |
| Testimonials | 32px | `gap-8` |
| Formular-Felder | 24px | `gap-6` |
| Footer-Spalten | 32px / 48px | `gap-8 lg:gap-12` |
| Process Steps | 32px / 16px | `gap-8 md:gap-4` |

### 7.4 Innere Abstaende (Karten)

| Karten-Typ | Padding | Tailwind |
|---|---|---|
| USP Cards | 32px | `p-8` |
| Service Cards | 24px | `p-6` |
| Branchen Cards | 20px | `p-5` |
| Testimonial Cards | 32px | `p-8` |
| Kontakt-Sidebar | 32px | `p-8` |

### 7.5 Sektions-Header-Abstaende

| Element | Abstand nach unten | Tailwind |
|---|---|---|
| Eyebrow/Overline | 8px | `mb-2` |
| H2 (zum naechsten Absatz) | 16px | `mt-4` |
| Kompletter Sektions-Header zum Grid | 48px / 64px | `mb-12 md:mb-16` |

### 7.6 Eckenradien

| Element | Radius | Tailwind |
|---|---|---|
| Grosse Karten (USP, Testimonial, Sidebar) | 16px | `rounded-2xl` |
| Mittlere Karten (Service, Branchen) | 12px | `rounded-xl` |
| Buttons | 8px | `rounded-lg` |
| Input-Felder | 8px | `rounded-lg` |
| Icon-Container (gross) | 12px | `rounded-xl` |
| Icon-Container (klein) | 8px | `rounded-lg` |
| Avatare | 50% | `rounded-full` |
| Nummern-Kreise (Steps) | 50% | `rounded-full` |
| Hinweis-Boxen (Erfolg/Fehler) | 8px | `rounded-lg` |

### 7.7 Schatten

| Typ | Tailwind | Einsatz |
|---|---|---|
| Standard-Schatten (Hover) | `shadow-lg` | Karten bei Hover |
| Kleiner Schatten | `shadow-sm` | Header nach Scroll, Buttons |
| CTA-Glow | `shadow-lg shadow-blue-600/25` | Primaere CTA-Buttons |
| Drawer-Schatten | `shadow-2xl` | Mobile Navigation Drawer |
| Nummer-Kreis-Schatten | `shadow-lg shadow-blue-600/20` | Process-Step-Nummern |

---

## Anhang: Zusammenfassung der Tailwind-Farbpalette

Fuer die `tailwind.config.js` sind keine Custom-Colors notwendig. Die gesamte Farbwelt basiert auf den Tailwind-Standardfarben:

- **Neutral-Basis:** `slate` (50, 100, 200, 300, 400, 500, 700, 800, 900)
- **Akzent:** `blue` (50, 100, 200, 400, 600, 700, 800)
- **Erfolg:** `emerald` (50, 200, 400, 500, 600, 700, 800)
- **Warnung:** `amber` (50, 200, 400, 700)
- **Fehler:** `red` (50, 200, 500, 600, 700, 800)
- **Sterne:** `amber` (400)

Einzige Custom-Konfiguration:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
}
```
