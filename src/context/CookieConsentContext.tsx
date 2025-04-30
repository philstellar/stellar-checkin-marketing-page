
'use client';

import * as React from 'react';

type CookieConsent = {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
  hasConsented: boolean;
};

type CookieConsentContextType = {
  cookieConsent: CookieConsent;
  updateCookieConsent: (newConsent: Partial<CookieConsent>) => void;
  resetCookieConsent: () => void;
};

// Default values
const defaultConsent: CookieConsent = {
  necessary: true, // Always required
  preferences: false,
  statistics: false,
  marketing: false,
  hasConsented: false,
};

// Create context with default values
const CookieConsentContext = React.createContext<CookieConsentContextType>({
  cookieConsent: defaultConsent,
  updateCookieConsent: () => {},
  resetCookieConsent: () => {},
});

export const useCookieConsent = () => React.useContext(CookieConsentContext);

interface CookieConsentProviderProps {
  children: React.ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
  // Get stored consent from localStorage or use default values
  const getStoredConsent = (): CookieConsent => {
    if (typeof window === 'undefined') return defaultConsent;
    
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent) {
      try {
        return JSON.parse(storedConsent);
      } catch (e) {
        console.error('Failed to parse stored cookie consent', e);
      }
    }
    return defaultConsent;
  };

  // Use state to track cookie consent
  const [cookieConsent, setCookieConsent] = React.useState<CookieConsent>(getStoredConsent());

  // Update cookie consent settings
  const updateCookieConsent = (newConsent: Partial<CookieConsent>) => {
    setCookieConsent(prev => {
      const updated = { ...prev, ...newConsent };
      localStorage.setItem('cookieConsent', JSON.stringify(updated));
      return updated;
    });
  };

  // Reset cookie consent to default values
  const resetCookieConsent = () => {
    localStorage.removeItem('cookieConsent');
    setCookieConsent(defaultConsent);
  };

  return (
    <CookieConsentContext.Provider value={{ cookieConsent, updateCookieConsent, resetCookieConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export default CookieConsentContext;
