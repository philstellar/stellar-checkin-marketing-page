import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { BrevoFormProvider } from './context/BrevoFormContext';
import BrevoFormPopupWrapper from './components/BrevoFormPopupWrapper';
import CookieBanner from './components/CookieBanner';
import { LanguageDetectionDialog } from './components/LanguageDetectionDialog';

// Lazy load all pages for better initial load performance
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));
const Agb = lazy(() => import('./pages/Agb'));
const Brevo = lazy(() => import('./pages/Brevo'));
const VersicherungPage = lazy(() => import('./components/admin/VersicherungPage'));
const TrustBadgePage = lazy(() => import('./components/admin/TrustBadgePage'));
const UeberUns = lazy(() => import('./pages/UeberUns'));
const Erfolgsbeispiele = lazy(() => import('./pages/Erfolgsbeispiele'));
const FAQ = lazy(() => import('./pages/FAQ'));

// Lazy load translated legal pages
const ImpressumEN = lazy(() => import('./pages/legal/ImpressumEN'));
const ImpressumES = lazy(() => import('./pages/legal/ImpressumES'));
const ImpressumIT = lazy(() => import('./pages/legal/ImpressumIT'));
const DatenschutzEN = lazy(() => import('./pages/legal/DatenschutzEN'));
const DatenschutzES = lazy(() => import('./pages/legal/DatenschutzES'));
const DatenschutzIT = lazy(() => import('./pages/legal/DatenschutzIT'));
const AgbEN = lazy(() => import('./pages/legal/AgbEN'));
const AgbES = lazy(() => import('./pages/legal/AgbES'));
const AgbIT = lazy(() => import('./pages/legal/AgbIT'));

// Lazy load the new Home page
const Home = lazy(() => import('./pages/Home'));

// Lazy load the new About & Success Stories pages for EN, IT, ES
const AboutUsEN = lazy(() => import('./pages/ueber-uns/AboutUsEN'));
const AboutUsIT = lazy(() => import('./pages/ueber-uns/AboutUsIT'));
const AboutUsES = lazy(() => import('./pages/ueber-uns/AboutUsES'));

const SuccessStoriesEN = lazy(() => import('./pages/erfolgsgeschichten/SuccessStoriesEN'));
const SuccessStoriesIT = lazy(() => import('./pages/erfolgsgeschichten/SuccessStoriesIT'));
const SuccessStoriesES = lazy(() => import('./pages/erfolgsgeschichten/SuccessStoriesES'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-apple border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  const isPublished = window.location.hostname.includes('lovable.app') || 
                     window.location.hostname.includes('lovable.dev');

  return (
    <BrevoFormProvider>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Add the new home route before other routes */}
          <Route path="/de/home" element={<Home />} />
          
          {/* Language-specific routes with consistent URL structure */}
          <Route path="/:lang?" element={<Index />} />
          <Route path="/:lang/legal/imprint" element={<Navigate to="/:lang/impressum" replace />} />
          <Route path="/:lang/legal/privacy" element={<Navigate to="/:lang/datenschutz" replace />} />
          <Route path="/:lang/legal/terms" element={<Navigate to="/:lang/agb" replace />} />
          
          {/* German routes */}
          <Route path="/de/impressum" element={<Impressum />} />
          <Route path="/de/datenschutz" element={<Datenschutz />} />
          <Route path="/de/agb" element={<Agb />} />
          <Route path="/de/brevo" element={<Brevo />} />
          <Route path="/de/ueber-uns" element={<UeberUns />} />
          <Route path="/de/erfolgsbeispiele" element={<Erfolgsbeispiele />} />
          <Route path="/de/faq" element={<FAQ />} />
          
          {/* English routes */}
          <Route path="/en/impressum" element={<ImpressumEN />} />
          <Route path="/en/datenschutz" element={<DatenschutzEN />} />
          <Route path="/en/agb" element={<AgbEN />} />
          <Route path="/en/brevo" element={<Brevo />} />
          <Route path="/en/about-us" element={<AboutUsEN />} />
          <Route path="/en/success-stories" element={<SuccessStoriesEN />} />
          
          {/* Italian routes */}
          <Route path="/it/impressum" element={<ImpressumIT />} />
          <Route path="/it/datenschutz" element={<DatenschutzIT />} />
          <Route path="/it/agb" element={<AgbIT />} />
          <Route path="/it/brevo" element={<Brevo />} />
          <Route path="/it/chi-siamo" element={<AboutUsIT />} />
          <Route path="/it/storie-di-successo" element={<SuccessStoriesIT />} />
          
          {/* Spanish routes */}
          <Route path="/es/impressum" element={<ImpressumES />} />
          <Route path="/es/datenschutz" element={<DatenschutzES />} />
          <Route path="/es/agb" element={<AgbES />} />
          <Route path="/es/brevo" element={<Brevo />} />
          <Route path="/es/sobre-nosotros" element={<AboutUsES />} />
          <Route path="/es/historias-de-exito" element={<SuccessStoriesES />} />
          
          {/* Insurance and Trust Badge routes for all languages */}
          <Route path="/de/versicherung" element={<VersicherungPage />} />
          <Route path="/en/insurance" element={<VersicherungPage />} />
          <Route path="/it/assicurazione" element={<VersicherungPage />} />
          <Route path="/es/seguro" element={<VersicherungPage />} />
          
          <Route path="/de/trust-badge" element={<TrustBadgePage />} />
          <Route path="/en/trust-badge" element={<TrustBadgePage />} />
          <Route path="/it/trust-badge" element={<TrustBadgePage />} />
          <Route path="/es/trust-badge" element={<TrustBadgePage />} />
          
          {/* Add redirect for /en/versicherung to /en/insurance */}
          <Route path="/en/versicherung" element={<Navigate to="/en/insurance" replace />} />
          <Route path="/it/versicherung" element={<Navigate to="/it/assicurazione" replace />} />
          <Route path="/es/versicherung" element={<Navigate to="/es/seguro" replace />} />
          
          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <BrevoFormPopupWrapper />
      <CookieBanner />
      <LanguageDetectionDialog />
      <Toaster />
    </BrevoFormProvider>
  );
};

export default App;
