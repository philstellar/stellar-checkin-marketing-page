
/**
 * This script optimizes all logo images in the lovable-uploads directory
 * 
 * Usage: 
 * 1. Make sure sharp is installed: npm install sharp
 * 2. Run: node scripts/optimize-logos.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const uploadsDir = path.join(__dirname, '../public/lovable-uploads');
const logos = [
  {
    src: 'new-favorent-logo.png',
    width: 150
  },
  // Add other logos here if needed
];

async function optimizeLogos() {
  try {
    for (const logo of logos) {
      const sourceImagePath = path.join(uploadsDir, logo.src);
      const webpOutputPath = path.join(uploadsDir, logo.src.replace('.png', '.webp'));
      
      // Skip if source image doesn't exist
      if (!fs.existsSync(sourceImagePath)) {
        console.error(`Source image not found: ${sourceImagePath}`);
        continue;
      }
      
      // Get source image dimensions
      const metadata = await sharp(sourceImagePath).metadata();
      console.log(`Processing ${logo.src} - Original dimensions: ${metadata.width}x${metadata.height}`);
      
      // Calculate dimensions that maintain aspect ratio
      const targetWidth = logo.width;
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
    }
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeLogos();
