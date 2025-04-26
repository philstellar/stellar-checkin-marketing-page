
import { navigationES } from './modules/navigation';
import { heroES } from './modules/hero';
import { featuresES } from './modules/features';
import { partnersES } from './modules/partners';
import { kurtaxeES } from './modules/kurtaxe';
import { insuranceES } from './modules/insurance';
import { trustBadgeES } from './modules/trustBadge';
import { cookiesES } from './modules/cookies/es';
import { identityES } from './modules/identity/es';
import { integrationES } from './modules/integration/es';
import { pricingES } from './modules/pricing/es';
import { zusatzservicesES } from './modules/zusatzservices/es';
import { stellarES } from './modules/stellar';
import { productsES } from './modules/products';

export const es = {
  // Header
  navigation: navigationES,
  
  // Hero
  hero: heroES,
  
  // Features
  features: featuresES,

  // Products
  products: productsES,

  // Stellar section
  stellar: stellarES,

  // Partners Section
  partners: partnersES,

  // Kurtaxe Section
  kurtaxe: kurtaxeES,

  // Cookies
  cookies: cookiesES,

  // Zusatzservices
  zusatzservices: zusatzservicesES,

  // Versicherung
  versicherung: {
    title: "Automatice de Forma Inteligente el Seguro y los Depósitos",
    subtitle: "Automatice la recolección y reembolso de depósitos, u ofrezca a sus huéspedes una alternativa conveniente – y benefíciese de ingresos adicionales por comisiones.",
    process: {
      title: "Proceso de Check-in Más Rápido",
      description: "Sin gestión de depósitos, menos trabajo para usted y sus huéspedes."
    },
    income: {
      title: "Fuente de Ingresos Adicional",
      description: "Gane comisiones con cada póliza de seguro – automáticamente y sin esfuerzo adicional."
    },
    protection: {
      title: "Protección Integral",
      description: "Mejor protección que los depósitos tradicionales, gracias a montos de cobertura más altos, cobertura \"nuevo por viejo\" y protección contra pérdida de alquiler."
    },
    cta: "Registrarse Ahora"
  },

  // Identity Section
  identity: identityES,

  // Integration Section
  integration: integrationES,

  // Settings Section
  settings: {
    title: "Personalización",
    subtitle: "Personalice la experiencia de check-in – con su propia marca y una interfaz multilingüe",
    design: {
      title: "Diseño y Marca",
      description: "Personalice fácilmente el diseño – con su logotipo, sus colores de marca, su URL."
    },
    language: {
      title: "Opciones de Idioma",
      description: "Check-in multilingüe – para que los huéspedes internacionales puedan orientarse inmediatamente."
    },
    custom: {
      title: "Check-in Personalizado",
      description: "Personalice el proceso de check-in según sus deseos y determine qué datos deben recopilarse."
    }
  },

  // Pricing Section
  pricing: pricingES,

  // Contact Section
  contact: {
    title: "Contáctenos",
    subtitle: "¿Tiene preguntas sobre Stellar Checkin? Nuestro equipo está feliz de ayudarle.",
    email: "E-Mail",
    phone: "Teléfono",
    address: "Dirección",
    formName: "Nombre",
    formEmail: "E-Mail",
    formCompany: "Empresa",
    formMessage: "Mensaje",
    formPrivacy: "He leído y acepto la política de privacidad",
    formSend: "Enviar Mensaje",
    formSending: "Enviando...",
    success: "¡Mensaje enviado!",
    successDesc: "Gracias por su consulta. Nos pondremos en contacto con usted en breve.",
    error: "Error al enviar",
    errorDesc: "Hubo un problema al enviar su mensaje. Por favor, inténtelo de nuevo más tarde."
  },

  // Footer
  footer: {
    tagline: "Registro digital de huéspedes para alojamientos vacacionales – rápido, seguro, sin papel.",
    legal: "Legal",
    imprint: "Aviso Legal",
    privacy: "Política de Privacidad",
    terms: "Términos y Condiciones",
    copyright: "Todos los derechos reservados."
  },

  insurance: insuranceES,
  trustBadge: trustBadgeES,

  brevoPopup: {
    invalidEmailTitle: "Correo inválido",
    invalidEmailDesc: "Por favor, introduce una dirección de correo electrónico válida.",
    errorTitle: "Error",
    errorDesc: "Hubo un problema con tu registro. Hemos recibido tu solicitud y nos pondremos en contacto contigo manualmente.",
    successTitle: "¡Éxito!",
    successDesc: "¡Gracias por registrarte! Nos pondremos en contacto contigo en breve.",
    thankYouTitle: "¡Gracias por registrarte!",
    thankYouDesc: "Nos pondremos en contacto contigo lo antes posible.",
    closeBtn: "Cerrar",
    a11yDescription: "Formulario de Brevo para crear una cuenta gratuita",
    dialogTitle: "Crear cuenta gratuita",
    title: "Regístrate gratis",
    emailPrompt: "Por favor, introduce tu correo electrónico de empresa",
    emailPlaceholder: "tu@email.com",
    infoText: "Pronto recibirás más información y el enlace de registro de nuestra parte.",
    sending: "Enviando...",
    cta: "Regístrate ahora"
  }
};
