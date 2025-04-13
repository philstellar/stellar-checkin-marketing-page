
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const EinstellungenSection: React.FC = () => {
  const features = [
    {
      title: "Anpassbares Branding",
      description: "Gestalten Sie das Check-in-Erlebnis im Look & Feel Ihrer Marke."
    },
    {
      title: "Mehrsprachige Oberfläche",
      description: "Bieten Sie Ihren internationalen Gästen eine Benutzeroberfläche in ihrer Sprache."
    },
    {
      title: "Individuelle Datenfelder",
      description: "Erfassen Sie genau die Informationen, die für Ihre Ferienwohnung relevant sind."
    },
    {
      title: "Zeitgesteuerte Automatisierungen",
      description: "Legen Sie fest, wann Nachrichten und Erinnerungen an Ihre Gäste gesendet werden."
    }
  ];

  return (
    <section id="einstellungen" className="py-20 bg-floral">
      <div className="container-custom">
        <div className="text-center mx-auto max-w-3xl mb-10">
          <h2 className="text-3xl font-bold mb-4 text-royal mx-auto">
            Umfangreiche Anpassungsmöglichkeiten
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 mx-auto max-w-2xl">
            Passen Sie die Checkin-Lösung individuell an Ihre Bedürfnisse und die Ihrer Feriengäste an.
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

export default EinstellungenSection;
