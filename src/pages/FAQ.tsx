
import React from 'react';
import { HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const FAQ = () => {
  return (
    <>
      <Header />
      <Hero />
      <section className="py-16">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-8 w-8 text-apple" />
            <h1 className="text-3xl font-bold text-royal inline-block relative">
              Häufig gestellte Fragen
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
            </h1>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-royal-700 mb-6">
              Finden Sie Antworten auf die häufigsten Fragen zu Stellar Checkin...
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
