# Referenz-Analyse: arbeitssicherheit-mg.de

> Strukturelle Analyse der bestehenden Website als Grundlage fuer die Neuentwicklung.
> Hinweis: Diese Analyse beschreibt strukturelle Muster und Verbesserungspotenziale -- keine Inhalte werden woertlich uebernommen.

---

## 1. Seitenstruktur und Navigation

### Technische Basis
- Die Website basiert auf dem IONOS MyWebsite-Baukasten (ehemals Jimdo/1&1).
- Template-ID 2130, Full-Width-Layout ohne Sidebar auf der Startseite; Sidebar-Layout (links) auf Unterseiten (Kontakt, Impressum).
- Veraltetes Google Analytics (Universal Analytics mit UA-Tracking-ID) statt GA4.
- jQuery-basierte Interaktionen (Lightbox, mobile Navigation).

### Hauptnavigation (Level 1) -- 7 Eintraege
1. Startseite
2. Dienstleistungen (mit umfangreicher Unterstruktur, siehe Abschnitt 2)
3. Qualifikationen
4. Partner/Referenzen
5. Kontakt
6. Impressum (mit Unterseiten: Haftungsausschluss, Datenschutz)
7. Blog

### Navigationsstruktur -- Bewertung
- **Flache Hauptnavigation** mit 7 Top-Level-Eintraegen -- akzeptabel, aber grenzwertig viele Punkte.
- **Tiefe Verschachtelung**: Der Bereich "Dienstleistungen" hat 3 Ebenen (Level 1 > Level 2 > Level 3), was zu einer sehr tiefen Navigationsstruktur fuehrt.
- **Mobile Navigation**: Hamburger-Menue vorhanden, aber mit Dropdown-Unternavigation, die bei 3 Ebenen auf Mobilgeraeten schwer bedienbar ist.
- **Inkonsistenz**: "Impressum" als Hauptnavigationspunkt ist unueblich -- normalerweise gehoert das in den Footer. Das verschwendet einen wertvollen Platz in der Hauptnavigation.
- **Blog** als eigener Navigationspunkt vorhanden, aber unklar, ob aktiv gepflegt.

### Seitenlayout
- Logo zentriert im Kopfbereich, verlinkt zur Startseite.
- Keine Sticky-Navigation beim Scrollen erkennbar.
- Footer ist minimal: Druckversion-Link, Sitemap-Link, Copyright-Zeile, Login-Link (CMS-Backend).
- Kein eigenstaendiger Footer-Bereich mit Kontaktdaten, Oeffnungszeiten oder Quick-Links.

---

## 2. Leistungskategorien

Die Dienstleistungen sind in 5 Hauptkategorien mit insgesamt ca. 20 Einzelseiten organisiert:

### Kategorie A: Einstiegsangebot
- Kostenfreie Erstanalyse (eigene Unterseite, Level 2)

### Kategorie B: Arbeitsschutzorganisation (7 Unterpunkte)
- Gefaehrdungsbeurteilung
- Betriebsanweisungen
- Unterweisungen
- Arbeitsschutzsitzungen
- Betriebsbegehungen
- Gefahrstoffmanagement
- Hygieneschutzplan

### Kategorie C: Arbeitsplatzbeurteilung (2 Unterpunkte)
- Laerm-Licht-Klimaanalyse
- Persoenliche Schutzausstattung (PSA)

### Kategorie D: Betriebsmittel-Pruefungen (4 Unterpunkte)
- Pruefung elektrischer Betriebsmittel
- Jaehrliche UVV-Pruefung Sportgeraete
- Leiter- und Tritte-Pruefung
- Regalpruefungen

### Kategorie E: Weiterbildungen (4 Unterpunkte)
- Erste Hilfe
- Brandschutzhelfer
- Gabelstaplerschein
- Hubarbeitsbuehnen-Pruefung

