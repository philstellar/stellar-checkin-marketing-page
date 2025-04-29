
import { useTranslation } from "@/hooks/use-translation";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import { HeadingWithLine } from "@/components/ui/heading-with-line";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="kontakt" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <HeadingWithLine
              title={t('contact.title')}
              subtitle={t('contact.subtitle')}
            />
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
