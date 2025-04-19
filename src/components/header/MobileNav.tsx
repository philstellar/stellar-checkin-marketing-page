
import { useNavigate, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import CTAButton from '../CTAButton';
import { useTranslation } from '@/hooks/use-translation';
import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";
import LanguageSelector from '../LanguageSelector';

type MobileNavProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
  onClose: () => void;
  isScrolled: boolean;
};

// Menu animation variants
const menuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const contentVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.3 } }
};

const MobileNav = ({ isOpen, handleSectionClick, onClose, isScrolled }: MobileNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, currentLanguage } = useTranslation();
  const isProduction = window.location.hostname === 'stellar-checkin.com';

  const handleNavigation = (path: string) => {
    navigate(`/${currentLanguage}/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      handleSectionClick(sectionId);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={`fixed inset-0 z-50 ${isScrolled ? 'bg-white' : 'bg-floral'}`}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
              <LanguageSelector variant="icon-only" />
            </div>
            <button 
              onClick={onClose} 
              aria-label="Close menu" 
              className="p-2 rounded-full text-royal hover:text-apple bg-muted transition-all"
            >
              <X size={24} />
            </button>
          </div>
          
          <motion.div 
            className="flex flex-col items-start space-y-7 p-6 pt-2 max-h-[calc(100vh-80px)] overflow-y-auto"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full border-t border-muted pt-5 mt-3 space-y-4">
              {!isProduction && (
                <button 
                  onClick={() => handleNavigation('home')}
                  className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
                >
                  {t('navigation.home')}
                </button>
              )}

              <div className="space-y-2">
                <button 
                  onClick={() => {}}
                  className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
                >
                  {t('navigation.features')}
                </button>
                <div className="pl-4 space-y-2">
                  <button 
                    onClick={() => handleSectionClick('kurtaxe')}
                    className="block w-full text-lg text-royal hover:text-apple transition-colors py-1 text-left"
                  >
                    {t('kurtaxe.title')}
                  </button>
                  <button 
                    onClick={() => handleSectionClick('zusatzservices')}
                    className="block w-full text-lg text-royal hover:text-apple transition-colors py-1 text-left"
                  >
                    {t('zusatzservices.title')}
                  </button>
                  <button 
                    onClick={() => handleSectionClick('versicherung')}
                    className="block w-full text-lg text-royal hover:text-apple transition-colors py-1 text-left"
                  >
                    {t('versicherung.title')}
                  </button>
                  <button 
                    onClick={() => handleSectionClick('identitaetspruefung')}
                    className="block w-full text-lg text-royal hover:text-apple transition-colors py-1 text-left"
                  >
                    {t('identity.title')}
                  </button>
                  <button 
                    onClick={() => handleSectionClick('einstellungen')}
                    className="block w-full text-lg text-royal hover:text-apple transition-colors py-1 text-left"
                  >
                    {t('settings.title')}
                  </button>
                  <button 
                    onClick={() => handleSectionClick('integrationen')}
                    className="block w-full text-lg text-royal hover:text-apple transition-colors py-1 text-left"
                  >
                    {t('integration.title')}
                  </button>
                </div>
              </div>
              
              <button 
                onClick={() => handleNavigation('versicherung')}
                className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
              >
                {t('navigation.insurance')}
              </button>
              
              <button 
                onClick={() => handleNavigation('trust-badge')}
                className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
              >
                {t('navigation.trustBadge')}
              </button>

              <button 
                onClick={() => handleSectionNavigation('preise')}
                className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
              >
                {t('navigation.pricing')}
              </button>
              
              <button 
                onClick={() => handleSectionNavigation('kontakt')}
                className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
              >
                {t('navigation.contact')}
              </button>
            </div>
            
            <CTAButton 
              variant="default" 
              className="bg-apple hover:bg-apple-600 w-full justify-center mt-5"
            >
              {t('navigation.register')}
            </CTAButton>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(MobileNav);
