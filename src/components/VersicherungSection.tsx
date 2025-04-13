
import { Shield, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VersicherungSection = () => {
  return (
    <section id="versicherung" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2661] mb-4">
            Gästeversicherung und Kaution automatisieren
          </h2>
          <div className="h-1 w-24 bg-[#0f2661] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Bieten Sie Ihren Gästen eine moderne Alternative zur klassischen Kaution. Mit unserer integrierten Versicherungslösung profitieren beide Seiten.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-[#eef1f8] flex items-center justify-center text-[#0f2661] mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <a href="/kontakt" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#0f2661] hover:bg-[#0a1d4d] text-white px-6 py-2.5">
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
