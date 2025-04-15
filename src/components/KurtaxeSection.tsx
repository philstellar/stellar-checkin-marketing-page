import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Calculator, Upload } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { UserPlus } from "lucide-react";

const KurtaxeSection = () => {
  return (
    <section id="kurtaxe" className="section-padding bg-floral">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Kurtaxe & digitale Gästemeldung
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-black mb-8">
              Automatisiere die Erfassung und Verwaltung von Kurtaxen und Gästemeldungen zur Einhaltung lokaler Vorschriften.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  icon: <FileText className="w-8 h-8 text-apple" />,
                  title: "Digitale Gästemeldung",
                  description: "Erfasse Meldescheine digital – deine Gäste füllen alle Angaben einfach selbst aus."
                },
                {
                  icon: <Calculator className="w-8 h-8 text-apple" />,
                  title: "Automatische Berechnung",
                  description: "Die Kurtaxe wird automatisch basierend auf den Angaben der Gäste berechnet und kann bequem direkt im Check-in bezahlt werden."
                },
                {
                  icon: <Upload className="w-8 h-8 text-apple" />,
                  title: "Behördenanbindung",
                  description: "Direkte Übermittlung der Daten an die zuständigen Behörden über unsere Partner AVS und Ostseecard."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="shrink-0">
                    {feature.icon}
                  </div>
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
              <CTAButton className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
                <UserPlus className="mr-2 h-4 w-4" /> Jetzt Registrieren
              </CTAButton>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1036"
                alt="Digitale Gästemeldung und Kurtaxe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KurtaxeSection;
