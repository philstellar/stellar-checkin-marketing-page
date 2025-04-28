
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';
import { LanguageProvider } from './context/LanguageContext';
import { CookieConsentProvider } from './context/CookieConsentContext';
import { BrevoFormProvider } from './context/BrevoFormContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Index from './pages/Index';
import Versicherung from './components/admin/VersicherungPage';
import TrustBadgePage from './pages/TrustBadgePage';
import NotFound from './pages/NotFound';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/Agb';
import SuccessStories from './pages/Erfolgsbeispiele';
import AboutUs from './pages/UeberUns';
import FAQ from './pages/FAQ';

const queryClient = new QueryClient();

function App() {
  return (
    <LanguageProvider>
      <CookieConsentProvider>
        <BrevoFormProvider>
          <QueryClientProvider client={queryClient}>
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/:lang/" element={<Index />} />
                  <Route path="/:lang/versicherung" element={<Versicherung />} />
                  <Route path="/:lang/success-stories" element={<SuccessStories />} />
                  <Route path="/:lang/about-us" element={<AboutUs />} />
                  <Route path="/:lang/faq" element={<FAQ />} />
                  <Route path="/:lang/impressum" element={<Impressum />} />
                  <Route path="/:lang/datenschutz" element={<Datenschutz />} />
                  <Route path="/:lang/agb" element={<AGB />} />

                  {/* These routes remain accessible even in production, though hidden from navigation */}
                  <Route path="/:lang/home" element={<Home />} />
                  <Route path="/:lang/trust-badge" element={<TrustBadgePage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/trust-badge" element={<TrustBadgePage />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
              <Toaster />
            </div>
          </QueryClientProvider>
        </BrevoFormProvider>
      </CookieConsentProvider>
    </LanguageProvider>
  );
}

export default App;
