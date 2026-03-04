import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/kontakt");
  });

  test("contact page loads with form", async ({ page }) => {
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.locator("form")).toBeVisible();
  });

  test("form has all required fields", async ({ page }) => {
    await expect(page.getByLabel(/Name/)).toBeVisible();
    await expect(page.getByLabel(/E-Mail/)).toBeVisible();
    await expect(page.getByLabel(/Worum geht es/)).toBeVisible();
    await expect(page.getByLabel(/Datenschutz/)).toBeVisible();
  });

  test("shows validation errors on empty submit", async ({ page }) => {
    await page.getByRole("button", { name: "Nachricht senden" }).click();

    // Should show error messages
    await expect(page.getByText("Bitte geben Sie Ihren Namen ein.")).toBeVisible();
    await expect(page.getByText("gültige E-Mail")).toBeVisible();
    await expect(page.getByText("Bitte geben Sie eine Nachricht ein.")).toBeVisible();
  });

  test("shows email validation error for invalid email", async ({ page }) => {
    await page.getByLabel(/Name/).fill("Max Mustermann");
    await page.getByLabel(/E-Mail/).fill("ungueltig");
    await page.getByLabel(/Worum geht es/).fill("Testanfrage");
    await page.getByLabel(/Datenschutz/).check();

    await page.getByRole("button", { name: "Nachricht senden" }).click();

    await expect(page.getByText("gültige E-Mail")).toBeVisible();
  });

  test("successful form submission shows success message", async ({ page }) => {
    await page.getByLabel(/Name/).fill("Max Mustermann");
    await page.getByLabel(/E-Mail/).fill("max@example.com");
    await page.getByLabel(/Worum geht es/).fill("Ich brauche eine Gefährdungsbeurteilung.");
    await page.getByLabel(/Datenschutz/).check();

    await page.getByRole("button", { name: "Nachricht senden" }).click();

    // Should show success message
    await expect(page.getByText("angekommen")).toBeVisible({ timeout: 5000 });
  });

  test("contact info is displayed", async ({ page }) => {
    const main = page.locator("#main");
    await expect(main.getByRole("link", { name: /97 83 140/ })).toBeVisible();
    await expect(main.getByRole("link", { name: /@/ })).toBeVisible();
  });
});
