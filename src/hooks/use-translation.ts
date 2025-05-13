
import { useLanguage } from '@/context/language';
import { translations } from '../translations';
import get from 'lodash.get';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string, params?: Record<string, string | ((text: string) => React.ReactNode)>) => {
    // Special handling for current language
    if (key === 'currentLanguage') {
      return language;
    }

    let value = get(translations[language], key);
    
    // If translation is missing, return the key as fallback
    if (!value) {
      console.warn(`Missing translation for key: ${key} in language: ${language}`);
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
