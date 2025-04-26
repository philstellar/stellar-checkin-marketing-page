
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { BrevoFormProvider } from './context/BrevoFormContext';
import BrevoFormPopupWrapper from './components/BrevoFormPopupWrapper';
import CookieBanner from './components/CookieBanner';
import { LanguageDetectionDialog } from './components/LanguageDetectionDialog';
import { PageLoader } from './components/ui/page-loader';
import { LegalRoutes } from './routes/legalRoutes';
import { ProductRoutes } from './routes/productRoutes';
import { ContentRoutes } from './routes/contentRoutes';

// Import Index directly to avoid potential circular dependency issues
import Index from './pages/Index';
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <BrevoFormProvider>
      <Routes>
        {/* Home route */}
        <Route path="/:lang?" element={<Index />} />
        
        {/* All other routes wrapped in Suspense */}
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Legal routes */}
                <Route path="/*" element={<LegalRoutes />} />
                
                {/* Product routes */}
                <Route path="/*" element={<ProductRoutes />} />
                
                {/* Content routes */}
                <Route path="/*" element={<ContentRoutes />} />
                
                {/* Catch-all for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          }
        />
      </Routes>
      <BrevoFormPopupWrapper />
      <CookieBanner />
      <LanguageDetectionDialog />
      <Toaster />
    </BrevoFormProvider>
  );
};

export default App;
