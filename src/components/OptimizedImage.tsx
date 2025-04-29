
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Optimized image component that provides:
 * - Proper width and height to prevent layout shifts
 * - Responsive loading with srcset when available
 * - Lazy loading by default for images below the fold
 * - WebP format support with fallbacks
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  loading = 'lazy'
}) => {
  // Detect if the source is a PNG that could benefit from WebP conversion
  const isPng = src.toLowerCase().endsWith('.png');
  
  // If we have a PNG from lovable-uploads, create a WebP version path
  const webpSrc = isPng && src.includes('lovable-uploads') 
    ? src.replace(/\.png$/, '.webp') 
    : null;
  
  // Set priority or lazy loading
  const loadingAttribute = priority ? 'eager' : loading;
  
  // Set fetchPriority for critical images
  const fetchPriority = priority ? 'high' : 'auto';
  
  return (
    <>
      {webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loadingAttribute}
            fetchPriority={fetchPriority as any}
            className={className}
            sizes={sizes}
          />
        </picture>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loadingAttribute}
          fetchPriority={fetchPriority as any}
          className={className}
          sizes={sizes}
        />
      )}
    </>
  );
};

export default OptimizedImage;
