# Test-Agent Konventionen (tests/)

## Zustaendigkeit
Der Test-Agent schreibt und wartet alle Tests: Unit-Tests (Vitest), Component-Tests
(Vitest + Testing Library), E2E Tests (Playwright) und A11y-Tests.

## Uebergabe von anderen Agenten
- **Code-Agent**: Neue Features → Tests schreiben
- **UX-Agent**: A11y-Anforderungen → A11y-Tests implementieren
- **CRO-Agent**: Conversion-kritische Elemente → E2E-Tests fuer User Flows

## Test-Arten & Datei-Platzierung

### Unit-Tests (Vitest) — neben der Source-Datei
```
src/lib/format-date.ts
src/lib/format-date.test.ts    # direkt daneben
```

### Component-Tests (Vitest + Testing Library) — neben der Komponente
```
src/components/ui/button.tsx
src/components/ui/button.test.tsx
```

### E2E Tests (Playwright) — in tests/
```
tests/homepage.spec.ts
tests/contact-form.spec.ts
tests/navigation.spec.ts
```

## Test-Patterns

### Unit-Test Struktur
```tsx
import { describe, it, expect } from "vitest"
import { calculateRiskLevel } from "./calculate-risk-level"

describe("calculateRiskLevel", () => {
  it("returns 'high' when probability and severity are both high", () => {
    expect(calculateRiskLevel({ probability: 5, severity: 5 })).toBe("high")
  })

  it("returns 'low' when both factors are minimal", () => {
    expect(calculateRiskLevel({ probability: 1, severity: 1 })).toBe("low")
  })

  it("throws on invalid input", () => {
    expect(() => calculateRiskLevel({ probability: -1, severity: 0 })).toThrow()
  })
})
```

### Component-Test Struktur
```tsx
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { Button } from "./button"

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Beratung anfordern</Button>)
    expect(screen.getByRole("button", { name: /beratung anfordern/i })).toBeInTheDocument()
  })

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Klick</Button>)

    await user.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it("is keyboard accessible (Enter)", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Klick</Button>)

    const button = screen.getByRole("button")
    button.focus()
    expect(button).toHaveFocus()
    await user.keyboard("{Enter}")
    expect(handleClick).toHaveBeenCalled()
  })

  it("is disabled when prop is set", () => {
    render(<Button disabled>Klick</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })

  it("shows loading state", () => {
    render(<Button loading>Senden</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true")
  })
})
```

### E2E Test Struktur
```ts
import { test, expect } from "@playwright/test"

test.describe("Kontaktformular", () => {
  test("Nutzer kann Formular erfolgreich absenden", async ({ page }) => {
    await page.goto("/kontakt")

    await page.fill('input[name="name"]', "Max Mustermann")
    await page.fill('input[name="email"]', "max@firma.de")
    await page.fill('textarea[name="nachricht"]', "Ich brauche eine Gefaehrdungsbeurteilung")
    await page.check('input[name="dsgvo"]')

    await page.click('button:has-text("Nachricht senden")')
    await expect(page.locator("text=Vielen Dank")).toBeVisible()
  })

  test("zeigt Validierungsfehler bei ungültiger Email", async ({ page }) => {
    await page.goto("/kontakt")

    await page.fill('input[name="name"]', "Max")
    await page.fill('input[name="email"]', "keine-email")
    await page.click('button:has-text("Nachricht senden")')

    await expect(page.locator("text=gueltige E-Mail")).toBeVisible()
  })
})
```

### A11y Test Pattern
```tsx
import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ContactForm } from "./contact-form"

expect.extend(toHaveNoViolations)

describe("ContactForm A11y", () => {
  it("has no accessibility violations", async () => {
    const { container } = render(<ContactForm />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
```

## Mocking-Strategien

### API Mocking
```tsx
import { vi } from "vitest"

// Modul mocken
vi.mock("@/lib/api", () => ({
  submitContact: vi.fn(() => Promise.resolve({ success: true }))
}))

// Pro Test ueberschreiben
it("handles API error", async () => {
  const { submitContact } = await import("@/lib/api")
  vi.mocked(submitContact).mockRejectedValueOnce(new Error("Server Error"))
  // ...
})
```

### Environment/Date Mocking
```tsx
beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date("2025-01-15"))
})

afterEach(() => {
  vi.useRealTimers()
})
```

### Test Fixtures
```tsx
// tests/fixtures/builders.ts
export function createMockCompany(overrides = {}) {
  return {
    name: "Musterfirma GmbH",
    branche: "Handwerk",
    mitarbeiter: 50,
    ...overrides
  }
}
```

## Regeln
- Jeder Test hat einen klaren, beschreibenden Namen (auf Deutsch erlaubt)
- Ein `describe` Block pro Funktion/Komponente
- Arrange-Act-Assert Pattern
- Keine Test-Interdependenzen (jeder Test laeuft isoliert)
- Mocking nur an System-Grenzen (API Calls, Date, Environment)
- Keine Snapshot-Tests fuer Logik, nur fuer UI wenn sinnvoll
- A11y-Tests fuer alle interaktiven Komponenten

## Coverage-Ziele
- **Statements**: 80% Minimum
- **Branches**: 75% Minimum
- **Functions**: 80% Minimum
- **Kritische Pfade**: 100% (Validierung, Fehlerbehandlung, Security)

## Befehle
- `npm test` — Alle Vitest Tests
- `npm test -- --watch` — Watch Mode
- `npm test -- --coverage` — Coverage Report
- `npx playwright test` — E2E Tests
- `npx playwright test --ui` — Playwright UI Mode

## Test-Checkliste (bei jedem neuen Feature)
- [ ] Unit-Tests fuer Utility-Funktionen geschrieben?
- [ ] Component-Tests fuer neue UI-Komponenten?
- [ ] A11y-Test (axe) fuer interaktive Komponenten?
- [ ] Keyboard-Navigation getestet?
- [ ] E2E-Test fuer kritische User Flows?
- [ ] Error/Edge Cases abgedeckt?
- [ ] Mocks nur an System-Grenzen?
- [ ] Coverage >= 80%?
- [ ] Alle Tests bestehen (`npm test`)?
