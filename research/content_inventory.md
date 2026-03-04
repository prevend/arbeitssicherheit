# Content Inventory -- Arbeitssicherheit MG

Erstellt: 2026-03-03
Methode: Jedes sichtbare Textelement aus allen 20 Source-Dateien bewertet.

## Bewertungs-Tags

- **[BUZZWORD]** -- leeres Marketing-Buzzword ohne Substanz
- **[GENERISCH]** -- koennte auf jeder Firmenwebsite stehen, nicht spezifisch
- **[KI-TYPISCH]** -- AI-typische Struktur oder Formulierung (perfekte Parallelstrukturen, Listen von 3/6/8, "Wir verstehen, dass...")
- **[KALT]** -- fehlt Waerme, Empathie, menschliche Note
- **[AUSTAUSCHBAR]** -- Headline/Text koennte fuer jede Branche verwendet werden
- **[WIEDERHOLUNG]** -- wiederkehrendes Muster/Phrase ueber mehrere Seiten
- **[FLOSKELHAFT]** -- leere Phrase, die nichts Konkretes sagt

---

## GLOBALE MUSTER (seitenuebergreifend)

### Strukturelle KI-Fingerabdruecke

1. **Perfekte Dreier-Gruppen ueberall** [KI-TYPISCH]
   - 3 USP-Karten
   - 3 Testimonials
   - 3 Werte
   - 3 Massnahmen je Branche
   - Exakt 4 Prozessschritte je Leistung
   - Exakt 4 Prozessschritte auf der Startseite
   - 6 Leistungen (2x3)
   - 8 Branchen (2x4)
   - 6 FAQs (2x3)
   --> Die gesamte Seite ist in perfekt symmetrischen Gruppen organisiert. Kein echtes Unternehmen hat so symmetrische Strukturen. Das schreit "Template" oder "KI-generiert".

2. **Problem-Loesung-Ergebnis-Prozess bei JEDER Leistung** [KI-TYPISCH]
   - Jede der 6 Leistungen hat exakt die gleiche Struktur: "Die Herausforderung" / "Unsere Loesung" / "Ihr Ergebnis" / "So laeuft es ab" (4 Schritte)
   - Das wirkt mechanisch. Echte Dienstleister erklaeren nicht jede Leistung identisch.

3. **"Kostenfreie Erstanalyse anfragen" -- ueberall** [WIEDERHOLUNG]
   - Erscheint: Hero, Header, Mobile-Nav, CTA-Band (Startseite), 6x auf der Leistungen-Seite (je Leistung), Kontakt-Formular-Titel
   - Mindestens 10x auf der gesamten Website. Wirkt aggressiv und verkaeuflerisch.

4. **"innerhalb von 24 Stunden" -- 4x** [WIEDERHOLUNG]
   - CTA-Band Unterzeile
   - Kontakt-Formular Subline
   - Kontakt-Sidebar Response-Promise
   - Kontakt-Erfolgsmeldung
   --> Wird so oft wiederholt, dass es wie ein Skript wirkt, nicht wie ein echtes Versprechen.

5. **"persoenlich, strukturiert, rechtssicher" -- 3x** [WIEDERHOLUNG]
   - Hero-Subline
   - Meta-Description (layout.tsx)
   - Meta-Description (page.tsx)
   --> Dreiwortkombination, die wie ein AI-Prompt-Output klingt.

6. **Eyebrow + Titel + Beschreibung bei JEDER Sektion** [KI-TYPISCH]
   - Jede einzelne Sektion beginnt mit einem SectionHeader (Eyebrow, Titel, optional Beschreibung). Das ist eine extrem gleichfoermige Struktur, die auf echten Websites selten so durchgaengig vorkommt.

---

## SEITE 1: Startseite `/`

### Hero

| Element | Text | Bewertung |
|---|---|---|
| Eyebrow | "Fachkraft fuer Arbeitssicherheit" | OK -- klar und sachlich |
| H1 Teil 1 | "Arbeitsschutz, der in Ihrem Unternehmen" | OK |
| H1 Akzent | "wirklich funktioniert." | [BUZZWORD] [FLOSKELHAFT] -- "wirklich funktioniert" ist eine leere Behauptung. Was bedeutet das konkret? Jeder Anbieter behauptet das. |
| Subline | "Ihre externe Fachkraft fuer Arbeitssicherheit in Moenchengladbach und am Niederrhein. Persoenlich. Strukturiert. Rechtssicher." | [KI-TYPISCH] -- Drei einzelne Adjektive als Saetze. Klassisches KI-Muster. [WIEDERHOLUNG] -- identisch mit Meta-Description |
| CTA primaer | "Kostenfreie Erstanalyse anfragen" | [WIEDERHOLUNG] -- siehe oben. Der Begriff "Erstanalyse" klingt fuer einen Handwerksmeister wie Berater-Sprache. |
| CTA sekundaer | "Leistungen im Ueberblick" | OK -- funktional |
| Trust-Badge 1 | "Zertifizierte Fachkraft nach DGUV V2" | OK -- konkreter Nachweis |
| Trust-Badge 2 | "Region Moenchengladbach & Niederrhein" | OK -- regional |
| Trust-Badge 3 | "Persoenliche Betreuung" | [GENERISCH] [FLOSKELHAFT] -- das sagt jeder Dienstleister. Was heisst "persoenlich" konkret? |

