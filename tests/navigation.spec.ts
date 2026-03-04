import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Arbeitssicherheit/);
  });

  test("all main pages are reachable", async ({ page }) => {
    const pages = [
      { path: "/", heading: /Arbeitssicherheit|Arbeitsschutz/ },
      { path: "/leistungen", heading: /Leistungen|Sifa-Betreuung/ },
      { path: "/branchen", heading: /Branchen|Arbeitsschutz/ },
      { path: "/ueber-uns", heading: /Über uns|Ansprechpartner/ },
      { path: "/kontakt", heading: /Kontakt|Erstanalyse/ },
      { path: "/impressum", heading: /Impressum/ },
      { path: "/datenschutz", heading: /Datenschutz/ },
    ];

    for (const p of pages) {
      const response = await page.goto(p.path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1").first()).toBeVisible();
    }
  });

  test("header navigation links work", async ({ page }) => {
    await page.goto("/");

    // Click Leistungen link in desktop nav
    await page.locator("nav[aria-label='Hauptnavigation'] a:has-text('Leistungen')").click();
    await expect(page).toHaveURL(/\/leistungen/);
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("skip link is present and functional", async ({ page }) => {
    await page.goto("/");

    const skipLink = page.locator("a[href='#main']");
    await expect(skipLink).toBeAttached();

    // Focus skip link via Tab
    await page.keyboard.press("Tab");
    await expect(skipLink).toBeFocused();
  });

  test("mobile hamburger menu opens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    const hamburger = page.getByRole("button", { name: "Navigation oeffnen" });
    await expect(hamburger).toBeVisible();
    await hamburger.click();

    // Mobile nav should be visible
    const closeButton = page.getByRole("button", { name: "Navigation schliessen" });
    await expect(closeButton).toBeVisible();
  });
});
