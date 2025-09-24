import Navigation from '@/components/ui/Navigation'
import Hero from "@/components/home/Hero"
import EmailCrisis from "@/components/home/EmailCrisis"
import WhyCRM from "@/components/home/WhyCRM"
import HowItWorks from "@/components/home/HowItWorks"
import ProofTrust from "@/components/home/ProofTrust"
import VisionCTA from "@/components/home/VisionCTA"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Navigation />
      <Hero />
      <EmailCrisis />
      <WhyCRM />
      <HowItWorks />
      <ProofTrust />
      <VisionCTA />
    </main>
  )
}