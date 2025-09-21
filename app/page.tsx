import Navigation from '@/components/ui/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import StatsSection from '@/components/sections/StatsSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import SiteFooter from '@/components/SiteFooter'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <SiteFooter />
    </main>
  )
}