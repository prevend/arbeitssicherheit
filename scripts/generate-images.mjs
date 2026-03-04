#!/usr/bin/env node
/**
 * Generates documentary-style images for Arbeitssicherheit MG website
 * using Google Imagen 4.0 API.
 *
 * Run: node scripts/generate-images.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const API_KEY = process.env.GOOGLE_API_KEY;
if (!API_KEY) {
  console.error("ERROR: GOOGLE_API_KEY environment variable not set.");
  console.error("Set it with: export GOOGLE_API_KEY=your-key-here");
  process.exit(1);
}
const MODEL = "imagen-4.0-generate-001";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:predict?key=${API_KEY}`;
const OUT_DIR = join(process.cwd(), "public", "images");

mkdirSync(OUT_DIR, { recursive: true });

// Style prefix for all prompts
const STYLE =
  "Documentary-style photograph, warm natural lighting, authentic and candid feel, no posed smiles, professional setting in Germany. ";

const images = [
  {
    filename: "hero-begehung.jpg",
    aspectRatio: "16:9",
    personGeneration: "allow_adult",
    prompt:
      STYLE +
      "Wide shot of a workplace safety inspection in a manufacturing hall. Two adults walking through a production floor: one wearing a high-visibility safety vest pointing at a CNC machine, the other holding a clipboard and pen. Warm morning sunlight streams through large industrial windows creating golden light on the concrete floor. Steel beams visible above. Authentic working environment with tools and equipment in background.",
  },
  {
    filename: "ersttermin.jpg",
    aspectRatio: "16:9",
    personGeneration: "allow_adult",
    prompt:
      STYLE +
      "A consultation meeting in a small German company office. Two adults sitting at a simple wooden table, one in business casual the other in work clothes. Documents and folders spread on the table, two coffee cups. Natural daylight from a window behind them. Casual but focused atmosphere. A workplace safety binder visible. Whiteboard on the wall behind.",
  },
  {
    filename: "begehung.jpg",
    aspectRatio: "4:3",
    personGeneration: "allow_adult",
    prompt:
      STYLE +
      "A workplace safety professional doing a walkthrough inspection in a German metal workshop. Adult wearing a safety vest examining equipment near a welding station. Workers visible in the soft background. Clipboard in hand. Warm industrial lighting from overhead fixtures. Metal shavings on the floor, organized tool rack on the wall.",
  },
  {
    filename: "dokumentation.jpg",
    aspectRatio: "4:3",
    personGeneration: "allow_adult",
    prompt:
      STYLE +
      "An adult sitting at a clean desk in a small German office. Laptop open showing a spreadsheet, two organized file folders beside it, a printed inspection protocol with checkmarks. Concentrated expression while writing. Warm desk lamp casting soft light. Window with daylight in the background. Coffee mug. Pencil holder. Calm, focused working atmosphere.",
  },
  {
    filename: "schulung.jpg",
    aspectRatio: "4:3",
    personGeneration: "allow_adult",
    prompt:
      STYLE +
      "A small workplace safety training session in a German workshop. One adult instructor standing near a flipchart explaining to a small group of 4 seated adult workers. A red fire extinguisher mounted on the wall behind. First aid kit visible. Natural light from high windows. Practical, hands-on atmosphere. Workers wearing work clothes, some with safety glasses pushed up.",
  },
  {
    filename: "pruefung.jpg",
    aspectRatio: "4:3",
    personGeneration: "allow_adult",
    prompt:
      STYLE +
      "An adult safety inspector checking electrical equipment in a German warehouse. Wearing a safety vest, holding a testing device next to an electrical panel. Inspection checklist on a clipboard. Yellow safety sticker visible on inspected equipment. Industrial shelving racks in the background. Overhead fluorescent lighting mixed with natural light from a loading dock.",
  },
  {
    filename: "baustelle.jpg",
    aspectRatio: "4:3",
    personGeneration: "allow_adult",
    prompt:
      STYLE +
      "Two adults with white hard hats on a German construction site. One making notes on a clipboard while looking at scaffolding. The other pointing at a section of the building under construction. Both wearing high-visibility vests. Scaffolding and construction materials in the background. Overcast sky, natural outdoor light. Safety nets and barriers visible.",
  },
  {
    filename: "alltag.jpg",
    aspectRatio: "2:1",
    personGeneration: "allow_adult",
    prompt:
      STYLE +
      "Wide shot of a German workplace safety professional arriving at a small business in the morning. Adult in business casual walking toward a workshop entrance carrying a leather briefcase and clipboard. The business sign is partially visible. Early morning golden light. A van parked nearby. Green bushes along the path. Authentic, everyday moment captured naturally.",
  },
  {
    filename: "buero.jpg",
    aspectRatio: "3:4",
    personGeneration: "dont_allow",
    prompt:
      STYLE +
      "Interior of a small, warm German office. Clean wooden desk with an open laptop, organized file folders, a coffee mug with steam, and a pen holder. A green plant on the windowsill. Window showing a view of rooftops. Bookshelves with binders labeled neatly. Warm afternoon light. Inviting, organized, and professional atmosphere. No people.",
  },
  {
    filename: "team-1.jpg",
    aspectRatio: "1:1",
    personGeneration: "allow_adult",
    prompt:
      "Professional headshot portrait of a friendly middle-aged German man, approximately 45 years old, with short brown hair and a confident but approachable expression. Wearing a light blue button-down shirt, no tie. Slight natural smile. Outdoor background with soft bokeh of green trees. Natural daylight. Head and shoulders composition. High quality, sharp focus on face.",
  },
  {
    filename: "team-2.jpg",
    aspectRatio: "1:1",
    personGeneration: "allow_adult",
    prompt:
      "Professional headshot portrait of a friendly German man, approximately 35 years old, with short dark hair and a calm, trustworthy expression. Wearing a dark gray polo shirt. Natural slight smile. Indoor office background with soft bokeh. Warm natural window light from the side. Head and shoulders composition. High quality, sharp focus on face.",
  },
  // --- Testimonial-Portraits (Placeholder, werden durch echte Fotos ersetzt) ---
  {
    filename: "testimonial-richter.jpg",
    aspectRatio: "1:1",
    personGeneration: "allow_adult",
    prompt:
      "Professional portrait photo of a friendly German business owner / Geschäftsführer, male, approximately 50 years old, with short gray-brown hair and a confident, relaxed expression. Wearing a dark navy polo shirt. Warm natural smile. Blurred office or workshop background with soft bokeh. Head and shoulders composition, slightly off-center. Natural window light. High quality, authentic atmosphere.",
  },
  {
    filename: "testimonial-weber.jpg",
    aspectRatio: "1:1",
    personGeneration: "allow_adult",
    prompt:
      "Professional portrait photo of a friendly German HR manager / Personalleiterin, female, approximately 42 years old, with medium-length dark blonde hair and a warm, professional expression. Wearing a light gray blazer over a white blouse. Calm natural smile. Bright modern office background softly blurred. Head and shoulders composition. Natural daylight from the side. High quality, authentic feel.",
  },
  {
    filename: "testimonial-schneider.jpg",
    aspectRatio: "1:1",
    personGeneration: "allow_adult",
    prompt:
      "Professional portrait photo of a German master craftsman / Handwerksmeister, male, approximately 48 years old, with short dark hair, a slight beard, and a calm confident expression. Wearing a clean dark work shirt or polo. Blurred workshop or industrial background. Head and shoulders. Natural window light creating a slight rim light. High quality, grounded and trustworthy atmosphere.",
  },
];

async function generateImage(img) {
  const filePath = join(OUT_DIR, img.filename);
  if (existsSync(filePath)) {
    console.log(`  SKIP ${img.filename} (already exists)`);
    return true;
  }
  const startTime = Date.now();
  process.stdout.write(`  Generating ${img.filename}...`);

  const body = {
    instances: [{ prompt: img.prompt }],
    parameters: {
      sampleCount: 1,
      aspectRatio: img.aspectRatio,
      personGeneration: img.personGeneration,
      outputOptions: { mimeType: "image/jpeg" },
    },
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (data.error) {
    console.log(` FAILED: ${data.error.message}`);
    return false;
  }

  if (!data.predictions || data.predictions.length === 0) {
    console.log(` FAILED: No predictions returned`);
    return false;
  }

  const imageData = data.predictions[0].bytesBase64Encoded;
  const buffer = Buffer.from(imageData, "base64");
  writeFileSync(filePath, buffer);

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  const sizeKB = Math.round(buffer.length / 1024);
  console.log(` OK (${sizeKB} KB, ${elapsed}s)`);
  return true;
}

async function main() {
  console.log(`Generating ${images.length} images with Imagen 4.0...\n`);

  let success = 0;
  let failed = 0;

  for (const img of images) {
    try {
      const ok = await generateImage(img);
      if (ok) success++;
      else failed++;
    } catch (err) {
      console.log(` ERROR: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone! ${success} generated, ${failed} failed.`);
  console.log(`Images saved to: ${OUT_DIR}`);
}

main().catch(console.error);
