# Section Layout Catalog - Definitive Patterns for Homepage Variety

> Research basierend auf Analyse von: Stripe, Linear, Vercel, HubSpot, Notion, Intercom,
> Personio, DATEV, Salesforce, Webflow, Awwwards-Gewinner 2024-2026,
> sowie fuehrende deutsche B2B-Service-Websites (TUeV, DEKRA, Pilz, ifm).

---

## Uebersicht: 15 Section Layout Patterns

| # | Pattern | Visuelle Grundform | Typischer Einsatz |
|---|---------|-------------------|-------------------|
| 1 | Hero - Split Screen | 50/50 Text + Visual | Erster Eindruck, Value Proposition |
| 2 | Hero - Centered Statement | Zentrierter Text, Bild darunter | Bold Brand Statement |
| 3 | Feature Grid (Bento) | Asymmetrisches Karten-Raster | Leistungsuebersicht, Features |
| 4 | Alternating Zigzag | Text links/rechts wechselnd | Detaillierte Leistungsbeschreibung |
| 5 | Stats / Numbers Bar | Zahlen in einer Reihe | Vertrauen, Kompetenznachweis |
| 6 | Logo Cloud / Trust Bar | Logos in Reihe oder Raster | Social Proof, Partnerschaften |
| 7 | Testimonial Spotlight | Grosses Zitat + Foto | Kundenstimmen, Vertrauen |
| 8 | CTA Banner (Full-Width) | Farbiger Block, zentriert | Conversion-Punkt, Handlungsaufforderung |
| 9 | Process / Steps | Nummerierte Schritte | Ablauf erklaeren, Onboarding |
| 10 | Content Hub / Cards | Gleichfoermiges Karten-Raster | Blog, Branchen, Ressourcen |
| 11 | Split Screen (Visual Heavy) | 60/40 Bild-dominant | Emotionaler Eindruck + kurzer Text |
| 12 | Stacked Feature List | Vertikale Liste mit Icons | Feature-Liste, Vorteile |
| 13 | FAQ Accordion | Frage/Antwort aufklappbar | Einwaende entkraeften, SEO-Content |
| 14 | Comparison / Before-After | Zwei-Spalten-Vergleich | Problem vs. Loesung |
| 15 | Sticky Scroll / Tab Section | Feste Sidebar + wechselnder Content | Komplexe Features erklaeren |

---

## 1. Hero - Split Screen

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│  [Headline]            │                    │
│  [Subheadline]         │    [Hero Image     │
│  [CTA Primary]         │     oder Video]    │
│  [CTA Secondary]       │                    │
│  [Trust Badges]        │                    │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Klassisches 50/50 Layout. Linke Haelfte: grosse Headline, Subtext, 1-2 CTAs und optionale Trust-Elemente (Badges, Bewertungen). Rechte Haelfte: Hero-Image, Illustration, Video-Thumbnail oder Produktscreenshot. Die linke Seite ist vertikal zentriert.

**Wann einsetzen:**
- Haupthero der Homepage
- Wenn ein starkes visuelles Element vorhanden ist (Foto, Illustration)
- Besonders effektiv bei B2B-Service-Websites

**Beispiel-Sites:**
- HubSpot (CRM-Seite): Text links, Produkt-UI rechts
- Personio: Headline links, animiertes Dashboard rechts
- Stripe: Text links, Code-Animation/Produktbild rechts
- DATEV: Serioeses Foto rechts, Value Proposition links

**Mobile-Verhalten:**
Text-Block stapelt UEBER das Bild. Bild wird kleiner oder wird zum Hintergrundelement. CTAs bleiben prominent. Die gesamte Section wird vertikal gestapelt mit voller Breite.

---

## 2. Hero - Centered Statement

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│              [Badge / Eyebrow]              │
│           [Grosse zentrierte Headline]      │
│         [Zentrierte Subheadline / Absatz]   │
│            [CTA]    [CTA Secondary]         │
│                                             │
│    ┌───────────────────────────────────┐    │
│    │    [Breites Bild / Video /        │    │
│    │     Dashboard Screenshot]         │    │
│    └───────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Alles zentriert. Oben eine kurze Eyebrow-Zeile (z.B. "Neu: Feature X"), darunter die grosse Headline (oft 48-72px), ein kurzer Absatz, dann CTA-Buttons. Darunter ein grosses visuelles Element das die volle Breite nutzt (mit Schatten oder abgerundeten Ecken). Oft mit subtiler Gradient- oder Glow-Animation im Hintergrund.

