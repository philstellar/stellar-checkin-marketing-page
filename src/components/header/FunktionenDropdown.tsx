
import { useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/use-translation';

type FunktionenDropdownProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
  onClose: () => void;
};

const FunktionenDropdown = ({ isOpen, handleSectionClick, onClose }: FunktionenDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50"
    >
      <div className="space-y-1">
        <button 
          onClick={() => {
            handleSectionClick('kurtaxe');
            onClose();
          }}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('features.kurtaxe.title')}
        </button>
        <button 
          onClick={() => {
            handleSectionClick('zusatzservices');
            onClose();
          }}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('features.zusatzleistungen.title')}
        </button>
        <button 
          onClick={() => {
            handleSectionClick('versicherung');
            onClose();
          }}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('features.kaution.title')}
        </button>
        <button 
          onClick={() => {
            handleSectionClick('identitaetspruefung');
            onClose();
          }}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('features.identity.title')}
        </button>
        <button 
          onClick={() => {
            handleSectionClick('einstellungen');
            onClose();
          }}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('features.custom.title')}
        </button>
        <button 
          onClick={() => {
            handleSectionClick('integrationen');
            onClose();
          }}
          className="w-full text-left px-4 py-2 text-royal-700 hover:bg-floral-50 hover:text-apple transition-colors"
        >
          {t('features.integration.title')}
        </button>
      </div>
    </div>
  );
};

export default FunktionenDropdown;
