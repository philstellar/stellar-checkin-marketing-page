
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Agb = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-semibold mb-6">
              Für die Erbringung von Dienstleistungen durch die Stellar Tourism Innovations GmbH, Immanuelkirchstraße 37, 
              10405 Berlin, E-Mail: philipp@stellar-trust.com (im Folgenden „Auftragnehmer" genannt) an ihre Kunden 
              (im Folgenden „Auftraggeber" genannt)
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Allgemeines</h2>
            <p>
              1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) für die Erbringung von Dienstleistungen gelten für Verträge, 
              die zwischen dem Auftraggeber und dem Auftragnehmer unter Einbeziehung dieser AGB geschlossen werden.
            </p>
            
            <p>
              1.2 Der Auftragnehmer ist berechtigt, die geforderten Leistungen im eigenen Namen und auf eigene Rechnung an 
              Unterauftragnehmer zu vergeben, die ihrerseits ebenfalls Unterauftragnehmer einsetzen können. Der Auftragnehmer 
              bleibt der einzige Vertragspartner des Auftraggebers. Der Einsatz von Unterauftragnehmern erfolgt nicht, wenn für 
              den Auftragnehmer erkennbar ist, dass ihr Einsatz den berechtigten Interessen des Auftraggebers zuwiderläuft.
            </p>
            
            <p>
              1.3 Soweit zusätzliche Vertragsdokumente oder sonstige Geschäftsbedingungen in Text- oder Schriftform 
              Vertragsbestandteil geworden sind, gehen die Bestimmungen dieser zusätzlichen Vertragsdokumente im Konfliktfall 
              diesen AGB vor.
            </p>
            
            <p>
              1.4 Von diesen Bedingungen abweichende AGB, die vom Auftraggeber verwendet werden, erkennt der Auftragnehmer – 
              vorbehaltlich einer ausdrücklichen Zustimmung – nicht an.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Vertragsgegenstand und Leistungsumfang</h2>
            <p>
              2.1 Der Auftragnehmer erbringt die folgenden Leistungen für den Auftraggeber als selbstständiger Unternehmer:
            </p>
            
            <p className="pl-5">
              Überprüfung von Ferienwohnungsagenturen, Eigentümern, Ausstellung von Badges. Bereitstellung von 
              Software-as-a-Service (SaaS) Dienstleistungen.
            </p>
            
            <p>
              2.2 Der konkrete Leistungsumfang ist Gegenstand von Einzelvereinbarungen zwischen dem Auftragnehmer und dem 
              Auftraggeber.
            </p>
            
            <p>
              2.3 Der Auftragnehmer wird die vertraglich vereinbarten Leistungen mit größtmöglicher Sorgfalt und nach den 
              neuesten Standards, Regeln und Erkenntnissen erbringen.
            </p>
            
            <p>
              2.4 Der Auftragnehmer ist verpflichtet, die vertraglich geschuldeten Leistungen zu erbringen. Bei der Ausübung 
              seiner Tätigkeit unterliegt er jedoch keinen Weisungen hinsichtlich der Art und Weise der Leistungserbringung, 
              des Ortes der Leistungserbringung oder des Zeitpunkts der Leistungserbringung. Er wird jedoch die Arbeitstage 
              und die Zeitplanung an diesen Tagen so gestalten, dass eine optimale Effizienz seiner Tätigkeit und der 
              Realisierung des Vertragsgegenstandes erreicht wird. Die Leistungserbringung durch den Auftragnehmer findet 
              nur in Abstimmung mit dem Auftraggeber statt.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Mitwirkungspflichten des Auftraggebers</h2>
            <p>
              Der Auftraggeber ist verpflichtet, alle Informationen, Daten und sonstigen Inhalte, die für die Erfüllung der 
              Leistung erforderlich sind, vollständig und richtig zur Verfügung zu stellen. Der Auftragnehmer ist in keiner 
              Weise für Verzögerungen und Verspätungen bei der Leistungserbringung verantwortlich, die auf eine verspätete 
              und notwendige Mitwirkung oder Zuarbeit des Kunden zurückzuführen sind; die Bestimmungen unter der Überschrift 
              „Haftung/Schadensersatz" bleiben hiervon unberührt.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Entschädigung</h2>
            <p>
              4.1 Die Entschädigung wird individuell vereinbart.
            </p>
            
            <p>
              4.2 Die Entschädigung ist nach der Erbringung der Leistungen fällig. Wird die Vergütung nach Zeiträumen 
              bemessen, ist sie nach Ablauf eines jeden Zeitraums fällig (§ 614 BGB). Bei der Abrechnung nach Aufwand ist 
              der Auftragnehmer vorbehaltlich abweichender Vereinbarungen berechtigt, die erbrachten Leistungen monatlich 
              abzurechnen.
            </p>
            
            <p>
              4.3 Der Auftragnehmer stellt dem Auftraggeber nach Erbringung der Leistungen eine Rechnung per Post oder 
              E-Mail (z.B. als PDF) aus. Die Vergütung ist innerhalb von 14 Tagen nach Erhalt der Rechnung zur Zahlung fällig.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Haftung / Schadensersatz</h2>
            <p>
              5.1 Der Auftragnehmer haftet unbeschränkt aus jeglichem Rechtsgrund bei Vorsatz oder grober Fahrlässigkeit, 
              bei vorsätzlicher oder fahrlässiger Verletzung des Lebens, des Körpers oder der Gesundheit, aufgrund einer 
              Garantiezusage, soweit dies anderweitig geregelt ist, oder aufgrund zwingender Haftung. Verletzt der 
              Auftragnehmer fahrlässig eine wesentliche Vertragspflicht, ist die Haftung auf den vertragstypischen, 
              vorhersehbaren Schaden begrenzt, soweit nicht nach dem vorstehenden Satz unbeschränkt gehaftet wird. 
              Wesentliche Vertragspflichten sind Pflichten, die der Vertrag dem Auftragnehmer nach seinem Inhalt zur 
              Erreichung des Vertragszwecks auferlegt, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags 
              überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf. Im Übrigen 
              ist die Haftung des Auftragnehmers ausgeschlossen. Die vorgenannten Haftungsbestimmungen gelten auch für 
              die Haftung des Auftragnehmers für seine Erfüllungsgehilfen und gesetzlichen Vertreter.
            </p>
            
            <p>
              5.2 Der Auftraggeber stellt den Auftragnehmer von allen Ansprüchen Dritter frei, die gegen den Auftragnehmer 
              aufgrund von Verstößen des Auftraggebers gegen diese Vertragsbedingungen oder geltendes Recht geltend gemacht werden.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Vertragsdauer und Kündigung</h2>
            <p>
              6.1 Die Vertragsdauer und die Fristen für die ordentliche Kündigung werden von den Parteien individuell vereinbart.
            </p>
            
            <p>
              6.2 Das Recht beider Parteien, den Vertrag aus wichtigem Grund fristlos zu kündigen, bleibt hiervon unberührt.
            </p>
            
            <p>
              6.3 Der Auftragnehmer hat bei Beendigung des Vertrages alle ihm überlassenen Unterlagen und sonstigen Inhalte 
              nach Wahl des Auftraggebers unverzüglich zurückzugeben oder zu vernichten. Die Geltendmachung eines 
              Zurückbehaltungsrechts daran ist ausgeschlossen. Elektronische Daten müssen vollständig gelöscht werden. 
              Ausgenommen hiervon sind Unterlagen und Daten, für die eine längere gesetzliche Aufbewahrungspflicht besteht, 
              jedoch nur bis zum Ende der jeweiligen Aufbewahrungsfrist. Der Auftragnehmer muss dem Unternehmen die Löschung 
              auf Anfrage schriftlich bestätigen.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Vertraulichkeit und Datenschutz</h2>
            <p>
              7.1 Der Auftragnehmer wird alle Vorgänge, die ihm im Zusammenhang mit dem Auftrag bekannt werden, streng 
              vertraulich behandeln. Der/die Auftragnehmer/in verpflichtet sich, alle Mitarbeiter/innen und/oder Dritte, 
              die Zugang zu den auftragsbezogenen Informationen haben, zur Vertraulichkeit zu verpflichten. Die 
              Vertraulichkeitsverpflichtung gilt auf unbestimmte Zeit über die Laufzeit dieses Vertrages hinaus.
            </p>
            
            <p>
              7.2 Der Auftragnehmer verpflichtet sich, bei der Ausführung des Auftrags alle datenschutzrechtlichen 
              Vorschriften – insbesondere die Bestimmungen der Datenschutz-Grundverordnung und des Bundesdatenschutzgesetzes – 
              einzuhalten.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Schlussbestimmungen</h2>
            <p>
              8.1 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            
            <p>
              8.2 Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so berührt dies die Gültigkeit der übrigen AGB nicht.
            </p>
            
            <p>
              8.3 Der Auftraggeber wird den Auftragnehmer bei der Erbringung seiner vertraglich vereinbarten Leistungen durch 
              geeignete Kooperationsmaßnahmen unterstützen, soweit dies erforderlich ist. Insbesondere wird der Auftraggeber 
              dem Auftragnehmer die für die Vertragserfüllung erforderlichen Informationen und Daten zur Verfügung stellen.
            </p>
            
            <p>
              8.4 Ist der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches 
              Sondervermögen oder hat er keinen allgemeinen Gerichtsstand in Deutschland, vereinbaren die Parteien den Sitz des 
              Auftragnehmers als Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis; ausschließliche 
              Gerichtsstände bleiben hiervon unberührt.
            </p>
            
            <p>
              8.5 Der Auftragnehmer ist berechtigt, diese AGB aus triftigen Gründen (z. B. Änderungen der Rechtsprechung, der 
              Rechtslage, der Marktbedingungen oder der Geschäfts- bzw. Unternehmensstrategie) und unter Einhaltung einer 
              angemessenen Frist zu ändern. Bestandskunden werden hiervon mindestens zwei Wochen vor Inkrafttreten der 
              Änderungen per E-Mail benachrichtigt. Wenn der Bestandskunde nicht innerhalb der in der Änderungsmitteilung 
              gesetzten Frist widerspricht, gilt seine Zustimmung zu den Änderungen als erteilt. Widerspricht er, werden die 
              Änderungen nicht wirksam; in diesem Fall ist der Auftragnehmer berechtigt, den Vertrag zum Zeitpunkt des 
              Inkrafttretens der Änderungen außerordentlich zu kündigen. In der Mitteilung über die beabsichtigte Änderung 
              dieser AGB wird auf die Frist und die Folgen des Widerspruchs oder dessen Ausbleiben hingewiesen.
            </p>
            
            <p>
              8.6 Buyer protection is defined as the following. As a booker you are responsible to verify to only book through 
              ways that are officially recognized by the webpage that Stellar has certified. Do not communicate with either an 
              e-mail address or telephone number that has not been verified by us. we do our best to verify all the data we are 
              provided in order to provide maximum protection.
            </p>
            
            <p className="font-medium my-4">Die Daten, die wir überprüfen, sind die folgenden</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ausweis der Schlüsselperson einschließlich biometrischer Daten</li>
              <li>Legitimität der Immobilien-Website durch Bereitstellung eines Meta-Tags</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Firmenadresse und Geostandort-Querprüfung auf den wichtigsten Plattformen</li>
              <li>OTA-Bewertungen</li>
            </ul>
            
            <p>
              8.7 Please refer to the policies of our insurance providers. You can find them linked here. Stellar Tourism 
              Innovations GmbH is only selling insurance policies by Hiscox and is not an insurance company itself. Claim 
              handling is up to the insurance providers and works accordingly to their policies. Their policies are at any time 
              valid. Statements on Stellar website are only supportive and always inferior to the policies.
            </p>
            
            <p>
              8.8 Right of Termination – We reserve the right to cancel any contract without further notice in case we detect 
              fraudulent behavior.
              Both the Customer and Stellar have the right to terminate contracts at any time, with immediate effect and without 
              stating any reason. In the event that Stellar exercises its right of termination, all fees paid for services not 
              yet rendered at the time of termination will be reimbursed. Any obligations or rights accrued before the effective 
              date of termination remain unaffected.
            </p>
            
            <p className="font-medium mt-6 mb-2">Rückstellungen für abgeschlossene Versicherungspolicen</p>
            
            <p className="font-medium mt-4 mb-1">Bereits begonnene Buchungen (am oder nach dem Anreisedatum)</p>
            <p>
              Für jede abgeschlossene Versicherungspolice sind alle Buchungen, die bereits begonnen haben (d. h. am oder nach 
              dem geplanten Anreisedatum), weiterhin vollständig versichert. Diese Buchungen können nicht mehr storniert werden, 
              und alle damit verbundenen Versicherungsleistungen bleiben zu den ursprünglichen Bedingungen in Kraft.
            </p>
            
            <p className="font-medium mt-4 mb-1">Noch nicht begonnene Buchungen (vor dem Anreisedatum)</p>
            <p>
              Für alle noch nicht begonnenen Buchungen behält sich Stellar das Recht vor, bei Beendigung des Vertrags alle 
              zukünftigen Prämien oder Beiträge im Zusammenhang mit diesen Buchungen zu erstatten. Sobald diese Erstattungen 
              erfolgen, endet der entsprechende Versicherungsschutz und der Vertrag gilt für diese zukünftigen Buchungen als 
              beendet oder gekündigt.
            </p>
            
            <p>
              Diese Bestimmungen sollen die Rechte und Pflichten beider Parteien im Falle einer Vertragskündigung klären und 
              sicherstellen, dass alle bereits begonnenen Buchungen vollständig geschützt bleiben, während sie gleichzeitig 
              Flexibilität für die noch nicht begonnenen Buchungen bieten.
            </p>
            
            <p>
              8.9 Any company or private person using our badge in a fraudulent way will be held responsible for any damage. 
              That is we will claim compensation from the fraudulent party to compensate the scammed party and / or Stellar 
              Tourism Innovations.
            </p>
            
            <p>
              9.0 The Stellar Tourism Innovations guarantee contract shall be subject to German law. Place of fulfillment and 
              jurisdiction is Berlin. The online booking page may direct complaints to the „Bundesanstalt für 
              Finanzdienstleistungsaufsicht" (German Federal Financial Supervisory Authority)
            </p>
            
            <p>
              9.1 We take all reasonable steps to ensure that the information on this website is correct. However, we do not 
              guarantee the correctness or completeness of material on this website. We may make changes to the material on this 
              website at any time and without notice. The material on this website may be out of date, or on rare occasions 
              incorrect and we make no commitment to ensure that such material is correct or up to date.
            </p>
            
            <p>
              Das Material auf dieser Website wird ohne Bedingungen oder Garantien jeglicher Art bereitgestellt. Soweit 
              gesetzlich zulässig, ermöglichen wir den Zugang und die Nutzung dieser Website auf der Grundlage, dass wir alle 
              Zusicherungen, Garantien und Bedingungen ausschließen, die ohne diese Bedingungen in Bezug auf diese Website 
              gelten würden.
            </p>
            
            <p>
              9.2 Neither we nor any other party (whether or not involved in producing, maintaining or delivering this website), 
              shall be liable or responsible for any kind of loss or damage that may result to you or a third party as a result 
              of your or their use of our website. This exclusion shall include servicing or repair costs and, without limitation, 
              any other direct, indirect or consequential loss, and whether in tort or contract or otherwise in connection with 
              this website.
            </p>
            
            <p>
              9.3 Keine der Bestimmungen in diesen Bedingungen schließt die Haftung aus oder schränkt sie ein für:
            </p>
            <ul className="list-[lower-alpha] pl-8 space-y-1">
              <li>Tod oder Personenschäden, die durch Fahrlässigkeit verursacht wurden (wie im Unfair Contract Terms Act 1977 definiert);</li>
              <li>Betrug;</li>
              <li>Falschangaben in Bezug auf einen wesentlichen Punkt; oder</li>
              <li>jegliche Haftung, die nach dem Recht des Vereinigten Königreichs nicht ausgeschlossen oder eingeschränkt werden kann.</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Informationen zur Online-Streitbeilegung / Verbraucherschlichtung</h2>
            <p>
              Die EU-Kommission stellt unter folgendem Link eine Plattform zur Online-Streitbeilegung im Internet bereit: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-stellar-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            
            <p>
              Diese Plattform dient als Anlaufstelle für die außergerichtliche Beilegung von Streitigkeiten aus Online-Kauf- 
              oder Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist. Der Anbieter ist weder bereit noch 
              verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nach dem VSBG teilzunehmen.
            </p>
            
            <p>
              1.3 Bitte finden Sie unsere DSGVO-Datenverarbeitungsvereinbarung im Login-Bereich. Sie stimmen zu, diese 
              automatisch zu akzeptieren und zu unterzeichnen, bevor Sie die Software aktiv nutzen. Sie können sie auch hier 
              auf Deutsch finden. Wenn Sie eine Übersetzung in Ihre jeweilige Sprache benötigen, lassen Sie es uns bitte wissen. 
              Die deutsche Version ist stets maßgeblich, während die Übersetzungen im Zweifelsfall nur zur Veranschaulichung dienen.
            </p>
            
            <p className="mt-8">
              Unsere E-Mail-Adresse findest du in der Kopfzeile dieser AGB.
            </p>
            
            <div className="mt-12 flex items-center justify-start gap-4">
              <Link to="/datenschutz">
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Datenschutzerklärung
                </Button>
              </Link>
              <Link to="/impressum">
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Impressum
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

export default Agb;
