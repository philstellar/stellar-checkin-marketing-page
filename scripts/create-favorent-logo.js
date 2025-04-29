
/**
 * This script creates a WebP version of the Favorent logo
 * Usage: node scripts/create-favorent-logo.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/lovable-uploads/new-favorent-logo.png');
const outputPath = path.join(__dirname, '../public/lovable-uploads/new-favorent-logo.webp');

async function createWebpLogo() {
  try {
    console.log('Creating WebP version of Favorent logo...');
    console.log(`Input: ${inputPath}`);
    console.log(`Output: ${outputPath}`);
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error(`Error: Input file not found at ${inputPath}`);
      return;
    }

    // Convert PNG to WebP with good quality
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savedPercent = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Successfully created: ${outputPath}`);
    console.log(`Original size: ${(originalSize / 1024).toFixed(2)}KB`);
    console.log(`WebP size: ${(webpSize / 1024).toFixed(2)}KB`);
    console.log(`Saved: ${savedPercent}%`);
  } catch (error) {
    console.error('Error creating WebP image:', error);
  }
}

createWebpLogo();
