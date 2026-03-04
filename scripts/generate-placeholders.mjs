#!/usr/bin/env node
/**
 * Generates professional placeholder images for the Arbeitssicherheit MG website.
 * Uses sharp to create warm-toned, documentary-style placeholder images
 * with overlay text describing what the final image should show.
 *
 * Run: node scripts/generate-placeholders.mjs
 */

import sharp from "sharp";
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const OUT_DIR = join(process.cwd(), "public", "images");
mkdirSync(OUT_DIR, { recursive: true });

// Color palette matching the design system
const COLORS = {
  warmBeige: "#d4c5a9",
  warmStone: "#a89984",
  darkSlate: "#3d3d3d",
  softBlue: "#7a9bb5",
  warmGray: "#8a8578",
  lightCream: "#e8e0d0",
  accentOrange: "#c4956a",
};

// Image definitions with dimensions and descriptions
const images = [
  {
    filename: "hero-begehung.jpg",
    width: 1600,
    height: 900,
    bg: COLORS.warmStone,
    accent: COLORS.darkSlate,
    label: "Begehung in\neiner Produktionshalle",
    sublabel: "Warmes Licht · Sicherheitsweste · Klemmbrett",
  },
  {
    filename: "ersttermin.jpg",
    width: 1200,
    height: 800,
    bg: COLORS.lightCream,
    accent: COLORS.warmGray,
    label: "Ersttermin\nim Betrieb",
    sublabel: "Tisch · Unterlagen · Kaffeetassen",
  },
  {
    filename: "begehung.jpg",
    width: 800,
    height: 600,
    bg: COLORS.warmBeige,
    accent: COLORS.darkSlate,
    label: "Arbeitsschutz-\nbegehung",
    sublabel: "Werkstatt · Maschinen · Konzentration",
  },
  {
    filename: "dokumentation.jpg",
    width: 800,
    height: 600,
    bg: COLORS.softBlue,
    accent: COLORS.darkSlate,
    label: "Dokumentation\nam Schreibtisch",
    sublabel: "Laptop · Ordner · Prüfprotokolle",
  },
  {
    filename: "schulung.jpg",
    width: 800,
    height: 600,
    bg: COLORS.accentOrange,
    accent: COLORS.darkSlate,
    label: "Schulung\nin der Werkstatt",
    sublabel: "Feuerlöscher · Flipchart · Gruppe",
  },
  {
    filename: "pruefung.jpg",
    width: 800,
    height: 600,
    bg: COLORS.warmGray,
    accent: COLORS.lightCream,
    label: "Prüfung\nvon Arbeitsmitteln",
    sublabel: "DGUV V3 · Checkliste · Sicherheit",
  },
  {
    filename: "baustelle.jpg",
    width: 800,
    height: 600,
    bg: COLORS.warmStone,
    accent: COLORS.lightCream,
    label: "Baustellen-\nbegehung",
    sublabel: "Helme · Gerüst · Notizen",
  },
  {
    filename: "alltag.jpg",
    width: 1200,
    height: 600,
    bg: COLORS.warmBeige,
    accent: COLORS.darkSlate,
    label: "Ein typischer\nMontag",
    sublabel: "Begehung · Schulung · Büro · Fristen",
  },
  {
    filename: "buero.jpg",
    width: 600,
    height: 800,
    bg: COLORS.lightCream,
    accent: COLORS.warmGray,
    label: "Unser Büro\nin Mönchengladbach",
    sublabel: "Laptop · Kaffee · Ordner",
  },
  {
    filename: "team-1.jpg",
    width: 400,
    height: 400,
    bg: COLORS.warmStone,
    accent: COLORS.lightCream,
    label: "Teamfoto",
    sublabel: "Fachkraft für Arbeitssicherheit",
    isPortrait: true,
  },
  {
    filename: "team-2.jpg",
    width: 400,
    height: 400,
    bg: COLORS.softBlue,
    accent: COLORS.lightCream,
    label: "Teamfoto",
    sublabel: "Schulungen & Dokumentation",
    isPortrait: true,
  },
];

