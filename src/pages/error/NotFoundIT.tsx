
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFoundIT() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-floral">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-bold text-apple mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8 font-medium">
          Spiacenti, questa pagina non esiste
        </p>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          La pagina che stai cercando potrebbe essere stata rimossa, rinominata o temporaneamente non disponibile.
        </p>
        <div className="space-y-4">
          <p className="text-gray-600 font-medium">Potresti voler:</p>
          <ul className="space-y-2 text-gray-500 mb-8">
            <li>• Tornare alla homepage</li>
            <li>• Esplorare i nostri prodotti</li>
            <li>• Consultare le FAQ</li>
          </ul>
        </div>
        <Button asChild className="bg-apple hover:bg-apple-600">
          <Link to="/it" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Vai alla Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
