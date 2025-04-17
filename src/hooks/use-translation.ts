
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';
import get from 'lodash.get';
import { useLocation } from 'react-router-dom';

export function useTranslation() {
  // Default to the language from context
  const { language } = useLanguage();
  let currentLanguage = language;
  
  // Try to get location from Router, but don't fail if it's not available
  try {
    const location = useLocation();
    
    // Extract language from URL path if possible
    const getLanguageFromPath = () => {
      const pathParts = location.pathname.split('/').filter(Boolean);
      if (pathParts.length > 0) {
        const firstPart = pathParts[0];
        if (['en', 'es', 'it', 'de'].includes(firstPart)) {
          return firstPart as 'en' | 'es' | 'it' | 'de';
        }
      }
      return language;
    };
    
    currentLanguage = getLanguageFromPath();
  } catch (error) {
    // If useLocation fails (outside Router context), just use the language from context
    console.debug('useTranslation: useLocation not available, using language from context');
  }
  
  const t = (key: string, fallback?: string) => {
    try {
      // For debugging the specific issue with "moreBtn"
      if (key.includes('moreBtn')) {
        console.log(`Attempting to translate key: ${key}, language: ${currentLanguage}`);
        console.log(`Translation structure:`, translations[currentLanguage]);
        
        const translated = get(translations[currentLanguage], key);
        console.log(`Translation result for ${key}: "${translated}"`);
        
        // Try to get translations at specific paths for debugging
        const featuresSection = get(translations[currentLanguage], 'features');
        console.log('Features section:', featuresSection);
        
        if (featuresSection && typeof featuresSection === 'object') {
          console.log('Direct moreBtn access:', featuresSection.moreBtn);
        }
        
        return translated || 
               get(translations.en, key) || 
               fallback || 
               key;
      }
      
      // Regular translation flow
      const translated = get(translations[currentLanguage], key);
      
      return translated || 
             get(translations.en, key) || 
             fallback || 
             key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return fallback || key;
    }
  };
  
  return { t, language: currentLanguage };
}
