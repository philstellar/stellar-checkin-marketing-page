
import { navigationDE } from './modules/navigation';
import { heroDE } from './modules/hero';
import { featuresDE } from './modules/features';
import { partnersDE } from './modules/partners';
import { kurtaxeDE } from './modules/kurtaxe';
import { insuranceDE } from './modules/insurance';
import { trustBadgeDE } from './modules/trustBadge';
import { cookiesDE } from './modules/cookies/de';
import { identityDE } from './modules/identity/de';
import { integrationDE } from './modules/integration/de';
import { pricingDE } from './modules/pricing/de';
import { zusatzservicesDE } from './modules/zusatzservices/de';

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

  // Cookies
  cookies: cookiesDE,

  // Zusatzservices Section
  zusatzservices: zusatzservicesDE,

  // Versicherung Section
  versicherung: {
    title: "Versicherung und Kaution clever automatisieren",
    subtitle: "Automatisieren Sie die Kautionsabwicklung und Rückerstattung – oder bieten Sie Ihren Gästen eine bequeme Alternative und sichern Sie sich zusätzliche Provisionseinnahmen.",
    process: {
      title: "Schnellerer Check-in-Prozess",
      description: "Keine Kautionsabwicklung mehr – weniger Aufwand für Sie und mehr Komfort für Ihre Gäste."
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
  identity: identityDE,

  // Integrationen Section
  integration: integrationDE,

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
  pricing: pricingDE,

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
    formPrivacy: "Ich habe die <link>Datenschutzerklärung</link> gelesen und akzeptiert",
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
    invalidEmailDesc: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    errorTitle: "Fehler",
    errorDesc: "Es gab ein Problem bei der Anmeldung. Wir haben Ihre Anfrage erhalten und werden uns per E-Mail bei dir melden.",
    successTitle: "Erfolgreich!",
    successDesc: "Vielen Dank für Ihre Anmeldung! Wir melden uns so schnell wie möglich.",
    thankYouTitle: "Vielen Dank für deine Anmeldung!",
    thankYouDesc: "Wir melden uns so schnell wie möglich persönlich bei Ihnen",
    closeBtn: "Schließen",
    a11yDescription: "Brevo Formular zur Erstellung eines kostenlosen Kontos",
    dialogTitle: "Kostenloses Konto erstellen",
    title: "Kostenlos registrieren",
    emailPrompt: "Bitte tragen Sie Ihre geschäftliche E-Mail ein",
    emailPlaceholder: "deine@email.de",
    infoText: "In Kürze erhalten Sie von uns weitere Infos und den Registrierungslink",
    sending: "Wird gesendet...",
    cta: "Jetzt registrieren"
  }
};