### Bewertung der Kategorisierung
- **Positiv**: Breites Leistungsspektrum, logisch in Themenbereiche gegliedert.
- **Negativ**: Jede Einzelleistung hat eine eigene Seite -- das fuehrt zu vielen sehr duennen Seiten mit wenig Inhalt (vermutlich). Besser waere eine Zusammenfassung pro Kategorie mit Anker-Navigation.
- **Ungleichgewicht**: Arbeitsschutzorganisation hat 7 Unterpunkte, Arbeitsplatzbeurteilung nur 2. Das wirkt unausgewogen.
- **Fehlend**: Kein klarer Ueberblick ueber Pakete/Leistungsbuendel. Der Besucher muss sich durch die gesamte Baumstruktur klicken, um das Gesamtangebot zu verstehen.

---

## 3. CTA-Logik (Calls to Action)

### Vorhandene Kontaktmoeglichkeiten
- **Kontaktformular** auf der Kontaktseite: Einfaches Formular mit Feldern fuer Name, E-Mail und Nachricht. Pflichtfelder mit Captcha-Schutz und DSGVO-Einwilligungscheck.
- **E-Mail-Adresse**: Auf der Kontaktseite als reiner Text dargestellt (kein mailto:-Link erkennbar).
- **Telefonnummer**: Im HTML-Meta-Bereich (Open Graph) hinterlegt, aber auf der Kontaktseite nicht prominent als klickbarer Link sichtbar.
- **Social Media**: Facebook, Twitter (X) und Xing-Icons in der Sidebar (nur auf Unterseiten mit Sidebar sichtbar).

### Fehlende CTAs
- **Kein CTA auf der Startseite**: Die Startseite enthaelt keinen einzigen Button oder Link, der zur Kontaktaufnahme auffordert. Es gibt nur Textbloecke mit Bildern.
- **Kein "Jetzt Termin vereinbaren"-Button**: Weder auf der Startseite noch auf den Leistungsseiten.
- **Kein telefonischer Quick-Contact**: Keine Telefonnummer im Header oder als Sticky-Element.
- **Kein "Kostenlose Erstanalyse"-CTA**: Obwohl es diese Leistung gibt, wird sie nicht als prominenter CTA auf anderen Seiten eingesetzt.
- **Keine Conversion-Elemente**: Kein Newsletter-Formular, kein Download-Angebot (z.B. Checkliste), kein Chat-Widget.

### Bewertung
Die CTA-Strategie ist praktisch nicht vorhanden. Ein B2B-Besucher, der sich informiert, wird nirgends aktiv zur Kontaktaufnahme gefuehrt. Es gibt keinen klaren "naechsten Schritt" auf irgendeiner Seite.

---

## 4. Trust-Elemente

### Vorhandene Trust-Signale
- **Qualifikationen-Seite**: Eigener Navigationspunkt fuer Qualifikationen/Zertifizierungen -- ein grundlegendes Trust-Element.
- **Partner/Referenzen-Seite**: Eigener Navigationspunkt, der Partner und Referenzen zusammenfasst.
- **GmbH-Rechtsform**: Im Firmennamen erkennbar, signalisiert Serioesitaet.
- **Lokale Verankerung**: Adresse und regionaler Bezug sind erkennbar.
- **Geschaeftsfuehrer namentlich benannt**: Auf der Kontaktseite werden die Geschaeftsfuehrer genannt.

### Fehlende Trust-Elemente
- **Keine Kundenlogos** auf der Startseite (sofern vorhanden, nur auf Unterseite versteckt).
- **Keine Testimonials/Kundenstimmen** sichtbar auf der Startseite oder den Leistungsseiten.
- **Keine Zahlen/Fakten**: Keine Angaben zu Erfahrungsjahren, betreuten Unternehmen oder durchgefuehrten Schulungen auf der Startseite.
- **Kein Teamfoto oder persoenliche Vorstellung** auf der Startseite -- nur ein kleines Bild auf der Kontaktseite.
- **Keine Zertifizierungs-Logos/-Siegel** im sichtbaren Bereich der Startseite.
- **Keine Branchenverbaende oder Mitgliedschaften** prominent dargestellt.
- **Kein SSL-Hinweis oder Guetesiegel** im Footer.