### USP-Sektion

| Element | Text | Bewertung |
|---|---|---|
| Eyebrow | "Warum wir" | [GENERISCH] -- Standard-Website-Sektion |
| Titel | "Arbeitssicherheit ohne Kompromisse" | [BUZZWORD] [AUSTAUSCHBAR] -- "ohne Kompromisse" ist ein leerer Superlativ. Ersetze "Arbeitssicherheit" durch "Qualitaet" und es passt auf jede Website. |
| USP 1 Titel | "Transparenz statt Blackbox" | [BUZZWORD] -- "Transparenz" und "Blackbox" sind abgenutzte Gegensatzpaare. Was genau ist transparent? |
| USP 1 Text | "Klare Leistungsbeschreibungen mit nachvollziehbaren Inhalten. Sie wissen vor der Kontaktaufnahme, was Sie bekommen." | Halbwegs konkret, aber [GENERISCH] -- was genau unterscheidet das von Wettbewerbern? |
| USP 2 Titel | "Persoenlicher Ansprechpartner" | [GENERISCH] [WIEDERHOLUNG] -- "persoenlich" taucht auf der gesamten Website auf (Hero, Trust-Badge, Ueber-uns, Meta) |
| USP 2 Text | "Kein anonymes Call-Center, kein wechselnder Berater. Ein fester Ansprechpartner fuer Ihr Unternehmen -- vor Ort in der Region." | Besser -- konkrete Abgrenzung. Aber [KALT] -- kein Name, kein Gesicht, kein "Ich". |
| USP 3 Titel | "Alles aus einer Hand" | [FLOSKELHAFT] [AUSTAUSCHBAR] -- eine der meistgenutzten Floskeln in Deutschland. Sagt jeder Handwerker, jeder Dienstleister, jede Agentur. |
| USP 3 Text | "Regelbetreuung, Gefaehrdungsbeurteilungen, Pruefungen und Schulungen -- ein Anbieter statt fuenf verschiedene." | OK -- konkrete Aufzaehlung mit klarem Nutzen |

### Services Grid (Startseite)

| Element | Text | Bewertung |
|---|---|---|
| Eyebrow | "Leistungen" | OK |
| Titel | "Alles aus einer Hand -- von der Beratung bis zur Pruefung" | [FLOSKELHAFT] [WIEDERHOLUNG] -- "Alles aus einer Hand" wird hier ein ZWEITES Mal verwendet (auch USP 3). |
| Beschreibung | "Unsere Leistungsmodule decken den gesamten Arbeitsschutz Ihres Unternehmens ab." | [BUZZWORD] -- "Leistungsmodule" klingt nach Berater-Sprache, nicht nach einem regionalen Dienstleister. [KALT] |
| Hover-Text | "Mehr erfahren" (6x) | [GENERISCH] -- Standard-Link-Text |
| Arbeitsschutzbetreuung | "Gesetzliche Regelbetreuung als externe Fachkraft fuer Arbeitssicherheit -- zuverlaessig und strukturiert." | [FLOSKELHAFT] -- "zuverlaessig und strukturiert" sagt nichts. Was macht diese Betreuung besonders? |
| Gefaehrdungsbeurteilungen | "Systematische Analyse aller Arbeitsplaetze und Taetigkeiten -- von physischen bis psychischen Belastungen." | [KI-TYPISCH] -- "von X bis Y" ist ein klassisches KI-Muster. Sachlich korrekt, aber [KALT]. |
| Unterweisungen | "Praxisnahe Betriebsanweisungen und regelmaessige Unterweisungen, die Ihre Mitarbeitenden wirklich verstehen." | [BUZZWORD] -- "wirklich verstehen" ist die gleiche Behauptung wie "wirklich funktioniert" im Hero. Beweislos. |
| Pruefungen | "Elektrische Betriebsmittel, Leitern, Regale und mehr -- alle gesetzlich vorgeschriebenen Pruefungen aus einer Hand." | [WIEDERHOLUNG] -- schon wieder "aus einer Hand". Jetzt zum DRITTEN Mal. |
| Schulungen | "Erste Hilfe, Brandschutzhelfer, Staplerfahrer und mehr -- praxisnahe Schulungen direkt in Ihrem Betrieb." | [BUZZWORD] -- "praxisnah" ist ein leeres Adjektiv ohne Beleg. [WIEDERHOLUNG] -- "praxisnah" auch bei Unterweisungen |
| SiGeKo | "Sicherheits- und Gesundheitsschutzkoordination fuer Bauprojekte nach Baustellenverordnung." | OK -- sachlich und fachlich korrekt, aber [KALT] -- rein funktional |

### Prozess-Schritte (Startseite)

