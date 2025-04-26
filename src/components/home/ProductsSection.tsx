
import { UserCheck, ShieldCheck, BadgeCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeadingWithLine } from "@/components/ui/heading-with-line";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/LanguageContext";

const ProductsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  const products = [
    {
      title: t('products.checkin.title'),
      description: t('products.checkin.description'),
      icon: UserCheck,
      path: `/${language}`,
      color: 'bg-apple'
    },
    {
      title: t('products.insurance.title'),
      description: t('products.insurance.description'),
      icon: ShieldCheck,
      path: `/${language}/versicherung`,
      color: 'bg-royal'
    },
    {
      title: t('products.trustBadge.title'),
      description: t('products.trustBadge.description'),
      icon: BadgeCheck,
      path: `/${language}/trust-badge`,
      color: 'bg-floral'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container-custom">
        <HeadingWithLine 
          title={t('products.title')} 
          subtitle={t('products.subtitle')} 
          align="center" 
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="h-full border border-gray-200 bg-white">
              <CardHeader className="pb-2">
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
                    {t('products.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
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
