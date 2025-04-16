
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const DatenschutzIT = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-16 container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-stellar-700 mb-10">Informativa sulla Privacy</h1>
          
          <div className="space-y-8">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">1. Privacy in Breve</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Informazioni Generali</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Le seguenti informazioni forniscono una semplice panoramica di ciò che accade ai tuoi dati personali quando visiti 
                il nostro sito web. I dati personali sono tutti i dati con cui puoi essere personalmente identificato. Per informazioni 
                dettagliate sul tema della protezione dei dati, consultare la nostra informativa sulla privacy elencata sotto questo testo.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Raccolta Dati sul Nostro Sito Web</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>Chi è responsabile della raccolta dati su questo sito web?</strong><br />
                Il trattamento dei dati su questo sito web viene effettuato dal gestore del sito web. Puoi trovare i suoi dati di 
                contatto nell'informativa legale di questo sito web.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>Come raccogliamo i tuoi dati?</strong><br />
                Da un lato, i tuoi dati vengono raccolti quando ce li fornisci. Questi potrebbero essere dati che inserisci in un modulo di contatto.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Altri dati vengono raccolti automaticamente dai nostri sistemi IT quando visiti il sito web. Si tratta principalmente di dati 
                tecnici (ad es. browser internet, sistema operativo o orario di visualizzazione della pagina). Questi dati vengono raccolti 
                automaticamente non appena entri nel nostro sito web.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>Per cosa utilizziamo i tuoi dati?</strong><br />
                Alcuni dei dati vengono raccolti per garantire una fornitura priva di errori del sito web. Altri dati possono essere 
                utilizzati per analizzare il tuo comportamento utente.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                <strong>Quali diritti hai riguardo ai tuoi dati?</strong><br />
                Hai il diritto di ricevere informazioni gratuite sull'origine, il destinatario e lo scopo dei tuoi dati personali 
                memorizzati in qualsiasi momento. Hai anche il diritto di richiedere la correzione, il blocco o la cancellazione di 
                questi dati. A tale scopo, nonché per ulteriori domande sul tema della protezione dei dati, puoi contattarci in qualsiasi 
                momento all'indirizzo fornito nell'informativa legale. Inoltre, hai il diritto di presentare un reclamo presso l'autorità 
                di vigilanza competente.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">2. Informazioni Generali e Informazioni Obbligatorie</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Protezione dei Dati</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                Gli operatori di queste pagine prendono molto sul serio la protezione dei tuoi dati personali. Trattiamo i tuoi dati personali 
                in modo confidenziale e in conformità con le disposizioni di legge sulla protezione dei dati e la presente informativa sulla privacy.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Quando utilizzi questo sito web, vengono raccolti vari dati personali. I dati personali sono dati che possono essere utilizzati 
                per identificarti personalmente. Questa informativa sulla privacy spiega quali dati raccogliamo e per cosa li utilizziamo. 
                Spiega anche come e per quale scopo ciò avviene.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Vorremmo sottolineare che la trasmissione dei dati su Internet (ad es. quando si comunica via e-mail) può presentare lacune 
                di sicurezza. Una protezione completa dei dati contro l'accesso da parte di terzi non è possibile.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Informazioni sulla Parte Responsabile</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                La parte responsabile del trattamento dei dati su questo sito web è:
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Stellar Tourism Innovations GmbH<br />
                Immanuelkirchstraße 37<br />
                10405 Berlino<br />
                Germania<br /><br />
                Telefono: +49 304 1738487<br />
                Email: <a href="mailto:info@stellar-trust.com" className="text-primary hover:underline">info@stellar-trust.com</a>
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                La parte responsabile è la persona fisica o giuridica che da sola o insieme ad altri decide sulle finalità e sui mezzi 
                del trattamento dei dati personali (ad es. nomi, indirizzi email, ecc.).
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Revoca del Consenso al Trattamento dei Dati</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Molte operazioni di trattamento dei dati sono possibili solo con il tuo consenso espresso. Puoi revocare un consenso già 
                dato in qualsiasi momento. A tal fine, è sufficiente una notifica informale via email. La legalità del trattamento dei 
                dati effettuato fino alla revoca rimane inalterata dalla revoca.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">3. Raccolta Dati sul Nostro Sito Web</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Cookie</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                Le pagine internet utilizzano in parte i cosiddetti cookie. I cookie non danneggiano il tuo computer e non contengono 
                virus. I cookie servono a rendere la nostra offerta più user-friendly, efficace e sicura. I cookie sono piccoli file 
                di testo che vengono memorizzati sul tuo computer e salvati dal tuo browser.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                La maggior parte dei cookie che utilizziamo sono i cosiddetti "cookie di sessione". Vengono eliminati automaticamente 
                dopo la tua visita. Altri cookie rimangono memorizzati sul tuo dispositivo fino a quando non li elimini. Questi cookie 
                ci permettono di riconoscere il tuo browser la prossima volta che visiti.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Puoi impostare il tuo browser in modo da essere informato sull'impostazione dei cookie e consentire i cookie solo in 
                singoli casi, escludere l'accettazione dei cookie per determinati casi o in generale, e attivare la cancellazione 
                automatica dei cookie alla chiusura del browser. La funzionalità di questo sito web può essere limitata se i cookie 
                sono disattivati.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Richiesta via Email, Telefono o Fax</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                Se ci contatti via email, telefono o fax, la tua richiesta, inclusi tutti i dati personali risultanti (nome, richiesta) 
                verrà memorizzata e trattata da noi ai fini dell'elaborazione della tua richiesta. Non trasmettiamo questi dati senza il tuo consenso.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Il trattamento di questi dati si basa sull'Art. 6 (1) (b) GDPR se la tua richiesta è correlata all'adempimento di un 
                contratto o è necessaria per l'attuazione di misure precontrattuali. In tutti gli altri casi, il trattamento si basa 
                sul nostro legittimo interesse nell'elaborazione efficace delle richieste a noi indirizzate (Art. 6 (1) (f) GDPR) o sul 
                tuo consenso (Art. 6 (1) (a) GDPR) se questo è stato richiesto.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                I dati che ci invii tramite richieste di contatto rimarranno con noi fino a quando non ci chiederai di cancellarli, 
                revochi il tuo consenso per la memorizzazione, o lo scopo per la memorizzazione dei dati non sia più applicabile 
                (ad es. dopo che la tua richiesta è stata elaborata). Disposizioni di legge vincolanti – in particolare i periodi di 
                conservazione legale – rimangono inalterate.
              </p>
            </section>
          </div>
          
          <div className="mt-12 flex items-center justify-start gap-4">
            <Link to="/it/impressum">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                <FileText className="h-4 w-4" />
                Informazioni Legali
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

export default DatenschutzIT;
