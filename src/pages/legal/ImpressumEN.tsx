
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ImpressumEN = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-16 container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-stellar-700">Imprint</h1>
          
          <div className="space-y-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Information according to § 5 TMG</h2>
              <p className="text-gray-700 leading-relaxed">
                Stellar Tourism Innovations GmbH<br />
                Immanuelkirchstraße 37<br />
                10405 Berlin
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Commercial Register</h2>
              <p className="text-gray-700 leading-relaxed">
                Commercial Register: HRB 183707 B<br />
                Registration Court: Amtsgericht Charlottenburg
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Represented by</h2>
              <p className="text-gray-700 leading-relaxed">Philipp Reuter</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Email: <a href="mailto:hello@stellar-trust.com" className="text-primary hover:underline">hello@stellar-trust.com</a>
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">VAT Identification Number</h2>
              <p className="text-gray-700 leading-relaxed">
                VAT identification number according to § 27 a of the VAT Act:<br />
                DE366220256
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Person responsible for content</h2>
              <p className="text-gray-700 leading-relaxed">Philipp Reuter</p>
            </section>
            
            <Accordion type="single" collapsible className="w-full mb-8">
              <AccordionItem value="versicherungsvermittlung" className="border-none">
                <AccordionTrigger className="text-2xl font-bold text-stellar-600 py-2 hover:no-underline hover:text-primary px-0">
                  Insurance Brokerage
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Registered in the intermediary register at the IHK Berlin under the number D-6JBK-A27XW-21
                      as insurance representative according to § 34 D para. 1 in conjunction with § 59 para. 1,2 VVG
                    </p>
                    
                    <p>
                      Legally required professional liability insurance with ERGO Versicherung AG SV 75594456-341
                    </p>
                    
                    <p>
                      – § 34d of the German Trade Regulation Act<br />
                      – §§ 59-67 VVG<br />
                      – VersVermV<br />
                      – VAG
                    </p>
                    
                    <p>
                      The professional regulations can be viewed and retrieved via the website "Gesetze im Internet" operated by the Federal Ministry of Justice and juris GmbH.
                    </p>
                    
                    <p>
                      Dear interested parties, we are required by law to provide you with a range of information about us as an insurance broker. We have compiled and explained this information for you so that it is useful to you.
                    </p>
                    
                    <p>
                      First information as PDFs for download – Please note the linked folder
                    </p>
                    
                    <p>
                      We operate as an insurance representative with permission from the Berlin Chamber of Industry and Commerce according to § 34d paragraph 1 of the German Trade Regulation Act. This permission was issued in Germany.
                    </p>
                    
                    <p>
                      As an insurance representative, we offer products on behalf of insurance companies. The remuneration in the form of a commission is paid by the insurance company. This commission is part of the insurance premium. Any deviation from this must be expressly agreed between us and the client. Our company does not receive remuneration in the form of other benefits.
                    </p>
                    
                    <p>
                      Our insurance products are offered through insurance brokers and multiple insurance intermediaries. The consulting and needs assessment for our products is carried out by our distribution partners.
                    </p>
                    
                    <p>
                      Stellar Tourism Innovations GmbH is registered in the insurance intermediary register under the number D-6JBK-A27XW-21. You are welcome to verify this, either on the internet at:
                    </p>
                    
                    <p>
                      <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vermittlerregister.info</a>
                    </p>
                    
                    <p>
                      or at the insurance intermediary register at the
                    </p>
                    
                    <p>
                      German Association of Chambers of Industry and Commerce (DIHK) e.V.<br />
                      Breite Str. 29, 10178 Berlin<br />
                      Tel. 030 203080, Fax 030 203081000
                    </p>
                    
                    <p>
                      No. Neither are we involved in an insurance company, nor is an insurance company involved in our company.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Complaints</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have complaints about our activities, please contact our complaints office:<br />
                Email: <a href="mailto:complaint@stellar-trust.com" className="text-primary hover:underline">complaint@stellar-trust.com</a>
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Philipp Reuter, Ralf Kramer, Address as above
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Liability Notice</h2>
              <p className="text-gray-700 leading-relaxed">
                Despite careful content control, we do not assume any liability for the content of external links. The operators of the linked pages are solely responsible for their content. The fact that such links may lead to commercial providers is in the nature of the WWW. We therefore assume no liability for the content of such links.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">EU Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                You can find our email address in the imprint of the website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Dispute Resolution Procedure Before a Consumer Arbitration Board</h2>
              <p className="text-gray-700 leading-relaxed">
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Central Contact Point According to the Digital Services Act – DSA (Regulation (EU) 2022/265)</h2>
              <p className="text-gray-700 leading-relaxed">
                You can reach our central contact point for users and authorities according to Art. 11, 12 DSA as follows:<br />
                Email: <a href="mailto:hello@stellar-trust.com" className="text-primary hover:underline">hello@stellar-trust.com</a>
              </p>
            </section>
          </div>
          
          <div className="mt-12 flex items-center justify-start gap-4">
            <Link to="/en/datenschutz">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                <FileText className="h-4 w-4" />
                Privacy Policy
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

export default ImpressumEN;
