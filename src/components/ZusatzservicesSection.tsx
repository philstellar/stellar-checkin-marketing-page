
import { ShoppingBag, CreditCard, DollarSign, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ZusatzservicesSection = () => {
  return (
    <section id="zusatzservices" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2661] mb-4">
            Zusatzservices verkaufen
          </h2>
          <div className="h-1 w-24 bg-[#0f2661] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Steigern Sie Ihren Umsatz, indem Sie Ihren Gästen während des Check-in-Prozesses zusätzliche 
            Services anbieten. Von Early Check-in bis zu Premium-Angeboten.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-[#eef1f8] flex items-center justify-center text-[#0f2661] mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <a href="/kontakt" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#0f2661] hover:bg-[#0a1d4d] text-white px-6 py-2.5">
                Mehr erfahren <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZusatzservicesSection;
