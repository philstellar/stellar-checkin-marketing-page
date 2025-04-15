
import React from 'react';
import { ShoppingCart, DollarSign, PlusCircle } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const ZusatzleistungenSection: React.FC = () => {
  return (
    <section id="zusatzservices" className="py-20 bg-floral">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold mb-4 text-royal">
            Zusatzleistungen verkaufen
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700">
            Steigere deinen Umsatz, indem du deinen Gästen während des Check-in-Prozesses zusätzliche 
            Services anbietest. Von Early Check-in bis zu Premium-Angeboten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="flex flex-col space-y-8">
              {[
                {
                  icon: <ShoppingCart className="w-12 h-12 p-2 bg-apple text-white rounded-full" />,
                  title: "Breites Angebot",
                  description: "Biete Late Check-out, Frühstück, Parkplatz oder Fahrradverleih als Zusatzoptionen an"
                },
                {
                  icon: <DollarSign className="w-12 h-12 p-2 bg-apple text-white rounded-full" />,
                  title: "Umsatzsteigerung",
                  description: "Erhöhe deinen durchschnittlichen Buchungswert durch attraktive Zusatzangebote"
                },
                {
                  icon: <PlusCircle className="w-12 h-12 p-2 bg-apple text-white rounded-full" />,
                  title: "Flexibles Angebot",
                  description: "Passe deine Angebote jederzeit an die Saison, Auslastung oder Kundennachfrage an"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-royal mb-2">{item.title}</h3>
                    <p className="text-royal-700">{item.description}</p>
                    {index < 2 && <Separator className="mt-6 bg-gray-200" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="absolute top-4 right-4 bg-apple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  UPSELL
                </div>
                <img
                  src="/lovable-uploads/349e2cab-5eb3-4451-8d9e-0cdf5927f51b.png"
                  alt="Zusatzleistungen Upsell Screen"
                  className="rounded-lg w-full h-auto"
                />
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {['Early Check-in', 'Parkplatz', 'Premium-Zimmer'].map((service, idx) => (
                    <div key={idx} className="text-center p-3 bg-floral rounded-lg">
                      <p className="font-medium text-royal">{service}</p>
                      <p className="text-apple-600 font-bold">+ €15,00</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZusatzleistungenSection;
