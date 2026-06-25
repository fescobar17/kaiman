import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Calculator from '@/components/Calculator'
import Stats from '@/components/Stats'
import Problems from '@/components/Problems'
import Features from '@/components/Features'
import Pillars from '@/components/Pillars'
import Ecosistema from '@/components/Ecosistema'
import Faq from '@/components/Faq'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Calculator />
        <Stats />
        <Problems />
        <Features />
        <Pillars />
        <Ecosistema />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
