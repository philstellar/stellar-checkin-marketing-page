import { navigationIT } from './modules/navigation';
import { heroIT } from './modules/hero';
import { featuresIT } from './modules/features';
import { partnersIT } from './modules/partners';
import { kurtaxeIT } from './modules/kurtaxe';

export const it = {
  // Header
  navigation: navigationIT,
  
  // Hero
  hero: heroIT,
  
  // Features
  features: featuresIT,

  // Partners Section
  partners: partnersIT,

  // Kurtaxe Section
  kurtaxe: kurtaxeIT,

  // Cookies Section
  cookies: {
    title: "Consenso sui Cookie",
    description: "Questo sito web utilizza vari cookie per migliorare la tua esperienza di navigazione, fornire servizi personalizzati e analizzare il traffico del sito web. Puoi scegliere di accettare o rifiutare i cookie non essenziali.",
    whatAre: {
      title: "Cosa sono i cookie?",
      description: "I cookie sono piccoli file di testo memorizzati sul tuo dispositivo che aiutano i siti web a ricordare le tue preferenze e migliorare la tua esperienza di navigazione."
    },
    howWeUse: {
      title: "Come utilizziamo i cookie",
      description: "Utilizziamo i cookie per ricordare le tue preferenze, analizzare il traffico del sito web e personalizzare i contenuti. Alcuni cookie sono essenziali per il corretto funzionamento del sito web."
    },
    yourChoices: {
      title: "Le tue scelte",
      description: "Puoi scegliere quali tipi di cookie consentire. I cookie essenziali non possono essere disabilitati in quanto necessari per il funzionamento del sito web."
    },
    categories: {
      title: "Categorie di Cookie",
      description: "Di seguito puoi trovare informazioni sui diversi tipi di cookie che utilizziamo e sui loro scopi."
    },
    essential: {
      title: "Cookie Essenziali",
      description: "I cookie necessari aiutano a rendere un sito web utilizzabile abilitando funzioni di base come la navigazione delle pagine, l'autenticazione dell'utente e l'accesso a aree sicure del sito web. Questi cookie non possono essere disabilitati.",
      duration: "Sessione / 30 giorni"
    },
    analytics: {
      title: "Cookie di Analisi e Prestazioni",
      description: "Questi cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito web raccogliendo e riportando informazioni in modo anonimo. Monitorano le prestazioni del sito web e forniscono approfondimenti attraverso Google Analytics e Google Tag Manager.",
      duration: "1-2 anni"
    },
    advertising: {
      title: "Cookie Pubblicitari e di Marketing",
      description: "Questi cookie vengono utilizzati per fornire pubblicità personalizzata in base ai tuoi interessi e per monitorare l'efficacia delle campagne pubblicitarie attraverso piattaforme come Google Ads e il monitoraggio delle conversioni.",
      duration: "Fino a 2 anni"
    },
    functional: {
      title: "Cookie Funzionali",
      description: "Questi cookie consentono funzionalità e personalizzazioni avanzate, come chat dal vivo, video e condivisione sui social media. Possono essere impostati da noi o da fornitori di terze parti i cui servizi abbiamo aggiunto alle nostre pagine.",
      duration: "Fino a 1 anno"
    },
    provider: "Fornitore",
    duration: "Durata",
    showDetails: "Mostra Dettagli",
    hideDetails: "Nascondi Dettagli",
    acceptAll: "Accetta Tutti",
    rejectNonEssential: "Rifiuta Non Essenziali"
  },

  // Zusatzservices Section
  zusatzservices: {
    title: "Vendi Servizi Aggiuntivi",
    subtitle: "Aumenta i tuoi guadagni offrendo servizi aggiuntivi ai tuoi ospiti durante il processo di check-in.",
    additionalServices: {
      title: "Servizi Aggiuntivi",
      description: "Offri di più ai tuoi ospiti – e aumenta i tuoi guadagni con servizi come il check-in anticipato, pacchetti biancheria o esperienze speciali."
    },
    payment: {
      title: "Elaborazione Pagamenti Integrata",
      description: "Elaborazione dei pagamenti integrata con tutti i metodi di pagamento comuni direttamente nel processo di check-in."
    },
    revenue: {
      title: "Fonti di Reddito Aggiuntive",
      description: "Genera entrate aggiuntive attraverso la vendita mirata di upgrade e servizi supplementari."
    },
    cta: "Registrati Ora"
  },

  // Versicherung Section
  versicherung: {
    title: "Automatizza in Modo Intelligente Assicurazione e Depositi",
    subtitle: "Automatizza la raccolta e il rimborso dei depositi, o offri ai tuoi ospiti un'alternativa comoda – e beneficia di commissioni aggiuntive.",
    process: {
      title: "Processo di Check-in Più Veloce",
      description: "Niente più gestione dei depositi, meno lavoro per te e i tuoi ospiti."
    },
    income: {
      title: "Fonte di Reddito Aggiuntiva",
      description: "Guadagna commissioni con ogni polizza assicurativa – automaticamente e senza sforzo aggiuntivo."
    },
    protection: {
      title: "Protezione Completa",
      description: "Protezione migliore rispetto ai depositi tradizionali, grazie a importi di copertura più elevati, copertura \"nuovo per vecchio\" e protezione contro la perdita di affitto."
    },
    cta: "Registrati Ora"
  },

  // Identitaetspruefung Section
  identity: {
    title: "Verifica dell'Identità",
    subtitle: "Verifica rapida e sicura dell'identità dei tuoi ospiti – completata in soli 2 minuti, per maggiore fiducia e protezione.",
    biometric: {
      title: "Verifica Biometrica",
      description: "Riconoscimento facciale rapido con controllo di vivacità – protegge dalle frodi e garantisce che il documento e la persona siano autentici."
    },
    document: {
      title: "Verifica Documenti d'Identità",
      description: "Convalida automatica dei documenti d'identità tramite moderna tecnologia AI in pochi secondi."
    },
    privacy: {
      title: "Soluzione Conforme alla Privacy",
      description: "Tutti i dati vengono elaborati in modo sicuro e protetti secondo gli standard GDPR e utilizzati solo per la verifica."
    },
    cta: "Registrati Ora"
  },

  // Integrationen Section
  integration: {
    title: "Integrazione con il Tuo PMS",
    subtitle: "Sia che si tratti di integrazione con Smoobu, Guesty, Hostaway, Lodgify, Beds24 o altri sistemi leader - colleghiamo il tuo PMS per un flusso di lavoro ottimizzato.",
    pms: {
      title: "Integrazione PMS",
      description: "Connessione perfetta al tuo Property Management System per una sincronizzazione efficiente dei dati."
    },
    api: {
      title: "Interfacce API",
      description: "API aperta per integrazioni personalizzate e adattamenti individuali."
    },
    payment: {
      title: "Sistemi di Pagamento",
      description: "Connessione diretta ai principali fornitori di pagamento come Stripe e PayPal."
    },
    webhooks: {
      title: "Webhooks",
      description: "Notifiche basate su eventi per aggiornamenti in tempo reale nei tuoi sistemi."
    },
    cta: "Scopri le Integrazioni"
  },

  // Einstellungen Section
  settings: {
    title: "Personalizzazione",
    subtitle: "Personalizza l'esperienza di check-in – con il tuo marchio e un'interfaccia multilingue",
    design: {
      title: "Design & Branding",
      description: "Personalizza facilmente il design – con il tuo logo, i tuoi colori aziendali, il tuo URL."
    },
    language: {
      title: "Opzioni Linguistiche",
      description: "Check-in multilingue – così gli ospiti internazionali possono orientarsi immediatamente."
    },
    custom: {
      title: "Check-in Personalizzato",
      description: "Personalizza il processo di check-in secondo le tue esigenze e determina quali dati devono essere raccolti."
    }
  },

  // Pricing Section
  pricing: {
    title: "I Nostri Prezzi",
    subtitle: "Trova il pacchetto giusto per le tue esigenze.",
    basic: {
      title: "Base",
      price: "5",
      unit: "€/mese",
      per: "per proprietà",
      cta: "Registrati Ora",
      additionalServices: "Servizi Aggiuntivi *",
      additionalServicesDesc: "Nel pacchetto Base, viene addebitata una commissione del 5% sul valore totale dei servizi aggiuntivi prenotati dall'ospite.",
      identityVerification: "Verifica dell'Identità *",
      identityVerificationDesc: "La verifica biometrica è opzionale e costa €1,50 per check-in.",
      depositManagement: "Gestione del Deposito *",
      depositManagementDesc: "Nel pacchetto Base, viene addebitata una commissione dell'1% sul valore totale del deposito.",
      insurance: "Assicurazione Ospiti *",
      insuranceDesc: "L'assicurazione è opzionale per l'ospite o può essere scelta come sostituto del deposito.",
      digitalGuestRegistration: "Registrazione Ospiti alle Autorità *",
      digitalGuestRegistrationDesc: "Le registrazioni degli ospiti vengono inviate automaticamente e legalmente alle autorità.",
      features: [
        "Check-in online",
        "Registrazione ospiti personalizzabile",
        "Integrazioni PMS",
        "Servizi Aggiuntivi *",
        "Verifica dell'Identità *",
        "Gestione del Deposito *",
        "Assicurazione Ospiti *",
        "Accettazione del Contratto di Alloggio"
      ]
    },
    advanced: {
      title: "Avanzato",
      price: "9",
      unit: "€/mese",
      per: "per proprietà",
      popular: "Più popolare",
      cta: "Registrati Ora",
      plusBasic: "Tutto nel pacchetto Base più add-on selezionati:",
      features: [
        "Registrazione Ospiti alle Autorità *",
        "Tassa di Soggiorno – calcolata e regolata automaticamente",
        "Servizi aggiuntivi senza commissioni",
        "Check-in personalizzato"
      ]
    },
    enterprise: {
      title: "Oltre 100 Proprietà",
      contact: "Per favore contatta il nostro",
      contactTeam: "team di vendita",
      cta: "Contatta Vendite",
      features: [
        "Connessione API",
        "Più di 100 proprietà"
      ]
    },
    disclaimer: "Tutti i prezzi sono soggetti all'IVA applicabile"
  },

  // Contact Section
  contact: {
    title: "Contattaci",
    subtitle: "Hai domande su Stellar Checkin? Il nostro team è felice di aiutarti.",
    email: "E-Mail",
    phone: "Telefono",
    address: "Indirizzo",
    formName: "Nome",
    formEmail: "E-Mail",
    formCompany: "Azienda",
    formMessage: "Messaggio",
    formSend: "Invia Messaggio",
    formSending: "Invio in corso...",
    success: "Messaggio inviato!",
    successDesc: "Grazie per la tua richiesta. Ti risponderemo a breve.",
    error: "Errore nell'invio",
    errorDesc: "C'è stato un problema nell'invio del tuo messaggio. Per favore riprova più tardi."
  },

  // Footer
  footer: {
    tagline: "Registrazione digitale degli ospiti per case vacanze – veloce, sicura, senza carta.",
    legal: "Legale",
    imprint: "Impressum",
    privacy: "Informativa sulla Privacy",
    terms: "Termini e Condizioni",
    copyright: "Tutti i diritti riservati."
  }
};
