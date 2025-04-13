
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const IntegrationenSection: React.FC = () => {
  const features = [
    {
      title: "PMS Integration",
      description: "Nahtlose Anbindung an Ihr Property Management System für effiziente Prozesse."
    },
    {
      title: "Schnittstellen zu Schlüsselsafes",
      description: "Automatisierte Verwaltung von Zugangscodes für kontaktlosen Check-in."
    },
    {
      title: "API für individuelle Lösungen",
      description: "Flexible Schnittstellen für Integration in Ihre bestehende Systemlandschaft."
    },
    {
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
            Ob Integration in das PMS, Kurtaxensysten (z.B. AVS), wir vernetzen die Systeme
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-royal pb-2">
                  {feature.title}
                  <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-royal-700 text-left">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationenSection;
