
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLanguageFromPath, getLocalizedPath } from './utils';
import { LanguageContextType, LanguageProviderProps, Language } from './types';

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>('de');

  // Update language based on URL when location changes
  useEffect(() => {
    const pathLanguage = getLanguageFromPath(location.pathname);
    if (pathLanguage && pathLanguage !== language) {
      setLanguageState(pathLanguage);
    }
  }, [location.pathname, language]);

  // Custom language setter that also updates the URL
  const setLanguage = (newLanguage: Language) => {
    if (newLanguage !== language) {
      setLanguageState(newLanguage);
      const newPath = getLocalizedPath(location.pathname, newLanguage);
      navigate(newPath);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Export the context for direct use if needed
export { LanguageContext };
export type { Language };
