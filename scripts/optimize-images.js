#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const srcImage = path.join(publicDir, 'DB.png');
const imagesDir = path.join(publicDir, 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const sizes = [480, 768, 1200];
const formats = ['webp', 'jpg'];

async function optimizeImage() {
  try {
    console.log('Optimizing DB.png...');

    // Generate WebP and JPEG variants
    for (const size of sizes) {
      for (const format of formats) {
        const outputFile = path.join(
          imagesDir,
          `profile-${size}w.${format === 'webp' ? 'webp' : 'jpg'}`
        );

        await sharp(srcImage)
          .resize(size, size, {
            fit: 'cover',
            position: 'center'
          })
          [format === 'webp' ? 'webp' : 'jpeg']({
            quality: 80
          })
          .toFile(outputFile);

        const stats = fs.statSync(outputFile);
        console.log(
          `✓ ${path.basename(outputFile)} (${(stats.size / 1024).toFixed(2)} KB)`
        );
      }
    }

    // Create a small placeholder (low quality, tiny size for LQIP effect)
    const placeholderFile = path.join(imagesDir, 'profile-placeholder.jpg');
    await sharp(srcImage)
      .resize(50, 50)
      .jpeg({ quality: 60 })
      .toFile(placeholderFile);

    const placeholderStats = fs.statSync(placeholderFile);
    console.log(
      `✓ ${path.basename(placeholderFile)} (${(placeholderStats.size / 1024).toFixed(2)} KB) - placeholder`
    );

    console.log('\nImage optimization complete!');
    console.log(`Optimized images saved to: ${imagesDir}`);
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImage();
