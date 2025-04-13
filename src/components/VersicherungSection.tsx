
import { Shield, Coins, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export const VersicherungSection = () => {
  return (
    <section id="versicherung" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Gästeversicherung und / oder Kaution automatisieren
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Bieten Sie Ihren Gästen eine moderne Alternative zur klassischen Kaution. Mit unserer integrierten Versicherungslösung profitieren beide Seiten.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <CheckCircle className="h-6 w-6 text-stellar-600" />,
                  title: "Schnellerer Check-in Prozess",
                  description: "Keine Kautionsabwicklung mehr notwendig, Gäste können sofort ihre Unterkunft beziehen."
                },
                {
                  icon: <CheckCircle className="h-6 w-6 text-stellar-600" />,
                  title: "Zusätzliche Einnahmequelle",
                  description: "Erhalten Sie Provisionen für jede abgeschlossene Versicherung - ein attraktiver Nebenverdienst."
                },
                {
                  icon: <CheckCircle className="h-6 w-6 text-stellar-600" />,
                  title: "Umfassender Schutz",
                  description: "Bessere Absicherung als klassische Kautionen, da die Versicherung auch größere Schäden abdeckt."
                }
              ].map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-stellar-100 flex items-center justify-center text-stellar-600">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button className="bg-stellar-600 hover:bg-stellar-700">
                  Mehr erfahren <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-stellar-600 text-white">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Vergleich der Optionen</CardTitle>
                    <CardDescription className="text-white/80">Versicherung vs. Kaution</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="col-span-1"></div>
                  <div className="font-medium text-stellar-600">Versicherung</div>
                  <div className="font-medium text-gray-600">Kaution</div>
                </div>
                
                {[
                  {
                    feature: "Finanzielle Belastung für Gäste",
                    insurance: "Niedrig",
                    deposit: "Hoch"
                  },
                  {
                    feature: "Absicherung bei Schäden",
                    insurance: "Umfassend",
                    deposit: "Begrenzt"
                  },
                  {
                    feature: "Check-in Prozess",
                    insurance: "Schnell",
                    deposit: "Zeitaufwändig"
                  },
                  {
                    feature: "Zusätzliche Einnahmen",
                    insurance: "Ja",
                    deposit: "Nein"
                  }
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
                    <div className="text-left font-medium text-gray-700">{item.feature}</div>
                    <div className="text-center text-stellar-600">{item.insurance}</div>
                    <div className="text-center text-gray-600">{item.deposit}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersicherungSection;
