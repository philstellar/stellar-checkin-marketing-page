
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
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setConsentStatus(savedConsent as ConsentStatus);
    }
  }, []);

  const clearAllCookies = () => {
    // Remove all cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  };

  const disableAnalytics = () => {
    // Opt out of Google Analytics tracking
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() {};
      
      // Disable personalized ads and tracking for Google Ads
      window.gtag('js', new Date());
      window.gtag('config', 'AW-16898170225', {
        'allow_ad_personalization_signals': false,
        'anonymize_ip': true
      });
      
      // Disable GA4 tracking
      window.gtag('config', 'G-YZM5YCLGBD', {
        'anonymize_ip': true,
        'allow_google_signals': false,
        'allow_ad_personalization_signals': false
      });
    }
  };

  const enableAnalytics = () => {
    if (typeof window !== 'undefined') {
      window.gtag('js', new Date());
      
      // Enable Google Ads tracking
      window.gtag('config', 'AW-16898170225');
      
      // Enable GA4 tracking
      window.gtag('config', 'G-YZM5YCLGBD');
    }
  };

  const acceptCookies = () => {
    clearAllCookies(); // Clear existing cookies first
    enableAnalytics();
    setConsentStatus('accepted');
    localStorage.setItem('cookieConsent', 'accepted');
    
    toast({
      title: "Cookies Accepted",
      description: "All cookies and tracking have been enabled.",
      duration: 3000,
    });
  };

  const rejectCookies = () => {
    clearAllCookies(); // Remove all existing cookies
    disableAnalytics();
    setConsentStatus('rejected');
    localStorage.setItem('cookieConsent', 'rejected');
    
    toast({
      title: "Cookies Rejected",
      description: "Non-essential cookies and tracking have been disabled.",
      duration: 3000,
    });
  };

  return (
    <CookieConsentContext.Provider value={{ consentStatus, acceptCookies, rejectCookies }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
