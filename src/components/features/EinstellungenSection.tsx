
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Globe, Settings } from 'lucide-react';

export const EinstellungenSection: React.FC = () => {
  const features = [
    {
      icon: <Palette className="h-8 w-8 text-apple" />,
      title: "Design & Branding",
      description: "Passe das Design ganz einfach an – mit deinem Logo und deinen Markenfarben."
    },
    {
      icon: <Globe className="h-8 w-8 text-apple" />,
      title: "Sprachoptionen",
      description: "Mehrsprachiger Check-in – damit sich internationale Gäste sofort zurechtfinden."
    },
    {
      icon: <Settings className="h-8 w-8 text-apple" />,
      title: "Individueller Check-in",
      description: "Passe den Check-in-Prozess nach deinen Wünschen an und bestimme, welche Daten erfasst werden sollen."
    }
  ];

  return (
    <section id="einstellungen" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-royal">
            Individualisierung
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            Gestalte das Check-in-Erlebnis individuell – mit deinem eigenen Branding und einer mehrsprachigen Oberfläche
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
      </div>
    </section>
  );
};

export default EinstellungenSection;
