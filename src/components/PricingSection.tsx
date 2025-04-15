import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, ExternalLink, Info, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import CTAButton from "@/components/CTAButton";
const PricingSection = () => {
  // Sample tooltip descriptions - these can be customized as needed
  const tooltipDescriptions = {
    zusatzleistungen: "Im Basic-Paket fällt eine Gebühr von 5 % auf den Gesamtwert der vom Gast gebuchten Zusatzleistungen an.",
    identitaetsverifizierung: "Die Biometrische Verifizierung ist optional und wird mit €1,50 pro Check-in berechnet.",
    kautionsmanagement: "Im Basic-Paket fällt eine Gebühr von 1 % auf den Gesamtwert der Kaution an.",
    versicherung: "Die Versicherung ist für den Gast optional oder als Ersatz für die Kaution wählbar.",
    digitaleGaestemeldung: "Gästemeldungen werden automatisch und gesetzeskonform an die Behörden übermittelt."
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="preise" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4">
            Unsere Preise
          </h2>
          <div className="h-1 w-24 bg-apple mb-6 mx-auto rounded-full"></div>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            Finde das passende Paket für deine Anforderungen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-2xl font-bold text-center text-royal mb-6">Basic</h3>
            
            <div className="text-center mb-6">
              <div className="flex items-end justify-center">
                <span className="text-4xl font-bold text-royal mr-2">5</span>
                <div className="flex flex-col items-start">
                  <span className="text-xl text-royal">€/Monat</span>
                  <span className="text-sm text-royal-700">pro Objekt</span>
                </div>
              </div>
              
            </div>
            
            <div className="flex justify-center mb-8">
              <CTAButton variant="outline" className="border-2 border-royal text-royal hover:bg-royal-50">
                Jetzt registrieren
              </CTAButton>
            </div>
            
            <div className="space-y-4">
              {["Online check-in", "Individualisierbare Gästeanmeldung", "PMS-Integrationen", {
              text: "Zusatzleistungen *",
              tooltip: tooltipDescriptions.zusatzleistungen
            }, {
              text: "Identitätsverifizierung *",
              tooltip: tooltipDescriptions.identitaetsverifizierung
            }, {
              text: "Kautionsmanagement *",
              tooltip: tooltipDescriptions.kautionsmanagement
            }, {
              text: "Gästeversicherung *",
              tooltip: tooltipDescriptions.versicherung
            }, "Zustimmung zum Beherbergungsvertrag"].map((feature, index) => {
              const isTooltipFeature = typeof feature === 'object';
              const featureText = isTooltipFeature ? feature.text : feature;
              const hasTooltip = featureText.includes("*");
              return <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-royal mr-3 flex-shrink-0" />
                    <span className="text-royal-700">
                      {featureText.replace(" *", "")}
                      {hasTooltip && isTooltipFeature && <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="inline-flex ml-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                              <HelpCircle className="w-4 h-4 text-royal-700 inline-block" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs text-sm">
                            {feature.tooltip}
                          </TooltipContent>
                        </Tooltip>}
                    </span>
                  </div>;
            })}
            </div>
          </div>

          {/* Popular Plan */}
          <div className="border-2 border-royal rounded-xl p-8 shadow-md relative bg-white">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <div className="bg-royal text-white px-4 py-1 rounded-full text-sm font-medium">
                Am beliebtesten
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center text-royal mb-6">Erweitert</h3>
            
            <div className="text-center mb-6">
              <div className="flex items-end justify-center">
                <span className="text-4xl font-bold text-royal mr-2">9</span>
                <div className="flex flex-col items-start">
                  <span className="text-xl text-royal">€/Monat</span>
                  <span className="text-sm text-royal-700">pro Objekt</span>
                </div>
              </div>
              
            </div>
            
            <div className="flex justify-center mb-8">
              <CTAButton className="bg-royal hover:bg-royal-600 text-white">
                Jetzt registrieren
              </CTAButton>
            </div>
            
            <div className="mb-6">
              <p className="font-medium text-royal mb-2">Alles in Basic plus ausgewählte Add-ons:</p>
            </div>
            
            <div className="space-y-4">
              {[{
              text: "Gästemeldung an die Behörden *",
              tooltip: tooltipDescriptions.digitaleGaestemeldung
            }, "Kurtaxe – automatisch berechnet und abgerechnet", "Zusatzleistungen ohne Gebühren", "Individualisierter Check-in"].map((feature, index) => {
              const isTooltipFeature = typeof feature === 'object';
              const featureText = isTooltipFeature ? feature.text : feature;
              const hasTooltip = featureText.includes("*");
              return <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-royal mr-3 flex-shrink-0" />
                      <span className="text-royal-700">
                        {featureText.replace(" *", "")}
                        {hasTooltip && isTooltipFeature && <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="inline-flex ml-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                <HelpCircle className="w-4 h-4 text-royal-700 inline-block" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs text-sm">
                              {feature.tooltip}
                            </TooltipContent>
                          </Tooltip>}
                      </span>
                    </div>;
            })}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-2xl font-bold text-center text-royal mb-6">Über 100 Objekte</h3>
            
            <div className="text-center mb-6 flex flex-col justify-center items-center h-12">
              <p className="text-xl font-medium text-royal">Bitte fragen Sie unser</p>
              <p className="text-xl font-medium text-royal">Vertriebsteam</p>
            </div>
            
            <div className="flex justify-center mb-8">
              <Button variant="outline" className="border-2 border-royal text-royal hover:bg-royal-50" onClick={scrollToContact}>
                Vertrieb kontaktieren
              </Button>
            </div>
            
            <div className="space-y-4">
              {["API-Anbindung", "Mehr als 100 Objekte"].map((feature, index) => <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-royal mr-3 flex-shrink-0" />
                  <span className="text-royal-700">{feature}</span>
                </div>)}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-royal-700 flex items-center justify-center">
            <Info className="w-4 h-4 mr-2" />
            Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer
          </p>
        </div>
      </div>
    </section>;
};
export default PricingSection;