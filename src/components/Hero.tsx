
import React from 'react';
import { LogIn } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import CTAButton from "./CTAButton";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              Die umfassende digitale <span className="text-apple">Check-in</span> Lösung für Ferienwohnungen
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg">
              Automatisiere den gesamten Check-in-Prozess deiner Ferienimmobilie von der Kurtaxe über die Gästemeldung bis zum Verkauf von Zusatzleistungen.<br /><br /> 
              Weniger Aufwand, mehr Umsatz – und ein Check-in, der Gäste begeistert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" className="bg-apple hover:bg-apple-600">
                <LogIn className="mr-2 h-4 w-4" /> LogIn
              </CTAButton>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-apple-300"></div>
                <div className="w-8 h-8 rounded-full bg-apple-400"></div>
                <div className="w-8 h-8 rounded-full bg-apple-500"></div>
              </div>
              <p className="ml-4 text-sm text-black">
                <span className="font-medium">Einfach. Effizient. Für dich und deine Gäste.</span>
              </p>
            </div>
          </div>
          
          <div className="md:pl-8 animate-fade-in">
            <div className="relative group hover-scale transition-all duration-300">
              <img 
                src="/lovable-uploads/88f97631-50cd-493d-b68c-92e73cb443c7.png" 
                alt="Stellar Online Check-in Interface" 
                className="w-full h-auto object-contain rounded-lg z-10 relative transform scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
