
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

  const acceptCookies = () => {
    setConsentStatus('accepted');
    localStorage.setItem('cookieConsent', 'accepted');
    
    // Enable analytics/tracking scripts here
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('Analytics enabled - user accepted cookies');
    }
    
    toast({
      title: "Cookies accepted",
      description: "Thank you for accepting cookies. Your preferences have been saved.",
      duration: 3000,
    });
  };

  const rejectCookies = () => {
    setConsentStatus('rejected');
    localStorage.setItem('cookieConsent', 'rejected');
    
    // Disable analytics/tracking scripts here
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('Analytics disabled - user rejected cookies');
      // You would typically add code here to disable tracking
    }
    
    toast({
      title: "Cookies rejected",
      description: "You've chosen to reject cookies. Only essential cookies will be used.",
      duration: 3000,
    });
  };

  return (
    <CookieConsentContext.Provider value={{ consentStatus, acceptCookies, rejectCookies }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
