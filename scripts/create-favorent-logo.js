
/**
 * This script creates a template Favorent logo if the original is missing
 * 
 * Usage:
 * 1. Install dependencies: npm install sharp canvas
 * 2. Run: node scripts/create-favorent-logo.js
 */

const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '../public/lovable-uploads');
const outputPath = path.join(outputDir, 'new-favorent-logo.png');
const webpOutputPath = path.join(outputDir, 'new-favorent-logo.webp');

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Check if logo already exists
if (fs.existsSync(outputPath)) {
  console.log('Logo already exists, skipping creation');
  process.exit(0);
}

// Create canvas for the logo
const width = 300;
const height = 100;
const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

// Fill background
context.fillStyle = '#ffffff';
context.fillRect(0, 0, width, height);

// Text styling
context.fillStyle = '#333333';
context.font = 'bold 40px Arial';
context.textAlign = 'center';
context.textBaseline = 'middle';

// Draw text
context.fillText('FavoRent', width / 2, height / 2);

// Add a simple icon
context.beginPath();
context.arc(50, 50, 20, 0, 2 * Math.PI);
context.fillStyle = '#a4c309';
context.fill();

// Save the PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);
console.log(`Created logo at: ${outputPath}`);

// Convert to WebP
sharp(outputPath)
  .webp({ quality: 90 })
  .toFile(webpOutputPath)
  .then(() => {
    console.log(`Created WebP version at: ${webpOutputPath}`);
  })
  .catch(err => {
    console.error('Error creating WebP version:', err);
  });
