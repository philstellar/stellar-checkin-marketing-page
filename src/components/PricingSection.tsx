import { Button } from "@/components/ui/button";
import { CheckCircle, Info, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import CTAButton from "@/components/CTAButton";
import { useTranslation } from "@/hooks/use-translation";
import { HeadingWithLine } from "@/components/ui/heading-with-line";

const PricingSection = () => {
  const { t } = useTranslation();
  
  const tooltipDescriptions = {
    zusatzleistungen: t('pricing.basic.additionalServicesDesc'),
    identitaetsverifizierung: t('pricing.basic.identityVerificationDesc'),
    kautionsmanagement: t('pricing.basic.depositManagementDesc'),
    versicherung: t('pricing.basic.insuranceDesc'),
    digitaleGaestemeldung: t('pricing.basic.digitalGuestRegistrationDesc')
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="preise" className="section-padding bg-white">
      <div className="container-custom">
        <HeadingWithLine
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
          align="center"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-2xl font-bold text-center text-royal mb-6">{t('pricing.basic.title')}</h3>
            
            <div className="text-center mb-6">
              <div className="flex items-end justify-center">
                <span className="text-4xl font-bold text-royal mr-2">{t('pricing.basic.price')}</span>
                <div className="flex flex-col items-start">
                  <span className="text-xl text-royal">{t('pricing.basic.unit')}</span>
                  <span className="text-sm text-royal-700">{t('pricing.basic.per')}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mb-8">
              <CTAButton variant="outline" className="border-2 border-royal text-royal hover:bg-royal-50">
                {t('pricing.basic.cta')}
              </CTAButton>
            </div>
            
            <div className="space-y-4">
              <TooltipProvider>
                {[t('pricing.basic.features.0'), t('pricing.basic.features.1'), t('pricing.basic.features.2'), {
                  text: t('pricing.basic.additionalServices'),
                  tooltip: tooltipDescriptions.zusatzleistungen
                }, {
                  text: t('pricing.basic.identityVerification'),
                  tooltip: tooltipDescriptions.identitaetsverifizierung
                }, {
                  text: t('pricing.basic.depositManagement'),
                  tooltip: tooltipDescriptions.kautionsmanagement
                }, {
                  text: t('pricing.basic.insurance'),
                  tooltip: tooltipDescriptions.versicherung
                }, t('pricing.basic.features.7')].map((feature, index) => {
                  const isTooltipFeature = typeof feature === 'object';
                  const featureText = isTooltipFeature ? feature.text : feature;
                  const hasTooltip = isTooltipFeature && featureText.includes("*");
                  
                  return (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-royal mr-3 flex-shrink-0" />
                      <span className="text-royal-700">
                        {featureText.replace(" *", "")}
                        {hasTooltip && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="inline-flex ml-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                <HelpCircle className="w-4 h-4 text-royal-700 inline-block" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs text-sm p-2 bg-white">
                              {feature.tooltip}
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </span>
                    </div>
                  );
                })}
              </TooltipProvider>
            </div>
          </div>

          {/* Popular Plan */}
          <div className="border-2 border-royal rounded-xl p-8 shadow-md relative bg-white">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <div className="bg-royal text-white px-4 py-1 rounded-full text-sm font-medium">
                {t('pricing.advanced.popular')}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center text-royal mb-6">{t('pricing.advanced.title')}</h3>
            
            <div className="text-center mb-6">
              <div className="flex items-end justify-center">
                <span className="text-4xl font-bold text-royal mr-2">{t('pricing.advanced.price')}</span>
                <div className="flex flex-col items-start">
                  <span className="text-xl text-royal">{t('pricing.advanced.unit')}</span>
                  <span className="text-sm text-royal-700">{t('pricing.advanced.per')}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mb-8">
              <CTAButton className="bg-royal hover:bg-royal-600 text-white">
                {t('pricing.advanced.cta')}
              </CTAButton>
            </div>
            
            <div className="mb-6">
              <p className="font-medium text-royal mb-2">{t('pricing.advanced.plusBasic')}</p>
            </div>
            
            <div className="space-y-4">
              <TooltipProvider>
                {[{
                  text: t('pricing.basic.digitalGuestRegistration'),
                  tooltip: tooltipDescriptions.digitaleGaestemeldung
                }, t('pricing.advanced.features.1'), t('pricing.advanced.features.2'), t('pricing.advanced.features.3')].map((feature, index) => {
                  const isTooltipFeature = typeof feature === 'object';
                  const featureText = isTooltipFeature ? feature.text : feature;
                  const hasTooltip = isTooltipFeature && featureText.includes("*");
                  
                  return (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-royal mr-3 flex-shrink-0" />
                      <span className="text-royal-700">
                        {featureText.replace(" *", "")}
                        {hasTooltip && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="inline-flex ml-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                <HelpCircle className="w-4 h-4 text-royal-700 inline-block" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs text-sm p-2 bg-white">
                              {feature.tooltip}
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </span>
                    </div>
                  );
                })}
              </TooltipProvider>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-2xl font-bold text-center text-royal mb-6">{t('pricing.enterprise.title')}</h3>
            
            <div className="text-center mb-6 flex flex-col justify-center items-center h-12">
              <p className="text-xl font-medium text-royal">{t('pricing.enterprise.contact')}</p>
              <p className="text-xl font-medium text-royal">{t('pricing.enterprise.contactTeam')}</p>
            </div>
            
            <div className="flex justify-center mb-8">
              <Button variant="outline" className="border-2 border-royal text-royal hover:bg-royal-50" onClick={scrollToContact}>
                {t('pricing.enterprise.cta')}
              </Button>
            </div>
            
            <div className="space-y-4">
              {[t('pricing.enterprise.features.0'), t('pricing.enterprise.features.1')].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-royal mr-3 flex-shrink-0" />
                  <span className="text-royal-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-royal-700 flex items-center justify-center">
            <Info className="w-4 h-4 mr-2" />
            {t('pricing.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
