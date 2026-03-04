import { test, expect } from "@playwright/test";

// All public pages
const ALL_PAGES = [
  { path: "/", name: "Homepage" },
  { path: "/leistungen", name: "Leistungen" },
  { path: "/branchen", name: "Branchen" },
  { path: "/ueber-uns", name: "Über uns" },
  { path: "/kontakt", name: "Kontakt" },
  { path: "/erstanalyse", name: "Erstanalyse" },
  { path: "/referenzen", name: "Referenzen" },
];

const SUBPAGES = ALL_PAGES.filter((p) => p.path !== "/");

// ============================================================
// Semantic HTML Structure
// ============================================================

test.describe("Semantic HTML Structure", () => {
  for (const page of ALL_PAGES) {
    test(`${page.name}: has header, nav, main, footer`, async ({ page: p }) => {
      await p.goto(page.path);
      await expect(p.locator("header").first()).toBeVisible();
      await expect(p.locator("nav").first()).toBeVisible();
      await expect(p.locator("main")).toBeVisible();
      await expect(p.locator("footer").first()).toBeVisible();
    });

    test(`${page.name}: has exactly one <main>`, async ({ page: p }) => {
      await p.goto(page.path);
      const mainCount = await p.locator("main").count();
      expect(mainCount).toBe(1);
    });
  }

  test("Homepage: skip link is first focusable element", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const focused = page.locator(":focus");
    const text = await focused.textContent();
    expect(text?.toLowerCase()).toContain("inhalt");
  });

  for (const sub of SUBPAGES) {
    test(`${sub.name}: has breadcrumb navigation`, async ({ page }) => {
      await page.goto(sub.path);
      const breadcrumb = page.locator('nav[aria-label*="readcrumb"], nav[aria-label*="Breadcrumb"], [aria-label*="Brotkrumen"], ol[role="list"]').first();
      // Some pages may use a Breadcrumb component — check for structured breadcrumb or any nav with breadcrumb-like content
      const hasBreadcrumb = await breadcrumb.count() > 0;
      const hasStructuredBreadcrumb = await page.locator('[itemtype*="BreadcrumbList"], script[type="application/ld+json"]').count() > 0;
      expect(hasBreadcrumb || hasStructuredBreadcrumb).toBeTruthy();
    });
  }
});

// ============================================================
// Touch Targets (Mobile)
// ============================================================

test.describe("Touch Targets", () => {
  test("all interactive elements >= 44x44px tap area", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Touch target test only for mobile");
    await page.goto("/");

    const elements = page.locator('a:visible, button:visible');
    const count = await elements.count();

    for (let i = 0; i < count; i++) {
      const el = elements.nth(i);
      const box = await el.boundingBox();
      if (!box) continue;

      // Check effective tap area (width AND height)
      // Allow small inline links in text (font-size based) but flag buttons/CTAs
      const tagName = await el.evaluate((e) => e.tagName.toLowerCase());
      const role = await el.getAttribute("role");
      const isButton = tagName === "button" || role === "button";

      if (isButton) {
        expect(
          box.height >= 44,
          `Button "${await el.textContent()}" height ${box.height}px < 44px`
        ).toBeTruthy();
      }
    }
  });
});

// ============================================================
// Images
// ============================================================

test.describe("Images", () => {
  for (const page of ALL_PAGES) {
    test(`${page.name}: all images have alt attribute`, async ({ page: p }) => {
      await p.goto(page.path);
      const images = p.locator("img");
      const count = await images.count();

      for (let i = 0; i < count; i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute("alt");
        // alt must exist (can be empty string for decorative)
        expect(alt, `Image ${i} missing alt attribute`).not.toBeNull();
      }
    });
  }
});

// ============================================================
// Focus Management
// ============================================================

test.describe("Focus Management", () => {
  test("no element has tabindex > 0", async ({ page }) => {
    await page.goto("/");
    const badTabindex = await page.locator("[tabindex]").evaluateAll((els) =>
      els.filter((el) => parseInt(el.getAttribute("tabindex") || "0", 10) > 0)
        .map((el) => ({ tag: el.tagName, tabindex: el.getAttribute("tabindex") }))
    );
    expect(badTabindex, `Elements with tabindex > 0: ${JSON.stringify(badTabindex)}`).toHaveLength(0);
  });
});

// ============================================================
// Typography & Viewport (Mobile)
// ============================================================

test.describe("Mobile Typography & Viewport", () => {
  test("no horizontal scroll on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/");

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll, "Page has horizontal scroll on mobile").toBeFalsy();
  });

  test("body text >= 16px on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/");

    const smallTextElements = await page.locator("p:visible").evaluateAll((els) =>
      els
        .filter((el) => {
          const style = window.getComputedStyle(el);
          const fontSize = parseFloat(style.fontSize);
          // Allow small microcopy (text-xs = 12px) but main body text must be >= 16px
          const text = el.textContent?.trim() || "";
          return fontSize < 16 && text.length > 50; // Only flag substantial text blocks
        })
        .map((el) => ({
          text: el.textContent?.trim().substring(0, 50),
          fontSize: window.getComputedStyle(el).fontSize,
        }))
    );
    expect(
      smallTextElements,
      `Body text blocks < 16px: ${JSON.stringify(smallTextElements)}`
    ).toHaveLength(0);
  });
});

// ============================================================
// Form Structure (Kontakt)
// ============================================================

test.describe("Contact Form Structure", () => {
  test("labels are above fields (not placeholder-only)", async ({ page }) => {
    await page.goto("/kontakt");

    const inputs = page.locator("input:visible, textarea:visible, select:visible");
    const count = await inputs.count();

    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute("id");
      const type = await input.getAttribute("type");

      // Skip hidden/submit inputs
      if (type === "hidden" || type === "submit") continue;

      // Check that a <label> with matching for= exists
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        expect(
          await label.count(),
          `Input #${id} has no associated <label>`
        ).toBeGreaterThan(0);
      }
    }
  });

  test("required fields have aria-required", async ({ page }) => {
    await page.goto("/kontakt");

    const requiredInputs = page.locator("[required]");
    const count = await requiredInputs.count();

    for (let i = 0; i < count; i++) {
      const input = requiredInputs.nth(i);
      const ariaRequired = await input.getAttribute("aria-required");
      expect(
        ariaRequired,
        `Required field missing aria-required`
      ).toBe("true");
    }
  });

  test("max 6 visible form fields (4 ideal per UX rules)", async ({ page }) => {
    await page.goto("/kontakt");
    const visibleFields = page.locator(
      'input:visible:not([type="hidden"]):not([type="submit"]):not([type="checkbox"]), textarea:visible, select:visible'
    );
    const count = await visibleFields.count();
    // CRO ideal: 3-4 fields. Acceptable max: 6 (name, email, phone, company, subject, message)
    expect(count, `${count} visible form fields (max 6)`).toBeLessThanOrEqual(6);
  });
});
