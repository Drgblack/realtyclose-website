import Link from 'next/link'
import { cn } from '../../lib/utils'

interface ShinyCardProps {
  children: React.ReactNode
  href?: string
  gradient?: 'brand' | 'purple' | 'teal' | 'orange'
  padding?: 'sm' | 'md' | 'lg'
  hoverLift?: boolean
  className?: string
  innerClassName?: string
}

const GRADIENTS = {
  brand: 'from-blue-500/80 via-purple-500/80 to-cyan-500/80',
  purple: 'from-purple-500/80 via-pink-500/80 to-red-500/80',
  teal: 'from-teal-500/80 via-cyan-500/80 to-blue-500/80',
  orange: 'from-orange-500/80 via-red-500/80 to-pink-500/80'
}

const PADDING = {
  sm: 'p-4',
  md: 'p-6', 
  lg: 'p-8'
}

export function ShinyCard({
  children,
  href,
  gradient = "brand",
  padding = "md",
  hoverLift = true,
  className,
  innerClassName,
}: ShinyCardProps) {
  const Wrapper: any = href ? Link : "div";
  
  return (
    <div className={cn(
      "group relative rounded-2xl p-[1px] bg-gradient-to-r",
      GRADIENTS[gradient],
      className
    )}>
      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse" />
      
      <Wrapper 
        href={href}
        className={cn(
          "relative block rounded-2xl transition-transform duration-300",
          hoverLift && "group-hover:-translate-y-0.5",
          "bg-white/90 backdrop-blur-[2px]",
          "shadow-[0_6px_20px_-8px_rgba(88,101,242,0.25)]",
          "group-hover:shadow-[0_12px_40px_-12px_rgba(88,101,242,0.35)]",
          PADDING[padding],
          innerClassName
        )}
      >
        {children}
      </Wrapper>
    </div>
  )
}