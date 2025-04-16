
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
const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
});

// Create a hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Helper function to extract language from path
const getLanguageFromPath = (path: string): Language | null => {
  const parts = path.split('/').filter(Boolean);
  const firstPart = parts[0];
  
  if (firstPart === 'en' || firstPart === 'es' || firstPart === 'it') {
    return firstPart;
  }
  
  return null;
};

// Create the provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Try to get language from URL, then localStorage, default to 'de'
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
  
  const [language, setLanguageState] = useState<Language>(initializeLanguage());

  // Update language, save to localStorage, and update URL
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
    
    // Update URL if needed
    const currentLanguage = getLanguageFromPath(location.pathname);
    const pathWithoutLanguage = location.pathname
      .split('/')
      .filter((part, index) => index !== 1 || (part !== 'en' && part !== 'es' && part !== 'it'))
      .join('/');
    
    if (newLanguage === 'de') {
      // For German, remove language prefix
      if (currentLanguage) {
        navigate(pathWithoutLanguage);
      }
    } else {
      // For other languages, add/update language prefix
      if (currentLanguage) {
        // Replace existing language prefix
        const newPath = location.pathname.replace(`/${currentLanguage}`, `/${newLanguage}`);
        navigate(newPath);
      } else {
        // Add language prefix
        const parts = pathWithoutLanguage.split('/').filter(Boolean);
        const newPath = `/${newLanguage}${pathWithoutLanguage}`;
        navigate(newPath);
      }
    }
  };

  // Effect to update language when URL changes
  useEffect(() => {
    const urlLanguage = getLanguageFromPath(location.pathname);
    if (urlLanguage && urlLanguage !== language) {
      setLanguageState(urlLanguage);
      localStorage.setItem('language', urlLanguage);
    }
  }, [location.pathname]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
