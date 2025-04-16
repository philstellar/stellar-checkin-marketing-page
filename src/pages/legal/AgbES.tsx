
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const AgbES = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-32 pb-16 container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-stellar-700">Términos y Condiciones Generales</h1>
          
          <div className="space-y-8">
            <p className="font-semibold mb-6">
              Para la prestación de servicios por parte de Stellar Tourism Innovations GmbH, Immanuelkirchstraße 37, 
              10405 Berlín, Correo electrónico: philipp@stellar-trust.com (en adelante denominado "Contratista") a sus clientes 
              (en adelante denominados "Cliente")
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. General</h2>
            <p>
              1.1 Estos Términos y Condiciones Generales (TCG) para la prestación de servicios se aplican a los contratos 
              que se celebran entre el Cliente y el Contratista con la inclusión de estos TCG.
            </p>
            
            <p>
              1.2 El Contratista tiene derecho a asignar los servicios requeridos a subcontratistas en su propio nombre y por 
              su propia cuenta, quienes a su vez también pueden emplear subcontratistas. El Contratista sigue siendo el único 
              socio contractual del Cliente. No se utilizan subcontratistas si el Contratista reconoce que su uso es contrario 
              a los intereses legítimos del Cliente.
            </p>
            
            <p>
              1.3 Si documentos contractuales adicionales u otros términos y condiciones en forma de texto o escrita han pasado 
              a formar parte del contrato, las disposiciones de estos documentos contractuales adicionales prevalecerán sobre 
              estos TCG en caso de conflicto.
            </p>
            
            <p>
              1.4 El Contratista no reconoce ningún TCG que se desvíe de estas condiciones y que sea utilizado por el Cliente, 
              sujeto a consentimiento expreso.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">2. Objeto del Contrato y Alcance de los Servicios</h2>
            <p>
              2.1 El Contratista proporciona los siguientes servicios para el Cliente como empresario independiente:
            </p>
            
            <p className="pl-5">
              Verificación de agencias de apartamentos turísticos, propietarios, emisión de insignias. Provisión de 
              servicios de Software como Servicio (SaaS).
            </p>
            
            <p>
              2.2 El alcance específico de los servicios es objeto de acuerdos individuales entre el Contratista y el Cliente.
            </p>
            
            <p>
              2.3 El Contratista proporcionará los servicios contractualmente acordados con el mayor cuidado posible y de acuerdo 
              con los últimos estándares, reglas y conocimientos.
            </p>
            
            <p>
              2.4 El Contratista está obligado a proporcionar los servicios contractualmente adeudados. Sin embargo, al ejercer 
              sus actividades, no está sujeto a ninguna instrucción con respecto a la forma de prestación del servicio, el lugar 
              de prestación del servicio o el momento de prestación del servicio. Sin embargo, organizará los días laborables y 
              el horario en estos días de tal manera que se logre una eficiencia óptima de sus actividades y la realización del 
              objeto del contrato. La prestación de servicios por parte del Contratista solo se realiza en coordinación con el Cliente.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">3. Obligaciones de Cooperación del Cliente</h2>
            <p>
              El Cliente está obligado a proporcionar toda la información, datos y otros contenidos que sean necesarios para 
              el cumplimiento del servicio de manera completa y correcta. El Contratista no es de ninguna manera responsable 
              de retrasos y tardanzas en la prestación del servicio que sean atribuibles a una cooperación o asistencia 
              retrasada y necesaria por parte del cliente; las disposiciones bajo el título "Responsabilidad/Compensación" 
              no se ven afectadas por esto.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">4. Remuneración</h2>
            <p>
              4.1 La remuneración se acuerda individualmente.
            </p>
            
            <p>
              4.2 La remuneración se debe después de la prestación de los servicios. Si la remuneración se mide por períodos, 
              se debe después del vencimiento de cada período (§ 614 BGB). Al facturar según el gasto, el Contratista tiene 
              derecho, sujeto a acuerdos divergentes, a facturar los servicios prestados mensualmente.
            </p>
            
            <p>
              4.3 Después de proporcionar los servicios, el Contratista emitirá una factura al Cliente por correo o correo 
              electrónico (por ejemplo, como PDF). La remuneración debe pagarse dentro de los 14 días posteriores a la 
              recepción de la factura.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">5. Responsabilidad / Compensación</h2>
            <p>
              5.1 El Contratista es responsable sin limitación por cualquier razón legal en caso de dolo o negligencia grave, 
              en caso de lesión dolosa o negligente a la vida, el cuerpo o la salud, basada en una promesa de garantía, a menos 
              que se regule de otra manera, o basada en responsabilidad obligatoria. Si el Contratista infringe negligentemente 
              una obligación contractual material, la responsabilidad se limita al daño típico contractual previsible, a menos 
              que exista una responsabilidad ilimitada según la frase anterior. Las obligaciones contractuales materiales son 
              obligaciones que el contrato impone al Contratista según su contenido para lograr el propósito del contrato, cuyo 
              cumplimiento hace posible la ejecución adecuada del contrato en primer lugar y en cuyo cumplimiento el Cliente 
              puede confiar regularmente. De lo contrario, se excluye la responsabilidad del Contratista. Las disposiciones de 
              responsabilidad antes mencionadas también se aplican a la responsabilidad del Contratista por sus agentes 
              indirectos y representantes legales.
            </p>
            
            <p>
              5.2 El Cliente indemniza al Contratista contra todas las reclamaciones de terceros que se hagan valer contra el 
              Contratista debido a violaciones del Cliente contra estos términos contractuales o la ley aplicable.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">6. Duración del Contrato y Terminación</h2>
            <p>
              6.1 La duración del contrato y los plazos para la terminación ordinaria son acordados individualmente por las partes.
            </p>
            
            <p>
              6.2 El derecho de ambas partes a rescindir el contrato sin previo aviso por causa justificada no se ve afectado por esto.
            </p>
            
            <p>
              6.3 Al terminar el contrato, el Contratista debe devolver o destruir todos los documentos y otros contenidos 
              que se le proporcionaron según la opción del Cliente sin demora. Se excluye la afirmación de un derecho de 
              retención a esto. Los datos electrónicos deben ser completamente eliminados. Se excluyen de esto los documentos 
              y datos para los que existe una obligación de retención legal más larga, pero solo hasta el final del período 
              de retención respectivo. El Contratista debe confirmar la eliminación a la empresa por escrito si se solicita.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">7. Confidencialidad y Protección de Datos</h2>
            <p>
              7.1 El Contratista tratará todos los procesos que le sean conocidos en relación con el pedido con estricta 
              confidencialidad. El Contratista se compromete a obligar a todos los empleados y/o terceros que tengan acceso 
              a la información relacionada con el pedido a la confidencialidad. La obligación de confidencialidad se aplica 
              indefinidamente más allá del plazo de este contrato.
            </p>
            
            <p>
              7.2 El Contratista se compromete a cumplir con todas las regulaciones de protección de datos, en particular 
              las disposiciones del Reglamento General de Protección de Datos y la Ley Federal de Protección de Datos, 
              al ejecutar el pedido.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">8. Disposiciones Finales</h2>
            <p>
              8.1 Se aplica la ley de la República Federal de Alemania con exclusión de la Convención de las Naciones Unidas 
              sobre los Contratos de Compraventa Internacional de Mercaderías.
            </p>
            
            <p>
              8.2 Si una disposición de estos TCG es o se vuelve inválida, esto no afectará la validez de los TCG restantes.
            </p>
            
            <p>
              8.3 El Cliente apoyará al Contratista en la prestación de sus servicios contractualmente acordados a través de 
              medidas de cooperación apropiadas, en la medida en que sea necesario. En particular, el Cliente proporcionará 
              al Contratista la información y los datos necesarios para el cumplimiento del contrato.
            </p>
            
            <p>
              8.4 Si el Cliente es un comerciante, una entidad legal bajo derecho público o un fondo especial bajo derecho 
              público, o si no tiene un lugar general de jurisdicción en Alemania, las partes acuerdan la oficina registrada 
              del Contratista como el lugar de jurisdicción para todas las disputas que surjan de esta relación contractual; 
              los lugares exclusivos de jurisdicción no se ven afectados por esto.
            </p>
            
            <p>
              8.5 El Contratista tiene derecho a cambiar estos TCG por razones válidas (por ejemplo, cambios en la jurisprudencia, 
              la situación legal, las condiciones del mercado o la estrategia comercial o corporativa) y observando un período 
              de aviso razonable. Los clientes existentes serán notificados de esto al menos dos semanas antes de que los cambios 
              entren en vigor por correo electrónico. Si el cliente existente no objeta dentro del período establecido en la 
              notificación de cambio, se considera que ha dado su consentimiento a los cambios. Si objeta, los cambios no 
              entrarán en vigor; en este caso, el Contratista tiene derecho a rescindir el contrato de manera extraordinaria 
              en el momento en que los cambios entren en vigor. La notificación del cambio previsto de estos TCG señalará el 
              período y las consecuencias de la objeción o su ausencia.
            </p>
            
            <p>
              8.6 La protección del comprador se define de la siguiente manera: Como reservador, eres responsable de reservar 
              solo a través de canales que estén oficialmente reconocidos por el sitio web certificado por Stellar. No te 
              comuniques con una dirección de correo electrónico o número de teléfono que no haya sido verificado por nosotros. 
              Hacemos nuestro mejor esfuerzo para verificar todos los datos que se nos proporcionan para brindar la máxima protección.
            </p>
            
            <p className="font-medium my-4">Los datos que verificamos son los siguientes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Identificación de la persona clave incluyendo datos biométricos</li>
              <li>Legitimidad del sitio web de la propiedad proporcionando una meta etiqueta</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección de la empresa y verificación cruzada de geolocalización en plataformas importantes</li>
              <li>Calificaciones OTA</li>
            </ul>
            
            <p>
              8.7 Ten en cuenta las directrices de nuestros proveedores de seguros. Puedes encontrarlas vinculadas aquí. 
              Stellar Tourism Innovations GmbH solo vende pólizas de seguro de Hiscox y no es una compañía de seguros en sí. 
              El procesamiento de reclamaciones es responsabilidad de los proveedores de seguros y se lleva a cabo de acuerdo 
              con sus directrices. Sus directrices son válidas en todo momento. La información en el sitio web de Stellar es 
              solo para apoyo y siempre está subordinada a las directrices.
            </p>
            
            <p>
              8.8 Derecho de terminación – Nos reservamos el derecho de terminar cualquier contrato sin previo aviso si 
              detectamos comportamiento fraudulento. Tanto el cliente como Stellar tienen el derecho de terminar contratos 
              en cualquier momento con efecto inmediato y sin dar razones. En caso de que Stellar ejerza su derecho de 
              terminación, se reembolsarán todas las tarifas pagadas por servicios aún no prestados en el momento de la 
              terminación. Cualquier obligación o derecho que surgió antes de que la terminación entrara en vigor permanece inalterado.
            </p>
            
            <p className="font-medium mt-6 mb-2">Disposiciones para pólizas de seguro completadas</p>
            
            <p className="font-medium mt-4 mb-1">Reservas ya iniciadas (en o después de la fecha de llegada)</p>
            <p>
              Para cada póliza de seguro completada, todas las reservas que ya han comenzado (es decir, en o después de la 
              fecha de llegada planificada) permanecen completamente aseguradas. Estas reservas ya no pueden ser canceladas, 
              y todos los beneficios de seguro asociados permanecen en vigor bajo las condiciones originales.
            </p>
            
            <p className="font-medium mt-4 mb-1">Reservas aún no iniciadas (antes de la fecha de llegada)</p>
            <p>
              Para todas las reservas aún no iniciadas, Stellar se reserva el derecho de reembolsar todas las primas o 
              contribuciones futuras relacionadas con estas reservas al terminar el contrato. Una vez que se hayan realizado 
              estos reembolsos, la cobertura de seguro correspondiente finaliza y el contrato se considera terminado o 
              cancelado para estas reservas futuras.
            </p>
            
            <p>
              Estas disposiciones están destinadas a aclarar los derechos y obligaciones de ambas partes en caso de 
              terminación del contrato y asegurar que todas las reservas ya iniciadas permanezcan completamente protegidas, 
              al mismo tiempo que proporcionan flexibilidad para las reservas aún no iniciadas.
            </p>
            
            <p>
              8.9 Cualquier empresa o individuo que use nuestra insignia de manera fraudulenta será responsable de cualquier daño. 
              Eso significa que reclamaremos daños y perjuicios a la parte fraudulenta para compensar a la parte defraudada 
              y/o a Stellar Tourism Innovations.
            </p>
            
            <p>
              9.0 El contrato de garantía de Stellar Tourism Innovations está sujeto a la ley alemana. El lugar de cumplimiento 
              y jurisdicción es Berlín. El sitio de reservas en línea puede dirigir quejas a la "Bundesanstalt für 
              Finanzdienstleistungsaufsicht" (BaFin).
            </p>
            
            <p>
              9.1 Tomamos todas las medidas razonables para asegurar que la información en este sitio web sea correcta. 
              Sin embargo, no garantizamos la exactitud o integridad del material en este sitio web. Podemos realizar 
              cambios en el material de este sitio web en cualquier momento y sin previo aviso. El material en este sitio 
              web puede estar desactualizado o, en casos raros, contener errores, y no nos comprometemos a asegurar que 
              dicho material sea correcto o esté actualizado.
            </p>
            
            <p>
              El material en este sitio web se proporciona sin ninguna condición o garantía de ningún tipo. En la medida 
              permitida por la ley, permitimos el acceso y uso de este sitio web sobre la base de que excluimos todas las 
              representaciones, garantías y condiciones que se aplicarían a este sitio web sin estas condiciones.
            </p>
            
            <p>
              9.2 Ni nosotros ni ninguna otra parte (ya sea involucrada o no en la creación, mantenimiento o entrega de este 
              sitio web) seremos responsables de ninguna pérdida o daño de ningún tipo que pueda surgir para ti o un tercero 
              como resultado de tu uso o el de ellos de nuestro sitio web. Esta exclusión incluye costos de servicio o reparación y, 
              sin limitación, cualquier otro daño directo, indirecto o consecuente, ya sea que surja de agravio o contrato o de 
              otra manera en relación con este sitio web.
            </p>
            
            <p>
              9.3 Nada en estas condiciones excluye o limita la responsabilidad por:
            </p>
            <ul className="list-[lower-alpha] pl-8 space-y-1">
              <li>Muerte o lesiones personales causadas por negligencia (como se define en la Ley de Términos Contractuales Injustos de 1977);</li>
              <li>Fraude;</li>
              <li>Tergiversación en cuanto a un asunto fundamental; o</li>
              <li>Cualquier responsabilidad que no pueda ser excluida o limitada bajo las leyes del Reino Unido.</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">Información sobre Resolución de Disputas en Línea / Arbitraje del Consumidor</h2>
            <p>
              La Comisión de la UE proporciona una plataforma para la resolución de disputas en línea en Internet en el siguiente enlace: 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-stellar-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            
            <p>
              Esta plataforma sirve como punto de contacto para la resolución extrajudicial de disputas que surgen de contratos 
              de compra o servicio en línea que involucran a un consumidor. El proveedor no está dispuesto ni obligado a participar 
              en un procedimiento de resolución de disputas ante una junta de arbitraje del consumidor según el VSBG.
            </p>
            
            <p>
              Por favor, encuentra nuestro acuerdo de procesamiento de datos RGPD en el área de inicio de sesión. Aceptas aceptar 
              automáticamente y firmar esto antes de usar activamente el software. También puedes encontrarlo aquí en alemán. 
              Si necesitas una traducción a tu idioma respectivo, por favor háganoslo saber. La versión alemana es siempre 
              autoritativa, mientras que las traducciones son solo para ilustración en caso de duda.
            </p>
            
            <p className="mt-8">
              Puedes encontrar nuestra dirección de correo electrónico en el encabezado de estos TCG.
            </p>
            
            <div className="mt-12 flex items-center justify-start gap-4">
              <Link to="/es/impressum">
                <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                  <FileText className="h-4 w-4" />
                  Aviso Legal
                </Button>
              </Link>
              <Link to="/es/datenschutz">
                <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                  <FileText className="h-4 w-4" />
                  Política de Privacidad
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgbES;