**Wann einsetzen:**
- Wenn die Headline allein stark genug ist (kein Bild noetig zum Verstaendnis)
- Bei SaaS-Produkten mit UI-Screenshot
- Fuer mutige, selbstbewusste Markenstatements

**Beispiel-Sites:**
- Linear: Minimalistisch, grosse Headline, Produkt-UI darunter
- Vercel: "Develop. Preview. Ship." zentriert, Dashboard-Screenshot darunter
- Notion: Zentrierte Headline + Illustration
- Arc Browser: Statement-Headline mit grossem Visual darunter

**Mobile-Verhalten:**
Skaliert natuerlich herunter. Headline wird kleiner (32-40px). Bild wird volle Breite. Sehr mobile-freundlich, da bereits vertikal gestapelt.

---

## 3. Feature Grid (Bento Layout)

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│         [Section Headline]                  │
│         [Section Subtext]                   │
│                                             │
│  ┌──────────────┐  ┌──────────────────────┐ │
│  │ Feature 1    │  │ Feature 2            │ │
│  │ [Icon]       │  │ [Icon]               │ │
│  │ [Title]      │  │ [Title]              │ │
│  │ [Text]       │  │ [Text]               │ │
│  ├──────────────┤  └──────────────────────┘ │
│  │ Feature 3    │  ┌───────┐ ┌────────────┐ │
│  │ [groessere   │  │ Feat 4│ │ Feature 5  │ │
│  │  Karte]      │  │       │ │            │ │
│  └──────────────┘  └───────┘ └────────────┘ │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Inspiriert von Apples "Bento Box" Design. Unterschiedlich grosse Karten in einem Raster-Layout. Groessere Karten fuer wichtigere Features, kleinere fuer sekundaere. Jede Karte hat: Icon/Illustration, Titel, kurzen Text. Karten haben abgerundete Ecken, subtile Hintergrundfarben oder Borders. Asymmetrie schafft visuelles Interesse.

**Varianten:**
- **Gleichmaessiges 3er-Grid**: 3 gleich grosse Karten (simpler, aber langweiliger)
- **Bento 2+3**: Obere Reihe 2 grosse, untere Reihe 3 kleine
- **Bento asymmetrisch**: Verschiedene Groessen, Apple-Style
- **4er-Grid mit Icons**: Kompakt, gut fuer viele Features

**Wann einsetzen:**
- Leistungsuebersicht (z.B. "Unsere Leistungen")
- Feature-Highlights
- Wenn 3-6 gleichwertige Punkte praesentiert werden sollen

**Beispiel-Sites:**
- Apple (Produktseiten): Perfektes Bento-Layout
- Linear: Feature-Grid mit Hover-Animationen
- Stripe: Feature-Karten mit Farbverlaeufen
- Vercel: Feature-Grid mit Live-Demos in den Karten

**Mobile-Verhalten:**
Grid wird zu einer einzelnen Spalte. Grosse Karten behalten ihre Groesse, kleine stapeln vertikal. Alle Karten werden volle Breite. Optional: Horizontal scrollbares Karussell bei vielen Karten.

---

## 4. Alternating Zigzag

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│  [Text Block]          │  [Image/Visual]    │
│  - Headline            │                    │
│  - Absatz              │                    │
│  - Link/CTA            │                    │
├─────────────────────────────────────────────┤
│  [Image/Visual]        │  [Text Block]      │
│                        │  - Headline        │
│                        │  - Absatz          │
│                        │  - Link/CTA        │
├─────────────────────────────────────────────┤
│  [Text Block]          │  [Image/Visual]    │
│  - Headline            │                    │
│  - Absatz              │                    │
│  - Link/CTA            │                    │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Abwechselnd Text links / Bild rechts, dann Bild links / Text rechts. Jede Reihe beschreibt ein Feature oder eine Leistung im Detail. Text-Seite enthaelt: Overline/Label, Headline, Absatz, optionaler CTA-Link. Bild-Seite: Screenshot, Illustration, Foto oder Icon-Komposition. Zwischen den Reihen leichter Abstand (z.B. 80-120px).

