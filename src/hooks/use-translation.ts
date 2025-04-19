
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { TranslationKey, translations } from '../translations';
import get from 'lodash.get';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string, params?: Record<string, string>) => {
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
        value = value.replace(`{{${param}}}`, replacement);
      });
    }
    
    return value;
  };
  
  return { t, currentLanguage: language };
};