| Element | Text | Bewertung |
|---|---|---|
| Eyebrow | "So funktioniert es" | [GENERISCH] [KI-TYPISCH] -- Standard-Sektion, die jede SaaS-Website hat |
| Titel | "In vier Schritten zur sicheren Betreuung" | [KI-TYPISCH] -- "In X Schritten zu Y" ist ein KI-Klassiker. [AUSTAUSCHBAR] |
| Schritt 1 | "Erstgespraech" -- "Kostenlos und unverbindlich. Wir lernen Ihr Unternehmen kennen und analysieren Ihren Bedarf." | [GENERISCH] [FLOSKELHAFT] -- "Kostenlos und unverbindlich" sagt jeder. "Wir lernen Ihr Unternehmen kennen" ist leer. |
| Schritt 2 | "Bestandsaufnahme" -- "Vor-Ort-Termin in Ihrem Betrieb. Wir erfassen den aktuellen Stand und identifizieren Handlungsbedarf." | [KALT] -- klingt wie ein Audit, nicht wie ein Kennenlernen. "Identifizieren Handlungsbedarf" ist Berater-Sprache. |
| Schritt 3 | "Massnahmenplan" -- "Sie erhalten einen klaren Plan mit priorisierten Massnahmen, Zustaendigkeiten und Zeitrahmen." | [KALT] -- klingt nach Unternehmensberatung, nicht nach einem bodenstaendigen Arbeitsschuetzer. "Priorisierte Massnahmen" -- wer redet so? |
| Schritt 4 | "Laufende Betreuung" -- "Wir setzen die Massnahmen gemeinsam um und stehen Ihnen als fester Ansprechpartner zur Seite." | [GENERISCH] [WIEDERHOLUNG] -- "fester Ansprechpartner" kommt hier zum dritten Mal (USP, Leistung Arbeitsschutzbetreuung, hier). |

### Testimonials (Startseite)

| Element | Text | Bewertung |
|---|---|---|
| Eyebrow | "Kundenstimmen" | OK |
| Titel | "Was unsere Kunden sagen" | [GENERISCH] -- Standard-Headline |
| Zitat 1 | "Endlich ein Arbeitsschutz-Dienstleister, der mitdenkt. Die Zusammenarbeit ist unkompliziert, die Dokumentation immer auf dem neuesten Stand und wir wissen jederzeit, wo wir stehen." | [KI-TYPISCH] -- perfekte Dreier-Aufzaehlung (unkompliziert, aktuell, orientiert). So spricht kein echter Mensch. [KALT] -- klingt wie eine Marketing-Referenz, nicht wie ein echtes Zitat. |
| Zitat 2 | "Wir hatten vorher keinen Ueberblick ueber unsere Prueffristen. Seit der Zusammenarbeit mit Arbeitssicherheit MG ist alles strukturiert und wir muessen uns um nichts mehr kuemmern." | Etwas besser -- hat ein konkretes Problem (Prueffristen). Aber [KI-TYPISCH] -- die "vorher-nachher"-Struktur ist ein Klassiker von KI-generierten Testimonials. |
| Zitat 3 | "Die Schulungen waren praxisnah und unsere Mitarbeitenden haben wirklich etwas mitgenommen. Kein Vergleich zu den langweiligen Standardpraesentationen, die wir vorher hatten." | [WIEDERHOLUNG] -- "praxisnah" und "wirklich" schon wieder. [KI-TYPISCH] -- gleiche vorher-nachher-Struktur wie Zitat 2 |
| ALLE Namen | "[PLATZHALTER: Name]" | KRITISCH -- keine echten Testimonials vorhanden. Die Zitate sind frei erfunden. Das ist unehrlich und kann Vertrauen zerstoeren, wenn es auffaellt. |
| ALLE Firmen | "[PLATZHALTER: Unternehmen GmbH]" | KRITISCH -- s.o. |
| ALLE 5 Sterne | 5/5 bei jedem Testimonial | [KI-TYPISCH] -- drei perfekte 5-Sterne-Bewertungen ohne echte Quelle. Unglaubwuerdig. |

### FAQ (Startseite)

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Haeufig gestellte Fragen" | OK -- Standard |
| Frage 1 | "Brauche ich ueberhaupt eine externe Fachkraft fuer Arbeitssicherheit?" | OK -- relevante Frage, die echte Kunden stellen |
| Antwort 1 | "Ja. Nach DGUV Vorschrift 2 ist jeder Arbeitgeber verpflichtet..." | OK -- sachlich korrekt, gut verstaendlich |
| Frage 2 | "Was kostet die Betreuung durch eine Fachkraft fuer Arbeitssicherheit?" | OK -- wichtige Frage |
| Antwort 2 | "Die Kosten haengen von der Betriebsgroesse, der Branche und dem Betreuungsumfang ab. Wir erstellen Ihnen nach dem Erstgespraech ein transparentes Angebot, in dem alle Leistungen und Kosten klar aufgefuehrt sind." | [GENERISCH] -- sagt nichts. Keine Groesenordnung, kein Beispiel, kein Anhaltspunkt. Das ist die Nicht-Antwort, die jeder gibt. [BUZZWORD] -- "transparentes Angebot" |
| Frage 3 | "Wie laeuft die Zusammenarbeit ab?" | OK |
| Antwort 3 | "Nach einem kostenfreien Erstgespraech fuehren wir eine Bestandsaufnahme in Ihrem Betrieb durch. Daraus ergibt sich ein Massnahmenplan mit klaren Prioritaeten. Anschliessend uebernehmen wir die laufende Betreuung mit regelmaessigen Begehungen und Beratung." | [WIEDERHOLUNG] -- das ist 1:1 die gleiche Information wie die 4 Prozessschritte weiter oben. Doppelt auf der gleichen Seite! |
| Frage 4 | "Was ist eine Gefaehrdungsbeurteilung und wann brauche ich eine?" | OK -- fachlich relevant |
| Antwort 4 | "Die Gefaehrdungsbeurteilung ist die zentrale Pflicht im Arbeitsschutz..." | OK -- aber [WIEDERHOLUNG] -- fast identisch mit dem "Problem"-Text der Leistung Gefaehrdungsbeurteilungen |
| Frage 5 | "Koennen die Schulungen bei uns im Betrieb stattfinden?" | OK |
| Antwort 5 | "Ja. Wir fuehren alle Schulungen direkt bei Ihnen vor Ort durch. So sparen Sie Reisezeiten und Ihre Mitarbeitenden lernen in ihrer gewohnten Arbeitsumgebung." | OK -- kurz und klar |
| Frage 6 | "Wie schnell koennen wir starten?" | OK |
| Antwort 6 | "In der Regel vereinbaren wir innerhalb von wenigen Tagen ein Erstgespraech. Die Bestandsaufnahme vor Ort kann oft schon in der Folgewoche stattfinden. Bei dringenden Anliegen finden wir kurzfristige Loesungen." | Halbwegs konkret -- "wenige Tage", "Folgewoche" |

