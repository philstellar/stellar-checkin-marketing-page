
/**
 * This script converts PNG images to WebP format for better performance
 * 
 * Usage: 
 * 1. Install sharp: npm install sharp
 * 2. Run: node scripts/convert-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, '../public/lovable-uploads');

// Process all images
async function processImages() {
  try {
    // Get all files in the directory
    const files = fs.readdirSync(uploadDir);
    
    // Filter for PNG files
    const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));
    
    console.log(`Found ${pngFiles.length} PNG files to process`);
    
    // Convert each PNG to WebP with 80% quality (good balance of quality and size)
    for (const pngFile of pngFiles) {
      const pngPath = path.join(uploadDir, pngFile);
      const webpPath = pngPath.replace(/\.png$/i, '.webp');
      
      // Skip if WebP already exists and is newer than the PNG
      if (fs.existsSync(webpPath)) {
        const pngStat = fs.statSync(pngPath);
        const webpStat = fs.statSync(webpPath);
        
        if (webpStat.mtime > pngStat.mtime) {
          console.log(`Skipping ${pngFile} as WebP is already up-to-date`);
          continue;
        }
      }
      
      // Get image dimensions
      const metadata = await sharp(pngPath).metadata();
      
      // Resize if dimensions are too large (max width 1500px)
      let sharpInstance = sharp(pngPath);
      if (metadata.width > 1500) {
        console.log(`Resizing ${pngFile} from ${metadata.width}x${metadata.height} to max width 1500px`);
        sharpInstance = sharpInstance.resize({ width: 1500, withoutEnlargement: true });
      }
      
      // Convert to WebP
      await sharpInstance
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      console.log(`Converted ${pngFile} to WebP (${Math.round(fs.statSync(webpPath).size / 1024)}KB)`);
    }
    
    console.log('Image processing completed successfully');
  } catch (err) {
    console.error('Error processing images:', err);
  }
}

// Run the function
processImages();
