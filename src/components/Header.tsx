import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import DesktopNav from './header/DesktopNav';
import MobileNav from './header/MobileNav';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSectionClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white stellar-shadow' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <button 
              onClick={handleHomeClick} 
              className="flex items-center"
            >
              <img 
                src="/lovable-uploads/51f6ef34-a9e3-44a7-b9d9-8765e43e287c.png" 
                alt="Stellar Logo" 
                className="h-6 w-auto object-contain"
                width="72"
                height="24"
              />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <LanguageSelector variant="icon-only" />
            </div>
            <DesktopNav handleSectionClick={handleSectionClick} />
            <button
              className="md:hidden text-royal p-2 hover:bg-muted/70 rounded-md transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <MobileNav 
          isOpen={isMenuOpen} 
          handleSectionClick={handleSectionClick} 
          onClose={closeMenu}
          isScrolled={isScrolled}
        />
      </div>
    </header>
  );
};

export default Header;
