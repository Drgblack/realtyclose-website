export default function ProblemSection() {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #fef2f2 0%, #fce7e7 100%)' }}>
      <div className="max-w-7xl mx-auto container-spacing">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-6 text-balance">
            Real Estate Agents Spend 3+ Hours Daily Writing Emails
          </h2>
          <p className="subtitle text-gray-700 max-w-3xl mx-auto text-balance">
            Every minute you spend crafting the perfect email is a minute you're not selling homes. 
            Here's what's killing your productivity:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 rounded-xl hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">⏱️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Time-Consuming Email Writing</h3>
            <p className="text-gray-600 mb-4">You rewrite the same email 5 times to get the tone right. Meanwhile, competitors are meeting with your potential clients.</p>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-800 text-sm font-medium">💸 Cost: 3 hours/day = $75,000 in lost productivity annually</p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">😰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Email Anxiety & Mistakes</h3>
            <p className="text-gray-600 mb-4">Worried about sounding unprofessional? One poorly worded email can kill a deal or damage your reputation permanently.</p>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-800 text-sm font-medium">💸 Cost: Lost deals from communication errors</p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Language Barriers</h3>
            <p className="text-gray-600 mb-4">Miss out on 40% of potential clients because you can't communicate effectively in their preferred language.</p>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-800 text-sm font-medium">💸 Cost: Losing multilingual markets</p>
            </div>
          </div>
        </div>

        <div className="text-center glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Email Productivity Crisis</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">3.2 hrs</div>
              <div className="text-gray-700">Average time agents spend on email daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">87%</div>
              <div className="text-gray-700">Of agents say email is their #1 time waster</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">23%</div>
              <div className="text-gray-700">Response rate drops after 1 hour delay</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}