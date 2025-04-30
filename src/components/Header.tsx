
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import DesktopNav from './header/DesktopNav';
import MobileNav from './header/MobileNav';
import LanguageSelector from './LanguageSelector';
import OptimizedImage from './OptimizedImage';
import { MetaHead } from './meta';
import { useLanguage } from '@/context/language/LanguageContext';
import { useScrollToSection } from '@/hooks/use-scroll-to-section';
import { SECTION_IDS } from '@/constants/section-ids';

// Re-export SECTION_IDS for backward compatibility
export { SECTION_IDS } from '@/constants/section-ids';

// Log the SECTION_IDS for debugging - will show up in the console
console.log('SECTION_IDS mapping:', SECTION_IDS);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { scrollToSection } = useScrollToSection();
  
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const handleHomeClick = () => {
    // Navigate to the home page based on current language
    navigate(`/${language}/`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Enhanced scroll handling with improved retry mechanism
  const handleSectionClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  }, [scrollToSection]);
  
  return (
    <>
      <MetaHead />
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled || isMenuOpen ? 'stellar-shadow' : ''}`}
        style={{ 
          backgroundColor: '#fff',
          // Add explicit styles to fix Safari status bar issue
          WebkitBackdropFilter: 'none',
          backdropFilter: 'none'
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <button onClick={handleHomeClick} className="flex items-center">
                <div className="w-[150px] h-[36px] relative" style={{ aspectRatio: '150/36' }}>
                  <OptimizedImage 
                    src="/lovable-uploads/ff2f3aee-64a7-4b39-8853-4cf47dab5b66.png" 
                    alt="Stellar Logo" 
                    width={150} 
                    height={36} 
                    className="h-9 w-auto object-contain"
                    priority={true}
                  />
                </div>
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="md:hidden">
                <LanguageSelector variant="icon-only" />
              </div>
              <DesktopNav handleSectionClick={handleSectionClick} />
              <button className="md:hidden text-royal p-2 hover:bg-muted/70 rounded-md transition-colors" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
  
          <MobileNav isOpen={isMenuOpen} handleSectionClick={handleSectionClick} onClose={closeMenu} isScrolled={isScrolled} />
        </div>
      </header>
    </>
  );
};

export default Header;
