
import React from 'react';
import { Monitor, Check, RefreshCw, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const IntegrationenSection: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "PMS Integration",
      description: "Nahtlose Anbindung an Ihr Property Management System für effiziente Prozesse."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Schnittstellen zu Schlüsselsafes",
      description: "Automatisierte Verwaltung von Zugangscodes für kontaktlosen Check-in."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "API für individuelle Lösungen",
      description: "Flexible Schnittstellen für Integration in Ihre bestehende Systemlandschaft."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Anbindung an Zahlungssysteme",
      description: "Integrierte Zahlungsabwicklung für Zusatzleistungen und Kautionen."
    }
  ];

  return (
    <section id="integrationen" className="py-20 bg-floral">
      <div className="container-custom">
        <div className="text-center mx-auto max-w-3xl mb-10">
          <h2 className="text-3xl font-bold mb-4 text-royal mx-auto">
            Nahtlose Integrationen
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 mx-auto max-w-2xl">
            Verbinden Sie unsere Lösung mit Ihren bestehenden Systemen und optimieren Sie Ihre gesamte Verwaltung.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className={cn("rounded-lg p-2.5 bg-floral-400 text-royal")}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-royal">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-royal-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationenSection;
