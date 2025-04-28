
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { TranslationKey, translations } from '../translations';
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
        
        // Show detailed debugging for insurance keys
        if (key.startsWith('insurance.')) {
          const simpleValue = get(translations[language], key);
          console.debug(`[Insurance] Simple key "${key}" in "${language}":`, simpleValue);
        }
        
        if (key.startsWith('insuranceDetail.')) {
          const detailedValue = get(translations[language], key);
          console.debug(`[InsuranceDetail] Detailed key "${key}" in "${language}":`, detailedValue);
          
          // Also check if there's a matching simple key
          const simpleKey = key.replace('insuranceDetail.', 'insurance.');
          const simpleValue = get(translations[language], simpleKey);
          console.debug(`[InsuranceDetail] Matching simple key "${simpleKey}" value:`, simpleValue);
        }
      }
      
      // If translation is missing or shows the key itself
      if (!value || value === key) {
        console.warn(`[Translation WARNING] Missing translation for key: "${key}" in language "${language}"`);
        // Log the structure to help debug
        console.debug(`Translation value type: ${typeof value}`);
        console.debug(`Available paths in ${language}:`, Object.keys(translations[language]));
        
        // Output parent keys to help find structure issues
        const keyParts = key.split('.');
        let currentPath = '';
        for (let i = 0; i < keyParts.length; i++) {
          currentPath = currentPath ? `${currentPath}.${keyParts[i]}` : keyParts[i];
          const currentValue = get(translations[language], currentPath);
          console.debug(`Path "${currentPath}" in ${language}:`, currentValue);
          
          if (currentValue && typeof currentValue === 'object') {
            console.debug(`Available keys at "${currentPath}":`, Object.keys(currentValue));
          }
        }
        
        // Try to find the path in other languages to help debug
        const otherLanguages = Object.keys(translations).filter(lang => lang !== language);
        for (const lang of otherLanguages) {
          const valueInOtherLang = get(translations[lang], key);
          if (valueInOtherLang && valueInOtherLang !== key) {
            console.debug(`[Translation DEBUG] Key "${key}" exists in "${lang}" with value: "${valueInOtherLang}"`);
          }
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
