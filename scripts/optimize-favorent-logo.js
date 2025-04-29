
/**
 * This script specifically optimizes the Favorent logo
 * Usage: node scripts/optimize-favorent-logo.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define the paths
const logoPath = path.join(__dirname, '../public/lovable-uploads/new-favorent-logo.png');
const webpPath = path.join(__dirname, '../public/lovable-uploads/new-favorent-logo.webp');

async function optimizeFavorentLogo() {
  try {
    console.log('Starting optimization of Favorent logo...');

    // Check if file exists
    if (!fs.existsSync(logoPath)) {
      console.error(`Error: Logo file not found at ${logoPath}`);
      return;
    }

    // Get metadata
    const metadata = await sharp(logoPath).metadata();
    console.log(`Original image: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);

    // Optimize and save as WebP
    await sharp(logoPath)
      .webp({ 
        quality: 85,  // Higher quality for logos
        lossless: false  // Use lossy compression for smaller file size
      })
      .toFile(webpPath);

    console.log(`✅ WebP version created at: ${webpPath}`);

    // Log file size comparison
    const originalSize = fs.statSync(logoPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savedPercent = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`Original size: ${(originalSize / 1024).toFixed(2)}KB`);
    console.log(`WebP size: ${(webpSize / 1024).toFixed(2)}KB`);
    console.log(`Saved: ${savedPercent}%`);
  } catch (error) {
    console.error('Error optimizing logo:', error);
  }
}

optimizeFavorentLogo();
