
import * as React from 'react';

// Re-export from the new location to handle any cached imports
import { 
  LanguageContext, 
  LanguageProvider, 
  useLanguage
} from './language/LanguageContext';

// Import type separately for proper re-export
import type { Language } from './language/types';

// Export values
export { 
  LanguageContext, 
  LanguageProvider, 
  useLanguage
};

// Export type properly
export type { Language };

export default LanguageContext;
