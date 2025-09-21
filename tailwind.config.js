/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#2563eb',
        'brand-hover': '#1d4ed8',
        'brand-light': '#dbeafe',
        'soft-blue': '#f0f9ff',
        'soft-gray': '#f8fafc',
        'muted': '#64748b',
        'glass': 'rgba(255, 255, 255, 0.25)'
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      backdropBlur: {
        'xs': '2px'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out'
      }
    }
  },
  plugins: [],
}