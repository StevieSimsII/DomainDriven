import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Taglines from '@/components/taglines'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Taglines />
        <Contact />
      </main>
      <Footer />
    </div>
  )
} 