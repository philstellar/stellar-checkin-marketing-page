
import React, { lazy } from 'react';
import { Route, Navigate } from 'react-router-dom';

// Lazy load product pages
const VersicherungPage = lazy(() => import('@/components/admin/VersicherungPage'));
const TrustBadgePage = lazy(() => import('@/components/admin/TrustBadgePage'));

export const ProductRoutes = () => (
  <>
    {/* Insurance routes */}
    <Route path="/de/versicherung" element={<VersicherungPage />} />
    <Route path="/en/insurance" element={<VersicherungPage />} />
    <Route path="/it/assicurazione" element={<VersicherungPage />} />
    <Route path="/es/seguro" element={<VersicherungPage />} />
    
    {/* Insurance redirects */}
    <Route path="/en/versicherung" element={<Navigate to="/en/insurance" replace />} />
    <Route path="/it/versicherung" element={<Navigate to="/it/assicurazione" replace />} />
    <Route path="/es/versicherung" element={<Navigate to="/es/seguro" replace />} />
    
    {/* Trust Badge routes */}
    <Route path="/de/trust-badge" element={<TrustBadgePage />} />
    <Route path="/en/trust-badge" element={<TrustBadgePage />} />
    <Route path="/it/trust-badge" element={<TrustBadgePage />} />
    <Route path="/es/trust-badge" element={<TrustBadgePage />} />
  </>
);
