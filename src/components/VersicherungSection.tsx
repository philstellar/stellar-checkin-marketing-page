
import { Shield, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VersicherungSection = () => {
  return (
    <section id="versicherung" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stellar-600 mb-4">
            Gästeversicherung und / oder Kaution automatisieren
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Bieten Sie Ihren Gästen eine moderne Alternative zur klassischen Kaution. Mit unserer integrierten Versicherungslösung profitieren beide Seiten.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 h-12 w-12 rounded-md bg-stellar-100 flex items-center justify-center text-stellar-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a href="/kontakt" target="_blank" rel="noopener noreferrer">
              <Button className="bg-stellar-600 hover:bg-stellar-700">
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