/**
 * Creates an SVG placeholder with warm, professional styling
 */
function createSvg(img) {
  const { width, height, bg, accent, label, sublabel, isPortrait } = img;

  // Calculate font sizes relative to image dimensions
  const baseFontSize = Math.min(width, height) * 0.06;
  const labelFontSize = Math.round(baseFontSize * 1.4);
  const sublabelFontSize = Math.round(baseFontSize * 0.7);
  const iconSize = isPortrait ? Math.round(Math.min(width, height) * 0.25) : 0;

  // Split label into lines
  const lines = label.split("\n");
  const lineHeight = labelFontSize * 1.3;
  const totalTextHeight = lines.length * lineHeight + sublabelFontSize + 20;
  const startY = height / 2 - totalTextHeight / 2 + (isPortrait ? iconSize * 0.4 : 0);

  // Decorative elements
  const cornerSize = Math.min(width, height) * 0.08;

  // Portrait circle for team photos
  const portraitCircle = isPortrait
    ? `<circle cx="${width / 2}" cy="${height * 0.35}" r="${iconSize}"
        fill="none" stroke="${accent}" stroke-width="2" opacity="0.3"/>
       <circle cx="${width / 2}" cy="${height * 0.35}" r="${iconSize * 0.4}"
        fill="${accent}" opacity="0.15"/>
       <line x1="${width / 2}" y1="${height * 0.35 - iconSize * 0.15}"
        x2="${width / 2}" y2="${height * 0.35 + iconSize * 0.15}"
        stroke="${accent}" stroke-width="1.5" opacity="0.2"/>
       <line x1="${width / 2 - iconSize * 0.15}" y1="${height * 0.35}"
        x2="${width / 2 + iconSize * 0.15}" y2="${height * 0.35}"
        stroke="${accent}" stroke-width="1.5" opacity="0.2"/>`
    : "";

  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${bg};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${accent};stop-opacity:0.3" />
      </linearGradient>
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
        <feBlend in="SourceGraphic" mode="multiply" result="grain"/>
      </filter>
    </defs>

    <!-- Background gradient -->
    <rect width="${width}" height="${height}" fill="url(#bg)"/>

    <!-- Subtle noise texture overlay -->
    <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.04"/>

    <!-- Corner accents -->
    <line x1="20" y1="20" x2="${20 + cornerSize}" y2="20"
      stroke="${accent}" stroke-width="1.5" opacity="0.25"/>
    <line x1="20" y1="20" x2="20" y2="${20 + cornerSize}"
      stroke="${accent}" stroke-width="1.5" opacity="0.25"/>
    <line x1="${width - 20}" y1="${height - 20}" x2="${width - 20 - cornerSize}" y2="${height - 20}"
      stroke="${accent}" stroke-width="1.5" opacity="0.25"/>
    <line x1="${width - 20}" y1="${height - 20}" x2="${width - 20}" y2="${height - 20 - cornerSize}"
      stroke="${accent}" stroke-width="1.5" opacity="0.25"/>

    ${portraitCircle}

    <!-- Label text -->
    ${lines
      .map(
        (line, i) =>
          `<text x="${width / 2}" y="${startY + i * lineHeight}"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="${labelFontSize}" font-weight="600"
        fill="${accent}" text-anchor="middle" opacity="0.7">${escapeXml(line)}</text>`
      )
      .join("\n    ")}

    <!-- Sublabel -->
    <text x="${width / 2}" y="${startY + lines.length * lineHeight + 20}"
      font-family="system-ui, -apple-system, sans-serif"
      font-size="${sublabelFontSize}" font-weight="400"
      fill="${accent}" text-anchor="middle" opacity="0.45">${escapeXml(sublabel)}</text>

    <!-- Camera icon (small, bottom right) -->
    ${
      !isPortrait
        ? `<g transform="translate(${width - 50}, ${height - 40})" opacity="0.2">
        <rect x="0" y="6" width="24" height="16" rx="2" fill="none" stroke="${accent}" stroke-width="1.5"/>
        <circle cx="12" cy="14" r="4" fill="none" stroke="${accent}" stroke-width="1.5"/>
        <path d="M8 6 L10 2 L14 2 L16 6" fill="none" stroke="${accent}" stroke-width="1.5"/>
      </g>`
        : ""
    }
  </svg>`;
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function generateImage(img) {
  const outPath = join(OUT_DIR, img.filename);
  if (existsSync(outPath)) {
    console.log(`  SKIP ${img.filename} (already exists)`);
    return;
  }
  const svg = createSvg(img);
  const svgBuffer = Buffer.from(svg);

  await sharp(svgBuffer)
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(outPath);

  console.log(`  ✓ ${img.filename} (${img.width}x${img.height})`);
}

// Creates SVG cert badge and saves as PNG
function createCertBadgeSvg({ width, height, primaryColor, label, sublabel, icon }) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${primaryColor}" stop-opacity="1"/>
      <stop offset="100%" stop-color="${primaryColor}" stop-opacity="0.75"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" rx="${Math.min(width,height)*0.12}" fill="url(#bg)"/>
  <rect x="4" y="4" width="${width-8}" height="${height-8}" rx="${Math.min(width,height)*0.1}" fill="none" stroke="white" stroke-width="1.5" opacity="0.4"/>
  <text x="${width/2}" y="${height*0.42}" font-family="system-ui,sans-serif" font-size="${Math.round(height*0.28)}" text-anchor="middle" fill="white" opacity="0.9">${icon}</text>
  <text x="${width/2}" y="${height*0.68}" font-family="system-ui,sans-serif" font-size="${Math.round(height*0.13)}" font-weight="700" text-anchor="middle" fill="white">${escapeXml(label)}</text>
  <text x="${width/2}" y="${height*0.83}" font-family="system-ui,sans-serif" font-size="${Math.round(height*0.09)}" text-anchor="middle" fill="white" opacity="0.75">${escapeXml(sublabel)}</text>
</svg>`;
}

