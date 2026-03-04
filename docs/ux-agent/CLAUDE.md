# UX-Agent Konventionen (User Experience & Barrierefreiheit)

## Zustaendigkeit
Der UX-Agent ist verantwortlich fuer die gesamte User Experience der Arbeitssicherheits-Website: Nutzerfuehrung, User Flows, Formular-Design, Mobile Experience, Barrierefreiheit (WCAG 2.1 AA), Cognitive Load Reduktion und Trust Signals. Alle UX-Aspekte sind gleichwertig — Conversion, Barrierefreiheit, Mobile UX und Cognitive Load haben denselben Stellenwert.

### Zielgruppe & Kontext
- **B2B-Website** fuer Arbeitssicherheits-Dienstleistungen
- **Primaere Nutzer**: Geschaeftsfuehrer (GF), Fachkraefte fuer Arbeitssicherheit (Sifa), HR-Verantwortliche
- **Nutzungskontext**: Oft am Desktop im Buero, aber auch mobile Recherche unterwegs
- **Uebergabe an Code-Agent**: UX-Specs, Interaction Patterns, A11y-Anforderungen

## Nielsen's 10 Heuristiken (angewandt auf Arbeitssicherheits-Website)

### 1. Visibility of System Status
- **Loading-Feedback**: Skeleton Screens bei Seitenwechsel, Spinner bei Formular-Submit
- **Formular-Validation**: Echtzeit-Feedback waehrend der Eingabe (gruener Haken bei validen Feldern)
- **Seitenposition**: Breadcrumbs und aktiver Navigationspunkt zeigen dem Nutzer wo er sich befindet

### 2. Match Between System and Real World
- **Fachterminologie**: Begriffe wie "Gefaehrdungsbeurteilung", "DGUV", "Unterweisung" verwenden — die Zielgruppe kennt sie
- **Erklaerungen**: Bei Fachbegriffen kurze Tooltips oder Klammerzusaetze fuer weniger erfahrene Nutzer
- **Natuerliche Reihenfolge**: Informationsfluss spiegelt den typischen Entscheidungsprozess: Problem erkennen > Loesung verstehen > Kontakt aufnehmen

### 3. User Control and Freedom
- **Zurueck-Navigation**: Browser-Back funktioniert immer korrekt, keine History-Manipulation
- **Formular-Abbruch**: Nutzer kann jederzeit abbrechen ohne Datenverlust-Warnung (bei wenigen Feldern)
- **Kein Lock-in**: Keine erzwungenen Popups, kein Blockieren des Scrollens, keine Exit-Intent-Modals

### 4. Error Prevention
- **Input-Constraints**: E-Mail-Felder mit `type="email"`, Telefon mit `type="tel"`
- **Format-Hinweise**: Platzhalter-Beispiele UND Labels (z.B. Label "E-Mail", Placeholder "name@firma.de")
- **Bestaetigungs-Dialoge**: Nur bei destruktiven Aktionen, nicht bei normaler Navigation

### 5. Recognition Rather Than Recall
- **Konsistente Navigation**: Hauptnavigation auf jeder Seite identisch positioniert
- **Kontaktdaten sichtbar**: Telefonnummer und E-Mail in Header und Footer — nie suchen muessen
- **Visuelle Ankerpunkte**: Icons neben Navigationspunkten, konsistente Farbcodierung fuer CTAs

### 6. Flexibility and Efficiency
- **Tastatur-Navigation**: Alle interaktiven Elemente per Tab erreichbar
- **Skip-Links**: "Zum Hauptinhalt springen" fuer Keyboard-Nutzer und Screen Reader
- **Direkte Kontaktwege**: Telefonnummer klickbar (`tel:`), E-Mail klickbar (`mailto:`)

### 7. Aesthetic and Minimalist Design
- **Fokus auf Kern-Inhalte**: Jede Seite hat eine klare Hauptaufgabe, keine Ablenkung
- **Whitespace nutzen**: Grosszuegige Abstaende zwischen Sektionen statt Informationsdichte
- **Keine dekorativen Elemente** die keinen Zweck erfuellen — jedes Element muss informieren oder zum Handeln anregen

### 8. Help and Documentation
- **Kontextbezogene Hilfe**: Tooltips bei komplexen Formularfeldern, Info-Icons bei Fachbegriffen
- **FAQ-Bereiche**: Auf jeder Leistungsseite relevante Fragen beantworten
- **Glossar**: Fachbegriffe der Arbeitssicherheit erklaeren (gut fuer SEO und Nutzerverstaendnis)

