
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import ContactFormFields from "@/components/contact/ContactFormFields";
import { submitContactForm } from "@/services/formSubmission";

const Brevo = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    privacy: false
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formSubmitResponse = await submitContactForm(formData);

      if (formSubmitResponse.ok) {
        toast({
          title: "Nachricht gesendet",
          description: "Vielen Dank für dein Interesse! Wir werden uns in Kürze bei dir melden.",
        });
        // fire conversion
        try {
          if (typeof gtag_report_conversion === 'function') {
            gtag_report_conversion();
            console.log('Conversion tracking fired');
          }
        } catch (error) {
          console.error("Error reporting conversion:", error);
        }
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          privacy: false
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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Kontaktiere uns
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Erfahre mehr über unsere Stellar Checkin Lösungen
        </p>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            <a href="mailto:hello@stellar-trust.com" className="text-stellar-600 hover:text-stellar-500">
              hello@stellar-trust.com
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <a href="tel:+4930417384870" className="text-stellar-600 hover:text-stellar-500">
              +49 304 1738487
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <ContactFormFields 
              formData={formData}
              onChange={handleChange}
              isSubmitting={isSubmitting}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Brevo;
