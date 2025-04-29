
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguageDetection } from '@/hooks/useLanguageDetection';

export const LanguageDetectionDialog = () => {
  const navigate = useNavigate();
  const { shouldShowPopup, setShouldShowPopup, detectedLanguage, getCurrentPathLanguage } = useLanguageDetection();

  const handleLanguageSwitch = () => {
    // Mark language choice and never show again
    localStorage.setItem('languageChoiceMade', 'true');
    setShouldShowPopup(false);

    if (detectedLanguage) {
      const currentPath = window.location.pathname;
      const currentLang = getCurrentPathLanguage();

      if (currentLang) {
        const newPath = currentPath.replace(`/${currentLang}`, `/${detectedLanguage}`);
        navigate(newPath);
      } else {
        navigate(`/${detectedLanguage}${currentPath}`);
      }
    }
  };

  const handleStayOnCurrent = () => {
    localStorage.setItem('languageChoiceMade', 'true');
    setShouldShowPopup(false);
  };

  const currentLang = getCurrentPathLanguage() ?? 'de';
  const detectedLangName = detectedLanguage === 'en' ? 'English' :
    detectedLanguage === 'de' ? 'Deutsch' :
    detectedLanguage === 'fr' ? 'Français' :
    detectedLanguage === 'es' ? 'Español' : '';

  const currentLangName = currentLang === 'en' ? 'English' :
    currentLang === 'de' ? 'Deutsch' :
    currentLang === 'fr' ? 'Français' :
    currentLang === 'es' ? 'Español' : '';

  if (!shouldShowPopup) return null;

  return (
    <Dialog open={shouldShowPopup} onOpenChange={setShouldShowPopup}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-xl px-8 pt-8 pb-7 rounded-xl">
        <div className="flex flex-col items-center space-y-5">
          <div className="rounded-full bg-apple/10 p-4 mb-1">
            <Globe className="h-8 w-8 text-apple" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2">
            {`Detected language: ${detectedLangName}`}
          </h2>
          <p className="text-center text-muted-foreground text-base mb-2">
            {`Your browser is set to ${detectedLangName}. Would you like to switch to our ${detectedLangName} version?`}
          </p>
          <DialogFooter className="w-full flex flex-row justify-center gap-4 pt-2">
            <Button
              className="w-44 h-12 rounded-full font-medium text-base"
              onClick={handleLanguageSwitch}
            >
              {`Yes, switch to ${detectedLangName}`}
            </Button>
            <Button
              variant="outline"
              className="w-44 h-12 rounded-full font-medium text-base border-apple/40"
              onClick={handleStayOnCurrent}
            >
              {`No, stay on ${currentLangName}`}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
