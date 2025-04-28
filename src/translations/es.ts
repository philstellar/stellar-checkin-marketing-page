
import { navigationES } from './modules/navigation';
import { heroES } from './modules/hero';
import { featuresES } from './modules/features';
import { partnersES } from './modules/partners';
import { kurtaxeES } from './modules/kurtaxe';
import { insuranceES } from './modules/insurance';
import { trustBadgeES } from './modules/trustBadge';
import { cookiesES } from './modules/cookies/es';
import { zusatzservicesES } from './modules/zusatzservices/es';
import { brevoPopupES } from './modules/brevoPopup/es';
import { identityES } from './modules/identity/es';
import { integrationES } from './modules/integration/es';
import { settingsES } from './modules/settings/es';
import { pricingES } from './modules/pricing/es';
import { contactES } from './modules/contact/es';
import { footerES } from './modules/footer/es';

export const es = {
  navigation: navigationES,
  hero: heroES,
  features: featuresES,
  partners: partnersES,
  kurtaxe: kurtaxeES,
  insurance: insuranceES,
  trustBadge: trustBadgeES,
  cookies: cookiesES,
  zusatzservices: zusatzservicesES,
  brevoPopup: brevoPopupES,
  identity: identityES,
  integration: integrationES,
  settings: settingsES,
  pricing: pricingES,
  contact: contactES,
  footer: footerES,
  
  // Versicherung section - will be migrated to its own module later
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
  }
};
