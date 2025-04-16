
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const AgbIT = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-16 container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-stellar-700">Termini e Condizioni Generali</h1>
          
          <div className="space-y-8">
            <p className="font-semibold mb-6">
              Per la fornitura di servizi da parte di Stellar Tourism Innovations GmbH, Immanuelkirchstraße 37, 
              10405 Berlino, Email: philipp@stellar-trust.com (di seguito denominato "Appaltatore") ai suoi clienti 
              (di seguito denominati "Cliente")
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. Generale</h2>
            <p>
              1.1 Questi Termini e Condizioni Generali (TCG) per la fornitura di servizi si applicano ai contratti che 
              vengono conclusi tra il Cliente e l'Appaltatore con l'inclusione di questi TCG.
            </p>
            
            <p>
              1.2 L'Appaltatore ha il diritto di assegnare i servizi richiesti a subappaltatori a proprio nome e per proprio 
              conto, i quali a loro volta possono impiegare subappaltatori. L'Appaltatore rimane l'unico partner contrattuale 
              del Cliente. I subappaltatori non vengono utilizzati se l'Appaltatore riconosce che il loro utilizzo è contrario 
              agli interessi legittimi del Cliente.
            </p>
            
            <p>
              1.3 Se documenti contrattuali aggiuntivi o altri termini e condizioni in forma di testo o scritta sono diventati 
              parte del contratto, le disposizioni di questi documenti contrattuali aggiuntivi prevalgono su questi TCG in caso di conflitto.
            </p>
            
            <p>
              1.4 L'Appaltatore non riconosce alcun TCG che si discosti da queste condizioni e che sia utilizzato dal Cliente – 
              soggetto a espresso consenso.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">2. Oggetto del Contratto e Ambito dei Servizi</h2>
            <p>
              2.1 L'Appaltatore fornisce i seguenti servizi per il Cliente come imprenditore indipendente:
            </p>
            
            <p className="pl-5">
              Verifica di agenzie di appartamenti vacanza, proprietari, emissione di badge. Fornitura di 
              servizi Software-as-a-Service (SaaS).
            </p>
            
            <p>
              2.2 L'ambito specifico dei servizi è oggetto di accordi individuali tra l'Appaltatore e il Cliente.
            </p>
            
            <p>
              2.3 L'Appaltatore fornirà i servizi contrattualmente concordati con la massima cura possibile e secondo 
              gli standard, le regole e le conoscenze più recenti.
            </p>
            
            <p>
              2.4 L'Appaltatore è obbligato a fornire i servizi contrattualmente dovuti. Tuttavia, nell'esercizio delle 
              sue attività, non è soggetto ad alcuna istruzione riguardo alla modalità di fornitura del servizio, al luogo 
              di fornitura del servizio o al momento di fornitura del servizio. Tuttavia, organizzerà i giorni lavorativi 
              e la programmazione in questi giorni in modo tale da raggiungere un'efficienza ottimale delle sue attività 
              e la realizzazione dell'oggetto del contratto. La fornitura di servizi da parte dell'Appaltatore avviene 
              solo in coordinamento con il Cliente.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">3. Obblighi di Cooperazione del Cliente</h2>
            <p>
              Il Cliente è obbligato a fornire tutte le informazioni, i dati e altri contenuti che sono necessari per 
              l'adempimento del servizio in modo completo e corretto. L'Appaltatore non è in alcun modo responsabile per 
              ritardi e tardività nella fornitura del servizio che sono attribuibili a una cooperazione o assistenza 
              ritardata e necessaria da parte del cliente; le disposizioni sotto il titolo "Responsabilità/Risarcimento" 
              rimangono inalterate da questo.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">4. Remunerazione</h2>
            <p>
              4.1 La remunerazione viene concordata individualmente.
            </p>
            
            <p>
              4.2 La remunerazione è dovuta dopo la fornitura dei servizi. Se la remunerazione è misurata per periodi, 
              è dovuta dopo la scadenza di ogni periodo (§ 614 BGB). Quando si fattura in base alla spesa, l'Appaltatore 
              ha diritto, soggetto ad accordi diversi, di fatturare i servizi forniti mensilmente.
            </p>
            
            <p>
              4.3 Dopo aver fornito i servizi, l'Appaltatore emetterà una fattura al Cliente per posta o email (ad es. come PDF). 
              La remunerazione deve essere pagata entro 14 giorni dal ricevimento della fattura.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">5. Responsabilità / Risarcimento</h2>
            <p>
              5.1 L'Appaltatore è responsabile senza limitazioni per qualsiasi motivo legale in caso di dolo o negligenza grave, 
              in caso di lesione dolosa o negligente alla vita, al corpo o alla salute, sulla base di una promessa di garanzia, 
              a meno che non sia regolato diversamente, o sulla base di responsabilità obbligatoria. Se l'Appaltatore viola 
              negligentemente un obbligo contrattuale materiale, la responsabilità è limitata al danno tipico contrattuale 
              prevedibile, a meno che non vi sia una responsabilità illimitata secondo la frase precedente. Gli obblighi contrattuali 
              materiali sono obblighi che il contratto impone all'Appaltatore secondo il suo contenuto per raggiungere lo scopo 
              del contratto, il cui adempimento rende possibile la corretta esecuzione del contratto in primo luogo e sul cui 
              rispetto il Cliente può regolarmente fare affidamento. Altrimenti, la responsabilità dell'Appaltatore è esclusa. 
              Le suddette disposizioni di responsabilità si applicano anche alla responsabilità dell'Appaltatore per i suoi 
              ausiliari e rappresentanti legali.
            </p>
            
            <p>
              5.2 Il Cliente indennizza l'Appaltatore contro tutte le rivendicazioni di terzi che vengono fatte valere contro 
              l'Appaltatore a causa di violazioni del Cliente contro questi termini contrattuali o la legge applicabile.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">6. Durata del Contratto e Risoluzione</h2>
            <p>
              6.1 La durata del contratto e le scadenze per la risoluzione ordinaria sono concordate individualmente dalle parti.
            </p>
            
            <p>
              6.2 Il diritto di entrambe le parti di risolvere il contratto senza preavviso per giusta causa rimane inalterato da questo.
            </p>
            
            <p>
              6.3 Al termine del contratto, l'Appaltatore deve restituire o distruggere tutti i documenti e altri contenuti forniti 
              a sua scelta del Cliente senza indugio. L'affermazione di un diritto di ritenzione a questo è esclusa. I dati elettronici 
              devono essere completamente cancellati. Sono esclusi da questo i documenti e i dati per i quali esiste un obbligo di 
              conservazione legale più lungo, ma solo fino alla fine del rispettivo periodo di conservazione. L'Appaltatore deve confermare 
              la cancellazione all'azienda per iscritto su richiesta.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">7. Riservatezza e Protezione dei Dati</h2>
            <p>
              7.1 L'Appaltatore tratterà tutti i processi che gli diventano noti in relazione all'ordine con stretta riservatezza. 
              L'Appaltatore si impegna a obbligare tutti i dipendenti e/o terzi che hanno accesso alle informazioni relative 
              all'ordine alla riservatezza. L'obbligo di riservatezza si applica a tempo indeterminato oltre la durata di questo contratto.
            </p>
            
            <p>
              7.2 L'Appaltatore si impegna a rispettare tutte le normative sulla protezione dei dati – in particolare le disposizioni 
              del Regolamento Generale sulla Protezione dei Dati e della Legge Federale sulla Protezione dei Dati – nell'esecuzione dell'ordine.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">8. Disposizioni Finali</h2>
            <p>
              8.1 Si applica la legge della Repubblica Federale di Germania con l'esclusione della Convenzione delle Nazioni Unite 
              sui Contratti per la Vendita Internazionale di Merci.
            </p>
            
            <p>
              8.2 Se una disposizione di questi TCG è o diventa invalida, ciò non pregiudica la validità dei restanti TCG.
            </p>
            
            <p>
              8.3 Il Cliente supporterà l'Appaltatore nella fornitura dei suoi servizi contrattualmente concordati attraverso 
              appropriate misure di cooperazione, nella misura in cui ciò sia necessario. In particolare, il Cliente fornirà 
              all'Appaltatore le informazioni e i dati necessari per l'adempimento del contratto.
            </p>
            
            <p>
              8.4 Se il Cliente è un commerciante, un'entità legale di diritto pubblico o un fondo speciale di diritto pubblico, 
              o se non ha un foro generale in Germania, le parti concordano la sede dell'Appaltatore come foro competente per 
              tutte le controversie derivanti da questo rapporto contrattuale; i fori esclusivi non sono influenzati da questo.
            </p>
            
            <p>
              8.5 L'Appaltatore ha il diritto di modificare questi TCG per motivi validi (ad es. modifiche della giurisprudenza, 
              della situazione legale, delle condizioni di mercato o della strategia aziendale o imprenditoriale) e osservando 
              un periodo di preavviso ragionevole. I clienti esistenti saranno avvisati di questo almeno due settimane prima 
              dell'entrata in vigore delle modifiche via email. Se il cliente esistente non si oppone entro il periodo stabilito 
              nella notifica di modifica, il suo consenso alle modifiche si considera dato. Se si oppone, le modifiche non 
              diventeranno efficaci; in questo caso, l'Appaltatore ha il diritto di risolvere il contratto in via straordinaria 
              al momento dell'entrata in vigore delle modifiche. La notifica della modifica prevista di questi TCG indicherà 
              il periodo e le conseguenze dell'opposizione o della sua assenza.
            </p>
            
            <p>
              8.6 La protezione dell'acquirente è definita come segue: Come prenotatore, sei responsabile di prenotare solo 
              attraverso canali che sono ufficialmente riconosciuti dal sito web certificato Stellar. Non comunicare con un 
              indirizzo email o numero di telefono che non è stato verificato da noi. Facciamo del nostro meglio per verificare 
              tutti i dati che ci vengono forniti per fornire la massima protezione.
            </p>
            
            <p className="font-medium my-4">I dati che verifichiamo sono i seguenti:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>ID della persona chiave compresi i dati biometrici</li>
              <li>Legittimità del sito web della proprietà fornendo un meta tag</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>Indirizzo dell'azienda e controllo incrociato della geolocalizzazione su piattaforme principali</li>
              <li>Valutazioni OTA</li>
            </ul>
            
            <p>
              8.7 Si prega di notare le linee guida dei nostri fornitori di assicurazione. Puoi trovarle collegate qui. 
              Stellar Tourism Innovations GmbH vende solo polizze assicurative di Hiscox e non è essa stessa una compagnia 
              di assicurazione. L'elaborazione dei sinistri è responsabilità dei fornitori di assicurazione e viene effettuata 
              secondo le loro linee guida. Le loro linee guida sono valide in ogni momento. Le informazioni sul sito web Stellar 
              sono solo di supporto e sono sempre subordinate alle linee guida.
            </p>
            
            <p>
              8.8 Diritto di risoluzione – Ci riserviamo il diritto di rescindere qualsiasi contratto senza ulteriore preavviso 
              se rileviamo comportamenti fraudolenti. Sia il cliente che Stellar hanno il diritto di rescindere i contratti in 
              qualsiasi momento con effetto immediato e senza fornire motivazioni. Nel caso in cui Stellar eserciti il suo 
              diritto di risoluzione, tutte le tariffe pagate per servizi non ancora forniti al momento della risoluzione 
              saranno rimborsate. Eventuali obblighi o diritti sorti prima che la risoluzione diventasse efficace rimangono inalterati.
            </p>
            
            <p className="font-medium mt-6 mb-2">Disposizioni per polizze assicurative completate</p>
            
            <p className="font-medium mt-4 mb-1">Prenotazioni già iniziate (alla data di arrivo o successivamente)</p>
            <p>
              Per ogni polizza assicurativa completata, tutte le prenotazioni che sono già iniziate (cioè, alla data di arrivo 
              pianificata o successivamente) rimangono completamente assicurate. Queste prenotazioni non possono più essere 
              annullate, e tutti i benefici assicurativi associati rimangono in vigore alle condizioni originali.
            </p>
            
            <p className="font-medium mt-4 mb-1">Prenotazioni non ancora iniziate (prima della data di arrivo)</p>
            <p>
              Per tutte le prenotazioni non ancora iniziate, Stellar si riserva il diritto di rimborsare tutti i premi o 
              contributi futuri relativi a queste prenotazioni al termine del contratto. Una volta che questi rimborsi sono 
              stati effettuati, la copertura assicurativa corrispondente termina e il contratto si considera risolto o 
              annullato per queste prenotazioni future.
            </p>
            
            <p>
              Queste disposizioni sono destinate a chiarire i diritti e gli obblighi di entrambe le parti in caso di risoluzione 
              del contratto e ad assicurare che tutte le prenotazioni già iniziate rimangano completamente protette, mentre 
              allo stesso tempo forniscono flessibilità per le prenotazioni non ancora iniziate.
            </p>
            
            <p>
              8.9 Qualsiasi azienda o individuo che utilizza il nostro badge in modo fraudolento sarà ritenuto responsabile 
              per eventuali danni. Ciò significa che richiederemo risarcimenti dalla parte fraudolenta per compensare la 
              parte truffata e/o Stellar Tourism Innovations.
            </p>
            
            <p>
              9.0 Il contratto di garanzia Stellar Tourism Innovations è soggetto alla legge tedesca. Luogo di adempimento 
              e giurisdizione è Berlino. Il sito di prenotazione online può indirizzare reclami alla "Bundesanstalt für 
              Finanzdienstleistungsaufsicht" (BaFin).
            </p>
            
            <p>
              9.1 Adottiamo tutte le misure ragionevoli per garantire che le informazioni su questo sito web siano corrette. 
              Tuttavia, non garantiamo l'accuratezza o la completezza del materiale su questo sito web. Possiamo apportare 
              modifiche al materiale su questo sito web in qualsiasi momento e senza preavviso. Il materiale su questo sito 
              web potrebbe essere obsoleto o, in rari casi, contenere errori, e non ci impegniamo a garantire che tale 
              materiale sia corretto o aggiornato.
            </p>
            
            <p>
              Il materiale su questo sito web viene fornito senza alcuna condizione o garanzia di alcun tipo. Nella misura 
              consentita dalla legge, consentiamo l'accesso e l'utilizzo di questo sito web sulla base che escludiamo tutte 
              le dichiarazioni, garanzie e condizioni che si applicherebbero a questo sito web senza queste condizioni.
            </p>
            
            <p>
              9.2 Né noi né qualsiasi altra parte (coinvolta o meno nella creazione, manutenzione o consegna di questo sito web) 
              saremo responsabili per qualsiasi perdita o danno di qualsiasi tipo che possa sorgere per te o per terzi a seguito 
              dell'uso da parte tua o loro del nostro sito web. Questa esclusione include costi di servizio o riparazione e, senza 
              limitazione, qualsiasi altro danno diretto, indiretto o consequenziale, sia che derivi da illecito o contratto o 
              altrimenti in relazione a questo sito web.
            </p>
            
            <p>
              9.3 Nulla in queste condizioni esclude o limita la responsabilità per:
            </p>
            <ul className="list-[lower-alpha] pl-8 space-y-1">
              <li>Morte o lesioni personali causate da negligenza (come definito nell'Unfair Contract Terms Act 1977);</li>
              <li>Frode;</li>
              <li>Dichiarazione falsa su un punto fondamentale; o</li>
              <li>Qualsiasi responsabilità che non può essere esclusa o limitata secondo le leggi del Regno Unito.</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Informazioni sulla Risoluzione delle Controversie Online / Arbitrato del Consumatore</h2>
            <p>
              La Commissione UE fornisce una piattaforma per la risoluzione delle controversie online su Internet al seguente link: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-stellar-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            
            <p>
              Questa piattaforma serve come punto di contatto per la risoluzione extragiudiziale delle controversie derivanti 
              da contratti di acquisto o servizio online che coinvolgono un consumatore. Il fornitore non è né disposto né 
              obbligato a partecipare a una procedura di risoluzione delle controversie davanti a un comitato di arbitrato 
              del consumatore secondo il VSBG.
            </p>
            
            <p>
              Si prega di trovare il nostro accordo di elaborazione dati GDPR nell'area di login. Accetti di accettare 
              automaticamente e firmare questo prima di utilizzare attivamente il software. Puoi anche trovarlo qui in tedesco. 
              Se hai bisogno di una traduzione nella tua rispettiva lingua, faccelo sapere. La versione tedesca è sempre 
              autorevole, mentre le traduzioni sono solo a scopo illustrativo in caso di dubbio.
            </p>
            
            <p className="mt-8">
              Puoi trovare il nostro indirizzo email nell'intestazione di questi TCG.
            </p>
            
            <div className="mt-12 flex items-center justify-start gap-4">
              <Link to="/it/impressum">
                <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                  <FileText className="h-4 w-4" />
                  Informazioni Legali
                </Button>
              </Link>
              <Link to="/it/datenschutz">
                <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                  <FileText className="h-4 w-4" />
                  Informativa sulla Privacy
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

export default AgbIT;
