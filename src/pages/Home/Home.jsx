import HeroSection from './sections/HeroSection'
import CasesPreview from './sections/CasesPreview'
import SobreMiSection from './sections/SobreMiSection'
import ContactSection from '../../components/sections/ContactSection/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CasesPreview />
      <SobreMiSection />
      <ContactSection />
    </>
  )
}
