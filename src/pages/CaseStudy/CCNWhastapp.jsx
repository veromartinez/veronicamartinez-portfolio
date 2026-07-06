import CaseHero from './sections/CaseHero'
import CaseSection from './sections/CaseSection'
import CaseMiRol from './sections/CaseMiRol'
import CaseImageGrid from './sections/CaseImageGrid'
import CaseAprendizajes from './sections/CaseAprendizajes'
import CaseNav from './sections/CaseNav'
import './CaseStudy.css'

export default function CCNWhastapp() {
  return (
    <div className="case-study">

      <CaseHero
        title="Un chatbot que no se parezca a ninguno del mercado"
        subtitulo="Asistente IA para programa de fidelización por WhatsApp"
        role="UX/UI Designer"
        anio="2025-2026"
        industria="Retail"
      />

      <CaseImageGrid images={['/images/case-studies/ccn-whatsapp/01-whastapp-1120px.jpg']} />

      <CaseSection
        label="Contexto"
        title="Llevar fidelización a WhatsApp sin parecer un chatbot tradicional"
        body={`El cliente (importante conglomerado cervecero de Centroamérica) solicitó adaptar la app del programa de fidelización que estábamos construyendo a un asistente virtual para funcionar en WhatsApp.
Ambos canales funcionan juntos logrando una sinergia entre ambos y permitiendo que personas de zonas rurales o del interior del país pudieran sumarse al programa aún sin conexión a internet o con celulares viejos.
Explícitamente nos pidió que no se debía parecer a ninguno de los que había en su país porque la experiencia era mala y los usuarios solían evitarlos, y no querían que eso afectara la experiencia y la confianza en la marca que están construyendo.`}
      />

      <CaseMiRol
        intro="Como única diseñadora a cargo de este proyecto mis tareas fueron:"
        splitAt={3}
        bullets={[
          'Participar en reuniones con distintos posibles proveedores para analizar junto al cliente la mejor opción.',
          'Adaptar las funcionalidades de la app móvil existente a flujos conversacionales.',
          'Redactar todas las conversaciones del asistente virtual siguiendo los distintos casos de uso y escenarios posibles, manteniendo la voz y el tono establecido para la marca.',
          'Establecer los guardrails, voz, tono y personalidad del asistente virtual.',
          'Revisar y testear los flujos conversacionales.',
          'Colaborar estrechamente con el desarrollador en la revisión de los prompts.',
          'Elaborar la base de conocimiento para el asistente virtual.',
        ]}
      />

      <CaseImageGrid images={[
        '/images/case-studies/ccn-whatsapp/01-whatsapp-548.jpg',
        '/images/case-studies/ccn-whatsapp/02-whatsapp-548.jpg',
      ]} />

      <CaseSection
        label="Solución"
        title="Diseñar una experiencia conversacional clara, flexible y confiable"
        body={`- Diseñamos un asistente de IA que prioriza la usabilidad, flexibilidad y transparencia.
- Creamos flujos de conversación adaptados a las funcionalidades principales del programa de fidelización.
- Adaptamos la personalidad a la cultura y la situación, incorporando jerga nacional y emoticones.
- Diseñamos la lógica de escalamiento para dirigir rápidamente las solicitudes sin resolver a agentes humanos.`}
      />

      <CaseImageGrid images={['/images/case-studies/ccn-whatsapp/02-whastapp-1120px.jpg']} />

      <CaseAprendizajes text={`Diseñar para IA implica diseñar para ambigüedad. Nunca responde dos veces igual. Muchas veces ni siquiera responde lo que yo diseñé, pero aprendí que lo que sucede cuando no sabe es tan importante como cuando sabe, y eso cambió completamente nuestra forma de testearlo.

Que unir a Meta y a Salesforce fue un gran dolor de cabeza. Finalmente el asistente virtual se desarrolló con Agentforce de Salesforce, una herramienta poderosa pero en desarrollo que no soporta templates nativos de Meta. Lidiar con las dificultades técnicas y los soportes de ambas plataformas fue parte del aprendizaje.`} />

      <CaseNav
        prev={{ slug: 'sisne', title: 'SisNe' }}
        next={{ slug: 'crezco', title: 'Crezco' }}
      />

    </div>
  )
}
