
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

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {!isProduction && (
        <button
          onClick={() => handleNavigation('home')}
          className="text-royal hover:text-apple font-medium transition-colors hover:bg-lavender/10 px-3 py-2 rounded-md"
        >
          {t('navigation.home')}
        </button>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger className="text-royal hover:text-apple font-medium transition-colors outline-none flex items-center gap-1 hover:bg-lavender/10 px-3 py-2 rounded-md">
          {t('features')}
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white w-56">
          <DropdownMenuItem 
            onClick={() => handleSectionClick('kurtaxe')}
            className="hover:bg-lavender/10"
          >
            {t('kurtaxe.title')}
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleSectionClick('zusatzservices')}
            className="hover:bg-lavender/10"
          >
            {t('zusatzservices.title')}
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => handleSectionClick('identitaetspruefung')}
            className="hover:bg-lavender/10"
          >
            {t('identity.title')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <button
        onClick={() => handleNavigation('trust-badge')}
        className="text-royal hover:text-apple font-medium transition-colors hover:bg-lavender/10 px-3 py-2 rounded-md"
      >
        Trust Badge
      </button>
      
      <button 
        onClick={() => handleSectionNavigation('preise')}
        className="text-royal hover:text-apple font-medium transition-colors hover:bg-lavender/10 px-3 py-2 rounded-md"
      >
        {t('navigation.pricing')}
      </button>

      <LanguageSelector />
      
      <CTAButton variant="default" className="bg-apple hover:bg-apple-600">
        {t('navigation.register')}
      </CTAButton>
    </nav>
  );
};

export default memo(DesktopNav);
