
import React from 'react';
import { UserCheck } from 'lucide-react';
import CTAButton from "@/components/CTAButton";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleReferenceClick = () => {
    navigate('/de/erfolgsbeispiele');
  };

  return <section className="hero-section pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20 bg-white"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
              Nahtloser Online Checkin. Eingebauter Versicherungs-Schutz. Trust Badge
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              Die ultimative 360 Grad Lösung für Vertrauen und Sicherheit
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
                <UserCheck className="mr-2 h-4 w-4" /> Jetzt Starten
              </CTAButton>
            </div>
            <div className="mt-8 flex items-center cursor-pointer" onClick={handleReferenceClick}>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-apple-300"></div>
                <div className="w-8 h-8 rounded-full bg-apple-400"></div>
                <div className="w-8 h-8 rounded-full bg-apple-500"></div>
              </div>
              <p className="ml-4 text-sm text-black font-aeonik hover:text-apple transition-colors">
                <span className="font-medium">Hier geht es zu den Referenzen</span>
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-last flex justify-center">
            
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;

