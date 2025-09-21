import { Metadata } from 'next'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - RealtyClose',
  description: 'Get in touch with the RealtyClose team. We\'re here to help you succeed.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Have questions? Need support? Want to schedule a demo? We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Other Ways to Reach Us
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      <a href="mailto:hello@realtyclose.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                        hello@realtyclose.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Support</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      <a href="mailto:support@realtyclose.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                        support@realtyclose.com
                      </a>
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Partnerships</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      <a href="mailto:partners@realtyclose.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                        partners@realtyclose.com
                      </a>
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Business development & integrations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Press & Media</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      <a href="mailto:press@realtyclose.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                        press@realtyclose.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Info */}
              <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Office</h3>
                <div className="text-slate-600 dark:text-slate-300">
                  <p>San Francisco, CA</p>
                  <p className="text-sm mt-2">
                    We're a distributed team serving real estate professionals nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}