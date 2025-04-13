
import React from 'react';
import { 
  Cable, 
  ShieldCheck, 
  BarChart3, 
  Gift, 
  Sliders 
} from "lucide-react";

type FunktionenDropdownProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
  isMobile?: boolean;
  onClose?: () => void;
};

const FunktionenDropdown = ({ 
  isOpen, 
  handleSectionClick, 
  isMobile = false,
  onClose 
}: FunktionenDropdownProps) => {
  if (!isOpen) return null;

  const features = [
    { title: "Integrationen", targetSection: "integrationen", icon: <Cable className="w-4 h-4" /> },
    { title: "Gästeversicherung", targetSection: "versicherung", icon: <ShieldCheck className="w-4 h-4" /> },
    { title: "Berichte & Analysen", targetSection: "berichte", icon: <BarChart3 className="w-4 h-4" /> },
    { title: "Zusatzservices", targetSection: "zusatzservices", icon: <Gift className="w-4 h-4" /> },
    { title: "Anpassungsmöglichkeiten", targetSection: "einstellungen", icon: <Sliders className="w-4 h-4" /> }
  ];

  const handleItemClick = (targetSection: string) => {
    handleSectionClick(targetSection);
    if (onClose) {
      onClose();
    }
  };

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
          onClick={() => handleItemClick(feature.targetSection)}
          className={`
            ${isMobile 
              ? 'block w-full text-left py-1 text-royal-700 hover:text-apple flex items-center gap-2' 
              : 'block w-full text-left px-4 py-2 text-sm text-royal-700 hover:bg-gray-50 hover:text-apple flex items-center gap-2'
            }
          `}
        >
          {feature.icon}
          {feature.title}
        </button>
      ))}
    </div>
  );
};

export default FunktionenDropdown;
