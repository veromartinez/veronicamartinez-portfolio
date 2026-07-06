import CaseHero from './sections/CaseHero'
import CaseSection from './sections/CaseSection'
import CaseMiRol from './sections/CaseMiRol'
import CaseImageGrid from './sections/CaseImageGrid'
import CaseAprendizajes from './sections/CaseAprendizajes'
import CaseNav from './sections/CaseNav'
import './CaseStudy.css'

export default function CCN() {
  return (
    <div className="case-study">

      <CaseHero
        title="Barajar y dar de nuevo: cuando tus habilidades hacen la diferencia"
        subtitulo="Ecosistema financiero digital: billetera electrónica, programa de fidelización, gateway de pagos, plataforma de remesas, cambio de divisas y creación de backoffice centralizado para una gestión eficiente."
        role="UX/UI Designer & Service Design"
        anio="2024-2025"
        industria="Fintech"
      />

      <CaseImageGrid images={['/images/case-studies/ccn/01-ccn-1120px.jpg']} />

      <CaseSection
        label="Contexto"
        title="Crear un ecosistema financiero en un mercado cambiante"
        body={`- El cliente (importante conglomerado cervecero de Centroamérica) solicitó construir una nueva unidad de negocio: un ecosistema financiero con foco en la inclusión financiera, usabilidad y digitalización de operaciones B2C.
- Hubo 5 equipos multidisciplinarios trabajando simultáneamente en colaboración con los consultores especialistas en remesas, banca, retail y producto del cliente.
- Durante el proceso, la política y las legislaciones del país nos cambiaron las reglas del juego varias veces, siendo nuestra adaptación y resiliencia claves para cambiar de rumbo y seguir entregando valor al cliente.`}
      />

      <CaseMiRol
        intro="En este proyecto tuve un nuevo rol como consultora UX y service design. Mis tareas fueron:"
        splitAt={5}
        bullets={[
          'Viajar a Centroamérica con el manager, software engineering y analista para conocer al cliente, realizar entrevistas, conocer los canales físicos de ventas, la compañía, alinearnos con los consultores y conocer la realidad y el contexto en donde iban a funcionar nuestros productos.',
          'Reuniones de seguimiento semanales con el equipo de producto del cliente para mantenernos alineados y consistentes.',
          'Liderazgo, asesoramiento, design reviews y coordinación de tareas con otros dos UX/UI asignados a la cuenta.',
          'Participación en las reuniones de refinamiento de los distintos equipos.',
          'Alineación de experiencia de usuario y producto cross equipos.',
          'Benchmarking de competencia.',
          'Construcción de user persona, voz y tono de la marca en conjunto con el cliente.',
          'Interiorizarme en Salesforce Loyalty, plataforma utilizada por el cliente para gestionar su programa de beneficios.',
          'Colaborar activamente con los cinco equipos dando soporte, detectando inconsistencias, levantando riesgos e identificando oportunidades de mejora del ecosistema.',
          'Trabajar junto al manager y software engineering a cargo de la cuenta en difundir la cultura de la empresa, fomentar la comunicación cross equipos y en la dirección del proyecto.',
        ]}
      />

      <CaseImageGrid images={[
        '/images/case-studies/ccn/01-ccn-548.jpg',
        '/images/case-studies/ccn/02-ccn-548.jpg',
      ]} />

      <CaseSection
        label="Solución"
        title="Alinear equipos, experiencia y producto para adaptarse sin frenar la entrega"
        body={`A dos meses de finalizar los proyectos, distintos motivos políticos y legales obligan al cliente a cambiar de rumbo, dejando el ecosistema financiero por SaaS. Nuevamente, las habilidades de los equipos y una sólida gestión permitió adecuarnos a las nuevas exigencias y normativas completando las entregas.
Los distintos equipos diseñaron, desarrollaron e implementaron:
- App Billetera digital: por problemas políticos ajenos a nosotros y al cliente aún no se encuentra productiva.
- Programa de fidelización: app + AI Assistance en WhatsApp.
- Gateway de pagos de servicios.
- Plataforma de remesas y cambio de divisas.
- Backoffice centralizado.
La implementación está en curso actualmente.`}
      />

      <CaseImageGrid images={[
        '/images/case-studies/ccn/03-ccn-548.jpg',
        '/images/case-studies/ccn/04-ccn-548.jpg',
      ]} />

      <CaseImageGrid images={['/images/case-studies/ccn/02-ccn-1120px.jpg']} />

      <CaseAprendizajes text={`La hermosa experiencia de haber conocido un país y una cultura distinta. Y ser el puente para que los aprendizajes de ese viaje lleguen a las casi 50 personas que trabajaron en el proyecto, para recordarles cada día a los usuarios para los que estaban trabajando.

El desafío de un nuevo rol, agradeciendo la oportunidad de crecimiento que Mobile Computing me brindó y la confianza que depositó en mí para ser embajadora de su cultura en un equipo nuevo tan numeroso.

Cerré el año con el premio "Problem Solver" de la cuenta en reconocimiento a mi innovación y soluciones proactivas.`} />

      <CaseNav
        prev={{ slug: 'crezco', title: 'Crezco' }}
        next={null}
      />

    </div>
  )
}
