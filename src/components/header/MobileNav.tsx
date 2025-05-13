
import React, { memo } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import CTAButton from '../CTAButton';
import { useTranslation } from '@/hooks/use-translation';
import { motion, AnimatePresence } from "framer-motion";
import LanguageSelector from '../LanguageSelector';
import { SECTION_IDS } from '@/constants/section-ids';

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

  const handleNavigation = (path: string) => {
    navigate(`/${currentLanguage}/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  const handleSectionNavigation = (sectionId: string) => {
    const isHomePage = location.pathname === `/${currentLanguage}/` || location.pathname === '/';
    
    if (!isHomePage) {
      // If we're not on the homepage, navigate to home with the section in state
      console.log(`[Mobile] Navigating to home with scrollTo state: ${sectionId}`);
      navigate(`/${currentLanguage}/`, { 
        state: { scrollTo: sectionId } 
      });
      onClose();
    } else {
      // If we're already on the homepage, just scroll to the section
      console.log(`[Mobile] Already on homepage, scrolling directly to: ${sectionId}`);
      handleSectionClick(sectionId);
      onClose();
    }
  };

  // Define submenu items with consistent IDs
  const featureItems = [
    { id: SECTION_IDS.features, title: t('features.title') },
    { id: SECTION_IDS.kurtaxe, title: t('kurtaxe.title') },
    { id: SECTION_IDS.zusatzservices, title: t('zusatzservices.title') },
    { id: SECTION_IDS.versicherung, title: t('versicherung.title') },
    { id: SECTION_IDS.identity, title: t('identity.title') },
    { id: SECTION_IDS.settings, title: t('settings.title') },
    { id: SECTION_IDS.integration, title: t('integration.title') }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50"
          style={{ 
            backgroundColor: '#fff', // Always use white background
            WebkitBackdropFilter: 'none',
            backdropFilter: 'none'
          }}
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
              <div className="space-y-2">
                <button 
                  onClick={() => handleSectionNavigation(SECTION_IDS.features)}
                  className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
                >
                  {t('navigation.features')}
                </button>
                
                {/* Submenu for features */}
                <div className="pl-4 space-y-2">
                  {featureItems.map(item => (
                    <button 
                      key={item.id}
                      onClick={() => handleSectionNavigation(item.id)}
                      className="block w-full text-sm text-royal hover:text-apple transition-colors py-1 text-left"
                    >
                      {item.title}
                    </button>
                  ))}
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
                data-testid="trust-badge-mobile-link"
              >
                {t('navigation.trustBadge')}
              </button>

              <button 
                onClick={() => handleSectionNavigation(SECTION_IDS.pricing)}
                className="block w-full text-xl text-royal hover:text-apple font-medium transition-colors py-2 text-left"
              >
                {t('navigation.pricing')}
              </button>
              
              <button 
                onClick={() => handleSectionNavigation(SECTION_IDS.contact)}
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
