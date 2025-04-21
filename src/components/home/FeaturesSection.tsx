
import React from 'react';
import { CalendarCheck, Shield, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [{
  title: 'Digitalisierung',
  description: 'Vollständige Digitalisierung aller Gästeprozesse für einen reibungslosen Ablauf.',
  icon: <CalendarCheck className="h-6 w-6" />,
  color: 'bg-apple'
}, {
  title: 'Zeitersparnis',
  description: 'Automatisierte Abläufe sparen Ihnen und Ihren Gästen wertvolle Zeit.',
  icon: <Shield className="h-6 w-6" />,
  color: 'bg-royal'
}, {
  title: 'Sicherheit',
  description: 'Erhöhen Sie die Sicherheit durch verifizierte Gäste und transparente Prozesse.',
  icon: <Award className="h-6 w-6" />,
  color: 'bg-floral'
}];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-floral/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-apple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal/5 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center mb-12" data-aos="fade-up">
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
            <Card 
              key={index} 
              className="h-full transition-all duration-500 hover:shadow-lg border border-gray-200 bg-white group hover:-translate-y-2"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-floral-100 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg"></div>
              <CardHeader className="pb-2 relative z-10">
                <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-royal pb-2 text-left font-aeonik group-hover:text-apple transition-colors duration-300">
                  {feature.title}
                  <div className="mt-1 h-1 w-[30%] bg-apple rounded-full transition-all duration-300 group-hover:w-[50%]"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 relative z-10">
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
