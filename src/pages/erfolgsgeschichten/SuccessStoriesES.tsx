
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const testimonials = [
  {
    company: "Hof Liebeneck",
    name: "Mario Schilling",
    image: "/lovable-uploads/7ac2f1b9-71b4-4955-b98d-10b23cd137a4.png",
    rating: 5.0,
    ratings: 28,
    properties: 4,
    joinedYear: 2024,
    quote: "Convencer a los huéspedes de que reserven directamente en nuestra web siempre fue un reto. Desde que mostramos el Trust Badge de Stellar, que agrupa nuestras valoraciones de Airbnb y Booking.com, hemos visto ya un aumento en reservas.\n\nAdemás, tengo mucha más seguridad en reservas de huéspedes que aún no conozco, ya que ahora puedo ofrecerles elegir entre un depósito o el seguro de daños al huésped de Stellar.",
    website: "https://www.liebeneck.com/"
  },
  {
    company: "Plau Lagoons",
    name: "Ralf Kramer",
    image: "/lovable-uploads/cda4c627-8961-489c-b264-d970daf26bed.png",
    rating: 4.7,
    ratings: 12,
    properties: 10,
    joinedYear: 2024,
    quote: "Incrementar las reservas directas es fundamental últimamente—no solo para crecer en ingresos, sino también para conectar de manera más personal con los huéspedes, por ejemplo, con tarjetas de bienvenida u ofertas especiales.\n\nPero nos dimos cuenta de que una web bonita no basta. Necesitábamos algo que transmitiera seguridad extra. Ahí es donde el Trust Badge de Stellar ha marcado la diferencia.",
    website: "https://www.plau-lagoons.de"
  },
  {
    company: "Favorent",
    name: "Volker Rantz",
    image: "/lovable-uploads/d7825600-e22b-4fa5-a960-fb33e4dd0d9d.png",
    rating: 5.0,
    ratings: 13600,
    properties: 700,
    joinedYear: 2024,
    quote: "El seguro de daños por huésped diario ha supuesto un auténtico cambio para nosotros—tanto como argumento de venta único para captar nuevas agencias, como para simplificar la gestión de depósitos.\n\nHemos logrado reducir considerablemente los puntos de fricción entre agencia, propietarios y huéspedes.",
    website: "https://favorent.de/"
  },
  {
    company: "Fairienglück",
    name: "Christopher Redenz",
    image: "/lovable-uploads/d642b640-6f64-4b66-a4d4-263a5d6f288c.png",
    rating: 4.9,
    ratings: 22,
    properties: 6,
    joinedYear: 2024,
    quote: "Como pequeña arrendadora, siempre era complicado convencer a los huéspedes para que reservaran directamente en mi web. Stellar Checkin cambió todo eso. El Trust Badge da la confianza necesaria al instante.\n\nLa verificación de identidad y la posibilidad de ofrecer un seguro de daños al huésped han incrementado mucho la seguridad de mis reservas.",
    website: "https://www.fairienglueck.de/"
  },
  {
    company: "Berlin Mitte Experience",
    name: "Philipp Reuter",
    image: "/lovable-uploads/321ff530-1491-4b9c-b977-7111d0710385.png",
    rating: 4.8,
    ratings: 35,
    properties: 8,
    joinedYear: 2024,
    quote: "Como anfitrión con varios apartamentos en Berlin Mitte, la gestión de depósitos y los registros de huéspedes siempre llevaba tiempo. Con Stellar Checkin, todo el proceso lo tengo digitalizado y automatizado.\n\nMe impresiona sobre todo la integración directa con nuestro PMS y poder vender servicios adicionales directamente durante el check-in.",
    website: "https://berlin-mitte.homes/de"
  },
  {
    company: "Homeby",
    name: "Elena Müller",
    image: "/lovable-uploads/88f97631-50cd-493d-b68c-92e73cb443c7.png",
    rating: 5.0,
    ratings: 18,
    properties: 12,
    joinedYear: 2024,
    quote: "Como empresa de administración, antes teníamos que cambiar continuamente de sistema. Stellar Checkin ha simplificado y digitalizado todos nuestros procesos de check-in.\n\nAhora recogemos automáticamente los datos del huésped, podemos ofrecer seguro y vender extras — eficiencia e ingresos han aumentado claramente.",
    website: "https://homeby.it"
  }
];

