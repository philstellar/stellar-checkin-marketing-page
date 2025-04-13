
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <a href="#" className="text-2xl font-bold text-stellar-700">
              Stellar <span className="text-stellar-500">Checkin</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#"
              className="text-gray-700 hover:text-stellar-600 font-medium transition-colors"
            >
              Home
            </a>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-stellar-600 font-medium transition-colors"
                onClick={toggleDropdown}
              >
                Checkin <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <a 
                    href="#online-checkin"
                    className="block px-4 py-2 text-gray-700 hover:bg-stellar-50 hover:text-stellar-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Online Checkin
                  </a>
                  <a 
                    href="#integrationen"
                    className="block px-4 py-2 text-gray-700 hover:bg-stellar-50 hover:text-stellar-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Integrationen
                  </a>
                  <a 
                    href="#einstellungen"
                    className="block px-4 py-2 text-gray-700 hover:bg-stellar-50 hover:text-stellar-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Einstellungen
                  </a>
                  <a 
                    href="#versicherung"
                    className="block px-4 py-2 text-gray-700 hover:bg-stellar-50 hover:text-stellar-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Versicherung
                  </a>
                </div>
              )}
            </div>
            <a 
              href="#kontakt"
              className="text-gray-700 hover:text-stellar-600 font-medium transition-colors"
            >
              Kontakt
            </a>
            <Button variant="default" className="bg-stellar-600 hover:bg-stellar-700">
              Demo Anfragen
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <a 
              href="#"
              className="block py-2 text-gray-700 hover:text-stellar-600 font-medium"
            >
              Home
            </a>
            <button
              className="flex items-center w-full py-2 text-gray-700 hover:text-stellar-600 font-medium"
              onClick={toggleDropdown}
            >
              Checkin <ChevronDown className={`ml-1 w-4 h-4 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <a 
                  href="#online-checkin"
                  className="block py-2 text-gray-700 hover:text-stellar-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Online Checkin
                </a>
                <a 
                  href="#integrationen"
                  className="block py-2 text-gray-700 hover:text-stellar-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Integrationen
                </a>
                <a 
                  href="#einstellungen"
                  className="block py-2 text-gray-700 hover:text-stellar-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Einstellungen
                </a>
                <a 
                  href="#versicherung"
                  className="block py-2 text-gray-700 hover:text-stellar-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Versicherung
                </a>
              </div>
            )}
            <a 
              href="#kontakt"
              className="block py-2 text-gray-700 hover:text-stellar-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
            <Button className="w-full mt-4 bg-stellar-600 hover:bg-stellar-700">
              Demo Anfragen
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
