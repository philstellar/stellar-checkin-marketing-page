
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import CTAButton from '../CTAButton';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from '@/hooks/use-translation';

type MobileNavProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
  onClose: () => void;
  isScrolled: boolean;
};

const MobileNav = ({ isOpen, handleSectionClick, onClose, isScrolled }: MobileNavProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleMenuItemClick = (sectionId: string) => {
    handleSectionClick(sectionId);
    onClose();
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 ${isScrolled ? 'bg-white' : 'bg-floral'}`}>
      <div className="flex justify-end p-6">
        <button onClick={onClose} aria-label="Close menu" className="text-royal hover:text-apple">
          <X size={24} />
        </button>
      </div>
      
      <div className="flex flex-col items-center space-y-6 p-6">
        <button 
          onClick={handleHomeClick}
          className="text-xl text-royal hover:text-apple font-medium transition-colors"
        >
          {t('navigation.home')}
        </button>
        
        <div className="space-y-4">
          <p className="text-lg font-medium text-royal">{t('navigation.features')}:</p>
          <div className="space-y-3 pl-4">
            <button 
              onClick={() => handleMenuItemClick('kurtaxe')}
              className="block text-royal-700 hover:text-apple transition-colors"
            >
              {t('features.kurtaxe.title')}
            </button>
            <button 
              onClick={() => handleMenuItemClick('zusatzservices')}
              className="block text-royal-700 hover:text-apple transition-colors"
            >
              {t('features.zusatzleistungen.title')}
            </button>
            <button 
              onClick={() => handleMenuItemClick('versicherung')}
              className="block text-royal-700 hover:text-apple transition-colors"
            >
              {t('features.kaution.title')}
            </button>
            <button 
              onClick={() => handleMenuItemClick('identitaetspruefung')}
              className="block text-royal-700 hover:text-apple transition-colors"
            >
              {t('features.identity.title')}
            </button>
            <button 
              onClick={() => handleMenuItemClick('einstellungen')}
              className="block text-royal-700 hover:text-apple transition-colors"
            >
              {t('features.custom.title')}
            </button>
            <button 
              onClick={() => handleMenuItemClick('integrationen')}
              className="block text-royal-700 hover:text-apple transition-colors"
            >
              {t('features.integration.title')}
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => handleMenuItemClick('preise')}
          className="text-xl text-royal hover:text-apple font-medium transition-colors"
        >
          {t('navigation.pricing')}
        </button>
        
        <button 
          onClick={() => handleMenuItemClick('kontakt')}
          className="text-xl text-royal hover:text-apple font-medium transition-colors"
        >
          {t('navigation.contact')}
        </button>
        
        <LanguageSelector />
        
        <CTAButton 
          variant="default" 
          className="bg-apple hover:bg-apple-600 w-full justify-center mt-8"
        >
          {t('navigation.register')}
        </CTAButton>
      </div>
    </div>
  );
};

export default MobileNav;
