import { UserCheck, Gift, CreditCard, TrendingUp } from "lucide-react";
import CTAButton from "./CTAButton";

const ZusatzservicesSection = () => {
  return (
    <section id="zusatzservices" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-first md:order-first">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Zusatzleistungen verkaufen
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-black mb-8">
              Steigere deinen Umsatz, indem du deinen Gästen während des Check-in-Prozesses zusätzliche 
              Services anbietest.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  icon: <Gift className="w-8 h-8 text-apple" />,
                  title: "Zusatzleistungen",
                  description: "Biete deinen Gästen mehr – und steigere deinen Umsatz mit Zusatzleistungen wie Early Check-in, Wäschepaketen oder besonderen Erlebnissen."
                },
                {
                  icon: <CreditCard className="w-8 h-8 text-apple" />,
                  title: "Nahtlose Zahlungsabwicklung",
                  description: "Integrierte Zahlungsabwicklung mit allen gängigen Zahlungsmethoden direkt im Check-in-Prozess."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-apple" />,
                  title: "Zusätzliche Einnahmequellen",
                  description: "Erziele zusätzliche Einnahmen durch den gezielten Verkauf von Upgrades und Zusatzleistungen."
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
                <UserCheck className="mr-2 h-4 w-4" /> Jetzt Registrieren
              </CTAButton>
            </div>
          </div>
          
          <div className="order-last md:order-last flex justify-center">
            <img 
              src="/lovable-uploads/a581a6b1-fefa-4f87-9015-66cde382b503.png"
              alt="Zusatzservices und Upselling" 
              className="w-3/5 h-auto object-contain bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZusatzservicesSection;
