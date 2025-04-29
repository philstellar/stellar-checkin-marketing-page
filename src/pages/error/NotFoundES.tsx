
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFoundES() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-floral">
        <div className="container-custom text-center">
          <h1 className="text-6xl font-bold text-apple mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8 font-medium">
            Lo sentimos, esta página no existe
          </p>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Es posible que la página que busca haya sido eliminada, renombrada o no esté disponible temporalmente.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600 font-medium">Quizás quiera:</p>
            <ul className="space-y-2 text-gray-500 mb-8">
              <li>• Volver a la página de inicio</li>
              <li>• Explorar nuestros productos</li>
              <li>• Consultar las preguntas frecuentes</li>
            </ul>
          </div>
          <Button asChild className="bg-apple hover:bg-apple-600">
            <Link to="/es" className="inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Ir al Inicio
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
