
import React from 'react';
import { useLocation } from 'react-router-dom';
import SchemaData from './SchemaData';

interface SchemaProviderProps {
  children: React.ReactNode;
}

export const SchemaProvider: React.FC<SchemaProviderProps> = ({ children }) => {
  const location = useLocation();
  
  // Function to extract FAQ data when on FAQ-related pages
  const getFaqSchemaData = () => {
    // FAQ schema will only be returned on specific pages
    if (location.pathname.includes('faq') || 
        location.pathname.includes('trust-badge') || 
        location.pathname.includes('versicherung') || 
        location.pathname.includes('insurance') ||
        location.pathname.includes('seguro') ||
        location.pathname.includes('assicurazione')) {
      
      return {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was ist Stellar Checkin?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Stellar Checkin ist eine digitale Check-in Lösung für Ferienwohnungen, die den gesamten Check-in-Prozess automatisiert - von der Gästemeldung über die Kurtaxe bis hin zu Zusatzleistungen.'
            }
          },
          {
            '@type': 'Question',
            name: 'Was ist das Stellar Trust Badge?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Das Stellar Trust Badge ist ein Vertrauenssymbol, das Vermieter auf ihrer Website einbinden können, um Gästen zu signalisieren, dass ihre Unterkunft verifiziert ist.'
            }
          },
          {
            '@type': 'Question',
            name: 'Wie funktioniert die Versicherung?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Die Stellar Versicherung schützt Vermieter vor Schäden und Umsatzausfällen. Sie können zwischen verschiedenen Paketen wählen, die auf Ihre individuellen Bedürfnisse zugeschnitten sind.'
            }
          }
        ]
      };
    }
    return null;
  };

  // Get FAQ schema data if on relevant pages
  const faqData = getFaqSchemaData();

  return (
    <>
      <SchemaData>
        {faqData && <SchemaData pageType="FAQPage" pageData={faqData} />}
      </SchemaData>
      {children}
    </>
  );
};

export default SchemaProvider;