const SuccessStoriesES = () => (
  <>
    <Header />
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
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
              <a
                href="/es/brevo"
                className="inline-block px-8 py-3 bg-apple hover:bg-apple-600 text-white rounded-lg text-lg font-semibold font-aeonik shadow transition-colors"
              >
                Regístrate ahora
              </a>
            </div>
          </div>
          <div className="order-1 md:order-last flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Historias de Éxito"
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
          Clientes destacados
        </h2>
      </div>
    </section>
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-12">
          <svg className="h-8 w-8 text-apple" viewBox="0 0 24 24" fill="none"><path d="M11.999 2C8.132 2 5 5.132 5 8.999a6.009 6.009 0 0 0 2.307 4.713l-.881 4.73a1 1 0 0 0 1.447 1.037L12 17.197l4.128 2.282a1 1 0 0 0 1.447-1.037l-.88-4.73A6.008 6.008 0 0 0 19 8.999C19 5.132 15.868 2 11.999 2ZM12 22c-.31 0-.62-.075-.895-.225l-4.07-2.25a3 3 0 0 1-1.447-3.11l.874-4.698C4.807 9.393 5.667 5.999 8.999 5.999c1.49 0 3.139.534 5 .76 1.861-.226 3.511-.76 5-.76 3.33 0 4.192 3.394 2.237 5.917l.875 4.698a3 3 0 0 1-1.447 3.11l-4.07 2.25A1.993 1.993 0 0 1 12 22Z" fill="currentColor" /></svg>
          <h2 className="text-3xl font-bold text-royal inline-block relative">
            Historias de Éxito
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-royal">
                      <a
                        href={testimonial.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-apple transition-colors"
                      >
                        {testimonial.company}
                      </a>
                    </h3>
                    <p className="text-gray-600">{testimonial.name}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 whitespace-pre-line">{testimonial.quote}</p>
              </div>
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-2">
                  {testimonial.rating && (
                    <>
                      <svg className="h-5 w-5 fill-yellow-400 text-yellow-400 inline" viewBox="0 0 24 24"><path d="M12 17.75L6.619 21l1.153-6.726L2.338 9.974l6.797-.987L12 3.5l2.865 5.487 6.797.987-4.434 4.3L17.381 21z" /></svg>
                      <span className="font-semibold">{testimonial.rating}</span>
                      {testimonial.ratings && (
                        <span className="text-gray-500">({testimonial.ratings} valoraciones)</span>
                      )}
                    </>
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-4">
                  <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 inline" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M12 13c-4.418 0-8 1.79-8 4v3h16v-3c0-2.21-3.582-4-8-4z" /></svg>
                    <span>{testimonial.name}</span>
                  </div>
                  {testimonial.properties && (
                    <div className="flex items-center gap-1">
                      <svg className="h-4 w-4 inline" viewBox="0 0 24 24"><path d="M19 21V7.333c0-.233-.158-.444-.384-.491l-6-1.274a.516.516 0 0 0-.232 0l-6 1.274A.516.516 0 0 0 5 7.333V21h14z" /><rect x="9" y="13" width="6" height="8" rx="1" /><rect x="4" y="21" width="16" height="2" /></svg>
                      <span>{testimonial.properties} propiedades</span>
                    </div>
                  )}
                </div>
                {testimonial.joinedYear && (
                  <div className="text-sm text-gray-500 mt-2">
                    Cliente desde {testimonial.joinedYear}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default SuccessStoriesES;
