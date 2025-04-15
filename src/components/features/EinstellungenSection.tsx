
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Globe, Settings } from 'lucide-react';

export const EinstellungenSection: React.FC = () => {
  const features = [
    {
      icon: <Palette className="h-6 w-6 text-apple" />,
      title: "Design & Branding",
      description: "Passen Sie das Erscheinungsbild mit eigenen Farben, Logos und Schriftarten an Ihre Marke an."
    },
    {
      icon: <Globe className="h-6 w-6 text-apple" />,
      title: "Mehrsprachigkeit",
      description: "Unterstützung für mehr als 20 Sprachen, damit alle Ihre internationalen Gäste ein reibungsloses Erlebnis haben."
    },
    {
      icon: <Settings className="h-6 w-6 text-apple" />,
      title: "Formularkonfiguration",
      description: "Definieren Sie selbst, welche Informationen erfasst werden sollen und gestalten Sie den Check-In-Prozess nach Ihren Wünschen."
    }
  ];

  return (
    <section id="einstellungen" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-royal">
            Anpassungsmöglichkeiten
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            Gestalten Sie das Check-in-Erlebnis individuell mit anpassbarem Branding und mehrsprachiger Oberfläche
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
              <CardHeader className="pb-2">
                <div className="bg-apple p-3 rounded-full text-white w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-royal pb-2">
                  {feature.title}
                  <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-royal-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EinstellungenSection;
