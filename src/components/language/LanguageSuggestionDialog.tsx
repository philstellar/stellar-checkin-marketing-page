
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";

export function LanguageSuggestionDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  useEffect(() => {
    // Check browser language
    const browserLang = navigator.language.toLowerCase();
    const isEnglish = browserLang.startsWith('en');
    const currentPath = window.location.pathname;
    const hasLanguagePrefix = /^\/(de|en|es|it)/.test(currentPath);
    
    // Show dialog if browser is English but not on English version
    if (isEnglish && (!hasLanguagePrefix || !currentPath.startsWith('/en'))) {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSwitch = () => {
    setIsOpen(false);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(?:de|en|es|it)?/, '/en');
    navigate(newPath || '/en');
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center space-y-4 p-6">
          <div className="rounded-full bg-apple/10 p-3">
            <Globe className="h-6 w-6 text-apple" />
          </div>
          <h2 className="text-xl font-semibold text-center">
            {t('languageSuggestion.title')}
          </h2>
          <p className="text-center text-muted-foreground">
            {t('languageSuggestion.description')}
          </p>
          <div className="flex gap-4 mt-4">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              {t('languageSuggestion.stay')}
            </Button>
            <Button
              className="bg-apple hover:bg-apple-600"
              onClick={handleSwitch}
            >
              {t('languageSuggestion.switch')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
