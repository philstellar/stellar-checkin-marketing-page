
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
import CTAButton from '../CTAButton';
import FeatureDropdown from './FeatureDropdown';

type DesktopNavProps = {
  handleSectionClick: (sectionId: string) => void;
};

const DesktopNav = ({ handleSectionClick }: DesktopNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link 
        to="/"
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        Home
      </Link>
      <div className="relative">
        <button
          className="flex items-center text-royal hover:text-apple font-medium transition-colors"
          onClick={toggleDropdown}
        >
          Features <ChevronDown className="ml-1 w-4 h-4" />
        </button>
        <FeatureDropdown 
          isOpen={isDropdownOpen} 
          handleSectionClick={handleSectionClick} 
        />
      </div>
      <button 
        onClick={() => handleSectionClick('kontakt')}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        Kontakt
      </button>
      <CTAButton variant="default" className="bg-apple hover:bg-apple-600">
        Demo Anfragen
      </CTAButton>
    </nav>
  );
};

export default DesktopNav;
