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
  return <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik" style={{
          contentVisibility: 'auto'
        }}>
            Stellar Trust: Rundum abgesichert - Vertrauen schaffen, Schäden vermeiden, Online einchecken
          </h1>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto font-aeonik">
            Die ultimative 360 Grad Lösung für Vertrauen und Sicherheit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
              <UserCheck className="mr-2 h-4 w-4" /> Jetzt Starten
            </CTAButton>
            <Button variant="outline" size="lg" onClick={() => navigate('/')} className="font-aeonik">
              Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => {})}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-apple-300"></div>
            <div className="w-8 h-8 rounded-full bg-apple-400"></div>
            <div className="w-8 h-8 rounded-full bg-apple-500"></div>
          </div>
          <p className="ml-4 text-sm text-black font-aeonik">
            <Link to="/de/erfolgsgeschichten" className="font-medium hover:text-apple transition-colors">
              Hier geht es zu den Referenzen
            </Link>
          </p>
        </div>
      </div>
    </section>;
};
export default HeroSection;