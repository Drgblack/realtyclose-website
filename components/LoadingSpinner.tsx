interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'blue' | 'white' | 'slate'
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'blue',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-8 h-8 border-3'
  }

  const colorClasses = {
    blue: 'border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400',
    white: 'border-white/30 border-t-white',
    slate: 'border-slate-200 dark:border-slate-700 border-t-slate-600 dark:border-t-slate-400'
  }

  return (
    <div 
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    />
  )
}