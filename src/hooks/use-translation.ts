
import { useLanguage } from '@/context/LanguageContext';

// English translations (minimal set needed for the application)
const translations = {
  navigation: {
    home: "Home",
    features: "Check-in",
    pricing: "Pricing",
    contact: "Contact", 
    register: "Register Now",
    legal: "Legal",
    imprint: "Imprint",
    privacyPolicy: "Privacy Policy", 
    termsAndConditions: "Terms and Conditions",
    insurance: "Insurance",
    trustBadge: "Trust Badge",
    aboutStellar: "About Us",
    aboutUs: "About Us",
    successStories: "Success Stories",
    faq: "FAQ",
    solutions: "Solutions",
    pricingAnchor: "pricing",
    contactAnchor: "contact"
  },
  footer: {
    tagline: 'The all-in-one solution for digital guest management and automated check-in for holiday homes, hotels and B&Bs.',
    copyright: 'All rights reserved.',
    legal: 'Legal',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    terms: 'Terms and Conditions',
    sitemap: 'Sitemap'
  },
  hero: {
    headline: "The all-in-one digital check-in solution for vacation rentals",
    subheadline: "Less work, more revenue – and a check-in that delights your guests and protects your properties.",
    cta: "Register Now",
    tagline: "Digital. Efficient. Guest-focused."
  },
  languageSuggestion: {
    title: "Language Selection",
    description: "This site is available in English only.",
    stay: "OK",
    switch: "Continue"
  }
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    // Split the key by dots to navigate the translations object
    const keys = key.split('.');
    let value: any = translations;
    
    // Navigate through the keys
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Missing translation for key: ${key}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  return { t, currentLanguage: language };
};
