
import { UserCheck } from "lucide-react";
import { Shield, ShieldCheck, CreditCard } from "lucide-react";
import CTAButton from "./CTAButton";
import { useTranslation } from "@/hooks/use-translation";
import OptimizedImage from "@/components/OptimizedImage";
import { Link } from "react-router-dom";

export const VersicherungSection = () => {
  const { t, currentLanguage } = useTranslation();
  
  return (
    <section id="versicherung" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-first flex justify-center">
            <Link to={`/${currentLanguage}/versicherung`}>
              <OptimizedImage 
                src="/lovable-uploads/da5cc900-97f6-4e95-a8d2-29fe4bf0fc66.png"
                alt="Versicherung und Kautionsabwicklung" 
                className="w-3/5 h-auto object-contain bg-transparent"
                width={500}
                height={800}
                loading="lazy"
                sizes="(max-width: 768px) 90vw, 500px"
              />
            </Link>
          </div>
          
          <div className="order-2 md:order-last">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              <Link to={`/${currentLanguage}/versicherung`} className="hover:text-apple transition-colors">
                {t('versicherung.title')}
              </Link>
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-black mb-8">
              {t('versicherung.subtitle')}
            </p>
            
            <div className="space-y-8">
              {[
                {
                  icon: <CreditCard className="w-8 h-8 text-apple" />,
                  title: t('versicherung.process.title'),
                  description: t('versicherung.process.description'),
                  linkTo: `/${currentLanguage}/versicherung`
                },
                {
                  icon: <Shield className="w-8 h-8 text-apple" />,
                  title: t('versicherung.income.title'),
                  description: t('versicherung.income.description'),
                  linkTo: `/${currentLanguage}/#versicherung`
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-apple" />,
                  title: t('versicherung.protection.title'),
                  description: t('versicherung.protection.description'),
                  linkTo: `/${currentLanguage}/trust-badge`
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="shrink-0">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-black mb-2 pb-2">
                      <Link to={feature.linkTo} className="hover:text-apple transition-colors">
                        {feature.title}
                      </Link>
                      <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                    </h3>
                    <p className="text-base text-black">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <CTAButton className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
                <UserCheck className="mr-2 h-4 w-4" /> {t('versicherung.cta')}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersicherungSection;
