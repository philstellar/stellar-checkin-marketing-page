
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { BrevoFormProvider } from './context/BrevoFormContext';
import BrevoFormPopupWrapper from './components/BrevoFormPopupWrapper';
import CookieBanner from './components/CookieBanner';
import { LanguageDetectionDialog } from './components/LanguageDetectionDialog';
import { SchemaProvider } from './components/schema/SchemaProvider';

// Import Index directly to avoid potential circular dependency issues
import Index from './pages/Index';
// Import VersicherungPage directly to resolve loading issue
import VersicherungPage from './components/admin/VersicherungPage';

// Lazy load all pages for better initial load performance
const NotFound = lazy(() => import('./pages/NotFound'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));
const Agb = lazy(() => import('./pages/Agb'));
const Brevo = lazy(() => import('./pages/Brevo'));
// Direct import of admin components - Trust Badge can remain lazy loaded
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
      <SchemaProvider>
        <Routes>
          {/* Remove home routes and redirect /home to index */}
          <Route path="/:lang/home" element={<Navigate to="/:lang" replace />} />
          
          {/* Language-specific routes with consistent URL structure */}
          <Route path="/:lang?" element={<Index />} />
          <Route path="/:lang/legal/imprint" element={<Navigate to="/:lang/impressum" replace />} />
          <Route path="/:lang/legal/privacy" element={<Navigate to="/:lang/datenschutz" replace />} />
          <Route path="/:lang/legal/terms" element={<Navigate to="/:lang/agb" replace />} />
          
          {/* German routes */}
          <Route 
            path="/de/impressum" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Impressum />
              </Suspense>
            } 
          />
          <Route 
            path="/de/datenschutz" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Datenschutz />
              </Suspense>
            } 
          />
          <Route 
            path="/de/agb" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Agb />
              </Suspense>
            } 
          />
          <Route 
            path="/de/brevo" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Brevo />
              </Suspense>
            } 
          />
          <Route 
            path="/de/ueber-uns" 
            element={
              <Suspense fallback={<PageLoader />}>
                <UeberUns />
              </Suspense>
            } 
          />
          <Route 
            path="/de/erfolgsbeispiele" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Erfolgsbeispiele />
              </Suspense>
            } 
          />
          <Route 
            path="/de/faq" 
            element={
              <Suspense fallback={<PageLoader />}>
                <FAQ />
              </Suspense>
            } 
          />
          
          {/* English routes */}
          <Route 
            path="/en/impressum" 
            element={
              <Suspense fallback={<PageLoader />}>
                <ImpressumEN />
              </Suspense>
            } 
          />
          <Route 
            path="/en/datenschutz" 
            element={
              <Suspense fallback={<PageLoader />}>
                <DatenschutzEN />
              </Suspense>
            } 
          />
          <Route 
            path="/en/agb" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AgbEN />
              </Suspense>
            } 
          />
          <Route 
            path="/en/brevo" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Brevo />
              </Suspense>
            } 
          />
          <Route 
            path="/en/about-us" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutUsEN />
              </Suspense>
            } 
          />
          <Route 
            path="/en/success-stories" 
            element={
              <Suspense fallback={<PageLoader />}>
                <SuccessStoriesEN />
              </Suspense>
            } 
          />
          
          {/* Italian routes */}
          <Route 
            path="/it/impressum" 
            element={
              <Suspense fallback={<PageLoader />}>
                <ImpressumIT />
              </Suspense>
            } 
          />
          <Route 
            path="/it/datenschutz" 
            element={
              <Suspense fallback={<PageLoader />}>
                <DatenschutzIT />
              </Suspense>
            } 
          />
          <Route 
            path="/it/agb" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AgbIT />
              </Suspense>
            } 
          />
          <Route 
            path="/it/brevo" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Brevo />
              </Suspense>
            } 
          />
          <Route 
            path="/it/chi-siamo" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutUsIT />
              </Suspense>
            } 
          />
          <Route 
            path="/it/storie-di-successo" 
            element={
              <Suspense fallback={<PageLoader />}>
                <SuccessStoriesIT />
              </Suspense>
            } 
          />
          
          {/* Spanish routes */}
          <Route 
            path="/es/impressum" 
            element={
              <Suspense fallback={<PageLoader />}>
                <ImpressumES />
              </Suspense>
            } 
          />
          <Route 
            path="/es/datenschutz" 
            element={
              <Suspense fallback={<PageLoader />}>
                <DatenschutzES />
              </Suspense>
            } 
          />
          <Route 
            path="/es/agb" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AgbES />
              </Suspense>
            } 
          />
          <Route 
            path="/es/brevo" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Brevo />
              </Suspense>
            } 
          />
          <Route 
            path="/es/sobre-nosotros" 
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutUsES />
              </Suspense>
            } 
          />
          <Route 
            path="/es/historias-de-exito" 
            element={
              <Suspense fallback={<PageLoader />}>
                <SuccessStoriesES />
              </Suspense>
            } 
          />
          
          {/* Insurance and Trust Badge routes for all languages */}
          <Route 
            path="/de/versicherung" 
            element={<VersicherungPage />}
          />
          <Route 
            path="/en/insurance" 
            element={<VersicherungPage />}
          />
          <Route 
            path="/it/assicurazione" 
            element={<VersicherungPage />}
          />
          <Route 
            path="/es/seguro" 
            element={<VersicherungPage />}
          />
          
          <Route 
            path="/de/trust-badge" 
            element={
              <Suspense fallback={<PageLoader />}>
                <TrustBadgePage />
              </Suspense>
            } 
          />
          <Route 
            path="/en/trust-badge" 
            element={
              <Suspense fallback={<PageLoader />}>
                <TrustBadgePage />
              </Suspense>
            } 
          />
          <Route 
            path="/it/trust-badge" 
            element={
              <Suspense fallback={<PageLoader />}>
                <TrustBadgePage />
              </Suspense>
            } 
          />
          <Route 
            path="/es/trust-badge" 
            element={
              <Suspense fallback={<PageLoader />}>
                <TrustBadgePage />
              </Suspense>
            } 
          />
          
          {/* Add redirect for /en/versicherung to /en/insurance */}
          <Route path="/en/versicherung" element={<Navigate to="/en/insurance" replace />} />
          <Route path="/it/versicherung" element={<Navigate to="/it/assicurazione" replace />} />
          <Route path="/es/versicherung" element={<Navigate to="/es/seguro" replace />} />
          
          {/* Catch-all for 404 */}
          <Route 
            path="*" 
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            } 
          />
        </Routes>
        <BrevoFormPopupWrapper />
        <CookieBanner />
        <LanguageDetectionDialog />
        <Toaster />
      </SchemaProvider>
    </BrevoFormProvider>
  );
};

export default App;
