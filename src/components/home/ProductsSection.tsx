
import { UserCheck, ShieldCheck, BadgeCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadingWithLine } from "@/components/ui/heading-with-line";

const products = [
  {
    title: 'Online Check-in',
    description: 'Digitalisieren Sie Ihren Check-in-Prozess – schnell, sicher und papierlos. Mit zusätzlichen Funktionen wie Kurtaxe und Zusatzleistungen.',
    icon: UserCheck,
    path: '/',
    color: 'bg-apple'
  },
  {
    title: 'Versicherung',
    description: 'Automatisieren Sie die Kautionsabwicklung und bieten Sie Ihren Gästen eine clevere Versicherungslösung als Alternative.',
    icon: ShieldCheck,
    path: '/de/versicherung',
    color: 'bg-royal'
  },
  {
    title: 'Trust Badge',
    description: 'Steigern Sie das Vertrauen Ihrer Gäste mit dem Stellar Trust Badge – Ihr Qualitätssiegel für geprüfte Unterkünfte.',
    icon: BadgeCheck,
    path: '/de/trust-badge',
    color: 'bg-floral'
  }
];

const ProductsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white relative overflow-hidden">
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
              className="h-full border border-gray-200 bg-white"
            >
              <CardHeader className="pb-2">
                <div className={`${product.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <product.icon className="w-8 h-8 text-white" />
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
                  <span className="flex items-center">
                    Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
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
