
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '../CTAButton';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from '@/hooks/use-translation';

type DesktopNavProps = {
  handleSectionClick: (sectionId: string) => void;
};

const DesktopNav = ({ handleSectionClick }: DesktopNavProps) => {
  const navigate = useNavigate();
  const { t, currentLanguage } = useTranslation();

  const handleNavigation = (path: string) => {
    navigate(`/${currentLanguage}/${path}`);
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <button 
        onClick={() => handleSectionClick('features')}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        {t('navigation.features')}
      </button>
      <button
        onClick={() => handleNavigation('versicherung')}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        {t('navigation.insurance')}
      </button>
      <button
        onClick={() => handleNavigation('trust-badge')}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        {t('navigation.trustBadge')}
      </button>
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
