
import React, { useEffect, useRef } from 'react';
import { Database, Plug, Link, ServerCog } from 'lucide-react';
import CTAButton from "@/components/CTAButton";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import useEmblaCarousel from 'embla-carousel-react';

export const IntegrationenSection: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-apple" />,
      title: "PMS Integration",
      description: "Nahtlose Anbindung an dein Property Management System für effiziente Datensynchronisation."
    },
    {
      icon: <Plug className="w-8 h-8 text-apple" />,
      title: "API Schnittstellen",
      description: "Offene API für maßgeschneiderte Integrationen und individuelle Anpassungen."
    },
    {
      icon: <Link className="w-8 h-8 text-apple" />,
      title: "Zahlungssysteme",
      description: "Direktanbindung an führende Zahlungsanbieter wie Stripe und PayPal."
    },
    {
      icon: <ServerCog className="w-8 h-8 text-apple" />,
      title: "Webhooks",
      description: "Ereignisbasierte Benachrichtigungen für Echtzeit-Updates in deinen Systemen."
    }
  ];

  const pmsLogos = [
    {
      src: "/lovable-uploads/876b6816-9063-4842-afc5-13e495761c7a.png",
      alt: "Smoobu"
    },
    {
      src: "/lovable-uploads/349e2cab-5eb3-4451-8d9e-0cdf5927f51b.png",
      alt: "Guesty"
    },
    {
      src: "/lovable-uploads/4d73a118-7cc1-4e3f-bf33-dec5ec07b93c.png",
      alt: "Beds24"
    },
    {
      src: "/lovable-uploads/dc32a014-5de5-41d8-b177-4489d94576f7.png",
      alt: "Hostfully"
    }
  ];

  // Double the logos to ensure smooth looping
  const extendedLogos = [...pmsLogos, ...pmsLogos];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "keepSnaps",
    slidesToScroll: 1
  });

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    if (emblaApi) {
      startAutoplay();
      emblaApi.on('pointerDown', stopAutoplay);
      emblaApi.on('settle', startAutoplay);
    }
    
    return () => {
      stopAutoplay();
      emblaApi?.off('pointerDown', stopAutoplay);
      emblaApi?.off('settle', startAutoplay);
    };
  }, [emblaApi]);

  return (
    <section id="integrationen" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Integration mit Ihrem PMS
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto mb-10">
            Ob Integration mit Smoobu, Guesty, Hostaway, Lodgify, Beds24 oder anderen führenden Systemen - wir verbinden Ihr PMS für einen optimierten Workflow.
          </p>
          
          {/* Logo Carousel */}
          <div className="mb-12">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {extendedLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-4"
                  >
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="h-20 flex items-center justify-center p-4 bg-transparent transition-all duration-300 cursor-pointer hover:scale-110">
                          <div className="w-full h-full flex items-center justify-center">
                            <img
                              src={logo.src}
                              alt={logo.alt}
                              className="max-w-full max-h-full object-contain transition-all duration-300"
                              style={{ aspectRatio: '1/1' }}
                            />
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto p-2 text-center text-sm">
                        {logo.alt}
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            Integrationen entdecken
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default IntegrationenSection;
