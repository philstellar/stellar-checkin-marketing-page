
import { UserCheck } from "lucide-react";
import { Shield, ShieldCheck, CreditCard } from "lucide-react";
import CTAButton from "./CTAButton";
import { useTranslation } from "@/hooks/use-translation";

export const VersicherungSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="versicherung" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-first flex justify-center">
            <img 
              src="/lovable-uploads/b8b98b42-57f1-464d-be4a-952044caf6cc.png"
              alt={t('insurance.title')}
              className="w-3/5 h-auto object-contain bg-transparent"
            />
          </div>
          
          <div className="order-2 md:order-last">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {t('insurance.title')}
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-black mb-8">
              {t('insurance.subtitle')}
            </p>
            
            <div className="space-y-8">
              {[
                {
                  icon: <CreditCard className="w-8 h-8 text-apple" />,
                  title: t('insurance.overview.process.title'),
                  description: t('insurance.overview.process.description')
                },
                {
                  icon: <Shield className="w-8 h-8 text-apple" />,
                  title: t('insurance.overview.income.title'),
                  description: t('insurance.overview.income.description')
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-apple" />,
                  title: t('insurance.overview.protection.title'),
                  description: t('insurance.overview.protection.description')
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
                <UserCheck className="mr-2 h-4 w-4" /> {t('insurance.cta')}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersicherungSection;
