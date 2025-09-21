'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
    dataLayer: any[]
  }
}

// Enhanced Google Analytics component with real estate-specific tracking
export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href
      })

      // Track page engagement time
      const startTime = Date.now()
      
      return () => {
        const engagementTime = Date.now() - startTime
        window.gtag('event', 'page_engagement', {
          event_category: 'engagement',
          value: Math.round(engagementTime / 1000), // in seconds
          page_path: pathname
        })
      }
    }
  }, [pathname, searchParams])

  useEffect(() => {
    // Track scroll depth
    let maxScroll = 0
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        
        // Track milestone percentages
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          window.gtag?.('event', 'scroll', {
            event_category: 'engagement',
            event_label: `${scrollPercent}%`,
            value: scrollPercent
          })
        }
      }
    }

    window.addEventListener('scroll', trackScrollDepth, { passive: true })
    return () => window.removeEventListener('scroll', trackScrollDepth)
  }, [])

  // Track performance metrics
  useEffect(() => {
    // Web Vitals tracking
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(metric => {
          window.gtag?.('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'CLS',
            value: Math.round(metric.value * 1000)
          })
        })

        getFID(metric => {
          window.gtag?.('event', 'web_vitals', {
            event_category: 'performance', 
            event_label: 'FID',
            value: Math.round(metric.value)
          })
        })

        getFCP(metric => {
          window.gtag?.('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'FCP', 
            value: Math.round(metric.value)
          })
        })

        getLCP(metric => {
          window.gtag?.('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'LCP',
            value: Math.round(metric.value)
          })
        })

        getTTFB(metric => {
          window.gtag?.('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'TTFB',
            value: Math.round(metric.value)
          })
        })
      }).catch(error => {
        console.warn('Web Vitals not available:', error)
      })
    }
  }, [])

  return null
}

// Real estate specific tracking functions
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'realtyclose',
      ...parameters
    })
  }
}

export const trackInstallAttempt = (source: string) => {
  trackEvent('rc_install_attempt', {
    event_category: 'conversion',
    event_label: source,
    value: 1
  })
}

export const trackDemoEngagement = (action: string, details?: string) => {
  trackEvent('rc_demo_engagement', {
    event_category: 'engagement',
    event_label: action,
    value: 1,
    custom_parameter_1: details
  })
}

export const trackPricingView = (plan: string) => {
  trackEvent('rc_pricing_view', {
    event_category: 'consideration',
    event_label: plan,
    value: 1
  })
}

export const trackHelpArticleView = (article: string) => {
  trackEvent('rc_help_article_view', {
    event_category: 'support',
    event_label: article,
    value: 1
  })
}

export const trackChatEngagement = (action: string) => {
  trackEvent('rc_chat_engagement', {
    event_category: 'support',
    event_label: action,
    value: 1
  })
}

export const trackEmailSignup = (source: string) => {
  trackEvent('rc_email_signup', {
    event_category: 'conversion',
    event_label: source,
    value: 1
  })
}

export const trackFeatureInteraction = (feature: string, action: string) => {
  trackEvent('rc_feature_interaction', {
    event_category: 'engagement',
    event_label: `${feature}_${action}`,
    value: 1
  })
}

// Enhanced conversion tracking for real estate leads
export const trackLeadGeneration = (leadType: string, source: string, value?: number) => {
  trackEvent('rc_lead_generation', {
    event_category: 'conversion',
    event_label: leadType,
    value: value || 1,
    source: source,
    currency: 'USD'
  })
  
  // Also send to Google Ads if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
      value: value || 1,
      currency: 'USD'
    })
  }
}

// Error tracking
export const trackError = (error: Error, context?: string) => {
  trackEvent('rc_error', {
    event_category: 'error',
    event_label: error.message,
    value: 1,
    context: context || 'unknown',
    stack: error.stack?.substring(0, 500) // Truncate for analytics
  })
}

// Performance timing helper
export const trackTiming = (name: string, startTime: number, category = 'performance') => {
  const duration = Date.now() - startTime
  trackEvent('rc_timing', {
    event_category: category,
    event_label: name,
    value: duration
  })
}