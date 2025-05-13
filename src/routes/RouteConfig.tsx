
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Index from '@/pages/Index';
import Imprint from '@/pages/legal/ImpressumEN';
import Privacy from '@/pages/legal/DatenschutzEN';
import Terms from '@/pages/legal/AgbEN';
import Brevo from '@/pages/Brevo';
import VersicherungPage from '@/pages/VersicherungPage';
import TrustBadgePage from '@/components/admin/TrustBadgePage';
import AboutUs from '@/pages/ueber-uns/AboutUsEN';
import SuccessStories from '@/pages/erfolgsgeschichten/SuccessStoriesEN';
import NotFound from '@/pages/NotFound';

const RouteConfig = () => {
  return (
    <Routes>
      {/* Default route redirects to the homepage */}
      <Route path="/" element={<Index />} />
      
      {/* Main routes */}
      <Route path="/impressum" element={<Imprint />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/brevo" element={<Brevo />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/insurance" element={<VersicherungPage />} />
      <Route path="/trust-badge" element={<TrustBadgePage />} />

      {/* Handle old language path redirects */}
      <Route path="/en/*" element={<Navigate to="/" replace />} />
      <Route path="/de/*" element={<Navigate to="/" replace />} />
      <Route path="/it/*" element={<Navigate to="/" replace />} />
      <Route path="/es/*" element={<Navigate to="/" replace />} />

      {/* 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteConfig;
