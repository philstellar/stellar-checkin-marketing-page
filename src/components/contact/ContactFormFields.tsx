
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PrivacyCheckbox from "./PrivacyCheckbox";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  privacy: boolean;
}

interface ContactFormFieldsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isSubmitting: boolean;
}

const ContactFormFields = ({ formData, onChange, isSubmitting }: ContactFormFieldsProps) => {
  return (
    <>
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-stellar-500 focus:border-stellar-500 sm:text-sm"
            placeholder="Deine Nachricht an uns..."
          />
        </div>
      </div>

      <PrivacyCheckbox checked={formData.privacy} onChange={onChange} />

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-stellar-600 hover:bg-stellar-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stellar-500"
        >
          {isSubmitting ? "Wird gesendet..." : "Absenden"}
        </Button>
      </div>
    </>
  );
};

export default ContactFormFields;
