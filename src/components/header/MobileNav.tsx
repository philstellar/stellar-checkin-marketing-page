
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
            <div className="w-full border-t border-muted pt-5 mt-3 space-y-4">
              <button 
                onClick={() => handleSectionClick('features')}
                className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
              >
                {t('navigation.features')}
              </button>
              
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
                onClick={() => handleSectionClick('preise')}
                className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
              >
                {t('navigation.pricing')}
              </button>
              
              <button 
                onClick={() => handleSectionClick('kontakt')}
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

export default MobileNav;
