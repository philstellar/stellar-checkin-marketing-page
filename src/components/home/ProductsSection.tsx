
import { Shield, CalendarCheck, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadingWithLine } from "@/components/ui/heading-with-line";

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

const ProductsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-apple/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-royal/5 rounded-full filter blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      <div className="container-custom">
        <HeadingWithLine
          title="Unsere Produkte"
          subtitle="Entdecken Sie unsere Lösungen für eine optimale Gästeverwaltung und mehr Vertrauen in Ihrer Ferienunterkunft."
          align="center"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="h-full border border-gray-200 bg-white transition-all duration-500 hover:shadow-xl group perspective"
              data-aos="fade-up" 
              data-aos-delay={index * 150}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-floral-100 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
              <CardHeader className="pb-2 relative z-10">
                <div className={`${product.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-110 group-hover:shadow-lg`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-royal font-aeonik transition-all duration-300 group-hover:text-apple">
                  {product.title}
                  <div className="mt-1 h-1 w-[30%] bg-apple rounded-full transition-all duration-300 group-hover:w-[50%]"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 relative z-10">
                <p className="text-royal-700 mb-6 font-aeonik">{product.description}</p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate(product.path)}
                  className="w-full justify-center font-aeonik relative overflow-hidden transition-all duration-300 group-hover:bg-apple/10 group-hover:border-apple"
                >
                  <span className="relative z-10 flex items-center transition-transform duration-300 group-hover:translate-x-1">
                    Mehr erfahren <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
