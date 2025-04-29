
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '@/hooks/use-translation';

interface MetaHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  structuredData?: Record<string, any>;
}

const MetaHead: React.FC<MetaHeadProps> = ({ 
  title, 
  description, 
  image = '/lovable-uploads/88f97631-50cd-493d-b68c-92e73cb443c7.png',
  type = 'website',
  structuredData 
}) => {
  const location = useLocation();
  const { t, currentLanguage } = useTranslation();
  
  // Default title and description if not provided
  const pageTitle = title || t('site.homepage.title');
  const pageDescription = description || t('site.homepage.description');
  
  // Create absolute URL for the image
  const absoluteImageUrl = image.startsWith('http') 
    ? image 
    : `${window.location.origin}${image}`;
  
  // Create canonical URL
  const canonicalUrl = `${window.location.origin}${location.pathname}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={currentLanguage === 'de' ? 'de_DE' : 
                                          currentLanguage === 'en' ? 'en_US' : 
                                          currentLanguage === 'it' ? 'it_IT' : 'es_ES'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaHead;
