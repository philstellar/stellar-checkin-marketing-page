
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getLanguageFromPath, getLocalizedPath } from './utils';
import type { LanguageContextType, LanguageProviderProps, Language } from './types';

// Create the context with default values
export const LanguageContext = React.createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
});

// Custom hook to use the language context
export const useLanguage = () => React.useContext(LanguageContext);

// Language provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = React.useState<Language>('de');

  // Update language based on URL when location changes
  React.useEffect(() => {
    const pathLanguage = getLanguageFromPath(location.pathname);
    if (pathLanguage && pathLanguage !== language) {
      setLanguageState(pathLanguage);
    }
  }, [location.pathname, language]);

  // Custom language setter that also updates the URL
  const setLanguage = (newLanguage: Language) => {
    if (newLanguage !== language) {
      localStorage.setItem('lastLanguageChangeByPicker', 'true');
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