### Bewertung
Die Trust-Elemente sind auf Unterseiten verteilt, aber nicht strategisch auf der Startseite platziert, wo sie den groessten Einfluss auf die Conversion haetten. Ein Erstbesucher sieht auf der Startseite keinen ueberzeugenden Grund, diesem Anbieter zu vertrauen.

---

## 5. UX/Design-Schwaechen

### Layout und visuelles Design
- **Baukasten-Aesthetik**: Das Template wirkt generisch und nicht individuell gestaltet. Kein differenzierendes visuelles Branding erkennbar.
- **Kein Hero-Bereich**: Die Startseite beginnt direkt mit einer H1-Ueberschrift und Text -- kein grossflaechiges Bild oder Banner, das sofort Aufmerksamkeit erzeugt.
- **Bilder in Lightbox**: Alle Bilder auf der Startseite oeffnen sich in einer Lightbox -- das ist fuer Stockfotos oder illustrative Bilder unnoetig und verwirrt den Nutzer.
- **Gleichfoermiges Grid**: Die Startseite verwendet zwei identische 3-Spalten-Grids mit jeweils Bild + Text. Das wirkt monoton und bietet keine visuelle Hierarchie.
- **Textformatierung**: Inline-Styles mit festen Schriftgroessen (font-size: 16px, 26px etc.) statt konsistenter CSS-Klassen. Mehrfachpunkte ("..") und ueberfluessige Leerzeilen im HTML.
- **Kein klarer visueller Fluss**: Es gibt keine Farbakzente, Hintergrundwechsel oder Sektionen, die den Inhalt strukturieren.

### Responsive Design
- Grundlegendes Responsive-Verhalten vorhanden (Media Queries fuer 1024px und 568px Breakpoints).
- Die 3-Spalten-Grids werden vermutlich auf Mobilgeraeten untereinander gestapelt.
- Die verschachtelte Navigation (3 Ebenen) ist auf Mobilgeraeten problematisch.

### Performance und Technik
- Veraltetes jQuery wird geladen (plus mehrere jQuery-Workarounds im Code).
- Mehrere externe CSS- und JS-Dateien vom IONOS-CDN -- kein Einfluss auf Bundling oder Optimierung.
- Kein Lazy Loading fuer Bilder erkennbar.
- Google Analytics Universal (UA) statt GA4 -- UA wird nicht mehr unterstuetzt.

