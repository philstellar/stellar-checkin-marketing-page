
import { ShoppingBag, ArrowRight, ExternalLink, CreditCard, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZusatzservicesSection = () => {
  return (
    <section id="zusatzservices" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Zusatzservices verkaufen</h2>
            <p className="text-lg text-gray-700 mb-8">
              Steigern Sie Ihren Umsatz, indem Sie Ihren Gästen während des Check-in-Prozesses zusätzliche 
              Services anbieten. Von Early Check-in bis zu Premium-Angeboten.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <ShoppingBag className="h-6 w-6" />,
                  title: "Zusatzleistungen",
                  description: "Bieten Sie Extras wie Early Check-in, Late Check-out, Premium-Zimmer-Upgrades oder Frühstücksoptionen an."
                },
                {
                  icon: <CreditCard className="h-6 w-6" />,
                  title: "Nahtlose Zahlungsabwicklung",
                  description: "Integrierte Zahlungsabwicklung mit allen gängigen Zahlungsmethoden direkt im Check-in-Prozess."
                },
                {
                  icon: <DollarSign className="h-6 w-6" />,
                  title: "Zusätzliche Einnahmequellen",
                  description: "Generieren Sie durch den Verkauf von Zusatzleistungen und Upgrades wertvolle Zusatzeinnahmen."
                }
              ].map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-stellar-100 flex items-center justify-center text-stellar-600">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button className="bg-stellar-600 hover:bg-stellar-700">
                  Mehr erfahren <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden stellar-shadow">
              <img 
                src="/lovable-uploads/1e87bebd-cc85-4900-af99-c188ac6df182.png"
                alt="Zusatzservices verkaufen" 
                className="w-full h-full object-cover bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZusatzservicesSection;
