import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Description } from '@/components/sections/description'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Description />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
