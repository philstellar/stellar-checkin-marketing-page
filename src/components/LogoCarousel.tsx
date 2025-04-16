
import React, { useEffect, useRef } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from "@/hooks/use-translation";

const logos = [
  {
    src: "/lovable-uploads/bc398efb-0b31-4737-9ec9-7c55a90079ad.png",
    alt: "Ostsee Card"
  },
  {
    src: "/lovable-uploads/d854adfb-a35a-4aab-8dae-0127f61908b9.png", 
    alt: "AVS Tourismus Systeme"
  },
  {
    src: "/lovable-uploads/4d73a118-7cc1-4e3f-bf33-dec5ec07b93c.png",
    alt: "Beds24"
  },
  {
    src: "/lovable-uploads/349e2cab-5eb3-4451-8d9e-0cdf5927f51b.png",
    alt: "Guesty"
  },
  {
    src: "/lovable-uploads/dc32a014-5de5-41d8-b177-4489d94576f7.png",
    alt: "Hostfully"
  },
  {
    src: "/lovable-uploads/3352a02f-84ed-4bbb-a143-9c2f96f0107a.png",
    alt: "Hostaway"
  },
  {
    src: "/lovable-uploads/eb13347a-14b9-4262-9031-98ecc831003c.png",
    alt: "Lodgify"
  },
  {
    src: "/lovable-uploads/dd00ad8c-b1db-44a5-8b95-67ed878022b9.png",
    alt: "Uplisting"
  }
];

// Triple the logos to ensure smooth looping and full visibility
const extendedLogos = [...logos, ...logos, ...logos];

const LogoCarousel = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "keepSnaps",
    slidesToScroll: 1,
    startIndex: logos.length, // Start from the middle set to ensure full visibility
    align: 'start'
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
      // Give a small delay to ensure proper initialization
      setTimeout(() => {
        startAutoplay();
      }, 100);
      
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
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-medium text-center text-gray-700 mb-8">
            {t('partners.title')}
          </h3>
          
          {/* Logo Carousel */}
          <div className="mb-8">
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
      </div>
    </section>
  );
};

export default LogoCarousel;
