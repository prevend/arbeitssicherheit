# UI/Frontend-Agent Konventionen (src/components/)

## Zustaendigkeit
Wiederverwendbare React-Komponenten. Der UI-Agent setzt Design-Specs vom Design-Agent um,
implementiert UX-Patterns vom UX-Agent und stellt A11y-Konformitaet sicher.

## Uebergabe von anderen Agenten
- **Design-Agent**: Farben, Typografie, Spacing, Komponenten-Specs → hier umsetzen
- **UX-Agent**: Interaction Patterns, A11y-Anforderungen → hier implementieren
- **CRO-Agent**: CTA-Groessen, Button-Hierarchie → hier einbauen
- **Text-Agent**: Texte als Props/Content empfangen, nicht selbst schreiben

## Verzeichnis-Struktur
- `ui/` - Basis-Bausteine (Button, Card, Input, Badge, Alert, Modal, Accordion)
- `layout/` - Seiten-Struktur (Header, Footer, Navigation, Sidebar, Breadcrumbs)
- `features/` - Feature-spezifische Komponenten (ChecklistForm, RiskMatrix, ContactForm)

## Komponenten-Pattern

### Standard-Struktur
```tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "danger"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded font-semibold transition-colors duration-200",
        "focus:outline-2 focus:outline-offset-2 focus:outline-primary",
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading ? <Spinner /> : children}
    </button>
  )
}
```

### Regeln
- Props als Interface direkt ueber der Komponente definieren
- Destructuring mit Default-Werten in der Funktionssignatur
- Keine `React.FC` verwenden, stattdessen normale Funktionen
- `children` explizit in Props tippen wenn benoetigt
- Jede Komponente in eigener Datei
- `className` Prop akzeptieren fuer Overrides (mit `cn()` utility)
- ARIA Props durchreichen fuer Accessibility

## Design System Tokens

### Farb-Palette (aus Design-Agent)
```
Primary:      #216CA5 (Vertrauen)     → bg-primary, text-primary
Primary-Light: #3784BC                → bg-primary-light
Primary-Dark:  #0D2A4A                → bg-primary-dark
Accent:        #FA7901 (Action/CTA)   → bg-accent, text-accent
BG-Light:      #F5F7FA                → bg-bg-light
Text-Dark:     #1A2B3C                → text-text-dark
Text-Gray:     #5A6B7C                → text-text-gray
Footer-BG:     #091827                → bg-footer-bg
Success:       #2ECC71                → bg-success
Error:         #DC2626                → bg-error
Warning:       #F59E0B                → bg-warning
```

### Typografie
```
Headings: font-heading (Outfit, 700 weight)
Body:     font-sans (Plus Jakarta Sans, 400 weight)

H1: text-5xl md:text-6xl font-heading font-bold leading-tight
H2: text-3xl md:text-4xl font-heading font-bold leading-snug
H3: text-2xl md:text-3xl font-heading font-semibold
H4: text-xl font-heading font-semibold
Body: text-base leading-relaxed
Small: text-sm leading-relaxed
```

### Spacing-Skala
```
4px  (p-1)   - Micro (inline elements)
8px  (p-2)   - Small gaps
12px (p-3)   - XSmall
16px (p-4)   - Default component padding
24px (p-6)   - Medium (card padding)
32px (p-8)   - Large
48px (p-12)  - Section gaps (mobile)
64px (p-16)  - Section gaps (desktop)
```

## Barrierefreiheit (WCAG 2.1 AA)

### Pflicht-Anforderungen
- Semantisches HTML: `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`
- Skip-Link zum Hauptinhalt: `<a href="#main" className="sr-only focus:not-sr-only">`
- Alle interaktiven Elemente per Tastatur bedienbar
- Fokus-Indikator IMMER sichtbar (nie `outline: none` ohne Alternative)
- Farbkontrast mindestens 4.5:1 (normaler Text), 3:1 (grosser Text)
- Keine Information nur durch Farbe vermitteln (immer + Icon/Text)

### ARIA Patterns
```tsx
// Icon-Button: aria-label Pflicht
<button aria-label="Menue oeffnen">
  <MenuIcon className="w-6 h-6" />
</button>

// Form Error: aria-describedby
<input id="email" aria-describedby="email-error" aria-invalid={!!error} />
<span id="email-error" role="alert">{error}</span>

// Loading State: aria-busy
<div aria-busy={isLoading} aria-live="polite">
  {isLoading ? <Skeleton /> : content}
</div>

// Navigation: aktuelle Seite markieren
<a href="/leistungen" aria-current="page">Leistungen</a>
```

### Tastatur-Navigation
- Tab: Vorwaerts durch interaktive Elemente
- Shift+Tab: Rueckwaerts
- Enter: Buttons aktivieren, Links oeffnen
- Space: Checkboxen togglen
- Escape: Dialoge/Dropdowns schliessen
- Arrow Keys: In Listen, Tabs, Menues navigieren

### Focus Styling
```tsx
// Immer fokus-sichtbar mit Tailwind
className="focus:outline-2 focus:outline-offset-2 focus:outline-primary"

// Focus-visible fuer Keyboard-only
className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
```

## Tailwind Styling

### Mobile-First
```tsx
// Erst Mobile, dann hoch skalieren
className="p-4 sm:p-6 md:p-8 lg:p-12"
className="text-base md:text-lg lg:text-xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

### Konsistente Spacing-Skala
- Nur Werte aus der Skala verwenden (4, 8, 12, 16, 24, 32, 48, 64)
- Keine willkuerlichen Werte wie `p-[13px]`

### Animation & Motion
```tsx
// Standard Transition
className="transition-colors duration-200 ease-out"

// Reduced Motion respektieren
className="motion-safe:animate-fade-up motion-reduce:animate-none"

// In globals.css:
// @media (prefers-reduced-motion: reduce) { .animate-* { animation: none; } }
```

### Verboten
- Keine inline styles (`style={{}}`)
- Keine CSS-Module
- Keine `!important`
- Keine willkuerlichen Tailwind-Werte wenn Standard-Skala ausreicht

## Komponenten-Checkliste (bei jeder neuen Komponente)
- [ ] Props Interface mit TypeScript Typen?
- [ ] Default-Werte fuer optionale Props?
- [ ] className Prop fuer Overrides akzeptiert?
- [ ] Semantisches HTML (nicht alles `<div>`)?
- [ ] Keyboard-navigierbar (Tab, Enter, Escape)?
- [ ] ARIA Labels/Roles wo noetig?
- [ ] Focus-Indikator sichtbar?
- [ ] Farbkontrast >= 4.5:1?
- [ ] Mobile-first responsive?
- [ ] Design Tokens verwendet (keine hardcoded Farben)?
- [ ] Loading/Error/Disabled States behandelt?
- [ ] prefers-reduced-motion respektiert?
