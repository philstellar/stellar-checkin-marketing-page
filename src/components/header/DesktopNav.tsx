
import { memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CTAButton from '../CTAButton';
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from '@/hooks/use-translation';
import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type DesktopNavProps = {
  handleSectionClick: (sectionId: string) => void;
};

const DesktopNav = ({
  handleSectionClick
}: DesktopNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, currentLanguage } = useTranslation();

  const isProduction = window.location.hostname === 'stellar-checkin.com';

  const handleNavigation = (path: string) => {
    navigate(`/${currentLanguage}/${path}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== `/${currentLanguage}/` && location.pathname !== '/') {
      navigate(`/${currentLanguage}/`, {
        state: {
          scrollTo: sectionId
        }
      });
    } else {
      handleSectionClick(sectionId);
    }
  };

  const handleMouseEnter = (path: string) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = `/${currentLanguage}/${path}`;
    link.as = 'document';
    document.head.appendChild(link);
  };

  const renderBoldText = (text: string) => {
    const cleanText = text.replace(/\*\*/g, '');
    
    if (text !== cleanText) {
      return <strong className="text-apple">{cleanText}</strong>;
    }
    
    return cleanText;
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <div className="flex items-center space-x-1">
        <button 
          onClick={() => handleSectionNavigation('gaeste-voranmeldung')} 
          className="text-royal hover:text-apple font-medium transition-colors"
        >
          {renderBoldText(t('navigation.features'))}
        </button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button 
              className="text-royal hover:text-apple transition-colors outline-none ml-1 p-1"
              aria-label="Show features menu"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-md z-50">
            <DropdownMenuItem asChild>
              <a href="/#kurtaxe" className="cursor-pointer hover:bg-slate-100 w-full">
                {t('kurtaxe.title')}
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/#zusatzservices" className="cursor-pointer hover:bg-slate-100 w-full">
                {t('zusatzservices.title')}
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/#versicherung" className="cursor-pointer hover:bg-slate-100 w-full">
                {t('versicherung.title')}
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/#identitaetspruefung" className="cursor-pointer hover:bg-slate-100 w-full">
                {t('identity.title')}
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/#einstellungen" className="cursor-pointer hover:bg-slate-100 w-full">
                {t('settings.title')}
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/#integrationen" className="cursor-pointer hover:bg-slate-100 w-full">
                {t('integration.title')}
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <button 
        onClick={() => handleNavigation('versicherung')} 
        onMouseEnter={() => handleMouseEnter('versicherung')} 
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        {renderBoldText(t('navigation.insurance'))}
      </button>

      {!isProduction && (
        <button
          onClick={() => handleNavigation('trust-badge')}
          onMouseEnter={() => handleMouseEnter('trust-badge')}
          className="text-royal hover:text-apple font-medium transition-colors"
        >
          {renderBoldText(t('navigation.trustBadge'))}
        </button>
      )}

      <button onClick={() => handleSectionNavigation('preise')} className="text-royal hover:text-apple font-medium transition-colors">
        {t('navigation.pricing')}
      </button>
      <button onClick={() => handleSectionNavigation('kontakt')} className="text-royal hover:text-apple font-medium transition-colors">
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