**Wann einsetzen:**
- Detaillierte Leistungsbeschreibungen (z.B. "So funktioniert unsere Beratung")
- Wenn jede Leistung ein eigenes Visual hat
- Perfekt fuer 3-5 Punkte die vertieft erklaert werden

**Beispiel-Sites:**
- HubSpot (Feature-Seiten): Klassisches Zigzag mit Screenshots
- Intercom: Text + Produkt-UI alternierend
- TUeV Sued: Leistungsbeschreibungen mit Fotos
- Salesforce: Feature-Beschreibungen im Zigzag

**Mobile-Verhalten:**
Alle Reihen werden zu vertikalen Stapeln: Bild oben, Text darunter (immer gleiche Reihenfolge, NICHT alternierend auf Mobile). Konsistenter Rhythmus auf kleinen Screens.

---

## 5. Stats / Numbers Bar

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│                                             │
│   [Zahl 1]      [Zahl 2]      [Zahl 3]     │
│   [Label]       [Label]       [Label]       │
│   500+          15 Jahre      98%           │
│   Kunden        Erfahrung     Zufriedenheit │
│                                             │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Horizontale Reihe mit 3-4 grossen Zahlen und kurzen Labels darunter. Zahlen sind prominent (z.B. 48-64px, bold). Labels sind klein und dezent. Oft mit Count-Up-Animation beim Scrollen. Hintergrund: kontrastierende Farbe, Gradient, oder subtiles Pattern. Optionale Trennlinien zwischen den Zahlen.

**Varianten:**
- **Full-Width farbiger Hintergrund**: Bricht das weisse Layout, schafft Rhythmus
- **Innerhalb einer Card**: Eingebettet in eine groessere Section
- **Mit Icons**: Jede Zahl hat ein kleines Icon darueber
- **Sticky als Scrolling-Element**: Erscheint beim Scrollen

**Wann einsetzen:**
- Social Proof durch Zahlen (Kunden, Jahre, Projekte)
- Kompetenznachweis
- Visueller Break zwischen inhaltlichen Sections
- Haeufig nach dem Hero oder vor dem CTA

**Beispiel-Sites:**
- Deloitte: Zahlen auf dunklem Hintergrund
- DEKRA: Fakten prominent praesentiert
- Pilz (Sicherheitstechnik): Kennzahlen mit Icons
- Salesforce: "Trusted by X companies" Zahlenreihe

**Mobile-Verhalten:**
2x2 Grid oder vertikale Liste. Zahlen bleiben gross. Labels bleiben lesbar. Count-Up-Animation auch auf Mobile.

---

## 6. Logo Cloud / Trust Bar

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│         "Vertrauen Sie uns wie:"            │
│                                             │
│  [Logo] [Logo] [Logo] [Logo] [Logo] [Logo]  │
│                                             │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Eine kompakte Section mit einer Zeile Kundenlogos. Ueberschrift: "Vertrauen von", "Unsere Partner", "Bekannt aus". Logos sind grau/monochrom (einheitlicher Look). Optionales Karussell bei vielen Logos. Minimaler vertikaler Raum (Padding: 40-60px). Oft als Trennlinie/Break zwischen zwei inhaltlich schweren Sections.

**Varianten:**
- **Statisch**: Logos in einer Reihe (5-8 Logos)
- **Infinite Scroll**: Endlos horizontal scrollende Logos (Marquee)
- **Zwei Reihen**: Bei sehr vielen Logos
- **Mit Kontext**: "500+ Unternehmen vertrauen uns" + Logos

**Wann einsetzen:**
- Direkt nach dem Hero (staerkste Position fuer Social Proof)
- Zwischen zwei Content-Sections als visueller Break
- Wenn bekannte Kundenlogos vorhanden sind

**Beispiel-Sites:**
- Stripe: Monochrome Logos direkt unter dem Hero
- HubSpot: "Trusted by" Logo-Reihe
- Personio: Kundenlogos im Marquee
- Linear: Minimalistisch, wenige Logos, viel Weissraum

