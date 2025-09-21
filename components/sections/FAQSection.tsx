'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is AI-generated content compliant with real estate regulations?",
      answer: "Yes! RealtyClose is built specifically for real estate with compliance checks built-in. Our AI understands RESPA, fair housing laws, and state-specific regulations. All generated emails include appropriate disclaimers and avoid problematic language that could create legal issues."
    },
    {
      question: "Will my clients know the emails are AI-written?",
      answer: "No. RealtyClose learns your writing style and tone to match your voice perfectly. The AI generates emails that sound exactly like you wrote them. Many agents report that clients compliment them on their improved communication without knowing AI is involved."
    },
    {
      question: "What if I need to customize or edit the emails?",
      answer: "Every email is fully editable before sending. RealtyClose generates a draft that you can modify, add personal touches, or completely rewrite. Think of it as your writing assistant, not a replacement for your personal touch."
    },
    {
      question: "Does this work with my existing Gmail and CRM?",
      answer: "Yes! RealtyClose integrates seamlessly with Gmail through a Chrome extension. No setup required - just install and start using. We're also working on integrations with major CRMs like Chime, Follow Up Boss, and KVCore."
    },
    {
      question: "How accurate is the AI for real estate terminology?",
      answer: "RealtyClose is trained specifically on real estate communication. It understands MLS terminology, contract language, closing processes, and market conditions. The AI knows the difference between a seller's market email and a buyer's market email."
    },
    {
      question: "What languages does RealtyClose support?",
      answer: "Currently supports English, Spanish, French, Portuguese, and Mandarin. We're adding more languages based on user requests. The AI maintains professional real estate terminology in all supported languages."
    },
    {
      question: "Is there a free trial or money-back guarantee?",
      answer: "Yes! The Chrome extension is free forever for basic use (up to 10 emails/day). Paid plans come with a 30-day money-back guarantee, no questions asked. You can also schedule a demo to see RealtyClose in action before committing."
    },
    {
      question: "How secure is my client data?",
      answer: "We take security seriously. RealtyClose uses enterprise-grade encryption, never stores your emails or client data, and is SOC 2 compliant. The AI processes your email context in real-time and immediately discards it after generation."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
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
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
  );
}