
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface MetaHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  children?: React.ReactNode;
}

/**
 * Component for managing page metadata including title, description, canonical URLs,
 * and social sharing tags (OpenGraph and Twitter Cards)
 */
const MetaHead: React.FC<MetaHeadProps> = ({ 
  title, 
  description, 
  image = "/lovable-uploads/88f97631-50cd-493d-b68c-92e73cb443c7.png",
  type = "website",
  children 
}) => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;
  const siteTitle = title ? `${title} | Stellar Checkin` : 'Stellar Checkin - Digitale Check-in Lösung für Ferienwohnungen';
  const siteDescription = description || 'Automatisiere den gesamten Check-in-Prozess deiner Ferienimmobilie - Gästemeldung, Kurtaxe, Zusatzleistungen und mehr.';
  
  // Ensure image URL is absolute
  const imageUrl = image.startsWith('http') 
    ? image 
    : `${window.location.origin}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={currentUrl} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Stellar Checkin" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@stellar_checkin" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={imageUrl} />
      
      {children}
    </Helmet>
  );
};

export default MetaHead;
