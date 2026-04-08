import { Jimp } from 'jimp';
import potrace from 'potrace';
import fs from 'fs';
import path from 'path';

const ICON_DIR = '/Users/ivanancuk/.gemini/antigravity/brain/8deefabc-f41f-4e81-a7f8-9b24396d29ff/';
const icons = [
  { name: 'Neurology (Brain)', file: 'brain_minimal_1775604113725.png' },
  { name: 'Nutriciology (Pill)', file: 'pill_minimal_1775604126651.png' },
  { name: 'Pedagogics (Toys)', file: 'toys_minimal_1775604137422.png' },
  { name: 'Dentistry (Jaw)', file: 'jaw_minimal_1775604149095.png' },
  { name: 'Regeneration (Hand)', file: 'wound_minimal_1775604164542.png' }
];

async function trace(icon) {
  const filePath = path.join(ICON_DIR, icon.file);
  try {
    const buffer = fs.readFileSync(filePath);
    
    return new Promise((resolve, reject) => {
      potrace.trace(buffer, {
        turdSize: 10,
        optTolerance: 0.2,
        blackOnWhite: true,
        threshold: 128
      }, (err, svg) => {
        if (err) reject(err);
        else resolve(svg);
      });
    });
  } catch (e) {
    console.error(`Error processing ${icon.name}:`, e);
    return null;
  }
}

async function run() {
  console.log("# Trace Results\n");
  for (const icon of icons) {
    const svg = await trace(icon);
    if (svg) {
      console.log(`## ${icon.name}\n`);
      // Extract the path data only or show the whole SVG
      console.log("```svg");
      console.log(svg);
      console.log("```\n");
    }
  }
}

run();
