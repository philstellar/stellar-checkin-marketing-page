
import React from 'react';
import { UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/CTAButton";
import { useTranslation } from "@/hooks/use-translation";
import { SECTION_IDS } from '@/components/Header';

type FeatureCardProps = {
  title: string;
  description: string;
  targetSection: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  targetSection
}) => {
  const { t } = useTranslation();
  
  const handleClick = () => {
    const section = document.getElementById(targetSection);
    if (section) {
      console.log(`FeatureCard: Scrolling to section ${targetSection}`);
      section.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      console.warn(`FeatureCard: Element with id '${targetSection}' not found`);
    }
  };
  
  return <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-royal pb-2">
          {title}
          <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 flex-grow flex flex-col justify-between">
        <p className="text-royal-700 text-left mb-6">{description}</p>
        <div className="mt-auto">
          <Button variant="ghost" onClick={handleClick} className="text-apple hover:text-apple-600 hover:bg-gray-100 p-0 flex items-center gap-2">
            {t('features.moreBtn')}
          </Button>
        </div>
      </CardContent>
    </Card>;
};

export const OnlineCheckinSection: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      title: t('kurtaxe.title'),
      description: t('kurtaxe.subtitle'),
      targetSection: SECTION_IDS.kurtaxe
    }, 
    {
      title: t('zusatzservices.title'),
      description: t('zusatzservices.subtitle'),
      targetSection: SECTION_IDS.zusatzservices
    }, 
    {
      title: t('versicherung.title'),
      description: t('versicherung.subtitle'),
      targetSection: SECTION_IDS.versicherung
    }, 
    {
      title: t('identity.title'),
      description: t('identity.subtitle'),
      targetSection: SECTION_IDS.identity
    }, 
    {
      title: t('settings.title'),
      description: t('settings.subtitle'),
      targetSection: SECTION_IDS.settings
    }, 
    {
      title: t('integration.title'),
      description: t('integration.subtitle'),
      targetSection: SECTION_IDS.integration
    }
  ];
  
  return <section id={SECTION_IDS.features} className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-royal mx-auto">
            {t('features.title')}
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => <FeatureCard key={index} title={feature.title} description={feature.description} targetSection={feature.targetSection} />)}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton className="bg-apple hover:bg-apple-600">
            <UserCheck className="mr-2 h-4 w-4" /> {t('navigation.register')}
          </CTAButton>
        </div>
      </div>
    </section>;
};

export default OnlineCheckinSection;
