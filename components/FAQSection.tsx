'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Is my email data private and secure?",
    answer: "Yes! We take security seriously. RealtyClose uses enterprise-grade encryption, never stores your emails permanently, and is SOC 2 compliant. We only analyze your email context in real-time to generate suggestions, then immediately discard it. Your sensitive client data never leaves your Gmail."
  },
  {
    question: "Will my emails sound authentic or robotic?",
    answer: "RealtyClose is specifically trained on real estate communication patterns and learns your writing style. Unlike generic AI tools, it understands MLS terminology, market conditions, and compliance requirements. Most agents report that clients compliment their improved communication without knowing AI is involved."
  },
  {
    question: "How is this different from ChatGPT or other AI tools?",
    answer: "RealtyClose is built specifically for real estate professionals. It integrates directly into Gmail, understands real estate terminology, includes compliance checks, and works with multiple languages. Unlike generic AI, it knows the difference between a listing update and a contract question, ensuring appropriate tone and content every time."
  },
  {
    question: "What if I don't like the generated email?",
    answer: "Every email is fully editable before sending. RealtyClose generates a draft that you can modify, add personal touches, or completely rewrite. Think of it as your intelligent writing assistant, not a replacement for your personal touch. You maintain complete control over every message."
  },
  {
    question: "Will clients know I'm using AI assistance?",
    answer: "No. RealtyClose learns your communication style and generates emails that sound exactly like you wrote them. The AI enhances your natural voice rather than replacing it. Many agents find their communication becomes more consistent and professional, leading to better client relationships."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 30-day money-back guarantee on all paid plans, no questions asked. The basic Gmail extension is free forever (up to 10 emails/day), so you can try it risk-free. Cancel anytime and keep all your data - no cancellation fees or penalties."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about RealtyClose AI email assistant
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you succeed with RealtyClose
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Schedule Demo Call
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Email Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}