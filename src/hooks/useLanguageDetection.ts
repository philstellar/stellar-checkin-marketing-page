
import { useEffect, useState } from 'react';
import { Language } from '@/context/LanguageContext';
import { useLocation } from 'react-router-dom';

type SupportedLanguages = Language | 'fr';

const SUPPORTED_LANGUAGES: SupportedLanguages[] = ['en', 'de', 'fr', 'es'];

export const useLanguageDetection = () => {
  const [shouldShowPopup, setShouldShowPopup] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguages | null>(null);
  const location = useLocation();

  const getBrowserLanguage = (): SupportedLanguages | null => {
    const fullLang = navigator.language.toLowerCase();
    const shortLang = fullLang.split('-')[0] as SupportedLanguages;
    
    return SUPPORTED_LANGUAGES.includes(shortLang) ? shortLang : null;
  };

  const getCurrentPathLanguage = (): SupportedLanguages | null => {
    const pathParts = location.pathname.split('/');
    const langFromPath = pathParts[1] as SupportedLanguages;
    
    return SUPPORTED_LANGUAGES.includes(langFromPath) ? langFromPath : null;
  };

  useEffect(() => {
    const hasUserMadeChoice = localStorage.getItem('languageChoiceMade') === 'true';
    if (hasUserMadeChoice) return;

    const browserLang = getBrowserLanguage();
    const currentLang = getCurrentPathLanguage();

    if (browserLang && currentLang && browserLang !== currentLang) {
      setDetectedLanguage(browserLang);
      setShouldShowPopup(true);
    }
  }, [location.pathname]);

  return {
    shouldShowPopup,
    setShouldShowPopup,
    detectedLanguage,
    getCurrentPathLanguage
  };
};
