import { useEffect, useRef } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import useEmblaCarousel from 'embla-carousel-react';

const logos = [
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

const LogoCarousel = () => {
  const extendedLogos = [...logos, ...logos, ...logos];
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "keepSnaps",
    slidesToScroll: 1,
    align: 'start'
  });

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    if (emblaApi) {
      const scroll = () => {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0);
        } else {
          emblaApi.scrollNext();
        }
      };

      autoplayRef.current = setInterval(scroll, 3000);
    }
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
    <div className="py-16 bg-white relative" data-aos="fade-up">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-royal inline-block relative">
            Unsere Partner
            <div className="mt-2 h-1 w-20 bg-apple rounded-full mx-auto"></div>
          </h2>
        </div>
        
        <div className="overflow-hidden rounded-xl bg-floral-100/30 p-6 shadow-inner" ref={emblaRef}>
          <div className="flex">
            {extendedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-4"
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="h-20 flex items-center justify-center p-4 bg-transparent transition-all duration-300 cursor-pointer hover:scale-110">
                      <div className="w-full h-full flex items-center justify-center filter hover:drop-shadow-md">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          style={{ width: logo.width ? `${logo.width}px` : 'auto', height: 'auto' }}
                          className="max-w-full max-h-full object-contain transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto p-2 text-center text-sm bg-white/90 backdrop-blur-sm border border-apple/20">
                    {logo.alt}
                  </HoverCardContent>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
