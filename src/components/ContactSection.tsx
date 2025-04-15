import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="py-24 bg-floral">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl font-bold text-royal mb-6">
              Kontaktieren Sie uns
              <div className="mt-2 h-1 w-24 bg-apple rounded-full"></div>
            </h2>
            <p className="text-lg text-royal-700 mb-8">
              Haben Sie Fragen oder wünschen Sie eine persönliche Beratung? 
              Füllen Sie einfach das Formular aus oder kontaktieren Sie uns direkt.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); }} action="#" className="space-y-4">
              <div>
                <Input type="text" placeholder="Name" className="border-gray-300 rounded-md shadow-sm focus:border-apple focus:ring-apple" />
              </div>
              <div>
                <Input type="email" placeholder="E-Mail" className="border-gray-300 rounded-md shadow-sm focus:border-apple focus:ring-apple" />
              </div>
              <div>
                <Textarea placeholder="Nachricht" rows={4} className="border-gray-300 rounded-md shadow-sm focus:border-apple focus:ring-apple" />
              </div>
              <Button type="submit" className="w-full bg-apple text-white hover:bg-apple-600">
                Nachricht senden
              </Button>
            </form>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-royal mb-4">
              Unsere Kontaktdaten
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-apple h-5 w-5" />
                <div>
                  <p className="text-royal-700 font-medium">E-Mail:</p>
                  <a href="mailto:info@example.com" className="text-apple-600 hover:underline">info@example.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-apple h-5 w-5" />
                <div>
                  <p className="text-royal-700 font-medium">Telefon:</p>
                  <a href="tel:+49123456789" className="text-apple-600 hover:underline">+49 123 456789</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-apple h-5 w-5" />
                <div>
                  <p className="text-royal-700 font-medium">Adresse:</p>
                  <p className="text-royal-700">Musterstraße 123, 12345 Musterstadt</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.973494279158!2d2.29204434848855!3d48.85837008089161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e9!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1672489158247!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
