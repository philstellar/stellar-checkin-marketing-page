
/**
 * This script optimizes the new Favorent logo for web display
 * 
 * Usage: 
 * 1. Make sure sharp is installed: npm install sharp
 * 2. Run: node scripts/optimize-favorent-logo.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceImagePath = path.join(__dirname, '../public/lovable-uploads/new-favorent-logo.png');
const webpOutputPath = path.join(__dirname, '../public/lovable-uploads/new-favorent-logo.webp');

async function optimizeImage() {
  try {
    // Verify source image exists
    if (!fs.existsSync(sourceImagePath)) {
      console.error('Source image not found. Please ensure the new Favorent logo is at:', sourceImagePath);
      return;
    }
    
    // Get source image dimensions
    const metadata = await sharp(sourceImagePath).metadata();
    console.log(`Original image dimensions: ${metadata.width}x${metadata.height}`);
    
    // Calculate dimensions that maintain aspect ratio but ensure width is 150px
    const targetWidth = 150;
    const targetHeight = Math.round((targetWidth / metadata.width) * metadata.height);
    
    // Create optimized WebP version
    await sharp(sourceImagePath)
      .resize(targetWidth, targetHeight)
      .webp({ quality: 85 })
      .toFile(webpOutputPath);
    
    const webpStats = fs.statSync(webpOutputPath);
    console.log(`Optimized image saved to: ${webpOutputPath}`);
    console.log(`New dimensions: ${targetWidth}x${targetHeight}`);
    console.log(`WebP file size: ${Math.round(webpStats.size / 1024)}KB`);
  } catch (err) {
    console.error('Error optimizing image:', err);
  }
}

optimizeImage();
