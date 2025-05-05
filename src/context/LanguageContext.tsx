
import React from 'react';
import { 
  LanguageProvider as OriginalLanguageProvider,
  useLanguage as originalUseLanguage,
  LanguageContext as OriginalLanguageContext
} from './language/LanguageContext';
import type { Language } from './language/types';

// Export the original context 
export const LanguageContext = OriginalLanguageContext;

// Export the original hook
export const useLanguage = originalUseLanguage;

// Create a proper wrapper component that directly uses the original provider
// This ensures React hooks are used in a valid React component context
export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  // Using the original provider component directly
  return <OriginalLanguageProvider>{children}</OriginalLanguageProvider>;
};

// Re-export the Language type
export type { Language };

export default LanguageContext;
