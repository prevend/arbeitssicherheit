# Research: Card-Based Layouts & Testimonial Display

## Recherche-Ergebnis | Stand: Maerz 2026

Evidenzbasierte Zusammenfassung zu Grid- vs. Listen-Layouts, Testimonial-Darstellung
und Social-Proof-Optimierung. Quellen: NNGroup, Baymard Institute, CXL Institute,
Spiegel Research Center (Northwestern), akademische HCI-Studien.

---

## 1. Grid vs. Vertikale Liste fuer Testimonials/Reviews

### NNGroup-Forschung (Cards vs. Lists)

- **Listen sind scanbarer**: "A standard vertical list view is more scannable than cards
  because the positioning of the individual elements is fixed in size and more predictable
  for the eye." (NNGroup, Cards Component)
- **Cards verbrauchen mehr Platz**: Weniger Items pro Viewport sichtbar, hoehere
  kognitive Belastung.
- **Cards schlecht fuer Vergleiche**: Eye-Tracking zeigt, dass Nutzer bei Vergleichen
  "look back and forth multiple times between items" -- Cards mit variablen Layouts
  erschweren das.
- **Cards gut fuer heterogene Inhalte**: Cards eignen sich fuer "collections of
  heterogeneous items" (Dashboards, Mixed-Media). Fuer **homogene Items** (wie
  Testimonials, die alle gleich strukturiert sind) empfiehlt NNGroup "a standard
  vertical list or grid of images instead of cards".

### Baymard Institute (Product Listing UX)

- Schlechte Listen-Implementierungen: **67-90% Abandonment**
- Gute Listen-Implementierungen: **17-33% Abandonment**
- Grid-View ist besser fuer **visuell getriebene** Inhalte
- List-View ist besser fuer **informationsreiche/spec-heavy** Inhalte
- 23% der E-Commerce-Sites verwenden faelschlich Grid-View fuer spec-heavy Produkte

### Empfehlung fuer Testimonials

Testimonials sind **semi-homogene Inhalte** (gleiche Struktur: Zitat + Name + Rolle).
Ein **Grid (2-3 Spalten)** funktioniert hier gut, weil:
1. Testimonials visuell voneinander unabhaengig sind (kein Vergleich noetig)
2. Grid mehrere Testimonials gleichzeitig sichtbar macht (Social-Proof-Quantitaet)
3. Cards helfen, jedes Testimonial als eigenstaendige "Einheit" wahrzunehmen

**Aber**: Konsistentes Layout innerhalb der Cards ist entscheidend.

---

## 2. Optimale Anzahl sichtbarer Testimonials

### Spiegel Research Center, Northwestern University

- **5 Reviews = 270% hoehere Kaufwahrscheinlichkeit** vs. 0 Reviews
- Nach den ersten 5 Reviews sinkt der marginale Nutzen stark
- Bei teuren Produkten/Services: **380% Conversion-Steigerung** durch Reviews
- Bei guenstigen Produkten: **190% Steigerung**
- Optimale Bewertung: **4.0-4.7 Sterne** (nicht 5.0 -- Perfektion wirkt unglaubwuerdig)
- "Verified Buyer"-Badges: **+15% Kaufwahrscheinlichkeit**

### Praxis-Empfehlung (aggregiert)

- **Homepage/Landing Page**: 3-5 Testimonials sichtbar
  - Balance zwischen Glaubwuerdigkeit und Cognitive Load
  - Weniger als 3 = zu wenig Social Proof
  - Mehr als 5 auf einmal = Cognitive Overload, abnehmender Grenznutzen
- **Gesamtbibliothek**: 100+ Testimonials korreliert mit 37% hoeherer Conversion
- **Fuer B2B-Service wie Arbeitssicherheit**: 3 prominent sichtbare Testimonials
  auf der Hauptseite, mit Option "Mehr anzeigen"

---

## 3. Card Layout Best Practices (3-6 Items)

### NNGroup Card Design Research

**Wann Cards richtig einsetzen:**
- Heterogene Content-Sammlungen (verschiedene Content-Typen)
- Browse-Kontexte (nicht Such-Kontexte)
- Wenn jedes Item ein eigener Einstiegspunkt ist

