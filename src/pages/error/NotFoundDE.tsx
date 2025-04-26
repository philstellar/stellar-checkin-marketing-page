
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFoundDE() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-floral">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-bold text-apple mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8 font-medium">
          Entschuldigung, diese Seite existiert nicht
        </p>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          Die von Ihnen gesuchte Seite wurde möglicherweise entfernt, umbenannt oder ist vorübergehend nicht verfügbar.
        </p>
        <div className="space-y-4">
          <p className="text-gray-600 font-medium">Vielleicht möchten Sie:</p>
          <ul className="space-y-2 text-gray-500 mb-8">
            <li>• Zurück zur Startseite gehen</li>
            <li>• Unsere Produkte erkunden</li>
            <li>• Sich die FAQs ansehen</li>
          </ul>
        </div>
        <Button asChild className="bg-apple hover:bg-apple-600">
          <Link to="/de" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Zur Startseite
          </Link>
        </Button>
      </div>
    </div>
  );
}
