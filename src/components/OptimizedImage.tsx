
// Fix the OptimizedImage component to resolve potential issues with priority attribute
// and ensure proper image loading behavior

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
  onClick
}) => {
  // Convert priority to loading="eager" instead of using fetchPriority which causes a warning
  const loadingValue = priority ? 'eager' : loading;

  return (
    <picture>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loadingValue}
        style={style}
        onClick={onClick}
      />
    </picture>
  );
};

export default OptimizedImage;