### 9. Consistency and Standards
- **Design System**: Einheitliche Farben, Typografie, Abstaende, Button-Stile auf allen Seiten
- **Terminologie**: Gleiche Begriffe fuer gleiche Konzepte (nicht "Kontakt" auf einer Seite und "Anfrage" auf einer anderen)
- **Interaktionsmuster**: Links sehen aus wie Links, Buttons wie Buttons — keine Verwechslung

### 10. Trust and Credibility
- **Zertifikate und Logos**: DGUV, TUeV, ISO-Zertifizierungen prominent im oberen Seitenbereich
- **Impressum und Datenschutz**: Gut sichtbar im Footer verlinkt (gesetzliche Pflicht in DE, staerkt Vertrauen)
- **Echte Kontaktdaten**: Vollstaendige Adresse, Telefonnummer, E-Mail — keine anonyme Website

## User Flows & Information Architecture

### Primaerer Flow
```
Startseite (Vertrauen aufbauen, Ueberblick)
  > Leistungen (konkretes Angebot verstehen)
    > Einzelne Leistung (Detail, Nutzen, Ablauf)
      > Kontakt (Anfrage stellen)
```

### User Personas & Ihre Wege

#### Geschaeftsfuehrer (GF)
- **Motivation**: Haftungsrisiko minimieren, Bussgelder vermeiden
- **Typischer Flow**: Startseite > "Warum Arbeitssicherheit?" > Leistungsuebersicht > Kontakt
- **Beduerfnis**: Schnell verstehen was es kostet und was es bringt

#### Fachkraft fuer Arbeitssicherheit (Sifa)
- **Motivation**: Fachliche Unterstuetzung, aktuelle Vorschriften
- **Typischer Flow**: Startseite > Branchen/Spezialthema > Leistungsdetail > Kontakt
- **Beduerfnis**: Fachlich fundierte Informationen, Normen-Referenzen

#### HR-Verantwortliche
- **Motivation**: Unterweisungen organisieren, Dokumentation sicherstellen
- **Typischer Flow**: Startseite > Leistungen > Unterweisungen/Schulungen > Kontakt
- **Beduerfnis**: Praktische Umsetzungshilfe, klarer Ablauf

### Navigation
- **Top-Level Items**: Maximal 5-6 Eintraege (Startseite, Leistungen, Branchen, Ueber uns, Kontakt)
- **Breadcrumbs**: Auf allen Unterseiten anzeigen
- **Aktive Seite markieren**: Visuell hervorgehobener Navigationspunkt
- **Footer-Navigation**: Alle Seiten verlinkt, plus Impressum, Datenschutz

### Seitenstruktur
```
/                   — Startseite (Hero, Leistungsuebersicht, Trust Signals, CTA)
/leistungen         — Leistungsuebersicht
/leistungen/[slug]  — Einzelne Leistungsseite
/branchen           — Branchenuebersicht
/branchen/[slug]    — Einzelne Branchenseite
/ueber-uns          — Team, Qualifikationen, Zertifikate
/kontakt            — Kontaktformular, Adresse, Karte
/impressum          — Impressum (Pflichtseite)
/datenschutz        — Datenschutzerklaerung (Pflichtseite)
```

## Formular-Design

### Feldanzahl & Struktur
- **Maximal 3-4 Felder**: Name, E-Mail, Nachricht (Branche optional)
- **Labels**: Immer oberhalb des Feldes, nie als Placeholder-Ersatz
- **Placeholder**: Nur als Beispiel-Eingabe, nie als einzige Beschriftung
- **Pflichtfelder**: Mit `*` markieren und per `aria-required="true"` kennzeichnen

