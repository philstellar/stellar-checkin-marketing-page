
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Determine language from URL
  const getLanguageFromPath = () => {
    const path = location.pathname;
    if (path.startsWith("/en")) return "en";
    if (path.startsWith("/es")) return "es";
    if (path.startsWith("/it")) return "it";
    return "de"; // Default to German
  };

  const language = getLanguageFromPath();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          {language === 'en' && 'Page not found'}
          {language === 'de' && 'Seite nicht gefunden'}
          {language === 'es' && 'Página no encontrada'}
          {language === 'it' && 'Pagina non trovata'}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