**Mobile-Verhalten:**
2x3 oder 3x2 Grid. Oder horizontal scrollbar mit Swipe. Logos skalieren proportional herunter. Marquee-Animation funktioniert auch auf Mobile.

---

## 7. Testimonial Spotlight

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│                                             │
│         ★★★★★                               │
│                                             │
│    "Grosses Zitat hier. Die Zusammenarbeit  │
│     hat unsere Prozesse grundlegend         │
│     verbessert."                            │
│                                             │
│    ┌──────┐                                 │
│    │ Foto │  Max Mustermann                 │
│    └──────┘  CEO, Musterfirma GmbH          │
│                                             │
│    ← →  (Navigation bei mehreren)           │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Grosses, zentriertes Zitat (groessere Schriftgroesse, oft kursiv oder mit grossen Anfuehrungszeichen als Deko-Element). Darunter: rundes Foto, Name, Titel, Firma. Optional: Sterne-Bewertung darueber, Firmenlogo. Hintergrund: oft leicht abgesetzt (hellgrau, leichtes Muster). Bei mehreren Testimonials: Karussell mit Pfeilen oder Dots.

**Varianten:**
- **Single Spotlight**: Ein grosses Zitat, prominente Platzierung
- **Karussell**: 3-5 Zitate durchblaetern
- **Video Testimonial**: Play-Button ueber dem Foto/Thumbnail
- **Mit Ergebnis-Metrik**: "Reduktion der Unfaelle um 73%" + Zitat

**Wann einsetzen:**
- Social Proof verstaerken
- Emotionale Verbindung schaffen
- Vor einem CTA-Block (Zitat -> CTA = starke Conversion-Sequenz)
- Besonders wichtig bei B2B-Services (Vertrauen)

**Beispiel-Sites:**
- Intercom: Grosse Zitate mit Kundenfotos
- Webflow: Video-Testimonials + Text
- TUeV Sued: Kundenreferenzen mit Projekt-Details
- Slack: Karussell mit verschiedenen Unternehmen

**Mobile-Verhalten:**
Zitat-Text wird kleiner aber bleibt lesbar (18-20px). Foto + Name stapeln unter dem Zitat. Swipe-Geste fuer Karussell. Volle Breite.

---

## 8. CTA Banner (Full-Width)

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│  ██████████████████████████████████████████  │
│  ██                                    ████  │
│  ██   [Starke Headline]               ████  │
│  ██   [Kurzer Subtext]                ████  │
│  ██   [Primary CTA Button]            ████  │
│  ██                                    ████  │
│  ██████████████████████████████████████████  │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Full-Width Section mit kontrastierender Hintergrundfarbe (Brand-Farbe, dunkel, Gradient). Zentrierter Text: starke Headline, 1-2 Zeilen Subtext, grosser CTA-Button. Oft mit subtilen Deko-Elementen (Gradient-Glow, geometrische Formen, Dots-Pattern). Die Section bricht bewusst aus dem weissen Layout aus und schafft visuelle Dringlichkeit.

**Varianten:**
- **Minimalistisch**: Nur Headline + Button
- **Mit Bild**: Split mit Foto auf einer Seite
- **Gradient**: Markenfarbe als Gradient-Hintergrund
- **Dark Mode**: Dunkler Hintergrund, heller Text
- **Mit Form-Feld**: E-Mail-Input + Submit direkt integriert

**Wann einsetzen:**
- Nach 2-3 Content-Sections als Conversion-Punkt
- Am Ende der Seite als finaler CTA
- Als "Zwischenstopp" in langen Seiten
- Regel: Mindestens 2 CTA-Banners pro Homepage (Mitte + Ende)

**Beispiel-Sites:**
- Stripe: Dunkler Block mit "Start now" CTA
- HubSpot: Orangefarbener CTA-Banner "Get started free"
- Intercom: Gradient-Banner mit CTA
- Vercel: Minimalistischer schwarzer Block

**Mobile-Verhalten:**
Volle Breite, Padding reduziert. Button wird volle Breite oder bleibt zentriert. Text bleibt lesbar. Kein Layout-Change noetig (bereits vertikal zentriert).

