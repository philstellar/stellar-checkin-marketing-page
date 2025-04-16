
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
import CTAButton from '../CTAButton';
import FunktionenDropdown from './FunktionenDropdown';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from '@/hooks/use-translation';

type DesktopNavProps = {
  handleSectionClick: (sectionId: string) => void;
};

const DesktopNav = ({ handleSectionClick }: DesktopNavProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        {t('navigation.home')}
      </button>
      <div className="relative">
        <button
          className="flex items-center text-royal hover:text-apple font-medium transition-colors"
          onClick={toggleDropdown}
        >
          {t('navigation.features')} <ChevronDown className="ml-1 w-4 h-4" />
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
        {t('navigation.pricing')}
      </button>
      <button 
        onClick={() => handleSectionClick('kontakt')}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        {t('navigation.contact')}
      </button>
      <LanguageSelector />
      <CTAButton variant="default" className="bg-apple hover:bg-apple-600">
        {t('navigation.register')}
      </CTAButton>
    </nav>
  );
};

export default DesktopNav;
