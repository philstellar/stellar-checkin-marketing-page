
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Clock, CreditCard, FileCheck } from 'lucide-react';

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
    },
    { 
      name: "Stripe", 
      category: "Zahlungen", 
      description: "Sichere und einfache Zahlungsabwicklung."
    },
    { 
      name: "PayPal", 
      category: "Zahlungen", 
      description: "Integration für schnelle Zahlungen und Erstattungen."
    },
    { 
      name: "REST API", 
      category: "Entwickler", 
      description: "Offene API für individuelle Integrationen."
    },
    { 
      name: "Webhooks", 
      category: "Entwickler", 
      description: "Ereignisbasierte Benachrichtigungen für eigene Anwendungen."
    }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "PMS": return "bg-blue-100 text-blue-800";
      case "Kurtaxe": return "bg-green-100 text-green-800";
      case "Meldewesen": return "bg-purple-100 text-purple-800";
      case "Zahlungen": return "bg-amber-100 text-amber-800";
      case "Entwickler": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "PMS": return <Database className="h-5 w-5" />;
      case "Kurtaxe": return <FileCheck className="h-5 w-5" />;
      case "Meldewesen": return <FileCheck className="h-5 w-5" />;
      case "Zahlungen": return <CreditCard className="h-5 w-5" />;
      case "Entwickler": return <Clock className="h-5 w-5" />;
      default: return <Database className="h-5 w-5" />;
    }
  };

  return (
    <section id="integrationen" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-royal">
            Nahtlose Integrationen
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            Ob Integration in das PMS, Kurtaxensystem (z.B. AVS) oder Zahlungsanbieter - wir vernetzen die Systeme
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
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
        
        <div className="mt-12 text-center">
          <p className="text-royal-700 italic mb-4">
            Vermissen Sie einen Anbieter? Kontaktieren Sie uns für individuelle Integrationen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationenSection;
