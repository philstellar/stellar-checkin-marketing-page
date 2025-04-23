import { navigationDE } from './modules/navigation';
import { heroDE } from './modules/hero';
import { featuresDE } from './modules/features';
import { partnersDE } from './modules/partners';
import { kurtaxeDE } from './modules/kurtaxe';
import { insuranceDE } from './modules/insurance';
import { trustBadgeDE } from './modules/trustBadge';

export const de = {
  // Header
  navigation: navigationDE,
  
  // Hero
  hero: heroDE,
  
  // Features
  features: featuresDE,

  // Partners Section
  partners: partnersDE,

  // Kurtaxe Section
  kurtaxe: kurtaxeDE,

  // Cookies Section
  cookies: {
    title: "Cookie-Zustimmung",
    description: "Diese Website verwendet verschiedene Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Dienste anzubieten und den Website-Verkehr zu analysieren. Sie können wählen, ob Sie nicht-essentielle Cookies akzeptieren oder ablehnen möchten.",
    whatAre: {
      title: "Was sind Cookies?",
      description: "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden und Websites helfen, Ihre Präferenzen zu speichern und Ihr Surferlebnis zu verbessern."
    },
    howWeUse: {
      title: "Wie wir Cookies verwenden",
      description: "Wir verwenden Cookies, um Ihre Präferenzen zu speichern, den Website-Verkehr zu analysieren und Inhalte zu personalisieren. Einige Cookies sind für die ordnungsgemäße Funktion der Website unerlässlich."
    },
    yourChoices: {
      title: "Ihre Auswahlmöglichkeiten",
      description: "Sie können wählen, welche Arten von Cookies Sie zulassen. Essentielle Cookies können nicht deaktiviert werden, da sie für die Funktion der Website notwendig sind."
    },
    categories: {
      title: "Cookie-Kategorien",
      description: "Nachfolgend finden Sie Informationen über die verschiedenen Arten von Cookies, die wir verwenden, und deren Zwecke."
    },
    essential: {
      title: "Essentielle Cookies",
      description: "Notwendige Cookies helfen dabei, eine Website nutzbar zu machen, indem sie Grundfunktionen wie Seitennavigation, Benutzerauthentifizierung und Zugang zu geschützten Bereichen der Website ermöglichen. Diese Cookies können nicht deaktiviert werden.",
      duration: "Sitzung / 30 Tage"
    },
    analytics: {
      title: "Analyse- und Leistungs-Cookies",
      description: "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und berichten. Sie verfolgen die Website-Leistung und liefern Erkenntnisse durch Google Analytics und Google Tag Manager.",
      duration: "1-2 Jahre"
    },
    advertising: {
      title: "Werbe- und Marketing-Cookies",
      description: "Diese Cookies werden verwendet, um personalisierte Werbung basierend auf Ihren Interessen zu liefern und die Wirksamkeit von Werbekampagnen über Plattformen wie Google Ads und Conversion-Tracking zu verfolgen.",
      duration: "Bis zu 2 Jahre"
    },
    functional: {
      title: "Funktionale Cookies",
      description: "Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung, wie Live-Chats, Videos und das Teilen in sozialen Medien. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir zu unseren Seiten hinzugefügt haben.",
      duration: "Bis zu 1 Jahr"
    },
    provider: "Anbieter",
    duration: "Dauer",
    showDetails: "Details anzeigen",
    hideDetails: "Details ausblenden",
    acceptAll: "Alle akzeptieren",
    rejectNonEssential: "Nicht-essentielle ablehnen"
  },

  // Zusatzservices Section
  zusatzservices: {
    title: "Zusatzleistungen verkaufen",
    subtitle: "Steigern Sie Ihren Umsatz, indem Sie Ihren Gästen während des Check-in-Prozesses gezielt zusätzliche Services anbieten.",
    additionalServices: {
      title: "Zusatzleistungen",
      description: "Bieten Sie Ihren Gästen mehr – und steigern Sie Ihren Umsatz mit Zusatzleistungen wie Early Check-in, Wäschepakete oder besondere Erlebnisse."
    },
    payment: {
      title: "Nahtlose Zahlungsabwicklung",
      description: "Integrierte Zahlungsabwicklung mit allen gängigen Zahlungsmethoden direkt im Check-in-Prozess."
    },
    revenue: {
      title: "Zusätzliche Einnahmequellen",
      description: "Generieren Sie zusätzliches Einkommen durch den gezielten Verkauf von Upgrades und Zusatzleistungen."
    },
    cta: "Jetzt Registrieren"
  },

  // Versicherung Section
  versicherung: {
    title: "Versicherung und Kaution clever automatisieren",
    subtitle: "Automatisieren Sie die Kautionsabwicklung und Rückerstattung – oder bieten Sie Ihren Gästen eine bequeme Alternative und sichern Sie sich zusätzliche Provisionseinnahmen.",
    process: {
      title: "Schnellerer Check-in-Prozess",
      description: "Keine Kautionsabwicklung mehr – weniger Aufwand für Sie und mehr Komfort für Ihre Gäste.
."
    },
    income: {
      title: "Zusätzliche Einnahmequelle",
      description: "Verdienen Sie Provision bei jeder Versicherung – automatisch und ohne zusätzlichen Aufwand."
    },
    protection: {
      title: "Umfassender Schutz",
      description: "Besserer Schutz als herkömmliche Kautionen, dank höherer Deckungssummen, \"Neu für Alt\"-Deckung und Schutz vor Mietausfall."
    },
    cta: "Jetzt Registrieren"
  },

  // Identitaetspruefung Section
  identity: {
    title: "Identitätsprüfung",
    subtitle: "Schnelle und sichere Identitätsprüfung Ihrer Gäste – in nur 2 Minuten abgeschlossen, für mehr Vertrauen und Schutz.",
    biometric: {
      title: "Biometrische Verifizierung",
      description: "Verlässliche Gesichtserkennung mit Live-Check – schützt vor Identitätsbetrug und stellt sicher, dass Ausweis und Person übereinstimmen."
    },
    document: {
      title: "Ausweisdokumentenprüfung",
      description: "Automatische Validierung von Ausweisdokumenten durch moderne KI-Technologie in Sekunden."
    },
    privacy: {
      title: "Datenschutzkonforme Lösung",
      description: "Alle Daten werden sicher verarbeitet, gemäß DSGVO-Richtlinien geschützt und ausschließlich zur Verifizierung verwendet."
    },
    cta: "Jetzt Registrieren"
  },

  // Integrationen Section
  integration: {
    title: "Integration mit Ihrem PMS",
    subtitle: "Nahtlose Integration mit Smoobu, Guesty, Hostaway, Lodgify, Beds24 und vielen weiteren – für einen durchgängigen, effizienten Workflow in Ihrem PMS.",
    pms: {
      title: "PMS-Integration",
      description: "Direkte Anbindung an Ihr Property Management System oder Channel Manager für eine automatische Datensynchronisation."
    },
    payment: {
      title: "Zahlungssysteme",
      description: "Direkte Anbindung an führende Zahlungsanbieter wie Stripe und PayPal."
    },
    webhooks: {
      title: "Webhooks",
      description: "Ereignisbasierte Benachrichtigungen für Echtzeit-Updates in Ihren Systemen."
    },
    cta: "Integrationen entdecken"
  },

  // Einstellungen Section
  settings: {
    title: "Anpassungsmöglichkeiten",
    subtitle: "Personalisieren Sie das Check-in-Erlebnis – mit Ihrem eigenen Branding und einer mehrsprachigen Oberfläche",
    design: {
      title: "Design & Branding",
      description: "Passen Sie das Design einfach an – mit Ihrem Logo, Ihren Markenfarben, Ihrer URL."
    },
    language: {
      title: "Sprachoptionen",
      description: "Mehrsprachiger Check-in – so finden sich internationale Gäste sofort zurecht."
    },
    custom: {
      title: "Individueller Check-in",
      description: "Passen Sie den Check-in-Prozess nach Ihren Wünschen an und bestimmen Sie, welche Daten erhoben werden sollen."
    }
  },

  // Pricing Section
  pricing: {
    title: "Unsere Preise",
    subtitle: "Finden Sie das passende Paket für Ihre Anforderungen.",
    basic: {
      title: "Basic",
      price: "5",
      unit: "€/Monat",
      per: "pro Objekt",
      cta: "Jetzt Registrieren",
      additionalServices: "Zusatzleistungen *",
      additionalServicesDesc: "Im Basic Paket wird eine Gebühr von 5% auf den Gesamtwert der vom Gast gebuchten Zusatzleistungen erhoben.",
      identityVerification: "Identitätsprüfung *",
      identityVerificationDesc: "Die biometrische Verifikation ist optional und wird mit 1,50€ pro Check-in berechnet.",
      depositManagement: "Kautionsverwaltung *",
      depositManagementDesc: "Im Basic Paket wird eine Gebühr von 1% auf den Gesamtwert der Kaution erhoben.",
      insurance: "Gästeversicherung *",
      insuranceDesc: "Die Versicherung ist für den Gast optional oder kann als Ersatz für die Kaution gewählt werden.",
      digitalGuestRegistration: "Gästeregistrierung bei Behörden *",
      digitalGuestRegistrationDesc: "Gästeregistrierungen werden automatisch und rechtssicher an die Behörden übermittelt.",
      features: [
        "Online Check-in",
        "Anpassbare Gästeregistrierung",
        "PMS-Integrationen",
        "Zusatzleistungen *",
        "Identitätsprüfung *",
        "Kautionsverwaltung *",
        "Gästeversicherung *",
        "Annahme der Beherbergungsvereinbarung"
      ]
    },
    advanced: {
      title: "Advanced",
      price: "9",
      unit: "€/Monat",
      per: "pro Objekt",
      popular: "Am beliebtesten",
      cta: "Jetzt Registrieren",
      plusBasic: "Alles im Basic plus ausgewählte Add-ons:",
      features: [
        "Gästeregistrierung bei Behörden *",
        "Kurtaxe – automatisch berechnet und abgerechnet",
        "Zusatzleistungen ohne Gebühren",
        "Individueller Check-in"
      ]
    },
    enterprise: {
      title: "Über 100 Objekte",
      contact: "Bitte fragen Sie unser",
      contactTeam: "Vertriebsteam",
      cta: "Vertrieb kontaktieren",
      features: [
        "API-Anbindung",
        "Mehr als 100 Objekte"
      ]
    },
    disclaimer: "Alle Preise verstehen sich zzgl. der gesetzlichen MwSt."
  },

  // Contact Section
  contact: {
    title: "Kontaktieren Sie uns",
    subtitle: "Haben Sie Fragen zu Stellar Checkin? Unser Team hilft Ihnen gerne weiter.",
    email: "E-Mail",
    phone: "Telefon",
    address: "Adresse",
    formName: "Name",
    formEmail: "E-Mail",
    formCompany: "Unternehmen",
    formMessage: "Nachricht",
    formPrivacy: "Ich habe die <link>Datenschutzerklärung</link> gelesen und akzeptiere sie",
    formSend: "Nachricht senden",
    formSending: "Wird gesendet...",
    success: "Nachricht gesendet!",
    successDesc: "Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.",
    error: "Fehler beim Senden",
    errorDesc: "Es gab ein Problem beim Versenden Ihrer Nachricht. Bitte versuchen Sie es später erneut."
  },

  // Footer
  footer: {
    tagline: "Digitale Gästeregistrierung für Ferienunterkünfte – schnell, sicher, papierlos.",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    terms: "AGB",
    copyright: "Alle Rechte vorbehalten."
  },
  insurance: insuranceDE,
  trustBadge: trustBadgeDE,

  brevoPopup: {
    invalidEmailTitle: "Ungültige E-Mail",
    invalidEmailDesc: "Bitte gib eine gültige E-Mail-Adresse ein.",
    errorTitle: "Fehler",
    errorDesc: "Es gab ein Problem bei der Anmeldung. Wir haben deine Anfrage erhalten und werden uns manuell bei dir melden.",
    successTitle: "Erfolgreich!",
    successDesc: "Vielen Dank für deine Anmeldung! Wir melden uns in Kürze bei dir.",
    thankYouTitle: "Vielen Dank für deine Anmeldung!",
    thankYouDesc: "Wir melden uns so schnell wie möglich persönlich bei dir",
    closeBtn: "Schließen",
    a11yDescription: "Brevo Formular zur Erstellung eines kostenlosen Kontos",
    dialogTitle: "Kostenloses Konto erstellen",
    title: "Kostenlos registrieren",
    emailPrompt: "Bitte trage deine geschäftliche E-Mail ein",
    emailPlaceholder: "deine@email.de",
    infoText: "In Kürze erhältst du von uns weitere Infos und den Registrierungslink",
    sending: "Wird gesendet...",
    cta: "Jetzt registrieren"
  }
};
