
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguageDetection } from '@/hooks/useLanguageDetection';

export const LanguageDetectionDialog = () => {
  const navigate = useNavigate();
  const { shouldShowPopup, setShouldShowPopup, detectedLanguage, getCurrentPathLanguage } = useLanguageDetection();

  const handleLanguageSwitch = () => {
    localStorage.setItem('languageChoiceMade', 'true');
    setShouldShowPopup(false);
    
    if (detectedLanguage) {
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(/^\/(?:de|en|fr|es)?/, `/${detectedLanguage}`);
      navigate(newPath || `/${detectedLanguage}`);
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

  return (
    <Dialog open={shouldShowPopup} onOpenChange={setShouldShowPopup}>
      <DialogContent className="sm:max-w-md bg-white"> {/* Added bg-white to make background non-transparent */}
        <div className="flex flex-col space-y-4">
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-lg">
              It looks like your browser is set to {detectedLangName}. Do you want to switch to the {detectedLangName} version of our site?
            </p>
          </div>

          <DialogFooter className="sm:justify-start flex gap-4 pt-4">
            <Button
              className="flex-1 sm:flex-none"
              onClick={handleLanguageSwitch}
            >
              Yes, switch to {detectedLangName}
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none"
              onClick={handleStayOnCurrent}
            >
              No, stay on {currentLangName}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
