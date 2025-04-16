
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <Route path="/" element={<Index />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<Agb />} />
            <Route path="/brevo" element={<Brevo />} />
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
