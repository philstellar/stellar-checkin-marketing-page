
import React from 'react';
import { Award, Star, User, Home } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useEmblaCarousel from 'embla-carousel-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card } from "@/components/ui/card";

const Erfolgsgeschichten = () => {
  const testimonialLogos = [
    {
      src: "/lovable-uploads/676aad56-42f8-4099-a3bb-1239e0d91468.png",
      alt: "Hof Liebeneck Osterspai",
      width: 180
    },
    {
      src: "/lovable-uploads/5ed06b20-0365-4348-b2b0-31574211bc35.png",
      alt: "Homeby",
      width: 160
    },
    {
      src: "/lovable-uploads/800ababe-141e-40a9-aa0f-2e8d2519b7ef.png",
      alt: "Favorent",
      width: 150
    },
    {
      src: "/lovable-uploads/fd96b10c-36ff-4492-a020-f47f221d8d39.png",
      alt: "Luxury Hideaway",
      width: 170
    },
    {
      src: "/lovable-uploads/404c2219-9b9a-4ebd-b8ec-aea63d21d6d7.png",
      alt: "Plau Lagoons",
      width: 160
    }
  ];

  const extendedLogos = [...testimonialLogos, ...testimonialLogos, ...testimonialLogos];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "keepSnaps",
    slidesToScroll: 1,
    startIndex: testimonialLogos.length,
    align: 'start'
  });

  const testimonials = [
    {
      company: "Hof Liebeneck",
      name: "Mario Schilling",
      image: "/lovable-uploads/66faf0b3-a82d-417b-94b6-b850f4b79501.png",
      rating: 5.0,
      ratings: 28,
      properties: 4,
      joinedYear: 2024,
      quote: "Gäste davon zu überzeugen, direkt auf unserer Website zu buchen, war immer eine Herausforderung. Seitdem wir das Stellar Trust Badge auf unserer Website anzeigen, das unsere Airbnb- und Booking.com-Bewertungen aggregiert, sehen wir bereits einen Anstieg der Buchungen.\n\nAußerdem habe ich ein viel besseres Gefühl bei Buchungen von Gästen, die ich noch nicht kenne, seit ich ihnen die Wahl zwischen einer Kaution und der Gästeschadenversicherung von Stellar anbieten kann.",
    },
    {
      company: "Plau Lagoons",
      name: "Ralf Kramer",
      image: "/lovable-uploads/cda4c627-8961-489c-b264-d970daf26bed.png",
      rating: 4.7,
      ratings: 12,
      properties: 10,
      joinedYear: 2024,
      quote: "Mehr Direktbuchungen zu bekommen, war für uns in letzter Zeit super wichtig – nicht nur, um den Umsatz zu steigern, sondern auch, um persönlicher mit unseren Gästen zu interagieren, zum Beispiel mit Grußkarten oder speziellen Angeboten.\n\nAber uns war schnell klar: Eine schöne Website allein reicht nicht. Wir brauchten etwas, das unseren Gästen zusätzlich Sicherheit gibt. Genau da kam das Stellar Trust Badge ins Spiel.",
    },
    {
      company: "Favorent",
      name: "Volker Rantz",
      image: "/lovable-uploads/a102adcb-3320-4135-9d3c-f32ae16a0bd4.png",
      rating: 5.0,
      ratings: null,
      properties: null,
      joinedYear: null,
      quote: "Die tägliche Gästeschadenversicherung ist für uns ein echter Gamechanger – sowohl als einzigartiges Verkaufsargument zur Gewinnung neuer Agenturkunden als auch zur Vereinfachung unserer Kautionsverwaltung.\n\nWir konnten die Reibungspunkte zwischen uns als Agentur, den Eigentümern und den Gästen erheblich reduzieren.",
    },
  ];

  return (
    <>
      <Header />
      <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
                Unsere <span className="text-apple">Erfolgsgeschichten</span>
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                Erfahren Sie, wie Vermieter und Gastgeber mit Stellar Checkin ihre Prozesse optimieren und ihren Erfolg steigern.
              </p>
            </div>
            <div className="order-1 md:order-last flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Success Stories" 
                className="w-4/5 h-auto rounded-lg shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-royal">
            Unsere zufriedenen Kunden
          </h2>
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
                            style={{ width: logo.width ? `${logo.width}px` : 'auto', height: 'auto' }}
                            className="max-w-full max-h-full object-contain"
                            loading="lazy"
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
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-12">
            <Award className="h-8 w-8 text-apple" />
            <h2 className="text-3xl font-bold text-royal inline-block relative">
              Erfolgsgeschichten
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-1 text-royal">{testimonial.company}</h3>
                        <p className="text-gray-600">{testimonial.name}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 whitespace-pre-line">{testimonial.quote}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-2">
                      {testimonial.rating && (
                        <>
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{testimonial.rating}</span>
                          {testimonial.ratings && (
                            <span className="text-gray-500">({testimonial.ratings} Bewertungen)</span>
                          )}
                        </>
                      )}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{testimonial.name}</span>
                      </div>
                      {testimonial.properties && (
                        <div className="flex items-center gap-1">
                          <Home className="h-4 w-4" />
                          <span>{testimonial.properties} Unterkünfte</span>
                        </div>
                      )}
                    </div>
                    
                    {testimonial.joinedYear && (
                      <div className="text-sm text-gray-500 mt-2">
                        Kunde seit {testimonial.joinedYear}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Erfolgsgeschichten;
