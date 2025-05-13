
import * as React from 'react';
import type { LanguageContextType, LanguageProviderProps } from './types';

// Create the context with English as the only language
export const LanguageContext = React.createContext<LanguageContextType>({
  language: 'en',
});

// Custom hook to use the language context
export const useLanguage = () => React.useContext(LanguageContext);

// Language provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Always return English
  const language = 'en';

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};
