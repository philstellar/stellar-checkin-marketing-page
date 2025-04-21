
import { useState } from 'react';
import { Send } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
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
      const emailContent = `
        Name: ${formData.name}
        Email: ${formData.email}
        Unternehmen: ${formData.company}
        Nachricht: ${formData.message}
      `;

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
          title: t('contact.success'),
          description: t('contact.successDesc'),
        });

        // fire conversion
        gtag_report_conversion();
        
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
        title: t('contact.error'),
        description: t('contact.errorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-royal-700 mb-1">{t('contact.formName')}</label>
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
        <label htmlFor="email" className="block text-sm font-medium text-royal-700 mb-1">{t('contact.formEmail')}</label>
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
        <label htmlFor="company" className="block text-sm font-medium text-royal-700 mb-1">{t('contact.formCompany')}</label>
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
        <label htmlFor="message" className="block text-sm font-medium text-royal-700 mb-1">{t('contact.formMessage')}</label>
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
          {isSubmitting ? t('contact.formSending') : t('contact.formSend')} <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
