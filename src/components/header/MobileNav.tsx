
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
import CTAButton from '../CTAButton';
import FeatureDropdown from './FeatureDropdown';

type MobileNavProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
};

const MobileNav = ({ isOpen, handleSectionClick }: MobileNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 bg-white border-t">
      <Link 
        to="/"
        className="block py-2 text-royal hover:text-apple font-medium"
      >
        Home
      </Link>
      <button
        className="flex items-center w-full py-2 text-royal hover:text-apple font-medium"
        onClick={toggleDropdown}
      >
        Features <ChevronDown className={`ml-1 w-4 h-4 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <FeatureDropdown 
        isOpen={isDropdownOpen} 
        handleSectionClick={handleSectionClick} 
        isMobile={true}
      />
      <button
        onClick={() => handleSectionClick('kontakt')}
        className="block py-2 text-royal hover:text-apple font-medium"
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