---

## 9. Process / Steps

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│         "So funktioniert es"                │
│                                             │
│    ①──────────②──────────③──────────④       │
│                                             │
│  [Schritt 1]  [Schritt 2]  [Schritt 3]  [4]│
│  Erstanalyse  Begehung     Massnahmen   ... │
│  [Kurzer      [Kurzer      [Kurzer         │
│   Text]        Text]        Text]          │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Nummerierte Schritte (3-5), verbunden durch eine Linie oder Pfeile. Jeder Schritt hat: Nummer (gross, farbig), Titel, kurze Beschreibung, optional ein Icon. Die verbindende Linie zeigt den Ablauf. Oft horizontal auf Desktop, vertikal auf Mobile. Varianten: Timeline-Style, Stepper-Design, oder Karten mit Nummern.

**Varianten:**
- **Horizontal verbunden**: Kreise mit Linie verbunden (klassisch)
- **Vertikal Timeline**: Links Nummern, rechts Content (gut fuer viele Schritte)
- **Karten mit Nummern**: Jeder Schritt ist eine eigene Karte
- **Interaktiv**: Klick auf Schritt zeigt Details

**Wann einsetzen:**
- Prozess/Ablauf erklaeren ("So funktioniert unsere Beratung")
- Onboarding-Schritte
- Komplexe Dienstleistungen vereinfachen
- Angst vor dem ersten Kontakt nehmen

**Beispiel-Sites:**
- Personio: Onboarding-Schritte horizontal
- DEKRA: Pruefungsprozess als Timeline
- HubSpot: "How it works" in 3 Schritten
- Lemonade (Versicherung): Anmeldeprozess visuell erklaert

**Mobile-Verhalten:**
Wechselt zu vertikaler Timeline. Linie wird vertikal links, Content rechts. Jeder Schritt nimmt volle Breite ein. Nummerierung bleibt prominent.

---

## 10. Content Hub / Cards

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│         "Branchen" / "Ressourcen"           │
│         [Section Subtitle]                  │
│                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │ [Image] │  │ [Image] │  │ [Image] │    │
│  │ [Tag]   │  │ [Tag]   │  │ [Tag]   │    │
│  │ [Title] │  │ [Title] │  │ [Title] │    │
│  │ [Text]  │  │ [Text]  │  │ [Text]  │    │
│  │ [Link→] │  │ [Link→] │  │ [Link→] │    │
│  └─────────┘  └─────────┘  └─────────┘    │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Gleichfoermiges Karten-Raster (meistens 3 Spalten). Jede Karte hat identischen Aufbau: Bild oben, Tag/Kategorie, Titel, kurzer Teaser-Text, Link zum Weiterlesen. Karten haben konsistente Groesse und sind klickbar. Hover-Effekt: leichter Schatten oder Translate-Y.

**Varianten:**
- **Blog-Cards**: Bild + Datum + Titel + Excerpt
- **Branchen-Cards**: Icon + Branchenname + kurze Beschreibung
- **Ressourcen-Cards**: PDF-Icon + Titel + Download-Link
- **Team-Cards**: Foto + Name + Position

**Wann einsetzen:**
- Branchen-Uebersicht ("Unsere Branchen")
- Blog-/News-Teaser
- Ressourcen-Bibliothek
- Team-Vorstellung
- Verlinkung zu Unterseiten

**Beispiel-Sites:**
- Stripe: Resource-Hub mit sauberen Karten
- DEKRA: Branchenuebersicht als Karten
- HubSpot: Blog-Teaser auf der Homepage
- Notion: Template-Gallery als Card-Grid

**Mobile-Verhalten:**
Von 3 Spalten zu 1 Spalte (volle Breite). Optional: Horizontal scrollbares Karussell (zeigt 1.5 Karten, signalisiert "mehr vorhanden"). Karten behalten ihr Design.

---

