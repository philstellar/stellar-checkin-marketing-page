
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import CTAButton from '../CTAButton';
import { useTranslation } from '@/hooks/use-translation';
import { motion, AnimatePresence } from "framer-motion";

type MobileNavProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
  onClose: () => void;
  isScrolled: boolean;
};

const MobileNav = ({ isOpen, handleSectionClick, onClose, isScrolled }: MobileNavProps) => {
  const navigate = useNavigate();
  const { t, currentLanguage } = useTranslation();

  const handleMenuItemClick = (sectionId: string) => {
    handleSectionClick(sectionId);
    onClose();
  };
  
  const handleNavigation = (path: string) => {
    navigate(`/${currentLanguage}/${path}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={`fixed inset-0 z-50 ${isScrolled ? 'bg-white' : 'bg-floral'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center p-4">
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
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <div className="w-full">
              <p className="text-lg font-medium text-royal mb-3 px-2 text-left">{t('navigation.features')}</p>
              <motion.div 
                className="space-y-3 rounded-lg bg-muted/50 p-3 w-full"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <motion.button 
                  onClick={() => handleMenuItemClick('kurtaxe')}
                  className="block w-full text-left text-royal-700 hover:text-apple transition-colors px-3 py-2 rounded-md hover:bg-muted"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {t('kurtaxe.title')}
                </motion.button>
                
                <motion.button 
                  onClick={() => handleMenuItemClick('zusatzservices')}
                  className="block w-full text-left text-royal-700 hover:text-apple transition-colors px-3 py-2 rounded-md hover:bg-muted"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                >
                  {t('zusatzservices.title')}
                </motion.button>
                
                <motion.button 
                  onClick={() => handleMenuItemClick('versicherung')}
                  className="block w-full text-left text-royal-700 hover:text-apple transition-colors px-3 py-2 rounded-md hover:bg-muted"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {t('versicherung.title')}
                </motion.button>
                
                <motion.button 
                  onClick={() => handleMenuItemClick('identitaetspruefung')}
                  className="block w-full text-left text-royal-700 hover:text-apple transition-colors px-3 py-2 rounded-md hover:bg-muted"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                >
                  {t('identity.title')}
                </motion.button>
                
                <motion.button 
                  onClick={() => handleMenuItemClick('einstellungen')}
                  className="block w-full text-left text-royal-700 hover:text-apple transition-colors px-3 py-2 rounded-md hover:bg-muted"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  {t('settings.title')}
                </motion.button>
                
                <motion.button 
                  onClick={() => handleMenuItemClick('integrationen')}
                  className="block w-full text-left text-royal-700 hover:text-apple transition-colors px-3 py-2 rounded-md hover:bg-muted"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                >
                  {t('integration.title')}
                </motion.button>
              </motion.div>
            </div>
            
            <div className="w-full border-t border-muted pt-5 mt-3 space-y-4">
              <button 
                onClick={() => handleMenuItemClick('preise')}
                className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
              >
                {t('navigation.pricing')}
              </button>
              
              <button 
                onClick={() => handleMenuItemClick('kontakt')}
                className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
              >
                {t('navigation.contact')}
              </button>
            </div>
            
            <div className="w-full border-t border-muted pt-5 mt-3">
              <p className="text-lg font-medium text-royal mb-3 px-2 text-left">{t('navigation.legal')}</p>
              <div className="space-y-2">
                <button 
                  onClick={() => handleNavigation('impressum')}
                  className="block w-full text-left px-3 py-2 text-royal-700 hover:text-apple transition-colors hover:bg-muted rounded-md"
                >
                  {t('navigation.imprint')}
                </button>
                <button 
                  onClick={() => handleNavigation('datenschutz')}
                  className="block w-full text-left px-3 py-2 text-royal-700 hover:text-apple transition-colors hover:bg-muted rounded-md"
                >
                  {t('navigation.privacyPolicy')}
                </button>
                <button 
                  onClick={() => handleNavigation('agb')}
                  className="block w-full text-left px-3 py-2 text-royal-700 hover:text-apple transition-colors hover:bg-muted rounded-md"
                >
                  {t('navigation.termsAndConditions')}
                </button>
                <button 
                  onClick={() => handleNavigation('versicherung')}
                  className="block w-full text-left px-3 py-2 text-royal-700 hover:text-apple transition-colors hover:bg-muted rounded-md"
                >
                  {t('navigation.insurance')}
                </button>
                <button 
                  onClick={() => handleNavigation('trust-badge')}
                  className="block w-full text-left px-3 py-2 text-royal-700 hover:text-apple transition-colors hover:bg-muted rounded-md"
                >
                  {t('navigation.trustBadge')}
                </button>
              </div>
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

export default MobileNav;
