
import React from 'react';
import Index from '@/pages/Index';
import ImpressumES from '@/pages/legal/ImpressumES';
import DatenschutzES from '@/pages/legal/DatenschutzES';
import AgbES from '@/pages/legal/AgbES';
import Brevo from '@/pages/Brevo';
import VersicherungPage from '@/pages/VersicherungPage';
import TrustBadgePage from '@/components/admin/TrustBadgePage';
import AboutUsES from '@/pages/ueber-uns/AboutUsES';
import SuccessStoriesES from '@/pages/erfolgsgeschichten/SuccessStoriesES';

// Define the interface for route configuration
interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  redirectTo?: string;
}

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
