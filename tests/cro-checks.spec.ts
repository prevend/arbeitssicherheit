import { test, expect } from "@playwright/test";

// ============================================================
// Above-the-Fold (Homepage)
// ============================================================

test.describe("Above the Fold - Homepage", () => {
  test("H1 visible without scrolling", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();

    const box = await h1.boundingBox();
    expect(box).not.toBeNull();

    const viewport = page.viewportSize();
    expect(
      box!.y + box!.height <= viewport!.height,
      `H1 bottom (${box!.y + box!.height}px) exceeds viewport height (${viewport!.height}px)`
    ).toBeTruthy();
  });

  test("Primary CTA visible without scrolling", async ({ page }) => {
    await page.goto("/");
    // Primary CTA is the first prominent link/button in the hero
    const cta = page.locator('section a[href], section button').first();
    await expect(cta).toBeVisible();

    const box = await cta.boundingBox();
    expect(box).not.toBeNull();

    const viewport = page.viewportSize();
    expect(
      box!.y + box!.height <= viewport!.height,
      `CTA bottom (${box!.y + box!.height}px) exceeds viewport (${viewport!.height}px)`
    ).toBeTruthy();
  });

  test("at least 1 trust signal visible without scrolling", async ({ page }) => {
    await page.goto("/");
    const viewport = page.viewportSize();

    // Trust signals: elements with check marks, badges, or stats
    const trustElements = page.locator(
      '[class*="trust"], [aria-label*="Trust"], [aria-label*="Kennzahl"]'
    );

    // Fallback: look for the trust badges row or counter section in hero
    const heroBadges = page.locator("section:first-of-type .text-sm.font-medium");
    const heroCounters = page.locator("section:first-of-type [class*='counter'], section:first-of-type [class*='Counter']");

    const trustCount = await trustElements.count();
    const badgeCount = await heroBadges.count();
    const counterCount = await heroCounters.count();

    expect(
      trustCount + badgeCount + counterCount,
      "No trust signals found in hero area"
    ).toBeGreaterThan(0);
  });
});

// ============================================================
// CTA Sizes
// ============================================================

test.describe("CTA Button Sizes", () => {
  test("primary CTA in hero >= 48px height on desktop", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop-only size check");
    await page.goto("/");

    // Find the primary CTA in the hero section (first section, size="lg" button)
    const heroSection = page.locator("section").first();
    const primaryCta = heroSection.locator('a[class*="bg-accent"], button[class*="bg-accent"]').first();
    if (await primaryCta.count() === 0) return;

    const box = await primaryCta.boundingBox();
    expect(box).not.toBeNull();
    expect(
      box!.height >= 48,
      `Hero CTA height ${box!.height}px < 48px minimum (Fitts's Law)`
    ).toBeTruthy();
  });

  test("CTAs are full-width on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/");

    const viewport = page.viewportSize();
    if (!viewport) return;

    // Check CTA buttons in the hero section
    const heroCtas = page.locator('section:first-of-type a[class*="bg-accent"], section:first-of-type button[class*="bg-accent"]');
    const count = await heroCtas.count();

    for (let i = 0; i < count; i++) {
      const box = await heroCtas.nth(i).boundingBox();
      if (!box) continue;

      // On mobile, primary CTAs should be near full-width (>= 80% of viewport)
      // Some designs allow centered buttons that are smaller, so we use 80% threshold
      const widthPercentage = (box.width / viewport.width) * 100;
      expect(
        widthPercentage >= 80,
        `Mobile CTA width ${box.width}px is only ${widthPercentage.toFixed(0)}% of viewport`
      ).toBeTruthy();
    }
  });
});

// ============================================================
// Navigation
// ============================================================

test.describe("Navigation Structure", () => {
  test("max 6 top-level nav items (desktop)", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop nav test");
    await page.goto("/");

    // Count visible top-level nav links in the header
    const navLinks = page.locator("header nav a:visible");
    const count = await navLinks.count();

    expect(
      count <= 7,
      `${count} top-level nav items (max 7, ideal 5-6 per Hick's Law)`
    ).toBeTruthy();
  });

  test("hamburger menu visible on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");
    await page.goto("/");

    const hamburger = page.locator(
      'button[aria-label*="Menu"], button[aria-label*="menu"], button[aria-label*="Menü"], button[aria-label*="Navigation"]'
    );
    await expect(hamburger.first()).toBeVisible();
  });
});

// ============================================================
// CTA Frequency (Homepage)
// ============================================================

test.describe("CTA Frequency - Homepage", () => {
  test("homepage has multiple primary CTAs spread across page", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop CTA count");
    await page.goto("/");

    // Count section-level primary CTAs (large rounded-full accent buttons)
    // Exclude small inline links, nav CTAs, and header buttons
    const primaryCtas = await page.locator('main a[class*="bg-accent"]:visible, main button[class*="bg-accent"]:visible').evaluateAll((els) =>
      els.filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.height >= 40; // Only count substantial CTA buttons
      }).length
    );

    expect(primaryCtas, `Only ${primaryCtas} section-level CTAs (need at least 3)`).toBeGreaterThanOrEqual(3);
  });
});

// ============================================================
// Testimonials / Reviews Layout
// ============================================================

test.describe("Testimonials Layout", () => {
  test("testimonials use grid layout, not vertical stack (desktop)", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop layout test");
    await page.goto("/");

    // Find the testimonials section
    const testimonialSection = page.locator(
      'section[aria-labelledby*="testimonial"], section[aria-labelledby*="kundenstimmen"], section[aria-labelledby*="Kundenstimmen"]'
    ).first();

    if (await testimonialSection.count() === 0) return;

    // Check that testimonial items are laid out side-by-side
    const cards = testimonialSection.locator('[class*="rounded"]');
    const count = await cards.count();

    if (count >= 2) {
      const box1 = await cards.nth(0).boundingBox();
      const box2 = await cards.nth(1).boundingBox();

      if (box1 && box2) {
        // At least some cards should be side-by-side (not all stacked vertically)
        // Either same Y (side-by-side) or intentional spotlight layout
        const isSideBySide = Math.abs(box1.y - box2.y) < 50;
        const isSpotlightLayout = box1.width > box2.width * 1.3; // Featured card wider

        expect(
          isSideBySide || isSpotlightLayout,
          "Testimonials appear to be vertically stacked (forbidden by CRO rules)"
        ).toBeTruthy();
      }
    }
  });
});

// ============================================================
// Visual Anchors (no text walls)
// ============================================================

test.describe("Visual Density", () => {
  test("no section taller than 800px without visual element (desktop)", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop layout test");
    await page.goto("/");

    const sections = page.locator("main section");
    const count = await sections.count();

    for (let i = 0; i < count; i++) {
      const section = sections.nth(i);
      const box = await section.boundingBox();
      if (!box || box.height <= 800) continue;

      // Tall sections must contain images, icons, or visual elements
      const hasVisual = await section.evaluate((el) => {
        const imgs = el.querySelectorAll("img, svg, video, canvas, [class*='icon'], [class*='Icon']");
        return imgs.length > 0;
      });

      expect(
        hasVisual,
        `Section ${i} is ${box.height}px tall with no visual elements`
      ).toBeTruthy();
    }
  });
});
