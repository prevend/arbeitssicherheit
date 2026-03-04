import { chromium } from "@playwright/test";
import { mkdirSync } from "fs";

const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

const pages = [
  { name: "startseite", path: "/" },
  { name: "leistungen", path: "/leistungen" },
  { name: "branchen", path: "/branchen" },
  { name: "ueber-uns", path: "/ueber-uns" },
  { name: "kontakt", path: "/kontakt" },
];

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

for (const p of pages) {
  const page = await context.newPage();
  await page.goto(`http://localhost:3000${p.path}`, { waitUntil: "networkidle" });

  // Full page screenshot
  await page.screenshot({
    path: `${OUT}/${p.name}-full.png`,
    fullPage: true,
  });

  // Above the fold
  await page.screenshot({
    path: `${OUT}/${p.name}-fold.png`,
  });

  console.log(`  OK: ${p.name}`);
  await page.close();
}

// Mobile view of startseite
const mobilePage = await browser.newPage();
await mobilePage.setViewportSize({ width: 390, height: 844 });
await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" });
await mobilePage.screenshot({
  path: `${OUT}/startseite-mobile-full.png`,
  fullPage: true,
});
await mobilePage.screenshot({
  path: `${OUT}/startseite-mobile-fold.png`,
});
console.log("  OK: mobile");

await browser.close();
console.log(`\nScreenshots saved to ${OUT}/`);
