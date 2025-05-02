
import React, { useState, useContext } from 'react';

// Import directly from the actual context file
import { 
  LanguageContext as OriginalContext,
  useLanguage 
} from './language/LanguageContext';

// Import the original provider separately
import { LanguageProvider as OriginalProvider } from './language/LanguageContext';

// Import type separately for proper re-export
import type { Language } from './language/types';

// Re-export the context
const LanguageContext = OriginalContext;

// Create a proper React functional component wrapper
const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  return <OriginalProvider>{children}</OriginalProvider>;
};

// Export values
export { 
  LanguageContext, 
  LanguageProvider, 
  useLanguage
};

// Export type properly
export type { Language };

export default LanguageContext;
