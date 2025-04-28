import React from 'react';
import { UserCheck, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/CTAButton";
import { useTranslation } from "@/hooks/use-translation";
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from "@/context/LanguageContext";

type FeatureCardProps = {
  title: string;
  description: string;
  targetSection: string;
  link?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  targetSection,
  link
}) => {
  const { t } = useTranslation();

  const handleClick = () => {
    const section = document.getElementById(targetSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-royal pb-2">
          {link ? (
            <Link to={link} className="hover:text-apple transition-colors">
              {title}
            </Link>
          ) : (
            title
          )}
          <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 flex-grow flex flex-col justify-between">
        <p className="text-royal-700 text-left mb-6">{description}</p>
        <div className="mt-auto">
          {link ? (
            <Link 
              to={link}
              className="text-apple hover:text-apple-600 flex items-center gap-2"
            >
              {t('features.moreBtn')} <ArrowDown className="h-4 w-4" />
            </Link>
          ) : (
            <Button 
              variant="ghost" 
              onClick={handleClick} 
              className="text-apple hover:text-apple-600 hover:bg-gray-100 p-0 flex items-center gap-2"
            >
              {t('features.moreBtn')} <ArrowDown className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const OnlineCheckinSection: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      title: t('kurtaxe.title'),
      description: t('kurtaxe.subtitle'),
      targetSection: "kurtaxe",
      link: `/${language}/versicherung#kurtaxe`
    },
    {
      title: t('zusatzservices.title'),
      description: t('zusatzservices.subtitle'),
      targetSection: "zusatzservices"
    },
    {
      title: t('versicherung.title'),
      description: t('versicherung.subtitle'),
      targetSection: "versicherung",
      link: `/${language}/versicherung`
    },
    {
      title: t('identity.title'),
      description: t('identity.subtitle'),
      targetSection: "identitaetspruefung"
    },
    {
      title: t('settings.title'),
      description: t('settings.subtitle'),
      targetSection: "einstellungen"
    },
    {
      title: t('integration.title'),
      description: t('integration.subtitle'),
      targetSection: "integrationen"
    }
  ];

  return (
    <section id="gaeste-voranmeldung" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-royal mx-auto">
            {t('features.title')}
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-royal pb-2">
                  {feature.link ? (
                    <Link to={feature.link} className="hover:text-apple transition-colors">
                      {feature.title}
                    </Link>
                  ) : (
                    feature.title
                  )}
                  <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 flex-grow flex flex-col justify-between">
                <p className="text-royal-700 text-left mb-6">{feature.description}</p>
                <div className="mt-auto">
                  {feature.link ? (
                    <Link 
                      to={feature.link}
                      className="text-apple hover:text-apple-600 flex items-center gap-2"
                    >
                      {t('features.moreBtn')} <ArrowDown className="h-4 w-4" />
                    </Link>
                  ) : (
                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        const element = document.getElementById(feature.targetSection);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }} 
                      className="text-apple hover:text-apple-600 hover:bg-gray-100 p-0 flex items-center gap-2"
                    >
                      {t('features.moreBtn')} <ArrowDown className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton className="bg-apple hover:bg-apple-600">
            <UserCheck className="mr-2 h-4 w-4" /> {t('navigation.register')}
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default OnlineCheckinSection;
