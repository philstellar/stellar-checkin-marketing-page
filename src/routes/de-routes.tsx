
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
const Impressum = lazy(() => import('@/pages/Impressum'));
const Datenschutz = lazy(() => import('@/pages/Datenschutz'));
const Agb = lazy(() => import('@/pages/Agb'));
const Brevo = lazy(() => import('@/pages/Brevo'));
const TrustBadgePage = lazy(() => import('@/components/admin/TrustBadgePage'));
const UeberUns = lazy(() => import('@/pages/UeberUns'));
const Erfolgsbeispiele = lazy(() => import('@/pages/Erfolgsbeispiele'));

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
