
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import DesktopNav from './header/DesktopNav';
import MobileNav from './header/MobileNav';
import LanguageSelector from './LanguageSelector';
import OptimizedImage from './OptimizedImage';
import { MetaHead } from './meta';
import { useLanguage } from '@/context/LanguageContext';

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
    // Navigate to the check-in page based on current language
    navigate(`/${language}/`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const handleSectionClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, []);
  
  useEffect(() => {
    const state = location.state as {
      scrollTo?: string;
    };
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
        navigate(location.pathname, {
          replace: true,
          state: {}
        });
      }
    }
  }, [location, navigate]);
  
  // Prefetch key pages for faster navigation
  useEffect(() => {
    // Create link elements for key pages to prefetch
    const prefetchLinks = [
      { href: `/${language}/versicherung`, as: 'document' },
      { href: `/${language}/trust-badge`, as: 'document' }
    ];
    
    const linkElements: HTMLLinkElement[] = [];
    
    prefetchLinks.forEach(link => {
      const linkEl = document.createElement('link');
      linkEl.rel = 'prefetch';
      linkEl.href = link.href;
      linkEl.as = link.as;
      document.head.appendChild(linkEl);
      linkElements.push(linkEl);
    });
    
    // Clean up prefetch links on unmount
    return () => {
      linkElements.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
    };
  }, [language]);
  
  return (
    <>
      <MetaHead />
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled || isMenuOpen ? 'stellar-shadow' : ''}`}
              style={{ backgroundColor: '#fff' }}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <button onClick={handleHomeClick} className="flex items-center">
                <OptimizedImage 
                  src="/lovable-uploads/ff2f3aee-64a7-4b39-8853-4cf47dab5b66.png" 
                  alt="Stellar Logo" 
                  width={150} 
                  height={36} 
                  className="h-9 w-auto object-contain"
                  priority={true}
                />
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
