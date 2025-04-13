
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BerichteSection = () => {
  return (
    <section id="berichte" className="section-padding bg-floral">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Berichte und Analysen
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-black mb-8">
              Gewinnen Sie wertvolle Einblicke in Ihre Geschäftsdaten mit unseren umfassenden Analyse-Tools 
              und personalisierbaren Dashboards.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  title: "Detaillierte Auswertungen",
                  description: "Erhalten Sie tiefe Einblicke in Buchungszahlen, Gästeherkunft, Aufenthaltsdauer und mehr."
                },
                {
                  title: "Personalisierbare Dashboards",
                  description: "Erstellen Sie maßgeschneiderte Dashboards, die genau die Kennzahlen anzeigen, die für Sie wichtig sind."
                },
                {
                  title: "Trend-Analysen",
                  description: "Erkennen Sie frühzeitig Trends und saisonale Muster, um Ihre Planung zu optimieren."
                },
                {
                  title: "Exportfunktionen",
                  description: "Exportieren Sie Berichte in verschiedenen Formaten oder teilen Sie sie direkt mit Ihrem Team."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-black mb-2 pb-2 border-b border-apple">{feature.title}</h3>
                    <p className="text-base text-black">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
                  Dashboard Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/15b2e3c0-296f-4d40-b578-c06b8a7b3cfa.png"
                alt="Stellar Check-in Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BerichteSection;
