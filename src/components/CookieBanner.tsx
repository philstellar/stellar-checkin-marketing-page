
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Info, Cookie } from 'lucide-react';
import { useCookieConsent } from '@/context/CookieConsentContext';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const { consentStatus, acceptCookies, rejectCookies } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  
  if (consentStatus !== 'pending') {
    return null;
  }
  
  return (
    <AnimatePresence>
      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white shadow-lg border-t border-gray-200"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col space-y-4">
            <div className="flex items-start md:items-center gap-3">
              <Cookie className="h-6 w-6 text-apple flex-shrink-0 mt-1 md:mt-0" />
              <div className="flex-grow">
                <h2 className="text-lg font-medium text-gray-900">Cookie Consent</h2>
                <p className="text-sm text-gray-600 mt-1">
                  This website uses various cookies to enhance your browsing experience, provide personalized services, 
                  and analyze website traffic. You can choose to accept or reject non-essential cookies.
                </p>
              </div>
            </div>
            
            <AnimatePresence>
              {showDetails && (
                <motion.div 
                  className="bg-gray-50 p-4 rounded-md text-sm space-y-3"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-apple flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Essential Cookies</h3>
                      <p className="text-gray-600">
                        Necessary cookies help make a website usable by enabling basic functions like page navigation 
                        and access to secure areas of the website. These cookies cannot be disabled.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-royal flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Analytics and Performance Cookies</h3>
                      <p className="text-gray-600">
                        These cookies help us understand how visitors interact with our website, 
                        track website performance, and provide insights through Google Analytics and Google Tag Manager.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">Advertising and Marketing Cookies</h3>
                      <p className="text-gray-600">
                        These cookies are used to deliver personalized advertisements and track ad performance 
                        through platforms like Google Ads and conversion tracking.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowDetails(!showDetails)}
                className="w-full sm:w-auto"
              >
                {showDetails ? 'Hide Details' : 'Show Details'}
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  onClick={rejectCookies}
                  className="border-royal text-royal hover:bg-royal/5 w-full sm:w-auto"
                >
                  Reject Non-Essential
                </Button>
                <Button 
                  onClick={acceptCookies}
                  className="bg-apple hover:bg-apple-600 text-white w-full sm:w-auto"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
