'use client'

import { useState } from 'react'
import CountdownTimer from './CountdownTimer'

export default function ExtensionWaitlist() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitMessage('🎉 You\'re on the list! We\'ll email you as soon as the extension is ready.')
      setEmail('')
      setName('')
      setCompany('')
    } catch (error) {
      setSubmitMessage('Sorry, there was an error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-12 mb-16">
      <div className="text-center mb-8">
        <div className="bg-orange-500 text-white px-4 py-2 rounded-full inline-block mb-4">
          <span className="font-semibold">🎯 Limited Beta Access</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">
          Join the Beta Waitlist
        </h2>
        <p className="text-blue-100 mb-6">
          Only 247 spots remaining for exclusive early access
        </p>
        
        <div className="mb-6">
          <p className="text-blue-200 mb-4">Beta program closes in:</p>
          <CountdownTimer 
            targetDate={new Date('2024-01-31T23:59:59')} 
            className="mb-4"
          />
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/70 text-center"
            required
          />
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/70 text-center"
            required
          />
          <input
            type="text"
            placeholder="Brokerage/Company (optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/70 text-center"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-blue-600 hover:bg-blue-50 disabled:bg-white/70 disabled:cursor-not-allowed py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            {isSubmitting ? '🚀 Securing Your Spot...' : '🚀 Secure My Beta Spot'}
          </button>
        </div>
        
        {submitMessage && (
          <div className={`mt-4 p-4 rounded-lg ${
            submitMessage.includes('🎉') 
              ? 'bg-green-500/20 border border-green-400 text-green-100' 
              : 'bg-red-500/20 border border-red-400 text-red-100'
          }`}>
            {submitMessage}
          </div>
        )}
        
        <p className="text-sm text-blue-200 mt-4 text-center">
          We'll email you as soon as the extension is ready. No spam, promise.
        </p>
      </form>
    </div>
  )
}