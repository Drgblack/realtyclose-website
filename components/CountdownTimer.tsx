'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: Date
  className?: string
}

export default function CountdownTimer({ targetDate, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`}>
      <div className="text-center">
        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
        </div>
        <div className="text-xs text-white/80 mt-1">Days</div>
      </div>
      <div className="text-white text-xl">:</div>
      <div className="text-center">
        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</span>
        </div>
        <div className="text-xs text-white/80 mt-1">Hours</div>
      </div>
      <div className="text-white text-xl">:</div>
      <div className="text-center">
        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        </div>
        <div className="text-xs text-white/80 mt-1">Min</div>
      </div>
      <div className="text-white text-xl">:</div>
      <div className="text-center">
        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        </div>
        <div className="text-xs text-white/80 mt-1">Sec</div>
      </div>
    </div>
  )
}