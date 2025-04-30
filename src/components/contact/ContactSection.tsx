
import { useTranslation } from "@/hooks/use-translation";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import { HeadingWithLine } from "@/components/ui/heading-with-line";
import { SECTION_IDS } from "@/components/Header";

const ContactSection = () => {
  const { t, currentLanguage } = useTranslation();
  
  // Get the correct ID from our centralized mapping
  const sectionId = SECTION_IDS.contact;

  return (
    <section id={sectionId} className="section-padding bg-white">
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
