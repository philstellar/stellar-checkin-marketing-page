
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import get from 'lodash.get';
import { useLocation } from 'react-router-dom';

export function useTranslation() {
  const { language } = useLanguage();
  const location = useLocation();
  
  // Extract language from URL path if possible
  const getLanguageFromPath = (): string => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 0) {
      const firstPart = pathParts[0];
      if (['en', 'es', 'it'].includes(firstPart)) {
        return firstPart;
      }
    }
    return language;
  };
  
  const currentLanguage = getLanguageFromPath();
  
  const t = (key: string) => {
    return get(translations[currentLanguage], key) || get(translations.en, key) || key;
  };
  
  return { t, language: currentLanguage };
}
