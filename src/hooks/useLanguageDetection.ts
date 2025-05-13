
import * as React from 'react';
import type { Language } from '@/context/LanguageContext';
import { useLocation } from 'react-router-dom';

type SupportedLanguages = Language | 'fr';

const SUPPORTED_LANGUAGES: SupportedLanguages[] = ['en', 'de', 'fr', 'es', 'it'];

export const useLanguageDetection = () => {
  const [shouldShowPopup, setShouldShowPopup] = React.useState(false);
  const [detectedLanguage, setDetectedLanguage] = React.useState<SupportedLanguages | null>(null);
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

  React.useEffect(() => {
    // Check if user has made a language choice OR navigated via picker
    const hasUserMadeChoice = localStorage.getItem('languageChoiceMade') === 'true';
    const hasBeenOnPage = localStorage.getItem('hasVisitedSite') === 'true';
    const lastVisitWasPicker = localStorage.getItem('lastLanguageChangeByPicker') === 'true';

    // Never show dialog after using language picker
    if (hasUserMadeChoice || hasBeenOnPage || lastVisitWasPicker) return;

    // Only show the popup once, on the initial page load
    localStorage.setItem('hasVisitedSite', 'true');

    const browserLang = getBrowserLanguage();
    const currentLang = getCurrentPathLanguage();

    if (browserLang && currentLang && browserLang !== currentLang) {
      setDetectedLanguage(browserLang);
      setShouldShowPopup(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    shouldShowPopup,
    setShouldShowPopup,
    detectedLanguage,
    getCurrentPathLanguage
  };
};
