
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
import CTAButton from '../CTAButton';
import FunktionenDropdown from './FunktionenDropdown';

type MobileNavProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
  onClose?: () => void;
  isScrolled: boolean;
};

const MobileNav = ({ isOpen, handleSectionClick, onClose, isScrolled }: MobileNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleItemClick = (sectionId: string) => {
    handleSectionClick(sectionId);
    if (onClose) {
      onClose();
    }
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`md:hidden py-4 ${isScrolled ? 'bg-white' : 'bg-white shadow-lg'} border-t`}>
      <button 
        onClick={handleHomeClick}
        className="block w-full py-2 text-left text-royal hover:text-apple font-medium"
      >
        Home
      </button>
      <button
        className="flex items-center w-full py-2 text-royal hover:text-apple font-medium"
        onClick={toggleDropdown}
      >
        Funktionen <ChevronDown className={`ml-1 w-4 h-4 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <FunktionenDropdown 
        isOpen={isDropdownOpen} 
        handleSectionClick={handleItemClick}
        isMobile={true}
        onClose={closeDropdown}
      />
      <button
        onClick={() => handleItemClick('preise')}
        className="block w-full py-2 text-left text-royal hover:text-apple font-medium"
      >
        Preise
      </button>
      <button
        onClick={() => handleItemClick('kontakt')}
        className="block w-full py-2 text-left text-royal hover:text-apple font-medium"
      >
        Kontakt
      </button>
      <div className="block mt-4">
        <CTAButton 
          className="w-full bg-apple hover:bg-apple-600"
        >
          Jetzt registrieren
        </CTAButton>
      </div>
    </div>
  );
};

export default MobileNav;
