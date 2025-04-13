
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

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

  // Brevo-Formular-Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Email content
      const emailContent = `
        Name: ${formData.name}
        Email: ${formData.email}
        Unternehmen: ${formData.company}
        Nachricht: ${formData.message}
      `;

      // Using fetch to send an email - in a production environment, 
      // you would typically use a backend service or email API
      const response = await fetch("https://formsubmit.co/ajax/hello@stellar-trust.com", {
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
        // Success message
        toast({
          title: "Nachricht gesendet",
          description: "Vielen Dank für Ihr Interesse! Wir werden uns in Kürze bei Ihnen melden.",
        });

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
        description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
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
          Kontaktieren Sie uns
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Erfahren Sie mehr über unsere Stellar Checkin Lösungen
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
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </Label>
              <div className="mt-1">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-stellar-500 focus:border-stellar-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-Mail-Adresse
              </Label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-stellar-500 focus:border-stellar-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Unternehmen
              </Label>
              <div className="mt-1">
                <Input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-stellar-500 focus:border-stellar-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Nachricht
              </Label>
              <div className="mt-1">
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-stellar-500 focus:border-stellar-500 sm:text-sm"
                  placeholder="Ihre Nachricht an uns..."
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                checked={formData.privacy}
                onChange={handleChange}
                className="h-4 w-4 text-stellar-600 focus:ring-stellar-500 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-900">
                Ich akzeptiere die{" "}
                <a href="/datenschutz" className="text-stellar-600 hover:text-stellar-500">
                  Datenschutzerklärung
                </a>
              </label>
            </div>

            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stellar-600 hover:bg-stellar-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stellar-500"
              >
                {isSubmitting ? "Wird gesendet..." : "Absenden"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Brevo;
