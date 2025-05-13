
import * as React from 'react';

export const useLanguageDetection = () => {
  // No longer needed as we only support English
  return {
    shouldShowPopup: false,
    setShouldShowPopup: () => {},
    detectedLanguage: null,
    getCurrentPathLanguage: () => 'en'
  };
};
