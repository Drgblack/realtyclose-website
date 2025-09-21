export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Write Perfect Real Estate Emails in 10 Seconds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple 3-step process that turns hours of email writing into seconds
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Install in Chrome</h3>
            <p className="text-gray-600 mb-6">Add RealtyClose to Chrome in one click. Works instantly with your Gmail - no setup required.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">✅ One-click installation</div>
              <div className="text-sm text-gray-600">✅ Works with existing Gmail</div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Your Context</h3>
            <p className="text-gray-600 mb-6">Choose your situation: first contact, follow-up, listing update, or contract question. Pick your tone and language.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">✅ Context-aware suggestions</div>
              <div className="text-sm text-gray-600">✅ Multiple languages supported</div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Perfect Email</h3>
            <p className="text-gray-600 mb-6">Review the AI-generated email, make any tweaks, and send. Professional, compliant, and perfectly toned every time.</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">✅ Professional tone guaranteed</div>
              <div className="text-sm text-gray-600">✅ Compliance checks included</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg">
            Try It Free - Install Extension
          </button>
          <p className="text-sm text-gray-500 mt-3">No credit card required • Free forever plan available</p>
        </div>
      </div>
    </section>
  );
}