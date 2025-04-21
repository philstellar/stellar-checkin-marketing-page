
import { CalendarCheck, Shield, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: 'Digitalisierung',
    description: 'Vollständige Digitalisierung aller Gästeprozesse für einen reibungslosen Ablauf.',
    icon: <CalendarCheck className="h-6 w-6" />,
    color: 'bg-apple'
  },
  {
    title: 'Zeitersparnis',
    description: 'Automatisierte Abläufe sparen Ihnen und Ihren Gästen wertvolle Zeit.',
    icon: <Shield className="h-6 w-6" />,
    color: 'bg-royal'
  },
  {
    title: 'Sicherheit',
    description: 'Erhöhen Sie die Sicherheit durch verifizierte Gäste und transparente Prozesse.',
    icon: <Award className="h-6 w-6" />,
    color: 'bg-floral'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-floral/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-royal text-center font-aeonik">
            Ihre Vorteile
          </h2>
          <p className="text-lg text-royal-700 text-center mb-8 max-w-2xl mx-auto font-aeonik">
            Mit unseren Lösungen optimieren Sie alle Prozesse rund um Ihre Gäste und steigern das Vertrauen in Ihre Unterkunft.
          </p>
          <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
              <CardHeader className="pb-2">
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {React.cloneElement(feature.icon, { className: "h-6 w-6 text-white" })}
                </div>
                <CardTitle className="text-lg font-semibold text-royal pb-2 text-left font-aeonik">
                  {feature.title}
                  <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-royal-700 text-left font-aeonik">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
