
import React from 'react';

type FunktionenDropdownProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
  isMobile?: boolean;
};

const FunktionenDropdown = ({ isOpen, handleSectionClick, isMobile = false }: FunktionenDropdownProps) => {
  if (!isOpen) return null;

  const features = [
    { title: "Integrationen", targetSection: "integrationen" },
    { title: "Gästeversicherung", targetSection: "versicherung" },
    { title: "Berichte & Analysen", targetSection: "berichte" },
    { title: "Zusatzservices", targetSection: "zusatzservices" },
    { title: "Anpassungsmöglichkeiten", targetSection: "einstellungen" }
  ];

  return (
    <div 
      className={`
        ${isMobile 
          ? 'pl-4 space-y-2 mb-2' 
          : 'absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 py-2'
        }
      `}
    >
      {features.map((feature, index) => (
        <button
          key={index}
          onClick={() => handleSectionClick(feature.targetSection)}
          className={`
            ${isMobile 
              ? 'block w-full text-left py-1 text-royal-700 hover:text-apple' 
              : 'block w-full text-left px-4 py-2 text-sm text-royal-700 hover:bg-gray-50 hover:text-apple'
            }
          `}
        >
          {feature.title}
        </button>
      ))}
    </div>
  );
};

export default FunktionenDropdown;
