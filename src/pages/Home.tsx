
import React from 'react';
import { Shield, CalendarCheck, Award, ArrowRight, UserCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/use-translation';
import CTAButton from '@/components/CTAButton';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LogoCarousel from '@/components/LogoCarousel';

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

  const features = [
    {
      title: 'Digitalisierung',
      description: 'Vollständige Digitalisierung aller Gästeprozesse für einen reibungslosen Ablauf.',
      icon: <CalendarCheck className="h-6 w-6 text-apple" />
    },
    {
      title: 'Zeitersparnis',
      description: 'Automatisierte Abläufe sparen Ihnen und Ihren Gästen wertvolle Zeit.',
      icon: <Shield className="h-6 w-6 text-apple" />
    },
    {
      title: 'Sicherheit',
      description: 'Erhöhen Sie die Sicherheit durch verifizierte Gäste und transparente Prozesse.',
      icon: <Award className="h-6 w-6 text-apple" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik"
                  style={{ contentVisibility: 'auto' }}
                >
                  Stellar 360° <span style={{ color: 'rgb(164 195 9)' }}>Rundumlösung</span>
                </h1>
                <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                  Vertrauen, Transparenz, Fairness und Sicherheit zwischen Gastgebern und Gästen. Die umfassende digitale Lösung für Ihre Ferienunterkunft.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                <div className="flex items-center">
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
              <div className="order-1 md:order-last flex justify-center">
                <Shield className="w-3/5 h-auto text-apple opacity-90" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-royal text-center font-aeonik">
                Unsere Produkte
              </h2>
              <p className="text-lg text-royal-700 text-center mb-8 max-w-2xl mx-auto font-aeonik">
                Entdecken Sie unsere Lösungen für eine optimale Gästeverwaltung und mehr Vertrauen in Ihrer Ferienunterkunft.
              </p>
              <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card 
                  key={index} 
                  className="h-full border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg"
                >
                  <CardHeader className="pb-2">
                    <div className={`${product.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-royal font-aeonik">
                      {product.title}
                      <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-royal-700 mb-6 font-aeonik">{product.description}</p>
                    <Button 
                      variant="outline" 
                      onClick={() => navigate(product.path)}
                      className="w-full justify-center font-aeonik"
                    >
                      Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
                    <CardTitle className="text-lg font-semibold text-royal pb-2 text-left font-aeonik">
                      {feature.icon && <span className="mr-2">{feature.icon}</span>}
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

        <LogoCarousel />

        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-royal font-aeonik">
                Warum Stellar?
              </h2>
              <p className="text-lg text-royal-700 mb-8 font-aeonik">
                Unsere ganzheitliche Lösung verbindet digitalen Check-in, Versicherungsschutz und Vertrauenssiegel zu einem nahtlosen Erlebnis für Sie und Ihre Gäste.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton 
                  variant="default"
                  size="lg"
                  className="font-aeonik"
                >
                  Jetzt Registrieren <ArrowRight className="ml-2 h-4 w-4" />
                </CTAButton>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/de/ueber-uns')}
                  className="font-aeonik"
                >
                  Über uns
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
