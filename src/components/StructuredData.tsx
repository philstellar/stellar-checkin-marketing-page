
import { useTranslation } from "@/hooks/use-translation";

interface StructuredDataProps {
  type: 'product' | 'organization' | 'faq';
  faqData?: {
    questions: { question: string; answer: string; }[];
  };
}

export const StructuredData = ({ type, faqData }: StructuredDataProps) => {
  const { t } = useTranslation();

  const getProductData = () => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Stellar Checkin",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "124",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": 3,
      "lowPrice": 5,
      "highPrice": 9,
      "priceCurrency": "EUR",
      "offers": [
        {
          "@type": "Offer",
          "name": t('pricing.basic.title'),
          "price": t('pricing.basic.price'),
          "priceCurrency": "EUR",
          "description": [
            t('pricing.basic.features.0'),
            t('pricing.basic.features.1'),
            t('pricing.basic.features.2')
          ].join(", ")
        },
        {
          "@type": "Offer",
          "name": t('pricing.advanced.title'),
          "price": t('pricing.advanced.price'),
          "priceCurrency": "EUR",
          "description": [
            t('pricing.advanced.features.0'),
            t('pricing.advanced.features.1'),
            t('pricing.advanced.features.2')
          ].join(", ")
        }
      ]
    },
    "description": t('hero.subheadline'),
    "image": "https://stellar-checkin.com/lovable-uploads/ff8a3a50-21d0-4e53-98f4-3265e363fe55.png",
    "url": "https://stellar-checkin.com",
    "featureList": [
      t('features.title1'),
      t('features.title2'),
      t('features.title3')
    ]
  });

  const getOrganizationData = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stellar Checkin",
    "url": "https://stellar-checkin.com",
    "logo": "https://stellar-checkin.com/lovable-uploads/b1071c9d-b132-4a47-ab49-b3c6f6b61ed0.png",
    "description": t('stellar.description'),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "124",
      "bestRating": "5",
      "worstRating": "1"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE",
      "addressLocality": "Berlin",
      "postalCode": "10115",
      "streetAddress": "Chausseestraße 86"
    }
  });

  const getFAQData = () => {
    if (!faqData) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.questions.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      }))
    };
  };

  const structuredData = type === 'faq' 
    ? getFAQData()
    : type === 'product' 
      ? getProductData() 
      : getOrganizationData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
