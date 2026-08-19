import CaseHero from './sections/CaseHero'
import CaseGifRow from './sections/CaseGifRow'
import CaseNav from './sections/CaseNav'
import './CaseStudy.css'

export default function PrototiposPreventas() {
  return (
    <div className="case-study">

      <CaseHero
        category="IA"
        year="2026"
        title="Prototipos interactivos para preventas"
        subtitulo="Prototipos interactivos con IA para validaciones más rápidas."
        role="UX/UI Designer"
        anio="2026"
        industria="Todas"
      />

      <CaseGifRow
        title="HTML para envío por email"
        body="Para acelerar procesos internos, a partir de un template en Figma, lo optimicé para envío de emails por Gmail, lo pasé a HTML. Ahora los nuevos correos se actualizan directamente sobre el HTML, listos para enviar en una mañana."
        tool="Herramienta: Figma + Cursor"
        image="/images/case-studies/ia/email.gif"
        alt="Plantilla de email HTML optimizada para envío por Gmail"
      />

      <CaseGifRow
        title="Nueva funcionalidad e-commerce"
        body="Para presentar una nueva funcionalidad en una instancia de preventa, repliqué características de un ecommerce, para mostrar interactivamente al nuevo asistente de IA, siguiendo las etapas de la compra."
        tool="Herramienta: Claude Code"
        image="/images/case-studies/ia/michaels.gif"
        alt="Prototipo interactivo de nueva funcionalidad de e-commerce"
      />

      <CaseGifRow
        title="Sistema interno con asistente virtual"
        body="Prueba de concepto realizada en equipo luego de un discovery, para alinear y evaluar la solución propuesta."
        tool="Herramienta: Claude Code"
        image="/images/case-studies/ia/nexo.gif"
        alt="Prueba de concepto de sistema interno con asistente virtual"
      />

      <CaseGifRow
        title="Nueva funcionalidad fintech"
        body="El cliente necesitaba mostrarle una nueva funcionalidad al directorio para obtener el financiamiento. En dos días, reutilizando el design system en uso y las APIs provistas por el proveedor, le entregamos un prototipo funcional para usar de demo."
        tool="Herramienta: Figma + Cursor"
        image="/images/case-studies/ia/rialex.gif"
        alt="Prototipo funcional de nueva funcionalidad fintech para demo a directorio"
      />

      <CaseGifRow
        title="Del canva al código"
        body="Ejercicio de prueba y práctica. A partir del diseño en Figma, hice la conversión a código, respetando el diseño original, agregando animaciones, interacciones y creando un GEM de Gemini que creara las imágenes a partir de un texto. Resultado: una web estática funcional."
        tool="Herramienta: Figma + Cursor"
        image="/images/case-studies/ia/blog.gif"
        alt="Conversión de diseño en Figma a web estática funcional"
      />

      <CaseNav
        prev={{ slug: 'ccn', title: 'Barajar y dar de nuevo' }}
        next={null}
      />

    </div>
  )
}
