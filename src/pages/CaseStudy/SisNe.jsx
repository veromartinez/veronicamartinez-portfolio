import CaseHero from './sections/CaseHero'
import CaseSection from './sections/CaseSection'
import CaseMiRol from './sections/CaseMiRol'
import CaseImageGrid from './sections/CaseImageGrid'
import CaseImpacto from './sections/CaseImpacto'
import CaseAprendizajes from './sections/CaseAprendizajes'
import CaseNav from './sections/CaseNav'
import './CaseStudy.css'

export default function SisNe() {
  return (
    <div className="case-study">

      <CaseHero
        title="Más que un rediseño, volver a pensar procesos"
        subtitulo="Aplicación web que centraliza las negociaciones comerciales con los clientes"
        role="UX/UI Designer"
        anio="2022-23"
        industria="Consumo masivo"
      />

      <CaseImageGrid images={['/images/case-studies/sisne/01-sisne-1120px.jpg']} />

      <CaseSection
        label="Contexto"
        title="Un look actualizado, pero los mismos problemas de fondo"
        body={`El cliente (compañía multinacional fabricante de bebidas alcohólicas) solicitó un update tecnológico y funcional de su aplicación web interna que centraliza las negociaciones comerciales con los clientes. El rediseño apuntó a modernizar la interfaz, mejorar la usabilidad y optimizar los flujos de interacción. Como parte del upgrade tecnológico, se lleva a cabo la construcción, pruebas e implementación del backend y frontend de la Rediplatforma.

El cliente contaba con un prototipo funcional con el nuevo look&feel que realizó con otro proveedor.`}
      />

      <CaseImageGrid images={[
        '/images/case-studies/sisne/02-sisne-548.jpg',
        '/images/case-studies/sisne/01-sisne-548.jpg',
      ]} />

      <CaseMiRol
        intro="Como única diseñadora en el proyecto propuse y ejecuté:"
        splitAt={3}
        bullets={[
          'Entrevistas con los usuarios y con stakeholders del negocio: para conocer los procesos de ventas que acompañaba la aplicación y el día a día de los usuarios como fuerza de venta.',
          'Pruebas de usabilidad con el prototipo que traía el cliente.',
          'Pruebas de usabilidad del MVP.',
          'Pruebas de usabilidad antes de la salida a producción.',
          'Creación de user flows.',
          'Sesiones de co-creación con todo el equipo de desarrollo.',
          'Rediseño y prototipado de todos los flujos de la aplicación.',
          'QA visual de la aplicación.',
        ]}
      />

      <CaseSection
        label="Solución"
        title="Mismo look & feel, arquitectura completamente nueva"
        body={`Las entrevistas demostraron que el prototipo que tenía el cliente era funcionalmente igual al sistema que estamos reemplazando. Los usuarios reconocían las mejoras visuales pero los grandes problemas de fondo seguían estando.

El nuevo sistema necesitaba reducir el tiempo que tardaba la fuerza de venta en completar la información en el sistema (aproximadamente 45min por cliente), garantizar que los usuarios no dependieran de un usuario experimentado para aprender a usar la herramienta, y simplificar y alinear los requisitos del negocio.

Para lograrlo se mantuvo el look&feel del prototipo suministrado pero se modificó la arquitectura de la información, la terminología empleada, se sumaron ayudas contextuales para nuevos usuarios y se rehícieron todos los flujos reflejando los nuevos procesos internos.

Actualmente (2025) la herramienta es usada por los empleados de Argentina y Paraguay.`}
      />

      <CaseImageGrid images={[]} />

      <CaseImpacto
        metrics={[
          { label: 'El tiempo de carga de información de un cliente se redujo de 45 min a (máximo) 5 min.', value: '-5min' },
          { label: 'De los usuarios completó la carga de la información con éxito.', value: '83.56%' },
          { label: 'De los usuarios completó la carga de la información sin esfuerzo.', value: '87.4%' },
          { label: 'De los usuarios comprendió las funcionalidades de la aplicación sin requerir asistencia.', value: '100%' },
          { label: 'NPS', value: '97%' },
        ]}
        quotes={[
          '"Destacó la velocidad para cargar los datos"',
          '"Muy rápido y fácil, es un paso hacia adelante"',
        ]}
      />

      <CaseAprendizajes text={`Gracias a este trabajo, ayudé a descubrir necesidades insatisfechas de la empresa y la fuerza de venta, a traducirlas en nuevos procesos y a fomentar la alineación entre ellos. Aprendí que, a veces, cuando los usuarios son empleados tienen temor de hablar abiertamente sobre el sistema y los procesos.

La experiencia profundizó mi capacidad para co-crear con equipos multidisciplinarios, trabajar junto al cliente y crear una herramienta que mejoró sustancialmente el día a día de la fuerza de venta y que fue un exitoso upgrade para la compañía.`} />

      <CaseNav
        prev={null}
        next={{ slug: 'ccn-whastapp', title: 'CCN Whastapp' }}
      />

    </div>
  )
}
