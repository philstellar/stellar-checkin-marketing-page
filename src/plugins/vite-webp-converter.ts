
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
        if (filePath.includes(uploadsDir) && filePath.toLowerCase().endsWith('.png')) {
          try {
            const webpPath = filePath.replace(/\.png$/i, '.webp');
            
            // Check if WebP already exists and is newer
            if (fs.existsSync(webpPath)) {
              const pngStat = fs.statSync(filePath);
              const webpStat = fs.statSync(webpPath);
              
              // Skip if WebP is newer than PNG
              if (webpStat.mtime > pngStat.mtime) {
                return;
              }
            }
            
            // Convert PNG to WebP
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
      return;
    }
    
    const files = fs.readdirSync(uploadsDir);
    const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));
    const conversionPromises = [];
    
    console.log(`🔍 Found ${pngFiles.length} PNG files to process`);
    
    for (const pngFile of pngFiles) {
      const pngPath = path.join(uploadsDir, pngFile);
      const webpPath = pngPath.replace(/\.png$/i, '.webp');
      
      // Skip if WebP already exists and is newer
      if (fs.existsSync(webpPath)) {
        const pngStat = fs.statSync(pngPath);
        const webpStat = fs.statSync(webpPath);
        
        if (webpStat.mtime > pngStat.mtime) {
          continue;
        }
      }
      
      // Convert PNG to WebP
      conversionPromises.push(
        sharp(pngPath)
          .webp({ quality: 80 })
          .toFile(webpPath)
          .then(() => console.log(`✅ Converted ${pngFile} to WebP`))
          .catch(err => console.error(`❌ Error converting ${pngFile} to WebP:`, err))
      );
    }
    
    await Promise.all(conversionPromises);
  } catch (err) {
    console.error('Error processing images:', err);
  }
}
