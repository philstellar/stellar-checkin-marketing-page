
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
import CTAButton from '../CTAButton';
import FunktionenDropdown from './FunktionenDropdown';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from '@/hooks/use-translation';
import LegalDropdown from './LegalDropdown';

type DesktopNavProps = {
  handleSectionClick: (sectionId: string) => void;
};

const DesktopNav = ({ handleSectionClick }: DesktopNavProps) => {
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { t, currentLanguage } = useTranslation();

  const toggleFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen);
    if (isLegalDropdownOpen) setIsLegalDropdownOpen(false);
  };

  const toggleLegalDropdown = () => {
    setIsLegalDropdownOpen(!isLegalDropdownOpen);
    if (isFeaturesDropdownOpen) setIsFeaturesDropdownOpen(false);
  };

  const closeFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(false);
  };

  const closeLegalDropdown = () => {
    setIsLegalDropdownOpen(false);
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <div className="relative">
        <button
          className="flex items-center text-royal hover:text-apple font-medium transition-colors"
          onClick={toggleFeaturesDropdown}
        >
          {t('navigation.features')} <ChevronDown className="ml-1 w-4 h-4" />
        </button>
        <FunktionenDropdown 
          isOpen={isFeaturesDropdownOpen} 
          handleSectionClick={handleSectionClick} 
          onClose={closeFeaturesDropdown}
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
      <div className="relative">
        <button
          className="flex items-center text-royal hover:text-apple font-medium transition-colors"
          onClick={toggleLegalDropdown}
        >
          {t('navigation.legal')} <ChevronDown className="ml-1 w-4 h-4" />
        </button>
        <LegalDropdown
          isOpen={isLegalDropdownOpen}
          onClose={closeLegalDropdown}
          currentLanguage={currentLanguage}
        />
      </div>
      <LanguageSelector />
      <CTAButton variant="default" className="bg-apple hover:bg-apple-600">
        {t('navigation.register')}
      </CTAButton>
    </nav>
  );
};

export default DesktopNav;
