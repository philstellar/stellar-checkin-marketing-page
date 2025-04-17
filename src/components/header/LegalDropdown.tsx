
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/use-translation';

type LegalDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: string;
};

const LegalDropdown = ({ isOpen, onClose, currentLanguage }: LegalDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavigation = (path: string) => {
    navigate(`/${currentLanguage}/${path}`);
    onClose();
  };

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50"
    >
      <div className="space-y-1">
        <button 
          onClick={() => handleNavigation('impressum')}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('navigation.imprint')}
        </button>
        <button 
          onClick={() => handleNavigation('datenschutz')}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('navigation.privacyPolicy')}
        </button>
        <button 
          onClick={() => handleNavigation('agb')}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('navigation.termsAndConditions')}
        </button>
        <button 
          onClick={() => handleNavigation('versicherung')}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('navigation.insurance')}
        </button>
        <button 
          onClick={() => handleNavigation('trust-badge')}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('navigation.trustBadge')}
        </button>
      </div>
    </div>
  );
};

export default LegalDropdown;
