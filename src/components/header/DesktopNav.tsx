
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

  const handleNavigation = (path: string) => {
    navigate(`/${currentLanguage}/${path}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSectionNavigation = (sectionId: string) => {
    const isHomePage = location.pathname === `/${currentLanguage}/` || location.pathname === '/';
    
    if (!isHomePage) {
      // If we're not on the homepage, navigate to home with the section in the URL
      navigate(`/${currentLanguage}/#${sectionId}`);
    } else {
      // If we're already on the homepage, just scroll to the section
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
          <DropdownMenuContent className="bg-white shadow-md z-50 !bg-white !border-gray-200">
            <DropdownMenuItem onClick={() => handleSectionNavigation('kurtaxe')} className="cursor-pointer hover:bg-slate-100 w-full">
              {t('kurtaxe.title')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSectionNavigation('zusatzservices')} className="cursor-pointer hover:bg-slate-100 w-full">
              {t('zusatzservices.title')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSectionNavigation('versicherung')} className="cursor-pointer hover:bg-slate-100 w-full">
              {t('versicherung.title')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSectionNavigation('identitaetspruefung')} className="cursor-pointer hover:bg-slate-100 w-full">
              {t('identity.title')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSectionNavigation('einstellungen')} className="cursor-pointer hover:bg-slate-100 w-full">
              {t('settings.title')}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSectionNavigation('integrationen')} className="cursor-pointer hover:bg-slate-100 w-full">
              {t('integration.title')}
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

      <button
        onClick={() => handleNavigation('trust-badge')}
        onMouseEnter={() => handleMouseEnter('trust-badge')}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        {renderBoldText(t('navigation.trustBadge'))}
      </button>

      <button 
        onClick={() => handleSectionNavigation(t('navigation.pricingAnchor'))}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        {t('navigation.pricing')}
      </button>
      
      <button 
        onClick={() => handleSectionNavigation(t('navigation.contactAnchor'))}
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
