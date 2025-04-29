
import { useEffect } from 'react';

const ResourceHints = () => {
  useEffect(() => {
    // Add preconnect for important third-party domains
    const domains = [
      'https://fonts.gstatic.com',
      'https://images.unsplash.com'
    ];
    
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
      
      // Add DNS prefetch as fallback
      const dnsLink = document.createElement('link');
      dnsLink.rel = 'dns-prefetch';
      dnsLink.href = domain;
      document.head.appendChild(dnsLink);
    });
  }, []);
  
  return null; // This component doesn't render anything
};

export default ResourceHints;
