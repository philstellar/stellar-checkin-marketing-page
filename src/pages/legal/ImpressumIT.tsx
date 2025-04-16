
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ImpressumIT = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-16 container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-stellar-700">Informazioni Legali</h1>
          
          <div className="space-y-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Informazioni ai sensi del § 5 TMG</h2>
              <p className="text-gray-700 leading-relaxed">
                Stellar Tourism Innovations GmbH<br />
                Immanuelkirchstraße 37<br />
                10405 Berlino
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Registro delle Imprese</h2>
              <p className="text-gray-700 leading-relaxed">
                Registro delle Imprese: HRB 183707 B<br />
                Tribunale di Registrazione: Amtsgericht Charlottenburg
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Rappresentato da</h2>
              <p className="text-gray-700 leading-relaxed">Philipp Reuter</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Contatto</h2>
              <p className="text-gray-700 leading-relaxed">
                Email: <a href="mailto:hello@stellar-trust.com" className="text-primary hover:underline">hello@stellar-trust.com</a>
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Numero di Identificazione IVA</h2>
              <p className="text-gray-700 leading-relaxed">
                Numero di identificazione IVA ai sensi del § 27 a della Legge sull'IVA:<br />
                DE366220256
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Persona responsabile per il contenuto</h2>
              <p className="text-gray-700 leading-relaxed">Philipp Reuter</p>
            </section>
            
            <Accordion type="single" collapsible className="w-full mb-8">
              <AccordionItem value="versicherungsvermittlung" className="border-none">
                <AccordionTrigger className="text-2xl font-bold text-stellar-600 py-2 hover:no-underline hover:text-primary px-0">
                  Intermediazione Assicurativa
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Iscritto nel registro degli intermediari presso l'IHK di Berlino con il numero D-6JBK-A27XW-21
                      come rappresentante assicurativo ai sensi del § 34 D c. 1 in combinato disposto con § 59 c. 1,2 VVG
                    </p>
                    
                    <p>
                      Assicurazione di responsabilità civile professionale legalmente richiesta con ERGO Versicherung AG SV 75594456-341
                    </p>
                    
                    <p>
                      – § 34d del Regolamento del Commercio Tedesco<br />
                      – §§ 59-67 VVG<br />
                      – VersVermV<br />
                      – VAG
                    </p>
                    
                    <p>
                      I regolamenti professionali possono essere visualizzati e scaricati tramite il sito web "Gesetze im Internet" gestito dal Ministero Federale della Giustizia e da juris GmbH.
                    </p>
                    
                    <p>
                      Gentili interessati, per legge siamo tenuti a fornirvi una serie di informazioni su di noi come intermediari assicurativi. Abbiamo compilato e spiegato queste informazioni in modo che vi siano utili.
                    </p>
                    
                    <p>
                      Prime informazioni come PDF da scaricare – Si prega di notare la cartella collegata
                    </p>
                    
                    <p>
                      Operiamo come rappresentante assicurativo con l'autorizzazione della Camera di Commercio e Industria di Berlino ai sensi del § 34d paragrafo 1 del Regolamento del Commercio Tedesco. Questa autorizzazione è stata rilasciata in Germania.
                    </p>
                    
                    <p>
                      Come rappresentante assicurativo, offriamo prodotti per conto di compagnie assicurative. La remunerazione sotto forma di commissione è pagata dalla compagnia assicurativa. Questa commissione è parte del premio assicurativo. Qualsiasi deviazione da ciò deve essere espressamente concordata tra noi e il cliente. La nostra azienda non riceve remunerazioni sotto forma di altri benefici.
                    </p>
                    
                    <p>
                      I nostri prodotti assicurativi vengono offerti tramite broker assicurativi e intermediari assicurativi multipli. La consulenza e la valutazione delle esigenze per i nostri prodotti vengono effettuate dai nostri partner di distribuzione.
                    </p>
                    
                    <p>
                      Stellar Tourism Innovations GmbH è registrata nel registro degli intermediari assicurativi con il numero D-6JBK-A27XW-21. È possibile verificarlo su internet all'indirizzo:
                    </p>
                    
                    <p>
                      <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vermittlerregister.info</a>
                    </p>
                    
                    <p>
                      o presso il registro degli intermediari assicurativi presso la
                    </p>
                    
                    <p>
                      Associazione Tedesca delle Camere di Commercio e Industria (DIHK) e.V.<br />
                      Breite Str. 29, 10178 Berlino<br />
                      Tel. 030 203080, Fax 030 203081000
                    </p>
                    
                    <p>
                      No. Né siamo coinvolti in una compagnia assicurativa, né una compagnia assicurativa è coinvolta nella nostra azienda.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Reclami</h2>
              <p className="text-gray-700 leading-relaxed">
                In caso di reclami sulle nostre attività, si prega di contattare il nostro ufficio reclami:<br />
                Email: <a href="mailto:complaint@stellar-trust.com" className="text-primary hover:underline">complaint@stellar-trust.com</a>
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Philipp Reuter, Ralf Kramer, Indirizzo come sopra
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Avviso di Responsabilità</h2>
              <p className="text-gray-700 leading-relaxed">
                Nonostante l'attento controllo dei contenuti, non ci assumiamo alcuna responsabilità per i contenuti dei link esterni. Gli operatori delle pagine collegate sono gli unici responsabili dei loro contenuti. Il fatto che tali link possano portare a fornitori commerciali è nella natura del WWW. Pertanto, non ci assumiamo alcuna responsabilità per i contenuti di tali link.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Risoluzione delle Controversie UE</h2>
              <p className="text-gray-700 leading-relaxed">
                La Commissione Europea fornisce una piattaforma per la risoluzione delle controversie online (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                Puoi trovare il nostro indirizzo email nell'imprint del sito web.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Procedura di Risoluzione delle Controversie Davanti a un Comitato di Arbitrato dei Consumatori</h2>
              <p className="text-gray-700 leading-relaxed">
                Non siamo disposti né obbligati a partecipare a procedure di risoluzione delle controversie davanti a un comitato di arbitrato dei consumatori.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Punto di Contatto Centrale Secondo la Legge sui Servizi Digitali – DSA (Regolamento (UE) 2022/265)</h2>
              <p className="text-gray-700 leading-relaxed">
                Puoi contattare il nostro punto di contatto centrale per utenti e autorità secondo l'Art. 11, 12 DSA come segue:<br />
                Email: <a href="mailto:hello@stellar-trust.com" className="text-primary hover:underline">hello@stellar-trust.com</a>
              </p>
            </section>
          </div>
          
          <div className="mt-12 flex items-center justify-start gap-4">
            <Link to="/it/datenschutz">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                <FileText className="h-4 w-4" />
                Informativa sulla Privacy
              </Button>
            </Link>
            <Link to="/it/agb">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                <FileText className="h-4 w-4" />
                Termini e Condizioni
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImpressumIT;
