
import React from 'react';
import { UserCheck } from 'lucide-react';
import CTAButton from "@/components/CTAButton";

const HomeHeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-white"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
              Nahtloser Online Checkin. Eingebauter Versicherungs-Schutz. Trust Badge
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              360-Grad-Vertrauen für Ihre Ferienunterkunft
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
                <UserCheck className="mr-2 h-4 w-4" /> Jetzt Starten
              </CTAButton>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-apple-300"></div>
                <div className="w-8 h-8 rounded-full bg-apple-400"></div>
                <div className="w-8 h-8 rounded-full bg-apple-500"></div>
              </div>
              <p className="ml-4 text-sm text-black font-aeonik">
                <span className="font-medium">Einfach. Effizient. Für Sie und Ihre Gäste.</span>
              </p>
            </div>
          </div>
          <div className="order-1 md:order-last flex justify-center">
            {/* Right side intentionally left empty - screenshot removed as requested */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;

