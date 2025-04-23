
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SuccessStoriesIT = () => (
  <>
    <Header />
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Storie di Successo</h1>
        <p className="text-lg text-royal-900 mb-8 max-w-xl">
          Scopri come gli host usano Stellar Checkin e Insurance per ottimizzare i processi e aumentare la fiducia degli ospiti. (Contenuto in arrivo.)
        </p>
      </div>
    </section>
    <Footer />
  </>
);

export default SuccessStoriesIT;
