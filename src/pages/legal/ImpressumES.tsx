
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ImpressumES = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-16 container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-stellar-700">Aviso Legal</h1>
          
          <div className="space-y-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Información según § 5 TMG</h2>
              <p className="text-gray-700 leading-relaxed">
                Stellar Tourism Innovations GmbH<br />
                Immanuelkirchstraße 37<br />
                10405 Berlín
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Registro Mercantil</h2>
              <p className="text-gray-700 leading-relaxed">
                Registro Mercantil: HRB 183707 B<br />
                Tribunal de Registro: Amtsgericht Charlottenburg
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Representado por</h2>
              <p className="text-gray-700 leading-relaxed">Philipp Reuter</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Correo electrónico: <a href="mailto:hello@stellar-trust.com" className="text-primary hover:underline">hello@stellar-trust.com</a>
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Número de Identificación de IVA</h2>
              <p className="text-gray-700 leading-relaxed">
                Número de identificación de IVA según § 27 a de la Ley del IVA:<br />
                DE366220256
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Persona responsable del contenido</h2>
              <p className="text-gray-700 leading-relaxed">Philipp Reuter</p>
            </section>
            
            <Accordion type="single" collapsible className="w-full mb-8">
              <AccordionItem value="versicherungsvermittlung" className="border-none">
                <AccordionTrigger className="text-2xl font-bold text-stellar-600 py-2 hover:no-underline hover:text-primary px-0">
                  Intermediación de Seguros
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Inscrito en el registro de intermediarios en la IHK de Berlín con el número D-6JBK-A27XW-21
                      como representante de seguros según § 34 D párrafo 1 en relación con § 59 párrafo 1,2 VVG
                    </p>
                    
                    <p>
                      Seguro de responsabilidad profesional legalmente requerido con ERGO Versicherung AG SV 75594456-341
                    </p>
                    
                    <p>
                      – § 34d del Reglamento de Comercio Alemán<br />
                      – §§ 59-67 VVG<br />
                      – VersVermV<br />
                      – VAG
                    </p>
                    
                    <p>
                      Las regulaciones profesionales pueden ser consultadas y descargadas a través del sitio web "Gesetze im Internet" operado por el Ministerio Federal de Justicia y juris GmbH.
                    </p>
                    
                    <p>
                      Estimados interesados, por ley estamos obligados a proporcionarles una serie de informaciones sobre nosotros como intermediarios de seguros. Hemos compilado y explicado esta información para que les sea útil.
                    </p>
                    
                    <p>
                      Primera información como PDFs para descargar – Por favor, tenga en cuenta la carpeta enlazada
                    </p>
                    
                    <p>
                      Operamos como representante de seguros con permiso de la Cámara de Industria y Comercio de Berlín según § 34d párrafo 1 del Reglamento de Comercio Alemán. Este permiso fue emitido en Alemania.
                    </p>
                    
                    <p>
                      Como representante de seguros, ofrecemos productos en nombre de compañías de seguros. La remuneración en forma de comisión es pagada por la compañía de seguros. Esta comisión es parte de la prima del seguro. Cualquier desviación de esto debe ser acordada expresamente entre nosotros y el cliente. Nuestra empresa no recibe remuneración en forma de otros beneficios.
                    </p>
                    
                    <p>
                      Nuestros productos de seguros se ofrecen a través de corredores de seguros e intermediarios múltiples de seguros. La consultoría y evaluación de necesidades para nuestros productos es llevada a cabo por nuestros socios de distribución.
                    </p>
                    
                    <p>
                      Stellar Tourism Innovations GmbH está registrada en el registro de intermediarios de seguros con el número D-6JBK-A27XW-21. Puede verificarlo en internet en:
                    </p>
                    
                    <p>
                      <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vermittlerregister.info</a>
                    </p>
                    
                    <p>
                      o en el registro de intermediarios de seguros en la
                    </p>
                    
                    <p>
                      Asociación Alemana de Cámaras de Industria y Comercio (DIHK) e.V.<br />
                      Breite Str. 29, 10178 Berlín<br />
                      Tel. 030 203080, Fax 030 203081000
                    </p>
                    
                    <p>
                      No. Ni participamos en una compañía de seguros, ni una compañía de seguros participa en nuestra empresa.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Reclamaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tiene reclamaciones sobre nuestras actividades, por favor contacte con nuestra oficina de reclamaciones:<br />
                Correo electrónico: <a href="mailto:complaint@stellar-trust.com" className="text-primary hover:underline">complaint@stellar-trust.com</a>
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Philipp Reuter, Ralf Kramer, Dirección como arriba
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Aviso de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed">
                A pesar del cuidadoso control de contenido, no asumimos ninguna responsabilidad por el contenido de enlaces externos. Los operadores de las páginas enlazadas son los únicos responsables de su contenido. El hecho de que tales enlaces puedan conducir a proveedores comerciales está en la naturaleza de la WWW. Por lo tanto, no asumimos ninguna responsabilidad por el contenido de tales enlaces.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Resolución de Disputas de la UE</h2>
              <p className="text-gray-700 leading-relaxed">
                La Comisión Europea proporciona una plataforma para la resolución de disputas en línea (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                Puede encontrar nuestra dirección de correo electrónico en el aviso legal del sitio web.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Procedimiento de Resolución de Disputas Ante una Junta de Arbitraje del Consumidor</h2>
              <p className="text-gray-700 leading-relaxed">
                No estamos dispuestos ni obligados a participar en procedimientos de resolución de disputas ante una junta de arbitraje del consumidor.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-stellar-600">Punto de Contacto Central Según la Ley de Servicios Digitales – DSA (Reglamento (UE) 2022/265)</h2>
              <p className="text-gray-700 leading-relaxed">
                Puede comunicarse con nuestro punto de contacto central para usuarios y autoridades según los Art. 11, 12 DSA de la siguiente manera:<br />
                Correo electrónico: <a href="mailto:hello@stellar-trust.com" className="text-primary hover:underline">hello@stellar-trust.com</a>
              </p>
            </section>
          </div>
          
          <div className="mt-12 flex items-center justify-start gap-4">
            <Link to="/es/datenschutz">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                <FileText className="h-4 w-4" />
                Política de Privacidad
              </Button>
            </Link>
            <Link to="/es/agb">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                <FileText className="h-4 w-4" />
                Términos y Condiciones
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImpressumES;
