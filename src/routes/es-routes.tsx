
import { lazy } from 'react';
import Index from '@/pages/Index';
import VersicherungPage from '@/components/admin/VersicherungPage';

// Define the interface for route configuration
interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  redirectTo?: string;
}

// Lazy load pages
const ImpressumES = lazy(() => import('@/pages/legal/ImpressumES'));
const DatenschutzES = lazy(() => import('@/pages/legal/DatenschutzES'));
const AgbES = lazy(() => import('@/pages/legal/AgbES'));
const Brevo = lazy(() => import('@/pages/Brevo'));
const TrustBadgePage = lazy(() => import('@/components/admin/TrustBadgePage'));
const AboutUsES = lazy(() => import('@/pages/ueber-uns/AboutUsES'));
const SuccessStoriesES = lazy(() => import('@/pages/erfolgsgeschichten/SuccessStoriesES'));

export const spanishRoutes: RouteConfig[] = [
  {
    path: '/es',
    element: <Index />
  },
  {
    path: '/es/impressum',
    element: <ImpressumES />
  },
  {
    path: '/es/datenschutz',
    element: <DatenschutzES />
  },
  {
    path: '/es/agb',
    element: <AgbES />
  },
  {
    path: '/es/brevo',
    element: <Brevo />
  },
  {
    path: '/es/sobre-nosotros',
    element: <AboutUsES />
  },
  {
    path: '/es/historias-de-exito',
    element: <SuccessStoriesES />
  },
  {
    path: '/es/seguro',
    element: <VersicherungPage />
  },
  {
    path: '/es/trust-badge',
    element: <TrustBadgePage />
  },
  // Redirect route
  {
    path: '/es/versicherung',
    redirectTo: '/es/seguro'
  }
];
