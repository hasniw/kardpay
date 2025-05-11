import { Hero } from './components/Hero'
import { FeaturesSection } from './components/FeaturesSection'
import { DiscoverSection } from './components/DiscoverSection'
import { EarnInfo } from './components/EarnInfo'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen text-white flex flex-col">
      <Hero />
      <FeaturesSection />
      <DiscoverSection />
      <EarnInfo />
      <Footer />
    </main>
  )
}
