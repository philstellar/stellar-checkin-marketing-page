
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Info, Cookie, Settings, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { useCookieConsent } from '@/context/CookieConsentContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { useTranslation } from '@/hooks/use-translation';

const CookieBanner = () => {
  const { consentStatus, acceptCookies, rejectCookies } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const { t } = useTranslation();
  
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
                <h2 className="text-lg font-medium text-gray-900">{t('cookies.title', 'Cookie Consent')}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {t('cookies.description', 'This website uses various cookies to enhance your browsing experience, provide personalized services, and analyze website traffic. You can choose to accept or reject non-essential cookies.')}
                </p>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                    <Info className="h-5 w-5 text-gray-500" />
                    <span className="sr-only">Cookie Information</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <h3 className="font-medium text-base">{t('cookies.whatAre.title', 'What are cookies?')}</h3>
                    <p className="text-sm text-gray-600">
                      {t('cookies.whatAre.description', 'Cookies are small text files stored on your device that help websites remember your preferences and improve your browsing experience.')}
                    </p>
                    <h3 className="font-medium text-base mt-4">{t('cookies.howWeUse.title', 'How we use cookies')}</h3>
                    <p className="text-sm text-gray-600">
                      {t('cookies.howWeUse.description', 'We use cookies to remember your preferences, analyze website traffic, and personalize content. Some cookies are essential for the website to function properly.')}
                    </p>
                    <h3 className="font-medium text-base mt-4">{t('cookies.yourChoices.title', 'Your choices')}</h3>
                    <p className="text-sm text-gray-600">
                      {t('cookies.yourChoices.description', 'You can choose which types of cookies you allow. Essential cookies cannot be disabled as they are necessary for the website to function.')}
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            
            <AnimatePresence>
              {showDetails && (
                <motion.div 
                  className="bg-gray-50 p-4 rounded-md text-sm space-y-4"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                      {t('cookies.categories.title', 'Cookie Categories')}
                    </h3>
                    <p className="text-xs text-gray-500 italic mb-4">
                      {t('cookies.categories.description', 'Below you can find information about the different types of cookies we use and their purposes.')}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 bg-white p-3 rounded border border-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">{t('cookies.essential.title', 'Essential Cookies')}</h3>
                      <p className="text-gray-600">
                        {t('cookies.essential.description', 'Necessary cookies help make a website usable by enabling basic functions like page navigation, user authentication and access to secure areas of the website. These cookies cannot be disabled.')}
                      </p>
                      <div className="mt-1.5 text-xs text-gray-500">
                        <span className="font-medium">{t('cookies.duration', 'Duration')}: </span>
                        {t('cookies.essential.duration', 'Session / 30 days')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 bg-white p-3 rounded border border-gray-200">
                    <Info className="h-5 w-5 text-royal flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">{t('cookies.analytics.title', 'Analytics and Performance Cookies')}</h3>
                      <p className="text-gray-600">
                        {t('cookies.analytics.description', 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They track website performance and provide insights through Google Analytics and Google Tag Manager.')}
                      </p>
                      <div className="mt-1.5 text-xs text-gray-500">
                        <span className="font-medium">{t('cookies.provider', 'Provider')}: </span>
                        Google Analytics, Google Tag Manager
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        <span className="font-medium">{t('cookies.duration', 'Duration')}: </span>
                        {t('cookies.analytics.duration', '1-2 years')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 bg-white p-3 rounded border border-gray-200">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">{t('cookies.advertising.title', 'Advertising and Marketing Cookies')}</h3>
                      <p className="text-gray-600">
                        {t('cookies.advertising.description', 'These cookies are used to deliver personalized advertisements based on your interests and to track the effectiveness of advertising campaigns through platforms like Google Ads and conversion tracking.')}
                      </p>
                      <div className="mt-1.5 text-xs text-gray-500">
                        <span className="font-medium">{t('cookies.provider', 'Provider')}: </span>
                        Google Ads, Facebook Pixel
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        <span className="font-medium">{t('cookies.duration', 'Duration')}: </span>
                        {t('cookies.advertising.duration', 'Up to 2 years')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 bg-white p-3 rounded border border-gray-200">
                    <Settings className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">{t('cookies.functional.title', 'Functional Cookies')}</h3>
                      <p className="text-gray-600">
                        {t('cookies.functional.description', 'These cookies enable enhanced functionality and personalization, such as live chats, videos, and social media sharing. They may be set by us or by third-party providers whose services we have added to our pages.')}
                      </p>
                      <div className="mt-1.5 text-xs text-gray-500">
                        <span className="font-medium">{t('cookies.provider', 'Provider')}: </span>
                        Various
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        <span className="font-medium">{t('cookies.duration', 'Duration')}: </span>
                        {t('cookies.functional.duration', 'Up to 1 year')}
                      </div>
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
                className="w-full sm:w-auto flex items-center gap-1.5"
              >
                <Info className="h-4 w-4" />
                {showDetails ? t('cookies.hideDetails', 'Hide Details') : t('cookies.showDetails', 'Show Details')}
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  onClick={rejectCookies}
                  className="border-royal text-royal hover:bg-royal/5 w-full sm:w-auto"
                >
                  <XCircle className="h-4 w-4 mr-1.5" />
                  {t('cookies.rejectNonEssential', 'Reject Non-Essential')}
                </Button>
                <Button 
                  onClick={acceptCookies}
                  className="bg-apple hover:bg-apple-600 text-white w-full sm:w-auto"
                >
                  <CheckCircle2 className="h-4 w-4 mr-1.5" />
                  {t('cookies.acceptAll', 'Accept All')}
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
