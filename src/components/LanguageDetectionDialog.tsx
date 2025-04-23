
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
    detectedLanguage === 'de' ? 'German' :
    detectedLanguage === 'fr' ? 'French' :
    detectedLanguage === 'es' ? 'Spanish' : '';

  const currentLangName = currentLang === 'en' ? 'English' :
    currentLang === 'de' ? 'German' :
    currentLang === 'fr' ? 'French' :
    currentLang === 'es' ? 'Spanish' : '';

  if (!shouldShowPopup) return null;

  return (
    <Dialog open={shouldShowPopup} onOpenChange={setShouldShowPopup}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-none px-6 pt-7 pb-7">
        <div className="flex flex-col items-center space-y-5">
          <div className="rounded-full bg-apple/15 p-4 mb-1">
            <Globe className="h-7 w-7 text-apple" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">
            {`Detected language: ${detectedLangName}`}
          </h2>
          <p className="text-center text-muted-foreground text-base mb-2">
            {`It looks like your browser is set to ${detectedLangName}. Do you want to switch to the ${detectedLangName} version of our site?`}
          </p>

          <DialogFooter className="w-full flex-row justify-center gap-4 pt-2">
            <Button
              className="w-40 flex-1"
              onClick={handleLanguageSwitch}
            >
              {`Yes, switch to ${detectedLangName}`}
            </Button>
            <Button
              variant="outline"
              className="w-40 flex-1"
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
