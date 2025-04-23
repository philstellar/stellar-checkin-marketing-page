
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SuccessStoriesES = () => (
  <>
    <Header />
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Historias de Éxito</h1>
        <p className="text-lg text-royal-900 mb-8 max-w-xl">
          Descubra cómo los anfitriones usan Stellar Checkin e Insurance para optimizar procesos y aumentar la confianza del huésped. (Contenido próximamente.)
        </p>
      </div>
    </section>
    <Footer />
  </>
);

export default SuccessStoriesES;
