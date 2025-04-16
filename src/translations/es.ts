
import { navigationES } from './modules/navigation';
import { heroES } from './modules/hero';
import { featuresES } from './modules/features';
import { partnersES } from './modules/partners';
import { kurtaxeES } from './modules/kurtaxe';

export const es = {
  // Header
  navigation: navigationES,
  
  // Hero
  hero: heroES,
  
  // Features
  features: featuresES,

  // Partners Section
  partners: partnersES,

  // Kurtaxe Section
  kurtaxe: kurtaxeES,

  // Zusatzservices Section
  zusatzservices: {
    title: "Venda Servicios Adicionales",
    subtitle: "Aumente sus ingresos ofreciendo servicios adicionales a sus huéspedes durante el proceso de check-in.",
    additionalServices: {
      title: "Servicios Adicionales",
      description: "Ofrezca más a sus huéspedes – y aumente sus ingresos con servicios como el check-in anticipado, paquetes de ropa de cama o experiencias especiales."
    },
    payment: {
      title: "Procesamiento de Pagos Integrado",
      description: "Procesamiento de pagos integrado con todos los métodos de pago comunes directamente en el proceso de check-in."
    },
    revenue: {
      title: "Fuentes de Ingresos Adicionales",
      description: "Genere ingresos adicionales mediante la venta dirigida de mejoras y servicios adicionales."
    },
    cta: "Registrarse Ahora"
  },

  // Versicherung Section
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

  // Identitaetspruefung Section
  identity: {
    title: "Verificación de Identidad",
    subtitle: "Verificación de identidad rápida y segura de sus huéspedes – completada en solo 2 minutos, para mayor confianza y protección.",
    biometric: {
      title: "Verificación Biométrica",
      description: "Reconocimiento facial rápido con comprobación de vivacidad – protege contra fraudes y garantiza que el documento de identidad y la persona sean genuinos."
    },
    document: {
      title: "Verificación de Documentos de Identidad",
      description: "Validación automática de documentos de identidad mediante moderna tecnología de IA en segundos."
    },
    privacy: {
      title: "Solución Compatible con la Privacidad",
      description: "Todos los datos se procesan de forma segura y se protegen según los estándares de RGPD y solo se utilizan para verificación."
    },
    cta: "Registrarse Ahora"
  },

  // Integrationen Section
  integration: {
    title: "Integración con su PMS",
    subtitle: "Ya sea integración con Smoobu, Guesty, Hostaway, Lodgify, Beds24 u otros sistemas líderes - conectamos su PMS para un flujo de trabajo optimizado.",
    pms: {
      title: "Integración PMS",
      description: "Conexión perfecta con su Sistema de Gestión de Propiedades para una sincronización eficiente de datos."
    },
    api: {
      title: "Interfaces API",
      description: "API abierta para integraciones personalizadas y adaptaciones individuales."
    },
    payment: {
      title: "Sistemas de Pago",
      description: "Conexión directa con los principales proveedores de pago como Stripe y PayPal."
    },
    webhooks: {
      title: "Webhooks",
      description: "Notificaciones basadas en eventos para actualizaciones en tiempo real en sus sistemas."
    },
    cta: "Descubrir Integraciones"
  },

  // Einstellungen Section
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
  pricing: {
    title: "Nuestros Precios",
    subtitle: "Encuentre el paquete adecuado para sus requisitos.",
    basic: {
      title: "Básico",
      price: "5",
      unit: "€/mes",
      per: "por propiedad",
      cta: "Registrarse Ahora",
      additionalServices: "Servicios Adicionales *",
      additionalServicesDesc: "En el paquete Básico, se cobra una tarifa del 5% sobre el valor total de los servicios adicionales reservados por el huésped.",
      identityVerification: "Verificación de Identidad *",
      identityVerificationDesc: "La verificación biométrica es opcional y tiene un costo de €1,50 por check-in.",
      depositManagement: "Gestión de Depósitos *",
      depositManagementDesc: "En el paquete Básico, se cobra una tarifa del 1% sobre el valor total del depósito.",
      insurance: "Seguro para Huéspedes *",
      insuranceDesc: "El seguro es opcional para el huésped o puede elegirse como reemplazo del depósito.",
      digitalGuestRegistration: "Registro de Huéspedes a Autoridades *",
      digitalGuestRegistrationDesc: "Los registros de huéspedes se envían automática y legalmente a las autoridades.",
      features: [
        "Check-in online",
        "Registro de huéspedes personalizable",
        "Integraciones PMS",
        "Servicios Adicionales *",
        "Verificación de Identidad *",
        "Gestión de Depósitos *",
        "Seguro para Huéspedes *",
        "Aceptación del Acuerdo de Alojamiento"
      ]
    },
    advanced: {
      title: "Avanzado",
      price: "9",
      unit: "€/mes",
      per: "por propiedad",
      popular: "Más popular",
      cta: "Registrarse Ahora",
      plusBasic: "Todo en Básico más complementos seleccionados:",
      features: [
        "Registro de Huéspedes a Autoridades *",
        "Impuesto Turístico – calculado y liquidado automáticamente",
        "Servicios adicionales sin tarifas",
        "Check-in personalizado"
      ]
    },
    enterprise: {
      title: "Más de 100 Propiedades",
      contact: "Por favor, consulte a nuestro",
      contactTeam: "equipo de ventas",
      cta: "Contactar Ventas",
      features: [
        "Conexión API",
        "Más de 100 propiedades"
      ]
    },
    disclaimer: "Todos los precios están sujetos al IVA aplicable"
  },

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
  }
};
