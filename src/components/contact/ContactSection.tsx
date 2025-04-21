
import { useTranslation } from "@/hooks/use-translation";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="kontakt" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4">
              {t('contact.title')}
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-royal-700 mb-10 max-w-lg">
              {t('contact.subtitle')}
            </p>
            
            <ContactInformation />
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
