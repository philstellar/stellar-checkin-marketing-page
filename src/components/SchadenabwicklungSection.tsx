
import { Shield, Check, ExternalLink, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SchadenabwicklungSection = () => {
  return (
    <section id="schadenabwicklung" className="section-padding bg-floral">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4">Schadenabwicklung bei Gästeschäden</h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-royal-700 mb-8">
              Wir arbeiten mit <span className="font-semibold">Hiscox</span> zusammen, einem der weltweit führenden Spezialversicherer,
              um eine reibungslose und professionelle Abwicklung von Gästeschäden zu gewährleisten.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <AlertTriangle className="h-6 w-6" />,
                  title: "Schnelle Schadensmeldung",
                  description: "Einfache und schnelle Meldung von Schäden direkt über die Plattform mit nur wenigen Klicks."
                },
                {
                  icon: <Check className="h-6 w-6" />,
                  title: "Professionelle Abwicklung",
                  description: "Versicherungsexperten von Hiscox übernehmen die Bewertung und Abwicklung der Schäden."
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Umfassender Schutz",
                  description: "Schutz vor finanziellen Verlusten durch Gästeschäden und gleichzeitig ein positives Gästeerlebnis."
                }
              ].map((feature, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className={cn("rounded-lg p-2.5 bg-floral-400 text-royal")}>
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-royal text-left">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-royal-700 text-left">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 flex items-center gap-6">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button className="bg-apple hover:bg-apple-600">
                  Mehr erfahren <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <div className="flex items-center">
                <span className="text-royal-700 mr-3">Partner:</span>
                <img 
                  src="/lovable-uploads/544730f1-d669-4595-af3c-737bdc61d29a.png" 
                  alt="Hiscox Logo" 
                  className="h-10"
                />
              </div>
            </div>
          </div>
          
          <div className="md:order-1">
            <div className="rounded-lg overflow-hidden stellar-shadow">
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170"
                alt="Schadenabwicklung bei Gästeschäden" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchadenabwicklungSection;
