
import { CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const VersicherungSection = () => {
  return (
    <section id="versicherung" className="section-padding bg-floral">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4">
            Gästeversicherung und Kaution automatisieren
          </h2>
          <div className="h-1 w-24 bg-apple mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-royal-700 mb-12 max-w-3xl mx-auto">
            Bieten Sie Ihren Gästen eine moderne Alternative zur klassischen Kaution. Mit unserer integrierten Versicherungslösung profitieren beide Seiten.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "Schnellerer Check-in Prozess",
                description: "Keine Kautionsabwicklung mehr notwendig, Gäste können sofort ihre Unterkunft beziehen."
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "Zusätzliche Einnahmequelle",
                description: "Erhalten Sie Provisionen für jede abgeschlossene Versicherung - ein attraktiver Nebenverdienst."
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "Umfassender Schutz",
                description: "Bessere Absicherung als klassische Kautionen, da die Versicherung auch größere Schäden abdeckt."
              }
            ].map((feature, index) => (
              <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className={cn("rounded-lg p-2.5 bg-floral-400 text-royal")}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-royal text-left">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-royal-700 text-left">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <a href="/kontakt" target="_blank" rel="noopener noreferrer">
              <Button className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
                Mehr erfahren <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersicherungSection;
