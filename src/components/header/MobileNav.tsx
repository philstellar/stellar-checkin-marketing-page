
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
import CTAButton from '../CTAButton';
import FunktionenDropdown from './FunktionenDropdown';

type MobileNavProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
};

const MobileNav = ({ isOpen, handleSectionClick }: MobileNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 bg-white border-t">
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
        handleSectionClick={handleSectionClick} 
        isMobile={true}
      />
      <button
        onClick={() => handleSectionClick('kontakt')}
        className="block w-full py-2 text-left text-royal hover:text-apple font-medium"
      >
        Kontakt
      </button>
      <div className="block mt-4">
        <CTAButton 
          className="w-full bg-apple hover:bg-apple-600"
        >
          Demo Anfragen
        </CTAButton>
      </div>
    </div>
  );
};

export default MobileNav;
