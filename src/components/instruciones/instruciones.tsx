import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Instruciones() {
  return (
    <>
      <Accordion type="single" collapsible className="w-[544px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>¿Para qué sirve esta aplicación?</AccordionTrigger>
          <AccordionContent>
            <ol className="list-outside list-none space-y-2">
              {/* text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]  */}
              <li>
                Esta aplicación fue creada para facilitar la gestión de
                servicios en Windows. Permite iniciar, detener y configurar el
                tipo de inicio de cualquier servicio o aplicación instalada en
                el sistema. Puedes gestionar servicios de bases de datos como
                PostgreSQL o cualquier otro programa que se encuentre en el
                administrador de servicios de Windows (services.msc).
              </li>
              <li>
                Por defecto, muchos servicios y aplicaciones se configuran para
                iniciarse automáticamente al arrancar el sistema, lo cual,
                aunque no consuma muchos recursos, puede ser innecesario si no
                se usan constantemente. Esta herramienta te permite cambiar esa
                configuración y decidir cuándo deseas que un servicio o
                aplicación se inicie, optimizando el uso de los recursos del
                sistema.
              </li>
              <li>
                Es importante tener en cuenta que la aplicación debe ejecutarse
                como administrador para poder realizar estos cambios en los
                servicios del sistema.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            ¿Cómo Utilizar la Aplicación? Guía Paso a Paso
          </AccordionTrigger>
          <AccordionContent>
            <ol className="list-outside pl-[25px] list-decimal space-y-2">
              <li>
                <span className="font-extrabold">
                  Inicia la aplicación como administrador.
                </span>
              </li>
              <li>
                Selecciona el servicio o aplicación que deseas iniciar, detener
                o configurar.
              </li>
              <li>
                Si deseas tener control manual sobre el servicio, configura el
                tipo de inicio a <span className="font-extrabold">Manual</span>.
                Esto te permitirá{' '}
                <span className="font-extrabold">iniciar</span> y{' '}
                <span className="font-extrabold">detener</span> el servicio
                cuando lo necesites.
              </li>
              <li>
                Para iniciar el servicio o aplicación, presiona el botón{' '}
                <span className="font-extrabold">Iniciar</span>, que ejecutará
                un comando como:{' '}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  net start nombre-del-servicio
                </code>
                .
              </li>
              <li>
                Para detener el servicio o aplicación, presiona el botón{' '}
                <span className="font-extrabold">Apagar</span>, que ejecutará un
                comando como:{' '}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  net stop nombre-del-servicio
                </code>
                . Aunque normalmente se detendría al apagar el equipo, esta
                opción te permite hacerlo manualmente.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
