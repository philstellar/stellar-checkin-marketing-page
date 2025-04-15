
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, ScanFace, ShieldCheck, Fingerprint } from "lucide-react";

const IdentitaetspruefungSection = () => {
  return (
    <section id="identitaetspruefung" className="section-padding bg-floral">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Identitätsprüfung
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-black mb-8">
              In Partnerschaft mit Stripe bieten wir eine sichere und einfache Identitätsprüfung, 
              die nur 2 Minuten dauert und für maximale Sicherheit und Vertrauen sorgt.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  icon: <ScanFace className="w-8 h-8 text-apple" />,
                  title: "Biometrische Verifikation",
                  description: "Schnelle Gesichtserkennung mit Liveness-Check verhindert Betrug und stellt sicher, dass die Person real ist."
                },
                {
                  icon: <Fingerprint className="w-8 h-8 text-apple" />,
                  title: "Ausweisüberprüfung",
                  description: "Automatische Validierung von Ausweisdokumenten durch moderne KI-Technologie in Sekundenschnelle."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-apple" />,
                  title: "Datenschutzkonforme Lösung",
                  description: "Alle Daten werden sicher verarbeitet und gemäß DSGVO-Standards geschützt und nur für die Verifikation verwendet."
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
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
                alt="Identitätsprüfung mit Stripe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitaetspruefungSection;
