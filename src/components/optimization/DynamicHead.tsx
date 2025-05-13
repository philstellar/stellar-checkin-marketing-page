
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface DynamicHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const DynamicHead = ({ title, description, canonicalUrl }: DynamicHeadProps) => {
  const location = useLocation();
  const { language } = useLanguage();
  
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
    
    // Set alternate language URLs
    const languages = ['en', 'de', 'it', 'es'];
    languages.forEach(lang => {
      let alternateLink = document.querySelector(`link[hreflang="${lang}"]`);
      if (!alternateLink) {
        alternateLink = document.createElement('link');
        alternateLink.setAttribute('rel', 'alternate');
        alternateLink.setAttribute('hreflang', lang);
        document.head.appendChild(alternateLink);
      }
      
      // Create the alternate URL based on the current path
      const currentPath = location.pathname.split('/').slice(2).join('/');
      const alternatePath = `/${lang}/${currentPath}`;
      alternateLink.setAttribute('href', `${window.location.origin}${alternatePath}`);
    });
    
  }, [title, description, canonicalUrl, location.pathname, language]);
  
  return null; // This component doesn't render anything
};

export default DynamicHead;
