
import React from 'react';

// Import directly from the original context file
import { 
  LanguageContext as OriginalLanguageContext,
  useLanguage as originalUseLanguage 
} from './language/LanguageContext';

// Import type separately for proper re-export
import type { Language } from './language/types';

// Re-export the context and hook
export const LanguageContext = OriginalLanguageContext;
export const useLanguage = originalUseLanguage;

// Create a proper React functional component wrapper
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Directly importing the component instead of wrapping it
  const { LanguageProvider: OriginalLanguageProvider } = require('./language/LanguageContext');
  return <OriginalLanguageProvider>{children}</OriginalLanguageProvider>;
};

// Export type properly
export type { Language };

export default LanguageContext;