### CTA Band (Startseite)

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Bereit fuer rechtssicheren Arbeitsschutz?" | [GENERISCH] [AUSTAUSCHBAR] -- "Bereit fuer X?" ist die Standard-CTA-Frage jeder Website. Ersetze "Arbeitsschutz" durch alles andere und es funktioniert genau gleich. |
| Beschreibung | "Lassen Sie uns in einem kostenlosen Erstgespraech herausfinden, wie wir Ihr Unternehmen unterstuetzen koennen." | [GENERISCH] [FLOSKELHAFT] -- "Lassen Sie uns herausfinden" + "wie wir unterstuetzen koennen" sind Standardfloskeln. [WIEDERHOLUNG] -- "kostenloses Erstgespraech" taucht in verschiedenen Varianten ueberall auf. |
| Button | "Kostenfreie Erstanalyse anfragen" | [WIEDERHOLUNG] -- xtes Mal |
| Unterzeile | "Kostenlos und unverbindlich -- Antwort innerhalb von 24 Stunden" | [WIEDERHOLUNG] -- beide Teile mehrfach auf der Site |

---

## SEITE 2: Leistungen `/leistungen`

### Page Header

| Element | Text | Bewertung |
|---|---|---|
| Eyebrow | "Leistungen" | OK |
| Titel | "Unsere Leistungen fuer Ihre Arbeitssicherheit" | [GENERISCH] [AUSTAUSCHBAR] -- "Unsere Leistungen fuer Ihre [X]" ist austauschbar. |
| Beschreibung | "Wir decken den gesamten Arbeitsschutz Ihres Unternehmens ab -- von der Beratung bis zur Pruefung. Jede Leistung ist so gestaltet, dass sie in Ihrem Betrieb praktisch umsetzbar ist." | [KI-TYPISCH] -- "von X bis Y" wieder. [FLOSKELHAFT] -- "praktisch umsetzbar" ist eine Selbstverstaendlichkeit. |

### Leistung: Arbeitsschutzbetreuung

| Element | Text | Bewertung |
|---|---|---|
| Problem | "Viele Unternehmen wissen nicht, welche Betreuungsform fuer sie gilt und welche Pflichten damit verbunden sind. Ohne externe Fachkraft drohen Bussgelder und Haftungsrisiken." | [KI-TYPISCH] -- "Viele Unternehmen wissen nicht..." ist ein KI-Klassiker, um Problembewusstsein zu wecken. [KALT] -- setzt auf Angst (Bussgelder, Haftung) statt Empathie. |
| Loesung | "Wir uebernehmen Ihre gesetzliche Regelbetreuung nach DGUV Vorschrift 2. Das umfasst regelmaessige Betriebsbegehungen, Teilnahme an Arbeitsschutzsitzungen und Beratung der Geschaeftsfuehrung." | OK -- sachlich und konkret |
| Ergebnis | "Sie erfuellen alle gesetzlichen Pflichten und haben einen festen Ansprechpartner, der Ihr Unternehmen kennt und proaktiv beraten kann." | [WIEDERHOLUNG] -- "fester Ansprechpartner" zum vierten Mal. [BUZZWORD] -- "proaktiv" |
| Prozess | 4 Schritte | [KI-TYPISCH] -- exakt 4 Schritte bei jeder Leistung, wie aus einer Vorlage |
| CTA | "Interesse an arbeitsschutzbetreuung? / Kostenfreie Erstanalyse anfragen" | [WIEDERHOLUNG] |

### Leistung: Gefaehrdungsbeurteilungen

| Element | Text | Bewertung |
|---|---|---|
| Problem | "Die Gefaehrdungsbeurteilung ist die zentrale Pflicht im Arbeitsschutz. Viele Unternehmen haben keine, eine veraltete oder eine unvollstaendige Beurteilung." | [WIEDERHOLUNG] -- fast identisch mit FAQ-Antwort 4. [KI-TYPISCH] -- "keine, veraltete oder unvollstaendige" -- perfekte Dreieraufzaehlung |
| Loesung | "Wir erstellen und aktualisieren Gefaehrdungsbeurteilungen fuer alle Arbeitsplaetze, Taetigkeiten und Gefahrstoffe -- einschliesslich der psychischen Gefaehrdungsbeurteilung." | OK -- sachlich |
| Ergebnis | "Lueckenlose, aktuelle Dokumentation, die bei einer Pruefung durch die Berufsgenossenschaft oder das Gewerbeaufsichtsamt standhaelt." | [KALT] -- wieder Angst-Framing (Pruefung durch Behoerden). Kein positiver Aspekt. |

