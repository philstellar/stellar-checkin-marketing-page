
import React from 'react';
import { LanguageProvider as OriginalProvider } from './language/LanguageContext';
import { useLanguage as originalUseLanguage } from './language/LanguageContext';
import { LanguageContext as OriginalLanguageContext } from './language/LanguageContext';
import type { Language } from './language/types';

// Export the context and hook directly
export const LanguageContext = OriginalLanguageContext;
export const useLanguage = originalUseLanguage;

// Export a simple wrapper component that directly uses the original provider
export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  // No dynamic require here - use direct import instead
  return <OriginalProvider>{children}</OriginalProvider>;
};

// Re-export the Language type
export type { Language };

export default LanguageContext;
