
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Brevo = () => {
  // Brevo-Formular-Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde die eigentliche Brevo-Formularverarbeitung stattfinden
    console.log("Brevo Form submitted");
    alert("Vielen Dank für Ihr Interesse! Wir werden uns in Kürze bei Ihnen melden.");
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-stellar-500 focus:border-stellar-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Nachricht
              </Label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
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
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stellar-600 hover:bg-stellar-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stellar-500"
              >
                Absenden
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Brevo;
