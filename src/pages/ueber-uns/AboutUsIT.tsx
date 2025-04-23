
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUsIT = () => (
  <>
    <Header />
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Chi Siamo</h1>
        <p className="text-lg text-royal-900 mb-8 max-w-xl">
          Stellar ha sede a Berlino e il nostro team di esperti di affitti brevi, assicurazioni e tecnologia ha una missione: offrire un'esperienza eccezionale per host e ospiti. Sei interessato a unirti a noi? Scrivici: careers@stellar-trust.com
        </p>
        {/* Per una traduzione completa, aggiorna questo contenuto */}
      </div>
    </section>
    <Footer />
  </>
);

export default AboutUsIT;
