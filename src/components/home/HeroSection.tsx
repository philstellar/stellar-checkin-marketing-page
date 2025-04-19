
import { UserCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik"
              style={{ contentVisibility: 'auto' }}
            >
              Stellar 360° <span style={{ color: 'rgb(164 195 9)' }}>Rundumlösung</span>
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              Vertrauen, Transparenz, Fairness und Sicherheit zwischen Gastgebern und Gästen. Die umfassende digitale Lösung für Ihre Ferienunterkunft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
                <UserCheck className="mr-2 h-4 w-4" /> Jetzt Starten
              </CTAButton>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => navigate('/')}
                className="font-aeonik"
              >
                Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-apple-300"></div>
                <div className="w-8 h-8 rounded-full bg-apple-400"></div>
                <div className="w-8 h-8 rounded-full bg-apple-500"></div>
              </div>
              <p className="ml-4 text-sm text-black font-aeonik">
                <span className="font-medium">Bereits über 1.000 zufriedene Gastgeber</span>
              </p>
            </div>
          </div>
          <div className="order-1 md:order-last flex justify-center">
            <Shield className="w-3/5 h-auto text-apple opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
