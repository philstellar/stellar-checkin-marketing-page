
import React from 'react';
import { Database, Plug, Link, ServerCog } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import CTAButton from "@/components/CTAButton";

export const IntegrationenSection: React.FC = () => {
  const integrations = [
    { 
      name: "Smoobu", 
      category: "PMS", 
      description: "Nahtlose Anbindung an Smoobu für Ferienwohnungen und Hotels."
    },
    { 
      name: "Beds24", 
      category: "PMS", 
      description: "Vollständige Integration für optimierte Abläufe."
    },
    { 
      name: "AVS", 
      category: "Kurtaxe", 
      description: "Automatische Übermittlung der Gästedaten für Kurtaxe."
    },
    { 
      name: "meldeschein.de", 
      category: "Meldewesen", 
      description: "Digitale Gästemeldung mit rechtssicherer Unterschrift."
    }
  ];

  const features = [
    {
      icon: <Database className="w-8 h-8 text-apple" />,
      title: "PMS Integration",
      description: "Nahtlose Anbindung an dein Property Management System für effiziente Datensynchronisation."
    },
    {
      icon: <Plug className="w-8 h-8 text-apple" />,
      title: "API Schnittstellen",
      description: "Offene API für maßgeschneiderte Integrationen und individuelle Anpassungen."
    },
    {
      icon: <Link className="w-8 h-8 text-apple" />,
      title: "Zahlungssysteme",
      description: "Direktanbindung an führende Zahlungsanbieter wie Stripe und PayPal."
    },
    {
      icon: <ServerCog className="w-8 h-8 text-apple" />,
      title: "Webhooks",
      description: "Ereignisbasierte Benachrichtigungen für Echtzeit-Updates in deinen Systemen."
    }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "PMS": return "bg-blue-100 text-blue-800";
      case "Kurtaxe": return "bg-green-100 text-green-800";
      case "Meldewesen": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "PMS": return <Database className="h-5 w-5" />;
      case "Kurtaxe": return <Link className="h-5 w-5" />;
      case "Meldewesen": return <ServerCog className="h-5 w-5" />;
      default: return <Database className="h-5 w-5" />;
    }
  };

  return (
    <section id="integrationen" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-first md:order-first">
            <div className="rounded-xl flex justify-center">
              <img 
                src="/lovable-uploads/80368f3d-e665-4922-ae52-be3ada6ee903.png"
                alt="Systemintegrationen für Ferienwohnungen" 
                className="w-4/5 h-auto object-contain bg-transparent"
              />
            </div>
          </div>
          
          <div className="order-last md:order-last">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Integration mit Ihrem PMS
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-black mb-8">
              Ob Integration mit Smoobu, Beds24 oder anderen Systemen - wir verbinden die Plattformen nahtlos für einen optimierten Workflow.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="shrink-0">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-black mb-2 pb-2">
                      {feature.title}
                      <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                    </h3>
                    <p className="text-base text-black">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <CTAButton className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
                Integrationen entdecken
              </CTAButton>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Unterstützte Systeme
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{integration.name}</h3>
                    <Badge className={`${getCategoryColor(integration.category)} flex items-center gap-1.5`}>
                      {getCategoryIcon(integration.category)} {integration.category}
                    </Badge>
                  </div>
                  <p className="text-royal-700">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationenSection;
