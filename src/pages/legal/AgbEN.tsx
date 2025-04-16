
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const AgbEN = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-16 container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-stellar-700">General Terms and Conditions</h1>
          
          <div className="space-y-8">
            <p className="font-semibold mb-6">
              For the provision of services by Stellar Tourism Innovations GmbH, Immanuelkirchstraße 37, 
              10405 Berlin, Email: philipp@stellar-trust.com (hereinafter referred to as "Contractor") to its customers 
              (hereinafter referred to as "Client")
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. General</h2>
            <p>
              1.1 These General Terms and Conditions (GTC) for the provision of services apply to contracts that are 
              concluded between the Client and the Contractor with the inclusion of these GTC.
            </p>
            
            <p>
              1.2 The Contractor is entitled to assign the required services to subcontractors in its own name and for 
              its own account, who in turn may also employ subcontractors. The Contractor remains the sole contractual 
              partner of the Client. Subcontractors are not used if the Contractor recognizes that their use is contrary 
              to the legitimate interests of the Client.
            </p>
            
            <p>
              1.3 If additional contract documents or other terms and conditions in text or written form have become part 
              of the contract, the provisions of these additional contract documents shall take precedence over these GTC in case of conflict.
            </p>
            
            <p>
              1.4 The Contractor does not recognize any GTC deviating from these conditions that are used by the Client – 
              subject to express consent.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">2. Subject Matter of the Contract and Scope of Services</h2>
            <p>
              2.1 The Contractor provides the following services for the Client as an independent entrepreneur:
            </p>
            
            <p className="pl-5">
              Verification of holiday apartment agencies, owners, issuance of badges. Provision of 
              Software-as-a-Service (SaaS) services.
            </p>
            
            <p>
              2.2 The specific scope of services is the subject of individual agreements between the Contractor and the Client.
            </p>
            
            <p>
              2.3 The Contractor will provide the contractually agreed services with the greatest possible care and according 
              to the latest standards, rules, and insights.
            </p>
            
            <p>
              2.4 The Contractor is obliged to provide the contractually owed services. However, in exercising its activities, 
              it is not subject to any instructions regarding the manner of service provision, the place of service provision, 
              or the time of service provision. However, it will organize the working days and the schedule on these days in 
              such a way that optimal efficiency of its activities and the realization of the subject matter of the contract is achieved. 
              The provision of services by the Contractor only takes place in coordination with the Client.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">3. Cooperation Obligations of the Client</h2>
            <p>
              The Client is obliged to provide all information, data, and other content that are necessary for the fulfillment 
              of the service completely and correctly. The Contractor is in no way responsible for delays and tardiness in service 
              provision that are attributable to a delayed and necessary cooperation or assistance from the customer; the provisions 
              under the heading "Liability/Compensation" remain unaffected by this.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">4. Remuneration</h2>
            <p>
              4.1 The remuneration is agreed upon individually.
            </p>
            
            <p>
              4.2 The remuneration is due after the provision of the services. If the remuneration is measured by periods, 
              it is due after the expiry of each period (§ 614 BGB). When billing according to expenditure, the Contractor is entitled, 
              subject to deviating agreements, to invoice the services provided monthly.
            </p>
            
            <p>
              4.3 After providing the services, the Contractor will issue an invoice to the Client by mail or email (e.g., as PDF). 
              The remuneration is due for payment within 14 days of receipt of the invoice.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">5. Liability / Compensation</h2>
            <p>
              5.1 The Contractor is liable without limitation from any legal reason in case of intent or gross negligence, in case of 
              intentional or negligent injury to life, body, or health, based on a guarantee promise, unless otherwise regulated, or 
              based on mandatory liability. If the Contractor negligently breaches a material contractual obligation, the liability is 
              limited to the contractually typical, foreseeable damage, unless there is unlimited liability according to the preceding 
              sentence. Material contractual obligations are obligations that the contract imposes on the Contractor according to its 
              content to achieve the purpose of the contract, the fulfillment of which makes the proper execution of the contract 
              possible in the first place and on the compliance with which the Client may regularly rely. Otherwise, the liability of 
              the Contractor is excluded. The aforementioned liability provisions also apply to the liability of the Contractor for its 
              vicarious agents and legal representatives.
            </p>
            
            <p>
              5.2 The Client indemnifies the Contractor against all claims of third parties that are asserted against the Contractor due 
              to violations of the Client against these contractual terms or applicable law.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">6. Contract Duration and Termination</h2>
            <p>
              6.1 The contract duration and the deadlines for ordinary termination are individually agreed upon by the parties.
            </p>
            
            <p>
              6.2 The right of both parties to terminate the contract without notice for good cause remains unaffected by this.
            </p>
            
            <p>
              6.3 Upon termination of the contract, the Contractor must either return or destroy all documents and other content 
              provided to it at the Client's option without delay. The assertion of a right of retention to this is excluded. 
              Electronic data must be completely deleted. Excluded from this are documents and data for which there is a longer 
              statutory retention obligation, but only until the end of the respective retention period. The Contractor must confirm 
              the deletion to the company in writing upon request.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">7. Confidentiality and Data Protection</h2>
            <p>
              7.1 The Contractor will treat all processes that become known to it in connection with the order strictly confidentially. 
              The Contractor undertakes to obligate all employees and/or third parties who have access to the order-related information 
              to confidentiality. The confidentiality obligation applies indefinitely beyond the term of this contract.
            </p>
            
            <p>
              7.2 The Contractor undertakes to comply with all data protection regulations – in particular the provisions of the 
              General Data Protection Regulation and the Federal Data Protection Act – when executing the order.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">8. Final Provisions</h2>
            <p>
              8.1 The law of the Federal Republic of Germany applies to the exclusion of the UN Convention on Contracts for the 
              International Sale of Goods.
            </p>
            
            <p>
              8.2 Should a provision of these GTC be or become invalid, this shall not affect the validity of the remaining GTC.
            </p>
            
            <p>
              8.3 The Client will support the Contractor in providing its contractually agreed services through appropriate cooperation 
              measures, insofar as this is necessary. In particular, the Client will provide the Contractor with the information and 
              data necessary for the fulfillment of the contract.
            </p>
            
            <p>
              8.4 If the Client is a merchant, a legal entity under public law, or a special fund under public law, or if it does not 
              have a general place of jurisdiction in Germany, the parties agree on the registered office of the Contractor as the place 
              of jurisdiction for all disputes arising from this contractual relationship; exclusive places of jurisdiction remain 
              unaffected by this.
            </p>
            
            <p>
              8.5 The Contractor is entitled to change these GTC for valid reasons (e.g., changes in case law, the legal situation, 
              market conditions, or the business or corporate strategy) and while observing a reasonable period of notice. Existing 
              customers will be notified of this at least two weeks before the changes come into effect by email. If the existing 
              customer does not object within the period set in the notification of change, their consent to the changes is deemed 
              to have been given. If they object, the changes will not become effective; in this case, the Contractor is entitled to 
              terminate the contract extraordinarily at the time the changes come into effect. The notification of the intended change 
              of these GTC will point out the period and the consequences of objection or its absence.
            </p>
            
            <p>
              8.6 Buyer protection is defined as follows: As a booker, you are responsible for only booking through channels that 
              are officially recognized by the Stellar-certified website. Do not communicate with an email address or phone number 
              that has not been verified by us. We do our best to verify all data provided to us to provide maximum protection.
            </p>
            
            <p className="font-medium my-4">The data we verify are the following:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>ID of the key person including biometric data</li>
              <li>Legitimacy of the property website by providing a meta tag</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company address and geo-location cross-check on major platforms</li>
              <li>OTA ratings</li>
            </ul>
            
            <p>
              8.7 Please note the guidelines of our insurance providers. You can find them linked here. Stellar Tourism Innovations GmbH 
              only sells insurance policies from Hiscox and is not an insurance company itself. Claims processing is the responsibility 
              of the insurance providers and is carried out according to their guidelines. Their guidelines are valid at all times. 
              Information on the Stellar website is only for support and is always subordinate to the guidelines.
            </p>
            
            <p>
              8.8 Right of termination – We reserve the right to terminate any contract without further notice if we detect fraudulent 
              behavior. Both the customer and Stellar have the right to terminate contracts at any time with immediate effect and without 
              giving reasons. In the event that Stellar exercises its right of termination, all fees paid for services not yet provided 
              at the time of termination will be refunded. Any obligations or rights that arose before the termination became effective 
              remain unaffected.
            </p>
            
            <p className="font-medium mt-6 mb-2">Provisions for completed insurance policies</p>
            
            <p className="font-medium mt-4 mb-1">Already started bookings (on or after the arrival date)</p>
            <p>
              For each completed insurance policy, all bookings that have already started (i.e., on or after the planned arrival date) 
              remain fully insured. These bookings can no longer be canceled, and all associated insurance benefits remain in force 
              under the original conditions.
            </p>
            
            <p className="font-medium mt-4 mb-1">Not yet started bookings (before the arrival date)</p>
            <p>
              For all not yet started bookings, Stellar reserves the right to refund all future premiums or contributions related 
              to these bookings upon termination of the contract. Once these refunds have been made, the corresponding insurance 
              coverage ends and the contract is considered terminated or canceled for these future bookings.
            </p>
            
            <p>
              These provisions are intended to clarify the rights and obligations of both parties in the event of contract termination 
              and to ensure that all already started bookings remain fully protected, while at the same time providing flexibility for 
              not yet started bookings.
            </p>
            
            <p>
              8.9 Any company or individual who uses our badge fraudulently will be held liable for any damage. That means we will 
              claim damages from the fraudulent party to compensate the defrauded party and/or Stellar Tourism Innovations.
            </p>
            
            <p>
              9.0 The Stellar Tourism Innovations guarantee contract is subject to German law. Place of performance and jurisdiction 
              is Berlin. The online booking site can direct complaints to the "Bundesanstalt für Finanzdienstleistungsaufsicht" (BaFin).
            </p>
            
            <p>
              9.1 We take all reasonable steps to ensure that the information on this website is correct. However, we do not guarantee 
              the accuracy or completeness of the material on this website. We may make changes to the material on this website at any 
              time and without notice. The material on this website may be out of date, or in rare cases, contain errors, and we are 
              not committed to ensuring that such material is correct or up to date.
            </p>
            
            <p>
              The material on this website is provided without any conditions or warranties of any kind. To the extent permitted by law, 
              we enable access to and use of this website on the basis that we exclude all representations, warranties, and conditions 
              that would apply to this website without these conditions.
            </p>
            
            <p>
              9.2 Neither we nor any other party (whether or not involved in creating, maintaining, or delivering this website) shall 
              be liable for any loss or damage of any kind that may arise to you or a third party as a result of your or their use of 
              our website. This exclusion includes service or repair costs and, without limitation, any other direct, indirect, or 
              consequential damages, whether arising from tort or contract or otherwise in connection with this website.
            </p>
            
            <p>
              9.3 Nothing in these conditions excludes or limits liability for:
            </p>
            <ul className="list-[lower-alpha] pl-8 space-y-1">
              <li>Death or personal injury caused by negligence (as defined in the Unfair Contract Terms Act 1977);</li>
              <li>Fraud;</li>
              <li>Misrepresentation as to a fundamental matter; or</li>
              <li>Any liability which cannot be excluded or limited under the laws of the United Kingdom.</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Information on Online Dispute Resolution / Consumer Arbitration</h2>
            <p>
              The EU Commission provides a platform for online dispute resolution on the Internet at the following link: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-stellar-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            
            <p>
              This platform serves as a point of contact for the out-of-court settlement of disputes arising from online purchase or 
              service contracts involving a consumer. The provider is neither willing nor obliged to participate in a dispute resolution 
              procedure before a consumer arbitration board according to the VSBG.
            </p>
            
            <p>
              Please find our GDPR data processing agreement in the login area. You agree to automatically accept and sign this before 
              actively using the software. You can also find it here in German. If you need a translation into your respective language, 
              please let us know. The German version is always authoritative, while the translations are only for illustration in case of doubt.
            </p>
            
            <p className="mt-8">
              You can find our email address in the header of these GTC.
            </p>
            
            <div className="mt-12 flex items-center justify-start gap-4">
              <Link to="/en/impressum">
                <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                  <FileText className="h-4 w-4" />
                  Imprint
                </Button>
              </Link>
              <Link to="/en/datenschutz">
                <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                  <FileText className="h-4 w-4" />
                  Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgbEN;
