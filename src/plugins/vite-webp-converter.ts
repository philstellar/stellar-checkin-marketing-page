
import { Plugin } from 'vite';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

/**
 * Vite plugin to automatically convert PNG images to WebP format
 * in the /public/lovable-uploads/ directory
 */
export function webpConverter(): Plugin {
  const uploadsDir = 'public/lovable-uploads';
  
  return {
    name: 'vite-plugin-webp-converter',
    
    // Run once when the dev server starts
    configureServer({ watcher, ws }) {
      // Initial conversion on server start
      convertExistingImages();
      
      // Watch the uploads directory for new images
      watcher.add(path.resolve(uploadsDir));
      
      // Handle file changes
      watcher.on('add', async (filePath) => {
        if (filePath.includes(uploadsDir) && 
           (filePath.toLowerCase().endsWith('.png') || 
            filePath.toLowerCase().endsWith('.jpg') || 
            filePath.toLowerCase().endsWith('.jpeg'))) {
          try {
            const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            
            // Check if WebP already exists and is newer
            if (fs.existsSync(webpPath)) {
              const imgStat = fs.statSync(filePath);
              const webpStat = fs.statSync(webpPath);
              
              // Skip if WebP is newer than original
              if (webpStat.mtime > imgStat.mtime) {
                return;
              }
            }
            
            // Convert to WebP
            await sharp(filePath)
              .webp({ quality: 80 })
              .toFile(webpPath);
            
            console.log(`✅ Converted ${path.basename(filePath)} to WebP`);
            
            // Notify client to reload if needed
            ws.send({
              type: 'full-reload',
              path: '*'
            });
          } catch (err) {
            console.error(`❌ Error converting ${filePath} to WebP:`, err);
          }
        }
      });
    },
    
    // Run when building for production
    async buildStart() {
      await convertExistingImages();
    }
  };
}

// Convert all existing PNG images to WebP
async function convertExistingImages() {
  const uploadsDir = path.resolve('public/lovable-uploads');
  
  try {
    if (!fs.existsSync(uploadsDir)) {
      console.warn(`WebP converter: Directory not found: ${uploadsDir}`);
      return;
    }
    
    const files = fs.readdirSync(uploadsDir);
    const imgFiles = files.filter(file => 
      file.toLowerCase().endsWith('.png') || 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg')
    );
    
    console.log(`🔍 WebP converter: Found ${imgFiles.length} images to process`);
    
    const conversionPromises = [];
    
    for (const imgFile of imgFiles) {
      const imgPath = path.join(uploadsDir, imgFile);
      const webpPath = imgPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      
      // Skip if WebP already exists and is newer
      if (fs.existsSync(webpPath)) {
        const imgStat = fs.statSync(imgPath);
        const webpStat = fs.statSync(webpPath);
        
        if (webpStat.mtime > imgStat.mtime) {
          continue;
        }
      }
      
      // Convert to WebP with appropriate quality settings
      const isLogo = imgFile.toLowerCase().includes('logo');
      const quality = isLogo ? 90 : 80; // Higher quality for logos
      
      conversionPromises.push(
        sharp(imgPath)
          .webp({ quality })
          .toFile(webpPath)
          .then(() => console.log(`✅ WebP converter: Converted ${imgFile} to WebP`))
          .catch(err => console.error(`❌ WebP converter: Error converting ${imgFile}:`, err))
      );
    }
    
    await Promise.all(conversionPromises);
    console.log(`✅ WebP converter: Processed ${conversionPromises.length} images`);
  } catch (err) {
    console.error('WebP converter: Error processing images:', err);
  }
}
