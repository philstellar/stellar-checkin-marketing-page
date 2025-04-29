
import React, { useEffect, useState } from 'react';
import { Schema } from './SchemaData';
import { useTranslation } from '@/hooks/use-translation';

interface FAQSchemaProps {
  faqKeys?: string[];
  namespace?: string;
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ faqKeys = [], namespace = 'faq' }) => {
  const { t } = useTranslation();
  const [faqItems, setFaqItems] = useState<any[]>([]);
  
  useEffect(() => {
    // If no specific keys provided, don't render
    if (faqKeys.length === 0) return;
    
    const items = faqKeys.map(key => {
      return {
        '@type': 'Question',
        name: t(`${namespace}.${key}.question`),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t(`${namespace}.${key}.answer`)
        }
      };
    });
    
    setFaqItems(items);
  }, [faqKeys, namespace, t]);
  
  // If no items, don't render anything
  if (faqItems.length === 0) return null;
  
  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: faqItems
  };
  
  return <Schema type="FAQPage" jsonLdData={faqSchema} />;
};

export default FAQSchema;
