
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

type ConsentStatus = 'pending' | 'accepted' | 'rejected';

interface CookieConsentContextType {
  consentStatus: ConsentStatus;
  acceptCookies: () => void;
  rejectCookies: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

interface CookieConsentProviderProps {
  children: React.ReactNode;
}

export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setConsentStatus(savedConsent as ConsentStatus);
    }
  }, []);

  const disableGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.dataLayer = [];
      // Disable Google Analytics tracking
      window.gtag('js', new Date());
      window.gtag('config', 'AW-16898170225', { 'allow_ad_personalization_signals': false });
    }
  };

  const enableGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Re-enable Google Analytics tracking
      window.gtag('js', new Date());
      window.gtag('config', 'AW-16898170225');
    }
  };

  const acceptCookies = () => {
    setConsentStatus('accepted');
    localStorage.setItem('cookieConsent', 'accepted');
    
    // Enable analytics/tracking scripts
    enableGoogleAnalytics();
    
    toast({
      title: "Cookies accepted",
      description: "Thank you for accepting cookies. Your preferences have been saved.",
      duration: 3000,
    });
  };

  const rejectCookies = () => {
    setConsentStatus('rejected');
    localStorage.setItem('cookieConsent', 'rejected');
    
    // Disable analytics/tracking scripts
    disableGoogleAnalytics();
    
    toast({
      title: "Cookies rejected",
      description: "You've chosen to reject non-essential cookies. Only essential services will be used.",
      duration: 3000,
    });
  };

  return (
    <CookieConsentContext.Provider value={{ consentStatus, acceptCookies, rejectCookies }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