### Validation & Fehlerbehandlung
- **Inline-Validation**: Echtzeit-Feedback nach Verlassen des Feldes (`onBlur`)
- **Error Messages**: Direkt unter dem fehlerhaften Feld, rot (#DC2626), mit Loesungsvorschlag
- **Beispiel**: "Bitte geben Sie eine gueltige E-Mail-Adresse ein (z.B. name@firma.de)"
- **ARIA**: `aria-describedby` verknuepft Feld mit Fehlermeldung, `aria-invalid="true"` bei Fehler
- **Kein Submit bei Fehlern**: Button deaktivieren oder Submit verhindern mit klarer Erklaerung

### Success State
- **Klare Bestaetigung**: Gruene Meldung nach erfolgreichem Submit
- **Naechste Schritte**: "Wir melden uns innerhalb von 24 Stunden bei Ihnen"
- **Kein Formular-Reset** ohne Bestaetigung — Nutzer sieht was gesendet wurde

### Progressive Disclosure
- **Basis zuerst**: Name + E-Mail + Nachricht als Standard
- **Details bei Bedarf**: "Weitere Angaben (optional)" aufklappbar fuer Branche, Unternehmengroesse, Telefon
- **Kein Ueberforderungs-Effekt**: Wenige sichtbare Felder senken die Hemmschwelle

## Mobile UX

### Touch Targets
- **Minimum 44x44px**: Alle klickbaren Elemente (WCAG 2.5.5)
- **Spacing**: Mindestens 8px Abstand zwischen Touch-Elementen
- **Thumb Zone**: Primaere CTAs im unteren Bildschirmdrittel positionieren (natuerliche Daumen-Reichweite)

### Mobile Navigation
- **Hamburger Menu**: Auf Screens unter 768px
- **Menu-Animation**: Slide-in von rechts, Overlay mit Hintergrund-Abdunklung
- **Schliessen**: X-Button UND Tap auf Overlay schliesst das Menu

### Mobile Layout
- **Full-Width CTAs**: Buttons auf volle Breite auf Mobile
- **Kein horizontales Scrollen**: Alle Inhalte passen in den Viewport
- **Schriftgroesse**: Minimum 16px fuer Fliesstext (verhindert iOS Auto-Zoom bei Input-Focus)
- **Input-Types**: `type="email"` zeigt @-Tastatur, `type="tel"` zeigt Nummernblock

### Mobile-spezifische Patterns
- **Click-to-Call**: Telefonnummer als `<a href="tel:+49...">`
- **Sticky CTA**: Fester Kontakt-Button am unteren Bildschirmrand auf Leistungsseiten
- **Kartenansicht**: Auf Mobile scrollbare Karten statt mehrspaltigem Layout

## Barrierefreiheit (WCAG 2.1 AA)

### Semantisches HTML
```html
<header>     — Seitenkopf mit Logo und Navigation
<nav>        — Hauptnavigation, Breadcrumbs, Footer-Navigation
<main>       — Hauptinhalt (einmal pro Seite)
<article>    — Eigenstaendige Inhaltsbloecke
<section>    — Thematische Gruppierung mit Ueberschrift
<aside>      — Ergaenzende Inhalte (Sidebar, Related Links)
<footer>     — Seitenfuss
```

### Skip-Link
```html
<!-- Erstes Element im <body> -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-blue-700 focus:ring-2">
  Zum Hauptinhalt springen
</a>
```

### Bilder
- **Informative Bilder**: Beschreibender `alt`-Text der den Inhalt vermittelt
- **Dekorative Bilder**: `alt=""` und `aria-hidden="true"`
- **Komplexe Grafiken**: `alt` + ausfuehrliche Beschreibung via `aria-describedby`

### Fokus-Management
- **Fokus-Indikator**: Immer sichtbar, nie `outline: none` ohne Alternative
- **Tailwind**: `focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`
- **Tab-Order**: Logisch (links nach rechts, oben nach unten), folgt der visuellen Reihenfolge
- **Kein `tabindex` > 0**: Nur `tabindex="0"` (in Tab-Reihenfolge) oder `tabindex="-1"` (programmatisch fokussierbar)

### ARIA
- **Icon-Buttons**: `aria-label="Menu oeffnen"` fuer Buttons ohne sichtbaren Text
- **Error Messages**: `aria-describedby="email-error"` verknuepft Feld mit Fehlermeldung
- **Live Regions**: `aria-live="polite"` fuer dynamische Statusmeldungen (Formular-Feedback)
- **Expanded/Collapsed**: `aria-expanded="true/false"` fuer Accordions und Dropdowns
- **Current Page**: `aria-current="page"` fuer aktiven Navigationspunkt

### Farbkontrast
- **Normaler Text**: Mindestens 4.5:1 Kontrastverhaeltnis
- **Grosser Text** (ab 18px bold oder 24px): Mindestens 3:1
- **UI-Komponenten und Grafiken**: Mindestens 3:1 gegen angrenzende Farben
- **Keine Nur-Farbe-Information**: Fehler nicht nur durch Rot anzeigen — zusaetzlich Icon oder Text

### Motion & Animation
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Keyboard-Interaktion
| Element | Taste | Aktion |
|---------|-------|--------|
| Button / Link | `Enter` | Aktivieren |
| Checkbox | `Space` | Umschalten |
| Dialog / Modal | `Escape` | Schliessen |
| Dropdown | `Arrow Up/Down` | Navigieren |
| Tab-Panel | `Arrow Left/Right` | Tab wechseln |
| Accordion | `Enter` / `Space` | Auf-/Zuklappen |

## Cognitive Load Reduktion

### Text-Chunking
- **Max 3-5 Saetze** pro Absatz
- **Max 60-70 Zeichen** pro Zeile (`max-w-prose` in Tailwind = 65ch)
- **Bullet Points** fuer Aufzaehlungen ab 3 Items
- **Fettung** fuer Schluesselbegriffe — erleichtert das Scannen

### Visuelle Strukturierung
- **Card-Layout**: Zusammengehoerige Informationen in Cards gruppieren statt Textwand
- **Whitespace**: Grosszuegige Abstaende zwischen Sektionen (`py-16` bis `py-24`)
- **Visuelle Hierarchie**: Groesse, Gewicht und Farbe kommunizieren Wichtigkeit

### Entscheidungsarchitektur
- **Max 3 Haupt-Optionen** pro Bildschirmbereich (Miller's Law)
- **Progressive Disclosure**: Details in Accordions oder "Mehr erfahren"-Links
- **Klare CTAs**: Ein primaerer CTA pro Sektion, nicht mehrere konkurrierende Optionen
- **Default-Werte**: Bei optionalen Feldern sinnvolle Vorauswahl anbieten

### Gestalt-Prinzipien
- **Proximity**: Zusammengehoerige Elemente nah beieinander positionieren
- **Similarity**: Gleiche Funktion = gleiches Aussehen (alle CTAs gleich gestylt)
- **Continuation**: Visuelle Linien und Ausrichtungen fuer natuerlichen Lesefluss
- **Closure**: Card-Borders und Hintergrundfarben gruppieren Inhalte

## Trust Signals

### Zertifikate & Logos
- **Position**: Im oberen Seitenbereich der Startseite, gut sichtbar
- **Beispiele**: DGUV-Mitgliedschaft, TUeV-Zertifizierung, ISO 45001
- **Darstellung**: Einheitliche Groesse, dezente Graustufen oder Originalfarben

### Team & Kompetenz
- **Fotos**: Echte Teamfotos mit Namen und Qualifikation
- **Zertifizierungen**: Individuelle Qualifikationen der Mitarbeiter nennen
- **Erfahrung**: "Seit [Jahr] im Arbeitsschutz" — konkrete Zahlen statt Superlative

### Social Proof
- **Kundenzahlen**: "500+ betreute Unternehmen" prominent platzieren
- **Testimonials**: Mit echten Namen und Unternehmen (nach Erlaubnis)
- **Branchen-Erfahrung**: "Erfahrung in Bau, Industrie, Handwerk, Logistik"

### Kontakt & Erreichbarkeit
- **Header**: Telefonnummer und E-Mail sichtbar
- **Footer**: Vollstaendige Kontaktdaten inkl. Adresse
- **Kontaktseite**: Formular + direkte Kontaktwege + Anfahrtskarte
- **Reaktionszeit**: "Antwort innerhalb von 24 Stunden" kommunizieren

### Rechtliche Transparenz
- **Impressum**: Vollstaendig nach TMG, prominent im Footer verlinkt
- **Datenschutz**: DSGVO-konform, verstaendlich formuliert, prominent verlinkt
- **SSL-Hinweis**: HTTPS ist Pflicht, kann optional als Trust Signal angezeigt werden

## Performance UX

### Ladezeiten-Ziele
- **First Contentful Paint**: < 1 Sekunde
- **Time to Interactive**: < 3 Sekunden
- **Cumulative Layout Shift**: < 0.1 (kein Springen von Elementen)

### Loading States
- **Skeleton Screens**: Grau-animierte Platzhalter die die Seitenstruktur andeuten
- **Formular-Submit**: Button zeigt Spinner, wird deaktiviert, Text wechselt zu "Wird gesendet..."
- **Bilder**: `width` und `height` Attribute setzen um Layout-Shifts zu verhindern

### Optimistic UI
- **Formular**: Nach Submit sofort Erfolgs-Nachricht zeigen (Retry bei Fehler)
- **Navigation**: Aktiven Link sofort visuell markieren, nicht erst nach Laden

## Uebergabe an andere Agenten

### An Code-Agent
- Interaction Patterns mit gewuenschtem Verhalten (Hover, Focus, Active States)
- A11y-Anforderungen: ARIA-Attribute, Keyboard-Verhalten, Semantisches HTML
- Form Validation Specs: Welche Felder, welche Regeln, welche Fehlermeldungen
- Responsive Breakpoints und Layout-Aenderungen

### An Design-Agent
- Layout-Anforderungen: Spacing, Proportionen, visuelle Hierarchie
- Component States: Default, Hover, Focus, Active, Disabled, Error, Success
- Mobile vs. Desktop Unterschiede in der Darstellung

### An CRO-Agent
- Nutzerfuehrungs-Insights: Wo brechen Nutzer ab, wo gibt es Reibung
- Formular-Conversion-Daten: Welche Felder erzeugen Abbrueche
- Trust Signal Platzierung und deren Wirkung auf Conversion

### An Test-Agent
- A11y Test-Anforderungen: axe-core Checks, Keyboard-Navigation Tests
- Responsive Tests: Welche Breakpoints pruefen
- User Flow Tests: Kritische Pfade die funktionieren muessen

## UX-Checkliste (bei jeder neuen Seite/Komponente)

### Nutzerfuehrung
- [ ] Nielsen Heuristiken geprueft?
- [ ] User Flow logisch und nachvollziehbar?
- [ ] Navigation konsistent mit restlicher Website?
- [ ] Breadcrumbs vorhanden (auf Unterseiten)?

### Formulare
- [ ] Minimale Feldanzahl (3-4 Felder)?
- [ ] Labels oberhalb der Felder (nicht als Placeholder)?
- [ ] Inline-Validation mit hilfreichen Fehlermeldungen?
- [ ] Success State nach erfolgreichem Submit?

### Mobile
- [ ] Touch Targets mindestens 44x44px?
- [ ] Thumb Zones fuer CTAs beachtet?
- [ ] Kein horizontales Scrollen?
- [ ] Schriftgroesse mindestens 16px?

### Barrierefreiheit
- [ ] Keyboard-Navigation vollstaendig moeglich?
- [ ] Screen Reader: Semantisches HTML, ARIA-Labels, alt-Texte?
- [ ] Farbkontrast: 4.5:1 (Text), 3:1 (Grafiken)?
- [ ] Focus-Indikator sichtbar?
- [ ] `prefers-reduced-motion` respektiert?

### Cognitive Load
- [ ] Chunking: Kurze Absaetze, Bullet Points?
- [ ] Progressive Disclosure fuer Details?
- [ ] Max 3 Haupt-Optionen pro Bereich?
- [ ] Visuelle Hierarchie klar erkennbar?

### Layout & Scanbarkeit (wissenschaftlich belegt)
- [ ] 3+ gleichwertige Items in Grid, NICHT vertikal gestapelt? [NNGroup Lawn-Mower-Pattern: effizienteste Scanning-Strategie]
- [ ] Side-by-side statt sequentiell fuer Vergleiche? [Miller's Law: Working Memory ~7±2, vertikales Stapeln belastet Gedaechtnis]
- [ ] Sektions-Hintergruende alternieren? [Enders-Studie: -17% fehlerhafte Scanning-Patterns; NNGroup Layer-Cake-Pattern]
- [ ] Container-Breite passend? Card-Grids min. `max-w-6xl`, Text `max-w-3xl` [Baymard: 768px = 40% zu schmal fuer Cards]
- [ ] Testimonial-/Review-Bereich visuell isoliert vom Rest? [Von Restorff 1933: abweichende Items werden besser erinnert]
- [ ] Kein Carousel fuer weniger als 6 Items? [Notre Dame 2013: 1% Klickrate, 84% nur Slide 1; NNGroup: "annoy users"]

### Vergleichbarkeit (bei gleichwertigen Optionen)
- [ ] Items gleichzeitig sichtbar (nicht nur sequentiell durch Scrollen)? [NNGroup: "spatial reorientation" bei Cards ist "cognitively effortful and slow"]
- [ ] Gestalt-Prinzip der Naehe: Nebeneinander = vergleichbare Alternativen? [NNGroup Gestalt-Empfehlung]
- [ ] Jede Card hat visuellen Anker (Bild/Icon)? [NNGroup: Bilder = erster Fixationspunkt beim Card-Scanning]

### Trust
- [ ] Trust Signals vorhanden (Zertifikate, Zahlen)?
- [ ] Kontaktdaten sichtbar?
- [ ] Impressum und Datenschutz verlinkt?
- [ ] Testimonials mit echten Fotos? [CXL: signifikant bessere Erinnerung, p=0.0035]
- [ ] Social Proof nah an CTAs? [CXL: +25-68% Conversion wenn neben CTA]

### Performance
- [ ] Skeleton Screens fuer Loading States?
- [ ] Bilder mit `width`/`height` (kein Layout Shift)?
- [ ] Keine unnoetig grossen Assets?
