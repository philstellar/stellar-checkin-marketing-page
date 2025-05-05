
import React from 'react';
import { 
  LanguageProvider as OriginalProvider,
  useLanguage as originalUseLanguage,
  LanguageContext as OriginalContext
} from './language/LanguageContext';
import type { Language } from './language/types';

// Export the original context
export const LanguageContext = OriginalContext;

// Export the original hook
export const useLanguage = originalUseLanguage;

// Create a proper wrapper component
export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <OriginalProvider>{children}</OriginalProvider>;
};

// Re-export the Language type
export type { Language };

export default LanguageContext;