### Leistung: Betriebsanweisungen & Unterweisungen

| Element | Text | Bewertung |
|---|---|---|
| Problem | "Betriebsanweisungen sind oft unverstaendlich formuliert, Unterweisungen finden unregelmaessig statt und die Dokumentation ist lueckenhaft." | [KI-TYPISCH] -- wieder perfekte Dreieraufzaehlung (unverstaendlich, unregelmaessig, lueckenhaft) |
| Loesung | "Wir erstellen verstaendliche Betriebsanweisungen und fuehren Unterweisungen durch, die auf Ihre Arbeitsplaetze zugeschnitten sind." | [GENERISCH] -- "auf Ihre Arbeitsplaetze zugeschnitten" sagt jeder. |
| Ergebnis | "Mitarbeitende wissen, worauf sie achten muessen. Unterweisungsnachweise sind lueckenlos dokumentiert." | [KALT] -- rein sachlich, kein Mensch wuerde so sprechen |

### Leistung: Pruefungen (DGUV / UVV)

| Element | Text | Bewertung |
|---|---|---|
| Problem | "Prueffristen laufen ab, der Ueberblick fehlt und die Koordination verschiedener Pruefdienstleister ist aufwaendig." | [KI-TYPISCH] -- wieder drei Probleme in einer Reihe |
| Loesung | "Wir uebernehmen die Pruefung Ihrer elektrischen Betriebsmittel nach DGUV V3, Leitern und Tritte, Regalanlagen und weiterer Arbeitsmittel." | OK -- konkret |
| Ergebnis | "Alle Pruefungen termingerecht durchgefuehrt, dokumentiert und im Ueberblick -- mit automatischer Fristenerinnerung." | OK -- "automatische Fristenerinnerung" ist ein konkretes Feature |

### Leistung: Schulungen & Ausbildungen

| Element | Text | Bewertung |
|---|---|---|
| Problem | "Schulungstermine muessen organisiert werden, Mitarbeitende muessen freigestellt werden und die Nachweisdokumentation geht haeufig verloren." | [KI-TYPISCH] -- drei Probleme. Wie bei jeder anderen Leistung. |
| Loesung | "Wir bieten alle relevanten Schulungen direkt in Ihrem Betrieb an: Erste Hilfe, Brandschutzhelfer, Staplerfahrer und Hubarbeitsbuehnen." | OK -- konkret |
| Ergebnis | "Geschulte Mitarbeitende, lueckenlose Nachweise und minimaler Organisationsaufwand fuer Sie." | [KI-TYPISCH] -- wieder Dreieraufzaehlung. [WIEDERHOLUNG] -- "lueckenlos" taucht bei mehreren Leistungen auf |

### Leistung: SiGeKo

| Element | Text | Bewertung |
|---|---|---|
| Problem | "Bauherren sind verpflichtet, einen SiGeKo zu bestellen, sobald Beschaeftigte mehrerer Arbeitgeber auf einer Baustelle taetig werden. Die Anforderungen sind komplex." | OK -- fachlich korrekt. [FLOSKELHAFT] -- "Die Anforderungen sind komplex" sagt nichts. |
| Loesung | "Wir uebernehmen die SiGeKo-Leistungen in der Planungs- und Ausfuehrungsphase, erstellen den SiGe-Plan und die Unterlage fuer spaetere Arbeiten." | OK -- konkret |
| Ergebnis | "Rechtskonformes Bauprojekt mit dokumentierter Sicherheitskoordination und reduziertem Haftungsrisiko fuer den Bauherrn." | [KALT] [BUZZWORD] -- "rechtskonform", "reduziertes Haftungsrisiko" -- nur Jura-Sprache, kein menschlicher Nutzen |

### CTA Band (Leistungen-Seite)

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Nicht sicher, welche Leistungen Sie benoetigen?" | OK -- nimmt eine echte Unsicherheit auf |
| Beschreibung | "Nicht sicher, welche Leistungen Sie benoetigen? Wir pruefen das gerne gemeinsam -- kostenfrei und unverbindlich." | [WIEDERHOLUNG] -- Titel und Beschreibung beginnen mit dem gleichen Satz! [FLOSKELHAFT] -- "kostenfrei und unverbindlich" zum xten Mal |

---

## SEITE 3: Branchen `/branchen`

### Page Header

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Arbeitsschutz fuer Ihre Branche" | [GENERISCH] [AUSTAUSCHBAR] -- "[Service] fuer Ihre Branche" |
| Beschreibung | "Jede Branche hat eigene Gefaehrdungen und Anforderungen. Wir kennen die spezifischen Risiken und wissen, welche Massnahmen in Ihrem Betrieb wirklich greifen." | [FLOSKELHAFT] -- "Wir kennen die spezifischen Risiken" ist eine Behauptung ohne Beleg. Woher? Wie lange? [BUZZWORD] -- "wirklich greifen" |

### Branchen-Sektionen

