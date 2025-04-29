
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
    console.log(`Starting image conversion process...`);
    console.log(`Looking for images in: ${uploadDir}`);
    
    // Check if directory exists
    if (!fs.existsSync(uploadDir)) {
      console.error(`Error: Directory '${uploadDir}' does not exist`);
      return;
    }
    
    // Get all files in the directory
    const files = fs.readdirSync(uploadDir);
    
    // Filter for PNG and JPG files
    const pngFiles = files.filter(file => 
      file.toLowerCase().endsWith('.png') || 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg')
    );
    
    console.log(`Found ${pngFiles.length} image files to process`);
    
    if (pngFiles.length === 0) {
      console.log('No PNG or JPG files found to convert');
      return;
    }
    
    // Convert each image to WebP with 80% quality (good balance of quality and size)
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;
    
    for (const imgFile of pngFiles) {
      const imgPath = path.join(uploadDir, imgFile);
      const webpPath = imgPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      
      try {
        // Skip if WebP already exists and is newer than the original
        if (fs.existsSync(webpPath)) {
          const imgStat = fs.statSync(imgPath);
          const webpStat = fs.statSync(webpPath);
          
          if (webpStat.mtime > imgStat.mtime) {
            console.log(`Skipping ${imgFile} as WebP is already up-to-date`);
            skipCount++;
            continue;
          }
        }
        
        // Get image dimensions
        const metadata = await sharp(imgPath).metadata();
        
        // Resize if dimensions are too large (max width 1500px)
        let sharpInstance = sharp(imgPath);
        if (metadata.width > 1500) {
          console.log(`Resizing ${imgFile} from ${metadata.width}x${metadata.height} to max width 1500px`);
          sharpInstance = sharpInstance.resize({ width: 1500, withoutEnlargement: true });
        }
        
        // Convert to WebP
        await sharpInstance
          .webp({ quality: 80 })
          .toFile(webpPath);
        
        const originalSize = fs.statSync(imgPath).size;
        const webpSize = fs.statSync(webpPath).size;
        const savingsPercent = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ Converted ${imgFile} to WebP (${Math.round(webpSize / 1024)}KB, saved ${savingsPercent}%)`);
        successCount++;
      } catch (err) {
        console.error(`❌ Error processing ${imgFile}:`, err.message);
        errorCount++;
      }
    }
    
    console.log('\nConversion Summary:');
    console.log(`✅ Successfully converted: ${successCount} images`);
    console.log(`⏭️ Skipped (already up-to-date): ${skipCount} images`);
    console.log(`❌ Failed: ${errorCount} images`);
    console.log('\nImage processing completed');
  } catch (err) {
    console.error('Error processing images:', err);
  }
}

// Run the function
processImages();
