
import React from 'react';
import { Shield, CalendarCheck, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/use-translation';

const Home = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useTranslation();

  const products = [
    {
      title: 'Online Check-in',
      description: 'Digitalisieren Sie Ihren Check-in-Prozess – schnell, sicher und papierlos. Mit zusätzlichen Funktionen wie Kurtaxe und Zusatzleistungen.',
      icon: CalendarCheck,
      path: '/',
      color: 'bg-apple'
    },
    {
      title: 'Versicherung',
      description: 'Automatisieren Sie die Kautionsabwicklung und bieten Sie Ihren Gästen eine clevere Versicherungslösung als Alternative.',
      icon: Shield,
      path: '/de/versicherung',
      color: 'bg-royal'
    },
    {
      title: 'Trust Badge',
      description: 'Steigern Sie das Vertrauen Ihrer Gäste mit dem Stellar Trust Badge – Ihr Qualitätssiegel für geprüfte Unterkünfte.',
      icon: Award,
      path: '/de/trust-badge',
      color: 'bg-floral'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-royal/5 to-royal/20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                Stellar 360° Rundumlösung
              </h1>
              <p className="text-xl text-black/80 mb-8">
                Vertrauen, Transparenz, Fairness und Sicherheit zwischen Gastgebern und Gästen
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`${product.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate(product.path)}
                    className="w-full justify-center"
                  >
                    Mehr erfahren
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-floral/10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Warum Stellar?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Unsere ganzheitliche Lösung verbindet digitalen Check-in, Versicherungsschutz und Vertrauenssiegel zu einem nahtlosen Erlebnis für Sie und Ihre Gäste.
              </p>
              <Button 
                variant="default"
                size="lg"
                onClick={() => navigate('/')}
              >
                Jetzt kennenlernen
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
