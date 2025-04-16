
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'it';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

// Create a hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Create the provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get saved language from localStorage, default to 'en'
  const getSavedLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      return (saved as Language) || 'en';
    }
    return 'en';
  };
  
  const [language, setLanguage] = useState<Language>(getSavedLanguage());

  // Update language and save to localStorage
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