**Wann Cards vermeiden:**
- Homogene Items, die verglichen werden sollen
- Such-getriebene Kontexte
- Wenn Scanbarkeit wichtiger ist als visuelle Attraktivitaet

### Grid-Konfigurationen

| Items | Desktop-Empfehlung | Begruendung |
|-------|-------------------|-------------|
| 3 | 3-Spalten-Grid (1 Reihe) | Alle gleichzeitig sichtbar, keine Scroll-Notwendigkeit |
| 4 | 2x2-Grid oder 4-Spalten | 2x2 reduziert horizontale Ausdehnung |
| 5-6 | 3-Spalten-Grid (2 Reihen) | Balance zwischen Uebersicht und Detailtiefe |

### Eye-Tracking-Befund (akademisch)

Studie "Three Column Website Layout vs. Grid Website Layout" (Springer, 2018):
- Bei strukturierten Box-Layouts: **Fokus faellt auf die ersten 3 Boxen der ersten Zeile**
- Column-Layout erzeugt extensiveres Lesemuster und hoehere Fixationsdichte
- Grid-Layout wird mit "spotted scanning pattern" gelesen (selektiver)
- Nutzer ignorieren bewusst rein dekorative Bilder ("attention gaps")

### Responsive Breakpoints

- **Mobile (< 640px)**: 1 Spalte, vertikal gestapelt
- **Tablet (640-1024px)**: 2 Spalten
- **Desktop (> 1024px)**: 3 Spalten (max.)
- Mehr als 3-4 Spalten fuer Cards wird nicht empfohlen (zu klein, zu komprimiert)

---

## 4. Fotos in Testimonials: Gemessener Impact

### A/B-Test-Ergebnisse

| Test | Ergebnis | Quelle |
|------|----------|--------|
| Medalia Art: Gemaelde vs. Kuenstler-Fotos | **+95% Conversion** (8.8% auf 17.2%) | VWO |
| Highrise (37signals): Design mit Person vs. ohne | **+102.5% Signups** | 37signals/Basecamp |
| Jason Thompson: Icon vs. echtes Foto | **+48% Conversions** | VWO Case Study |
| Founder-Foto auf Landing Page | **+35% Conversion** | VWO |

### CXL Institute Eye-Tracking-Studie (Original Research)

- Testimonials **mit Fotos** sind **signifikant besser erinnerbar** als ohne Fotos
- 61% Genauigkeit bei Wiedererkennung von Testimonials mit Fotos
- Fotos erzeugen laengere "mean fixation times" (tiefere kognitive Verarbeitung)
- Verschiedene Social-Proof-Typen unterschieden sich NICHT signifikant in
  "Time to First Fixation" (gleichschnell wahrgenommen)
- Aber: Testimonials + Fotos hatten laengste Gesamtfixationszeit

### Warum Fotos wirken (psychologisch)

- Menschen glauben Aussagen eher, wenn Bilder beigefuegt sind
- Gesichter aktivieren den Fusiform Face Area im Gehirn (automatische Verarbeitung)
- Fotos erhoehen wahrgenommene Authentizitaet
- In Zeiten von KI-generiertem Content ist "menschlich" ein Premium-Trust-Signal

### Empfehlung

**Immer echte Fotos verwenden.** Der Impact (+48% bis +102%) ist einer der am
zuverlaessigsten reproduzierten Effekte in der CRO-Forschung.

---

## 5. Background-Kontrast fuer Social-Proof-Sektionen

### Von Restorff Effekt (Isolation Effect)

**Definition** (Hedwig von Restorff, 1933): Wenn mehrere aehnliche Items praesentiert
werden, wird das abweichende Item besser erinnert.

### Web-Design-Anwendung

- Eine Testimonial-Sektion mit anderem Hintergrund wird als **eigene Einheit**
  wahrgenommen und besser erinnert
- Kontrast erzeugt visuelle Hierarchie und lenkt Aufmerksamkeit

### Aber: Nuancierte Forschungslage

**MeasuringU-Studie (Jeff Sauro):**
- Isolation allein reicht NICHT aus, um Praeferenz/Selektion zu steuern
- Studie 1: Nutzer waehlten das auffaelligste Design nur in **50% der Faelle**
- Studie 2: Noch seltener -- nur in **3 von 8 Szenarien**
- **Andere Faktoren** (Farblebhaftigkeit, Dichte, Groesse) ueberwiegen oft
- Fazit: "There did not appear to be any consistent Von Restorff effect" fuer
  reine Praeferenz-Selektion

