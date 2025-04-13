
import { 
  Monitor, 
  LinkIcon, 
  Shield, 
  BarChart2, 
  Settings, 
  ShoppingBag
} from "lucide-react";

type FeatureDropdownProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
  isMobile?: boolean;
};

const FeatureDropdown = ({ isOpen, handleSectionClick, isMobile = false }: FeatureDropdownProps) => {
  if (!isOpen) return null;
  
  const features = [
    { id: 'gaeste-voranmeldung', name: 'Gäste Voranmeldung', icon: Monitor },
    { id: 'zusatzservices', name: 'Zusatzservices verkaufen', icon: ShoppingBag },
    { id: 'integrationen', name: 'Integrationen', icon: LinkIcon },
    { id: 'versicherung', name: 'Versicherung', icon: Shield },
    { id: 'berichte', name: 'Berichte und Analysen', icon: BarChart2 },
    { id: 'einstellungen', name: 'Einstellungen', icon: Settings }
  ];

  return (
    <div className={isMobile ? "pl-4" : "absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-20"}>
      {features.map(({ id, name, icon: Icon }) => (
        <button 
          key={id}
          className={
            isMobile 
              ? "flex w-full items-center py-2 text-royal hover:text-apple" 
              : "flex w-full items-center px-4 py-2 text-royal hover:bg-floral hover:text-apple"
          }
          onClick={() => handleSectionClick(id)}
        >
          <Icon className="mr-2 h-4 w-4" />
          {name}
        </button>
      ))}
    </div>
  );
};

export default FeatureDropdown;
