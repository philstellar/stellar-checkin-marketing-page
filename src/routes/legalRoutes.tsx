
import React, { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

// Lazy load legal pages
const Impressum = lazy(() => import('@/pages/Impressum'));
const Datenschutz = lazy(() => import('@/pages/Datenschutz'));
const Agb = lazy(() => import('@/pages/Agb'));

// Lazy load translated legal pages
const ImpressumEN = lazy(() => import('@/pages/legal/ImpressumEN'));
const ImpressumES = lazy(() => import('@/pages/legal/ImpressumES'));
const ImpressumIT = lazy(() => import('@/pages/legal/ImpressumIT'));
const DatenschutzEN = lazy(() => import('@/pages/legal/DatenschutzEN'));
const DatenschutzES = lazy(() => import('@/pages/legal/DatenschutzES'));
const DatenschutzIT = lazy(() => import('@/pages/legal/DatenschutzIT'));
const AgbEN = lazy(() => import('@/pages/legal/AgbEN'));
const AgbES = lazy(() => import('@/pages/legal/AgbES'));
const AgbIT = lazy(() => import('@/pages/legal/AgbIT'));

export const LegalRoutes = () => (
  <>
    {/* Legal redirects */}
    <Route path="/:lang/legal/imprint" element={<Navigate to="/:lang/impressum" replace />} />
    <Route path="/:lang/legal/privacy" element={<Navigate to="/:lang/datenschutz" replace />} />
    <Route path="/:lang/legal/terms" element={<Navigate to="/:lang/agb" replace />} />
    
    {/* German legal routes */}
    <Route path="/de/impressum" element={<Impressum />} />
    <Route path="/de/datenschutz" element={<Datenschutz />} />
    <Route path="/de/agb" element={<Agb />} />
    
    {/* English legal routes */}
    <Route path="/en/impressum" element={<ImpressumEN />} />
    <Route path="/en/datenschutz" element={<DatenschutzEN />} />
    <Route path="/en/agb" element={<AgbEN />} />
    
    {/* Italian legal routes */}
    <Route path="/it/impressum" element={<ImpressumIT />} />
    <Route path="/it/datenschutz" element={<DatenschutzIT />} />
    <Route path="/it/agb" element={<AgbIT />} />
    
    {/* Spanish legal routes */}
    <Route path="/es/impressum" element={<ImpressumES />} />
    <Route path="/es/datenschutz" element={<DatenschutzES />} />
    <Route path="/es/agb" element={<AgbES />} />
  </>
);