### A/B-Test-Evidenz fuer Hintergrund-Kontrast

- Formular-Hintergrundfarbe aendern: **+91.7% Form Submissions** (Case Study)
- Dunkler Hintergrund mit weissen Formfeldern: "contrast made it impossible to ignore"
- CTA-Buttons mit starkem Kontrast zum Hintergrund werden signifikant oefter geklickt

### Empfehlung

**Ja, visuell isolieren** -- aber richtig:
- Subtiler Hintergrund-Wechsel (z.B. leichtes Grau oder dezente Farbe) genuegt
- Der Effekt unterstuetzt **Erinnerung** und **Aufmerksamkeit**, aber garantiert
  nicht allein die Conversion
- Kombinieren mit anderen Trust-Signalen (Fotos, Logos, Zahlen)

---

## 6. Scanbarkeit: Grids vs. Listen (Eye-Tracking)

### Akademische Eye-Tracking-Studie (Springer, 2018)

**Methodik**: 16 Teilnehmer, Tobii Eye-Tracker, 2 Layouts (3-Column vs. Grid),
je 2 Aufgaben (einfach + schwer)

**Ergebnisse:**
- **Column-Layout**: Extensives Lesemuster, hoehere Fixationsdichte, mehr Fixationen
- **Grid-Layout**: Selektiveres "spotted scanning" (nur relevante Woerter gelesen)
- Nutzer fanden Inhalte **schneller im Column-Layout** als im Grid
- F-Pattern wurde in KEINEM der Layouts strikt befolgt
- Bei einfachen Aufgaben: "spotted scanning" (selektiv)
- Bei schweren Aufgaben: "deep scanning" (gruendlich)
- Bilder (Logos, Banner, dekorative Elemente) wurden bewusst **ignoriert**

### NNGroup Eye-Tracking (Scanning Patterns)

- Nutzer verbringen **ueberproportional mehr Zeit auf der linken Haelfte** der Seite
- Bei 2-Spalten-Layouts: Vertikal ausgerichtete Bilder unterstuetzen effizientes
  Scanning besser als alternierend platzierte
- Scanverhalten ist **aufgabenabhaengig** (nicht rein layout-abhaengig)
- Erste sichtbare Inhaltszone erhaelt die meiste Aufmerksamkeit

### NNGroup Scanbarkeit (47% Verbesserung)

- Scanbare Texte erhoehen die Usability um **47%**
- Relevant fuer Testimonials: Kurze, praegnante Zitate > lange Texte

### Implikation fuer Testimonials

Grid-Layouts werden **selektiver gescannt** (weniger Gesamttext gelesen).
Das ist bei Testimonials **ein Vorteil**: Nutzer muessen nicht jedes Wort lesen,
sondern erkennen das Muster "viele positive Aussagen" schnell.

---

## 7. B2B Testimonial Layout (spezifische Forschung)

### B2B-Kaufverhalten

- **80% der B2B-Kaeufer** suchen aktiv nach Case Studies waehrend der Entscheidung
- Enterprise-Kaeufer reagieren am staerksten auf **detaillierte Case Studies mit
  quantifizierbaren ROI-Metriken**
- Video-Testimonials danach an zweiter Stelle
- 79% der Entscheider scannen Webseiten (nicht lesen) -- Scanbarkeit ist kritisch

### Optimale B2B-Testimonial-Struktur

1. **Client Snapshot** (Branche, Groesse) -- oben, sofort sichtbar
2. **Problem** (was ging schief)
3. **Loesung** (Ihr Ansatz)
4. **Ergebnisse mit Zahlen** (ROI, Zeitersparnis, Kostenreduktion)
5. **Zitat/Testimonial** als Aside neben der Loesung

### Platzierung auf B2B-Seiten

- **Above the fold**: Client-Logos oder kurze Testimonials als Trust-Signal
  (Best Practice bei Top-SaaS-Seiten)
- **Mitte**: 3-5 ausfuehrlichere Testimonials mit Fotos
- **Neben CTAs**: Testimonials direkt neben Call-to-Action platzieren
  (nach Video/Testimonial soll der naechste Schritt offensichtlich sein)

