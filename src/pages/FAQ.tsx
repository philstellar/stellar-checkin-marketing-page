
import React from 'react';
import { HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const FAQ = () => {
  return (
    <>
      <Header />
      <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
                Häufig gestellte <span className="text-apple">Fragen</span>
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                Finden Sie schnell Antworten auf die wichtigsten Fragen zu Stellar Checkin und unseren Services.
              </p>
            </div>
            <div className="order-1 md:order-last flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                alt="FAQ Section" 
                className="w-4/5 h-auto rounded-lg shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
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
