
import React from 'react';
import { Button } from "@/components/ui/button";
import { Palette, Globe, Smartphone, Mail } from 'lucide-react';

const AnpassungenSection: React.FC = () => {
  return (
    <section id="einstellungen" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 text-sm border border-apple text-apple rounded-full mb-4">
            Vollständig anpassbar
          </span>
          <h2 className="text-3xl font-bold mb-4 text-royal">
            Anpassungsmöglichkeiten
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700">
            Gestalte das Check-in-Erlebnis individuell mit anpassbarem Branding und mehrsprachiger 
            Oberfläche, perfekt abgestimmt auf deine Marke und Gäste.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-floral rounded-xl p-6 shadow-inner">
              <div className="space-y-8">
                {[
                  {
                    icon: <Palette className="h-8 w-8 text-apple" />,
                    title: "Eigenes Design",
                    description: "Passe Farben, Logo und Gestaltung an deine Marke an"
                  },
                  {
                    icon: <Globe className="h-8 w-8 text-apple" />,
                    title: "Mehrsprachigkeit",
                    description: "Biete den Check-in in verschiedenen Sprachen für internationale Gäste"
                  },
                  {
                    icon: <Smartphone className="h-8 w-8 text-apple" />,
                    title: "Responsive Design",
                    description: "Optimiert für alle Geräte - von Smartphone bis Desktop"
                  },
                  {
                    icon: <Mail className="h-8 w-8 text-apple" />,
                    title: "E-Mail-Vorlagen",
                    description: "Individualisiere alle Kommunikation mit deinen Gästen"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-royal mb-1">{feature.title}</h3>
                      <p className="text-royal-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button className="bg-apple text-white hover:bg-apple-600">
                  Demo vereinbaren
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-apple text-white px-4 py-1 rounded-full z-10 text-sm font-medium">
                Responsives Design für alle Geräte
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <h4 className="text-royal font-semibold mb-2 text-center">Desktop</h4>
                  <img 
                    src="/lovable-uploads/4d73a118-7cc1-4e3f-bf33-dec5ec07b93c.png" 
                    alt="Desktop Design" 
                    className="w-full h-auto rounded border border-gray-200"
                  />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg shadow-md transform scale-110 z-10">
                  <h4 className="text-apple font-semibold mb-2 text-center">Tablet</h4>
                  <img 
                    src="/lovable-uploads/b92f1bdf-aaee-49aa-adb9-a2c7ff1f56a9.png" 
                    alt="Tablet Design" 
                    className="w-full h-auto rounded border border-gray-200"
                  />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <h4 className="text-royal font-semibold mb-2 text-center">Mobile</h4>
                  <img 
                    src="/lovable-uploads/659dc62b-040f-4b60-bd0a-a91d61147d17.png" 
                    alt="Mobile Design" 
                    className="w-full h-auto rounded border border-gray-200"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-floral-500 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnpassungenSection;
