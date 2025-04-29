
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLanguageFromPath, getLocalizedPath } from './language/utils';
import { Language, LanguageContextType, LanguageProviderProps } from './language/types';

// Create the context with default values
export const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
});

// Create a hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Create the provider component - ensure it's properly defined as a React functional component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
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
          return saved as Language;
        }
      }
      
      return 'de';
    };
    
    setLanguageState(initializeLanguage());
  }, [location.pathname]);

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
