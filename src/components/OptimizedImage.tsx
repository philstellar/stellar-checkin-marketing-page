
import React, { useState } from 'react';

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
  const [imgError, setImgError] = useState(false);
  
  // Handle image loading errors
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setImgError(true);
  };

  // Convert priority to loading="eager" instead of using fetchPriority which causes a warning
  const loadingValue = priority ? 'eager' : loading;
  
  // For priority images (likely LCP candidates), apply optimized styles
  const imageStyle: React.CSSProperties = {
    ...style,
    display: priority ? 'block' : undefined, // Prevent layout shifts
  };

  // Use webp version if available (assuming .png or .jpg original)
  const srcWebp = src.replace(/\.(png|jpg|jpeg)$/, '.webp');
  const isWebpAvailable = srcWebp !== src;

  // If image failed to load, render a fallback
  if (imgError) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center`} 
        style={{ width: width || 100, height: height || 100, ...style }}
      >
        <span className="text-gray-400 text-sm">{alt}</span>
      </div>
    );
  }

  return (
    <>
      {isWebpAvailable ? (
        <picture>
          <source srcSet={srcWebp} type="image/webp" />
          <source srcSet={src} type={`image/${src.split('.').pop()}`} />
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
            onError={handleError}
            decoding={priority ? "sync" : "async"} // Use sync decoding for priority images
          />
        </picture>
      ) : (
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
          onError={handleError}
          decoding={priority ? "sync" : "async"} // Use sync decoding for priority images
        />
      )}
    </>
  );
};

export default OptimizedImage;
