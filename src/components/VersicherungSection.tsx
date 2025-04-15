
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const VersicherungSection = () => {
  return (
    <section id="versicherung" className="section-padding bg-floral">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Gästeversicherung und Kaution automatisieren
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-black mb-8">
              Biete deinen Gästen eine moderne Alternative zur klassischen Kaution. Mit unserer integrierten Versicherungslösung profitieren beide Seiten.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  title: "Schnellerer Check-in Prozess",
                  description: "Keine Kautionsabwicklung mehr notwendig, Gäste können sofort ihre Unterkunft beziehen."
                },
                {
                  title: "Zusätzliche Einnahmequelle",
                  description: "Erhalte Provisionen für jede abgeschlossene Versicherung - ein attraktiver Nebenverdienst."
                },
                {
                  title: "Umfassender Schutz",
                  description: "Bessere Absicherung als klassische Kautionen, da die Versicherung auch größere Schäden abdeckt."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-black mb-2 pb-2">
                      {feature.title}
                      <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                    </h3>
                    <p className="text-base text-black">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
                  Mehr erfahren <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170"
                alt="Versicherung und Kautionsabwicklung" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersicherungSection;
