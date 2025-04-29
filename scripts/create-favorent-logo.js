
/**
 * This script creates a placeholder for the Favorent logo
 * until the actual logo can be uploaded
 * 
 * Usage: 
 * 1. Run: node scripts/create-favorent-logo.js
 */

const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const outputPath = path.join(__dirname, '../public/lovable-uploads/new-favorent-logo.png');

// Create a placeholder image for the Favorent logo
async function createPlaceholderImage() {
  try {
    // Create a canvas with the dimensions needed
    const width = 150;
    const height = 90;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // Fill background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Draw a colored rectangle
    ctx.fillStyle = '#0A3D62';
    ctx.fillRect(10, 20, width - 20, height - 40);
    
    // Add text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Favorent', width/2, height/2);
    
    // Save the canvas to a file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`Placeholder logo created at: ${outputPath}`);
  } catch (err) {
    console.error('Error creating placeholder logo:', err);
  }
}

createPlaceholderImage();
