
import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

type LogoType = {
  src: string;
  alt: string;
};

const logos: LogoType[] = [
  {
    src: "/lovable-uploads/bc398efb-0b31-4737-9ec9-7c55a90079ad.png",
    alt: "Ostsee Card"
  },
  {
    src: "/lovable-uploads/659dc62b-040f-4b60-bd0a-a91d61147d17.png",
    alt: "AVS Tourismus Systeme"
  },
  {
    src: "/lovable-uploads/4d73a118-7cc1-4e3f-bf33-dec5ec07b93c.png",
    alt: "Beds24"
  },
  {
    src: "/lovable-uploads/349e2cab-5eb3-4451-8d9e-0cdf5927f51b.png",
    alt: "Guesty"
  }
];

// Double the logos to create a seamless infinite effect
const extendedLogos = [...logos, ...logos];

const LogoCarousel = () => {
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
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h3 className="text-xl md:text-2xl font-medium text-center text-gray-700 mb-8">
          Vertrauen Sie auf starke Partnerschaften
        </h3>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {extendedLogos.map((logo, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4"
                )}
              >
                <div className="h-24 md:h-32 flex items-center justify-center p-4 bg-transparent">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain max-w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
