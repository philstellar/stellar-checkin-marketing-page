
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
    
    // If value is not found or not a string, return the key or a default value
    if (!value) {
      return key;
    }
    
    // If value is an object instead of a string, return a string representation
    if (typeof value === 'object') {
      console.warn(`Translation for key "${key}" returned an object instead of a string`);
      return key.split('.').pop() || key; // Return the last part of the key as fallback
    }
    
    // Replace parameters in the translation string if provided
    if (params && typeof value === 'string') {
      Object.entries(params).forEach(([param, replacement]) => {
        value = value.replace(`{{${param}}}`, replacement);
      });
    }
    
    return value;
  };
  
  return { t, currentLanguage: language };
};
