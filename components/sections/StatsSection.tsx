export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600 mt-2">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">10K+</div>
            <div className="text-gray-600 mt-2">Emails Drafted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">5</div>
            <div className="text-gray-600 mt-2">Languages Supported</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">10 sec</div>
            <div className="text-gray-600 mt-2">Avg. Draft Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}