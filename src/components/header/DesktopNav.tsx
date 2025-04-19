
import { memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CTAButton from '../CTAButton';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from '@/hooks/use-translation';
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DesktopNavProps = {
  handleSectionClick: (sectionId: string) => void;
};

const DesktopNav = ({ handleSectionClick }: DesktopNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, currentLanguage } = useTranslation();
  const isProduction = window.location.hostname === 'stellar-checkin.com';

  const handleNavigation = (path: string) => {
    navigate(`/${currentLanguage}/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      handleSectionClick(sectionId);
    }
  };

  // Pre-load some critical routes on hover
  const handleMouseEnter = (path: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = `/${currentLanguage}/${path}`;
    link.as = 'document';
    document.head.appendChild(link);
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {!isProduction && (
        <button
          onClick={() => handleNavigation('home')}
          className="text-royal hover:text-apple font-medium transition-colors"
        >
          {t('navigation.home')}
        </button>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger className="text-royal hover:text-apple font-medium transition-colors outline-none flex items-center gap-1">
          {t('navigation.features')}
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuItem onClick={() => handleSectionClick('kurtaxe')}>
            {t('kurtaxe.title')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSectionClick('zusatzservices')}>
            {t('zusatzservices.title')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSectionClick('versicherung')}>
            {t('versicherung.title')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSectionClick('identitaetspruefung')}>
            {t('identity.title')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSectionClick('einstellungen')}>
            {t('settings.title')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSectionClick('integrationen')}>
            {t('integration.title')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {!isProduction && (
        <>
          <button
            onClick={() => handleNavigation('versicherung')}
            onMouseEnter={() => handleMouseEnter('versicherung')}
            className="text-royal hover:text-apple font-medium transition-colors"
          >
            {t('navigation.insurance')}
          </button>
          <button
            onClick={() => handleNavigation('trust-badge')}
            onMouseEnter={() => handleMouseEnter('trust-badge')}
            className="text-royal hover:text-apple font-medium transition-colors"
          >
            {t('navigation.trustBadge')}
          </button>
        </>
      )}
      
      <button 
        onClick={() => handleSectionNavigation('preise')}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        {t('navigation.pricing')}
      </button>
      <button 
        onClick={() => handleSectionNavigation('kontakt')}
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

export default memo(DesktopNav);
