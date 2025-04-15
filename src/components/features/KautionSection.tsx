
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CreditCard, BadgeCheck } from 'lucide-react';

const KautionSection: React.FC = () => {
  return (
    <section id="versicherung" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-floral-200 to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="lg:w-5/12">
            <h2 className="text-3xl font-bold mb-4 text-royal">
              Kautionsmanagement & Versicherung
              <div className="mt-2 h-1 w-24 bg-apple rounded-full"></div>
            </h2>
            
            <p className="text-lg text-royal-700 mb-8">
              Biete deinen Gästen eine moderne Alternative zur klassischen Kaution. Mit unserer integrierten 
              Versicherungslösung profitieren beide Seiten - mehr Sicherheit für dich, weniger Aufwand für deine Gäste.
            </p>
            
            <div className="relative mb-8">
              <img 
                src="/lovable-uploads/bf4b-c15845c051b9.png" 
                alt="Kautionsversicherung" 
                className="rounded-xl shadow-xl w-full max-w-md"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-apple-100 rounded-full z-0"></div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-floral-500 rounded-lg border border-apple-200 mb-8">
              <Shield className="w-8 h-8 text-apple-600" />
              <p className="font-medium text-royal">
                <span className="font-bold">Tipp:</span> Statt Kaution einzuziehen, biete deinen Gästen eine Versicherung 
                und verdiene durch Provisionen
              </p>
            </div>
          </div>
          
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-apple mb-3" />,
                  title: "Umfassender Schutz",
                  description: "Bessere Absicherung als klassische Kautionen, da die Versicherung auch größere Schäden abdeckt"
                },
                {
                  icon: <CreditCard className="h-8 w-8 text-apple mb-3" />,
                  title: "Keine Kautionsverwaltung",
                  description: "Keine Kautionsabwicklung mehr notwendig, Gäste können sofort ihre Unterkunft beziehen"
                },
                {
                  icon: <BadgeCheck className="h-8 w-8 text-apple mb-3" />,
                  title: "Zusätzliches Einkommen",
                  description: "Erhalte Provisionen für jede abgeschlossene Versicherung - ein attraktiver Nebenverdienst"
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all">
                  <CardHeader className="pb-0">
                    <div className="flex items-start gap-3">
                      <div className="bg-apple-50 p-2 rounded-lg">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-semibold text-royal">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-royal-700">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="bg-gradient-to-br from-apple-400 to-apple-600 text-white md:col-span-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">So funktioniert's:</h3>
                  <ol className="list-decimal list-inside space-y-3">
                    <li>Gäste wählen bei der Buchung zwischen Kaution oder Versicherung</li>
                    <li>Bei Auswahl der Versicherung zahlt der Gast eine geringe Prämie</li>
                    <li>Du erhältst eine Provision für jede abgeschlossene Versicherung</li>
                    <li>Im Schadensfall übernimmt die Versicherung die Regulierung</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KautionSection;
