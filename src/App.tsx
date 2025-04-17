
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
  return (
    <BrevoFormProvider>
      <Routes>
        {/* Default root route - German */}
        <Route path="/" element={<Index />} />
        
        {/* Explicit German routes */}
        <Route path="/de" element={<Index />} />
        <Route path="/de/impressum" element={<Impressum />} />
        <Route path="/de/datenschutz" element={<Datenschutz />} />
        <Route path="/de/agb" element={<Agb />} />
        <Route path="/de/brevo" element={<Brevo />} />
        
        {/* Default routes without language prefix (for backward compatibility) */}
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<Agb />} />
        <Route path="/brevo" element={<Brevo />} />
        
        {/* Spanish routes */}
        <Route path="/es" element={<Index />} />
        <Route path="/es/impressum" element={<ImpressumES />} />
        <Route path="/es/datenschutz" element={<DatenschutzES />} />
        <Route path="/es/agb" element={<AgbES />} />
        <Route path="/es/brevo" element={<Brevo />} />
        
        {/* English routes */}
        <Route path="/en" element={<Index />} />
        <Route path="/en/impressum" element={<ImpressumEN />} />
        <Route path="/en/datenschutz" element={<DatenschutzEN />} />
        <Route path="/en/agb" element={<AgbEN />} />
        <Route path="/en/brevo" element={<Brevo />} />
        
        {/* Italian routes */}
        <Route path="/it" element={<Index />} />
        <Route path="/it/impressum" element={<ImpressumIT />} />
        <Route path="/it/datenschutz" element={<DatenschutzIT />} />
        <Route path="/it/agb" element={<AgbIT />} />
        <Route path="/it/brevo" element={<Brevo />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BrevoFormPopupWrapper />
      <CookieBanner />
      <Toaster />
    </BrevoFormProvider>
  );
};

export default App;
