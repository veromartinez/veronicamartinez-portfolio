import CaseHero from './sections/CaseHero'
import CaseSection from './sections/CaseSection'
import CaseMiRol from './sections/CaseMiRol'
import CaseImageGrid from './sections/CaseImageGrid'
import CaseAprendizajes from './sections/CaseAprendizajes'
import CaseNav from './sections/CaseNav'
import './CaseStudy.css'

export default function Crezco() {
  return (
    <div className="case-study">

      <CaseHero
        title="Conectar para obtener visibilidad"
        subtitulo="Sistema centralizado que conecta las acciones comerciales generadas por el cliente con sus distribuidores responsables de gestionar las ventas con clientes indirectos."
        role="UX/UI Designer"
        anio="2024-2025"
        industria="Consumo masivo"
      />

      <CaseSection
        label="Contexto"
        title="Ganar visibilidad sobre las acciones comerciales"
        body={`El cliente (compañía multinacional fabricante de bebidas alcohólicas) solicitó la creación de un nuevo sistema para tener visibilidad de las acciones comerciales de sus distribuidores.
Mediante ciclos de diseño iterativos y sesiones de descubrimiento con los equipos de negocio y cumplimiento, identificamos los puntos claves necesarios para conectar a los distribuidores con las promociones. El análisis fue complejo porque el punta a punta de cada acción pasa por distintos sistemas internos y externos con diferentes reglas de negocio y aprobaciones.`}
      />

      <CaseImageGrid images={['/images/case-studies/crezco/01-crezco-1120px.jpg']} />

      <CaseMiRol
        intro="Como única diseñadora en el proyecto propuse y ejecuté:"
        splitAt={4}
        bullets={[
          'Entrevistas con los usuarios y con stakeholders del negocio: para conocer los procesos que acompañaba la aplicación.',
          'Sesiones de co-creación con todo el equipo de desarrollo.',
          'Pruebas de usabilidad.',
          'Creación de user flows.',
          'Diseño y prototipado de todos los flujos de la aplicación.',
          'Reuniones con el equipo de design system de la filial de Brasil del cliente para analizar y evaluar la adopción en Argentina del mismo.',
          'QA visual de la aplicación.',
        ]}
      />

      <CaseSection
        label="Solución"
        title="Conectar Revenue y distribuidores en una plataforma común"
        body={`Teníamos que dar solución a las necesidades de dos tipos de usuarios:
Usuario interno / negocio:
- Necesitaba tener visibilidad inmediata de las acciones implementadas por los distribuidores.
- En su día a día utilizaba varias plataformas para trackear cada acción comercial.
- Siempre aparecían diferencias de precios imposibles de rastrear.
Usuario externo / distribuidores:
- Los nuevos flujos debían integrarse a su propia herramienta: no deseaban perder tiempo adicional.
El nuevo sistema priorizó brindar información de valor, personalizada a cada tipo de usuario, internos y externos. La herramienta introdujo un flujo de trabajo más transparente y colaborativo entre la empresa y los distribuidores, eliminando las fricciones existentes por el trackeo de las acciones y las diferencias de precios.
La aplicación está activa desde marzo de 2025. Para marzo de 2026 se espera completar su implementación con todos los distribuidores activos.
Como parte de la actualización tecnológica, se desarrollaron, probaron e implementaron el backend y el frontend de la plataforma.`}
      />

      <CaseImageGrid images={[
        '/images/case-studies/crezco/02-crezco-548.jpg',
        '/images/case-studies/crezco/03-crezco-548.jpg',
      ]} />

      <CaseSection
        title="Impacto"
        body={`- Se incorporaron con éxito más de 130 distribuidores externos al proyecto (en comparación con los 2 distribuidores activos en el MVP).
- Se redujo el tiempo promedio para visualizar y verificar el impacto de las acciones comerciales.
- Una única plataforma centraliza ahora tanto las acciones centralizadas (propuestas por Revenue) como las acciones y negociaciones descentralizadas.
- Diciembre 2025: más de 12.000 acciones comerciales activas en el sistema.
- La diferencia de precios entre plataformas se redujo significativamente.
- Partnership sostenido: colaboración activa desde el año 2000.`}
      />

      <CaseAprendizajes text={`La experiencia de ya haber trabajado para este cliente me permitió indagar más en los distintos procesos operativos de la compañía, analizar conexiones, ver los distintos sistemas conectados, conocer las limitantes técnicas de cada uno y depender de distintos proveedores.
Trabajé con mucha libertad con el equipo del cliente (PO, Product Manager y líder técnico).
La experiencia profundizó mi capacidad para pensar sistémicamente: el sistema que estábamos construyendo se integraba al ecosistema de la compañía para dar visibilidad al área más sensible de toda empresa, Revenue.`} />

      <CaseNav
        prev={{ slug: 'ccn-whastapp', title: 'CCN Whastapp' }}
        next={{ slug: 'ccn', title: 'CCN' }}
      />

    </div>
  )
}
