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
  // Convert priority to loading="eager" 
  const loadingValue = priority ? 'eager' : loading;

  // For priority images (likely LCP candidates), apply optimized styles
  const imageStyle: React.CSSProperties = {
    ...style,
    display: 'block',
    // Prevent layout shifts
    objectFit: 'contain'
  };
  return <img src={src} alt={alt} width={width} height={height} loading={loadingValue} style={imageStyle} onClick={onClick} sizes={sizes} decoding={priority ? "sync" : "async"} // Use sync decoding for priority images
  className="object-scale-down" />;
};
export default OptimizedImage;