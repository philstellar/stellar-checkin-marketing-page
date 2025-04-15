
import React from 'react';
import { Settings, Globe, Image, Palette, PenSquare, Languages } from 'lucide-react';

export const EinstellungenSection: React.FC = () => {
  return (
    <section id="einstellungen" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-royal">
            Anpassungsmöglichkeiten
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            Gestalte das Check-in-Erlebnis individuell mit anpassbarem Branding und mehrsprachiger Oberfläche
          </p>
        </div>
        
        <div className="relative">
          {/* Central device mockup */}
          <div className="relative z-10 mx-auto w-full max-w-lg">
            <img 
              src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=1000" 
              alt="Customizable check-in interface" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          
          {/* Feature circles around the device */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-4xl h-full">
              {[
                { 
                  icon: <Globe className="h-8 w-8" />, 
                  title: "Mehrsprachigkeit", 
                  description: "Unterstützung für alle relevanten Sprachen",
                  position: "top-0 left-0"
                },
                { 
                  icon: <Image className="h-8 w-8" />, 
                  title: "Logo & Branding", 
                  description: "Integriere dein eigenes Logo und Farben",
                  position: "top-0 right-0" 
                },
                { 
                  icon: <Palette className="h-8 w-8" />, 
                  title: "Designanpassungen", 
                  description: "Passe Farben und Stil an deine CI an",
                  position: "bottom-0 left-1/4 transform -translate-x-1/2" 
                },
                { 
                  icon: <PenSquare className="h-8 w-8" />, 
                  title: "Individueller Text", 
                  description: "Bearbeite Texte und Beschreibungen",
                  position: "bottom-0 right-1/4 transform translate-x-1/2" 
                },
                { 
                  icon: <Settings className="h-8 w-8" />, 
                  title: "Flexible Einstellungen", 
                  description: "Konfiguriere, welche Informationen abgefragt werden",
                  position: "left-0 top-1/2 transform -translate-y-1/2" 
                },
                { 
                  icon: <Languages className="h-8 w-8" />, 
                  title: "Zugänglichkeit", 
                  description: "Barrierearme Bedienung für alle Nutzer",
                  position: "right-0 top-1/2 transform -translate-y-1/2" 
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`absolute ${feature.position} hidden md:flex flex-col items-center p-4 bg-white rounded-full shadow-lg w-40 h-40 justify-center transition-all hover:scale-110`}
                  style={{
                    transform: `rotate(${index * 60}deg) translate(270px) rotate(-${index * 60}deg)`
                  }}
                >
                  <div className="bg-apple p-3 rounded-full text-white mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-royal mb-1 text-center">{feature.title}</h3>
                  <p className="text-xs text-royal-700 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile-friendly list for small screens */}
          <div className="grid grid-cols-2 gap-4 mt-12 md:hidden">
            {[
              { 
                icon: <Globe className="h-6 w-6 text-apple" />, 
                title: "Mehrsprachigkeit", 
                description: "Unterstützung für alle relevanten Sprachen"
              },
              { 
                icon: <Image className="h-6 w-6 text-apple" />, 
                title: "Logo & Branding", 
                description: "Integriere dein eigenes Logo und Farben"
              },
              { 
                icon: <Palette className="h-6 w-6 text-apple" />, 
                title: "Designanpassungen", 
                description: "Passe Farben und Stil an deine CI an"
              },
              { 
                icon: <PenSquare className="h-6 w-6 text-apple" />, 
                title: "Individueller Text", 
                description: "Bearbeite Texte und Beschreibungen"
              },
              { 
                icon: <Settings className="h-6 w-6 text-apple" />, 
                title: "Flexible Einstellungen", 
                description: "Konfiguriere, welche Informationen abgefragt werden"
              },
              { 
                icon: <Languages className="h-6 w-6 text-apple" />, 
                title: "Zugänglichkeit", 
                description: "Barrierearme Bedienung für alle Nutzer"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  {feature.icon}
                  <h3 className="ml-2 text-sm font-semibold text-royal">{feature.title}</h3>
                </div>
                <p className="text-xs text-royal-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EinstellungenSection;
