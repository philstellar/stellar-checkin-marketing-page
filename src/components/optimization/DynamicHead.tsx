
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface DynamicHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const DynamicHead = ({ title, description, canonicalUrl }: DynamicHeadProps) => {
  const location = useLocation();
  
  useEffect(() => {
    // Dynamically update head elements for better SEO and performance
    if (title) {
      document.title = title;
    }
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }
    
    // Set canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    
    const url = canonicalUrl || `${window.location.origin}${location.pathname}`;
    canonicalLink.setAttribute('href', url);
    
  }, [title, description, canonicalUrl, location.pathname]);
  
  return null; // This component doesn't render anything
};

export default DynamicHead;
