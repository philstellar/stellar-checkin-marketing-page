import { navigationEN } from './modules/navigation';
import { heroEN } from './modules/hero';
import { featuresEN } from './modules/features';
import { partnersEN } from './modules/partners';
import { kurtaxeEN } from './modules/kurtaxe';
import { insuranceEN } from './modules/insurance';
import { trustBadgeEN } from './modules/trustBadge';

export const en = {
  // Header
  navigation: navigationEN,
  
  // Hero
  hero: heroEN,
  
  // Features
  features: {
    title: "Check-in",
    subtitle: "Digitize your check-in process – fast, secure, and paperless.",
    moreBtn: "Learn more"
  },

  // Partners Section
  partners: partnersEN,

  // Kurtaxe Section
  kurtaxe: kurtaxeEN,

  // Cookies Section
  cookies: {
    title: "Cookie Consent",
    description: "This website uses various cookies to enhance your browsing experience, provide personalized services, and analyze website traffic. You can choose to accept or reject non-essential cookies.",
    whatAre: {
      title: "What are cookies?",
      description: "Cookies are small text files stored on your device that help websites remember your preferences and improve your browsing experience."
    },
    howWeUse: {
      title: "How we use cookies",
      description: "We use cookies to remember your preferences, analyze website traffic, and personalize content. Some cookies are essential for the website to function properly."
    },
    yourChoices: {
      title: "Your choices",
      description: "You can choose which types of cookies you allow. Essential cookies cannot be disabled as they are necessary for the website to function."
    },
    categories: {
      title: "Cookie Categories",
      description: "Below you can find information about the different types of cookies we use and their purposes."
    },
    essential: {
      title: "Essential Cookies",
      description: "Necessary cookies help make a website usable by enabling basic functions like page navigation, user authentication and access to secure areas of the website. These cookies cannot be disabled.",
      duration: "Session / 30 days"
    },
    analytics: {
      title: "Analytics and Performance Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They track website performance and provide insights through Google Analytics and Google Tag Manager.",
      duration: "1-2 years"
    },
    advertising: {
      title: "Advertising and Marketing Cookies",
      description: "These cookies are used to deliver personalized advertisements based on your interests and to track the effectiveness of advertising campaigns through platforms like Google Ads and conversion tracking.",
      duration: "Up to 2 years"
    },
    functional: {
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization, such as live chats, videos, and social media sharing. They may be set by us or by third-party providers whose services we have added to our pages.",
      duration: "Up to 1 year"
    },
    provider: "Provider",
    duration: "Duration",
    showDetails: "Show Details",
    hideDetails: "Details ausblenden",
    acceptAll: "Accept All",
    rejectNonEssential: "Reject Non-Essential"
  },

  // Zusatzservices Section
  zusatzservices: {
    title: "Sell Additional Services",
    subtitle: "Increase your revenue by offering additional services to your guests during the check-in process.",
    additionalServices: {
      title: "Additional Services",
      description: "Offer your guests more – and increase your revenue with add-on services like early check-in, linen packages, or special experiences."
    },
    payment: {
      title: "Seamless Payment Processing",
      description: "Integrated payment processing with all common payment methods directly in the check-in process."
    },
    revenue: {
      title: "Additional Revenue Streams",
      description: "Generate additional income through targeted sales of upgrades and add-on services."
    },
    cta: "Register Now"
  },

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
  identity: {
    title: "Identity Verification",
    subtitle: "Quick and secure identity verification of your guests – completed in just 2 minutes, for more trust and protection.",
    biometric: {
      title: "Biometric Verification",
      description: "Fast facial recognition with liveness check – protects against fraud and ensures that ID and person are genuine."
    },
    document: {
      title: "ID Document Verification",
      description: "Automatic validation of ID documents through modern AI technology in seconds."
    },
    privacy: {
      title: "Privacy-Compliant Solution",
      description: "All data is processed securely and protected according to GDPR standards and only used for verification."
    },
    cta: "Register Now"
  },

  // Integrationen Section
  integration: {
    title: "Integration with Your PMS",
    subtitle: "Whether integrating with Smoobu, Guesty, Hostaway, Lodgify, Beds24, or other leading systems - we connect your PMS for an optimized workflow.",
    pms: {
      title: "PMS Integration",
      description: "Seamless connection to your Property Management System for efficient data synchronization."
    },
    api: {
      title: "API Interfaces",
      description: "Open API for custom integrations and individual adaptations."
    },
    payment: {
      title: "Payment Systems",
      description: "Direct connection to leading payment providers like Stripe and PayPal."
    },
    webhooks: {
      title: "Webhooks",
      description: "Event-based notifications for real-time updates in your systems."
    },
    cta: "Discover Integrations"
  },

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
  pricing: {
    title: "Our Prices",
    subtitle: "Find the right package for your requirements.",
    basic: {
      title: "Basic",
      price: "5",
      unit: "€/month",
      per: "per property",
      cta: "Register Now",
      additionalServices: "Additional Services *",
      additionalServicesDesc: "In the Basic package, a fee of 5% is charged on the total value of additional services booked by the guest.",
      identityVerification: "Identity Verification *",
      identityVerificationDesc: "Biometric verification is optional and is charged at €1.50 per check-in.",
      depositManagement: "Deposit Management *",
      depositManagementDesc: "In the Basic package, a fee of 1% is charged on the total value of the deposit.",
      insurance: "Guest Insurance *",
      insuranceDesc: "Insurance is optional for the guest or can be chosen as a replacement for the deposit.",
      digitalGuestRegistration: "Guest Registration to Authorities *",
      digitalGuestRegistrationDesc: "Guest registrations are automatically and legally submitted to the authorities.",
      features: [
        "Online check-in",
        "Customizable guest registration",
        "PMS Integrations",
        "Additional Services *",
        "Identity Verification *",
        "Deposit Management *",
        "Guest Insurance *",
        "Acceptance of Accommodation Agreement"
      ]
    },
    advanced: {
      title: "Advanced",
      price: "9",
      unit: "€/month",
      per: "per property",
      popular: "Most popular",
      cta: "Register Now",
      plusBasic: "Everything in Basic plus selected add-ons:",
      features: [
        "Guest Registration to Authorities *",
        "Tourist Tax – automatically calculated and settled",
        "Additional services without fees",
        "Customized check-in"
      ]
    },
    enterprise: {
      title: "Over 100 Properties",
      contact: "Please ask our",
      contactTeam: "sales team",
      cta: "Contact Sales",
      features: [
        "API Connection",
        "More than 100 properties"
      ]
    },
    disclaimer: "All prices are subject to applicable VAT"
  },

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
  insurance: {
    title: "Cleverly Automate Insurance and Deposits",
    introduction: "Offer your guests optional insurance and benefit from additional income.",
    section1: {
      title: "Faster Check-in Process",
      content: "No more deposit handling, less work for you and your guests."
    },
    section2: {
      title: "Additional Income Source",
      content: "Earn commission with every insurance policy – automatically and without extra effort."
    },
    section3: {
      title: "Comprehensive Protection",
      content: "Better protection than traditional deposits, thanks to higher coverage amounts, \"new for old\" coverage, and protection against rental loss."
    },
    benefits: {
      title: "The Benefits of Insurance at a Glance",
      list: [
        "Speed up the check-in process by eliminating time-consuming deposit handling. Your guests can unwind immediately upon arrival without worrying about cash or card authorizations.",
        "Generate extra income through attractive commissions with every insurance booking. A passive income stream that grows automatically with each reservation.",
        "Benefit from significantly higher coverage compared to traditional deposits. The insurance offers broader financial security for your property and furnishings.",
        "Experience seamless integration into your existing check-in flow. Insurance is embedded into the reservation process automatically with no added admin burden.",
        "Comprehensive protection for you and your guests—from property damage and theft to unexpected events. A peace-of-mind solution for both parties.",
        "Benefit from smooth, automated damage processing with no need to confront guests directly. Fast handling and fair compensation in case of claims."
      ]
    },
    shortTerm: {
      title: "Short-term Rental Insurance",
      description: "Flexible insurance solutions for your holiday rental—tailored to your needs."
    },
    details: {
      furniture: {
        title: "Furniture & Furnishings",
        description: "Comprehensive protection for your furniture and furnishings."
      },
      newForOld: {
        title: "New for Old",
        description: "In case of damage, you receive the new replacement value for affected items."
      },
      rentalLoss: {
        title: "Rental Loss",
        description: "Protection against lost rental income due to property damage."
      },
      petDamage: {
        title: "Pet Damage",
        description: "Coverage against damage caused by guests’ pets."
      },
      cleaning: {
        title: "Cleaning",
        description: "Covers the costs of extraordinary cleaning jobs."
      },
      art: {
        title: "Art & Decor",
        description: "Insurance cover for art objects and decorative elements."
      }
    },
    faq: {
      airbnb: {
        question: "Do I need your guest insurance even if I list on Airbnb or Booking.com?",
        answer:
          "Yes—even though platforms like Airbnb and Booking.com provide some coverage, there are significant limitations. Airbnb's AirCover is not traditional insurance and always involves the guest, asking them to pay for damages. Only if the guest refuses does AirCover come into play. This can lead to conflict with guests, negative reviews, and is limited to Airbnb bookings. Booking.com's deposit program merely facilitates disputes with guests and is capped at €300 in the EU, potentially affecting your ranking or conversion. Our insurance operates independently and without those guest-facing issues."
      },
      repeat: {
        question: "Can guest damage insurance boost repeat bookings?",
        answer:
          "Repeat guests appreciate consistency and reliability. By providing insurance, managers and hosts demonstrate extra care, and guests know they won’t face surprise charges or hidden fees. Claims are generally settled without guest involvement, ensuring a positive experience and encouraging loyalty and better reviews."
      },
      deposit: {
        question: "Should I still ask for a deposit?",
        answer:
          "Deposits can offer financial security and encourage careful treatment of your property. However, guests often avoid properties requiring deposits, due to the hassle and risk of deductions. With our guest damage insurance, you can skip deposits completely or present it as a convenience option. Claims are normally settled directly, avoiding guest disputes and helping drive more repeat bookings and 5-star reviews."
      },
      coverage: {
        question: "What does your insurance cover?",
        answer:
          "Our short-term rental insurance is custom-built for property managers and owners—a robust solution for these scenarios: Accidental and malicious property damage (with replacement value), guest theft, loss of income due to covered damages, extra cleaning costs for damage beyond normal wear-and-tear, pet damage, and more."
      },
      cost: {
        question: "What does guest damage insurance cost?",
        answer:
          "Our guest damage insurance starts at €2.80 per night—pricing depends on the chosen coverage. Details are in your Stellar account. You can choose to pay or pass costs to the guest as a deposit replacement. To ensure every stay is protected, you can cover the fee yourself and bundle it into your rates."
      }
    }
  },
  trustBadge: trustBadgeEN,

  brevoPopup: {
    invalidEmailTitle: "Invalid email",
    invalidEmailDesc: "Please enter a valid email address.",
    errorTitle: "Error",
    errorDesc: "There was a problem with your registration. We received your request and will contact you manually.",
    successTitle: "Success!",
    successDesc: "Thank you for your registration! We will contact you shortly.",
    thankYouTitle: "Thank you for registering!",
    thankYouDesc: "We’ll get back to you personally as soon as possible.",
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
