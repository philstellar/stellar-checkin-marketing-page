
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Agb from './pages/Agb';
import Brevo from './pages/Brevo';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<Agb />} />
          <Route path="/brevo" element={<Brevo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
};

export default App;
