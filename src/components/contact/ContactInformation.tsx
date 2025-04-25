import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
const ContactInformation = () => {
  const {
    t
  } = useTranslation();
  return <div className="space-y-8">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 h-14 w-14 rounded-xl flex items-center justify-center text-royal bg-apple-500/[0.27]">
          <Mail className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-royal mb-1">{t('contact.email')}</h3>
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
          <h3 className="text-lg font-semibold text-royal mb-1">{t('contact.phone')}</h3>
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
          <h3 className="text-lg font-semibold text-royal mb-1">{t('contact.address')}</h3>
          <p className="text-royal-700">
            Stellar Tourism Innovations GmbH<br />
            Immanuelkirchstraße 37<br />
            10405 Berlin<br />
            Deutschland
          </p>
        </div>
      </div>
    </div>;
};
export default ContactInformation;