import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Agb from './pages/Agb';
import Brevo from './pages/Brevo';
import { BrevoFormProvider } from './context/BrevoFormContext';
import BrevoFormPopupWrapper from './components/BrevoFormPopupWrapper';
import CookieBanner from './components/CookieBanner';
import VersicherungPage from './components/admin/VersicherungPage';
import TrustBadgePage from './components/admin/TrustBadgePage';

// Import translated legal pages
import ImpressumEN from './pages/legal/ImpressumEN';
import ImpressumES from './pages/legal/ImpressumES';
import ImpressumIT from './pages/legal/ImpressumIT';
import DatenschutzEN from './pages/legal/DatenschutzEN';
import DatenschutzES from './pages/legal/DatenschutzES';
import DatenschutzIT from './pages/legal/DatenschutzIT';
import AgbEN from './pages/legal/AgbEN';
import AgbES from './pages/legal/AgbES';
import AgbIT from './pages/legal/AgbIT';

const App = () => {
  const isDevMode = process.env.NODE_ENV === 'development';

  return (
    <BrevoFormProvider>
      <Routes>
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
        
        {/* English routes */}
        <Route path="/en/impressum" element={<ImpressumEN />} />
        <Route path="/en/datenschutz" element={<DatenschutzEN />} />
        <Route path="/en/agb" element={<AgbEN />} />
        <Route path="/en/brevo" element={<Brevo />} />
        
        {/* Italian routes */}
        <Route path="/it/impressum" element={<ImpressumIT />} />
        <Route path="/it/datenschutz" element={<DatenschutzIT />} />
        <Route path="/it/agb" element={<AgbIT />} />
        <Route path="/it/brevo" element={<Brevo />} />
        
        {/* Spanish routes */}
        <Route path="/es/impressum" element={<ImpressumES />} />
        <Route path="/es/datenschutz" element={<DatenschutzES />} />
        <Route path="/es/agb" element={<AgbES />} />
        <Route path="/es/brevo" element={<Brevo />} />
        
        {/* Admin-only routes - only visible in development mode */}
        {isDevMode && (
          <>
            <Route path="/de/versicherung" element={<VersicherungPage />} />
            <Route path="/de/trust-badge" element={<TrustBadgePage />} />
            <Route path="/en/insurance" element={<VersicherungPage />} />
            <Route path="/en/trust-badge" element={<TrustBadgePage />} />
            <Route path="/it/assicurazione" element={<VersicherungPage />} />
            <Route path="/it/trust-badge" element={<TrustBadgePage />} />
            <Route path="/es/seguro" element={<VersicherungPage />} />
            <Route path="/es/trust-badge" element={<TrustBadgePage />} />
          </>
        )}
        
        {/* Catch-all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BrevoFormPopupWrapper />
      <CookieBanner />
      <Toaster />
    </BrevoFormProvider>
  );
};

export default App;
