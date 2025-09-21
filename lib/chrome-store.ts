// Chrome Web Store URL - Update this when the extension is published
export const CHROME_STORE_URL = 'https://chrome.google.com/webstore/detail/realtyclose/[EXTENSION-ID]'

// Temporary landing page for pre-launch
export const EXTENSION_LANDING_URL = 'https://realtyclose.com/extension'

export const handleInstallClick = (location: string) => {
  // Analytics tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'rc_install_cta_click', {
      event_category: 'engagement',
      event_label: location
    })
  }

  // Check if Chrome extension is available
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  
  if (isChrome) {
    // For now, redirect to coming soon page until extension is published
    window.open(EXTENSION_LANDING_URL, '_blank')
  } else {
    // Show browser compatibility message
    alert('RealtyClose currently works with Google Chrome. Please install Chrome to use our extension.')
  }
}

export const isExtensionInstalled = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // This will be implemented when the extension is published
    // For now, always return false
    resolve(false)
  })
}