
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
  // Convert priority to loading="eager" instead of using fetchPriority which causes a warning
  const loadingValue = priority ? 'eager' : loading;
  
  // Generate WebP source if the original is PNG
  const webpSrc = src.toLowerCase().endsWith('.png')
    ? src.replace(/\.png$/i, '.webp')
    : src;
  
  // We'll provide the original as fallback for browsers that don't support WebP
  const isPng = src.toLowerCase().endsWith('.png');
  
  return (
    <picture>
      {isPng && (
        <source 
          srcSet={webpSrc} 
          type="image/webp" 
          sizes={sizes}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loadingValue}
        style={style}
        onClick={onClick}
        sizes={sizes}
      />
    </picture>
  );
};

export default OptimizedImage;
