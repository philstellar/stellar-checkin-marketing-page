
import { UserCheck, Shield, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HeroSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: 'Online Check-in',
      description: 'Digitalisieren Sie den Check-in Prozess für Ihre Ferienunterkunft',
      icon: UserCheck,
      color: 'bg-apple'
    },
    {
      title: 'Versicherung',
      description: 'Clevere Alternative zur klassischen Kaution',
      icon: Shield,
      color: 'bg-royal'
    },
    {
      title: 'Trust Badge',
      description: 'Steigern Sie das Vertrauen Ihrer Gäste',
      icon: Award,
      color: 'bg-floral'
    }
  ];

  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik"
            style={{ contentVisibility: 'auto' }}
          >
            Stellar 360° <span style={{ color: 'rgb(164 195 9)' }}>Rundumlösung</span>
          </h1>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto font-aeonik">
            Vertrauen, Transparenz, Fairness und Sicherheit zwischen Gastgebern und Gästen. Die umfassende digitale Lösung für Ihre Ferienunterkunft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
              <UserCheck className="mr-2 h-4 w-4" /> Jetzt Starten
            </CTAButton>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => navigate('/')}
              className="font-aeonik"
            >
              Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="border-2 border-gray-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="space-y-1">
                <div className={`${product.color} w-12 h-12 rounded-lg flex items-center justify-center mb-2`}>
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-royal font-aeonik">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-700 font-aeonik">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-apple-300"></div>
            <div className="w-8 h-8 rounded-full bg-apple-400"></div>
            <div className="w-8 h-8 rounded-full bg-apple-500"></div>
          </div>
          <p className="ml-4 text-sm text-black font-aeonik">
            <span className="font-medium">Bereits über 1.000 zufriedene Gastgeber</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
