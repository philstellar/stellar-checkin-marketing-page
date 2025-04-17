
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

  // Update language, save to localStorage, and update URL
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
    
    // Update URL if needed
    const currentLanguage = getLanguageFromPath(location.pathname);
    
    if (currentLanguage) {
      // Replace existing language prefix
      const newPath = location.pathname.replace(`/${currentLanguage}`, `/${newLanguage}`);
      navigate(newPath);
    } else {
      // Path has no language prefix, add it
      // For root path, just add the language
      if (location.pathname === '/') {
        navigate(`/${newLanguage}`);
      } else {
        // For other paths, add language prefix
        navigate(`/${newLanguage}${location.pathname}`);
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
  }, [location.pathname, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