## 11. Split Screen (Visual Heavy)

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│                          │                  │
│                          │  [Overline]      │
│    [Grosses Foto oder    │  [Headline]      │
│     Illustration,        │  [Kurzer Text]   │
│     60% Breite]          │  [CTA Link →]    │
│                          │                  │
│                          │                  │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Aehnlich wie Split-Screen Hero, aber das Bild dominiert (60-65% der Breite). Text-Seite ist kompakt und minimalistisch. Das Bild reicht oft bis zum Rand (Edge-to-Edge) ohne Padding. Schafft einen starken emotionalen/visuellen Eindruck. Text dient als Kontext, nicht als Hauptelement.

**Wann einsetzen:**
- Emotionale Sections (Arbeitsschutz-Fotos, Team bei der Arbeit)
- "Ueber uns" Teaser auf der Homepage
- Wenn das Bild die Geschichte erzaehlt
- Nach einer text-lastigen Section fuer visuellen Ausgleich

**Beispiel-Sites:**
- Airbnb: Grosse Fotos mit minimalem Text
- Squarespace: Visual-heavy Sections
- TUeV Sued: Pruefungsfotos mit kurzem Kontext
- ifm: Industriebilder dominant platziert

**Mobile-Verhalten:**
Bild wird volle Breite, Text stapelt darunter. Bild kann leicht beschnitten werden (aspect-ratio beibehalten). Text-Block erhaelt normales Padding.

---

## 12. Stacked Feature List

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│  [Section Headline]                         │
│                                             │
│  ┌──┐  Feature Titel 1                     │
│  │✓ │  Beschreibungstext zu diesem Feature  │
│  └──┘                                       │
│  ─────────────────────────────────────────  │
│  ┌──┐  Feature Titel 2                     │
│  │✓ │  Beschreibungstext zu diesem Feature  │
│  └──┘                                       │
│  ─────────────────────────────────────────  │
│  ┌──┐  Feature Titel 3                     │
│  │✓ │  Beschreibungstext zu diesem Feature  │
│  └──┘                                       │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Vertikale Liste von Features/Vorteilen. Jedes Item: Icon links (Checkmark, Kreis-Icon), Titel + Beschreibungstext rechts. Getrennt durch subtile Linien oder Spacing. Clean, scanbar, informationsdicht. Oft in einer schmalen Spalte zentriert (max-width: 700px) oder als Teil eines Split-Layouts (Liste links, Bild rechts).

**Varianten:**
- **Nur Icons + Titel**: Kompakt, schnell scannbar
- **Mit ausfuehrlichem Text**: Jedes Feature hat 2-3 Zeilen
- **Checklist-Style**: Grüne Haken, erzeugt "alles inklusive" Gefuehl
- **Split mit Bild**: Liste links, grosses Bild rechts

**Wann einsetzen:**
- "Warum wir" / Vorteile-Section
- Feature-Vergleiche
- Leistungsumfang auflisten
- Wenn viele Punkte kompakt dargestellt werden sollen

**Beispiel-Sites:**
- Linear: Feature-Liste mit minimalistischen Icons
- Notion: Vorteile-Liste clean gestaltet
- Basecamp: "What you get" als Checklist
- Stripe: Feature-Details in Listen-Format

**Mobile-Verhalten:**
Skaliert perfekt, da bereits vertikal. Icons und Text bleiben nebeneinander. Sehr mobile-freundlich.

---

## 13. FAQ Accordion

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│         "Haeufig gestellte Fragen"          │
│                                             │
│  ┌─────────────────────────────────────┐    │
│  │ Frage 1: Was kostet die Beratung?  +│    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ Frage 2: Wie lange dauert...       +│    │
│  │                                     │    │
│  │ Antwort: Aufgeklappter Text hier    │    │
│  │ mit ausfuehrlicher Erklaerung...    │    │
│  └─────────────────────────────────────┘    │
│  ┌─────────────────────────────────────┐    │
│  │ Frage 3: Welche Branchen...        +│    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Aufklappbare Frage-Antwort-Paare. Fragen sind als klickbare Reihen gestaltet mit +/- oder Chevron-Icon. Beim Klick klappt die Antwort mit sanfter Animation auf. Oft schmale Breite (max-width 800px), zentriert. Hilft bei SEO (FAQ Schema.org Markup moeglich).

