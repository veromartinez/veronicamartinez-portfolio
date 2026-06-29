import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from './pages/Home/Home'
import Experiencia from './pages/Experiencia/Experiencia'
import CasosDeEstudio from './pages/CasosDeEstudio/CasosDeEstudio'
import SisNe from './pages/CaseStudy/SisNe'
import CCNWhastapp from './pages/CaseStudy/CCNWhastapp'
import Crezco from './pages/CaseStudy/Crezco'
import CCN from './pages/CaseStudy/CCN'
import PrototiposPreventas from './pages/CaseStudy/PrototiposPreventas'

// Para agregar un nuevo caso de estudio:
// 1. Duplicá _Template.jsx y completá el contenido
// 2. Importalo acá arriba
// 3. Agregá una <Route> abajo

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/casos-de-estudio" element={<CasosDeEstudio />} />
            <Route path="/casos-de-estudio/sisne" element={<SisNe />} />
            <Route path="/casos-de-estudio/ccn-whastapp" element={<CCNWhastapp />} />
            <Route path="/casos-de-estudio/crezco" element={<Crezco />} />
            <Route path="/casos-de-estudio/ccn" element={<CCN />} />
            <Route path="/casos-de-estudio/prototipos-preventas" element={<PrototiposPreventas />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
