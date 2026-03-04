# Image-Agent: Arbeitssicherheit Homepage

## 1. Zustaendigkeit

Der Image-Agent verantwortet alle visuellen Assets der Website:

- **Foto-Generierung** mit Gemini Imagen API (Testimonials, Team, Szenenfotos)
- **Icon-Sets** aus Lucide React – konsistente Auswahl und Einsatz
- **Zertifikat-Badges & Trust-Siegel** (Placeholder + echte Logos)
- **OG-Images & Social Cards** pro Seite
- **Alt-Texte** fuer alle Bilder (SEO + A11y)
- **Bildoptimierung** fuer Next.js Image-Komponente (Formate, Groessen, blur placeholder)
- **Google Reviews Placeholder** bis echte Einbindung via API erfolgt

**Uebergabe-Format**: Dateipfade in `public/images/`, fertige `<Image>`-Props-Specs, Alt-Text-Empfehlungen.

**Abgrenzung**: Der Image-Agent generiert/verwaltet Assets. Design-Entscheidungen (Farben, Layout) verbleiben beim Design-Agent.

---

## 2. Gemini Imagen API

### Konfiguration

```
API-Endpunkt: https://generativelanguage.googleapis.com/v1beta/models/{model}:predict?key={API_KEY}
Modell (schnell): imagen-4.0-generate-001
Modell (Qualitaet): imagen-4.0-ultra-001
API-Key: in scripts/generate-images.mjs hinterlegt
```

### Skripte

| Skript | Zweck |
|--------|-------|
| `scripts/generate-images.mjs` | Foto-Generierung via Gemini Imagen API |
| `scripts/generate-placeholders.mjs` | SVG-Placeholder ohne API (sharp) |

**Skip-if-exists**: Beide Skripte ueberspringen bereits existierende Dateien automatisch.

### Ausfuehren

```bash
node scripts/generate-images.mjs        # Gemini API (kostet Credits)
node scripts/generate-placeholders.mjs  # Lokal, kostenlos
```

---

## 3. Bild-Inventar

### Szenenfotos (Gemini generiert, in public/images/)

| Datei | Inhalt | Aspekt |
|-------|--------|--------|
| `hero-begehung.jpg` | Begehung in Produktionshalle | 16:9 |
| `ersttermin.jpg` | Erstberatung im Buero | 16:9 |
| `begehung.jpg` | Werkstattbegehung | 4:3 |
| `dokumentation.jpg` | Schreibtischarbeit | 4:3 |
| `schulung.jpg` | Unterweisung Gruppe | 4:3 |
| `pruefung.jpg` | Arbeitsmittelprüfung | 4:3 |
| `baustelle.jpg` | Baustellenbegehung | 4:3 |
| `alltag.jpg` | Typischer Arbeitstag | 2:1 |
| `buero.jpg` | Buero ohne Person | 3:4 |

### Team-Portraits

| Datei | Person | Status |
|-------|--------|--------|
| `team-1.jpg` | Hauptberater (GF) | Placeholder – durch echtes Foto ersetzen |
| `team-2.jpg` | Zweiter Berater | Placeholder – durch echtes Foto ersetzen |

### Testimonial-Portraits (Placeholder)

| Datei | Person | Status |
|-------|--------|--------|
| `testimonial-richter.jpg` | Thomas Richter, GF | Placeholder – durch echtes Foto ersetzen |
| `testimonial-weber.jpg` | Sabine Weber, Personalleiterin | Placeholder – durch echtes Foto ersetzen |
| `testimonial-schneider.jpg` | Klaus Schneider, Inhaber | Placeholder – durch echtes Foto ersetzen |

### Zertifikat-Badges (SVG-Placeholder)

| Datei | Inhalt | Status |
|-------|--------|--------|
| `cert-dguv.png` | DGUV Vorschrift 2 | Placeholder – durch offizielles Logo ersetzen |
| `cert-elektromeister.png` | Elektromeister HWK | Placeholder – durch offizielles Logo ersetzen |
| `cert-sifa.png` | SiFa-Zertifizierung | Placeholder – durch offizielles Logo ersetzen |
| `cert-haftpflicht.png` | Beraterhaftpflicht | Placeholder – durch offizielles Siegel ersetzen |

---

## 4. Icon-System (Lucide React)

