
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const DatenschutzEN = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-16 container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-stellar-700 mb-10">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">1. Privacy at a Glance</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">General Information</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                The following information provides a simple overview of what happens to your personal data when you visit our website. 
                Personal data is any data that can be used to personally identify you. For detailed information on the subject of 
                data protection, please refer to our privacy policy listed below this text.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Data Collection on Our Website</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>Who is responsible for data collection on this website?</strong><br />
                Data processing on this website is carried out by the website operator. You can find their contact details 
                in the imprint of this website.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>How do we collect your data?</strong><br />
                On the one hand, your data is collected when you provide it to us. This could be data that you enter in a contact form.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Other data is automatically collected by our IT systems when you visit the website. This is primarily technical data 
                (e.g., internet browser, operating system, or time of page view). This data is collected automatically as soon as 
                you enter our website.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>What do we use your data for?</strong><br />
                Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze 
                your user behavior.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                <strong>What rights do you have regarding your data?</strong><br />
                You have the right to receive information about the origin, recipient, and purpose of your stored personal data 
                free of charge at any time. You also have the right to request the correction, blocking, or deletion of this data. 
                For this purpose, as well as for further questions on the subject of data protection, you can contact us at any time 
                at the address given in the imprint. Furthermore, you have the right to lodge a complaint with the responsible 
                supervisory authority.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">2. General Information and Mandatory Information</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Data Protection</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                The operators of these pages take the protection of your personal data very seriously. We treat your personal data 
                confidentially and in accordance with statutory data protection regulations and this privacy policy.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                When you use this website, various personal data is collected. Personal data is data that can be used to personally 
                identify you. This privacy policy explains what data we collect and what we use it for. It also explains how and for 
                what purpose this is done.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                We would like to point out that data transmission on the Internet (e.g., when communicating by email) may have security 
                gaps. Complete protection of data against access by third parties is not possible.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Information about the Responsible Party</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                The responsible party for data processing on this website is:
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Stellar Tourism Innovations GmbH<br />
                Immanuelkirchstraße 37<br />
                10405 Berlin<br />
                Germany<br /><br />
                Phone: +49 304 1738487<br />
                Email: <a href="mailto:info@stellar-trust.com" className="text-primary hover:underline">info@stellar-trust.com</a>
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means 
                of processing personal data (e.g., names, email addresses, etc.).
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Revocation of Your Consent to Data Processing</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Many data processing operations are only possible with your express consent. You can revoke consent you have already 
                given at any time. For this, an informal notification by email to us is sufficient. The legality of the data processing 
                carried out until the revocation remains unaffected by the revocation.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">3. Data Collection on Our Website</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Cookies</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                The internet pages partly use so-called cookies. Cookies do not harm your computer and do not contain viruses. 
                Cookies serve to make our offer more user-friendly, effective, and secure. Cookies are small text files that are 
                stored on your computer and saved by your browser.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Most of the cookies we use are so-called "session cookies." They are automatically deleted after your visit. 
                Other cookies remain stored on your device until you delete them. These cookies allow us to recognize your 
                browser the next time you visit.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual 
                cases, exclude the acceptance of cookies for certain cases or generally, and activate the automatic deletion of 
                cookies when closing the browser. The functionality of this website may be restricted if cookies are deactivated.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Request by Email, Phone, or Fax</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                If you contact us by email, phone, or fax, your request, including all resulting personal data (name, request) will 
                be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                The processing of this data is based on Art. 6 (1) (b) GDPR if your request is related to the fulfillment of a 
                contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing 
                is based on our legitimate interest in the effective processing of requests addressed to us (Art. 6 (1) (f) GDPR) 
                or on your consent (Art. 6 (1) (a) GDPR) if this has been requested.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                The data you send to us via contact requests will remain with us until you request us to delete it, revoke your 
                consent for storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). 
                Mandatory statutory provisions – especially statutory retention periods – remain unaffected.
              </p>
            </section>
          </div>
          
          <div className="mt-12 flex items-center justify-start gap-4">
            <Link to="/en/impressum">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                <FileText className="h-4 w-4" />
                Imprint
              </Button>
            </Link>
            <Link to="/en/agb">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                <FileText className="h-4 w-4" />
                Terms and Conditions
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DatenschutzEN;