**Varianten:**
- **Simple Liste**: Nur Fragen + Antworten
- **Kategorisiert**: FAQs nach Thema gruppiert
- **Split-Layout**: FAQs links, CTA-Card rechts ("Noch Fragen? Kontaktieren Sie uns")
- **Mit Suche**: Suchfeld ueber den FAQs

**Wann einsetzen:**
- Einwaende entkraeften
- SEO-relevante Fragen beantworten
- Komplexe Dienstleistungen erklaeren
- In der unteren Haelfte der Homepage

**Beispiel-Sites:**
- Stripe: Clean FAQ mit sanften Animationen
- HubSpot: FAQ-Section mit Kategorien
- DATEV: Haeufige Fragen strukturiert
- Vercel: Minimalistisches Accordion

**Mobile-Verhalten:**
Perfekt mobile-frendlich, da bereits vertikal. Touch-Targets muessen gross genug sein (mind. 48px Hoehe pro Frage). Antwort-Text scrollt natuerlich.

---

## 14. Comparison / Before-After

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│  [Section Headline: "Problem vs. Loesung"]  │
│                                             │
│  ┌─────────────────┐ ┌───────────────────┐  │
│  │ ✗ OHNE uns      │ │ ✓ MIT uns         │  │
│  │                  │ │                   │  │
│  │ - Problem 1      │ │ - Loesung 1      │  │
│  │ - Problem 2      │ │ - Loesung 2      │  │
│  │ - Problem 3      │ │ - Loesung 3      │  │
│  │                  │ │                   │  │
│  │  [rot/grau]      │ │  [gruen/brand]   │  │
│  └─────────────────┘ └───────────────────┘  │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Zwei-Spalten-Vergleich. Linke Spalte: "Vorher" / "Ohne" / "Problem" (rote/graue Farbgebung, X-Icons). Rechte Spalte: "Nachher" / "Mit" / "Loesung" (gruene/blaue Farbgebung, Check-Icons). Visuell klarer Kontrast zwischen den Spalten. Funktioniert auch als Pricing-Vergleich (Basic vs. Premium).

**Varianten:**
- **Zwei Karten nebeneinander**: Klassisch
- **Vorher/Nachher Slider**: Interaktiver Bild-Vergleich
- **Tabelle**: Feature-Comparison mit Haken/Kreuzen
- **Storytelling**: Problem-Text links, Loesungs-Text rechts

**Wann einsetzen:**
- Pain Points adressieren
- Wert der Dienstleistung verdeutlichen
- Differenzierung zum Wettbewerb
- Pricing-Vergleiche

**Beispiel-Sites:**
- Basecamp: "Before Basecamp / After Basecamp"
- Monday.com: Vergleichstabellen
- Notion: "Replace X tools" Vergleich
- Viele SaaS-Landing-Pages nutzen dieses Pattern

**Mobile-Verhalten:**
Zwei Optionen: (A) Karten stapeln vertikal (Problem oben, Loesung unten). (B) Tabs: "Problem" / "Loesung" als Tab-Switch. Option B spart Platz auf Mobile.

---

## 15. Sticky Scroll / Tab Section

**Visuelle Struktur:**
```
┌─────────────────────────────────────────────┐
│                                             │
│  [Tab 1] [Tab 2] [Tab 3]  │  ┌──────────┐ │
│                            │  │           │ │
│  ► Tab 1 Title (aktiv)     │  │  Visual   │ │
│    Beschreibung...         │  │  fuer     │ │
│                            │  │  aktiven  │ │
│    Tab 2 Title             │  │  Tab      │ │
│                            │  │           │ │
│    Tab 3 Title             │  └──────────┘ │
│                            │               │
└─────────────────────────────────────────────┘
```

**Beschreibung:**
Linke Seite: Sticky/fixierte Navigation mit klickbaren Tabs oder Scroll-Trigger-Punkten. Rechte Seite: Wechselnder Content (Bild, Screenshot, Animation) je nach aktivem Tab. Beim Scrollen wechselt automatisch der aktive Tab und das zugehoerige Visual. Alternativ: Klassische Tabs die per Klick wechseln.

**Varianten:**
- **Scroll-triggered**: Content wechselt beim Scrollen automatisch
- **Click Tabs**: Horizontale oder vertikale Tabs zum Klicken
- **Accordion + Visual**: Aufklappbare Items links, Visual rechts
- **Pills/Chips**: Horizontale Filter-Chips die Content wechseln

