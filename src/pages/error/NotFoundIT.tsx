
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFoundHero from "@/components/NotFoundHero";

export default function NotFoundIT() {
  return (
    <>
      <Header />
      <NotFoundHero />
      <div className="bg-floral py-12">
        <div className="container-custom text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
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
      <Footer />
    </>
  );
}
