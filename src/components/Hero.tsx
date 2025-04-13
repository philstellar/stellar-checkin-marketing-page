import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent to-transparent"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Moderne <span className="text-stellar-600">Check-in</span> Lösungen für Ihr Unternehmen
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Vereinfachen Sie Ihre Besucheranmeldung mit unserem digitalen Check-in System. Schnell, sicher und effizient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-stellar-600 hover:bg-stellar-700">
                  Kostenlos Testen
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-stellar-600 text-stellar-600 hover:bg-stellar-50">
                  Demo Video Ansehen
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-stellar-300"></div>
                <div className="w-8 h-8 rounded-full bg-stellar-400"></div>
                <div className="w-8 h-8 rounded-full bg-stellar-500"></div>
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-medium">500+ Unternehmen</span> nutzen Stellar Checkin
              </p>
            </div>
          </div>
          
          <div className="md:pl-8 animate-fade-in">
            <div className="relative group hover-scale transition-all duration-300">
              <img 
                src="/lovable-uploads/a027d0f2-291d-4ad3-8ca2-91eaadf168e6.png" 
                alt="Stellar Checkin Dashboard auf Tablet" 
                className="w-full h-auto object-contain rounded-lg z-10 relative"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-20 h-20 sm:w-24 sm:h-24 bg-stellar-600 rounded-lg flex items-center justify-center transform rotate-3 -z-0">
                <span className="text-white font-bold text-lg sm:text-xl">Neu</span>
              </div>
              
              <div className="absolute -inset-0.5 bg-gradient-to-br from-stellar-300 to-stellar-600 opacity-0 group-hover:opacity-20 rounded-lg blur-sm transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