**Wann einsetzen:**
- Komplexe Features mit je eigenem Visual erklaeren
- Verschiedene Anwendungsfaelle zeigen
- Wenn mehrere Perspektiven/Modi gezeigt werden sollen
- Branchen-spezifische Loesungen praesentieren

**Beispiel-Sites:**
- Stripe: Scroll-triggered Section mit Code-Beispielen
- Linear: Tab-Section fuer verschiedene Features
- Notion: Use-Case-Tabs (Engineering, Design, Product)
- HubSpot: Produkt-Tabs (Marketing, Sales, Service)

**Mobile-Verhalten:**
Sticky-Verhalten wird deaktiviert. Tabs werden zu horizontalem Scrollbar oder Accordion. Content stapelt vertikal. Bei Scroll-triggered: wird zu normalem vertikalen Layout mit Bildern zwischen Text-Blocks.

---

## Empfohlene Section-Reihenfolge fuer eine Homepage

Basierend auf Analyse von Top-performenden B2B-Websites:

```
1.  Hero (Split Screen ODER Centered Statement)
2.  Logo Cloud / Trust Bar
3.  Feature Grid (Bento) - "Unsere Leistungen"
4.  Stats / Numbers Bar
5.  Alternating Zigzag - Detail-Features
6.  CTA Banner (Mitte der Seite)
7.  Process / Steps - "So funktioniert es"
8.  Testimonial Spotlight
9.  Content Hub / Cards - "Branchen"
10. Comparison / Before-After (optional)
11. FAQ Accordion
12. CTA Banner (Ende der Seite)
```

### Regeln fuer visuellen Rhythmus

1. **Nie zwei aehnliche Layouts nacheinander** (z.B. nicht zwei Grids hintereinander)
2. **Hintergrundfarben alternieren**: Weiss → Grau → Weiss → Brand-Farbe → Weiss
3. **Breite variieren**: Full-Width → Contained → Full-Width
4. **Dichte variieren**: Informationsdicht → Viel Weissraum → Informationsdicht
5. **Visuelle Breaks einbauen**: Stats Bar, Logo Cloud, CTA Banner als Trennelemente
6. **Maximum 3 Sections gleicher Grundfarbe hintereinander**
7. **CTA-Rhythm**: Alle 3-4 Sections einen CTA-Moment einbauen

### Hintergrund-Muster fuer Abwechslung

| Section | Hintergrund | Effekt |
|---------|-------------|--------|
| Hero | Weiss/Hell + Gradient | Einladend |
| Logo Cloud | Hellgrau (bg-gray-50) | Subtile Trennung |
| Feature Grid | Weiss | Clean |
| Stats Bar | Brand-Farbe dunkel | Kontrast-Break |
| Zigzag | Weiss | Content-fokussiert |
| CTA Banner | Gradient / Dunkel | Aufmerksamkeit |
| Process | Hellgrau | Neutraler Hintergrund |
| Testimonial | Weiss / Leichter Gradient | Vertrauen |
| Cards | Weiss | Clean |
| FAQ | Hellgrau | Neutraler Abschluss |
| Finaler CTA | Brand-Farbe / Dunkel | Starker Abschluss |

---

## Zusammenfassung

Diese 15 Patterns decken alle gaengigen Section-Typen ab, die auf professionellen B2B-Websites eingesetzt werden. Durch geschicktes Kombinieren und Alternieren entsteht eine visuell abwechslungsreiche Homepage, die den Nutzer durch verschiedene Informationsdichten und visuelle Rhythmen fuehrt - ohne repetitiv zu wirken.

**Wichtigste Erkenntnis**: Die besten Websites (Stripe, Linear, Vercel) nutzen 8-12 verschiedene Section-Typen auf einer einzigen Homepage. Der Schluessel ist nicht die Anzahl, sondern die Variation in:
- Layout-Richtung (horizontal vs. vertikal vs. Grid)
- Informationsdichte (kompakt vs. grosszuegig)
- Hintergrundfarbe/Kontrast
- Verhaeltnis von Text zu Visual
