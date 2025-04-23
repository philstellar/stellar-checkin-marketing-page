
import React from 'react';
import { Database, Link, ServerCog } from 'lucide-react';
import CTAButton from "@/components/CTAButton";
import LogoCarouselAutoplay from "@/components/LogoCarouselAutoplay";
import { useTranslation } from "@/hooks/use-translation";

export const IntegrationenSection: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Database className="w-8 h-8 text-apple" />,
      title: t('integration.pms.title'),
      description: t('integration.pms.description')
    },
    // Deleted box with integration.api.title!
    {
      icon: <Link className="w-8 h-8 text-apple" />,
      title: t('integration.payment.title'),
      description: t('integration.payment.description')
    },
    {
      icon: <ServerCog className="w-8 h-8 text-apple" />,
      title: t('integration.webhooks.title'),
      description: t('integration.webhooks.description')
    }
  ];

  const pmsLogos = [
    {
      src: "/lovable-uploads/4d73a118-7cc1-4e3f-bf33-dec5ec07b93c.png",
      alt: "Beds24",
      width: 160
    },
    {
      src: "/lovable-uploads/349e2cab-5eb3-4451-8d9e-0cdf5927f51b.png",
      alt: "Guesty",
      width: 160
    },
    {
      src: "/lovable-uploads/dc32a014-5de5-41d8-b177-4489d94576f7.png",
      alt: "Hostfully",
      width: 160
    },
    {
      src: "/lovable-uploads/3352a02f-84ed-4bbb-a143-9c2f96f0107a.png",
      alt: "Hostaway",
      width: 160
    },
    {
      src: "/lovable-uploads/eb13347a-14b9-4262-9031-98ecc831003c.png",
      alt: "Lodgify",
      width: 160
    },
    {
      src: "/lovable-uploads/dd00ad8c-b1db-44a5-8b95-67ed878022b9.png",
      alt: "Uplisting",
      width: 160
    }
  ];

  return (
    <section id="integrationen" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t('integration.title')}
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto mb-10">
            {t('integration.subtitle')}
          </p>
          
          {/* Logo Carousel with overflow-hidden to prevent horizontal scrolling */}
          <div className="mb-12 overflow-hidden">
            <LogoCarouselAutoplay logos={pmsLogos} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-black mb-2 pb-2">
                {feature.title}
                <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
              </h3>
              <p className="text-base text-black">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
            {t('integration.cta')}
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default IntegrationenSection;
