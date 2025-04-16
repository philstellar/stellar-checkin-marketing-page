
import { Button } from "@/components/ui/button";
import { FileText, Calculator, Upload, UserCheck } from "lucide-react";
import CTAButton from "@/components/CTAButton";

const KurtaxeSection = () => {
  return (
    <section id="kurtaxe" className="section-padding bg-floral">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Digitale Gästemeldung, Erfassung von Bettensteuern, Kurtaxe etc.
          </h2>
          <div className="h-1 w-24 bg-apple mb-6 rounded-full mx-auto"></div>
          <p className="text-lg text-black mb-8">
            Automatisiere die Erfassung und Verwaltung von Gästemeldungen, Bettensteuern und Kurtaxen zur Einhaltung lokaler Vorschriften.
          </p>
          
          <div className="space-y-8 max-w-2xl mx-auto">
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
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="shrink-0">
                  {feature.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-black mb-2 pb-2">
                    {feature.title}
                    <div className="mt-1 h-1 w-[30%] bg-apple rounded-full mx-auto"></div>
                  </h3>
                  <p className="text-base text-black">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <CTAButton className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
              <UserCheck className="mr-2 h-4 w-4" /> Jetzt Registrieren
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KurtaxeSection;
