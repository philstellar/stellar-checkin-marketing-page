
import React from 'react';
import Index from '@/pages/Index';
import Impressum from '@/pages/Impressum';
import Datenschutz from '@/pages/Datenschutz';
import Agb from '@/pages/Agb';
import Brevo from '@/pages/Brevo';
import VersicherungPage from '@/pages/VersicherungPage';
import TrustBadgePage from '@/components/admin/TrustBadgePage';
import UeberUns from '@/pages/UeberUns';
import Erfolgsbeispiele from '@/pages/Erfolgsbeispiele';

// Define the interface for route configuration
interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  redirectTo?: string;
}

export const germanRoutes: RouteConfig[] = [
  {
    path: '/de',
    element: <Index />
  },
  {
    path: '/de/impressum',
    element: <Impressum />
  },
  {
    path: '/de/datenschutz',
    element: <Datenschutz />
  },
  {
    path: '/de/agb',
    element: <Agb />
  },
  {
    path: '/de/brevo',
    element: <Brevo />
  },
  {
    path: '/de/ueber-uns',
    element: <UeberUns />
  },
  {
    path: '/de/erfolgsbeispiele',
    element: <Erfolgsbeispiele />
  },
  {
    path: '/de/versicherung',
    element: <VersicherungPage />
  },
  {
    path: '/de/trust-badge',
    element: <TrustBadgePage />
  }
];
