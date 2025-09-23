import Navigation from '@/components/ui/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import StatsSection from '@/components/sections/StatsSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <StatsSection />
      <HowItWorksSection />
    </main>
  )
}