
import { useState } from 'react';
import { Send } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/services/formSubmission";

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
  privacy: boolean;
};

const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    privacy: true // Adding default privacy value
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use the submitContactForm service which handles both Brevo and email forwarding
      const response = await submitContactForm(formData);

      if (response.ok) {
        toast({
          title: t('contact.success'),
          description: t('contact.successDesc'),
        });

        // fire conversion if available
        try {
          if (typeof window.gtag_report_conversion === 'function') {
            window.gtag_report_conversion();
            console.log('Conversion tracking fired');
          }
        } catch (error) {
          console.error("Error reporting conversion:", error);
        }
        
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          privacy: true
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
        <label className="flex items-center">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            required
            className="mr-2 h-4 w-4 text-apple border-gray-300 rounded focus:ring-apple"
          />
          <span className="text-sm text-gray-700">{t('contact.formPrivacy')}</span>
        </label>
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
