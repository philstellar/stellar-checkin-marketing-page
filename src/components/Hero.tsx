
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-stellar-50 to-white"></div>
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
              <Button size="lg" className="bg-stellar-600 hover:bg-stellar-700">
                Kostenlos Testen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-stellar-600 text-stellar-600 hover:bg-stellar-50">
                Demo Video Ansehen
              </Button>
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
            <div className="relative">
              <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden stellar-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Stellar Checkin Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-stellar-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Neu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