### Zugelassene Icons pro Thema

| Thema | Icon | Lucide-Name |
|-------|------|-------------|
| Arbeitssicherheit / Schutz | Schild | `Shield` |
| Gefaehrdungsbeurteilung | Checkliste | `ClipboardList` |
| Schnelligkeit / SiGeKo | Blitz | `Zap` |
| Schulungen | Abschlusshuet | `GraduationCap` |
| Betrieb / Gebaeude | Gebaeude | `Building2` |
| Telefon | Telefon | `Phone` |
| E-Mail | Brief | `Mail` |
| Adresse | Standort | `MapPin` |
| Oeffnungszeiten | Uhr | `Clock` |
| Datenschutz | Schloss | `Lock` |
| Vertrauen / Trust | Haekchen | `CheckCircle` |
| Prozessschritt | Kreis-Zahl | `CircleDot` |
| Navigation | Pfeil rechts | `ChevronRight`, `ArrowRight` |

### Groessen-Standard

```
Navigation/klein:  w-4 h-4
Standard:          w-5 h-5
Karten/Features:   w-8 h-8 bis w-10 h-10
Hero/Gross:        w-12 h-12
```

### Regel
- Immer `aria-hidden="true"` bei dekorativen Icons
- Immer `aria-label` bei funktionalen Icons (ohne sichtbarem Text)

---

## 5. Next.js Image-Konventionen

### Standard-Props

```tsx
<Image
  src="/images/dateiname.jpg"
  alt="Beschreibender Alt-Text auf Deutsch"
  fill          // fuer responsive Container
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover"
  priority      // nur fuer LCP-Bilder (Hero, Above-the-fold)
/>
```

### Alt-Text-Regeln

- **Szenenfotos**: Handlung beschreiben, nicht nur Motiv. "Sicherheitsfachkraft mit Klemmbrett beim Rundgang durch eine Metallwerkstatt"
- **Teamfotos**: Name + Funktion. "Christian Barthels – Fachkraft für Arbeitssicherheit"
- **Testimonials**: Kurzform. "Thomas Richter, Geschäftsführer Metallbau Richter GmbH"
- **Zertifikate**: "Logo: DGUV Vorschrift 2 – zertifiziert"
- **Dekorativ**: `alt=""` (leerer String)

### Formate
- Fotos: `.jpg` (JPEG, quality 85)
- Logos/Badges/Icons: `.png` oder `.svg`
- OG-Images: 1200×630px, `.jpg`

---

## 6. Google Reviews

### Aktueller Status
- Komponente: `src/components/features/google-reviews-strip.tsx`
- Placeholder-Daten: 4 fiktive Bewertungen, Hinweis "wird durch echte ersetzt"
- Eingebunden in: `src/app/page.tsx` (Position 7, vor Testimonials)

### Echte Integration (spaeter)
Optionen fuer echte Google-Bewertungen:
1. **Google Places API** (kostenpflichtig nach Limit) – dynamisch
2. **Elfsight Widget** (kostenloser Plan verfuegbar) – iframe
3. **Manuelle Pflege** in content.ts – statisch, volle Kontrolle

Empfehlung: Manuelle Pflege in content.ts sobald 5+ echte Bewertungen vorhanden.

---

## 7. Wenn neue Bilder benoetigt werden

### Checkliste

1. **Prompt schreiben** – realistisch, spezifisch, Stil-Prefix `STYLE` verwenden
2. **In `generate-images.mjs` eintragen** (neues Objekt im `images`-Array)
3. **`node scripts/generate-images.mjs`** ausfuehren
4. **Alt-Text** definieren
5. **In content.ts oder direkt in Komponente** referenzieren
6. **Build pruefen**: `npm run build`

### Prompt-Template

```javascript
{
  filename: "neue-datei.jpg",
  aspectRatio: "4:3",            // 1:1 | 4:3 | 16:9 | 2:1 | 3:4
  personGeneration: "allow_adult", // oder "dont_allow"
  prompt: STYLE + "Konkrete Beschreibung der Szene auf Englisch. "
    + "Beleuchtung. Perspektive. Hintergrund. Atmosphaere.",
}
```

### Stil-Prefix (`STYLE`)

```
"Documentary-style photograph, warm natural lighting, authentic and candid feel,
no posed smiles, professional setting in Germany. "
```
