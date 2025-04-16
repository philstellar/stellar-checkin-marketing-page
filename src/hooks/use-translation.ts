
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import get from 'lodash.get';

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    return get(translations[language], key) || get(translations.en, key) || key;
  };
  
  return { t, language };
}
