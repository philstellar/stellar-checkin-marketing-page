
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X, Mail, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { addContactToBrevo } from "@/services/brevoService";
import { useTranslation } from "@/hooks/use-translation";

interface BrevoFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrevoFormPopup = ({ isOpen, onClose }: BrevoFormPopupProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t, currentLanguage } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setEmail("");
    }
  }, [isOpen]);

  const extractLanguageFromPath = (): string => {
    const path = window.location.pathname;
    const match = path.match(/^\/(de|en|es|it)(\/|$)/);
    return match ? match[1] : 'de';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: t("brevoPopup.invalidEmailTitle", { defaultValue: "Ungültige E-Mail" }),
        description: t("brevoPopup.invalidEmailDesc", { defaultValue: "Bitte gib eine gültige E-Mail-Adresse ein." }),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        console.log('Client IP address:', ipData.ip);
      } catch (ipError) {
        console.error('Error getting IP address:', ipError);
      }

      console.log('BrevoFormPopup: Submitting email to Brevo directly:', email);
      const language = extractLanguageFromPath();
      const sourceForBrevo = {
        url: window.location.href,
        cta: 'Registration Popup',
        message: undefined,
        language
      };
      const response = await addContactToBrevo(
        email,
        undefined,
        sourceForBrevo
      );
      console.log('BrevoFormPopup: Brevo API response status:', response.status);

      if (response.ok || response.status === 201 || response.status === 204) {
        console.log('BrevoFormPopup: Contact successfully added to Brevo');
        setIsSubmitted(true);
        toast({
          title: t("brevoPopup.successTitle", { defaultValue: "Erfolgreich!" }),
          description: t("brevoPopup.successDesc", { defaultValue: "Vielen Dank für deine Anmeldung! Wir melden uns in Kürze bei dir." }),
        });

        try {
          if (typeof window.gtag_report_conversion === 'function') {
            window.gtag_report_conversion();
            console.log('Conversion tracking fired');
          }
        } catch (error) {
          console.error("Error reporting conversion:", error);
        }
      } else {
        const data = await response.json().catch(() => ({}));
        console.error('BrevoFormPopup: Brevo API error response:', data);
        throw new Error('Failed to add contact to Brevo: ' + (data?.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('BrevoFormPopup: Error submitting form:', error);
      toast({
        title: t("brevoPopup.errorTitle", { defaultValue: "Fehler" }),
        description: t("brevoPopup.errorDesc", { defaultValue: "Es gab ein Problem bei der Anmeldung. Wir haben deine Anfrage erhalten und werden uns manuell bei dir melden." }),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const ThankYouMessage = () => (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-[540px] text-center w-full">
      <div className="flex justify-center mb-6">
        <CheckCircle
          className="text-apple-500"
          size={64}
          strokeWidth={1.5}
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {t("brevoPopup.thankYouTitle", { defaultValue: "Vielen Dank für deine Anmeldung!" })}
      </h2>
      <p className="text-gray-600 mb-6">
        {t("brevoPopup.thankYouDesc", { defaultValue: "Wir melden uns so schnell wie möglich persönlich bei dir" })}
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2 bg-apple-500 text-white rounded-md hover:bg-apple-600 transition-colors"
      >
        {t("brevoPopup.closeBtn", { defaultValue: "Schließen" })}
      </button>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="p-0 max-w-[580px] border-none bg-white"
        aria-describedby="dialog-description"
        hideCloseButton // this prop prevents the Radix close button from rendering outside
      >
        <span id="dialog-description" className="sr-only">
          {t("brevoPopup.a11yDescription", { defaultValue: "Brevo Formular zur Erstellung eines kostenlosen Kontos" })}
        </span>
        <DialogTitle className="sr-only">{t("brevoPopup.dialogTitle", { defaultValue: "Kostenloses Konto erstellen" })}</DialogTitle>

        {isSubmitted ? (
          <ThankYouMessage />
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-[540px] relative">
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-10">
              <X className="h-4 w-4" />
              <span className="sr-only">{t("brevoPopup.closeBtn", { defaultValue: "Schließen" })}</span>
            </DialogClose>

            <div className="flex justify-center mb-4">
              <Mail
                className="text-apple-500"
                size={48}
                strokeWidth={1.5}
              />
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{t("brevoPopup.title", { defaultValue: "Kostenlos registrieren" })}</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-center font-semibold text-gray-700" htmlFor="email">
                  {t("brevoPopup.emailPrompt", { defaultValue: "Bitte trage deine geschäftliche E-Mail ein" })}
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apple-500"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={t("brevoPopup.emailPlaceholder", { defaultValue: "deine@email.de" })}
                  required
                />
                <p className="text-sm text-center text-gray-500">
                  {t("brevoPopup.infoText", { defaultValue: "In Kürze erhältst du von uns weitere Infos und den Registrierungslink" })}
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-2 text-white font-medium bg-apple-500 rounded-md hover:bg-apple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-apple-300 disabled:opacity-70"
                >
                  {isSubmitting ? t("brevoPopup.sending", { defaultValue: "Wird gesendet..." }) : t("brevoPopup.cta", { defaultValue: "Jetzt registrieren" })}
                </button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BrevoFormPopup;

