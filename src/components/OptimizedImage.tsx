
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
  
  // Add fetchpriority for important images - using camelCase for React
  const fetchPriority = priority ? "high" : undefined;
  
  // For priority images (likely LCP candidates), apply optimized styles
  const imageStyle: React.CSSProperties = {
    ...style,
    display: priority ? 'block' : undefined, // Prevent layout shifts
    contain: priority ? 'paint' : undefined, // Optimize rendering
  };

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
      fetchPriority={fetchPriority}
      decoding={priority ? "sync" : "async"} // Use sync decoding for priority images
    />
  );
};

export default OptimizedImage;
