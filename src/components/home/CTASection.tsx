
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const CTASection = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const handleNavigation = (path: string) => {
    navigate(`/${language}/${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-royal font-aeonik">
            Warum Stellar?
          </h2>
          <p className="text-lg text-royal-700 mb-8 font-aeonik">
            Unsere ganzheitliche Lösung verbindet digitalen Check-in, Versicherungsschutz und Vertrauenssiegel zu einem nahtlosen Erlebnis für Sie und Ihre Gäste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              variant="default"
              size="lg"
              className="font-aeonik"
            >
              Jetzt Registrieren <ArrowRight className="ml-2 h-4 w-4" />
            </CTAButton>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => handleNavigation('ueber-uns')}
              className="font-aeonik"
            >
              Über uns
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
