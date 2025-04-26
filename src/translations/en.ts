
import { navigationEN } from './modules/navigation';
import { heroEN } from './modules/hero';
import { featuresEN } from './modules/features';
import { partnersEN } from './modules/partners';
import { kurtaxeEN } from './modules/kurtaxe';
import { insuranceEN } from './modules/insurance';
import { trustBadgeEN } from './modules/trustBadge';
import { cookiesEN } from './modules/cookies/en';
import { identityEN } from './modules/identity/en';
import { integrationEN } from './modules/integration/en';
import { pricingEN } from './modules/pricing/en';
import { zusatzservicesEN } from './modules/zusatzservices/en';
import { stellarEN } from './modules/stellar';
import { productsEN } from './modules/products';

export const en = {
  // Header
  navigation: navigationEN,
  
  // Hero
  hero: heroEN,
  
  // Features
  features: featuresEN,

  // Products
  products: productsEN,

  // Stellar section
  stellar: stellarEN,

  // Partners Section
  partners: partnersEN,

  // Kurtaxe Section
  kurtaxe: kurtaxeEN,

  // Insurance Section
  insurance: insuranceEN,

  // Trust Badge
  trustBadge: trustBadgeEN,

  // Cookies Section
  cookies: cookiesEN,

  // Zusatzservices Section
  zusatzservices: zusatzservicesEN,

  // Versicherung Section
  versicherung: {
    title: "Cleverly Automate Insurance and Deposits",
    subtitle: "Automate deposit collection and refunds, or offer your guests a convenient alternative – and benefit from additional commission income.",
    process: {
      title: "Faster Check-in Process",
      description: "No more deposit handling, less work for you and your guests."
    },
    income: {
      title: "Additional Income Source",
      description: "Earn commission with every insurance policy – automatically and without extra effort."
    },
    protection: {
      title: "Comprehensive Protection",
      description: "Better protection than traditional deposits, thanks to higher coverage amounts, \"new for old\" coverage, and protection against rental loss."
    },
    cta: "Register Now"
  },

  // Identitaetspruefung Section
  identity: identityEN,

  // Integrationen Section
  integration: integrationEN,

  // Einstellungen Section
  settings: {
    title: "Customization",
    subtitle: "Personalize the check-in experience – with your own branding and a multilingual interface",
    design: {
      title: "Design & Branding",
      description: "Easily customize the design – with your logo, your brand colors, your URL."
    },
    language: {
      title: "Language Options",
      description: "Multilingual check-in – so international guests can find their way immediately."
    },
    custom: {
      title: "Custom Check-in",
      description: "Customize the check-in process according to your wishes and determine which data should be collected."
    }
  },

  // Pricing Section
  pricing: pricingEN,

  // Contact Section
  contact: {
    title: "Contact Us",
    subtitle: "Do you have questions about Stellar Checkin? Our team is happy to help.",
    email: "E-Mail",
    phone: "Phone",
    address: "Address",
    formName: "Name",
    formEmail: "E-Mail",
    formCompany: "Company",
    formMessage: "Message",
    formPrivacy: "I have read and accept the privacy policy",
    formSend: "Send Message",
    formSending: "Sending...",
    success: "Message sent!",
    successDesc: "Thank you for your inquiry. We will get back to you shortly.",
    error: "Error sending",
    errorDesc: "There was a problem sending your message. Please try again later."
  },

  // Footer
  footer: {
    tagline: "Digital guest registration for vacation rentals – fast, secure, paperless.",
    legal: "Legal",
    imprint: "Imprint",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
    copyright: "All rights reserved."
  },

  // Brevo Popup
  brevoPopup: {
    invalidEmailTitle: "Invalid email",
    invalidEmailDesc: "Please enter a valid email address.",
    errorTitle: "Error",
    errorDesc: "There was a problem with your registration. We received your request and will contact you manually.",
    successTitle: "Success!",
    successDesc: "Thank you for your registration! We will contact you shortly.",
    thankYouTitle: "Thank you for registering!",
    thankYouDesc: "We'll get back to you personally as soon as possible.",
    closeBtn: "Close",
    a11yDescription: "Brevo form for creating a free account",
    dialogTitle: "Create free account",
    title: "Register for free",
    emailPrompt: "Please enter your business email",
    emailPlaceholder: "your@email.com",
    infoText: "You will receive more information and the registration link from us soon.",
    sending: "Sending...",
    cta: "Register now"
  }
};
