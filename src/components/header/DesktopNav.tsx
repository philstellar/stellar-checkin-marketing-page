
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
import CTAButton from '../CTAButton';
import FunktionenDropdown from './FunktionenDropdown';

type DesktopNavProps = {
  handleSectionClick: (sectionId: string) => void;
};

const DesktopNav = ({ handleSectionClick }: DesktopNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <button 
        onClick={handleHomeClick}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        Home
      </button>
      <div className="relative">
        <button
          className="flex items-center text-royal hover:text-apple font-medium transition-colors"
          onClick={toggleDropdown}
        >
          Funktionen <ChevronDown className="ml-1 w-4 h-4" />
        </button>
        <FunktionenDropdown 
          isOpen={isDropdownOpen} 
          handleSectionClick={handleSectionClick} 
          onClose={closeDropdown}
        />
      </div>
      <button 
        onClick={() => handleSectionClick('preise')}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        Preise
      </button>
      <button 
        onClick={() => handleSectionClick('kontakt')}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        Kontakt
      </button>
      <CTAButton variant="default" className="bg-apple hover:bg-apple-600">
        Jetzt registrieren
      </CTAButton>
    </nav>
  );
};

export default DesktopNav;
