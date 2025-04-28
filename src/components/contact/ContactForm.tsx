
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
    privacy: true
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
      const response = await submitContactForm(formData);
      if (response.ok) {
        toast({
          title: t('contact.success'),
          description: t('contact.successDesc')
        });

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
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form structure maintained but field labels removed */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-royal-700 mb-1"></label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-transparent" />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-royal-700 mb-1"></label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-transparent" />
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-royal-700 mb-1"></label>
        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-transparent" />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-royal-700 mb-1"></label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple focus:border-transparent resize-none" />
      </div>
      
      <div>
        <Button type="submit" disabled={isSubmitting} className="w-full bg-apple hover:bg-apple-600 px-6 py-3 rounded-[5px] text-white">
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
