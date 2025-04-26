
import { lazy } from 'react';
import { Route, Fragment } from 'react-router-dom';

// Import pages
const UeberUns = lazy(() => import('@/pages/UeberUns'));
const AboutUsEN = lazy(() => import('@/pages/ueber-uns/AboutUsEN'));
const AboutUsIT = lazy(() => import('@/pages/ueber-uns/AboutUsIT'));
const AboutUsES = lazy(() => import('@/pages/ueber-uns/AboutUsES'));
const Erfolgsbeispiele = lazy(() => import('@/pages/Erfolgsbeispiele'));
const SuccessStoriesEN = lazy(() => import('@/pages/erfolgsgeschichten/SuccessStoriesEN'));
const SuccessStoriesIT = lazy(() => import('@/pages/erfolgsgeschichten/SuccessStoriesIT'));
const SuccessStoriesES = lazy(() => import('@/pages/erfolgsgeschichten/SuccessStoriesES'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Brevo = lazy(() => import('@/pages/Brevo'));
const Home = lazy(() => import('@/pages/Home'));

export const ContentRoutes = () => (
  <Fragment>
    {/* Home routes */}
    <Route path="/de/home" element={<Home />} />
    
    {/* About Us routes */}
    <Route path="/de/ueber-uns" element={<UeberUns />} />
    <Route path="/en/about-us" element={<AboutUsEN />} />
    <Route path="/it/chi-siamo" element={<AboutUsIT />} />
    <Route path="/es/sobre-nosotros" element={<AboutUsES />} />
    
    {/* Success Stories routes */}
    <Route path="/de/erfolgsbeispiele" element={<Erfolgsbeispiele />} />
    <Route path="/en/success-stories" element={<SuccessStoriesEN />} />
    <Route path="/it/storie-di-successo" element={<SuccessStoriesIT />} />
    <Route path="/es/historias-de-exito" element={<SuccessStoriesES />} />
    
    {/* FAQ and Brevo routes */}
    <Route path="/de/faq" element={<FAQ />} />
    <Route path="/de/brevo" element={<Brevo />} />
    <Route path="/en/brevo" element={<Brevo />} />
    <Route path="/it/brevo" element={<Brevo />} />
    <Route path="/es/brevo" element={<Brevo />} />
  </Fragment>
);
