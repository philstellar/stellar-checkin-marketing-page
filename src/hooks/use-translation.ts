
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../translations';
import get from 'lodash.get';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string, params?: Record<string, string | ((text: string) => React.ReactNode)>) => {
    // Special handling for current language
    if (key === 'currentLanguage') {
      return language;
    }

    let value = get(translations[language], key);
    
    // Enhanced debug output in development
    if (process.env.NODE_ENV === 'development') {
      // Additional debug info for insurance keys to help debug conflicts
      if (key.startsWith('insurance.') || key.startsWith('insuranceDetail.')) {
        console.debug(`[Translation] Key: "${key}", Language: "${language}", Result: "${value}"`);
      }
      
      // Add debugging for features translations
      if (key.startsWith('features.')) {
        console.debug(`[Features Translation] Key: "${key}", Language: "${language}", Result: "${value}"`);
      }
      
      // If translation is missing or shows the key itself
      if (!value || value === key) {
        console.warn(`[Translation WARNING] Missing translation for key: "${key}" in language "${language}"`);
        
        // Output parent keys to help find structure issues
        const keyParts = key.split('.');
        let currentPath = '';
        for (let i = 0; i < keyParts.length; i++) {
          currentPath = currentPath ? `${currentPath}.${keyParts[i]}` : keyParts[i];
          const currentValue = get(translations[language], currentPath);
          console.debug(`Path "${currentPath}" in ${language}:`, currentValue);
        }
        
        // In development mode, provide a more visible indicator for missing translations
        if (!value) {
          return `[Missing: ${key}]`;
        }
      }
    }
    
    // If translation is missing, return the key as fallback
    if (!value) {
      return key;
    }
    
    // Replace parameters in the translation string if provided
    if (params) {
      Object.entries(params).forEach(([param, replacement]) => {
        if (typeof replacement === 'function') {
          // Handle function-based replacements (for links)
          const matchRegex = new RegExp(`<${param}>(.+?)</${param}>`, 'g');
          value = value.replace(matchRegex, (match, text) => replacement(text));
        } else {
          // Handle string replacements
          value = value.replace(`{{${param}}}`, replacement);
        }
      });
    }
    
    return value;
  };
  
  return { t, currentLanguage: language };
};
