
import * as React from 'react';

// Import directly from the actual context file
import { 
  LanguageContext, 
  LanguageProvider as OriginalLanguageProvider, 
  useLanguage 
} from './language/LanguageContext';

// Import type separately for proper re-export
import type { Language } from './language/types';

// Create a wrapper component instead of just re-exporting
const LanguageProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <OriginalLanguageProvider>{children}</OriginalLanguageProvider>;
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
