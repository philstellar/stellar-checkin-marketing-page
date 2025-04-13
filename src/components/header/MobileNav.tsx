
import { Link } from 'react-router-dom';
import CTAButton from '../CTAButton';

type MobileNavProps = {
  isOpen: boolean;
  handleSectionClick: (sectionId: string) => void;
};

const MobileNav = ({ isOpen, handleSectionClick }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 bg-white border-t">
      <Link 
        to="/"
        className="block py-2 text-royal hover:text-apple font-medium"
      >
        Home
      </Link>
      <button
        onClick={() => handleSectionClick('kontakt')}
        className="block py-2 text-royal hover:text-apple font-medium"
      >
        Kontakt
      </button>
      <div className="block mt-4">
        <CTAButton 
          className="w-full bg-apple hover:bg-apple-600"
        >
          Demo Anfragen
        </CTAButton>
      </div>
    </div>
  );
};

export default MobileNav;
