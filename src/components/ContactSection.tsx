import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally submit the form data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="kontakt" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontaktieren Sie uns</h2>
            <p className="text-lg text-gray-700 mb-8">
              Haben Sie Fragen zu Stellar Checkin? Unser Team steht Ihnen gerne zur Verfügung.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-stellar-100 flex items-center justify-center text-stellar-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">E-Mail</h3>
                  <p className="mt-1 text-gray-500">info@stellar-trust.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-stellar-100 flex items-center justify-center text-stellar-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
                  <p className="mt-1 text-gray-500">+49 304 1738487</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-stellar-100 flex items-center justify-center text-stellar-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                  <p className="mt-1 text-gray-500">
                    Stellar Tourism Innovations GmbH<br />
                    Immanuelkirchstraße 37<br />
                    10405 Berlin<br />
                    Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg stellar-shadow">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stellar-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stellar-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Unternehmen</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stellar-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stellar-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <Button type="submit" className="w-full bg-stellar-600 hover:bg-stellar-700">
                    Nachricht senden <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