const certBadges = [
  { filename: "cert-dguv.png", width: 160, height: 160, primaryColor: "#216CA5", label: "DGUV V2", sublabel: "zertifiziert", icon: "✓" },
  { filename: "cert-elektromeister.png", width: 160, height: 160, primaryColor: "#0D2A4A", label: "Elektromeister", sublabel: "Handwerkskammer", icon: "⚡" },
  { filename: "cert-sifa.png", width: 160, height: 160, primaryColor: "#1a5c8a", label: "SiFa zert.", sublabel: "DGUV Vorschrift 2", icon: "🛡" },
  { filename: "cert-haftpflicht.png", width: 160, height: 160, primaryColor: "#2d7a4a", label: "Haftpflicht", sublabel: "Beraterhaftpflicht", icon: "✔" },
];

async function generateCertBadge(badge) {
  const outPath = join(OUT_DIR, badge.filename);
  if (existsSync(outPath)) {
    console.log(`  SKIP ${badge.filename} (already exists)`);
    return;
  }
  const svg = createCertBadgeSvg(badge);
  const svgBuffer = Buffer.from(svg);
  await sharp(svgBuffer).png().toFile(outPath);
  console.log(`  ✓ ${badge.filename} (${badge.width}x${badge.height})`);
}

async function main() {
  console.log("Generating placeholder images...\n");

  for (const img of images) {
    await generateImage(img);
  }

  console.log("\nGenerating certification badges...\n");
  for (const badge of certBadges) {
    await generateCertBadge(badge);
  }

  console.log(`\nDone! Images saved to public/images/`);
}

main().catch(console.error);
