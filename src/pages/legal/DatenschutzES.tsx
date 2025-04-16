
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const DatenschutzES = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-16 container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-stellar-700 mb-10">Política de Privacidad</h1>
          
          <div className="space-y-8">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">1. Privacidad de un Vistazo</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Información General</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                La siguiente información proporciona una visión general simple de lo que sucede con sus datos personales cuando 
                visita nuestro sitio web. Los datos personales son todos aquellos que pueden utilizarse para identificarle 
                personalmente. Para obtener información detallada sobre el tema de la protección de datos, consulte nuestra 
                política de privacidad que figura a continuación de este texto.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Recopilación de Datos en Nuestro Sitio Web</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>¿Quién es responsable de la recopilación de datos en este sitio web?</strong><br />
                El procesamiento de datos en este sitio web lo realiza el operador del sitio web. Puede encontrar sus datos de 
                contacto en el aviso legal de este sitio web.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>¿Cómo recopilamos sus datos?</strong><br />
                Por un lado, sus datos se recogen cuando usted nos los proporciona. Estos pueden ser datos que introduce en un 
                formulario de contacto.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Otros datos son recopilados automáticamente por nuestros sistemas informáticos cuando visita el sitio web. Se trata 
                principalmente de datos técnicos (por ejemplo, navegador de Internet, sistema operativo o tiempo de visualización de la página). 
                Estos datos se recogen automáticamente en cuanto entra en nuestro sitio web.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>¿Para qué utilizamos sus datos?</strong><br />
                Parte de los datos se recogen para garantizar un funcionamiento sin errores del sitio web. Otros datos pueden 
                utilizarse para analizar su comportamiento como usuario.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                <strong>¿Qué derechos tiene en relación con sus datos?</strong><br />
                Tiene derecho a recibir información gratuita sobre el origen, el destinatario y la finalidad de sus datos personales 
                almacenados en cualquier momento. También tiene derecho a solicitar la corrección, el bloqueo o la eliminación de estos 
                datos. Para ello, así como para otras cuestiones relacionadas con la protección de datos, puede ponerse en contacto con 
                nosotros en cualquier momento en la dirección indicada en el aviso legal. Además, tiene derecho a presentar una reclamación 
                ante la autoridad supervisora competente.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">2. Información General e Información Obligatoria</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Protección de Datos</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                Los operadores de estas páginas se toman muy en serio la protección de sus datos personales. Tratamos sus datos personales 
                de forma confidencial y de acuerdo con las disposiciones legales de protección de datos y esta política de privacidad.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Cuando utiliza este sitio web, se recogen diversos datos personales. Los datos personales son datos que pueden utilizarse 
                para identificarle personalmente. Esta política de privacidad explica qué datos recopilamos y para qué los utilizamos. 
                También explica cómo y con qué finalidad se hace.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Queremos señalar que la transmisión de datos en Internet (por ejemplo, al comunicarse por correo electrónico) puede tener 
                brechas de seguridad. No es posible una protección completa de los datos contra el acceso por parte de terceros.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Información sobre la Parte Responsable</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                La parte responsable del procesamiento de datos en este sitio web es:
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Stellar Tourism Innovations GmbH<br />
                Immanuelkirchstraße 37<br />
                10405 Berlín<br />
                Alemania<br /><br />
                Teléfono: +49 304 1738487<br />
                Correo electrónico: <a href="mailto:info@stellar-trust.com" className="text-primary hover:underline">info@stellar-trust.com</a>
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                La parte responsable es la persona física o jurídica que, sola o conjuntamente con otras, decide sobre los fines y medios 
                del tratamiento de datos personales (por ejemplo, nombres, direcciones de correo electrónico, etc.).
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Revocación de su Consentimiento para el Procesamiento de Datos</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Muchas operaciones de procesamiento de datos solo son posibles con su consentimiento expreso. Puede revocar en cualquier 
                momento el consentimiento que ya ha dado. Para ello, basta con una notificación informal por correo electrónico. La legalidad 
                del procesamiento de datos realizado hasta la revocación no se ve afectada por la revocación.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">3. Recopilación de Datos en Nuestro Sitio Web</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Cookies</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                Las páginas de Internet utilizan en parte las llamadas cookies. Las cookies no dañan su ordenador y no contienen virus. 
                Las cookies sirven para hacer nuestra oferta más fácil de usar, efectiva y segura. Las cookies son pequeños archivos 
                de texto que se almacenan en su ordenador y se guardan en su navegador.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                La mayoría de las cookies que utilizamos son las llamadas "cookies de sesión". Se eliminan automáticamente después de su visita. 
                Otras cookies permanecen almacenadas en su dispositivo hasta que las elimine. Estas cookies nos permiten reconocer su 
                navegador la próxima vez que nos visite.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Puede configurar su navegador para que se le informe sobre la configuración de cookies y solo permita cookies en casos 
                individuales, excluya la aceptación de cookies para ciertos casos o en general, y active la eliminación automática de cookies 
                al cerrar el navegador. La funcionalidad de este sitio web puede verse limitada si se desactivan las cookies.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Solicitud por Correo Electrónico, Teléfono o Fax</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                Si se pone en contacto con nosotros por correo electrónico, teléfono o fax, su solicitud, incluidos todos los datos personales 
                resultantes (nombre, solicitud), será almacenada y procesada por nosotros con el fin de procesar su solicitud. No transmitimos 
                estos datos sin su consentimiento.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                El procesamiento de estos datos se basa en el Art. 6 (1) (b) RGPD si su solicitud está relacionada con el cumplimiento de un 
                contrato o es necesaria para la implementación de medidas precontractuales. En todos los demás casos, el procesamiento se basa 
                en nuestro interés legítimo en el procesamiento efectivo de las solicitudes que se nos dirigen (Art. 6 (1) (f) RGPD) o en su 
                consentimiento (Art. 6 (1) (a) RGPD) si este ha sido solicitado.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Los datos que nos envía a través de solicitudes de contacto permanecerán con nosotros hasta que nos solicite eliminarlos, 
                revoque su consentimiento para el almacenamiento o la finalidad para el almacenamiento de datos ya no se aplique (por ejemplo, 
                después de que su solicitud haya sido procesada). Las disposiciones legales obligatorias, especialmente los períodos de 
                retención legal, no se ven afectadas.
              </p>
            </section>
          </div>
          
          <div className="mt-12 flex items-center justify-start gap-4">
            <Link to="/es/impressum">
              <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                <FileText className="h-4 w-4" />
                Aviso Legal
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

export default DatenschutzES;
