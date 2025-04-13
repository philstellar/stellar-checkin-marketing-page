
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Monitor, 
  LinkIcon, 
  Shield, 
  BarChart2, 
  Settings, 
  AlertTriangle,
  ShoppingBag
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSectionClick = (sectionId: string) => {
    // Close both dropdowns
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    
    if (isHomePage) {
      // If already on home page, scroll to the section directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white stellar-shadow' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/69cbcbf8-03a5-4c39-a023-9df42c0b60e3.png" 
                alt="Stellar Checkin Logo" 
                className="h-10"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-gray-700 hover:text-stellar-600 font-medium transition-colors"
            >
              Home
            </Link>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-stellar-600 font-medium transition-colors"
                onClick={toggleDropdown}
              >
                Checkin <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-20">
                  <button 
                    className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-stellar-50 hover:text-stellar-600"
                    onClick={() => handleSectionClick('gaeste-voranmeldung')}
                  >
                    <Monitor className="mr-2 h-4 w-4" />
                    Gäste Voranmeldung
                  </button>
                  <button 
                    className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-stellar-50 hover:text-stellar-600"
                    onClick={() => handleSectionClick('zusatzservices')}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Zusatzservices verkaufen
                  </button>
                  <button 
                    className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-stellar-50 hover:text-stellar-600"
                    onClick={() => handleSectionClick('integrationen')}
                  >
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Integrationen
                  </button>
                  <button 
                    className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-stellar-50 hover:text-stellar-600"
                    onClick={() => handleSectionClick('versicherung')}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Versicherung
                  </button>
                  <button 
                    className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-stellar-50 hover:text-stellar-600"
                    onClick={() => handleSectionClick('berichte')}
                  >
                    <BarChart2 className="mr-2 h-4 w-4" />
                    Berichte und Analysen
                  </button>
                  <button 
                    className="flex w-full items-center px-4 py-2 text-gray-700 hover:bg-stellar-50 hover:text-stellar-600"
                    onClick={() => handleSectionClick('einstellungen')}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Einstellungen
                  </button>
                </div>
              )}
            </div>
            <Link 
              to="/kontakt"
              className="text-gray-700 hover:text-stellar-600 font-medium transition-colors"
            >
              Kontakt
            </Link>
            <Link to="/kontakt">
              <Button variant="default" className="bg-stellar-600 hover:bg-stellar-700">
                Demo Anfragen
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <Link 
              to="/"
              className="block py-2 text-gray-700 hover:text-stellar-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button
              className="flex items-center w-full py-2 text-gray-700 hover:text-stellar-600 font-medium"
              onClick={toggleDropdown}
            >
              Checkin <ChevronDown className={`ml-1 w-4 h-4 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <button
                  className="flex w-full items-center py-2 text-gray-700 hover:text-stellar-600"
                  onClick={() => handleSectionClick('gaeste-voranmeldung')}
                >
                  <Monitor className="mr-2 h-4 w-4" />
                  Gäste Voranmeldung
                </button>
                <button
                  className="flex w-full items-center py-2 text-gray-700 hover:text-stellar-600"
                  onClick={() => handleSectionClick('zusatzservices')}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Zusatzservices verkaufen
                </button>
                <button
                  className="flex w-full items-center py-2 text-gray-700 hover:text-stellar-600"
                  onClick={() => handleSectionClick('integrationen')}
                >
                  <LinkIcon className="mr-2 h-4 w-4" />
                  Integrationen
                </button>
                <button
                  className="flex w-full items-center py-2 text-gray-700 hover:text-stellar-600"
                  onClick={() => handleSectionClick('versicherung')}
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Versicherung
                </button>
                <button
                  className="flex w-full items-center py-2 text-gray-700 hover:text-stellar-600"
                  onClick={() => handleSectionClick('berichte')}
                >
                  <BarChart2 className="mr-2 h-4 w-4" />
                  Berichte und Analysen
                </button>
                <button
                  className="flex w-full items-center py-2 text-gray-700 hover:text-stellar-600"
                  onClick={() => handleSectionClick('einstellungen')}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Einstellungen
                </button>
              </div>
            )}
            <Link 
              to="/kontakt"
              className="block py-2 text-gray-700 hover:text-stellar-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <Link 
              to="/kontakt" 
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4"
            >
              <Button 
                className="w-full bg-stellar-600 hover:bg-stellar-700"
              >
                Demo Anfragen
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
