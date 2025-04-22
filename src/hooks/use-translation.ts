
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { TranslationKey, translations } from '../translations';
import get from 'lodash.get';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string, params?: Record<string, string | ((text: string) => React.ReactNode)>) => {
    let value = get(translations[language], key);
    
    if (process.env.NODE_ENV === 'development') {
      console.info(`Translation result for ${key}: "${value}"`);
    }
    
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
