
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle, UploadCloud } from "lucide-react";

const KurtaxeSection: React.FC = () => {
  return (
    <section id="kurtaxe" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge variant="outline" className="bg-apple-100 text-apple-600 mb-4">Digitalisierung</Badge>
            <h2 className="text-3xl font-bold mb-6 text-royal">
              Kurtaxe & digitale Gästemeldung
              <div className="mt-2 h-1 w-20 bg-apple rounded-full"></div>
            </h2>
            <p className="text-lg text-royal-700 mb-8">
              Erfülle rechtliche Anforderungen einfach und zeitsparend. Unser digitales System automatisiert die 
              Erfassung und Übermittlung aller relevanten Daten für Kurtaxen und behördliche Meldepflichten.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { 
                  icon: <FileText className="h-8 w-8 text-apple mb-2" />, 
                  title: "Automatische Berechnung", 
                  description: "Korrekte Kurtaxen-Berechnung basierend auf Aufenthaltsdauer und Personenanzahl" 
                },
                { 
                  icon: <CheckCircle className="h-8 w-8 text-apple mb-2" />, 
                  title: "Rechtskonforme Meldung", 
                  description: "Alle gesetzlichen Vorgaben werden automatisch erfüllt" 
                },
                { 
                  icon: <UploadCloud className="h-8 w-8 text-apple mb-2" />, 
                  title: "Automatische Übermittlung", 
                  description: "Nahtlose Datenübertragung an Behörden und Abrechnungssysteme" 
                }
              ].map((feature, index) => (
                <Card key={index} className="border border-gray-100 bg-gray-50 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    {feature.icon}
                    <h3 className="font-semibold mb-2 text-royal">{feature.title}</h3>
                    <p className="text-sm text-royal-700">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="bg-floral p-4 rounded-xl relative z-10">
              <img 
                src="/lovable-uploads/47b42a33-5a74-48ad-aa33-ad6bb2ec41cf.png" 
                alt="Digitale Gästemeldung" 
                className="rounded-lg shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-apple-100 rounded-full z-0"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-apple-200 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KurtaxeSection;
