
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Agb from './pages/Agb';
import Brevo from './pages/Brevo';
import { LanguageProvider } from './context/LanguageContext';
import { BrevoFormProvider } from './context/BrevoFormContext';
import BrevoFormPopupWrapper from './components/BrevoFormPopupWrapper';

const App = () => {
  return (
    <LanguageProvider>
      <BrevoFormProvider>
        <Router>
          <Routes>
            {/* Default routes (German) */}
            <Route path="/" element={<Index />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<Agb />} />
            <Route path="/brevo" element={<Brevo />} />
            
            {/* Language-specific routes */}
            <Route path="/es" element={<Index />} />
            <Route path="/es/impressum" element={<Impressum />} />
            <Route path="/es/datenschutz" element={<Datenschutz />} />
            <Route path="/es/agb" element={<Agb />} />
            <Route path="/es/brevo" element={<Brevo />} />
            
            <Route path="/en" element={<Index />} />
            <Route path="/en/impressum" element={<Impressum />} />
            <Route path="/en/datenschutz" element={<Datenschutz />} />
            <Route path="/en/agb" element={<Agb />} />
            <Route path="/en/brevo" element={<Brevo />} />
            
            <Route path="/it" element={<Index />} />
            <Route path="/it/impressum" element={<Impressum />} />
            <Route path="/it/datenschutz" element={<Datenschutz />} />
            <Route path="/it/agb" element={<Agb />} />
            <Route path="/it/brevo" element={<Brevo />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BrevoFormPopupWrapper />
          <Toaster />
        </Router>
      </BrevoFormProvider>
    </LanguageProvider>
  );
};

export default App;
