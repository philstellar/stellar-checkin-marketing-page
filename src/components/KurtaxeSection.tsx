
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calculator, Upload } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { UserCheck } from "lucide-react";

const KurtaxeSection = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8 text-apple" />,
      title: "Digitale Gästemeldung",
      description: "Erfasse Meldescheine digital – deine Gäste füllen alle Angaben einfach selbst aus."
    },
    {
      icon: <Calculator className="h-8 w-8 text-apple" />,
      title: "Automatische Berechnung",
      description: "Die Kurtaxe wird automatisch basierend auf den Angaben der Gäste berechnet und kann bequem direkt im Check-in bezahlt werden."
    },
    {
      icon: <Upload className="h-8 w-8 text-apple" />,
      title: "Behördenanbindung",
      description: "Direkte Übermittlung der Daten an die zuständigen Behörden über unsere Partner AVS und Ostseecard."
    }
  ];

  return (
    <section id="kurtaxe" className="py-20 bg-floral">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-royal">
            Digitale Gästemeldung, Erfassung von Bettensteuern, Kurtaxe etc.
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            Automatisiere die Erfassung und Verwaltung von Gästemeldungen, Bettensteuern und Kurtaxen zur Einhaltung lokaler Vorschriften.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white flex flex-col">
              <CardHeader className="pb-4 flex flex-col items-center text-center">
                <div className="bg-apple/10 p-4 rounded-full text-apple w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-royal">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2 text-center flex-grow">
                <p className="text-royal-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <CTAButton className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
            <UserCheck className="mr-2 h-4 w-4" /> Jetzt Registrieren
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default KurtaxeSection;
