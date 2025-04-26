
import { navigationEN } from './modules/navigation';
import { heroEN } from './modules/hero';
import { featuresEN } from './modules/features';
import { partnersEN } from './modules/partners';
import { kurtaxeEN } from './modules/kurtaxe';
import { insuranceEN } from './modules/insurance';
import { trustBadgeEN } from './modules/trustBadge';
import { cookiesEN } from './modules/cookies'; // Fixed path
import { identityEN } from './modules/identity'; // Fixed path
import { integrationEN } from './modules/integration'; // Fixed path
import { pricingEN } from './modules/pricing'; // Fixed path
import { zusatzservicesEN } from './modules/zusatzservices'; // Fixed path
import { brevoPopupEN } from './modules/brevoPopup'; // Added missing import
import { settingsEN } from './modules/settings'; // Added missing import
import { stellarEN } from './modules/stellar';
import { productsEN } from './modules/products';

export const en = {
  navigation: navigationEN,
  hero: heroEN,
  features: featuresEN,
  products: productsEN,
  stellar: stellarEN,
  partners: partnersEN,
  kurtaxe: kurtaxeEN,
  insurance: insuranceEN,
  trustBadge: trustBadgeEN,
  cookies: cookiesEN,
  zusatzservices: zusatzservicesEN,
  brevoPopup: brevoPopupEN,
  identity: identityEN,
  integration: integrationEN,
  settings: settingsEN,
  pricing: pricingEN,
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
  }
};
