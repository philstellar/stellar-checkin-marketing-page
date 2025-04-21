import React from 'react';
import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  return (
    <section className="bg-apple py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4 font-aeonik">
            Unsere Produkte
          </h2>
          <p className="text-lg text-black font-aeonik">
            Entdecken Sie unsere vielfältigen Produkte für Ihren Erfolg.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-floral p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black mb-2 font-aeonik">
              Produkt 1
            </h3>
            <p className="text-black font-aeonik">
              Beschreibung des Produkts 1.
            </p>
            <Button className="mt-4 bg-apple hover:bg-apple-600 font-aeonik">
              Mehr erfahren
            </Button>
          </div>
          <div className="bg-floral p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black mb-2 font-aeonik">
              Produkt 2
            </h3>
            <p className="text-black font-aeonik">
              Beschreibung des Produkts 2.
            </p>
            <Button className="mt-4 bg-apple hover:bg-apple-600 font-aeonik">
              Mehr erfahren
            </Button>
          </div>
          <div className="bg-floral p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-black mb-2 font-aeonik">
              Produkt 3
            </h3>
            <p className="text-black font-aeonik">
              Beschreibung des Produkts 3.
            </p>
            <Button className="mt-4 bg-apple hover:bg-apple-600 font-aeonik">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
