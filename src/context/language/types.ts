
import { ReactNode } from 'react';

// Define available language
export type Language = 'en';

// Define the context type
export type LanguageContextType = {
  language: Language;
};

export type LanguageProviderProps = {
  children: ReactNode;
};
