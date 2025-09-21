export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Real Results from Real Estate Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 2,500+ agents who've transformed their email productivity and increased their closing rates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1 - Time Savings */}
          <div className="bg-slate-50 p-8 rounded-2xl relative">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-700 mb-6 text-lg">
              "RealtyClose saved me 2.5 hours daily. I went from spending my mornings writing emails to having coffee and reviewing actual listings. 
              <span className="font-semibold text-blue-600"> My response time improved 4x and I closed 3 more deals this quarter.</span>"
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" 
                alt="Sarah Mitchell" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                <div className="text-gray-600 text-sm">Top Producer, Coldwell Banker</div>
                <div className="text-gray-500 text-sm">San Francisco, CA</div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
              +3 Deals
            </div>
          </div>

          {/* Testimonial 2 - Closing Rate */}
          <div className="bg-slate-50 p-8 rounded-2xl relative">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-700 mb-6 text-lg">
              "My clients love how quickly I respond now. The AI writes exactly how I would, but faster and more professional. 
              <span className="font-semibold text-blue-600">My closing rate increased 30% since using RealtyClose.</span>"
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=150&h=150&fit=crop&crop=faces" 
                alt="Marcus Rodriguez" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">Marcus Rodriguez</div>
                <div className="text-gray-600 text-sm">Senior Agent, RE/MAX</div>
                <div className="text-gray-500 text-sm">Austin, TX</div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
              +30% Close Rate
            </div>
          </div>

          {/* Testimonial 3 - Team Results */}
          <div className="bg-slate-50 p-8 rounded-2xl relative">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-gray-700 mb-6 text-lg">
              "Deployed RealtyClose across my 12-person team. New agents get up to speed 3x faster and our client experience is consistently excellent. 
              <span className="font-semibold text-blue-600">Saved us $45K in training costs this year.</span>"
            </blockquote>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=150&h=150&fit=crop&crop=faces" 
                alt="Jennifer Chen" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">Jennifer Chen</div>
                <div className="text-gray-600 text-sm">Team Leader, Keller Williams</div>
                <div className="text-gray-500 text-sm">Seattle, WA</div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
              $45K Saved
            </div>
          </div>
        </div>

        {/* Big Result Testimonial */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 text-center mb-16">
          <blockquote className="text-2xl font-medium text-gray-900 mb-6">
            "I was skeptical about AI writing my emails, but RealtyClose gets my voice perfectly. 
            It's like having a personal assistant who knows real estate inside and out."
          </blockquote>
          <div className="flex items-center justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" 
              alt="David Liu" 
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-lg">David Liu</div>
              <div className="text-gray-600">Broker, Century 21</div>
              <div className="text-gray-500 text-sm">Phoenix, AZ</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 inline-block">
            <div className="text-4xl font-bold text-blue-600 mb-2">$180K+</div>
            <div className="text-gray-600">Additional commission earned in first 6 months using RealtyClose</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2,500+</div>
            <div className="text-gray-600">Active Agents</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15K+</div>
            <div className="text-gray-600">Emails Generated Daily</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
}