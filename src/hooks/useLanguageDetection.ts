
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
    // Only show popup on the very first arrival, never after an explicit picker navigation.
    const hasBeenOnPage = localStorage.getItem('hasVisitedSite') === 'true';

    // If user has already made a language choice, or switched with the picker, do not show
    if (hasUserMadeChoice || hasBeenOnPage) return;

    // Only show the popup once, on the initial page load
    localStorage.setItem('hasVisitedSite', 'true');

    const browserLang = getBrowserLanguage();
    const currentLang = getCurrentPathLanguage();

    if (browserLang && currentLang && browserLang !== currentLang) {
      setDetectedLanguage(browserLang);
      setShouldShowPopup(true);
    }
  // Only run on first mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    shouldShowPopup,
    setShouldShowPopup,
    detectedLanguage,
    getCurrentPathLanguage
  };
};