**Beobachtung zur Gesamtstruktur:** [KI-TYPISCH]
Jede Branche hat exakt die gleiche Struktur: Risiken als Komma-Liste, dann exakt 3 Massnahmen mit Checkmark. Das ist so gleichfoermig, dass es maschinell wirkt.

| Branche | Risiken | Massnahmen-Bewertung |
|---|---|---|
| Handwerk & Bau | "Absturz, Laerm, Gefahrstoffe, Maschinen" | OK -- fachlich korrekt, aber [KALT] -- nur Stichworte, kein Kontext |
| Produktion & Fertigung | "Maschinensicherheit, Gefahrstoffe, Laerm, Schichtarbeit" | Gleiche Bewertung |
| Logistik & Lager | "Staplerverkehr, Regalanlagen, Ladungssicherung" | Gleiche Bewertung |
| Buero & Verwaltung | "Bildschirmarbeit, Ergonomie, psychische Belastungen" | Gleiche Bewertung |
| Gesundheitswesen & Pflege | "Biologische Gefaehrdungen, Heben und Tragen, Nadelstiche" | Gleiche Bewertung |
| Gastronomie & Hotellerie | "Schnitt- und Verbrennungsgefahr, Rutschgefahr, Gefahrstoffe" | Gleiche Bewertung |
| Einzelhandel | "Manuelle Lastenhandhabung, Stolpergefahren, Stress" | Gleiche Bewertung |
| Dienstleistung & IT | "Bildschirmarbeit, psychische Belastungen, Ergonomie" | [WIEDERHOLUNG] -- fast identisch mit Buero & Verwaltung! |

**Alle 8 CTAs:** "Beratung fuer [branche] anfragen" --> [GENERISCH] [WIEDERHOLUNG]

### CTA Band (Branchen)

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Ihre Branche ist nicht aufgefuehrt?" | OK -- spricht ein echtes Anliegen an |
| Beschreibung | "Ihre Branche ist nicht aufgefuehrt? Sprechen Sie uns an -- wir betreuen Unternehmen aus vielen weiteren Bereichen." | [WIEDERHOLUNG] -- Titel und Beschreibung starten wieder identisch |

---

## SEITE 4: Ueber uns `/ueber-uns`

### Page Header

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Ihr Partner fuer Arbeitssicherheit in der Region" | [BUZZWORD] [GENERISCH] [AUSTAUSCHBAR] -- "Ihr Partner fuer [X] in der Region" ist die langweiligste moegliche Headline fuer eine Ueber-uns-Seite. Jeder nutzt "Partner". |
| Beschreibung | "Arbeitssicherheit MG steht fuer pragmatischen Arbeitsschutz, der in der Praxis funktioniert. Wir betreuen Unternehmen in Moenchengladbach und am Niederrhein -- persoenlich, strukturiert und auf Augenhoehe." | [WIEDERHOLUNG] -- "persoenlich, strukturiert" wieder. [BUZZWORD] -- "auf Augenhoehe" ist eine der meistgenutzten Floskeln 2024/25. [BUZZWORD] -- "pragmatisch" wird inflationaer verwendet. |

### Unser Ansatz

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Unser Ansatz" | [GENERISCH] -- Standard-Ueberschrift |
| Text | "Arbeitsschutz soll kein Buerokratie-Monster sein. Wir gestalten Gefaehrdungsbeurteilungen, Betriebsanweisungen und Unterweisungen so, dass sie im Alltag tatsaechlich genutzt werden koennen. Nicht Ordner voller Papier, sondern Loesungen, die in der Praxis funktionieren." | Halbobjektiv: "Buerokratie-Monster" ist ein gutes Bild, zeigt Verstaendnis fuer den Frust. ABER: [WIEDERHOLUNG] -- "in der Praxis funktionieren" ist fast identisch mit der Hero-Headline. [KI-TYPISCH] -- "Nicht X, sondern Y" ist ein klassisches KI-Rhetorikmuster. |

### Werte

| Element | Text | Bewertung |
|---|---|---|
| Eyebrow | "Unsere Werte" | [GENERISCH] -- Standard |
| Titel | "Wofuer wir stehen" | [GENERISCH] [AUSTAUSCHBAR] -- "Wofuer wir stehen" steht auf tausenden Websites |
| Wert 1 Titel | "Klartext statt Fachchinesisch" | OK -- gutes Bild, verstaendlich |
| Wert 1 Text | "Wir erklaeren Arbeitsschutz so, dass Sie es verstehen -- ohne unnoetige Fachbegriffe." | [GENERISCH] -- das ist eine Selbstverstaendlichkeit, kein Wert |
| Wert 2 Titel | "Verbindlichkeit" | [GENERISCH] -- ein-Wort-Wert, austauschbar |
| Wert 2 Text | "Wenn wir etwas zusagen, halten wir es ein. Termine, Fristen und Ergebnisse sind fuer uns keine Verhandlungssache." | [GENERISCH] [FLOSKELHAFT] -- das sollte Standard sein, nicht ein besonderer Wert. Dass man Zusagen einhaelt, ist keine Differenzierung. |
| Wert 3 Titel | "Pragmatismus" | [BUZZWORD] [WIEDERHOLUNG] -- "pragmatisch" schon im Page-Header |
| Wert 3 Text | "Wir finden Loesungen, die zu Ihrem Betrieb passen -- nicht theoretische Ideale, die an der Realitaet scheitern." | [KI-TYPISCH] -- "Nicht X, sondern Y" wieder. [FLOSKELHAFT] -- der gleiche Gedanke wie "Unser Ansatz", nur anders formuliert |

