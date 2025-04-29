
import React from 'react';
import { Award, User, Home } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from "@/components/ui/card";
import LogoCarouselAutoplay from '@/components/LogoCarouselAutoplay';
import CTAButton from '@/components/CTAButton';
import OptimizedImage from '@/components/OptimizedImage';

const testimonialLogos = [{
  src: "/lovable-uploads/676aad56-42f8-4099-a3bb-1239e0d91468.png",
  alt: "Hof Liebeneck Osterspai",
  width: 180
}, {
  src: "/lovable-uploads/5ed06b20-0365-4348-b2b0-31574211bc35.png",
  alt: "Homeby",
  width: 160
}, {
  src: "/lovable-uploads/35553133-b084-41da-985f-8546970c819f.png",
  alt: "Favorent",
  width: 150
}, {
  src: "/lovable-uploads/fd96b10c-36ff-4492-a020-f47f221d8d39.png",
  alt: "Luxury Hideaway",
  width: 170
}, {
  src: "/lovable-uploads/404c2219-9b9a-4ebd-b8ec-aea63d21d6d7.png",
  alt: "Plau Lagoons",
  width: 160
}, {
  src: "/lovable-uploads/3f0f71e5-0006-4019-9e50-f5c4354ed3fe.png",
  alt: "Berlin Mitte Experience",
  width: 180
}, {
  src: "/lovable-uploads/9451653b-0793-4645-8889-3222d4c98e84.png",
  alt: "Fairienglück",
  width: 160
}];

const testimonials = [
  {
    company: "Hof Liebeneck",
    name: "Mario Schilling",
    image: "/lovable-uploads/7ac2f1b9-71b4-4955-b98d-10b23cd137a4.png",
    properties: 4,
    joinedYear: 2024,
    quote: "Convencer a los huéspedes de que reserven directamente en nuestra web siempre fue un reto. Desde que mostramos el Trust Badge de Stellar, que agrupa nuestras valoraciones de Airbnb y Booking.com, hemos visto ya un aumento en reservas.\n\nAdemás, tengo mucha más seguridad en reservas de huéspedes que aún no conozco, ya que ahora puedo ofrecerles elegir entre un depósito o el seguro de daños al huésped de Stellar.",
    website: "https://www.liebeneck.com/"
  },
  {
    company: "Plau Lagoons",
    name: "Ralf Kramer",
    image: "/lovable-uploads/cda4c627-8961-489c-b264-d970daf26bed.png",
    properties: 10,
    joinedYear: 2024,
    quote: "Incrementar las reservas directas es fundamental últimamente—no solo para crecer en ingresos, sino también para conectar de manera más personal con los huéspedes, por ejemplo, con tarjetas de bienvenida u ofertas especiales.\n\nPero nos dimos cuenta de que una web bonita no basta. Necesitábamos algo que transmitiera seguridad extra. Ahí es donde el Trust Badge de Stellar ha marcado la diferencia.",
    website: "https://www.plau-lagoons.de"
  },
  {
    company: "Favorent",
    name: "Volker Rantz",
    image: "/lovable-uploads/d7825600-e22b-4fa5-a960-fb33e4dd0d9d.png",
    properties: 700,
    joinedYear: 2024,
    quote: "El seguro de daños por huésped diario ha supuesto un auténtico cambio para nosotros—tanto como argumento de venta único para captar nuevas agencias, como para simplificar la gestión de depósitos.\n\nHemos logrado reducir considerablemente los puntos de fricción entre agencia, propietarios y huéspedes.",
    website: "https://favorent.de/"
  },
  {
    company: "Fairienglück",
    name: "Christopher Redenz",
    image: "/lovable-uploads/d642b640-6f64-4b66-a4d4-263a5d6f288c.png",
    properties: 100,
    joinedYear: 2024,
    quote: "Como pequeña arrendadora, siempre era complicado convencer a los huéspedes para que reservaran directamente en mi web. Stellar Checkin cambió todo eso. El Trust Badge da la confianza necesaria al instante.\n\nLa verificación de identidad y la posibilidad de ofrecer un seguro de daños al huésped han incrementado mucho la seguridad de mis reservas.",
    website: "https://www.fairienglueck.de/"
  },
  {
    company: "Berlin Mitte Experience",
    name: "Philipp Reuter",
    image: "/lovable-uploads/321ff530-1491-4b9c-b977-7111d0710385.png",
    properties: 2,
    joinedYear: 2024,
    quote: "Como anfitrión con varios apartamentos en Berlin Mitte, la gestión de depósitos y los registros de huéspedes siempre llevaba tiempo. Con Stellar Checkin, todo el proceso lo tengo digitalizado y automatizado.\n\nMe impresiona sobre todo la integración directa con nuestro PMS y poder vender servicios adicionales directamente durante el check-in.",
    website: "https://berlin-mitte.homes/de"
  },
  {
    company: "Homeby",
    name: "Ale Fiorotto",
    image: "/lovable-uploads/1c1f42aa-b940-4bc9-bae9-f556d48149cf.png",
    properties: 100,
    joinedYear: 2024,
    quote: "Como empresa de administración, antes teníamos que cambiar continuamente de sistema. Stellar Checkin ha simplificado y digitalizado todos nuestros procesos de check-in.\n\nAhora recogemos automáticamente los datos del huésped, podemos ofrecer seguro y vender extras — eficiencia e ingresos han aumentado claramente.",
    website: "https://homeby.it"
  }
];

const SuccessStoriesES = () => {
  return <>
      <Header />
      <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-white"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
                Nuestras <span className="text-apple">Historias de Éxito</span>
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                Descubre cómo propietarios y anfitriones usan Stellar Checkin para optimizar procesos y potenciar su éxito.
              </p>
              <div className="mb-8">
                <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
                  Regístrate ahora
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-royal">
            Clientes destacados
          </h2>
          <LogoCarouselAutoplay logos={testimonialLogos} />
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-12">
            <Award className="h-8 w-8 text-apple" />
            <h2 className="text-3xl font-bold text-royal inline-block relative">
              Historias de Éxito
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-6 my-0 py-0">
                    <div className="flex items-center gap-4 mb-4">
                      <OptimizedImage 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover" 
                        width={64}
                        height={64}
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-1 text-royal">
                          <a href={testimonial.website} target="_blank" rel="noopener noreferrer" className="hover:text-apple transition-colors">
                            {testimonial.company}
                          </a>
                        </h3>
                        <p className="text-gray-600">{testimonial.name}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 whitespace-pre-line">{testimonial.quote}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="">
                      {testimonial.properties && <div className="flex items-center gap-1">
                          <Home className="h-4 w-4" />
                          <span className="text-left">{testimonial.properties} Propiedades</span>
                        </div>}
                    </div>
                    
                    {testimonial.joinedYear && <div className="text-sm text-gray-500 mt-2">
                        Cliente desde {testimonial.joinedYear}
                      </div>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>;
};

export default SuccessStoriesES;
