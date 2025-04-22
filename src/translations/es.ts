import { navigationES } from './modules/navigation';
import { heroES } from './modules/hero';
import { featuresES } from './modules/features';
import { partnersES } from './modules/partners';
import { kurtaxeES } from './modules/kurtaxe';
import { insuranceES } from './modules/insurance';
import { trustBadgeES } from './modules/trustBadge';

export const es = {
  // Header
  navigation: navigationES,
  
  // Hero
  hero: heroES,
  
  // Features
  features: {
    title: "Check-in",
    subtitle: "Digitalice su proceso de check-in – rápido, seguro y sin papel.",
    moreBtn: "Más información"
  },

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
  insurance: {
    title: "Automatice de Forma Inteligente el Seguro y los Depósitos",
    introduction: "Ofrezca a sus huéspedes un seguro opcional y benefíciese de ingresos adicionales.",
    section1: {
      title: "Proceso de Check-in Más Rápido",
      content: "Sin gestión de depósitos, menos trabajo para usted y sus huéspedes."
    },
    section2: {
      title: "Fuente de Ingresos Adicional",
      content: "Gane comisiones con cada póliza de seguro – automáticamente y sin esfuerzo adicional."
    },
    section3: {
      title: "Protección Integral",
      content: "Mejor protección que los depósitos tradicionales, gracias a montos de cobertura más altos, cobertura \"nuevo por viejo\" y protección contra pérdida de alquiler."
    },
    benefits: {
      title: "Ventajas del Seguro de un Vistazo",
      list: [
        "Agilice el proceso de check-in eliminando la gestión de depósitos. Sus huéspedes pueden relajarse de inmediato sin preocuparse por el efectivo o autorizaciones de tarjeta.",
        "Genere ingresos adicionales a través de atractivas comisiones con cada seguro contratado. Un ingreso pasivo que se acumula automáticamente con cada reserva.",
        "Benefíciese de sumas aseguradas significativamente mayores en comparación con depósitos tradicionales. El seguro ofrece una protección financiera más amplia para su propiedad y mobiliario.",
        "Disfrute de una integración totalmente automatizada en su proceso de check-in. El seguro se incluye en la reserva sin administración adicional.",
        "Proteja de forma integral a usted y a sus huéspedes: desde daños materiales y robos hasta eventos imprevistos. Una protección total que aporta tranquilidad a ambas partes.",
        "Experimente una gestión de daños ágil y automatizada sin confrontaciones con el huésped. Tramitación rápida y compensación justa en caso de siniestro."
      ]
    },
    shortTerm: {
      title: "Seguro para Alquiler Vacacional",
      description: "Soluciones de seguro flexibles para su vivienda vacacional, adaptadas a sus necesidades."
    },
    details: {
      furniture: {
        title: "Mobiliario y Equipamiento",
        description: "Cobertura integral para sus muebles y objetos de equipamiento."
      },
      newForOld: {
        title: "Nuevo por Viejo",
        description: "En caso de daños, recibirá el valor de reemplazo nuevo por los artículos perdidos."
      },
      rentalLoss: {
        title: "Pérdida de Alquiler",
        description: "Protección frente a la pérdida de ingresos por daños en la propiedad."
      },
      petDamage: {
        title: "Daños por Mascotas",
        description: "Cobertura frente a daños ocasionados por mascotas de los huéspedes."
      },
      cleaning: {
        title: "Limpieza",
        description: "Cubre los costes de limpiezas extraordinarias."
      },
      art: {
        title: "Arte y Decoración",
        description: "Cobertura para objetos de arte y elementos decorativos."
      }
    },
    faq: {
      airbnb: {
        question: "¿Necesito su seguro aunque publique en Airbnb o Booking.com?",
        answer:
          "Sí: aunque plataformas como Airbnb y Booking.com ofrecen cierta protección, tienen limitaciones importantes. AirCover (Airbnb) no es un seguro tradicional e implica a los huéspedes, a quienes se les pide cubrir los daños. Solo si el huésped se niega, interviene AirCover. Esto puede llevar a conflictos, reseñas negativas, y la protección solo se aplica a estancias Airbnb. El programa de depósitos de Booking.com solo facilita la disputa con el huésped y está limitado a 300 € en la UE, lo que puede afectar su conversión o ranking. Nuestro seguro es independiente y no conlleva estos problemas."
      },
      repeat: {
        question: "¿Puede el seguro de daños aumentar las reservas repetidas?",
        answer:
          "Los huéspedes recurrentes valoran la confianza y la transparencia. Si ofrece seguro, demuestra profesionalidad y los huéspedes saben que no tendrán cargos sorpresa. Los siniestros suelen tramitarse sin involucrar al huésped, lo que mejora la experiencia y fomenta fidelidad y buenas reseñas."
      },
      deposit: {
        question: "¿Sigo necesitando pedir una fianza?",
        answer:
          "La fianza puede aportar seguridad financiera y fomenta que los huéspedes cuiden mejor el alojamiento. Sin embargo, muchos prefieren no reservar si hay fianza, por el trámite y el riesgo de deducciones. Con nuestro seguro, puede prescindir de la fianza o presentarlo como alternativa. Los siniestros suelen gestionarse directamente, evitando disputas, más reservas y mejores valoraciones."
      },
      coverage: {
        question: "¿Qué cubre el seguro?",
        answer:
          "Nuestro seguro para alquiler vacacional está diseñado para gestores o propietarios: solución sólida para daños accidentales o malintencionados (por valor de reemplazo), robos de huéspedes, pérdida de ingresos por daños, limpieza extra, daños de mascotas, y más."
      },
      cost: {
        question: "¿Cuánto cuesta el seguro de daños al huésped?",
        answer:
          "El seguro de daños comienza en 2,80 € por noche, según la cobertura elegida. Los detalles están en su cuenta de Stellar. Usted puede pagarlo o trasladar el coste al huésped como alternativa. Para cubrir todas las estancias, puede asumirlo e incluirlo en sus tarifas."
      }
    }
  },
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
