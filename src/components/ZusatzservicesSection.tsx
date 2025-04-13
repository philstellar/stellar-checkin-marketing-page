
import { ShoppingBag, ArrowRight, ExternalLink, CreditCard, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZusatzservicesSection = () => {
  return (
    <section id="zusatzservices" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-1 gap-12 items-center text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stellar-600 mb-4">
              Zusatzservices verkaufen
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Steigern Sie Ihren Umsatz, indem Sie Ihren Gästen während des Check-in-Prozesses zusätzliche 
              Services anbieten. Von Early Check-in bis zu Premium-Angeboten.
            </p>
            
            <div className="space-y-6 max-w-3xl mx-auto">
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
                <div key={index} className="flex items-center text-left gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#eef1f8] flex items-center justify-center text-[#0f2661]">
                    {feature.icon}
                  </div>
                  <div>
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
        </div>
      </div>
    </section>
  );
};

export default ZusatzservicesSection;
