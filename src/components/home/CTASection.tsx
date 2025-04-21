
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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-floral/30 to-white opacity-70"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-royal font-aeonik relative inline-block">
            Warum Stellar?
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-apple rounded-full"></span>
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
              <span className="flex items-center">
                Über uns <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
