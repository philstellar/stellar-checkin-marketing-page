
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ZusatzservicesSection = () => {
  return (
    <section id="zusatzservices" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4">
            Zusatzservices verkaufen
            <div className="h-1 w-24 bg-apple mx-auto mb-6 rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 mb-12 max-w-3xl mx-auto">
            Steigern Sie Ihren Umsatz, indem Sie Ihren Gästen während des Check-in-Prozesses zusätzliche 
            Services anbieten. Von Early Check-in bis zu Premium-Angeboten.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Zusatzleistungen",
                description: "Bieten Sie Extras wie Early Check-in, Late Check-out, Premium-Zimmer-Upgrades oder Frühstücksoptionen an."
              },
              {
                title: "Nahtlose Zahlungsabwicklung",
                description: "Integrierte Zahlungsabwicklung mit allen gängigen Zahlungsmethoden direkt im Check-in-Prozess."
              },
              {
                title: "Zusätzliche Einnahmequellen",
                description: "Generieren Sie durch den Verkauf von Zusatzleistungen und Upgrades wertvolle Zusatzeinnahmen."
              }
            ].map((feature, index) => (
              <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-royal pb-2">
                    {feature.title}
                    <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 text-left">
                  <p className="text-royal-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <a href="/kontakt" target="_blank" rel="noopener noreferrer">
              <Button className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
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
