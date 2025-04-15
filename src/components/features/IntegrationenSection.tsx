
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Server, Database, Link2, RefreshCw } from 'lucide-react';

const IntegrationenSection: React.FC = () => {
  return (
    <section id="integrationen" className="py-20 bg-floral-500">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-royal">
              Integration mit Ihrem PMS
              <div className="mt-2 h-1 w-24 bg-apple rounded-full"></div>
            </h2>
            
            <p className="text-lg text-royal-700 mb-8">
              Verbinde unseren Online-Check-in nahtlos mit deiner bestehenden Property-Management-Software. 
              Genieße automatischen Datenaustausch und effiziente Prozesse ohne Doppelarbeit oder manuelle Eingaben.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: <Database className="h-6 w-6 text-apple" />,
                  title: "Bidirektionaler Datenaustausch",
                  description: "Synchronisiere Buchungsdaten, Gästeinformationen und Zahlungen automatisch in beide Richtungen"
                },
                {
                  icon: <Server className="h-6 w-6 text-apple" />,
                  title: "Flexible API-Anbindung",
                  description: "Offene Schnittstellen für die Integration mit nahezu jedem PMS oder Buchungssystem"
                },
                {
                  icon: <Link2 className="h-6 w-6 text-apple" />,
                  title: "Vorgefertigte Integrationen",
                  description: "Direkte Verbindungen zu allen gängigen PMS wie Smoobu, Lodgify, Rentals United und vielen mehr"
                }
              ].map((feature, index) => (
                <div key={index}>
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-royal mb-1">{feature.title}</h3>
                      <p className="text-royal-700">{feature.description}</p>
                    </div>
                  </div>
                  {index < 2 && <Separator className="my-6 bg-gray-200" />}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="font-bold text-royal text-lg mb-6 flex items-center">
                  <RefreshCw className="h-5 w-5 text-apple mr-2" />
                  Unterstützte Systeme
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {['Smoobu', 'Lodgify', 'Rentals United', 'BookingSync', 'OwnerRez', 'Hostaway'].map((system, idx) => (
                    <div key={idx} className="bg-floral-100 p-3 rounded-lg text-center">
                      <p className="font-medium text-royal">{system}</p>
                    </div>
                  ))}
                </div>
                
                <img
                  src="/lovable-uploads/bc398efb-0b31-4737-9ec9-7c55a90079ad.png"
                  alt="PMS Integrationen"
                  className="w-full h-auto rounded-lg border border-gray-100 mb-6"
                />
                
                <div className="bg-floral-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-royal mb-2">Datenfluss:</h4>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-lg mb-2">PMS</div>
                      <p className="text-xs text-royal-700">Buchungsdaten</p>
                    </div>
                    
                    <div className="flex-1 px-4">
                      <div className="h-0.5 bg-apple relative">
                        <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-apple rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white p-3 rounded-lg mb-2">Check-in</div>
                      <p className="text-xs text-royal-700">Gästedaten</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-apple-100 rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-royal-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationenSection;
