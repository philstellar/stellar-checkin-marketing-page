
import { useEffect } from 'react';

const FontOptimizer = () => {
  useEffect(() => {
    // Add preload links for critical fonts
    const preloadFonts = [
      '/fonts/Aeonik-Regular.woff2',
      '/fonts/Aeonik-Bold.woff2'
    ];
    
    preloadFonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
    
    // Font loading optimization
    if ('fonts' in document) {
      Promise.all([
        document.fonts.load('1em Aeonik'),
        document.fonts.load('bold 1em Aeonik'),
      ]).then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  }, []);
  
  return null; // This component doesn't render anything
};

export default FontOptimizer;
