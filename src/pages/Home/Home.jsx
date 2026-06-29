import HeroSection from './sections/HeroSection'
import CasesPreview from './sections/CasesPreview'
import HabilidadesSection from '../../components/sections/HabilidadesSection/HabilidadesSection'
import SobreMiSection from './sections/SobreMiSection'
import ContactSection from '../../components/sections/ContactSection/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CasesPreview />
      <HabilidadesSection />
      <SobreMiSection />
      <ContactSection />
    </>
  )
}
