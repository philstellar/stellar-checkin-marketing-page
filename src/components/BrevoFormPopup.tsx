
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X, Mail, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { addContactToBrevo } from "@/services/brevoService";

interface BrevoFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrevoFormPopup = ({ isOpen, onClose }: BrevoFormPopupProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Reset submission state when the popup is opened again
    if (isOpen) {
      setIsSubmitted(false);
      setEmail("");
    }
  }, [isOpen]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission with direct API call
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Ungültige E-Mail",
        description: "Bitte gib eine gültige E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log('BrevoFormPopup: Submitting email to Brevo:', email);
      const response = await addContactToBrevo(email);
      console.log('BrevoFormPopup: Submission response status:', response.status);
      
      // Handle different response statuses
      if (response.ok || response.status === 201 || response.status === 204) {
        console.log('BrevoFormPopup: Contact successfully added to Brevo');
        setIsSubmitted(true);
        toast({
          title: "Erfolgreich!",
          description: "Vielen Dank für deine Anmeldung! Wir melden uns in Kürze bei dir.",
        });
        
        // Fire conversion tracking if it exists
        try {
          if (typeof window.gtag_report_conversion === 'function') {
            window.gtag_report_conversion();
            console.log('Conversion tracking fired');
          }
        } catch (error) {
          console.error("Error reporting conversion:", error);
        }
      } else if (response.status === 400) {
        // If response is 400, it might be an existing contact which is fine
        const data = await response.json().catch(() => ({}));
        console.log('BrevoFormPopup: Brevo 400 response data:', data);
        
        // If it's just that the contact already exists, we consider it a success
        if (data?.message?.includes('Contact already exist')) {
          console.log('BrevoFormPopup: Contact already exists, treating as success');
          setIsSubmitted(true);
          toast({
            title: "Erfolgreich!",
            description: "Vielen Dank für deine Anmeldung! Wir melden uns in Kürze bei dir.",
          });
          
          // Fire conversion tracking if it exists
          try {
            if (typeof window.gtag_report_conversion === 'function') {
              window.gtag_report_conversion();
              console.log('Conversion tracking fired');
            }
          } catch (error) {
            console.error("Error reporting conversion:", error);
          }
          return;
        }
        
        throw new Error('Failed to add contact to Brevo: ' + (data?.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('BrevoFormPopup: Error submitting form:', error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem bei der Anmeldung. Bitte versuche es später noch einmal.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Thank you message to display after successful submission
  const ThankYouMessage = () => (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-[540px] text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle 
          className="text-apple-500" 
          size={64} 
          strokeWidth={1.5} 
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Vielen Dank für deine Anmeldung!
      </h2>
      <p className="text-gray-600 mb-6">
        Wir melden uns so schnell wie möglich persönlich bei dir
      </p>
      <button 
        onClick={onClose}
        className="px-6 py-2 bg-apple-500 text-white rounded-md hover:bg-apple-600 transition-colors"
      >
        Schließen
      </button>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0 max-w-[580px] border-none bg-transparent" aria-describedby="dialog-description">
        <span id="dialog-description" className="sr-only">
          Brevo Formular zur Erstellung eines kostenlosen Kontos
        </span>
        <DialogTitle className="sr-only">Kostenloses Konto erstellen</DialogTitle>
        
        {isSubmitted ? (
          <ThankYouMessage />
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-[540px]">
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none z-10">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
            
            <div className="flex justify-center mb-4">
              <Mail 
                className="text-apple-500" 
                size={48} 
                strokeWidth={1.5}
              />
            </div>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Kostenlos registrieren</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-center font-semibold text-gray-700" htmlFor="email">
                  Bitte trage deine geschäftliche E-Mail ein
                </label>
                <input 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-apple-500"
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="deine@email.de" 
                  required 
                />
                <p className="text-sm text-center text-gray-500">
                  In Kürze erhältst du von uns weitere Infos und den Registrierungslink
                </p>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-2 text-white font-medium bg-apple-500 rounded-md hover:bg-apple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-apple-300 disabled:opacity-70"
                >
                  {isSubmitting ? "Wird gesendet..." : "Jetzt registrieren"}
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
