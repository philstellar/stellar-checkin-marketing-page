
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUsES = () => (
  <>
    <Header />
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-royal-900 mb-8 max-w-xl">
          Stellar tiene su sede en Berlín y nuestro equipo de expertos en alquileres de corta duración, seguros y tecnología tiene una misión: ofrecer una experiencia sobresaliente para anfitriones y huéspedes. ¿Interesado en unirte? Escríbenos: careers@stellar-trust.com
        </p>
        {/* Personaliza el contenido para una traducción completa */}
      </div>
    </section>
    <Footer />
  </>
);

export default AboutUsES;