### Team

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Die Menschen hinter Arbeitssicherheit MG" | [GENERISCH] [KI-TYPISCH] -- "Die Menschen hinter [Firma]" ist ein AI-Standardsatz |
| Mitglied 1 Name | "[PLATZHALTER: Vorname Nachname]" | KRITISCH -- kein echtes Team sichtbar |
| Mitglied 1 Rolle | "Fachkraft fuer Arbeitssicherheit" | OK |
| Mitglied 1 Text | "Seit [PLATZHALTER] Jahren im Arbeitsschutz taetig. Spezialisiert auf kleine und mittlere Unternehmen in der Region Moenchengladbach." | [KALT] -- kein persoenliches Detail, kein Charakter, kein Mensch spuerbar |
| Mitglied 2 Text | "Erfahrung in den Bereichen Produktion, Logistik und Handwerk. Fuehrt Schulungen und Pruefungen vor Ort durch." | [KALT] -- identisch unpersoenlich wie Mitglied 1 |

### Regional verwurzelt

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Regional verwurzelt" | [BUZZWORD] -- "verwurzelt" ist eine Floskel, die jeder regionale Anbieter nutzt |
| Text | "Unser Sitz ist in Moenchengladbach. Wir kennen die Unternehmen und die Branchen der Region. Kurze Wege, schnelle Reaktionszeiten und die Verbindlichkeit eines lokalen Dienstleisters -- das unterscheidet uns von grossen, anonymen Anbietern." | Halbwegs gut -- konkreter Ortsbezug. ABER: [KI-TYPISCH] -- wieder Dreieraufzaehlung (Kurze Wege, schnelle Reaktionszeiten, Verbindlichkeit). [WIEDERHOLUNG] -- "Verbindlichkeit" war gerade ein ganzer Werte-Block. [GENERISCH] -- "das unterscheidet uns von grossen anonymen Anbietern" ist ein Standard-Abgrenzungsargument |
| Button | "Lernen Sie uns persoenlich kennen" | [WIEDERHOLUNG] -- identisch mit CTA-Band darunter |

### CTA Band (Ueber uns)

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Lernen Sie uns persoenlich kennen" | [WIEDERHOLUNG] -- gerade 2 Sekunden vorher der gleiche Text als Button |
| Beschreibung | "Wir freuen uns auf ein Gespraech mit Ihnen -- unverbindlich und kostenfrei." | [FLOSKELHAFT] [WIEDERHOLUNG] -- "unverbindlich und kostenfrei" in anderer Wortreihenfolge zum xten Mal |

---

## SEITE 5: Kontakt `/kontakt`

### Page Header

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Sprechen Sie uns an" | [GENERISCH] -- Standard-Kontaktseiten-Titel |
| Beschreibung | "Wir melden uns schnell zurueck. Fuellen Sie das Formular aus oder rufen Sie direkt an." | OK -- kurz und direkt. Aber [KALT] -- "Wir melden uns schnell zurueck" hat keine Waerme. |

### Formular-Bereich

| Element | Text | Bewertung |
|---|---|---|
| Titel | "Kostenfreie Erstanalyse anfragen" | [WIEDERHOLUNG] -- selber Text wie CTA ueberall |
| Subline | "Fuellen Sie das Formular aus -- wir melden uns innerhalb von 24 Stunden." | [WIEDERHOLUNG] -- "innerhalb von 24 Stunden" zum wiederholten Mal |
| Placeholder Name | "Ihr Name" | OK |
| Placeholder Firma | "Firmenname (optional)" | OK |
| Placeholder E-Mail | "ihre@email.de" | OK |
| Placeholder Telefon | "+49 ..." | OK |
| Dropdown | "Bitte waehlen (optional)" | OK |
| Placeholder Nachricht | "Wie koennen wir Ihnen helfen?" | [GENERISCH] -- Standard-Platzhalter |
| DSGVO | "Ich stimme der Verarbeitung meiner Daten gemaess der Datenschutzerklaerung zu." | OK -- rechtlich notwendig |
| Submit | "Erstanalyse anfragen" | [WIEDERHOLUNG] |
| Erfolgsmeldung | "Ihre Anfrage wurde erfolgreich gesendet. / Wir melden uns innerhalb von 24 Stunden bei Ihnen." | [WIEDERHOLUNG] |
| Fehlermeldung | "Beim Senden ist ein Fehler aufgetreten. / Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch." | OK |

### Sidebar

| Element | Text | Bewertung |
|---|---|---|
| Sidebar-Titel | "Kontakt" | OK |
| Response-Promise | "Wir antworten in der Regel innerhalb von 24 Stunden an Werktagen." | [WIEDERHOLUNG] |
| Trust-Signal | "Ihre Daten werden SSL-verschluesselt uebertragen" | OK -- aber eher Standard als Trust-Signal |

---

## SEITE 6: Impressum `/impressum`

Hauptsaechlich PLATZHALTER -- keine Content-Probleme im engeren Sinne, da rechtlich vorgegebene Struktur.

---

