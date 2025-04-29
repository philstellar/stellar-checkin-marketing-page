
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export interface MetaHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  structuredData?: Record<string, any>;
  preloadImages?: string[];
  disableSocialTags?: boolean;
}

export const MetaHead: React.FC<MetaHeadProps> = ({
  title,
  description,
  keywords,
  author = 'Stellar Checkin',
  canonical,
  image,
  type = 'website',
  structuredData,
  preloadImages = [],
  disableSocialTags = false,
}) => {
  const location = useLocation();
  const hostname = typeof window !== 'undefined' ? window.location.origin : '';
  const url = canonical || `${hostname}${location.pathname}`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      {!disableSocialTags && (
        <>
          <meta property="og:type" content={type} />
          {title && <meta property="og:title" content={title} />}
          {description && <meta property="og:description" content={description} />}
          <meta property="og:url" content={url} />
          {image && <meta property="og:image" content={image.startsWith('http') ? image : `${hostname}${image}`} />}
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          {title && <meta name="twitter:title" content={title} />}
          {description && <meta name="twitter:description" content={description} />}
          {image && <meta name="twitter:image" content={image.startsWith('http') ? image : `${hostname}${image}`} />}
        </>
      )}
      
      {/* Structured data for SEO */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preload critical images */}
      {preloadImages && preloadImages.length > 0 && (
        preloadImages.map((imgPath, index) => (
          <link 
            key={`preload-img-${index}`}
            rel="preload" 
            as="image" 
            href={imgPath} 
            fetchPriority="high"
          />
        ))
      )}
    </Helmet>
  );
};

// Default export for compatibility with existing imports
export default MetaHead;
