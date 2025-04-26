
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language, LanguageContextType } from '@/types/language';
import { getLanguageFromPath, getLocalizedPath } from '@/utils/languageUtils';

export const LanguageContext = createContext<LanguageContextType>({
  language: 'de',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('de');
  const location = useLocation();
  const navigate = useNavigate();
  
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

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
    
    const newPath = getLocalizedPath(location.pathname, newLanguage);
    navigate(newPath);
  };

  useEffect(() => {
    const urlLanguage = getLanguageFromPath(location.pathname);
    if (urlLanguage && urlLanguage !== language) {
      setLanguageState(urlLanguage);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', urlLanguage);
      }
    }
  }, [location.pathname, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
