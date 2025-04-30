
import { UserCheck, Gift, CreditCard, TrendingUp } from "lucide-react";
import CTAButton from "./CTAButton";
import { useTranslation } from "@/hooks/use-translation";
import { HeadingWithLine } from "@/components/ui/heading-with-line";
import OptimizedImage from "@/components/OptimizedImage";
import { SECTION_IDS } from '@/constants/section-ids';

const ZusatzservicesSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id={SECTION_IDS.zusatzservices} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-first">
            <HeadingWithLine
              title={t('zusatzservices.title')}
              subtitle={t('zusatzservices.subtitle')}
            />
            
            <div className="space-y-8">
              {[
                {
                  icon: <Gift className="w-8 h-8 text-apple" />,
                  title: t('zusatzservices.additionalServices.title'),
                  description: t('zusatzservices.additionalServices.description')
                },
                {
                  icon: <CreditCard className="w-8 h-8 text-apple" />,
                  title: t('zusatzservices.payment.title'),
                  description: t('zusatzservices.payment.description')
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-apple" />,
                  title: t('zusatzservices.revenue.title'),
                  description: t('zusatzservices.revenue.description')
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="shrink-0">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-black mb-2 pb-2">
                      {feature.title}
                      <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                    </h3>
                    <p className="text-base text-black">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <CTAButton className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
                <UserCheck className="mr-2 h-4 w-4" /> {t('zusatzservices.cta')}
              </CTAButton>
            </div>
          </div>
          
          <div className="order-1 md:order-last flex justify-center">
            <OptimizedImage 
              src="/lovable-uploads/e71f8668-5c8c-4f12-9641-892072444f5e.png"
              alt="Additional Services and Upselling Interface" 
              className="w-3/5 h-auto object-contain bg-transparent"
              width={500}
              height={800}
              loading="lazy"
              sizes="(max-width: 768px) 90vw, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZusatzservicesSection;