## SEITE 7: Datenschutz `/datenschutz`

Hauptsaechlich Standard-Datenschutztext mit PLATZHALTERN. Keine Content-Probleme im engeren Sinne (rechtlich vorgeschriebener Inhalt).

---

## LAYOUT-KOMPONENTEN

### Header

| Element | Text | Bewertung |
|---|---|---|
| Logo | "Arbeitssicherheit MG" | OK |
| Nav-Labels | Startseite, Leistungen, Branchen, Ueber uns, Kontakt | OK |
| CTA-Button | "Erstanalyse anfragen" | [WIEDERHOLUNG] |

### Footer

| Element | Text | Bewertung |
|---|---|---|
| Tagline | "Ihre externe Fachkraft fuer Arbeitssicherheit in Moenchengladbach und Umgebung." | [WIEDERHOLUNG] -- praktisch identisch mit Hero-Subline |
| Copyright | "(c) [Jahr] Arbeitssicherheit MG. Alle Rechte vorbehalten." | OK -- Standard |
| Region | "Region Moenchengladbach & Niederrhein" | OK |

### Mobile Navigation

| Element | Text | Bewertung |
|---|---|---|
| CTA | "Erstanalyse anfragen" | [WIEDERHOLUNG] |

---

## ZUSAMMENFASSUNG: Die groessten Probleme

### 1. WIEDERHOLUNG -- Massiv
- "Kostenfreie Erstanalyse anfragen" ~10x
- "innerhalb von 24 Stunden" ~4x
- "persoenlich, strukturiert" ~3x
- "aus einer Hand" 3x
- "fester Ansprechpartner" 4x
- "kostenfrei und unverbindlich" / "kostenlos und unverbindlich" ~5x
- "wirklich funktioniert" / "wirklich greifen" / "wirklich verstehen" / "wirklich etwas mitgenommen" -- 4x das Wort "wirklich" als leerer Verstaerker
- "praxisnah" 3x
- "lueckenlos" 3x
- Prozessschritte werden auf der Startseite und in der FAQ praktisch doppelt erzaehlt

### 2. KI-TYPISCH -- Durchgehend
- JEDE Sektion hat exakt die gleiche Struktur (Eyebrow + Titel + Beschreibung)
- JEDE Leistung hat exakt 4 Prozessschritte
- Perfekte Dreiergruppen ueberall (3 USPs, 3 Testimonials, 3 Werte, 3 Massnahmen je Branche)
- Perfekte Gegensatzpaare ("Nicht X, sondern Y" mindestens 3x)
- "Viele Unternehmen wissen nicht..." als Problem-Einstieg
- Vorher-Nachher-Struktur bei Testimonials
- "Die Menschen hinter [Firma]"

### 3. KALT -- Kein Mensch spuerbar
- Kein einziger Name einer echten Person (nur PLATZHALTER)
- Kein "Ich"-Perspektive, obwohl es sich um ein kleines/regionales Unternehmen handelt
- Keine persoenliche Geschichte, kein Anlass, kein Warum
- Keine echten Anekdoten oder Beispiele
- Angst-Framing dominiert (Bussgelder, Haftung, Pruefung durch Behoerden) statt positiver Motivation
- Team-Beschreibungen lesen sich wie Lebenslaeufe, nicht wie Vorstellungen
- Testimonials sind erfunden und haben perfekte Struktur -- kein Mensch redet so

### 4. AUSTAUSCHBAR -- Branche egal
- "Ihr Partner fuer [X] in der Region"
- "Bereit fuer [X]?"
- "Unsere Leistungen fuer Ihre [X]"
- "[X] ohne Kompromisse"
- "Wofuer wir stehen"
- "Die Menschen hinter [Firma]"
- "In [N] Schritten zu [X]"
- All diese Headlines funktionieren genauso fuer einen Steuerberater, einen Maler oder eine IT-Firma.

### 5. FLOSKELHAFT -- Leere Phrasen
- "Alles aus einer Hand" (3x)
- "auf Augenhoehe"
- "kostenlos und unverbindlich"
- "transparentes Angebot"
- "wirklich funktioniert"
- "praxisnah"
- "regional verwurzelt"
- "proaktiv"
- "Leistungsmodule"

### 6. WAS FEHLT
- **Echte Stimme:** Wer steckt dahinter? Was treibt die Person an? Warum Arbeitsschutz?
- **Konkretes:** Kein einziges konkretes Beispiel ("Neulich bei einem Kunden in Rheydt haben wir...")
- **Zahlen:** Keine Betriebsgroessen, keine Preisbeispiele, keine Anzahl betreuter Kunden
- **Ecken und Kanten:** Die Seite ist perfekt glatt -- das wirkt kuenstlich
- **Humor oder Menschlichkeit:** Alles ist professionell-kuehl. Kein Satz, der zum Schmunzeln bringt oder ein echtes Bild im Kopf erzeugt.
- **Regionale Details:** "Moenchengladbach" wird genannt, aber nie lebendig. Keine Strassennamen, keine lokalen Branchen, keine konkreten Geschichten aus der Region.
- **Differenzierung:** Die Seite erklaert gut WAS gemacht wird, aber nie WARUM gerade dieser Anbieter. Der "Persoenliche Ansprechpartner" bleibt namenlos. Die "Praxisnaehe" bleibt ohne Beispiel.
