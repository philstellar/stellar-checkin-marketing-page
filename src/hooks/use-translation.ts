
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { TranslationKey, translations } from '../translations';
import get from 'lodash.get';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string) => {
    const value = get(translations[language], key);
    
    if (process.env.NODE_ENV === 'development') {
      console.info(`Translation result for ${key}: "${value}"`);
    }
    
    if (!value) {
      return key;
    }
    
    return value;
  };
  
  return { t, currentLanguage: language };
};