### Barrierefreiheit
- Bilder ohne aussagekraeftige alt-Texte (leere alt-Attribute bei den meisten Bildern).
- Formular auf der Kontaktseite hat Labels, aber das Captcha-System koennte problematisch sein.
- Farbkontraste nicht pruefbar ohne CSS, aber Inline-Styles deuten auf blaue Farbe (#03579B) auf weissem Hintergrund hin -- moeglicherweise akzeptabel.

### Spezifische Probleme
- **404-Fehler**: Die Seite /dienstleistungen/ (Leistungen-URL, die direkt verlinkt wird) liefert eine 404-Seite mit englischer Fehlermeldung ("Sorry, the page you requested does not exist (anymore)."). Das ist ein schwerwiegender Fehler auf einer deutschsprachigen B2B-Seite.
- **Doppeltes Impressum**: Es existieren zwei verschiedene Impressums-URLs (/impressum/ und /impressum-1/), wobei die aeltere URL auf der alten Page-ID basiert. Unterschiedliche Angaben (Einzelunternehmer vs. GmbH) deuten auf eine unvollstaendige Aktualisierung hin.
- **Veraltete Social-Media-Links**: Twitter-Link statt X, Xing statt LinkedIn -- signalisiert mangelnde Pflege.
- **Druckversion-Link** im Footer ist ein Relikt vergangener Webstandards.

---

## 6. Content-Luecken

### Fehlende Inhalte fuer eine Premium-B2B-Website

#### Auf der Startseite
- **Value Proposition**: Kein klarer, sofort erkennbarer Satz, der den Kernnutzen auf den Punkt bringt.
- **Zielgruppenansprache**: Keine Differenzierung nach Branchen oder Unternehmensgroessen.
- **Prozessdarstellung**: Kein "So arbeiten wir"-Bereich, der den Ablauf einer Zusammenarbeit erklaert.
- **Social Proof**: Keine Kundenlogos, Testimonials oder Kennzahlen.
- **Aktualitaet**: Kein Hinweis auf aktuelle Themen, Gesetzesaenderungen oder saisonale Relevanz.

#### Im Leistungsbereich
- **Nutzenargumente**: Die Leistungen werden vermutlich nur beschrieben, nicht aus Kundenperspektive argumentiert (Nutzen statt Features).
- **Preistransparenz**: Keine Hinweise auf Preismodelle, Paketgroessen oder Abrechnungsarten.
- **FAQ-Bereich**: Keine haeufig gestellten Fragen zu den einzelnen Leistungen oder allgemein zum Arbeitsschutz.
- **Downloads/Ressourcen**: Keine Checklisten, Whitepaper, Muster-Dokumente oder aehnliche Lead-Magneten.
- **Branchenspezifische Inhalte**: Keine Seiten oder Abschnitte fuer spezifische Branchen (Produktion, Buero, Handwerk, etc.).

#### Allgemein fehlende Seitentypen
- **Ueber-uns / Team-Seite**: Keine dedizierte Seite, die das Team, die Geschichte und die Philosophie vorstellt.
- **Case Studies / Erfolgsgeschichten**: Keine detaillierten Fallbeispiele aus der Praxis.
- **Wissensbereich / Ratgeber**: Der Blog existiert, aber es fehlt ein strukturierter Wissensbereich mit Kategorien.
- **Karriere-Seite**: Falls Mitarbeiter gesucht werden, fehlt diese Seite.
- **Haeufige Fragen (FAQ)**: Keine zentrale FAQ-Seite.
- **Datenschutz gemaess aktueller Anforderungen**: Cookie-Banner/Consent-Management fehlt sichtbar.
- **Strukturierte Daten (Schema.org)**: Kein LocalBusiness-Markup, kein FAQ-Schema, kein Service-Schema im HTML erkennbar.

#### SEO-Luecken
- Die Meta-Keywords enthalten Tippfehler (z.B. "Arbeitssicherhiet" im Impressum).
- Die Meta-Descriptions sind auf allen Seiten generisch und nicht unique.
- Keine strukturierten Daten (JSON-LD) fuer lokales Geschaeft, Dienstleistungen oder FAQ.
- Interne Verlinkung zwischen Leistungsseiten und Startseite scheint minimal.
- Kein erkennbares Content-Marketing-Konzept (Blog vorhanden, aber unklar ob aktiv).

---

## Zusammenfassung: Zentrale Verbesserungspotenziale

| Bereich | Status quo | Verbesserungspotenzial |
|---------|-----------|----------------------|
| Navigation | 7 Top-Level, 3 Ebenen tief | Maximal 5-6 Top-Level, flachere Struktur |
| Startseite | Textbloecke mit Bildern, kein CTA | Hero-Bereich, Value Proposition, Trust-Elemente, CTAs |
| CTAs | Nur Kontaktformular auf /kontakt/ | CTAs auf jeder Seite, Telefon im Header, Erstberatungs-Button |
| Trust | Auf Unterseiten versteckt | Kundenlogos, Testimonials, Zahlen auf Startseite |
| Design | IONOS-Baukasten, generisch | Individuelles Design, klare Sektionen, Farbkonzept |
| Content | Duenne Einzelseiten | Nutzenorientierte Texte, FAQ, Ressourcen, Case Studies |
| Technik | jQuery, UA Analytics, 404-Fehler | Modernes Framework, GA4, fehlerfreie Struktur |
| SEO | Basis-Meta-Tags mit Fehlern | Schema.org, einzigartige Descriptions, interne Verlinkung |
| Mobile | Grundlegend responsiv | Mobile-First-Design, benutzerfreundliche Navigation |
