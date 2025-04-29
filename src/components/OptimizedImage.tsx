
import React from 'react';

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
  isHero?: boolean;
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
  sizes,
  isHero = false
}) => {
  // Convert priority to loading="eager" 
  const loadingValue = priority ? 'eager' : loading;
  
  // For priority images (likely LCP candidates), apply optimized styles
  const imageStyle: React.CSSProperties = {
    ...style,
    display: 'block', // Prevent layout shifts
    objectFit: 'contain',
  };

  // If this is a hero image, add it to the head for preloading
  React.useEffect(() => {
    if ((isHero || priority) && typeof document !== 'undefined') {
      const linkElement = document.createElement('link');
      linkElement.rel = 'preload';
      linkElement.href = src;
      linkElement.as = 'image';
      linkElement.fetchPriority = 'high';
      document.head.appendChild(linkElement);

      return () => {
        document.head.removeChild(linkElement);
      };
    }
  }, [src, isHero, priority]);

  return (
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
      decoding={priority ? "sync" : "async"} // Use sync decoding for priority images
      fetchPriority={isHero || priority ? "high" : "auto"}
    />
  );
};

export default OptimizedImage;
