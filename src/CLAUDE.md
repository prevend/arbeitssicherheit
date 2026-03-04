# Code-Agent Konventionen (src/)

## Zustaendigkeit
Der Code-Agent implementiert Features und setzt Vorgaben der anderen Agenten um.
Er uebernimmt Texte vom Text-Agent, Design-Specs vom Design-Agent, SEO-Specs vom SEO-Agent
und UX-Patterns vom UX-Agent. Er formuliert KEINE eigenen Texte oder Design-Entscheidungen.

## Site-Wide Consistency (PFLICHT)

**JEDE Aenderung muss auf ALLEN Seiten angewendet werden.**
Wenn eine Design-Aenderung auf der Startseite gemacht wird, muessen SOFORT
alle Unterseiten geprueft und angepasst werden. Nie eine Seite ueberarbeiten
und andere ignorieren. Siehe Root CLAUDE.md "Site-Wide Consistency" fuer die
vollstaendige Checkliste.

Konkret:
- Dunkle Sektionen: IMMER `bg-primary-dark bg-grain bg-grid-industrial`
- Bullet-Points: Lucide Check-Icon (nie Unicode)
- Animationen: AnimateOnScroll + Stagger auf ALLEN Seiten
- Container: max-w-7xl fuer Grids

## Uebergabe von anderen Agenten

### Text-Integration
Texte werden NICHT hardcoded. Der Text-Agent definiert alle Inhalte.
```tsx
// RICHTIG: Texte als Konstanten oder Props
const heroContent = {
  headline: "Arbeitssicherheit — Rechtssicher nach DGUV",
  subline: "Wir sorgen fuer sichere Arbeitsplaetze",
  cta: "Kostenlose Erstberatung anfordern"
}

// FALSCH: Texte direkt im JSX erfinden
<h1>Willkommen auf unserer Seite</h1>
```

### SEO-Integration
SEO-Agent liefert Meta-Tags, Schema.org Specs, Keyword-Platzierungen.
Code-Agent setzt diese 1:1 um in Metadata API und JSON-LD.

### Design-Integration
Design-Agent liefert Tailwind-Klassen, Farben, Spacing.
Code-Agent verwendet nur Design Tokens aus dem System (globals.css).

### UX-Integration
UX-Agent liefert Interaction Patterns, A11y-Anforderungen, Form-Specs.
Code-Agent implementiert diese als Komponenten-Verhalten.

## App Router (src/app/)
- Jede Route ist ein Verzeichnis mit `page.tsx`
- Gemeinsame Layouts in `layout.tsx`
- `loading.tsx` fuer Suspense-Fallbacks
- `error.tsx` fuer Error Boundaries (muss "use client" sein)
- `not-found.tsx` fuer 404-Seiten
- API Routes in `app/api/` mit `route.ts`

## Wichtige Patterns

### Server Components (Default)
```tsx
// Kein "use client" = Server Component
// Besser fuer SEO, Performance, Bundle-Size
export default function SafetyInfo({ data }: Props) {
  return <div>{data.title}</div>
}
```

### Client Components (nur wenn noetig)
```tsx
"use client"
// Nur fuer: onClick, onChange, useState, useEffect, useRef
// So klein wie moeglich halten — nur interaktive Teile
export function InteractiveChecklist() {
  const [checked, setChecked] = useState<boolean[]>([])
  // ...
}
```

### Metadata fuer SEO (nach SEO-Agent Vorgabe)
```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gefaehrdungsbeurteilung nach ArbSchG | Arbeitssicherheit MG",
  description: "Wir erstellen Ihre GBU rechtssicher nach § 5 ArbSchG. Kostenlose Erstberatung.",
  openGraph: {
    title: "Gefaehrdungsbeurteilung | Arbeitssicherheit MG",
    description: "Rechtssichere GBU fuer Ihr Unternehmen",
    type: "website",
    locale: "de_DE",
  },
}
```

### Error Handling Pattern
```tsx
// Definierte Error-Typen verwenden
class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message)
    this.name = "ValidationError"
  }
}

// In Komponenten: try-catch mit spezifischen Fehlern
try {
  const result = await submitForm(data)
} catch (error) {
  if (error instanceof ValidationError) {
    setErrors({ [error.field!]: error.message })
  } else {
    setStatus("error")
  }
}
```

### Form Validation mit Zod
```tsx
import { z } from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Bitte geben Sie eine gueltige E-Mail-Adresse ein"),
  nachricht: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
})

// Validierung
const result = contactFormSchema.safeParse(data)
if (!result.success) {
  return { errors: result.error.flatten() }
}
```

### Data Fetching (Server Components)
```tsx
// Server-side Fetching mit Cache-Control
async function fetchSafetyData() {
  const res = await fetch("...", {
    next: { revalidate: 3600 } // 1 Stunde Cache
  })
  if (!res.ok) throw new Error("Failed to fetch")
  return res.json()
}

// Suspense fuer async Daten
export default function Page() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <AsyncContent />
    </Suspense>
  )
}
```

## lib/ Konventionen
- Pure Functions bevorzugen
- Keine Side Effects in Utility-Funktionen
- Typen explizit annotieren
- Fehlerbehandlung mit Result-Pattern oder throws mit dokumentierten Exceptions
- Zod fuer Runtime-Validierung von externen Daten

## Sicherheit
- Input Validation: Alle externen Daten mit Zod validieren
- Keine `dangerouslySetInnerHTML` ohne Sanitization
- Environment Variables: Secrets nur in `.env.local`, nie im Code
- CSRF: Next.js Server Actions haben eingebauten Schutz
- XSS: React escaped standardmaessig — kein rohes HTML einfuegen

## Grid-Cards: Equal Height (PFLICHT)

Wenn Cards/Kacheln in einem CSS Grid nebeneinander stehen, MUESSEN alle gleich hoch sein:

```tsx
// RICHTIG: h-full auf JEDEM Element in der Wrapper-Kette
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Stagger className="h-full">           {/* Wrapper h-full */}
    <div className="h-full rounded-xl p-6"> {/* Card h-full */}
      ...
    </div>
  </Stagger>
</div>

// FALSCH: Wrapper ohne h-full bricht Grid-Stretch
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <Stagger>
    <div className="rounded-xl p-6">...</div>
  </Stagger>
</div>
```

**Regel:** Wenn AnimateOnScroll, Stagger oder andere Wrapper zwischen Grid-Container und Card stehen, MUSS jeder Wrapper `h-full` oder `className="h-full"` erhalten. Sonst werden Cards unterschiedlich hoch je nach Textlaenge.

## Code-Checkliste (bei jedem Feature)
- [ ] Texte vom Text-Agent uebernommen (nicht selbst geschrieben)?
- [ ] SEO Metadata nach SEO-Agent Vorgabe?
- [ ] Server Component als Default?
- [ ] TypeScript strict, keine `any`?
- [ ] Fehlerbehandlung implementiert?
- [ ] Input-Validierung mit Zod (bei Formularen/APIs)?
- [ ] Design Tokens aus dem System verwendet?
- [ ] UX/A11y Patterns eingehalten?
- [ ] Grid-Cards: `h-full` auf allen Wrappern und Cards?
