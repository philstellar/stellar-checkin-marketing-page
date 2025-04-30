
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import DesktopNav from './header/DesktopNav';
import MobileNav from './header/MobileNav';
import LanguageSelector from './LanguageSelector';
import OptimizedImage from './OptimizedImage';
import { MetaHead } from './meta';
import { useLanguage } from '@/context/language/LanguageContext';

// Create a consistent mapping of navigation targets to section IDs
export const SECTION_IDS = {
  features: 'gaeste-voranmeldung',
  kurtaxe: 'kurtaxe',
  zusatzservices: 'zusatzservices',
  versicherung: 'versicherung',
  identity: 'identitaetspruefung',
  settings: 'einstellungen',
  integration: 'integrationen',
  pricing: 'preise',
  contact: 'kontakt'
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  
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
  
  // Enhanced scroll handling with retry mechanism
  const handleSectionClick = useCallback((sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    
    // Function to attempt scrolling with retries
    const attemptScroll = (attempts = 0, maxAttempts = 5) => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        console.log(`Found element with ID: ${sectionId}, scrolling to it`);
        setIsMenuOpen(false);
        
        // Add a small delay to ensure the menu closes before scrolling
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
        
        return true;
      } else {
        console.log(`Element with ID: ${sectionId} not found (attempt ${attempts + 1}/${maxAttempts})`);
        
        if (attempts < maxAttempts) {
          // Retry with increasing delays (exponential backoff)
          setTimeout(() => {
            attemptScroll(attempts + 1, maxAttempts);
          }, 300 * Math.pow(1.5, attempts));
          return false;
        } else {
          console.warn(`Failed to find element with id '${sectionId}' after ${maxAttempts} attempts`);
          return false;
        }
      }
    };
    
    attemptScroll();
  }, []);
  
  useEffect(() => {
    const state = location.state as {
      scrollTo?: string;
    };
    
    if (state?.scrollTo) {
      console.log(`Navigation state includes scrollTo: ${state.scrollTo}`);
      
      // Use a more robust approach with retries for navigation state scrolling
      const attemptStateScroll = (attempts = 0, maxAttempts = 8) => {
        const element = document.getElementById(state.scrollTo as string);
        
        if (element) {
          console.log(`Found state-targeted element: ${state.scrollTo}, scrolling to it`);
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Clear the state to prevent re-scrolling on future navigation
          navigate(location.pathname, {
            replace: true,
            state: {}
          });
        } else if (attempts < maxAttempts) {
          console.log(`State-targeted element: ${state.scrollTo} not found yet, retrying... (${attempts + 1}/${maxAttempts})`);
          // Use a longer timeout for sections that might be lazy-loaded
          setTimeout(() => {
            attemptStateScroll(attempts + 1, maxAttempts);
          }, 400 * Math.pow(1.5, attempts));
        } else {
          console.warn(`Failed to find element with id '${state.scrollTo}' after ${maxAttempts} attempts`);
        }
      };
      
      // Initial delay to account for initial render and lazy loading
      setTimeout(() => {
        attemptStateScroll();
      }, 300);
    }
  }, [location, navigate]);
  
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
