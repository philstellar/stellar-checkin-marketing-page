
import React from 'react';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import TrustBadgePage from '@/pages/TrustBadgePage';

// Define the interface for route configuration
interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  redirectTo?: string;
}

export const commonRoutes: RouteConfig[] = [
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/trust-badge',
    element: <TrustBadgePage />
  },
  {
    path: '/:lang/home',
    redirectTo: '/:lang'
  },
  {
    path: '/:lang/legal/imprint',
    redirectTo: '/:lang/impressum'
  },
  {
    path: '/:lang/legal/privacy',
    redirectTo: '/:lang/datenschutz'
  },
  {
    path: '/:lang/legal/terms',
    redirectTo: '/:lang/agb'
  },
  {
    path: '*',
    element: <NotFound />
  }
];
