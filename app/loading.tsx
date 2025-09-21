export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin mx-auto mb-4"></div>
        
        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          Loading RealtyClose
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Please wait while we prepare your experience...
        </p>
      </div>
    </div>
  )
}