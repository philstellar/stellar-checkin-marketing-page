
/**
 * This script optimizes all logo images in the lovable-uploads directory
 * Usage: node scripts/optimize-logos.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const uploadsDir = path.join(__dirname, '../public/lovable-uploads');

async function optimizeLogos() {
  try {
    console.log('Starting logo optimization process...');
    
    // Check if directory exists
    if (!fs.existsSync(uploadsDir)) {
      console.error(`Error: Directory '${uploadsDir}' does not exist`);
      return;
    }
    
    // Get all files in the directory
    const files = fs.readdirSync(uploadsDir);
    
    // Filter for logo files (PNG, JPG)
    const logoFiles = files.filter(file => 
      file.toLowerCase().includes('logo') && (
        file.toLowerCase().endsWith('.png') || 
        file.toLowerCase().endsWith('.jpg') || 
        file.toLowerCase().endsWith('.jpeg')
      )
    );
    
    console.log(`Found ${logoFiles.length} logo files to optimize`);
    
    if (logoFiles.length === 0) {
      console.log('No logo files found');
      return;
    }
    
    // Process each logo file
    for (const logoFile of logoFiles) {
      const logoPath = path.join(uploadsDir, logoFile);
      const webpPath = logoPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      
      try {
        // Check if WebP already exists and is newer than the original
        if (fs.existsSync(webpPath)) {
          const logoStat = fs.statSync(logoPath);
          const webpStat = fs.statSync(webpPath);
          
          if (webpStat.mtime > logoStat.mtime) {
            console.log(`Skipping ${logoFile} as WebP is already up-to-date`);
            continue;
          }
        }
        
        console.log(`Processing: ${logoFile}`);
        
        // Get metadata
        const metadata = await sharp(logoPath).metadata();
        
        // Create optimized WebP version
        await sharp(logoPath)
          .webp({ 
            quality: 90,  // Higher quality for logos
            lossless: false  // Use lossy compression for smaller file size
          })
          .toFile(webpPath);
        
        const originalSize = fs.statSync(logoPath).size;
        const webpSize = fs.statSync(webpPath).size;
        const savedPercent = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ Created WebP for ${logoFile}: ${(webpSize / 1024).toFixed(2)}KB (saved ${savedPercent}%)`);
      } catch (err) {
        console.error(`❌ Error processing ${logoFile}:`, err.message);
      }
    }
    
    console.log('Logo optimization completed');
  } catch (err) {
    console.error('Error in optimization process:', err);
  }
}

// Run the function
optimizeLogos();
