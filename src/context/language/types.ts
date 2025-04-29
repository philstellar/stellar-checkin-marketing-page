
import { ReactNode } from 'react';

// Define available languages
export type Language = 'de' | 'en' | 'it' | 'es';

// Define the context type
export type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export type LanguageProviderProps = {
  children: ReactNode;
};
