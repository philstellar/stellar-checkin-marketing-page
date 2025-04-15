
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Email content preparation
      const emailContent = `
        Name: ${formData.name}
        Email: ${formData.email}
        Unternehmen: ${formData.company}
        Nachricht: ${formData.message}
      `;

      // Using formsubmit.co service with the activation string
      const response = await fetch("https://formsubmit.co/4f8ed8dc6e198407f7647476b637eb77", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: emailContent,
          _subject: "Neue Kontaktanfrage von Stellar Checkin",
        }),
      });

      if (response.ok) {
        toast({
          title: "Nachricht gesendet!",
          description: "Vielen Dank für deine Anfrage. Wir werden uns in Kürze bei dir melden.",
        });
          // fire conversion
  gtag_report_conversion();
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error("Error sending message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Fehler beim Senden",
        description: "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4">
              Kontaktiere uns
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-royal-700 mb-10 max-w-lg">
              Hast du Fragen zu Stellar Checkin? Unser Team steht dir gerne zur Verfügung.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-floral-400 flex items-center justify-center text-royal">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-royal mb-1">E-Mail</h3>
                  <a href="mailto:hello@stellar-trust.com" className="text-royal-700 hover:text-apple transition-colors">
                    hello@stellar-trust.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-floral-400 flex items-center justify-center text-royal">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-royal mb-1">Telefon</h3>
                  <a href="tel:+4930417384870" className="text-royal-700 hover:text-apple transition-colors">
                    +49 304 1738487
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-floral-400 flex items-center justify-center text-royal">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-royal mb-1">Adresse</h3>
                  <p className="text-royal-700">
                    Stellar Tourism Innovations GmbH<br />
                    Immanuelkirchstraße 37<br />
                    10405 Berlin<br />
                    Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-royal-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-royal-700 mb-1">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-royal-700 mb-1">Unternehmen</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-royal-700 mb-1">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-transparent resize-none"
                />
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-apple hover:bg-apple-600 text-white px-6 py-3 rounded-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"} <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
