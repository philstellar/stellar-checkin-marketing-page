
import React from 'react';
import { useLocation } from 'react-router-dom';

interface SchemaProps {
  type: string;
  jsonLdData: Record<string, any>;
}

export const Schema: React.FC<SchemaProps> = ({ type, jsonLdData }) => {
  // Create properly formatted JSON-LD script
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': type,
    ...jsonLdData,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
    />
  );
};

interface SchemaDataProps {
  pageType?: string;
  pageData?: Record<string, any>;
  children?: React.ReactNode;
}

const SchemaData: React.FC<SchemaDataProps> = ({ pageType, pageData, children }) => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;
  
  // Organization schema data
  const organizationSchema = {
    name: 'Stellar Tourism Innovations GmbH',
    legalName: 'Stellar Tourism Innovations GmbH',
    url: 'https://stellar-checkin.com',
    logo: 'https://stellar-checkin.com/lovable-uploads/b1071c9d-b132-4a47-ab49-b3c6f6b61ed0.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Michaelkirchstraße 14-15',
      addressLocality: 'Berlin',
      postalCode: '10179',
      addressCountry: 'DE'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+4930417384870',
      email: 'hello@stellar-trust.com',
      contactType: 'customer service'
    },
    sameAs: [
      'https://www.linkedin.com/company/stellar-trust/',
      'https://www.instagram.com/stellar_checkin/'
    ]
  };

  // Product/Service schema data
  const productSchema = {
    name: 'Stellar Checkin',
    description: 'Digitale Check-in Lösung für Ferienwohnungen - Automatisiere den gesamten Check-in-Prozess deiner Ferienimmobilie',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '0',
      highPrice: '39',
      offerCount: '3'
    },
    provider: {
      '@type': 'Organization',
      name: 'Stellar Tourism Innovations GmbH'
    }
  };

  // Website schema
  const websiteSchema = {
    name: 'Stellar Checkin - Digitale Check-in Lösung für Ferienwohnungen',
    url: 'https://stellar-checkin.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://stellar-checkin.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    inLanguage: ['de', 'en', 'es', 'it']
  };
  
  // Local Business schema
  const localBusinessSchema = {
    ...organizationSchema,
    '@type': 'LocalBusiness',
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '€€',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.51128',
      longitude: '13.41089'
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '52.51128',
        longitude: '13.41089'
      },
      geoRadius: '2000'
    }
  };

  // Determine breadcrumb path based on current location
  const getBreadcrumbItems = () => {
    const path = location.pathname;
    const pathSegments = path.split('/').filter(segment => segment);
    const breadcrumbItems = [];
    
    // Add home as first item
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: window.location.origin
    });
    
    let currentPath = '';
    
    // Add intermediate paths
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Skip language code if it's the first segment
      if (index === 0 && ['de', 'en', 'es', 'it'].includes(segment)) {
        return;
      }
      
      let name = '';
      
      // Humanize the segment for display
      switch(segment) {
        case 'versicherung':
          name = 'Versicherung';
          break;
        case 'trust-badge':
          name = 'Trust Badge';
          break;
        case 'insurance':
          name = 'Insurance';
          break;
        case 'impressum':
          name = 'Impressum';
          break;
        case 'datenschutz':
          name = 'Datenschutz';
          break;
        case 'agb':
          name = 'AGB';
          break;
        case 'ueber-uns':
          name = 'Über Uns';
          break;
        case 'about-us':
          name = 'About Us';
          break;
        case 'chi-siamo':
          name = 'Chi Siamo';
          break;
        case 'sobre-nosotros':
          name = 'Sobre Nosotros';
          break;
        default:
          name = segment.charAt(0).toUpperCase() + segment.slice(1);
      }
      
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: breadcrumbItems.length + 1,
        name: name,
        item: window.location.origin + currentPath
      });
    });
    
    return breadcrumbItems;
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: getBreadcrumbItems()
  };

  return (
    <>
      {/* Always include Organization schema */}
      <Schema type="Organization" jsonLdData={organizationSchema} />
      
      {/* Always include Website schema */}
      <Schema type="WebSite" jsonLdData={websiteSchema} />
      
      {/* Include BreadcrumbList for every page except homepage */}
      {location.pathname !== '/' && location.pathname !== '/de' && 
        location.pathname !== '/en' && location.pathname !== '/es' && 
        location.pathname !== '/it' && (
        <Schema type="BreadcrumbList" jsonLdData={breadcrumbSchema} />
      )}
      
      {/* Include Product schema on homepage and specific product pages */}
      {(location.pathname === '/' || 
        location.pathname === '/de' || 
        location.pathname === '/en' || 
        location.pathname === '/es' || 
        location.pathname === '/it' || 
        location.pathname.includes('versicherung') ||
        location.pathname.includes('insurance') ||
        location.pathname.includes('seguro') ||
        location.pathname.includes('assicurazione') ||
        location.pathname.includes('trust-badge')) && (
        <Schema type="Service" jsonLdData={productSchema} />
      )}
      
      {/* Include LocalBusiness schema on specific pages */}
      {(location.pathname === '/de/impressum' || 
        location.pathname === '/en/impressum' || 
        location.pathname === '/it/impressum' || 
        location.pathname === '/es/impressum' ||
        location.pathname === '/de/ueber-uns' ||
        location.pathname === '/en/about-us' ||
        location.pathname === '/it/chi-siamo' ||
        location.pathname === '/es/sobre-nosotros') && (
        <Schema type="LocalBusiness" jsonLdData={localBusinessSchema} />
      )}
      
      {/* Custom schema for specific page types */}
      {pageType && pageData && (
        <Schema type={pageType} jsonLdData={pageData} />
      )}
      
      {children}
    </>
  );
};

export default SchemaData;