### Conversion-Impact im B2B

- Social Proof kann zu **bis zu 400% Conversion-Verbesserung** fuehren
- Customer Reviews in Content eingebettet: **+30% Conversion** (Durchschnitt)
- User-Generated Content auf Website: **+29% Web Conversion**
- Authentizitaet > Perfektion (4.2-4.5 Sterne-Prinzip gilt auch B2B)

### Besonderheiten B2B-Service (Arbeitssicherheit)

Fuer einen B2B-Service wie Arbeitssicherheitsberatung besonders relevant:
- **Branchenspezifische Testimonials** zeigen (Bau, Industrie, etc.)
- **Firmenname + Logo** erhoehen Glaubwuerdigkeit
- **Konkrete Zahlen** in Testimonials (z.B. "Unfallquote um 40% gesenkt")
- **Rolle/Position** des Testimonial-Gebers angeben (GF, SiFa, HR-Leiter)
- **Zertifizierungen/Badges** als ergaenzende Trust-Signals

---

## Zusammenfassung: Konkrete Empfehlungen

### Layout-Entscheidung
- **3-Spalten-Grid auf Desktop** fuer Testimonials (wenn 3 Testimonials)
- **2-Spalten auf Tablet**, **1 Spalte auf Mobile**
- Konsistente Card-Struktur innerhalb des Grids
- Max. 3-5 Testimonials auf einmal sichtbar

### Testimonial-Card-Aufbau
1. Foto (echt, kein Stock) -- **+48-102% Impact bewiesen**
2. Zitat (kurz, scanbar, mit konkretem Ergebnis)
3. Name + Rolle + Firma
4. Optional: Firmenlogo

### Visueller Kontrast
- Testimonial-Sektion mit **abgesetztem Hintergrund** (Von Restorff)
- Nicht uebertreiben -- subtiler Kontrast reicht
- Kombinieren mit Trust-Signals (Logos, Zahlen)

### B2B-spezifisch
- Branche des Kunden anzeigen (Relevanz-Filter)
- Zahlen und ROI in Testimonials
- Client-Logos above the fold
- CTA direkt nach/neben Testimonials

---

## Quellen

1. NNGroup: Cards UI Component Definition -- https://www.nngroup.com/articles/cards-component/
2. NNGroup: Card View vs. List View -- https://www.nngroup.com/videos/card-view-vs-list-view/
3. NNGroup: Using Grids in Interface Designs -- https://www.nngroup.com/articles/using-grids-in-interface-designs/
4. NNGroup: Scanning Patterns on the Web -- https://www.nngroup.com/articles/eyetracking-tasks-efficient-scanning/
5. Baymard Institute: Product Lists & Filtering UX -- https://baymard.com/research/ecommerce-product-lists
6. Baymard Institute: List Item Design -- https://baymard.com/blog/list-item-design-ecommerce
7. CXL Institute: Which Types of Social Proof Work Best? -- https://cxl.com/research-study/social-proof/
8. CXL Institute: How Images Boost Conversion -- https://cxl.com/blog/how-images-can-boost-your-conversion-rate/
9. Spiegel Research Center, Northwestern: How Online Reviews Influence Sales -- https://spiegel.medill.northwestern.edu/how-online-reviews-influence-sales/
10. VWO: Human Photos and Conversions -- https://vwo.com/blog/human-landing-page-increase-conversion-rate/
11. VWO: Testimonials Improve Conversion Rate -- https://vwo.com/blog/testimonials-improve-conversion-rate/
12. MeasuringU: Von Restorff Effect User Preference -- https://measuringu.com/von-restorff/
13. Laws of UX: Von Restorff Effect -- https://lawsofux.com/von-restorff-effect/
14. Springer: Three Column vs Grid Eye Tracking Study -- https://link.springer.com/chapter/10.1007/978-3-319-91803-7_20
15. 37signals/Basecamp: Highrise A/B Testing -- https://signalvnoise.com/posts/2991-behind-the-scenes-ab-testing-part-3-final
16. Tapflare: Top 50 B2B SaaS Websites CRO Analysis 2025 -- https://tapflare.com/articles/pdfs/b2b-saas-website-analysis-2025.pdf
