import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define available languages
export type Language = 'de' | 'en' | 'it' | 'es';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

// Create the context with default values
export const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
});

// Create a hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Helper function to extract language from path
const getLanguageFromPath = (path: string): Language | null => {
  const parts = path.split('/').filter(Boolean);
  const firstPart = parts[0];
  
  if (firstPart === 'de' || firstPart === 'en' || firstPart === 'es' || firstPart === 'it') {
    return firstPart;
  }
  
  return null;
};

// Language-specific path mapping
const pathMappings: Record<string, Record<Language, string>> = {
  'versicherung': {
    'de': 'versicherung',
    'en': 'insurance',
    'it': 'assicurazione',
    'es': 'seguro'
  },
  'insurance': {
    'de': 'versicherung',
    'en': 'insurance',
    'it': 'assicurazione',
    'es': 'seguro'
  },
  'assicurazione': {
    'de': 'versicherung',
    'en': 'insurance',
    'it': 'assicurazione',
    'es': 'seguro'
  },
  'seguro': {
    'de': 'versicherung',
    'en': 'insurance',
    'it': 'assicurazione',
    'es': 'seguro'
  },
  'trust-badge': {
    'de': 'trust-badge',
    'en': 'trust-badge',
    'it': 'trust-badge',
    'es': 'trust-badge'
  },
  'impressum': {
    'de': 'impressum',
    'en': 'impressum',
    'it': 'impressum',
    'es': 'impressum'
  },
  'datenschutz': {
    'de': 'datenschutz',
    'en': 'datenschutz',
    'it': 'datenschutz',
    'es': 'datenschutz'
  },
  'agb': {
    'de': 'agb',
    'en': 'agb',
    'it': 'agb',
    'es': 'agb'
  },
  'brevo': {
    'de': 'brevo',
    'en': 'brevo',
    'it': 'brevo',
    'es': 'brevo'
  },
  'home': {
    'de': 'home',
    'en': 'home',
    'it': 'home',
    'es': 'home'
  },
  'ueber-uns': {
    'de': 'ueber-uns',
    'en': 'ueber-uns',
    'it': 'ueber-uns',
    'es': 'ueber-uns'
  },
  'erfolgsgeschichten': {
    'de': 'erfolgsgeschichten',
    'en': 'erfolgsgeschichten',
    'it': 'erfolgsgeschichten',
    'es': 'erfolgsgeschichten'
  },
  'faq': {
    'de': 'faq',
    'en': 'faq',
    'it': 'faq',
    'es': 'faq'
  }
};

// Create the provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize with default language
  const [language, setLanguageState] = useState<Language>('de');
  
  // Get router hooks safely inside the component
  const location = useLocation();
  const navigate = useNavigate();
  
  // Initialize language on mount, considering URL and localStorage
  useEffect(() => {
    const initializeLanguage = (): Language => {
      const urlLanguage = getLanguageFromPath(location.pathname);
      
      if (urlLanguage) {
        return urlLanguage;
      }
      
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('language');
        if (saved === 'de' || saved === 'en' || saved === 'es' || saved === 'it') {
          return saved;
        }
      }
      
      return 'de';
    };
    
    setLanguageState(initializeLanguage());
  }, [location.pathname]);

  // Maps current path to localized path
  const getLocalizedPath = (currentPath: string, newLanguage: Language): string => {
    // Extract current language and path components
    const pathParts = currentPath.split('/').filter(Boolean);
    const currentLanguage = getLanguageFromPath(currentPath);
    
    if (!currentLanguage || pathParts.length <= 1) {
      // If no language in path or just language with no page, return simple language path
      return `/${newLanguage}`;
    }
    
    // Get the page path (after language)
    const pagePath = pathParts[1];
    const restOfPath = pathParts.slice(2).join('/');
    
    // Check if this page has language-specific mappings
    if (pathMappings[pagePath] && pathMappings[pagePath][newLanguage]) {
      const localizedPage = pathMappings[pagePath][newLanguage];
      return restOfPath ? `/${newLanguage}/${localizedPage}/${restOfPath}` : `/${newLanguage}/${localizedPage}`;
    }
    
    // If no mapping exists, keep the same page name
    return restOfPath ? `/${newLanguage}/${pagePath}/${restOfPath}` : `/${newLanguage}/${pagePath}`;
  };

  // Update language, save to localStorage, and update URL
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
    
    // Update URL based on current path
    const newPath = getLocalizedPath(location.pathname, newLanguage);
    navigate(newPath);
  };

  // Effect to update language when URL changes
  useEffect(() => {
    const urlLanguage = getLanguageFromPath(location.pathname);
    if (urlLanguage && urlLanguage !== language) {
      setLanguageState(urlLanguage);
      localStorage.setItem('language', urlLanguage);
    }
  }, [location.pathname, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
