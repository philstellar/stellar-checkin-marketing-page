
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/hooks/use-translation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const LanguageSuggestionDialog = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    // Get browser language (first 2 chars only to match our language codes)
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    const supportedLanguages = ['de', 'en', 'es', 'it'];

    // Check if browser language is supported and different from current language
    if (supportedLanguages.includes(browserLang) && browserLang !== language) {
      setDetectedLanguage(browserLang);
      // Only show if user hasn't dismissed before
      const hasBeenShown = localStorage.getItem('languageSuggestionShown');
      if (!hasBeenShown) {
        setOpen(true);
      }
    }
  }, [language]);

  const handleLanguageSwitch = () => {
    if (detectedLanguage) {
      setLanguage(detectedLanguage as 'de' | 'en' | 'es' | 'it');
    }
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('languageSuggestionShown', 'true');
  };

  if (!detectedLanguage) return null;

  const getLanguageName = (code: string) => {
    const names = {
      de: 'Deutsch',
      en: 'English',
      es: 'Español',
      it: 'Italiano'
    };
    return names[code as keyof typeof names];
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('languageSuggestion.title')}</DialogTitle>
          <DialogDescription>
            {t('languageSuggestion.description', { detectedLanguage: getLanguageName(detectedLanguage) })}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-4 mt-4">
          <Button variant="outline" onClick={handleClose}>
            {t('languageSuggestion.stay')}
          </Button>
          <Button onClick={handleLanguageSwitch}>
            {t('languageSuggestion.switch')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguageSuggestionDialog;
