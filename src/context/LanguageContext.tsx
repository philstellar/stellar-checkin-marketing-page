
import React from 'react';

// Import directly from the actual context file
import { 
  LanguageContext as OriginalLanguageContext,
  LanguageProvider as OriginalLanguageProvider,
  useLanguage as originalUseLanguage 
} from './language/LanguageContext';

// Import type separately for proper re-export
import type { Language } from './language/types';

// Re-export the context and hook
export const LanguageContext = OriginalLanguageContext;
export const useLanguage = originalUseLanguage;

// Create a proper React functional component wrapper
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <OriginalLanguageProvider>{children}</OriginalLanguageProvider>;
};

// Export type properly
export type { Language };

export default LanguageContext;
