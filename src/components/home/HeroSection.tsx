
import React from 'react';
import { UserCheck, Shield, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const products = [{
    title: 'Online Check-in',
    description: 'Digitalisieren Sie den Check-in Prozess für Ihre Ferienunterkunft',
    icon: UserCheck,
    color: 'bg-apple'
  }, {
    title: 'Versicherung',
    description: 'Clevere Alternative zur klassischen Kaution',
    icon: Shield,
    color: 'bg-royal'
  }, {
    title: 'Trust Badge',
    description: 'Steigern Sie das Vertrauen Ihrer Gäste',
    icon: Award,
    color: 'bg-floral'
  }];
  
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20 animate-gradient-x"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-apple/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-royal/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik" style={{
            contentVisibility: 'auto'
          }}>
            <span className="animate-text-slide-up inline-block">Stellar Trust: Rundum abgesichert - </span>
            <span className="animate-text-slide-up inline-block text-apple" style={{animationDelay: '0.2s'}}>Vertrauen schaffen</span>
            <span className="animate-text-slide-up inline-block" style={{animationDelay: '0.4s'}}>, Schäden vermeiden, Online einchecken</span>
          </h1>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto font-aeonik animate-fade-in" style={{animationDelay: '0.6s'}}>
            Die ultimative 360 Grad Lösung für Vertrauen und Sicherheit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <UserCheck className="mr-2 h-4 w-4" /> Jetzt Starten
            </CTAButton>
            <Button variant="outline" size="lg" onClick={() => navigate('/')} className="font-aeonik transform transition-all duration-300 hover:scale-105 hover:bg-floral-100">
              Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-200 animate-fade-in group" 
              style={{animationDelay: `${0.2 * (index + 1)}s`}}
            >
              <div className={`absolute top-0 left-0 w-2 h-full ${product.color} transition-all duration-300 group-hover:w-full group-hover:opacity-10`}></div>
              <CardHeader className="pb-2">
                <div className={`${product.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110`}>
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-royal font-aeonik">
                  {product.title}
                  <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-royal-700 text-left font-aeonik">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center animate-fade-in" style={{animationDelay: '1s'}}>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-apple-300 animate-pulse" style={{animationDelay: '0s'}}></div>
            <div className="w-8 h-8 rounded-full bg-apple-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-8 h-8 rounded-full bg-apple-500 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          <p className="ml-4 text-sm text-black font-aeonik">
            <Link to="/de/erfolgsgeschichten" className="font-medium hover:text-apple transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-apple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Hier geht es zu den Referenzen
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
