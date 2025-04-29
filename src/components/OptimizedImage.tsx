
import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  style,
  onClick,
  sizes
}) => {
  const [webpFailed, setWebpFailed] = useState(false);
  
  // Convert priority to loading="eager" instead of using fetchPriority which causes a warning
  const loadingValue = priority ? 'eager' : loading;
  
  // Generate WebP source if the original isn't already WebP
  const isWebP = src.toLowerCase().endsWith('.webp');
  const isPng = src.toLowerCase().endsWith('.png');
  const isJpg = src.toLowerCase().endsWith('.jpg') || src.toLowerCase().endsWith('.jpeg');
  
  // Only convert if it's a PNG or JPG
  const webpSrc = isWebP ? src : (isPng || isJpg) ? 
    src.replace(/\.(png|jpg|jpeg)$/i, '.webp') : 
    src;
  
  // Add fetchpriority for important images - using camelCase for React
  const fetchPriority = priority ? "high" : undefined;
  
  // For priority images (likely LCP candidates), apply optimized styles
  // Use type assertion to fix the TypeScript error with contentVisibility
  const imageStyle: React.CSSProperties = {
    ...style,
    display: priority ? 'block' : undefined, // Prevent layout shifts
    contain: 'paint', // Optimize rendering
  };

  // Add contentVisibility separately with type assertion
  if (priority) {
    // Using type assertion to tell TypeScript this is valid
    (imageStyle as any).contentVisibility = 'auto';
  }
  
  // Log WebP availability for debugging
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      if (!isWebP && (isPng || isJpg)) {
        console.log(`[OptimizedImage] Using WebP source for: ${src} → ${webpSrc}`);
      }
    }
  }, [src, webpSrc, isWebP, isPng, isJpg]);

  // Handle WebP source error
  const handleWebPError = () => {
    console.warn(`[OptimizedImage] WebP failed to load: ${webpSrc}, falling back to original format`);
    setWebpFailed(true);
  };
  
  return (
    <picture>
      {!isWebP && !webpFailed && (isPng || isJpg) && (
        <source 
          srcSet={webpSrc} 
          type="image/webp" 
          sizes={sizes}
          onError={handleWebPError}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loadingValue}
        style={imageStyle}
        onClick={onClick}
        sizes={sizes}
        fetchPriority={fetchPriority}
        decoding={priority ? "sync" : "async"} // Use sync decoding for priority images
      />
    </picture>
  );
};

export default OptimizedImage;
