
import React from 'react';
import { UserCheck } from 'lucide-react';
import CTAButton from "@/components/CTAButton";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/use-translation';
import OptimizedImage from '@/components/OptimizedImage';

const HeroSection = () => {
  const navigate = useNavigate();
  const { t, currentLanguage } = useTranslation();
  
  const handleReferenceClick = () => {
    navigate('/de/erfolgsbeispiele');
  };
  
  const handleTrustBadgeClick = () => {
    navigate(`/${currentLanguage}/trust-badge`);
  };
  
  return (
    <section className="hero-section pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-white"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
              Nahtloser Online <span style={{color: "#a4c309"}}>Check-in</span>. Eingebauter Versicherungs-Schutz. Trust Badge
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              Die ultimative 360 Grad Lösung für Vertrauen und Sicherheit
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
                <UserCheck className="mr-2 h-4 w-4" /> Jetzt Starten
              </CTAButton>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center cursor-pointer" onClick={handleReferenceClick}>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-apple-300"></div>
                  <div className="w-8 h-8 rounded-full bg-apple-400"></div>
                  <div className="w-8 h-8 rounded-full bg-apple-500"></div>
                </div>
                <p className="ml-4 text-sm text-black font-aeonik hover:text-apple transition-colors">
                  <span className="font-medium">Hier geht es zu den Referenzen</span>
                </p>
              </div>
              <div className="cursor-pointer hover:text-apple transition-colors" onClick={handleTrustBadgeClick}>
                <span className="font-medium text-sm">{t('navigation.trustBadge')}</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-last flex justify-center">
            <OptimizedImage 
              src="/lovable-uploads/c8760687-17ea-4cbe-b66e-6a87286d97db.png" 
              alt="Stellar Online Check-in Interface" 
              className="w-full h-auto object-contain bg-transparent"
              loading="eager"
              priority={true}
              width={500}
              height={900}
              sizes="(max-width: 768px) 90vw, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
