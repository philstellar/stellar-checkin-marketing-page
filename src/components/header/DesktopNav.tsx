
import { Link } from 'react-router-dom';
import CTAButton from '../CTAButton';

type DesktopNavProps = {
  handleSectionClick: (sectionId: string) => void;
};

const DesktopNav = ({ handleSectionClick }: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link 
        to="/"
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        Home
      </Link>
      <button 
        onClick={() => handleSectionClick('kontakt')}
        className="text-royal hover:text-apple font-medium transition-colors"
      >
        Kontakt
      </button>
      <CTAButton variant="default" className="bg-apple hover:bg-apple-600">
        Demo Anfragen
      </CTAButton>
    </nav>
  );
};

export default DesktopNav;
